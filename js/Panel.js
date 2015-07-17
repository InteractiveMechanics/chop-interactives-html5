function Panel(bg_canvas, overlay_canvas, pegs) {
	var I = I || {};

	I.bg_canvas = bg_canvas;
	I.overlay_canvas = overlay_canvas;
	I.showSpecialPeg = false;
	I.pegs = pegs;
	I.speed = .25;


	I.splatAll = function() {
		center_pegs.forEach(function(peg) {
	    	peg.activated = true;
	  	});
	};
}