(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            args.setPromise(WinJS.UI.processAll().done(function () {
                console.log('App started.');
                var flyCanvas = new App.FlyCanvas();
                var kinectCanvas = new App.DrawCanvas(flyCanvas);
                var controller = new App.KinectControl(kinectCanvas);
                
                flyCanvas.init();
                kinectCanvas.init();
                controller.getSensor();
            }));
        }
    };

    app.start();
})();
