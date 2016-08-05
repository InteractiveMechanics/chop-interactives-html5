(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            args.setPromise(WinJS.UI.processAll().done(function () {
                console.log('App started.');
                var rollCanvas = new App.RollCanvas();
                var kinectCanvas = new App.DrawCanvas(rollCanvas);
                var controller = new App.KinectControl(kinectCanvas);

                rollCanvas.init();
                kinectCanvas.init();
                controller.getSensor();
            }));
        }
    };

    app.start();
})();
