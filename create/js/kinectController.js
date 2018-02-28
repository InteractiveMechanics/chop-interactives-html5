(function () {
    "use strict";

    var nsKinect = WindowsPreview.Kinect;
    var constants = {
        bodyCount: 6
    };

    var kinectControl = WinJS.Class.define(
      function (canvas) {
          this._canvas = canvas
      },
      {
          init: function (index, sensor) {
              this._index = index;
              this._sensor = sensor;

              this._movementPercentage = .39;
              this._movementPercentageRight = .45;
              this._movementPercentageLeft = .55;

              this._sensorColourFrameDimensions = {};
              this._sensorColourFrameDimensions.width = this._sensor.colorFrameSource.frameDescription.width;
              this._sensorColourFrameDimensions.height = this._sensor.colorFrameSource.frameDescription.height;
              // console.log("Kinect body reader #" + index + " opened.")
          },
          getSensor: function () {
              var that = this;
              var bodyCount = 0;

              this._sensor = nsKinect.KinectSensor.getDefault();
              this._sensor.open();
              // console.log("Kinect sensor opened.");

              this._bodies = new Array(constants.bodyCount);
              this._bodyDrawers = new Array(constants.bodyCount);

              for (bodyCount = 0; bodyCount < constants.bodyCount; bodyCount++) {
                  this.init(bodyCount, this._sensor);
              }

              // We need a timeout so the sensor has time to spool up
              // before we start trying to get data from the Kinect
              setTimeout(function () { that.openReader() }, 2000);
          },
          openReader: function () {
              var that = this;
              this._boundHandler = this._onFrameArrived.bind(this);
              this._reader = this._sensor.bodyFrameSource.openReader();
              this._reader.addEventListener('framearrived', this._boundHandler);

              var isActive = this._sensor.bodyFrameSource.isActive;
              if (!isActive) {
                  // If we're not able to get data from the sensor, let's refresh the page
                  // and try again...
                  // console.log("Kinect sensor isn't active...");
                  WinJS.Navigation.navigate('default.html');
              } else {
                  // console.log("Kinect reader opened.");
                  this._lastKnownTime = new Date().getTime();
                  this._kinectResetTimeout = setTimeout(function () {
                      // console.log("Unable to get frames from Kinect, restart the Kinect sensor.");
                      that.closeReader();
                      that.releaseSensor();
                      that.getSensor();
                  }, 5000);
              }
          },
          closeReader: function () {
              this._reader.removeEventListener('framearrived', this._boundHandler);
              this._reader.close();
              this._reader = null;
          },
          releaseSensor: function () {
              this._sensor.close();
              this._sensor = null;
          },
          _onFrameArrived: function (e) {
              var that = this;
              var frame = e.frameReference.acquireFrame();
              var players = {};
              var i = 0;

              if (frame) {
                  var currentTime = new Date().getTime();
                  if (currentTime - this._lastKnownTime < 3000) {
                      clearTimeout(this._kinectResetTimeout);
                      this._lastKnownTime = new Date().getTime();
                      this._kinectResetTimeout = setTimeout(function () {
                          // console.log("Unable to get frames from Kinect, restart the Kinect sensor.");
                          that.closeReader();
                          that.releaseSensor();
                          that.getSensor();
                      }, 5000);
                  }
                  frame.getAndRefreshBodyData(this._bodies);

                  for (i = 0; i < constants.bodyCount; i++) {
                      if (this._bodies[i].isTracked) {
                          var trackedPlayer = this._getPlayerData(i, this._bodies[i]);
                          if (trackedPlayer) {
                              players[i] = trackedPlayer;
                          }
                      }
                  }
                  this._canvas.draw(players);
                  this._
                  frame.close();
              }
          },
          _compareTime: function () {

          },
          _getPlayerData: function (i, body) {
              //var right = this._getJointPositions(body, 11);
              //var left = this._getJointPositions(body, 7);
              //var spine = this._getJointPositions(body, 1);

              //var zValue = spine[0].z;
              //if (zValue < this.zIndexValue) {
              //    var player = {};

              //    // var shoulderdist = rightshoulder[0]['x'] - leftshoulder[0]['x'];
              //    // var spinedist = spine[0]['y'] - neck[0]['y'];

              //    player['spine'] = {};
              //    player['spine']['pos'] = {};
              //    player['spine']['pos'] = spine[0];
              //    player['spine']['trackingState'] = spine[1];

              //    player['right'] = {};
              //    player['right']['status'] = this._getHandStatus(body, 'right');
              //    player['right']['confidence'] = this._getHandConfidence(body, 'right');
              //    player['right']['pos'] = {};
              //    player['right']['pos'] = right[0];
              //    player['right']['trackingState'] = right[1];
              //    player['right']['pos']['x'] = (((right[0]['x'] - leftshoulder[0]['x']) * 1920) / shoulderdist) * this._movementPercentageRight;
              //    player['right']['pos']['y'] = (((right[0]['y'] - neck[0]['y']) * 1080) / spinedist) * this._movementPercentageRight;

              //    player['left'] = {};
              //    player['left']['status'] = this._getHandStatus(body, 'left');
              //    player['left']['confidence'] = this._getHandConfidence(body, 'left');
              //    player['left']['pos'] = {};
              //    player['left']['pos'] = left[0];
              //    player['left']['trackingState'] = left[1];
              //    player['left']['pos']['x'] = (((left[0]['x'] - leftshoulder[0]['x']) * 1920) / shoulderdist) * this._movementPercentageLeft;
              //    player['left']['pos']['y'] = (((left[0]['y'] - neck[0]['y']) * 1080) / spinedist) * this._movementPercentageLeft;

              //    return (player);
              //} else {
              //    return null;
              //}

              var right = this._getJointPositions(body, 11);
              var left = this._getJointPositions(body, 7);
              var spine = this._getJointPositions(body, 20);
              var leftshoulder = this._getJointPositions(body, 4);
              var rightshoulder = this._getJointPositions(body, 8);
              var neck = this._getJointPositions(body, 3);

              var zValue = spine[0].z;
              if (zValue < this.zIndexValue) {
                  var player = {};
                  player['spine'] = {};
                  player['spine']['pos'] = {};
                  player['spine']['pos'] = spine[0];
                  player['spine']['trackingState'] = spine[1];

                  player['neck'] = {};
                  player['neck']['pos'] = {};
                  player['neck']['pos'] = neck[0];
                  player['neck']['trackingState'] = neck[1];

                  player['rightshoulder'] = {};
                  player['rightshoulder']['pos'] = {};
                  player['rightshoulder']['pos'] = rightshoulder[0];
                  player['rightshoulder']['trackingState'] = rightshoulder[1];

                  player['leftshoulder'] = {};
                  player['leftshoulder']['pos'] = {};
                  player['leftshoulder']['pos'] = leftshoulder[0];
                  player['leftshoulder']['trackingState'] = leftshoulder[1];

                  var shoulderdist2 = rightshoulder[0]['x'] - leftshoulder[0]['x'];
                  //console.log(shoulderdist2);
                  var shoulderdist = 180;
                  var spinedist = spine[0]['y'] - neck[0]['y'];

                  player['right'] = {};
                  player['right']['status'] = this._getHandStatus(body, 'right');
                  player['right']['confidence'] = this._getHandConfidence(body, 'right');
                  player['right']['pos'] = {};
                  player['right']['pos']['x'] = (((right[0]['x'] - spine[0]['x']+(shoulderdist / 2)) * 960) / shoulderdist);
                  //console.log(player['right']['pos']['x']);

                  if (player['right']['pos']['x'] < 0) {
                      player['right']['pos']['x'] = 30;
                  }

                  if (player['right']['pos']['x'] > 1920) {
                      player['right']['pos']['x'] = 1890;
                  }

                  player['right']['pos']['y'] = (((right[0]['y'] - neck[0]['y']) * 1080) / spinedist) * this._movementPercentageRight;

                  if (player['right']['pos']['y'] < 0) {
                      player['right']['pos']['y'] = 20;
                  }

                  if (player['right']['pos']['y'] > 1080) {
                      player['right']['pos']['y'] = 1050;
                  }

                  player['right']['trackingState'] = right[1];

                  player['left'] = {};
                  player['left']['status'] = this._getHandStatus(body, 'left');
                  player['left']['confidence'] = this._getHandConfidence(body, 'left');
                  player['left']['pos'] = {};
                  player['left']['pos']['x'] = (((left[0]['x'] - (spine[0]['x']+(shoulderdist/2))) * 960) / shoulderdist)+1920;
                  //console.log(player['left']['pos']['x']);

                  if (player['left']['pos']['x'] < 0) {
                      player['left']['pos']['x'] = 30;
                  }

                  if (player['left']['pos']['x'] > 1920) {
                      player['left']['pos']['x'] = 1890;
                  }

                  player['left']['pos']['y'] = (((left[0]['y'] - neck[0]['y']) * 1080) / spinedist) * this._movementPercentageLeft;

                  if (player['left']['pos']['y'] < 0) {
                      player['left']['pos']['y'] = 20;
                  }

                  if (player['left']['pos']['y'] > 1080) {
                      player['left']['pos']['y'] = 1050;
                  }

                  player['left']['trackingState'] = left[1];



                  return (player);
              } else {
                  return null;
              }

              
          },
          _getHandStatus: function (body, hand) {
              var handStatus;
              var whichHand;

              if (hand === 'right') {
                  whichHand = body.handRightState;
              } else if (hand === 'left') {
                  whichHand = body.handLeftState;
              }
              if (body.isTracked) {
                  switch (whichHand) {
                      case 1: // not tracked
                      case 2: // open
                          handStatus = 'open';
                          break;
                      case 3: // closed
                          handStatus = 'closed';
                          break;
                      case 4: // lasso
                          handStatus = 'lasso';
                          break;
                      case 0: // unknown
                      default:
                          break;
                  }
              }
              return (handStatus);
          },
          _getHandConfidence: function (body, hand) {
              var confidence;

              if (hand === 'right') {
                  confidence = body.handRightConfidence;
              } else if (hand === 'left') {
                  confidence = body.handLeftConfidence;
              }
              return (confidence);
          },
          _getJointPositions: function (body, jointNumber) {
              var that = this;
              var jointPositions = {};
              var trackingStates = {};
              var depths = {};

              Iterable.forEach(body.joints,
                function (keyValuePair) {
                    var jointType = keyValuePair.key;
                    var joint = keyValuePair.value;

                    var isTracked = joint.trackingState === nsKinect.TrackingState.tracked;
                    var mappedPoint = that._mapPointToCanvasSpace(joint.position);

                    if (joint.jointType === jointNumber) {
                        jointPositions = mappedPoint;
                        trackingStates = joint.trackingState;
                    }
                }
              );
              return [jointPositions, trackingStates];
          },
          _mapPointToCanvasSpace: function (cameraSpacePoint) {
              var colourPoint = this._sensor.coordinateMapper.mapCameraPointToColorSpace(cameraSpacePoint);

              colourPoint.x *= (1920 / this._sensorColourFrameDimensions.width);
              colourPoint.y *= (1080 / this._sensorColourFrameDimensions.height);


              //return (colourPoint);
              return {
                  x: colourPoint.x,
                  y: colourPoint.y,
                  z: cameraSpacePoint.z
              };
          },
          _boundHandler: null,
          _clearCanvas: null,
          _bodyDrawerFactory: null,
          _sensor: null,
          _index: -1,
          _sensorColourFrameDimensions: null,
          _reader: null,
          _bodyDrawers: null,
          _bodies: null,
          _movementPercentage: .5,
          _movementPercentageRight: .5,
          _movementPercentageLeft: .5,
          zIndexValue: 3,

          // Because sometimes we don't get the Kinect frames...
          _kinectResetTimeout: null,
          _lastKnownTime: null
      }
    );

    WinJS.Namespace.define('App', {
        KinectControl: kinectControl
    });

})();