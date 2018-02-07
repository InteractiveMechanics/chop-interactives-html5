(function () {
    "use strict";

    var nsKinect = WindowsPreview.Kinect;
    var nsKinectFace = Microsoft.Kinect.Face;
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
              //console.log(this._sensor.colorFrameSource);
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
              this._faces = new Array(constants.bodyCount);
              this._faceSources = new Array(constants.bodyCount);
              this._faceReaders = new Array(constants.bodyCount);
              this._boundHandlerFaces = new Array(constants.bodyCount);

              this._buffer = new ArrayBuffer(10000000);
              this._pixelData = new Uint8Array(2332800);
              this._pixelArray = new Array(2073600);

              //this._buffer = new ArrayBuffer(30000000)
              this._pixelData = new Uint32Array(this._buffer, 0, 2073600);
              //console.log(this._pixelData);

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

              this._boundHandlerColor = this._onColorFrameArrived.bind(this);
              this._colorReader = this._sensor.colorFrameSource.openReader();
              this._colorReader.addEventListener('framearrived', this._boundHandlerColor);

              
              for (var i = 0; i < constants.bodyCount; i++) {
                  this._boundHandlerFaces[i] = this._onFaceFrameArrived.bind(this);
                  this._faceSources[i] = nsKinectFace.FaceFrameSource(this._sensor, 0, nsKinectFace.FaceFrameFeatures.faceEngagement
                                                                                        | nsKinectFace.FaceFrameFeatures.boundingBoxInColorSpace
                                                                                        | nsKinectFace.FaceFrameFeatures.rotationOrientation
                                                                                        | nsKinectFace.FaceFrameFeatures.rightEyeClosed
                                                                                        | nsKinectFace.FaceFrameFeatures.leftEyeClosed
                                                                                        | nsKinectFace.FaceFrameFeatures.mouthOpen
                                                                                        | nsKinectFace.FaceFrameFeatures.glasses
                                                                                        | nsKinectFace.FaceFrameFeatures.faceEngagement
                                                                                        );
                  this._faceReaders[i] = this._faceSources[i].openReader();
                  this._faceReaders[i].addEventListener('framearrived', this._boundHandlerFaces[i]);
              }


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

              for (var i = 0; i < constants.bodyCount; i++) {
                  this._faceReaders[i].removeEventListener('framearrived', this._boundHandlerFace[i]);
                  this._faceReaders[i].close();
                  this._faceReaders[i] = null;
              }
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
                          if (!this._faceSources[i].isTrackingIdValid) {
                              this._faceSources[i].trackingId = this._bodies[i].trackingId;
                          }
                          var trackedPlayer = this._getPlayerData(i, this._bodies[i]);
                          if (trackedPlayer) {
                              players[i] = trackedPlayer;
                              players[i].faceFrame = this._faces[i];
                              //console.log(players[i].faceFrame);
                          }
                      }
                  }
                  this._canvas.draw(players);
                  frame.close();
              }
          },
          _onColorFrameArrived: function (e) {
              var that = this;
              var frame = e.frameReference.acquireFrame();
              if (frame) {
                  
                  //frame.copyRawFrameDataToArray(pixelData);
                  //if (frame.RawColorImageFormat == WindowsPreview.Kinect.ColorImageFormat.rgba) {
                      
                  //}

                  //else {
                  //    frame.copyConvertedFrameDataToArray(pixelData, WindowsPreview.Kinect.ColorImageFormat.rgba);
                  //}
                  //console.log(frame);
                  //console.log(this._pixelData);
                  //frame.copyRawFrameDataToArray(this._pixelData);
                  //console.log(this._pixelData);
                  frame.close();
              }
          },
          _onFaceFrameArrived: function (e) {
              var that = this;
              var frame = e.frameReference.acquireFrame();
              if (frame) {
                  var result = frame.faceFrameResult;
                  
                  if (result) {
                      for (var i = 0; i < constants.bodyCount; i++) {
                          if (frame.trackingId == this._bodies[i].trackingId) {
                              this._faces[i] = result;
                              //console.log(this._faces[i])
                          }
                      }
                  }
                  
              }
              

              
              //has been throwing error -- needs review
              //frame.close();
              
          },
          _compareTime: function () {

          },
          _getPlayerData: function (i, body) {
              var right = this._getJointPositions(body, 11);
              var left = this._getJointPositions(body, 7);
              var spine = this._getJointPositions(body, 1);
              var neck = this._getJointPositions(body, 3);

              var spinedist = spine[0]['y'] - neck[0]['y'];

              var zValue = spine[0].z;
              if (zValue < this.zIndexValue) {
                  var player = {};
                  player['right'] = {};
                  player['right']['status'] = this._getHandStatus(body, 'right');
                  player['right']['confidence'] = this._getHandConfidence(body, 'right');
                  player['right']['pos'] = {};
                  player['right']['pos'] = right[0];
                  player['right']['trackingState'] = right[1];
                  player['right']['pos']['y'] = (((right[0]['y'] - neck[0]['y']) * 1080) / spinedist) * 0.5;

                  player['left'] = {};
                  player['left']['status'] = this._getHandStatus(body, 'left');
                  player['left']['confidence'] = this._getHandConfidence(body, 'left');
                  player['left']['pos'] = {};
                  player['left']['pos'] = left[0];
                  player['left']['trackingState'] = left[1];
                  player['left']['pos']['y'] = (((left[0]['y'] - neck[0]['y']) * 1080) / spinedist) * 0.5;


                  player['spine'] = {};
                  player['spine']['pos'] = {};
                  player['spine']['pos'] = spine[0];
                  player['spine']['trackingState'] = spine[1];

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
          _boundHandlerFace: null,
          _boundHandlerColor: null,
          _clearCanvas: null,
          _bodyDrawerFactory: null,
          _sensor: null,
          _index: -1,
          _sensorColourFrameDimensions: null,
          _reader: null,
          _colorReader: null,
          _faceSources: null,
          _faceReaders: null,
          _faces: null,
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