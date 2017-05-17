(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            args.setPromise(WinJS.UI.processAll().done(function () {
                console.log('App started.');
                var climbCanvas = new App.ClimbCanvas();
                var kinectCanvas = new App.DrawCanvas(climbCanvas);
                var controller = new App.KinectControl(kinectCanvas);

                climbCanvas.init();
                kinectCanvas.init();
                controller.getSensor();
            }));
        }
    };

    
    document.addEventListener('msvisibilitychange', function () {

        if (document.visibilityState == 'hidden') {
            window.close();
        }
    });

    app.start();
})();
