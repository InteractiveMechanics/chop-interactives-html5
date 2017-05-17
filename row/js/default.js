(function () {

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            args.setPromise(WinJS.UI.processAll().done(function () {
                console.log('App started.');
                var rowCanvas = new App.RowCanvas();
                var kinectCanvas = new App.DrawCanvas(rowCanvas);
                var controller = new App.KinectControl(kinectCanvas);
                
                rowCanvas.init();
                kinectCanvas.init();
                controller.getSensor();
            }));
        }
    };

    app.start();
})();
