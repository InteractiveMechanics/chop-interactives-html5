function Plane(){
	this.p 					= {x:100,y:100}; // position
	this.v 					= {x:0,y:0}; 	// velocity
	this.mass 				= 1;
	this.radius				= 15;
	this.width				= 100;
	this.height 			= 100;
	this.isActive 			= false;
	this.b 					= 0.90;  		// energy loss factor from wall bounce.
	this.G 					= .23; 			// universal gravitational constant.
	this.drag 				= .99;
	this.offScreenCounter 	= 0;


	this.move = function() {
		if(this.isActive) {
			this.v.x *= this.drag;
          	this.v.y *= this.drag;

            this.v.y += this.G;

            this.p.x += this.v.x;
            this.p.y += this.v.y;
		}
	};

	this.update = function() {
		/*if(this.p.x - 2*this.radius > document.getElementById('example').width) {
			this.p.x = document.getElementById('example').width - 2*this.radius;
	  		this.v.x = -this.b*this.v.x;
	  	}

	  	if(this.p.x  < 0) {
	  		this.p.x = 0;
	  		this.v.x = -this.b*this.v.x;
	  	}

	  	if(this.p.y - 2*this.radius > document.getElementById('example').height) {
	  		this.p.y = document.getElementById('example').height - 2*this.radius;
	  		this.v.y = -this.b*this.v.y;
	  	}

	  	if(this.p.y < 0) {
	  		this.p.y = 0;
	  		this.v.y = -this.b*this.v.y;
	  	}
	  	if(false/*add reset condition if desired ) {
	  		/*this.reset();
	  	}*/

	  	if(this.offScreenCounter < 2) {
		  	if(this.p.x > canvas.width) {
		  		this.p.x = 0;
		  		this.offScreenCounter += 1;
		  	}

		  	if(this.p.x < 0) {
		  		this.p.x = canvas.width;
		  		this.offScreenCounter += 1;
		  	}

		  	if(this.p.y > canvas.height) {
		  		this.p.y = 0;
		  		this.offScreenCounter += 1;
		  	}

		  	if(this.p.y < 0) {
		  		this.p.y = canvas.height;
		  		this.offScreenCounter += 1;
		  	}
		}
	};
	this.reset = function (){
		this.p = {x:100,y:100};
	  	this.v = {x:0,y:0};
	}

	this.draw = function() {

		if(this.offScreenCounter < 2) {
			context.clearRect(0, 0, canvas.width, canvas.height);
			//context.save();
			context.fillStyle = "rgb(255, 0, 255)";

			// this draws the ball
			context.beginPath();
			context.arc(this.p.x, this.p.y, this.radius, 0, Math.PI*2, true);
			context.closePath();
			context.fill();
			//context.restore();
		} else {
			context.clearRect(0, 0, canvas.width, canvas.height);
		}
	}
}