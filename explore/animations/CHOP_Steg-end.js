(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.steg_tail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgKgBQAHgBADACQAGAAAAAH");
	this.shape.setTransform(-0.5,34.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AgIgDQAHgBADABQAGADAAAFg");
	this.shape_1.setTransform(-0.7,34.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLgBQAFABAJAAQAJAAAAAH");
	this.shape_2.setTransform(-8.4,31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AgLgDIAOABQAJABAAAFg");
	this.shape_3.setTransform(-8.4,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgJAAQANgCACAH");
	this.shape_4.setTransform(-14.3,29.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgHgBQANgDACAHg");
	this.shape_5.setTransform(-14.5,29.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgGgEQAGgDAHAAQABAHgDAH");
	this.shape_6.setTransform(-20.8,26.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AgGgDQAGgEAHAAQABAHgDAHg");
	this.shape_7.setTransform(-20.8,26.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLAKQgGgIAEgDQAEgFAJAAQAGAAAEAGQADACADAI");
	this.shape_8.setTransform(-27.9,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AgMAJQgFgIAEgEQAEgEAJAAQAGAAAEAGIAGAKg");
	this.shape_9.setTransform(-27.9,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgJAAQgDgOAOAHQAPAGgKAN");
	this.shape_10.setTransform(-35.3,21.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AAFALIgBgBIgNgKQgDgPAOAHQAPAGgKANIgCAAIAAAAg");
	this.shape_11.setTransform(-35.3,21.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgHACQgFgDACgHQAKgBACAAQAGACADAHQADAHgHACQgGADgDgI");
	this.shape_12.setTransform(-42.2,19.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AgCAEIgFgCQgFgDACgHIAMgBQAGACADAHQADAHgHACIgDABQgEAAgCgGg");
	this.shape_13.setTransform(-42.2,19.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgKABQgIgBAKgGQAJgGAHAEQAJAGgDAHQgDAKgKgG");
	this.shape_14.setTransform(-49.5,17);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AABAJIgLgIQgIgBAKgGQAJgGAHAEQAJAGgDAHQgCAGgEAAQgDAAgEgCg");
	this.shape_15.setTransform(-49.5,17);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgGAJQgOgDAGgGQAGgHAIAAQAJgBAFAGQAGAFgKAE");
	this.shape_16.setTransform(-56.5,14.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AgOAAQAGgHAIAAQAJgBAFAGQAGAFgKAEIgQACQgOgDAGgGg");
	this.shape_17.setTransform(-56.5,14.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AASAFQAAAGgFAJQAAADAAAMQABAKgEAEQgFAIgFgCQgBgBgKgHQgFgEgCgBQgDgCgGABQAAAAgHADQgDACgEgHQgHgMAOgZQgGgDADgIIABgMQAIAEAJACQALACAGgDQAEgCAFgJQAGgKADgCQASgQAGABQAJADgIAIQgLAKgCABQgOANAAAOQABACABADQACADAAACg");
	this.shape_18.setTransform(59.4,51.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AAAA3IgLgIIgHgFQgDgCgGABIgHADQgDACgEgHQgHgMAOgZQgGgDADgIIABgMQAIAEAJACQALACAGgDQAEgCAFgJQAGgKADgCQASgQAGABQAJADgIAIIgNALQgOANAAAOIACAFQACADAAACQAAAGgFAJIAAAPQABAKgEAEQgEAGgFAAIgBAAg");
	this.shape_19.setTransform(59.4,51.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABGhTQhBABg9APQgVAFgQAEQgdAIAAABIgVANQgEACgKAUQgEAJABAFQACACAIAFQAQALAhASQAEADAGAHQAGAGAEADQADACAYAJQAhAKAZADQAVADAJABQASABAMgDQALgEANgQQAQgUAFgEQACgCAJgDQAHgEADgDQADgEABgJQABgKABgCQACgKAJgPQAKgRACgIQAGgSgIgIQgGgHgUAAg");
	this.shape_20.setTransform(50.3,33.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AAiBTIgegEQgZgDghgKQgYgJgDgCIgKgJIgKgKQghgSgQgLQgIgFgCgCQgBgFAEgJQAKgUAEgCIAVgNQAAgBAdgIIAlgJQA9gPBBgBIA9AAQAUAAAGAHQAIAIgGASQgCAIgKARQgJAPgCAKIgCAMQgBAJgDAEQgDADgHAEIgLAFQgFAEgQAUQgNAQgLAEQgJADgOAAIgHgBg");
	this.shape_21.setTransform(50.3,33.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgJgIQAAAHAIAFQAEAGAIABIAAgGQgEgCgCgDQgCgDgCgDIADgDg");
	this.shape_22.setTransform(78.8,59.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AgCADQgHgEgBgHIANgBIgCADIAEAGQACADAEABIAAAGQgIAAgFgHg");
	this.shape_23.setTransform(78.8,59.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgJgCQACABABAAQAFALAKABQgEgGgCgDQgDgEACgFg");
	this.shape_24.setTransform(73.1,59.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("AgGgCIgCgCIAKgFQgCAGADADIAGAKQgKgCgFgKg");
	this.shape_25.setTransform(73,59.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMgIQgBAIAJAFQAHAGAIgBQAAgBgIgIQgDgDAAgHg");
	this.shape_26.setTransform(67.3,58.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF3BB").s().p("AgDAFQgJgFABgIIALgBQAAAHAEADIAIAJIgDAAQgGAAgGgFg");
	this.shape_27.setTransform(67.2,58.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLgKQACAIAJAEQABADANAGQAAgFgIgGQgGgHAAgEg");
	this.shape_28.setTransform(61,58.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF3BB").s().p("AgBADQgJgEgCgIIALgBQAAAEAGAGQAIAGAAAGIgOgJg");
	this.shape_29.setTransform(61.1,58.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMgEQAEAFAHAGQAIAJAGgBQACgHgJgLQgIgMgGABg");
	this.shape_30.setTransform(54.8,57.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFF3BB").s().p("AgBAHQgHgGgEgFIAEgKQAGgBAIAMQAJALgCAHIgCAAQgFAAgHgIg");
	this.shape_31.setTransform(54.8,57.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgJgJQADAEAEAMQADALAKgCQABgEgDgEQgGgFAAgBQgCgCAAgGQgBgHAAgDQAAAAgCAAg");
	this.shape_32.setTransform(48.3,55.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFF3BB").s().p("AgDAHQgEgMgDgEIAHgHIADAAIAAAKQAAAGACACIAGAGQADAEgBAEIgDABQgHAAgDgKg");
	this.shape_33.setTransform(48.4,55.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgNgGQABAGAKAKQAJAMAHAAQABgFgFgGQgIgKAAgBQgCgEAAgEQAAgDAAgIQgEgCgHABg");
	this.shape_34.setTransform(42.5,54.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFF3BB").s().p("AgCAKQgKgKgBgGIACgOQAHgBAEACIAAALQAAAEACAEIAIALQAFAGgBAFQgHAAgJgMg");
	this.shape_35.setTransform(42.5,54.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgOgPQgBAKALANQAKAPAKgBQAAgEgGgIQgFgIgBgCQAAgKgBgEQgBgIgIABg");
	this.shape_36.setTransform(35.3,53.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFF3BB").s().p("AgEAIQgLgNABgKIAIgGQAIgBABAIIABAOQABACAFAIQAGAIAAAEIgBAAQgKAAgJgOg");
	this.shape_37.setTransform(35.3,53.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgJgPQgCALAHALQAFAOAKgBQAAgEgEgGQgGgIAAgCQAAAAABgKQABgGgDgCg");
	this.shape_38.setTransform(28.2,52.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFF3BB").s().p("AgEAGQgHgKACgLIAJgEQADADgBAGIgBAKQAAACAGAHQAEAHAAAEIgBAAQgKAAgEgOg");
	this.shape_39.setTransform(28.2,52.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgOgVQAAAUAGAKQAIARAPgEQAAgEgHgGQgHgGgBgDQAAgCAAgKQAAgJgEgCg");
	this.shape_40.setTransform(22.2,51.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFF3BB").s().p("AgIAIQgGgKAAgUIAKACQAEABAAAKQAAAJAAACQABAEAHAGQAHAFAAAFIgFABQgMAAgGgPg");
	this.shape_41.setTransform(22.2,51.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAagoQALABgGAZQgDALAAADQgBADACAKQAEAXgLAEQgEABgJgCQgJgDgEABQgKADgDABQgGABgDgJQgCgGADgIQAEgIAGgBQAAgFgGgEQgHgDgCgCQADgDAIgBIgCgIQAGAEAIAAQAHAAAFgEQAAAAAJgOQAHgLAFABg");
	this.shape_42.setTransform(81.4,54.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFF3BB").s().p("AgbAhQgCgGADgIQAEgIAGgBQAAgFgGgEIgJgFQADgDAIgBIgCgIQAGAEAIAAQAIAAAEgEIAJgOQAHgLAFABQALABgGAZIgDAOQgBADACAKQAEAXgLAEQgEABgJgCQgIgDgFABIgNAEIgCAAQgEAAgDgIg");
	this.shape_43.setTransform(81.5,54.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgSgMQAQgFACgBQAAgCACgFQACgGACgCQAFgHAGAAQAFABALACQABAIgIAIQgKAKgCAEIADAKQgBAEgCAKQAJAEgBAKQgBAJgHABQgDAAgJgDQgIgDgCAAQgIABgEAAQgIAAgEgFQgCgCAIgPQAIgOgKgHQgCgCAMgDg");
	this.shape_44.setTransform(76.5,53.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFF3BB").s().p("AACAmIgKgDIgMABQgIAAgEgFQgCgCAIgPQAIgOgKgHQgCgCAMgDQAQgFACgBQAAgCACgFIAEgIQAFgHAGAAIAQADQABAIgIAIQgKAKgCAEIADAKIgDAOQAJAEgBAKQgBAJgHABIgBAAIgLgDg");
	this.shape_45.setTransform(76.5,53.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAQgeQAGgPAIAAQAIAAgFATQgCAGgJAOQgHAKgBAKQAAABACAOQACAKgCADQgEAFgGgCQgGgCAAgGQgCAAgKAFQgJAEgGgDQgBgKAAgGQAGgMAAgBQABgFgHgGQgGgEAAgFQALgDAEABIAEAAQAGAIAKgKQALgJAEgLg");
	this.shape_46.setTransform(70.8,53);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFF3BB").s().p("AAGAtQgGgCAAgGQgCAAgKAFQgJAEgGgDIgBgQIAGgNQABgFgHgGQgGgEAAgFQALgDAEABIAEAAQAGAIAKgKQALgJAEgLQAGgPAIAAQAIAAgFATQgCAGgJAOQgHAKgBAKIACAPQACAKgCADQgDAEgEAAIgDgBg");
	this.shape_47.setTransform(70.8,53);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgbgCIAAgGQAQAEAMgUQAQgVANgBQAUgBgRAVQgVAXgCADQgCAFACAOQACANgCAGQgEAKgGgBQgHgFgHAAIgQAEQgHACgDgLQgCgHAHgJQAHgJgBgDg");
	this.shape_48.setTransform(65.5,52.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFF3BB").s().p("AAAAvQgHgFgHAAIgQAEQgHACgDgLQgCgHAHgJQAHgJgBgDIACgLIAAgGQAQAEAMgUQAQgVANgBQAUgBgRAVQgVAXgCADQgCAFACAOQACANgCAGQgEAJgFAAIgBAAg");
	this.shape_49.setTransform(65.5,52.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AANARIgDAOQgCAGAAALQgBAJgHACQgEABgFgDQgHgFgCAAQgNAAgDgBQgKgEABgEQADgIACgHQADgKABgFQAEgHAGgEQgRgLAAgEQABgGAKAAQAGAAAKAAQAMgCAIgKQARgSACgBQAKgHAAAAQAHgEACAIQACAEgHAHQgIAHgCACQgGAJgDAQQgDASgDAGQgBABAAAAQgBAAAAgBIABgBg");
	this.shape_50.setTransform(53.4,49.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFF3BB").s().p("AgJA5IgJgFQgNAAgDgBQgKgEABgEIAFgPIAEgPQAEgHAGgEQgRgLAAgEQABgGAKAAIAQAAQAMgCAIgKIATgTIAKgHQAHgEACAIQACAEgHAHIgKAJQgGAJgDAQQgDASgDAGIgBABIAAAAIgBAAIAAAAIAAgBIABgBIAAACIAAgCIgBABIAAABIAAAAIABAAIAAAAIgDAOQgCAGAAALQgBAJgHACIgCAAQgEAAgDgCg");
	this.shape_51.setTransform(53.4,49.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAqgiQgEAFgIAHQgIAHgDAEQgIALABAKQABAQgIATQgGAUgHgMQgHgLgSgBQgRgCACAEQgIgOAOgYQAOgUgNgMQAFgEANABQAPABAEgCQAEgDAKgIQAKgJAGgCQASgHAGAGQAGAFgOAPg");
	this.shape_52.setTransform(47.2,48.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFF3BB").s().p("AgIA1QgHgLgSgBQgRgCACAEQgIgOAOgYQAOgUgNgMQAFgEANABQAPABAEgCQAEgDAKgIQAKgJAGgCQASgHAGAGQAGAFgOAPIgMAMQgIAHgDAEQgIALABAKQABAQgIATQgFANgCAAQgDAAgDgFg");
	this.shape_53.setTransform(47.2,48.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAyg9QgKgEgJAJQgJALgFADQgGAEgeABQgbAAABAHIAPAIQADAGAFAJQADAGgGAHQgDAFgMAFQgKAGgDAFQgEAKAFAKQAEAJAIACQAEABAGgCQAGgBAEAAQADABAEADQAFADACAAQAQADACgXQACgQgGgVQgCgIACgEQACgFAKgGQABgBAOgHQAJgEAEgGQAHgIABgGQABgJgHgDg");
	this.shape_54.setTransform(40.6,46.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFF3BB").s().p("AgGA/QgCAAgFgDQgEgDgDgBQgEAAgGABQgGACgEgBQgIgCgEgJQgFgKAEgKQADgFAKgGQAMgFADgFQAGgHgDgGIgIgPIgPgIQgBgHAbAAQAegBAGgEQAFgDAJgLQAJgJAKAEQAHADgBAJQgBAGgHAIQgEAGgJAEIgPAIQgKAGgCAFQgCAEACAIQAGAVgCAQQgCAUgMAAIgEAAg");
	this.shape_55.setTransform(40.6,46.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgsgeQgEAFAJAKQALAKgEAHQgCADgIAFQgIAFgCADQgEAHABAPQgDAPABADQACAFAQAAQACAAAIgDQAHgCAEABQAEABAEAEQAEADAEAAQAEgXADgMQAFgVAGgLQAFgIAPgPQAPgPAEgJQAKgVgRACQgPABgLAMQgNANgNACQgTgBgOAB");
	this.shape_56.setTransform(34.3,44.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFF3BB").s().p("AgKBAQgEgEgEgBQgEgBgHACIgKADQgQAAgCgFQgBgDADgPQgBgPAEgHQACgDAIgFQAIgFACgDQAEgHgLgKQgJgKAEgFIAIgHIgCAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAOgBATABQANgCANgNQALgMAPgBQARgCgKAVQgEAJgPAPQgPAPgFAIQgGALgFAVIgHAjQgEAAgEgDg");
	this.shape_57.setTransform(34.3,44.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Aggg0QgNgJgGALIgFAHQgFAHALAHQAOAIABAEQADAGgGAJQgIAIgCAEQgMAXgBALQgDATAVADQACAAAIgBQAGAAAEABQACAAAHAEQAGAEACAAQAIAAAEgfQABgbACgLQADgQARgLQAcgUAFgQQAFgSgRAEQgMACgNAKQgMALgHAFQgJAJgLgDQgMgJgGgFg");
	this.shape_58.setTransform(28,42.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFF3BB").s().p("AgOBGIgJgEQgEgBgGAAIgKABQgVgDADgTQABgLAMgXIAKgMQAGgJgDgGQgBgEgOgIQgLgHAFgHIAFgHQAGgLANAJIASAOQALADAJgJIATgQQANgKAMgCQARgEgFASQgFAQgcAUQgRALgDAQQgCALgBAbQgEAfgIAAQgCAAgGgEg");
	this.shape_59.setTransform(28,42.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAcg/QgJAMgGAGQgKAMgGACQgHACgPgIQgOgHgHAEIgHAMQgCASAMACQAHALgOAQQgQATAAAMQABAOAHABQAEABAOgCQAKABAHAHQAHAIAFABQALAFAEgLQADgGAAgOQABgNgBgHQAAgCgEgIQgDgHAAgBQAAgIALgEQAOgFACAAQAFgEAFgKQACgFAFgKQADgGAMgNQAJgMgCgJQgEgSgOAIQgJAEgLAMg");
	this.shape_60.setTransform(20.8,39.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFF3BB").s().p("AgLBRQgFgBgHgIQgHgHgKgBQgOACgEgBQgHgBgBgOQAAgMAQgTQAOgQgHgLQgMgCACgSIAHgMQAHgEAOAHQAPAIAHgCQAGgCAKgMQAGgGAJgMQALgMAJgEQAOgIAEASQACAJgJAMIgPATIgHAPQgFAKgFAEIgQAFQgLAEAAAIIADAIIAEAKQABAHgBANQAAAOgDAGQgDAIgFAAIgHgCg");
	this.shape_61.setTransform(20.8,39.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhaAAQgXAUAoAQQAgAMAbABIAaAGQASADAJgFQAMgHAFgRQAIgWADgFQAGgGAQgNQAMgNgCgNQgCgOgRACQgVAFgIACQgIACgaAEQgTAEgMAEQgKADgQAJQgSAJgHADQgQAHgEADg");
	this.shape_62.setTransform(75.3,42.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFF3BB").s().p("AAMA3IgagGQgbgBgggMQgogQAXgUIAFAAQAEgDAQgHQAHgDASgJQAQgJAKgDQAMgEATgEIAigGIAdgHQARgCACAOQACANgMANQgQANgGAGQgDAFgIAWQgFARgMAHQgGADgIAAIgNgBg");
	this.shape_63.setTransform(75.3,42.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgHAGQAHAQAOgBQAAgEgEgHQgFgHgBgDQAAgBAAgJQAAgIgDgDIgNAAQgFANAKAOg");
	this.shape_64.setTransform(14.3,49.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFF3BB").s().p("AgHAGQgKgOAFgNIANAAQADADAAAIIAAAKQABADAFAHQAEAHAAAEIAAABQgOAAgHgQg");
	this.shape_65.setTransform(14.3,49.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgQgaQAAALAMAUQAKAWAKAAQABgFgGgIQgIgLgBgDQgBAAgBgOQAAgKgFgCg");
	this.shape_66.setTransform(7.9,47.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFF3BB").s().p("AgEAFQgMgUAAgLIALAAQAFACAAAKIACAOIAJAOQAGAIgBAFIAAAAQgKAAgKgWg");
	this.shape_67.setTransform(7.9,47.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgzgRQgBADADADQADAEAAADQAAAEgCADQgBACgDAFQgCAGgHAJQgIAJgCAFQgNAZAVAFQALADAVACQANAJABAAQAGACAHgJQAEgGAAgKQABgFAAgOQgBgMAAgHQAAgLAEgGQACgEAJgEQAIgHACgEQAKAAAMgQQAHgIALgPQAIgHACgEQAEgGgFgFQgDgEgLgDQgKgCgFACQgKAEgMAVQgLAVgLAFQgIAEgUgHQgVgHgKABQgDAGADAFg");
	this.shape_68.setTransform(15,37.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFF3BB").s().p("AgRBTIgOgJQgVgCgLgDQgVgFANgZQACgFAIgJQAHgJACgGIAEgHQACgDAAgEQAAgDgDgEQgDgDABgDIgHgMQgDgFADgGQAKgBAVAHQAUAHAIgEQALgFALgVQAMgVAKgEQAFgCAKACQALADADAEQAFAFgEAGQgCAEgIAHIgSAXQgMAQgKAAQgCAEgIAHQgJAEgCAEQgEAGAAALIABATIgBATQAAAKgEAGQgFAIgGAAIgCgBg");
	this.shape_69.setTransform(15,37.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhDgkIgGACQgCAJAGAJQAHAKAAAGQABAFgFALQgDAGgGAKQgKAbAIAIQADACAPAAQAMABACALQASAPAKgSQAFgKADgaQAAgNABgIQABgOAGgEQADgDAMAAQALAAAGgHQACgDAFgKQADgHAGgGQAVgRAGgHQARgXgTgGQgKgDgJAHQgBABgNANQgLAQgHAIQgMAQgJAFQgLAHgLgIQgLgMgHgFg");
	this.shape_70.setTransform(8.8,34.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFF3BB").s().p("AgtBRQgCgLgMgBQgPAAgDgCQgIgIAKgbIAJgQQAFgLgBgFQAAgGgHgKQgGgJACgJIAGgCIAbgFQAHAFALAMQALAIALgHQAJgFAMgQIASgYIAOgOQAJgHAKADQATAGgRAXQgGAHgVARQgGAGgDAHQgFAKgCADQgGAHgLAAQgMAAgDADQgGAEgBAOIgBAVQgDAagFAKQgFAKgIAAQgHAAgIgHg");
	this.shape_71.setTransform(8.8,34.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhPgxQgHAHAGAFQADADAEACQACAEAIAKQAGALgDAHQgCAEgLAHQgKAHgBAHQgIAdAEAIQADAGALACQAFABALACQAGADALAIQAKAGAHgFQAKgGAAgeQgBgNABgHQAAgLAEgHQAFgIAIAAQAMgBAFgCQAEgDADgIQADgKAEgEQAHgHAUgHQAQgKAGgJQAIgMgBgQQgMgCgLAGQgCABgRANQgIAHgOAHQgPAIgIADQgLAIgIACQgLADgKgEQgDgCgGgFQgFgEgEgCQgHgEgEgBQgGgDgHAGg");
	this.shape_72.setTransform(2.3,32.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFF3BB").s().p("AgpBUQgLgIgGgDIgQgDQgLgCgDgGQgEgIAIgdQABgHAKgHQALgHACgEQADgHgGgLIgKgOQgEgCgDgDQgGgFAHgHQAHgGAGADQAEABAHAEQAEACAFAEIAJAHQAKAEALgDQAIgCALgIIAXgLQAOgHAIgHIATgOQALgGAMACQABAQgIAMQgGAJgQAKQgUAHgHAHQgEAEgDAKQgDAIgEADQgFACgMABQgIAAgFAIQgEAHAAALIAAAUQAAAegKAGQgDACgEAAQgEAAgGgDg");
	this.shape_73.setTransform(2.3,32.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAKiIIgpgDQgNgBgZgFQgYgFgNgCQgHAAgFgDQgEgCgJABQgUABgaAqQgLASgPAOQgGAGgOADIgOACQgRAOgDAGQgGALAMANQAZAcAYAPQAYAPAjATQAVALApAUQA3AeAFADQAKAGASAHQAVAHAJAEQAEACAHAGQAHAGADACQAFADAKAAQACAAANgBQAygBATgaQBLhnALgWQAthZhGgbQgLgEgDACQgDAGgGAGQgDgJgBgDQgCgEgKgBQgXABgLAAQgSgBgcgFQgrgIgCgBQgSgDgagBg");
	this.shape_74.setTransform(16.4,12.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFF3BB").s().p("AA6CbIgKgIQgHgGgEgCQgJgEgVgHQgSgHgKgGIg8ghIg+gfQgjgTgYgPQgYgPgZgcQgMgNAGgLQADgGARgOIAOgCQAOgDAGgGQAPgOALgSQAagqAUgBQAJgBAEACQAFADAHAAIAlAHQAZAFANABIApADQAaABASADIAtAJQAcAFASABIAigBQAKABACAEIAEAMQAGgGADgGQADgCALAEQBGAbgtBZQgLAWhLBnQgTAagyABIgPABQgKAAgFgDg");
	this.shape_75.setTransform(16.4,12.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AEFj1QACAEAGAFQAHAFACADQADAHAAAXQAAAKAEARQAEASAAAKQAAAFgGAZQgEASAEAMQABADAEAJQAEAHABAFQACAHACAXQABAKADATQACAQgCANQgDANgHASQgEAKgIAUQgKAbgUAbQgTAbgQAMQgVAPgDACQgGADgIAAQgKAAgFAAQgpADgSAGQgQAIgIAEQgIADgGgBQgHgCgGgCQgVgHgjAPQggANgBAAQgRAFgRgEQgWgJgNgBQgLgBgHAAQgLgBgEgCIhTgBQgQgKgIgHQgOgKgEgOQgBgEAAgKQgBgJgBgFQgCgFgEgFQgFgGgCgDQgDgIACgVQABgUgEgIQgNgagDggQgBgKAFgQQAHgTABgIQACgTAFgLQAEgKANgPQAXgZAogPQAVgIA0gNQAOgDAPACQANABAPgFQAZgJAogSQAbgMAxgHQBKgKALgDQAIgCAagKQAZgKAIgCQATgEADgBQABgBAIgFQAFgDAEAAg");
	this.shape_76.setTransform(-128.9,-41.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFF3BB").s().p("AhID0QgWgJgNgBIgSgBQgLgBgEgCIhTgBQgQgKgIgHQgOgKgEgOIgBgOQgBgJgBgFQgCgFgEgFQgFgGgCgDQgDgIACgVQABgUgEgIQgNgagDggQgBgKAFgQQAHgTABgIQACgTAFgLQAEgKANgPQAXgZAogPQAVgIA0gNQAOgDAPACQANABAPgFQAZgJAogSQAbgMAxgHQBKgKALgDQAIgCAagKQAZgKAIgCQATgEADgBIAJgGQAFgDAEAAQACAEAGAFIAJAIQADAHAAAXQAAAKAEARQAEASAAAKQAAAFgGAZQgEASAEAMIAFAMQAEAHABAFQACAHACAXIAEAdQACAQgCANQgDANgHASIgMAeQgKAbgUAbQgTAbgQAMIgYARQgGADgIAAIgPAAQgpADgSAGIgYAMQgIADgGgBIgNgEQgVgHgjAPIghANQgJADgKAAQgHAAgIgCg");
	this.shape_77.setTransform(-128.9,-41.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AABgJQgBADgBAGQgDAGACACQAEAFACgJQABgHgEgGg");
	this.shape_78.setTransform(134.5,64.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFF3BB").s().p("AgCAIQgCgCADgGQABgHABgCIABACQADAEgBAHQgBAGgDAAIgCgCg");
	this.shape_79.setTransform(134.5,64.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AABAAQgBABAAADQAHACgCgJIgFAAg");
	this.shape_80.setTransform(132.2,65.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFF3BB").s().p("AgCAEQAAgDACgBIgBgDIAEAAQACAHgFAAIgCAAg");
	this.shape_81.setTransform(132.4,65.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgGQAAAGAEAFQAGAGAFgFQAGgGgKgDQgKgGgEABg");
	this.shape_82.setTransform(131.9,64);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFF3BB").s().p("AgBAFQgFgFACgGIgFgCQAGgBAHAGQAKADgGAGQgCADgCAAQgDAAgCgEg");
	this.shape_83.setTransform(132.6,64);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAEgBQgEgBgEACQAEANAJgMQAKgIgWACg");
	this.shape_84.setTransform(136.3,63.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFF3BB").s().p("AgHAAQAFgCACABIgGgEQAWgCgKAIQgGAFgBAAQgFAAgBgGg");
	this.shape_85.setTransform(136.7,63.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgTgbQABAGARAZQARAcAEABQABgGgGgNQgIgOgBgDQgCgNgCgFQgCgJgKgDg");
	this.shape_86.setTransform(-6.5,43);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFF3BB").s().p("AgBAEQgRgYgBgHIAJgGQAKADACAJQACAFACAOQABACAIAPQAGANgBAGQgEgCgRgcg");
	this.shape_87.setTransform(-6.5,42.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAhg9QgpAWgcgDQgBAAgXgGQgPgDgHACIANAUQABAFAEAJQACAJgGAGQgCACgKAKQgIAHgCAHQgDAIgEAcQgCAOAEADQADACAPgBQADAAAGgBQAGgBADABQACABAGAEQAFAEAFgCQAIgCABgMQABgPAAgFQABgTAEgRQAHgWALgFQAEgCAKgCQAKgBAHgFQADgCAagOQAJgGARgOQAFgDALgIQAIgGgGgGQgKgLgWALQgYAQgHADg");
	this.shape_88.setTransform(-3.7,30.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFF3BB").s().p("AgzBUIgIgFQgDgBgGABIgJABQgPABgDgCQgEgDACgOQAEgcADgIQACgHAIgHIAMgMQAGgGgCgJIgFgOIgNgUQAHgCAPADIAYAGQAcADApgWIAfgTQAWgLAKALQAGAGgIAGIgQALIgaAUIgdAQQgHAFgKABQgKACgEACQgLAFgHAWQgEARgBATIgBAUQgBAMgIACIgDABQgDAAgEgDg");
	this.shape_89.setTransform(-3.7,30.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ai4jXQgJAIgTAOQgTANgJAIQgJAJgLAQQgPAWgFAFQgIAKgLASQgQAbgBACQgMATgBAJQgCAMANARQADADAIAGQAHAGADAFIAHAMQAEAHAEADQAKAJAUAKQAfAPABABQAmAUAeAJQAfAIAdAOQAPAHAmAYQAhAVASAJQAJADAVAIQATAGAKAFQABAAALAHQAHAFAFgBQAEgBAJgIQAKgIAFgCQAJgCAWACQAVADAJgEQAGgCAGgJQAEgFAGgKQAEgFAKgHQAJgHAEgFQAJgJAGgUQAIgbABgEQASgrAKgVQAEgHAUgaQAPgVADgRQALgzgegNQAAgDAGgFQAHgFABgDQAFgHACgLQACgQgKACIgTAEQgBgEADgLQACgGgIgFQgLgHgjgCQgagDglAAQgqAAgVAAQgPAAhGgDQgxgCghADQgFAAgJgCQgLgCgEAAQgagBgHgCQgUgBgMgBQgWgDgGgGg");
	this.shape_90.setTransform(-23.8,-14.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFF3BB").s().p("ABTDUIgMgHIgdgLIgegLQgSgJghgVQgmgYgPgHQgdgOgfgIQgegJgmgUIgggQQgUgKgKgJQgEgDgEgHIgHgMQgDgFgHgGIgLgJQgNgRACgMQABgJAMgTIARgdQALgSAIgKIAUgbQALgQAJgJQAJgIATgNQATgOAJgIIAVAAQAGAGAWADIAgACQAHACAaABIAPACQAJACAFAAQAhgDAxACIBVADIA/AAQAlAAAaADQAjACALAHQAIAFgCAGQgDALABAEIATgEQAKgCgCAQQgCALgFAHIgIAIQgGAFAAADQAeANgLAzQgDARgPAVQgUAagEAHQgKAVgSArIgJAfQgGAUgJAJIgNAMQgKAHgEAFIgKAPQgGAJgGACQgJAEgVgDQgWgCgJACQgFACgKAIQgJAIgEABIgCAAQgEAAgGgEg");
	this.shape_91.setTransform(-23.8,-14.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgqgdQgBgCgFgFQgFgFAAgGQABgOATAGQADAGAFAJQAFAIAHAGQANANAMANQAGAGAWAUQASATgDANQgMACgNgSQgNgVgGgGQgIgIgggaIgNgLQAAABAAAAQABABAAABQgBgBAAAAg");
	this.shape_92.setTransform(-83.5,26.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFF3BB").s().p("AAdAqQgNgVgGgGQgIgIgggaIgNgLIABABIgHgHQgFgFAAgGQABgOATAGIAIAPQAFAIAHAGIAZAaQAGAGAWAUQASATgDANIgDAAQgKAAgMgQg");
	this.shape_93.setTransform(-83.4,26.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgbgeQACASAAAAQAEAGAXAIQAYAKAGADQAUALADAMQgEADgYgMQgcgRgBAAQgUgEgNgFQgZgGAGgJIAAgHQAGACADgHQADgHgBgGQAOgDACAKg");
	this.shape_94.setTransform(-90.6,23.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFF3BB").s().p("AAcAdIgdgRQgUgEgNgFQgagGAHgJIAAgHQAFACADgHQADgHAAgGQAOgDABAKIADASQADAGAXAIIAfANQAUALADAMIgDABQgHAAgSgKg");
	this.shape_95.setTransform(-90.7,23.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAMAAQAAAHgEAFQgEAFgEAAQgEAAgDgFQgEgFAAgHQAAgFAEgGQADgFAEAAQAEAAAEAFQAEAGAAAFg");
	this.shape_96.setTransform(-62.9,12.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFF3BB").s().p("AgHAMQgEgGAAgGQAAgGAEgFQADgFAEAAQAEAAAEAFQAEAFAAAGQAAAGgEAGQgEAFgEAAQgEAAgDgFg");
	this.shape_97.setTransform(-62.9,12.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AANAAQAAAGgEAEQgEAFgFAAQgEAAgEgFQgEgEAAgGQAAgFAEgEQAEgFAEAAQAFAAAEAFQAEAEAAAFg");
	this.shape_98.setTransform(-70.1,11.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFF3BB").s().p("AgIAKQgEgEAAgGQAAgFAEgEQAEgFAEABQAFgBAEAFQAEAEAAAFQAAAGgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_99.setTransform(-70.1,11.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAQAAQAAAJgFAHQgEAGgHAAQgFAAgFgGQgFgHAAgJQAAgIAFgGQAFgHAFAAQAHAAAEAHQAFAGAAAIg");
	this.shape_100.setTransform(-77.5,13.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFF3BB").s().p("AgKAQQgFgHAAgJQAAgIAFgHQAFgGAFAAQAHAAAEAGQAFAHAAAIQAAAJgFAHQgEAGgHAAQgFAAgFgGg");
	this.shape_101.setTransform(-77.5,13.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAHgRQACAJAGAWQAGAWACAMIgMAAIgLAFQgCgIAAgUQAAgVgDgGQAAgDgLgVQgJgPADgJQANgIAJAPQAEAJADARg");
	this.shape_102.setTransform(-91.5,15.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFF3BB").s().p("AgCAaQAAgWgCgGIgMgXQgIgPACgJQANgJAJAPQAEAKADAQIAJAgIAHAhIgLAAIgMAFQgBgIgBgTg");
	this.shape_103.setTransform(-91.5,15.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgGAqQAAAAgBgBQgJgOABgmQACgqAUARQAGAFABASQAAAJgBAOQABADABALQACAJgCADQgCAEgJABQgHACgDgBIACgCIgBABQAAABgBAAg");
	this.shape_104.setTransform(-85.5,15.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFF3BB").s().p("AgGAqIAAAAIABgBIAAAAIABgBIgCACIgBgBQgJgOABgmQACgqAUARQAGAFABASIgBAXIACAOQACAJgCADQgCAEgJABIgGABIgEAAgAgGAqIACgCIgBABIAAAAIgBABIAAAAgAgGAqIAAAAg");
	this.shape_105.setTransform(-85.5,15.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AEOizQgEAHABAHQAIACAFgLQAFgLAFADQAGAFgHAbQgEAOACAVQADAgAAADQAAATgDAxQgDAoABAaQABAXgDAXQgEAbgIARQgPAcgCAEQgLASgLAJQgZAUgnAGQgmAFgggKQgFgBgIgFQgJgFgFgBQgFgCgfgEQgigFgkAAQhNAAgkgLIhwgdQgKgEgIgSQgGgOgBgQQgCgRgCgqQgCgUAAgLQgBgTADgKQADgOATgyQACgHABgMQABgPABgEQACgJAGgHQADgFAJgJQADgFADgKQACgKAEgEQAFgFAZgDQARgCAXgBQAOgBAbgBIAugBQAPgBAcgGQASgDAkgCQADAGgEAFQgBACgIAFQAJABANgJQAOgKAHAAQABAGgIAIQAHAHALgJQAPgNAEAAQAYgGATgCQAhgDATgGQADgBARgIQAMgGAIABQAFAGgBAIQAGABAIgDQAMgDACgBQAKgCATgBQACAVgGAMQgGAIgDAEg");
	this.shape_106.setTransform(-75.6,-36.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFF3BB").s().p("ABiDgIgNgGQgJgFgFgBIgkgGQgigFgkAAQhNAAgkgLIhwgdQgKgEgIgSQgGgOgBgQQgCgRgCgqIgCgfQgBgTADgKQADgOATgyQACgHABgMIACgTQACgJAGgHIAMgOQADgFADgKQACgKAEgEQAFgFAZgDQARgCAXgBIApgCIAugBQAPgBAcgGQASgDAkgCQADAGgEAFIgJAHQAJABANgJQAOgKAHAAQABAGgIAIQAHAHALgJQAPgNAEAAQAYgGATgCQAhgDATgGIAUgJQAMgGAIABQAFAGgBAIQAGABAIgDIAOgEQAKgCATgBQACAVgGAMIgJAMQgEAHABAHQAIACAFgLQAFgLAFADQAGAFgHAbQgEAOACAVIADAjQAAATgDAxQgDAoABAaQABAXgDAXQgEAbgIARIgRAgQgLASgLAJQgZAUgnAGQgOABgMAAQgXAAgVgGg");
	this.shape_107.setTransform(-75.6,-36.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAYixQgJAJgIARQgJAcgBABQgLAVgEAGQgJAOgKAJQgPALgHAGQgLALgCANQgDANAFANQADAFAIAQQADALgHAQQgHASABAJIAGgBIgKAvQACAEgBANQAAAGgBAMQgCAhAAAFQARACAFgQQAHgDARALQAMAIAFgTQAEgNgBgUQAAgDgDgdQgBgrgBgVQAAgEgDgLQgDgKABgFQAAgDAFgIQADgEgCgIQgDgPABgGQABgEAKgOQAEgFAGgPQAHgNAGgIQAIgKAJgNQAEgIAKgRQAEgHALgOQAJgOACgKQgTgGgJABQgNAAgLALg");
	this.shape_108.setTransform(-100.1,1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFF3BB").s().p("AhLC9IADgmIAAgSQABgNgBgEIAJgvIgGABQgBgJAHgSQAIgQgEgLIgLgVQgFgNADgNQADgNALgLIAVgRQAKgJAJgOQAEgGAMgVIAJgdQAIgRAJgJQAMgLANAAQAIgBATAGQgCAKgIAOIgQAVIgOAZQgJANgIAKQgFAIgIANIgKAUQgJAOgCAEQgBAGAEAPQABAIgDAEIgFALQgBAFADAKIADAPIADBAIACAgQABAUgDANQgGATgLgIQgRgLgIADQgEAOgOAAIgEAAg");
	this.shape_109.setTransform(-100.1,1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAXhiQARAAABAQQABAJgFANQgCAHgGANQgLAbgFAKQgFAJgMAZQgKAYAFARIgYAHIAAAFQgGgVgBgMQgBgTAIgNQAFgIAKgNQAJgNADgNQADgTABgKQABgVABgHQAGgOARABg");
	this.shape_110.setTransform(-113.2,-8.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFF3BB").s().p("AgoA7QgBgTAIgNIAPgXQAJgLADgNIAEgdQABgVABgHQAGgOARABQARAAABAQQABAJgFANIgIAUQgLAbgFAIQgFALgMAZQgKAYAFARIgYAHIAAAFQgGgVgBgMg");
	this.shape_111.setTransform(-113.2,-9.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgxAlQgLAbAEArIACAeIgDAAQgBAKgCAUQAAAPAQgBQAQAAAKAEQAJAEAEgCQAFgBABgKQADgMgBgSQgCgVgBgKQAAgPAAguQAAgLgDgTQgEgSAAgJQAAgOAFgMQACgJAJgPQAbgqADgGQAQgdAFgYQAEgXgHgGQgEgDgJgBQgIAAgFACQgNAGgHAOQgCAFgIAWQgLAmgdBJQgEALgBAUQgBAXgEAKg");
	this.shape_112.setTransform(-107.8,0.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFF3BB").s().p("AgSC5QgKgEgQAAQgQABAAgPIADgeIADAAIgCgeQgEgrALgbQAEgKABgXQABgUAEgLQAdhJALgmQAIgWACgFQAHgOANgGQAFgCAIAAQAJABAEADQAHAGgEAXQgFAYgQAdIgeAwQgJAPgCAJQgFAMAAAOQAAAJAEASQADATAAALQAAAuAAAPIADAfQABASgDAMQgBAKgFABIgCABQgEAAgHgDg");
	this.shape_113.setTransform(-107.8,0.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgNiKQgHAFgGATQgDALgEARQgFATAAAoQAAALgCASQgDAVAAAJQAAAdAEASQAEAYAMATQAOAUAQACQASABANgVIgPgtQACACgCgFQgDgFgBgBQgBgGgBgKIgEgfQgDgbACgeQABgNAFgOQAIgRADgJQAJgUACgIQAGgUgFgEQgGgEgWAAQgUABgGAEg");
	this.shape_114.setTransform(-120.1,-4.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFF3BB").s().p("AAHCQQgQgCgOgUQgMgTgEgYQgEgSAAgdQAAgJADgVQACgSAAgLQAAgoAFgTIAHgcQAGgTAHgFQAGgEAUgBQAWAAAGAEQAFAEgGAUQgCAIgJAUIgLAaQgFAOgBANQgCAeADAbIAEAfIACAQIAEAGQAAABABABQAAABAAAAQAAAAAAAAQgBAAAAAAIAPAtQgMAUgRAAIgCAAg");
	this.shape_115.setTransform(-120.1,-4.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAniVQAGANgKAOQgNAQgEAJQgSAhADAWQACASANAmQAMAkABAWQABASgEAlQgCAXgFAIQgIAPgPgPQgJgHgEgQQgDgTgDgJQgHgYgBgaQAAgQAAgKQAAgTgEgDIAGgIQgJgCgCgWQgCgRACgOQAFgigGgbQgHgjAigJQARgGAKABQARABAHAOg");
	this.shape_116.setTransform(-127.7,-2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFF3BB").s().p("AgCCeQgJgHgEgQQgDgTgDgJQgHgYgBgaIAAgaQAAgTgEgDIAGgIQgJgCgCgWQgCgRACgOQAFgigGgbQgHgjAigJQARgGAKABQARABAHAOQAGANgKAOQgNAQgEAJQgSAhADAWQACASANAmQAMAkABAWQABASgEAlQgCAXgFAIQgEAHgGAAQgHAAgGgHg");
	this.shape_117.setTransform(-127.7,-2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgBgCQgBACAAADIADAAIACgDIAAgCg");
	this.shape_118.setTransform(129.8,65.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFF3BB").s().p("AgCADQAAgDABgCIAEAAIAAADIgCACg");
	this.shape_119.setTransform(129.8,65.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgEAAQAAAJAGgEQAIgFgKgEg");
	this.shape_120.setTransform(126.4,65);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFF3BB").s().p("AgEgBIAEgDQAKAEgIAEIgCABQgEAAAAgGg");
	this.shape_121.setTransform(126.4,65.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgDgCQgDAEACAFQAEAEAEgGQADgFgBgFQgBAAgDgCg");
	this.shape_122.setTransform(123.3,64.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFF3BB").s().p("AgEAHQgCgGADgDIAFgFIAEABQABAGgDAEQgDAEgBAAIgEgBg");
	this.shape_123.setTransform(123.3,64.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgDAAQAAAAACABQABACAAADQAEABAAgGQABgEgFgBg");
	this.shape_124.setTransform(119.8,63.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFF3BB").s().p("AAAAFQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAIgCgCIADgEQAFABgBAEQAAAGgEAAIAAgBg");
	this.shape_125.setTransform(119.8,63.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgDgFQgFAGAIAEQAIAEgDgOg");
	this.shape_126.setTransform(116.8,62.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFF3BB").s().p("AAAAFQgIgEAFgGIAIAAQADALgGAAIgCgBg");
	this.shape_127.setTransform(116.8,62.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgEgEQACAHADABIAAAFIAFAAQABgFgFgKg");
	this.shape_128.setTransform(112.8,62.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFF3BB").s().p("AABAIIgBgEQgCgCgDgGIAHgDQAEAKgBAFg");
	this.shape_129.setTransform(112.9,62.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgEgFQgBAFADAEQACAFAFAAQABgFgEgEQgDgDgCgDg");
	this.shape_130.setTransform(108.8,61.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFF3BB").s().p("AgCADQgDgDABgGIABgBIAFAHQAEADgBAFQgFAAgCgFg");
	this.shape_131.setTransform(108.8,61.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgDgEQgLAFAOAEQAPADgNgNg");
	this.shape_132.setTransform(103.9,61);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFF3BB").s().p("AAAAFQgOgEALgFIAFgBQALALgIAAIgFgBg");
	this.shape_133.setTransform(103.9,61);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgJgFQAPAPAJgBQABgGgFgDQgHgFgCgCg");
	this.shape_134.setTransform(99.4,60.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFF3BB").s().p("AgLgFIALgDIAJAIQAFADgCAFIgBABQgJAAgNgOg");
	this.shape_135.setTransform(99.7,60.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgIgEQACAEAGAEQAEAFAGAAQAEgIgLgJg");
	this.shape_136.setTransform(94.2,60.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFF3BB").s().p("AgBAEQgGgEgCgEIALgEQALAJgEAIQgGAAgEgFg");
	this.shape_137.setTransform(94.3,60.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgFgIQADADADAGQAFAGAGABQAAgEgDgEQgDgFgCgDg");
	this.shape_138.setTransform(89.2,60.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFF3BB").s().p("AAAABIgIgJIAJAAIAFAIQADAFAAAEQgGgBgDgHg");
	this.shape_139.setTransform(89.5,60.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMgKQACAIAHAFQAFAHAIABQgIgLgBgBQgEgIgGgBg");
	this.shape_140.setTransform(85.3,60.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFF3BB").s().p("AgBADQgHgEgDgJIAEAAQAGABAEAJIAJALQgIAAgFgIg");
	this.shape_141.setTransform(85.2,60.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgKgTQgCAAgJABQgCAHAGACQALADAAABQAGAEgCABQgEAFgBABQgCALAFAGQAEAFAIgHQAFAHAHAAQADgGgBgLQgBgLAAgEQgBgMgDgFQgEgGgMABg");
	this.shape_142.setTransform(96.2,56.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFF3BB").s().p("AAIAVQgIAHgEgFQgFgGACgLIAFgGQACgBgGgEIgLgEQgGgCACgHIALgBIALgHQAMgBAEAGQADAFABAMIABAPQABALgDAGQgHAAgFgHg");
	this.shape_143.setTransform(96.2,56.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMgQQAAAEAAAGQAAAGAEAAQgMAGAHAYQADAAAKACQAJABADgCQAGgEgCgIQgDgKAAgEQACgFAAgCQAAgEgGgFQgJgIgIAAIgDAKg");
	this.shape_144.setTransform(114.6,58.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFF3BB").s().p("AAAAaIgNgCQgHgYAMgEQgEgCAAgGIAAgKIABAHIADgKQAIAAAJAIQAGAFAAAEIgCAIQAAADADAKQACAIgGAEQgCABgFAAIgFAAg");
	this.shape_145.setTransform(114.6,58.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AADgLQgFAEgCACQgFAEAAADQABAGAFACQADADAEgDQAEAGAEgEQAEgDABgHQACgRgUADg");
	this.shape_146.setTransform(121.1,61.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFF3BB").s().p("AAAAKQgDADgEgDQgFgCgBgGQAAgDAFgEIAIgGIgFgBQAUgDgCARQgBAHgEADIgDABQgCAAgDgDg");
	this.shape_147.setTransform(121.5,61.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgCgKQACAJgMABQgCAGAKAEQAHAEAGgGQAIgHgGgFQgEgFgHgBg");
	this.shape_148.setTransform(127.8,63.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFF3BB").s().p("AgEAKQgKgEACgGQAMgBgCgJIACAAQAHABAEAFQAGAFgIAHQgEADgEAAQgCAAgDgBg");
	this.shape_149.setTransform(127.8,63.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AACgJQgGAFAEAEQAFAHgBADQALACgBgMQgCgLgMACg");
	this.shape_150.setTransform(130.2,63.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFF3BB").s().p("AAAAKQAAgDgFgHQgFgEAIgFIgCAAQAKgCACALQABAKgIAAIgBAAg");
	this.shape_151.setTransform(130.8,63.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AABgHQgNgBAKAJQADAFAIAGIAEAAQAGgMgFgFQgGgHgLABg");
	this.shape_152.setTransform(124.5,62.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFF3BB").s().p("AAEAMQgGgGgFgFQgJgJAPABIgHgEQAMgBAFAHQAGAFgGAMg");
	this.shape_153.setTransform(124.9,62.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AABgTQgBAAgOAAIAAADQACADAAAIQAAAGACAEQACAFAIABQAGACACADQADgFACgKQADgJgBgEQgEgGgKgBg");
	this.shape_154.setTransform(118.5,60.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFF3BB").s().p("AAAAOQgIgCgCgFQgCgEAAgFQAAgJgCgCIAAgEIAPAAQALACADAFQABAEgDAKQgDAKgDAEQgCgDgFgBg");
	this.shape_155.setTransform(118.5,60.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgQgLQABgHACgBQACgCAGgCQAFgCgEgBIAGgBQANgCAAAKQAAACgBAIQAAAEABADQACACADAEQACAFAAAEQgBADgCAHQgCAGgFgBQgBAAgSgBQgOAAAAgFQgBgHADgHQADgHAFgDQAEgDgEAAQgFgBAAgFg");
	this.shape_156.setTransform(110.4,58);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFF3BB").s().p("AAMAcIgTgBQgOAAAAgFQgBgHADgHQADgHAFgDQABAAABgBQAAgBAAAAQAAAAAAgBQgBAAgBAAQgFgBAAgFQABgHACgBIAIgEQAFgCgEgBIAGgBQANgCAAAKIgBAKQAAAEABADIAFAGQACAFAAAEIgDAKQgBAFgEAAIgCAAg");
	this.shape_157.setTransform(110.4,58);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLgSQACgBAEgHQADgFAEACQAJACABACQABABAAAGQAAACgCALQgBAHADADQAJAKgDAHQgCAEgFgCQgHgDgDABQgCABgDAFQgDADgFgBQgHAAgBgEQAAgDACgIQAEgLACgEQADgJgGgCQgGgCACgCQABgBAGgCg");
	this.shape_158.setTransform(106.2,57.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFF3BB").s().p("AgLAeQgHAAgBgEQAAgDACgIIAGgPQADgJgGgCQgGgCACgCIAHgDQACgBAEgHQADgFAEACQAJACABACQABABAAAGIgCANQgBAHADADQAJAKgDAHQgCAEgFgCQgHgDgDABQgCABgDAFQgCADgEAAIgCgBg");
	this.shape_159.setTransform(106.2,57.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgSgSQgDABgBgDQAVgFACgBQAQgBAFAJQAEAHgFAPQgFAQgFAGQgFgDgJAAQgKABgFgFQAAgGACgJQADgHAAgFg");
	this.shape_160.setTransform(101.4,56.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFF3BB").s().p("AgDAYQgKAAgGgFQAAgFADgJQADgHgBgGIgFgKQAAABgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIAWgGQARgCAFAJQADAHgFAQQgFAQgFAFQgEgDgJABg");
	this.shape_161.setTransform(101.4,56.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgXgLQAHgCAPgLQALgJAKABQAFAKgGAIIAEARQAAAGABALQgBAJgGADQgCABgOAAQgLAAgCAAQgKgDAAgGQAAgCADgOQAAgCADgEQACgCAAgDQAAACgJgKg");
	this.shape_162.setTransform(91.8,55.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFF3BB").s().p("AgMAhQgJgDgBgGIADgQIADgGQACgCAAgDQAAACgJgKQAHgCAPgLQALgJAKABQAFAKgGAIIAEARIABARQgBAJgGADIgPABIgJAAIgFAAg");
	this.shape_163.setTransform(91.8,55.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AggAZQAHAHANAAQAIAAAMgBQADAEAJAAQADgIAAgDIgDgSQgIgHALgKQAMgLgCgHQgMgIgQAFQgEAJABAFQgQABgBAAQgIADgBAKQAAABABAFQABAFgBAFQgDAGgGAHg");
	this.shape_164.setTransform(87.2,55.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFF3BB").s().p("AAIAfIgUABQgNAAgHgHQAGgHADgGQABgFgBgFIgBgGQABgKAIgDIARgBQgBgFAEgJQAQgFAMAIQACAHgMALQgLAKAIAHIADASQAAADgDAIQgJAAgDgEg");
	this.shape_165.setTransform(87.2,55.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAygmQg/AJgYACQglAEg1AIQg2AJgXAFQgJABgDACQgDAEABAIQACAJAXALQAVAKARADQAeAGATgGQAQgFCAgmQASgECiguQAHgDgpAAQgoABgWACQgMABg8AHg");
	this.shape_166.setTransform(137.2,54.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFF3BB").s().p("AibAvQgRgDgVgKQgXgLgCgJQgBgIADgEQADgCAJgBQAXgFA2gJQA1gIAlgEIBXgLIBIgIQAWgCAogBQApAAgHADIi0AyIiQArQgJADgMAAQgNAAgPgDg");
	this.shape_167.setTransform(137.2,54.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhXAnQhMAfgPAGQgGADgCAEQgDAFAFAEQAHAGAnAMQAqANAMgEQAPgEAFgDQAIgEALgKQAOgMBthaQBphaAGgYQABgHhJAxQhNA0gGADQgrAbhOAhg");
	this.shape_168.setTransform(110.6,42);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFF3BB").s().p("AiKBuQgngMgHgGQgFgEADgFQACgEAGgDIBbglQBOghArgbIBTg3QBJgxgBAHQgGAYhpBaIh7BmQgLAKgIAEIgUAHIgHABQgOAAghgKg");
	this.shape_169.setTransform(110.6,42);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgTgcQABANANAVQANAZAMgCQACgFgIgKQgKgNgBgBQgBgBAAgPQAAgLgCgCg");
	this.shape_170.setTransform(0.4,45.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFF3BB").s().p("AgFAGQgOgVAAgNIASgBQADACAAALQAAAPABABIALAOQAIAKgDAFIgBABQgLAAgMgYg");
	this.shape_171.setTransform(0.5,45.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAzhbQgLAHgRAMQgWARgDADQgQAKgLACQgLACgSgEQgKgDgHgCQgMgDgEAEQgLALAcAJIALAPQAAAPgJAPQgNARgFAMQgMAZAHAIQAEAFAMgDQAPgDADAAQABADABABQACACABABIAAAEQATALAEgLQADgUADgOIAHgcQAAgEgBgKQgBgKAAgFQALAAAEgIQADgEAEgLQADgFAJgEQAFgCALgEQAfgNADgBQAUgKAKgKQAQgPgWgGQgVgGgOAIg");
	this.shape_172.setTransform(-10,27.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFF3BB").s().p("Ag4BbIAAgEIgDgDIgCgEQgDAAgPADQgMADgEgFQgHgIAMgZQAFgMANgRQAJgPAAgPIgLgPQgcgJALgLQAEgEAMADIARAFQASAEALgCQALgCAQgKIAZgUQARgMALgHQAOgIAVAGQAWAGgQAPQgKAKgUAKIgiAOIgQAGQgJAEgDAFIgHAPQgEAIgLAAIABAPIABAOIgHAcQgDAOgDAUQgCAGgGAAQgGAAgJgGg");
	this.shape_173.setTransform(-10,27.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAKhCQgCABgYAWQgTARgLAAQgFAAgTgPQgQgMgMAGQgKAGAMANQAGAHAMAMIADAFQgBAEgFAMQgFAKgBAHQgBAHAAANQgCALgGAEQABARADABQADAAARAAQAHABAIAIQAKAJAGACQAMgHADgaQABgdABgKQACgJAFgHQADgDAJgJQAFgEAEgGQADgFADgLIAEAAQABgCAAgDQAJgCAUgPQAKgFAVgJQARgKAJgQQAKgTgcAEQgPADgXAMQgIAEgbAQg");
	this.shape_174.setTransform(-16.5,24.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFF3BB").s().p("Ag5BbQgIgIgHgBIgUAAQgDgBgBgQQAGgFACgLIABgTQABgHAFgLIAGgQIgDgFIgSgSQgMgNAKgGQAMgHAQANQATAPAFAAQALgBATgQIAagYIAjgUQAXgMAPgCQAcgFgKATQgJARgRAJQgVAJgKAGQgUAPgJACIgBAEIgEABQgDALgDAEQgEAGgFAFIgMAMQgFAHgCAIQgBAKgBAdQgDAbgMAGQgGgCgKgJg");
	this.shape_175.setTransform(-16.5,24.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLgnIgMAGQACAIAIAMQAFAHAIAKQACAGAIANQAHALAIAEQABgEgIgQQgIgRgCgCQgEgPgDgHQgCgNgKgDg");
	this.shape_176.setTransform(-12.5,41.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFF3BB").s().p("AAJAYIgJgTIgNgRQgJgMgCgIIANgGQAJADADANIAGAWIALATQAHAQgBAEQgIgEgHgLg");
	this.shape_177.setTransform(-12.4,41.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AATAWQgGgHgCgDQgFgGgCgFQgCgDgCgQQAAgNgFgHQgHgDgGAAIgNAFQgBALAJAOQADAFAOAPQAYAeAOACQAAgDgFgHQgGgHgCgCg");
	this.shape_178.setTransform(-18.2,39.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFF3BB").s().p("AgGAJIgRgTQgJgOABgMIANgFQAGAAAHADQAFAHAAANQACAQACADQACAGAFAFIAIAKIAIAKQAFAGAAAEQgOgCgYgfg");
	this.shape_179.setTransform(-18.2,39.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgnQAAgGgHABQADgCAAgBQgBgDgQAFQgPAEADAJQACAEAFAHQgBAGAFACQAIACACADQABABAMAXQAJAPAHAJQAQASABgPQABgGgGgIQgHgIgDgDQgTgWgBgZQABgHAAgDg");
	this.shape_180.setTransform(-25.2,38.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFF3BB").s().p("AARAoQgHgJgJgPIgNgYQgCgDgIgCQgFgCABgGIgHgLQgDgJAPgEQAQgFABADQAAAAAAAAQAAABgBAAQAAABAAAAQgBABgBAAQAHgBAAAGIgBAKQABAZATAWIAKALQAGAIgBAGQAAAGgEAAQgEAAgJgJg");
	this.shape_181.setTransform(-25.2,38.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgagsQgEAKAHANQASAeACAFQAGASAEAGQAJAMAMADQABgHgEgIQgFgJgDgFQgIgWgFgJQgEgJgBgFQgDgHAAgHQgBgMgCgEQgEgGgJAHg");
	this.shape_182.setTransform(-32.4,35.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFF3BB").s().p("AAHAnQgEgGgGgSIgUgjQgHgNAEgKIAGgGQAJgHAEAGQACAEABAMQAAAHADAHIAFAOIANAfIAIAOQAEAIgBAHQgMgDgJgMg");
	this.shape_183.setTransform(-32.4,35.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgWgrQAAAdALAZQALAjAXADQACgGgHgIQgIgHgDgEQgHgLgCgOQAAgSAAgLQAAgVgJACg");
	this.shape_184.setTransform(-38.7,34.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFF3BB").s().p("AgLAMQgLgaAAgcIALgGQAJgCAAAVIAAAcQACAPAHAKIALAMQAHAHgCAHQgXgDgLgjg");
	this.shape_185.setTransform(-38.7,34.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgEgcQACgMAAgFQAAgLgJABIgLACQgOAKAKAUQAGALANAQQAPAdABAAQAJANAAAAQAHAIAGABQACgMgMgTQgPgUgEgFQgGgQAAgLg");
	this.shape_186.setTransform(-46.1,32.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFF3BB").s().p("AASAvIgJgNIgQgdQgNgQgGgLQgKgUAOgKIALgDQAJAAAAAKQAAAGgCALQAAALAGAQQAEAGAPAUQAMATgCAMQgGgCgHgHg");
	this.shape_187.setTransform(-46.1,32);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgVg5QgOAGANAZQAHAOAMARQAEARAIAOQAMAXAJABQAAgPgIgSQgCgEgOgYQgHgQAAgQQAAgQAAgBQgCgIgJgBg");
	this.shape_188.setTransform(-54,29.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFF3BB").s().p("AAJAkQgIgOgEgRQgMgRgHgOQgNgZAOgGIAJgCQAJABACAIIAAARQAAAQAHAQIAQAcQAIASAAAPQgJgBgMgXg");
	this.shape_189.setTransform(-54,29.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgPg8QgIgBgEABIAAAGQgCANAIARQAEAKAJAQQABABAHAZQAEAPAHAIQAGAIAFACQAHACgBgLQAAgEgHgJQgIgMgBgCQgNgfgCgVQAAgCABgMQABgKgDgDQgDgEgIgCg");
	this.shape_190.setTransform(-59.5,28.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFF3BB").s().p("AAWA9QgFgCgGgIQgHgIgEgPIgIgaIgNgaQgIgRACgNIAAgGQAEgBAIABQAIACADAEQADADgBAKIgBAOQACAVANAfIAJAOQAHAJAAAEQABAJgEAAIgDAAg");
	this.shape_191.setTransform(-59.5,28.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgRg9QgGgFgIADIgEAGQADALAHAQQAKAUACAGQAHAQARAhQACACAGAKQAHAJAEAAQAIgBgDgLQgDgHgFgIQgOgWgQgeQgEgIgBgJQAAgLgBgGQgBgJgHgFg");
	this.shape_192.setTransform(-65.2,27.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFF3BB").s().p("AATA5IgIgMQgRghgHgQIgMgaQgHgQgDgLIAEgGQAIgDAGAFQAHAFABAJIABARQABAJAEAIIAeA0QAFAIADAHQADALgIABIgBAAQgEAAgGgJg");
	this.shape_193.setTransform(-65.2,27.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Agpg6QgDAGAJANQAFAHAIAMQAFAKALAbQAFAOAOAQQARASAMABQACgJgJgMQgLgNgEgGQgOgUgGgQQgEgIgBgMQgBgQgBgFQgDgKgLgDQgJgEgLAEg");
	this.shape_194.setTransform(-70.9,26.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFF3BB").s().p("AANAwQgOgRgFgNQgLgcgFgJIgNgTQgJgOADgFIAAgHQALgDAJADQALAEADAKQABAFABAPQABAMAEAIQAGAQAOAVIAPASQAJAMgCAKQgMgCgRgRg");
	this.shape_195.setTransform(-70.9,26.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgvhBQgIAJAFAJQAEAFALAIQASALAGARQAGACAHAJQAEAGAIALQAYAcAFALQAEAEAFABQACgKgHgJQgJgLgEgFQgJgNgRgSQgIgHgOgUQgGgIgCgIQgBgGgBgOQgGgCgGAAg");
	this.shape_196.setTransform(-77,27.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFF3BB").s().p("AArA9QgFgLgYgbIgMgRQgHgKgGgBQgGgSgSgLQgLgIgEgFQgFgIAIgKIALAAQAGAAAGACQABAOABAGQACAIAGAIQAOAUAIAHQARATAJAMIANAQQAHAKgCAJQgFgBgEgEg");
	this.shape_197.setTransform(-77,27.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABJhnQgGADgMAKQgQANgXAMQgXAOgPAHQgaANgPgCQgHgKgOgBQgPgCgBAPIAOAYQAHAHgDAKQgCAGgGALQgCAIgBALQgBAGgBANQgBAIgBALQAAAHAMACQAHABAKAAQAGACAFAJQAKAEAJgCQARgdgJgtQgCgLACgEQACgDAMgHQAPgIAIgKQAOgRAKgIQALgKASgIQARgHANgNQASgSgOgMQgIgHgNAHg");
	this.shape_198.setTransform(-22.7,21.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFF3BB").s().p("Ag5BpQgFgJgGgCIgRgBQgMgCAAgHIACgTIACgTQABgLACgIQAGgLACgGQADgKgHgHIgOgYQABgPAPACQAOABAHAKQAPACAagNIAmgVQAXgMAQgNQAMgKAGgDQANgHAIAHQAOAMgSASQgNANgRAHQgSAIgLAKQgKAIgOARQgIAKgPAIQgMAHgCADQgCAEACALQAJAtgRAdIgFAAQgHAAgHgCg");
	this.shape_199.setTransform(-22.7,21.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA0hlQg0ArgCABQgEADgGACQgHAKgPAGQgPAFgNgCQgFAAgKgEQgJgDgFAAQgKgBgDAGQgDAGALAAIANATQAQADgJAWQgFANgKAUQgEAMgBAaQgCAQABACQACADANgEQALgDACACQAHAIADACQAQAKAIgaQADgKABgdQACgPgCgFQAAgCgDgFQgDgFAAgCQAAgEAEgGQAEgHAAgEQAKACAHgCQAGgCAHgDQAGgcAogaQAIgEAWgKQAUgKAGgJQAGgJgHgHQgFgHgMgBQgNgCgUAPg");
	this.shape_200.setTransform(-29.6,18.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFF3BB").s().p("Ag7BwIgKgKQgCgCgLADQgNAEgCgDQgBgCACgQQABgaAEgMQAKgUAFgNQAJgWgQgDIgNgTQgLAAADgGQADgGAKABIAOADQAKAEAFAAQANACAPgFQAPgGAHgKIAKgFIA2gsQAUgPANACQAMABAFAHQAHAHgGAJQgGAJgUAKIgeAOQgoAagGAcQgHADgGACQgHACgKgCQAAAEgEAHQgEAGAAAEQAAACADAFIADAHQACAFgCAPQgBAdgDAKQgGATgJAAQgEAAgFgDg");
	this.shape_201.setTransform(-29.6,18.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAIhLQgHAFgTARQgRAOgMAGQgJAFgIAAQgFgBgNgEQgNgEgCABQgEACABAOQAFAqgKAcIgFAoQgCAOAHAAQAEAAALgDQAJgBAIAGQAEADAKAJQABAMAJgDQAIgEADgJQABgHAAgNQgBgQAAgFQADgbAAgNQAAgPABgCQACgEAMgGQAMgFACgBQAFgEACgLQADgNABgDQADgGAIgHQAOgNAvggQAEgCARgKQAOgKAAgHQAAgKgRABQgNABgMAGQgNAFgTAQQgYAUgGAEg");
	this.shape_202.setTransform(-36,16.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFF3BB").s().p("Ag7B2IgOgMQgIgGgJABQgLADgEAAQgHAAACgOIAFgoQAKgcgFgqQgBgOAEgCQACgBANAEQANAEAFABQAIAAAJgFQAMgGARgOIAagWQAGgEAYgUQATgQANgFQAMgGANgBQARgBAAAKQAAAHgOAKIgVAMQgvAggOANQgIAHgDAGIgEAQQgCALgFAEIgOAGQgMAGgCAEQgBACAAAPQAAANgDAbIABAVQAAANgBAHQgDAJgIAEIgEABQgFAAgBgKg");
	this.shape_203.setTransform(-36,16.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhigsQgFACgCAFQgDAHAFAEIAIAHQAGALgBAIQgBAFgGAPQgFAOgFAeQgJAeABAQQAMABAJgEIAPgCQAEADAFAKQAEAJAIABQALABAFgHQADgFABgMQAAgFgCgjQgCgYAHgOQAEgIAHgFQADgCAKgGQAJgGAAgFIAAgRQACgPAPgMQAKgGAUgLQAKgFAXgMQAVgLALgKQAJgIgEgJQgFgJgQADQgIACgBAAQgLAHgQAIQgWALgjAaQguAkgNAJQgGAEgHAAQgJAAgBgIIgDAAQgDgGgBgFQgEgDgGACg");
	this.shape_204.setTransform(-43.2,13.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFF3BB").s().p("Ag6CAQgIgBgEgJQgFgKgEgDIgPACQgJAEgMgBQgBgQAJgeQAFgeAFgOQAGgPABgFQABgIgGgLIgIgHQgFgEADgHQACgFAFgCQAGgCAEADQABAFADAGIADAAQABAIAJAAQAHAAAGgEQANgJAugkQAjgaAWgLIAbgPIAJgCQAQgDAFAJQAEAJgJAIQgLAKgVALIghARIgeARQgPAMgCAPIAAARQAAAFgJAGIgNAIQgHAFgEAIQgHAOACAYIACAoQgBAMgDAFQgEAGgIAAIgEAAg");
	this.shape_205.setTransform(-43.2,13.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhfgNQAAABAGAMQACAEgGAMQgGAPgCAJQgBAJACAQQADAOgBAKQAAADgEAJQgDAJABACQACAHAQAAQARgBAGAJQAIALAJgbQACgHAHggQADgNACgGQACgKgBgHQgDgNABgFQABgFAGgKQAHgKAPgOQAGgIARgPQAMgMATgNQAKgHAXgOQADgCAKgHQAJgGABgFQABgEgGgHQgHgHgGgBQgMgCgSAMQgCABgXATQgfAegRAQQghAdgYgCQABgUgMABQgLABAEASg");
	this.shape_206.setTransform(-50.1,9.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFF3BB").s().p("Ag/B/QgGgJgRABQgQAAgCgHQgBgCADgJQAEgJAAgDQABgKgDgOQgCgQABgJQACgJAGgPQAGgMgCgEIgGgNIAFgNQgEgSALgBQAMgBgBAUQAYACAhgdQARgQAfgeIAZgUQASgMAMACQAGABAHAHQAGAHgBAEQgBAFgJAGIgNAJIghAVQgTANgMAMIgXAXQgPAOgHAKQgGAKgBAFQgBAFADANQABAHgCAKIgFATIgJAnQgGATgGAAQgDAAgCgDg");
	this.shape_207.setTransform(-50.1,9.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA2hsQgKAIgRAKQgSALgJAFQgYAPgBABQgQAKgIAKQgBABgHAMQgFAJgFACQgGADgIgDQgKgDgEAAIgDADQgIAOAJAFIADAMQABAHgEAgQgEAaAGAKQACAEgDAPQgDAPADAFQADAGAHgBQADgBAHgBQAIABALACQAIgBAEgNQACgHgCgNQgCgSAAgDQAAgJgBgLQgDgMgBgHQgBgMAHgHQAEgEAMgIQAIgGABgCQADgDADgFQABgDABgKQACgJACgEQAEgGAMgJQATgMABgBQAOgLAfgWQARgOADgDQANgOgCgIQgJgFgDgBQgDgBgIAFQgEADgJAJQgIAIgFAEg");
	this.shape_208.setTransform(-56.6,7.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFF3BB").s().p("AhMCGIgKACQgHABgDgGQgDgFADgPQADgPgCgEQgGgKAEgaQAEgggBgHIgDgMQgJgFAIgOIADgDQAEAAAKADQAIADAGgDQAFgCAFgJIAIgNQAIgKAQgKIAZgQIAbgQQARgKAKgIIANgMIANgMQAIgFADABQADABAJAFQACAIgNAOIgUARIgtAhIgUANQgMAJgEAGQgCAEgCAJIgCANQgDAFgDADIgJAIIgQAMQgHAHABAMIAEATIABAUIACAVQACANgCAHQgEANgIABIgTgDg");
	this.shape_209.setTransform(-56.6,7.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABaiLQgYAQgfAaQgiAegQAOQgSAOgJAHQgOALgIAOQgGAHgFADQgHAEgJgEQgIgFgEgDQgIgGgFALQgEAHAIAKQAFAFAHAJQAEAIgFAMQgGAOABAHIALBDQgCADABAFQAHABAMgEQALgFAJACQABABAGAFQADAEAGgDQADgCAAgIQAAgJAAgDQADgRABgcQACgqAAgEQARgEACgUQAFgdABgDQAHgNAMgMQADgCAXgSQATgPAnghQADgDALgHQAJgIAAgGQgBgTgcASg");
	this.shape_210.setTransform(-63.7,5.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFF3BB").s().p("AgyCTIgHgGQgJgCgLAFQgMAEgHgBQgBgFACgDIgLhDQgBgHAGgOQAFgMgEgIIgMgOQgIgKAEgHQAFgLAIAGIAMAIQAJAEAHgEQAFgDAGgHQAIgOAOgLIAbgVIAygsQAfgaAYgQQAcgSABATQAAAGgJAIIgOAKQgnAhgTAPIgaAUQgMAMgHANQgBADgFAdQgCAUgRAEIgCAuQgBAcgDARIAAAMQAAAIgDACIgFABQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAAAgBg");
	this.shape_211.setTransform(-63.7,5.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA3hyQgdAegNAbQgFACgIAGQgHAHgEACQgQAIgIAMQgNARgKAEQgNAHgVgBQgDAAgPgFQgNgCgDABQgJAGAHAIQAEAEAKAGQALALAGARIANAaQAAAMADAaQADAdABALQAHAEAIgEQAMgGACAAQAHgCAKAFQAKAEAFgBQAJgJgCgbQgBgWgGgRQgJgcgBgDQgCgRAQgJQAKgGACgFQAAgIACgHQAEgLAOgPQAOgPAfgdQAdgcAPgSQASgWADgHQAJgSgbAKQgaAJgfAfg");
	this.shape_212.setTransform(-72.6,4.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFF3BB").s().p("AhNCdIgEgoQgDgaAAgMIgNgaQgGgRgLgLQgKgGgEgEQgHgIAJgGQADgBANACIASAFQAVABANgHQAKgEANgRQAIgMAQgIIALgJQAIgGAFgCQANgbAdgeQAfgfAagJQAbgKgJASQgDAHgSAWQgPASgdAcQgfAdgOAPQgOAPgEALIgCAPQgCAFgKAGQgQAJACARIAKAfQAGARABAWQACAbgJAJQgFABgKgEQgKgFgHACIgOAGQgEACgEAAQgEAAgDgCg");
	this.shape_213.setTransform(-72.6,4.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhYAoQAGATAAAZQAAAOgBAgIAAAaQAEAIADACQACABAJgCQACAAAEgDQAFgCADgBQADgBAHABQAEAAAHAAQABAFADACQAEACAEgEQACgCAAgIQABgJAAgCQACgUgBgVQAAgMgEgIQgDgGgJgKQgJgKgCgDQgEgIAEgKQADgJAIgDQALgEADgEQAEgEABgLQAAgMADgEQADgGAHgHQAMgKABgBQAGgFAGgJQAEgEAHgKQAaghASgRQAHgGAPgOQAMgNACgLQgRgIgOALQgQAQgJAJQgIAIg9A4QgIAHgPAKQgOAJgIAIQgFAGgGATQgDALgUAAQgPgBgIgBQgMAAAEALQADAGAMAJQALAIADAIg");
	this.shape_214.setTransform(-79.6,3.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFF3BB").s().p("AgZCmQgEgCgBgFIgKAAQgHgBgEABIgHADQgEADgCAAQgJACgDgBQgDgCgDgIIAAgaIABguQgBgZgGgTQgCgIgMgIQgMgJgCgGQgFgLANAAIAXACQATAAAEgLQAFgTAGgGQAIgIAOgJIAWgRIBFhAIAZgZQAPgLARAIQgCALgMANIgWAUQgSARgbAhIgKAOQgHAJgFAFIgOALQgHAHgDAGQgCAEgBAMQgBALgDAEQgDAEgLAEQgJADgDAJQgDAKAEAIIALANQAJAKADAGQADAIABAMQABAVgDAUIAAALQgBAIgCACQgCADgDAAIgCgBg");
	this.shape_215.setTransform(-79.7,3.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhsAPQADAFALAEQANAEACACQANAJgHAOQgLAXAAACQgDAYAHAjQABACABANQAAAKADADQAEAHAGgBQAFgCACgHQACgIgEgRQgHgZAAAAQgCgNACgNQACgRAKAKQAOANAIAqQACAFABATQADARAJACQAFgJgBgXQAAgEgDgdQgBgNgGgQQgHgSgDgKQgCgIAAgEQAAgGAEgGQAEgFAEgFQAEgFABgHQABgSABgIQACgMALgKQAMgNAdgZQAYgXAOgSQANgSAHgIQADgDAHgHQAFgHAAgGQgBgHgIgCQgHgBgHADQgGACgFAHQgEAHgDADQgJAMgcAVQgZAUgJAPIgMAVQgIANgHAHQgNAMgEAGQgIAKgBANQAAAAgMABQgCAAgIAAIgVgBQACgCgDAAQgFADgDAGQgEAIADAFg");
	this.shape_216.setTransform(-86.9,1.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFF3BB").s().p("AgeCfQgBgTgCgGQgIgqgOgNQgKgKgCASQgCAMACANIAHAZQAEARgCAIQgCAIgFABQgGACgEgIQgDgDAAgKIgCgPQgHgjADgYIALgZQAHgOgNgJIgPgGQgLgEgDgEQgDgGAEgIQADgGAFgDQABAAAAAAQABAAAAAAQAAABAAAAQAAABgBAAIAVABIAKAAIAMgBQABgNAIgJQAEgHANgMQAHgHAIgNIAMgVQAJgPAZgUQAcgVAJgLIAHgLQAFgHAGgCQAHgDAHABQAIADABAGQAAAGgFAHIgKALIgUAaQgOARgYAXIgpAmQgLAKgCANIgCAZQgBAHgEAFIgIAKQgEAGAAAGQAAAEACAIIAKAcQAGAQABANIADAhQABAXgFAJQgJgCgDgQg");
	this.shape_217.setTransform(-86.9,1.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag+CkQABAQAFAGQADAEAGADQAHACAFABQAIAAADgCQACgDABgHQADgOgCgwQACgWAAgMQABgWgFgLQgEgIgBgDQgDgFABgHQAAgCADgOQACgJgDgGQAAAAgIgIQgFgEAHgGQADgDAKgBQAMgCADgBQAAgVACgGQADgMAJgLQAWgWASgbQAOgXARgXQAFgIABgDQAAgEgGgGQgKgJgJAHQgIAGgKAPQgLATgEAEQgUAagIANQgSAXgQANQgLAJgEAKQgBADgFAUQgBACgLAJQgKAJgBACQgBAJAAAOQAAAJABAQIAAA0QAAAIACASQABAQgDAJQgBADgEAGQgDAGADAFQACADAHABQAIABAEgDQgBgPAEgHQACASgFAEg");
	this.shape_218.setTransform(-93.8,3.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFF3BB").s().p("AgjDEQgFgBgHgCQgGgDgDgEQgFgGgBgQQAEgDAAgJIgBgKQgDAGAAAKIAAAGQgEADgIgBQgHgBgCgDQgDgFADgGIAFgJQADgJgBgQIgCgaIAAg0IgBgZIABgXQABgCAKgJQALgJABgCIAGgXQAEgKALgJQAQgNASgXIAcgnQAEgEALgTQAKgPAIgGQAJgHAKAJQAGAGAAAEQgBADgFAIQgRAXgOAXQgSAbgWAWQgJALgDAMQgCAGAAAVIgPADQgKABgDADQgHAGAFAEIAIAIQADAGgCAJIgDAQQgBAHADAFIAFALQAFALgBAWIgCAiQACAwgDAOQgBAHgCADQgDACgGAAIgCAAgAg+CkIAAgGQAAgKADgGIABAKQAAAJgEADIAAAAg");
	this.shape_219.setTransform(-93.8,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.1,-67,320.3,134);


(lib.steg_skull_upper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgZgNQAGgDAJACQABADADALQABAJAGAEQAKAFAJgGQAIgGgDgJ");
	this.shape.setTransform(14.3,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AABANQgGgEgBgJIgDgKIAiAHQADAJgIAGQgFADgFAAQgEAAgFgCgAgZgNQAGgDAJACIABAEg");
	this.shape_1.setTransform(14.3,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgzAdQgFgVAzgUQAxgVAJAQ");
	this.shape_2.setTransform(7.2,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AgFgOQAxgVAJAQIhoAuQgFgVAzgUg");
	this.shape_3.setTransform(7.2,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgWQgEAJgBAGQAAALALAT");
	this.shape_4.setTransform(6.6,-7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgFgHQAAgGAFgJIAGAtQgLgTAAgLg");
	this.shape_5.setTransform(6.7,-7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgcgNQAQAAAKAMQAHAIAEADQAIAFAMgC");
	this.shape_6.setTransform(0.3,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AAKAKIgKgKIAdANIgGABQgIAAgFgEgAgcgNQAQAAAKAMIACABg");
	this.shape_7.setTransform(0.3,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgZASIAFgDQAHgFANgKQANgNAKgE");
	this.shape_8.setTransform(-8.8,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AgDABQANgMAKgDIgoAdIARgOg");
	this.shape_9.setTransform(-8.5,2.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AglArQABgCABgBQAMgRACgLQABgDAAgJQABgGACgDQACgFAWgOQAZgOABADQABAEAGAE");
	this.shape_10.setTransform(-5.4,2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AgmAmIAHgGQAHgMACgJQABgDAAgIQABgHACgDQACgFAWgOQAZgOABADQABAEAGAEIhGBAIgHAKg");
	this.shape_11.setTransform(-5.3,2.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ACagiQgCgEgCgCQgDgHADgOQAGgRACgJQADgPAAgEQAAgGgDgHQgEgGgTgDQgSgCgIADQgFABgNANQgQAQgEADQgEACgEgBQgGgBgGACIgFADQABAAgEADQgFADgIABQgKABgFADQgHADgFAKQgDAGgEAKQgEAFgIADQgMAGgHAEQgHAFgaAVQgXARgLAGQgOAIgQATQgOASgIARQgHAPABATQAAATAGgEQAEgCADgFQADgEAEgCQAAgBABAAIABAAQANgHAIgKQAIgKADgCQAEgCAVgGQAYgGAMgFQAQgHAWgOQARgMAEAAQABAAACAAABfhjQAKgKAQAGIAAADIAFABQAEACgBAIQgBAEgDAIQgDAIABAFQABAFAFAGQADAEAFAFQACADgGAGQgCACgJADQgJADgDgBQgJgCgHgRQgHgPAAgKQgBgRAJgKgAAthJQALAAARAWQAIAJAGAXQABAGgHAAIgPABQgGABgKAEQgKAFgEABQgFABgDgDQgHgGAAAAQgIgDgIgLQgHgMAEgDQAGgCAHgIQAGgIAGgDQAFgCAEgHQADgFAGAAgAhpA0QAFADABAHQABAFgGAEQgGAEgHAAQgCAAgJACQgFABgFgDQgFgDAHgGQALgHADgDQAKgHAHADg");
	this.shape_12.setTransform(-0.8,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AigByQgBgTAHgPQAIgRAOgSQAQgTAOgIQALgGAXgRQAagVAHgFIATgKQAIgDAEgFIAHgQQAFgKAHgDQAFgDAKgBQAIgBAFgDQABgBABAAQABgBAAAAQAAgBAAAAQAAAAAAAAIAFgDQAGgCAGABQAEABAEgCIAUgTQANgNAFgBQAIgDASACQATADAEAGQADAHAAAGIgDATQgCAJgGARQgDAOADAHIAEAGIgIAEQgPAIgQAGQgMAEgLAGQgkAQgkAQIgDAFIAAADIgDAAQgEAAgRAMQgWAOgQAHQgMAFgYAGIgZAIQgDACgIAKQgIAKgNAHIgBAAIgBABQgEACgDAEQgDAFgEACIgBABQgFAAAAgQgAh6A4IgOAKQgHAGAFADQAFADAFgBIALgCQAHAAAGgEQAGgEgBgFQgBgHgFgDIgEgBQgGAAgHAFgAAkhEQgEAHgFACQgGADgGAIQgHAIgGACQgEADAHAMQAIALAIADIAHAGQADADAFgBIAOgGIAQgFIAPgBQAHAAgBgGQgGgXgIgJQgRgWgLAAQgGAAgDAFgABfhjQgJAKABARQAAAKAHAPQAHARAJACQADABAJgDQAJgDACgCQAGgGgCgDIgIgJQgFgGgBgFQgBgFADgIIAEgMQABgIgEgCIgFgBIAAgDQgGgCgFAAQgIAAgHAGg");
	this.shape_13.setTransform(-0.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-14,35.9,28.1);


(lib.steg_skull_lower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgtARQAFgCANgIQAOgHAIgDQAGgEASgDQATgDAIgD");
	this.shape.setTransform(10.2,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AgbAHQAOgHAHgDQAHgEASgDQASgDAIgDIhZAhIARgKg");
	this.shape_1.setTransform(10.2,-2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA9gEQgBAFgCAEQgDAEgGAEQgFAEgHgDQgHgFgEgCQgHgCAAgFQAAgEAHAAQAJAAABACQAAABAFgDQAWgNgCANgAimBNQAAADAMAFQAOAHAJABQAHABAGgGQAGgHAEgEQACgBAHgDQAMgFAagJQAXgHAjgKQALgEAQgCQARgCAEgBQAIgCAEgGQAGgIABAAQACgCAEADQAEAFAEAAQAGABASgTQAWgVAIgJQAjgjAAgMQAAgEgIACQgMADgFgBQgWgTgDgBAgEgSQAAADgIAIQgLAJhGAfQgLAFgdARQgIAFgHAEQgIAEgEAD");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AiDBdQgJgBgOgHQgMgFAAgDIAGgGIAMgHIAPgJIApgWQBFgfALgJQAJgIgBgDIAJgKIAQgNQAQgKASgIIAGACQAFABAFgGQAHgHAFgBQAKgBAJgHIAPgOQADABAWATQAFABAMgDQAIgCAAAEQAAAMgjAjIgeAeQgSATgGgBQgEAAgEgFQgEgDgDACIgGAIQgEAGgIACQgFABgQACQgQACgLAEIg6ARQgaAJgMAFIgIAEIgLALQgFAFgGAAIgCAAgAATAAQAAAFAHACIALAHQAGADAFgEQAHgEACgEQADgEABgFQACgNgWANIgGACQAAgCgJAAQgIAAABAEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-10.3,35.4,20.8);


(lib.steg_skull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgWQgEAJgBAGQAAALALAT");
	this.shape.setTransform(5.8,-7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AgFgHQAAgGAFgJIAGAtQgLgTAAgLg");
	this.shape_1.setTransform(5.9,-7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgZgNQAGgDAJACQABADADALQABAJAGAEQAKAFAJgGQAIgGgDgJ");
	this.shape_2.setTransform(12.7,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AABANQgGgEgBgJIgDgKIAiAHQADAJgIAGQgFADgFAAQgEAAgFgCgAgZgNQAGgDAJACIABAEg");
	this.shape_3.setTransform(12.7,-2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgtARQAFgCANgIQAOgHAIgDQAGgEASgDQATgDAIgD");
	this.shape_4.setTransform(11.2,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgbAHQAOgHAHgDQAHgEASgDQASgDAIgDIhZAhIARgKg");
	this.shape_5.setTransform(11.2,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgcgNQAQAAAKAMQAHAIAEADQAIAFAMgC");
	this.shape_6.setTransform(-0.5,-1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AAKAKIgKgKIAdANIgGABQgIAAgFgEgAgcgNQAQAAAKAMIACABg");
	this.shape_7.setTransform(-0.5,-1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgzAdQgFgVAzgUQAxgVAJAQ");
	this.shape_8.setTransform(6.4,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AgFgOQAxgVAJAQIhoAuQgFgVAzgUg");
	this.shape_9.setTransform(6.4,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgZASIAFgDQAHgFANgKQANgNAKgE");
	this.shape_10.setTransform(-9.6,2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AgDABQANgMAKgDIgoAdIARgOg");
	this.shape_11.setTransform(-9.3,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AglArQABgCABgBQAMgRACgLQABgDAAgJQABgGACgDQACgFAWgOQAZgOABADQABAEAGAE");
	this.shape_12.setTransform(-6.2,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AgmAmIAHgGQAHgMACgJQABgDAAgIQABgHACgDQACgFAWgOQAZgOABADQABAEAGAEIhGBAIgHAKg");
	this.shape_13.setTransform(-6.1,2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgUg6QgDAFgIADQgMAGgIAEQgHAFgZAVQgYARgLAGQgOAIgPATQgOASgIARQgHAPAAATQABATAGgEQADgCAEgFQADgEADgCQAPgIAIgKQAJgKACgCQAEgCAVgGQAYgGANgFQAQgHAWgOQASgMAEAAQALgCgNAOQgLALhFAeQgMAGgcAQQgcAQgFAEQgEAEAPAHQAOAGAKACQAGAAAGgFQAHgIAEgDQAFgFAqgNQAWgHAhgLQANgEAQgCQARgBAEgCQAIgCAEgFQAGgIABAAQACgCAEADQAEAEAEABQAGAAASgTQAWgXAIgJQAjggAAgMQAAgFgIACQgMADgFAAQgHgBgEgHQgDgKgDgFQgEgHAEgOQAGgRABgJQADgPAAgEQABgGgEgHQgDgGgUgDQgSgCgIADQgFABgNANQgQAQgEADQgDACgFgBQgFgBgGACIgGADQACAAgFADQgEADgJABQgKABgEADQgFADgGAKQgDAGgGAKgAAUhNQAEgFAFAAQAMAAARAWQAIAJAFAXQABAGgHAAIgPABQgFABgKAEQgKAFgEABQgFABgEgDQgGgGgBAAQgFgDgJgLQgJgMAHgDQAFgCAGgIQAGgIAFgDQAFgCAEgHgAh3A+QgGAEgIAAQgCAAgIACQgFABgFgDQgGgDAIgGQAKgHADgDQALgHAGADQAFADACAHQAAAFgFAEgABqhwIAAADIAEABQAFACgCAIQgBAEgDAIQgCAIABAFQAAAFAFAGQAEAEAFAFQACADgGAGQgDACgJADQgJADgDgBQgIgCgIgRQgGgPgBgKQgBgRAKgKQAKgKAQAGgAAdAtQAAgGAHAAQAJAAABADQAAAAAFgDQAWgMgCAMQgBAIgCAEQgDADgGAFQgFAEgHgDQgHgFgEgCQgHgDAAgFg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("Ah4CLQgKgCgOgGQgPgHAEgEQAFgEAcgQIAogWQBFgeALgLQANgOgLACQgEAAgSAMQgWAOgQAHQgNAFgYAGIgZAIQgCACgJAKQgIAKgPAIQgDACgDAEQgEAFgDACQgGAEgBgTQAAgTAHgPQAIgRAOgSQAPgTAOgIQALgGAYgRQAZgVAHgFIAUgKQAIgDADgFIAJgQQAGgKAFgDQAEgDAKgBQAJgBAEgDQABgBABAAQABgBAAAAQABgBAAAAQAAAAgBAAIAGgDQAGgCAFABQAFABADgCIAUgTQANgNAFgBQAIgDASACQAUADADAGQAEAHgBAGIgDATQgBAJgGARQgEAOAEAHQADAFADAKQAEAHAHABQAFAAAMgDQAIgCAAAFQAAAMgjAgIgeAgQgSATgGAAQgEgBgEgEQgEgDgCACIgHAIQgEAFgIACQgEACgRABQgQACgNAEIg3ASQgqANgFAFIgLALQgFAFgGAAIgBAAgAiKAvIgNAKQgIAGAGADQAFADAFgBIAKgCQAIAAAGgEQAFgEAAgFQgCgHgFgDIgEgBQgFAAgIAFgAAdAtQAAAFAHADIALAHQAHADAFgEQAGgFADgDQACgEABgIQACgMgWAMIgFADQgBgDgJAAQgHAAAAAGgAAUhNQgEAHgFACQgFADgGAIQgGAIgFACQgHADAJAMQAJALAFADIAHAGQAEADAFgBIAOgGIAPgFIAPgBQAHAAgBgGQgFgXgIgJQgRgWgMAAQgFAAgEAFgABQhsQgKAKABARQABAKAGAPQAIARAIACQADABAJgDQAJgDADgCQAGgGgCgDIgJgJQgFgGAAgFQgBgFACgIIAEgMQACgIgFgCIgEgBIAAgDQgGgCgGAAQgIAAgGAGg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgOgIQAAAEgCAJQgCAJABAHQAKACAWgRQAIgVgJgEQgJgEgRANg");
	this.shape_16.setTransform(-11.1,8.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AgRAVQgBgHACgJIACgNIACgCQARgNAJAEQAJAEgIAVQgTAPgLAAIgCAAg");
	this.shape_17.setTransform(-11.1,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-14.9,37.5,29.9);


(lib.steg_ribs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgnjeQACAMgBADQAAADADABQABABgFABQgKACgDgRQgBgDgCAFQgCAEAAAEQAAADAEAHQACAGgJAFQgNAGgEADQgGAFABAFQABADAEAIQACAEgCADQgCACgFgBQgGgCgCABQgEABAAAQQAAACAAAGQgBAGgHAFQgQANAAALQAAAHgNAOQgEACgCADQgEAGAGADQAGAEgBAAQgHADgCACQgLAKgDADQgDADgGALQgFAKAAAdQAAAdAFARQAKAhAMAKQAGAEASAbQARAcAGAEQAZAXAFAEQAZAUASAEQALADAUAIQAPAGAMgBQAOgCAtgpQAegcATgVQAHgIAHggQAGgcABgQQADgTABgNQACgXgGgQQgHgVgLgVQgKgSgGgFQgEgDgXgeQgXgegEgCQgFgDgFADQgCABABgBQACgDgDgEQgFgFgEgFQgEgFgMgJQgNgJgEgFQgPgOgEgJQgBgEgCAIQgBAHgBgEQgBgEgFgEQgDgEgBgEQgBgHgMgPQgHgJgIAJQgCACACALg");
	this.shape.setTransform(-51.7,-17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AAJDsQgUgIgLgDQgSgEgZgUIgegbQgGgEgRgcQgSgbgGgEQgMgKgKghQgFgRAAgdQAAgdAFgKIAJgOIAOgNIAJgFQABAAgGgEQgGgDAEgGQACgDAEgCQANgOAAgHQAAgLAQgNQAHgFABgGIAAgIQAAgQAEgBIAIABQAFABACgCQACgDgCgEIgFgLQgBgFAGgFIARgJQAJgFgCgGQgEgHAAgDQAAgEACgEQACgFABADQADARAKgCQACgBAAAAQABAAABAAQAAgBAAAAQAAAAAAAAQgDgBAAgDIgBgPQgCgLACgCQAIgJAHAJQAMAPABAHQABAEADAEQAFAEABAEQABAEABgHQACgIABAEQAEAJAPAOQAEAFANAJQAMAJAEAFIAJAKQADAEgCADQAAAAAAAAQgBAAABAAQAAAAAAAAQABAAAAAAQAFgDAFADQAEACAXAeQAXAeAEADQAGAFAKASQALAVAHAVQAGAQgCAXQgBANgDATQgBAQgGAcQgHAggHAIQgTAVgeAcQgtApgOACIgEAAQgKAAgNgFg");
	this.shape_1.setTransform(-51.7,-17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhIilQgIgKgGgCQABAEAAAHQgEgEgDAHQgDAJgCADQgCADgEAFQgEAFgCADQgEAIABARQACASgDAHQgCgCgFgLIAAASQgCgDgCAAQgDAAgCAAQgDAGAAATQgEgDgCgCQgCAFAAALQgDgDgBgCQgDAGABAKQACAMgBACIACAJQAAAKgCASQgBASABAMQACAMAKAKQAEAEAQALQAQALAhARQAKAGAJAKQADAEAMAQQALAQADAEQAKAKAJADQANADAQgFQAOgFAKgJQAPgOAHgHQAMgLALgHQAYgPANgdQAQglgNgUQgGgIgOgLQgQgKgHgFQgEgDgRgLQgNgIgHgIQgGgIgIgOQgJgQgFgGQgPgUgHgFQgFgFgLgEQgNgFgFgEIgfgXQgEgDgKgLg");
	this.shape_2.setTransform(-68.2,5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AADCyQgJgDgKgKIgOgUIgPgUQgJgKgKgGQghgRgQgLIgUgPQgKgKgCgMQgBgMABgSIACgcIgCgJIgBgOQgBgKADgGIAEAFQAAgLACgFIAGAFQAAgTADgGIAFAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABABIAAgSQAFALACACQADgHgCgSQgBgRAEgIIAGgIIAGgIIAFgMQADgHAEAEIgBgLQAGACAIAKQAKALAEADIAfAXQAFAEANAFQALAEAFAFQAHAFAPAUIAOAWQAIAOAGAIQAHAIANAIIAVAOIAXAPQAOALAGAIQANAUgQAlQgNAdgYAPQgLAHgMALIgWAVQgKAJgOAFQgKADgIAAIgLgBg");
	this.shape_3.setTransform(-68.2,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ADfgXQAEAXABAGQACATgFALQgFANgPASQgTAWgFAIQgKARgGAJQgJAQgDALQgBADgBAMQgCAKgCAFQgLAUgJAJQgKAMgQACQgUAAgLACQgKACgTAGQgUAGgJACQgXAGgYAHQgqAOgMgFIgnAJQgmgVgRgNQgcgWgLgcQgFgLgBgSQABgVAAgKQAAgpACgUQAAgUABgLQAAgUAHgKQABgCAEgCQAEgCABAAQABgDAAgFQgBgGAAgBQACgIALgSQAaguAGgIQAFgGAIgHQAEgDAKgIQADgDAFgJQAFgIADgDQAEgDADAAQACAAAFACQAAgLADgFQACgDAJgIQALgKALgUQAFgKAPgQQADgDAFgLQAGgKAFAAQABADACAGQABAGAEAAQACgFgDgKQgCgLABgDQACgGAHAAQAHAAAEAGQAJgNAGAQQADgQAOAKQAGAEAPARQAMAPAbAdQAIAIAOAOQAMANAIALQAGAIAHASQAGASAGAHQAHgIAFADQADACAHAKQAEAEAIAFQAIAGADAEQAPARAIAng");
	this.shape_4.setTransform(10.6,-51.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("Ai3DuQgcgWgLgcQgFgLgBgSIABgfQAAgpACgUIABgfQAAgUAHgKIAFgEQAEgCABAAIABgIIgBgHQACgIALgSQAaguAGgIQAFgGAIgHIAOgLQADgDAFgJQAFgIADgDQAEgDADAAIAHACQAAgLADgFQACgDAJgIQALgKALgUQAFgKAPgQIAIgOQAGgKAFAAIADAJQABAGAEAAQACgFgDgKQgCgLABgDQACgGAHAAQAHAAAEAGQAJgNAGAQQADgQAOAKQAGAEAPARIAnAsIAWAWIAUAYQAGAIAHASQAGASAGAHQAHgIAFADQADACAHAKQAEAEAIAFIALAKQAPARAIAnQAEAXABAGQACATgFALQgFANgPASQgTAWgFAIIgQAaQgJAQgDALIgCAPQgCAKgCAFQgLAUgJAJQgKAMgQACQgUAAgLACIgdAIIgdAIQgXAGgYAHQgqAOgMgFIgnAJQgmgVgRgNg");
	this.shape_5.setTransform(10.6,-51.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ACpBhQgIgaAAgFQAAgNADgJQAEgKABgLQABgYgQgyQgJgogIgVQgOglgZgFQgFgBgIACQgGABgGgCQgRgIgHgIQgDgEgEgJQgEgJgDgEQgDgDgIgHQgIgHgDgEQgMgYgGgNQgOgZgOgBQAAADgDAFQgOgLgFAIQgCAEgBATQgEAAgEgCQgEgEgCgCQgDAGgBAKQgBADgCADQgDACgCACQgMAMgBAFQgCAEABAFQABAGgBACQgBAEgGAJQgEAHgBAHQgDAYAEAJQgPgLgHASQgEAMAAAQQACAQgGAkQgMAEgBACQgDADAAAPQAAADgFANQgEAMAAADQABAFgEALQgDAMAAAFQAAAOAEAPQACAJAIATQAFANgCARQgEAcAAACQAAAiAXAiQAMAUAQAOQAIAIAAAEQAAACgBABQAFAAAIAFQAIAFAFABQALACATgBQAfgBAfgVQAMgHARgQQATgRAJgHQAEgCAZgOQASgJAIgKIARgYQACgDAIgJQAIgJADgEQAFgKgFgVg");
	this.shape_6.setTransform(-24,-39.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AhJEYQgFgBgIgFQgIgFgFAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAgEgIgIQgQgOgMgUQgXgiAAgiIAEgeQACgRgFgNIgKgcQgEgPAAgOQAAgFADgMQAEgLgBgFQAAgDAEgMQAFgNAAgDQAAgPADgDQABgCAMgEQAGgkgCgQQAAgQAEgMQAHgSAPALQgEgJADgYQABgHAEgHQAGgJABgEIAAgIQgBgFACgEQABgFAMgMIAFgEQACgDABgDQABgKADgGIAGAGQAEACAEAAQABgTACgEQAFgIAOALQADgFAAgDQAOABAOAZQAGANAMAYQADAEAIAHIALAKQADAEAEAJQAEAJADAEQAHAIARAIQAGACAGgBQAIgCAFABQAZAFAOAlQAIAVAJAoQAQAygBAYQgBALgEAKQgDAJAAANQAAAFAIAaQAFAVgFAKQgDAEgIAJIgKAMIgRAYQgIAKgSAJIgdAQQgJAHgTARQgRAQgMAHQgfAVgfABIgKAAQgMAAgIgBg");
	this.shape_7.setTransform(-24,-39.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgPAOQAAAEAIgEQAGgEADgEQACgBAHgFQAGgDgBgFQgEgNgMANQgQAQABAGg");
	this.shape_8.setTransform(14.2,72.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AgPANQgBgFAQgPQAMgOAEAOQABAEgGADIgJAGQgDAEgGADIgGADQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_9.setTransform(14.2,72.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgRARQASgDAGgJQADgDAGgHQAFgIgFgCQgGgDgPALQgGAFgEAEQgFAJADAGg");
	this.shape_10.setTransform(10.6,73.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AgPACQAEgEAGgFQAPgLAGADQAFACgFAIIgJAKQgGAJgSADQgDgGAFgJg");
	this.shape_11.setTransform(10.6,73.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgPAOQAHACAMgJQAPgIgBgHQAAgIgLAEQgHADgGAHQgHAGgDADQgEAFAFACg");
	this.shape_12.setTransform(6.7,74.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AgPAOQgFgCAEgFIAKgJQAGgHAHgDQALgEAAAIQABAHgPAIQgJAHgHAAIgDAAg");
	this.shape_13.setTransform(6.7,74.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAHADQgLAEgcACIgUADQgPgBgFACIgDAIQAnAAApgKIAngIQARgDACAAQAOgFABgGQABgMgPAEQgFACgPAHQgSAJgTAEg");
	this.shape_14.setTransform(-3.1,75.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AhJANQAFgCAPABIAUgDQAcgCALgEQATgEASgJQAPgHAFgCQAPgEgBAMQgBAGgOAFIgTADIgnAIQgpAKgnAAg");
	this.shape_15.setTransform(-3,75.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAngTQgLAHgEACQgaANgLAEQgFACgUABQgQAAgCAFQgFAIAPAAQANgDAcgGQAYgGAPgIQAggLgKgIQgGgFgLAFg");
	this.shape_16.setTransform(-6.8,74.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("Ag4APQACgFAQgBQAUAAAFgCQALgEAagNIAPgJQALgGAGAGQAKAHggAMQgPAHgYAHIgpAJQgPAAAFgIg");
	this.shape_17.setTransform(-6.8,74.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLABQgEACgIACQgIABgDABIgFACQgEADABAEQABAEAEACQAEACAGgDQADgBAGgDQAMgFAXgIQAXgIADgLQACgPghASg");
	this.shape_18.setTransform(-11.1,73.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AglAWQgEgCgBgEQgBgEAEgDIAFgCIALgCQAIgCAEgCIAXgNQAhgSgCAPQgDALgXAIIgjANIgJAEIgGACIgEgBg");
	this.shape_19.setTransform(-11.1,73.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AingWQgEAAgXgHQgQgGAGAHQAFAGBVAaQBYAcAVAAQATABA3gBQA1gCAOgBQAIgBAegDQAagEAEgEQAKgIgZgCQgCAAgKABQgGABgCgEQgCgEgGgBQgGgCgEABQgCABgFAEQgEAGgEABQgHACg6AAQg8AAgNgCQhAgKg2gMQgtgLgCAAg");
	this.shape_20.setTransform(-32,76);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AgFAgQgVAAhYgcQhVgagFgGQgGgHAQAGQAXAHAEAAIAvALQA2AMBAAKQANACA8AAQA6AAAHgCQAEgBAEgGQAFgEACgBQAEgBAGACQAGABACAEQACAEAGgBIAMgBQAZACgKAIQgEAEgaAEIgmAEIhDADIg7ABIgPgBg");
	this.shape_21.setTransform(-32,76);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgagBQAFgDAJgGQAUgNABgBQADgCAHgIQAIgHAFACQAEABADAJQADAHAAAGQgBAZgdAKQgNAKgLAFQgUALgGgHQgEgEADgHIADgYQABAAAJgEg");
	this.shape_22.setTransform(33.4,-15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AgmAmQgEgEADgHIADgYQABAAAJgEIAOgJIAVgOIAKgKQAIgHAFACQAEABADAJQADAHAAAGQgBAZgdAKIgYAPQgMAHgHAAQgFAAgCgDg");
	this.shape_23.setTransform(33.4,-15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAWgmQgaAngFALQgEAIgMAqQgLAogEAFQgXAgABgXQABgTAMguQANgzAIgHQAFgGAXguQAUgqAIgEQAHgDARgNQANgJgDAMQgDAPgMAXQgLAWgOAUg");
	this.shape_24.setTransform(32.1,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("Ag+B0QABgTAMguQAOgzAHgHQAFgGAXguQAUgqAIgEQAHgDARgNQAOgJgEAMQgDAPgLAXQgMAWgOAUQgaAngFALQgEAIgMAqQgLAogEAFQgNATgFAAQgEAAAAgKg");
	this.shape_25.setTransform(32.1,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAwjpQADgEALgBQALgCAAAHQACAMAAACQgBAGgHAGQgLAJgcAmQgfAtgNAcQgQAhgKA3QgMA7ACAuQAFB5gFAJQgDAFgIgBQgJgCAAgIQgCg2AAg1QAAhoALgiQAMguAihBQAhhGAgglg");
	this.shape_26.setTransform(29.7,7.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF3BB").s().p("Ag/DwQgJgCAAgIQgCg2AAg1QAAhoALgiQAMguAihBQAhhGAgglQADgEALgBQALgCAAAHIACAOQgBAGgHAGQgLAJgcAmQgfAtgNAcQgQAhgKA3QgMA7ACAuQAFB5gFAJQgDAEgGAAIgCAAg");
	this.shape_27.setTransform(29.7,7.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAOklQgRAXABAPQABAGgKAoQgKAoAAAHQAAAEgLBLQgKBIACALQABAHAFB/QAEB7ADAJQADAIACAOQADALAHABQAGAAgGhcQgIhwABgQQABgnAHhPQAHhTAEgPQAFgbAFgRQAIgeAGgNQAYg0gLgMQgIgJgDgCQgFgCgHAHg");
	this.shape_28.setTransform(23.3,10.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF3BB").s().p("AgMEsQgHgBgDgLIgFgWQgDgJgEh7IgGiGQgCgLAKhIIALhPQAAgHAKgoQAKgogBgGQgBgPARgXQAHgHAFACQADACAIAJQALAMgYA0QgGANgIAeIgKAsQgEAPgHBTQgHBPgBAnQgBAQAIBwQAGBcgGAAIAAAAg");
	this.shape_29.setTransform(23.3,10.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgglFQgDAJAAANQAAAPADAGQADAGAFgCQADgBAFgDQACAAgDgOQgCgNADgCQADgDAAA3QABA2gDAPQgEASAQCcQAAAJADBwQACBsACALQAAACAIA+QAHA0AFAHQAFAIADgBQACAAACgHQABgFgKiNQgKiUAAgJQAAgWgBhrQgChzAAgMQAAgCABg9QABgzgDgGQgIgNgCgDQgFgHgIACQgOAEgIAYg");
	this.shape_30.setTransform(15.5,15.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFF3BB").s().p("AAYFbQgFgHgHg0IgIhAQgCgLgChsIgDh5QgQicAEgSQADgPgBg2QAAg3gDADQgDACACANQADAOgCAAIgIAEQgFACgDgGQgDgGAAgPQAAgNADgJQAIgYAOgEQAIgCAFAHIAKAQQADAGgBAzIgBA/IACB/IABCBIAKCdQAKCNgBAFQgCAHgCAAIAAAAQgDAAgFgHg");
	this.shape_31.setTransform(15.5,15.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhflsQgBAMAFAIQAGAJAJgBQAIgBADgLQACgJgDgHQgEgJACgBQACgBADATQABAFATBHQARBCAGAqQAGAnAHBnQAHBdAAAIQABAKAMBLQAMBJAFANQAEALAVBFQAVBEADAGQAFAMAHgCQAIgBgEgPQgHgWgUhSQgWhfgFgmQgUiZgChPQgBgkgNhSQgLhOgCgKQgGgrgEgTQgKgxgOgFQgSgGgFABQgGABgIALQgIAKgCADQgEAFgCAMg");
	this.shape_32.setTransform(9.5,21.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFF3BB").s().p("ABPGMQgDgGgVhEQgVhFgEgLQgFgNgMhJIgNhVQAAgIgHhdQgHhngGgnQgGgqgRhCIgUhMQgDgTgCABQgCABAEAJQADAHgCAJQgDALgIABQgJABgGgJQgFgIABgMQACgMAEgFIAKgNQAIgLAGgBQAFgBASAGQAOAFAKAxQAEATAGArIANBYQANBSABAkQACBPAUCZQAFAmAWBfQAUBSAHAWQAEAPgIABIgCABQgGAAgEgLg");
	this.shape_33.setTransform(9.5,21.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgxhKQgzjNgLgUQgEgIgOgkQgNgdgDgDQgCgCAEALQAGAPgDAGQgDADgGABQgIABgGgFQgGgGADgWQADgUAEgJQAEgHAEgBQAEgCAHABQAIABAXAlQAYAmAKAfQAJAYAeB7QAgCFACAIQAGAWBLC3QBLC1AHAOQAHAMAAAFQAAAEgHAEQgGAFgFgDQgEgCgHgMQgKgQhQjGQhTjOgPgzg");
	this.shape_34.setTransform(-1.8,29.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFF3BB").s().p("ACWGbQgEgCgHgMQgKgQhQjGQhTjOgOgzQg0jNgLgUIgSgsQgMgdgEgDQgCgCAEALQAHAPgEAGQgDADgGABQgIABgGgFQgGgGADgWQADgUAEgJQAEgHAEgBQAEgCAHABQAIABAXAlQAXAmALAfQAJAYAeB7IAjCNQAFAWBLC3QBKC1AIAOQAHAMAAAFQgBAEgGAEQgEADgEAAIgDgBg");
	this.shape_35.setTransform(-1.8,29.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABvEmQgphKghhHQgqhfg1iEQgvh4gDgJQgFgKgTg+QgQg1gEgFQgFgFgBAEQgBABgBAOQgBAGgJABQgJAAgEgHQgFgJAFgZQAGgbALgEQALgEAFACQACABAGAIQAEAEBMDCQBDC0ALAbQAXBDBHCIQAkBFAjBBQAGANgBAHQAAAGgIAEQgHADgEgHQgHgNgIgNQgRgZgYgqg");
	this.shape_36.setTransform(-7.3,33);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFF3BB").s().p("ACnGDIgPgaQgRgZgYgqQgphKghhHQgqhfg1iEIgyiBQgFgKgTg+QgQg1gEgFQgFgFgBAEIgCAPQgBAGgJABQgJAAgEgHQgFgJAFgZQAGgbALgEQALgEAFACIAIAJQAEAEBMDCIBODPQAXBDBHCIIBHCGQAGANgBAHQAAAGgIAEIgEABQgEAAgDgFg");
	this.shape_37.setTransform(-7.3,33);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AiulGQADAKgBAHQgBAIgPAAQgPABACgFQAAgBgBgSQgBgTACgFQADgKAHgJQAIgLAGACQAGABATAdQAYAiACADQAKAMB0EVQACAJBkCvQBhCuADAKQAEAOgHAKQgGAKgHgJQgKgMi9lNQgGgKg+iJQg/iOgEgGQgFgKgLgbQgGgPgEgHQgCgHgBgBIACAEQABACAAACg");
	this.shape_38.setTransform(-13,35.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFF3BB").s().p("AC6F1QgKgMi9lNQgGgKg+iJIhDiUIgQglIgKgWIgBgEIgCgEIADAIQADAKgBAHQgBAIgPAAQgPABACgFIgBgTQgBgTACgFQADgKAHgJQAIgLAGACQAGABATAdIAaAlQAKAMB0EVQACAJBkCvQBhCuADAKQAEAOgHAKQgDAFgDAAQgDAAgEgEgAixlOIACAEIABAEIgDgIg");
	this.shape_39.setTransform(-13,35.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ai+kZQgBAEgEAEQgHAGAEgBQAEAAgGAEQgTAOAAgTQgDgWgBgNQgDgWAHgBQAGAAAJgFQAHgEAEACQAGACAgAsQAhAuAJAXQAJAVBTCMQBNCEAOAUQCMDLAJASQAGAMAAABQABADgGADQgGAEgLgJQgNgMgjgrQhHhbhdiXQhbiOgXg5QgNgfgJgRQgQgcgVgVQgCgDgDgIQgCgDgBgDQgCgEgBgDQAAgDACADQACAEgBADg");
	this.shape_40.setTransform(-18.4,40);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFF3BB").s().p("ADLFJQgNgMgjgrQhHhbhdiXQhbiOgXg5QgNgfgJgRQgQgcgVgVQgCgDgDgIIgDgGIAAgCIgBgFQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAABAAAAIADAHQgBAEgEAEQgHAGAEgBQABAAABAAQAAABAAAAQgBAAgBABQgBABgBABQgTAOAAgTIgEgjQgDgWAHgBQAGAAAJgFQAHgEAEACQAGACAgAsQAhAuAJAXQAJAVBTCMQBNCEAOAUQCMDLAJASIAGANQABADgGADIgEACQgFAAgIgHgAi+kZIgDgHQAAAAAAgBQAAAAABAAQAAAAAAAAQAAABABAAIABAFIAAACIAAAAg");
	this.shape_41.setTransform(-18.4,40);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AjQjWQAAACABACQADANAHAKQAGAJBxB6QBoByAWAWQAcAfA7A/QBIBMAGAEQAHAGAIgCQAIgDgFgJQgEgIh2h+Qh3h+gIgJQgjgogagfQgzg7gIgGQgJgGgUggQgUgggEgFQgFgLgEgFQgGgIgOABQgMABAAAHQACAVAAAEQgCAHAMAHQAFACAGgFQAAAAABgBQAEgEgDgC");
	this.shape_42.setTransform(-30.9,45.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFF3BB").s().p("ADVD+QgGgEhIhMIhXheIh+iIQhxh6gGgJQgHgKgDgNIgBgEQAAAAABgBQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBABAAAAIgBABQgGAFgFgCQgMgHACgHIgCgZQAAgHAMgBQAOgBAGAIQAEAFAFALIAYAlQAUAgAJAGQAIAGAzA7IA9BHIB/CHQB2B+AEAIQAFAJgIADIgEAAQgGAAgFgEg");
	this.shape_43.setTransform(-30.9,45.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ADVEmQgFgChpiFQhpiHgHgGQgJgHhKhhQhKhjgEgEQgEgDgJgaQgHgVgFAGQgIAJgFABQgGACgHgHQgIgHAAgbQAAgbAIAAQACAAAIgFQAFgCAGAHQAJAMA0BjQAJAODUEMQAAABBSBeQBFBPgDAGQgCAJgEACQgEACgHgDg");
	this.shape_44.setTransform(-24.7,42.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFF3BB").s().p("ADVEmQgFgChpiFQhpiHgHgGQgJgHhKhhQhKhjgEgEQgEgDgJgaQgHgVgFAGQgIAJgFABQgGACgHgHQgIgHAAgbQAAgbAIAAQACAAAIgFQAFgCAGAHQAJAMA0BjQAJAODUEMIBSBfQBFBPgDAGQgCAJgEACIgEAAIgHgBg");
	this.shape_45.setTransform(-24.7,42.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AjYjLQACgKAAAAQABgCAJABQANADA9A7QEuEuAKAOQAEAGAUASQAPAPAAAFQAAAIgDAAQgDAAgHgIQgKgKlZlNQgGgFgWgaQgQgSgFABQgEABACAGQADAHgDAEQgDAEgCACIgIgGQgJgHAAgMQAAgEAEgPg");
	this.shape_46.setTransform(-38.6,47.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFF3BB").s().p("ADPDQIlilXQgGgFgWgaQgQgSgFABQgEABACAGQADAHgEAEIgEAGIgIgGQgJgHAAgMIADgTIACgKQACgCAJABQANADA9A7QEuEuAKAOQAEAGATASQAQAPAAAFQAAAIgDAAQgDAAgIgIg");
	this.shape_47.setTransform(-38.6,47.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAfj5QgRAIgJAKQgDAFgCAIQgBAEgDAJQgBACABAGQgFABgCgEQgDgEgBAAQgDABgCAEQAAACgCAFQgEAIgIAGQgKAIgFADQgQAMgcAeQgJAKgtAUQgkAQgGAZQgCAHgBAQQgBAQgBAHQgCAHgFAPQgFAOgBAJQgCAPABASQACASAEALIAJAnQAEADAEAKQADAFADAJQAEAJAHASQAEAJAHATQAHARAJAHQALAJATAAQAMABAWgEQAJgBAcgFQAXgEAOgBQATgCAtANQArAMAYgFQAJgBAIgIQAFgFAHgLQAEgGAJgMQAIgLACgIQAEgNAFgjQAEgeAHgRQAZhFgphGQgZgpgIgKQgRgVgBgBQgJgOgEgMQgDgJgBgUQgBgUgDgKQgFgUgEgIQgFgPgMgJQgGgFgHgBQgBgBgMAAQgFgBgCgBQgDAAgEACQgKAFgFACg");
	this.shape_48.setTransform(46.7,-53.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFF3BB").s().p("AA9D6QgtgNgTACIglAFIglAGQgWAEgMgBQgTAAgLgJQgJgHgHgRQgHgTgEgJIgLgbIgGgOQgEgKgEgDIgJgnQgEgLgCgSQgBgSACgPIAGgXIAHgWIACgXQABgQACgHQAGgZAkgQQAtgUAJgKQAcgeAQgMIAPgLQAIgGAEgIIACgHQACgEADgBIAEAEQACAEAFgBQgBgGABgCIAEgNQACgIADgFQAJgKARgIIAPgHQAEgCADAAIAHACIANABQAHABAGAFQAMAJAFAPQAEAIAFAUQADAKABAUQABAUADAJQAEAMAJAOIASAWQAIAKAZApQApBGgZBFQgHARgEAeQgFAjgEANQgCAIgIALIgNASQgHALgFAFQgIAIgJABIgPACQgVAAgfgJg");
	this.shape_49.setTransform(46.7,-53.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AALhsQgJgDgCgCQgIgDgGADQgFADgBAHQgBADgBAKQAAAMgIAUQgHAUgBAMQgBARAEATQACAMAGAZQACAJAEAYQAFAVAJAJQAVAUAFg2QAFg2AAgPIgGgiIgDADQgIgIAIgRQALgTADgFQAHgMAAgBQAEgJgDgFQgCgDgKgCQgLgCgDgBg");
	this.shape_50.setTransform(79,-15.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFF3BB").s().p("AgHBuQgJgJgFgVIgGghIgIglQgEgTABgRQABgMAHgUQAIgUAAgMIACgNQABgHAFgDQAGgDAIADIALAFIAOADQAKACACADQADAFgEAJIgHANIgOAYQgIARAIAIIADgDIAGAiIgFBFQgDAngOAAQgDAAgGgFg");
	this.shape_51.setTransform(79,-15.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAri3QATALgQAqQgHAWgCAHQgEAQABAPQABAGACAIQAAAHgDAHQgHASgBAKQgDAPACAhQACAigBAQQgBAGgDAUQgDAQAAALQAAARABAgQgRABgIgIQgLgHgBgBQgIgEgGAEQgFAHgDACQgFAGgGgIQgDgEAAgLQABgMAAgEQgBgUAAgKQAAgUAEgKQABgEAFgHQAGgIABgDQAFgJAAgTQAAgHgBgRQgCgNABgJQAAgNAGgKQABgDAMgRIABgFQABgFAEgJQAGgKABgEQABgJAAgTQAAgHgDgVQgFgSACgKQAWgNAAgBQAPgGAMAGg");
	this.shape_52.setTransform(70.6,-8.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFF3BB").s().p("AgFCzIgMgIQgIgEgGAEIgIAJQgFAGgGgIQgDgEAAgLIABgQIgBgeQAAgUAEgKQABgEAFgHIAHgLQAFgJAAgTIgBgYQgCgNABgJQAAgNAGgKIANgUIABgFQABgFAEgJIAHgOQABgJAAgTQAAgHgDgVQgFgSACgKIAWgOQAPgGAMAGQATALgQAqIgJAdQgEAQABAPIADAOQAAAHgDAHQgHASgBAKQgDAPACAhQACAigBAQIgEAaQgDAQAAALIABAxIgEABQgOAAgHgIg");
	this.shape_53.setTransform(70.6,-8.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgcgyIgKAZQANABAGASQAEALAAARQgCAegPAYQgMAUAAAhQAAAEgBAbQABAXAJAAQAEgBAGgHQAGgIAHAAQAHgBAFAEQABABAHAGQAPAJAGgOQADgHABgUQABgUABgKQAAgSgBgMQgBgGgJgWQgHgPAEgOQABgGANgSQAKgMgBgMQgBgEgGgZQgEgRABgNQAIgjADgYQAFgwgXAFQgIACgEAMQgDAGgDALQgFAMgJAXQgHAFgBALQgBAGABANQAAAHgFAJQgCADgIALg");
	this.shape_54.setTransform(62,-8.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFF3BB").s().p("AgtCgIABgfQAAghAMgUQAPgYACgeQAAgRgEgLQgGgSgNgBIAKgZIAKgOQAFgJAAgHIAAgTQABgLAHgFIAOgjQADgLADgGQAEgMAIgCQAXgFgFAwQgDAYgIAjQgBANAEARIAHAdQABAMgKAMQgNASgBAGQgEAOAHAPQAJAWABAGQABAMAAASIgCAeQgBAUgDAHQgGAOgPgJIgIgHQgFgEgHABQgHAAgGAIQgGAHgEABIgBAAQgIAAgBgXg");
	this.shape_55.setTransform(62,-8.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgEhIQAEgUACgNQAAgEACgYQAAgRAFgKQAEgJACgCQAEgEAJgBQAKgBADADQADADgBALQAAAKgFARQgFASgBAKQgBAZAGAhQABAEACAJQACAJAAAFQgBAJgGAPQgFAWAGAnQAGAtgBARQgBAVgCALQgBANgBABQgCAFgIgCQgDgBgGgFQgGgFgFgBQgHgBgQAKQgQAJgDgNQAAgTgCgKQgFggAAgaQAAgiAGgNQAIgRABgCQADgKAAgJIACgYQAAgJABgDQABgDAFgIQACgCAHgQQACgCABgCQAEgJACgCAgMgxQAEgNAEgK");
	this.shape_56.setTransform(34.6,-9.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFF3BB").s().p("AAaCwQgDgBgGgFQgGgFgFgBQgHgBgQAKQgQAJgDgNQAAgTgCgKQgFggAAgaQAAgiAGgNIAJgTQADgKAAgJIACgYIABgMIAGgLIAJgSIADgEQAEgUACgNIACgcQAAgRAFgKQAEgJACgCQAEgEAJgBQAKgBADADQADADgBALQAAAKgFARQgFASgBAKQgBAZAGAhIADANQACAJAAAFQgBAJgGAPQgFAWAGAnQAGAtgBARIgDAgIgCAOQgBAEgFAAIgEgBg");
	this.shape_57.setTransform(34.6,-9.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AASitQgMAFgGAYQgGASgDATQgCAUgMA5QgKAIABATQAAAEAFAYQACAMAAACQABAIgEAGQgCADgIAHQgGAGgBAGQgEAPAGAuQADAXADAGQAHAMARgLQAHgFAFgBQADgBAIAEQACABAJAIQAHAFAEAAQAFgLABgRQABgUABgKQADgmgJgTQgPgeALgcQALgZgGgeQgHgXgDgMQgEgWAGgOQADgEAHgJQAHgJACgFQAEgLgEgFQgHgFgDgFg");
	this.shape_58.setTransform(53.1,-8.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFF3BB").s().p("AAVCrIgLgIQgIgEgDABQgFAAgHAGQgRALgHgMQgDgGgDgYQgGgtAEgPQABgGAGgGIAKgKQAEgGgBgIIgCgOIgFgcQgBgTAKgIQAMg5ACgUQADgTAGgSQAGgYAMgFIASgDQADAGAHAFQAEAFgEAKQgCAGgHAJIgKANQgGAOAEAVIAKAjQAGAfgLAZQgLAcAPAeQAJATgDAmIgCAeQgBARgFALQgEAAgHgGg");
	this.shape_59.setTransform(53.1,-8.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAhEQgCAYgCAKQgEAPgKAPQgQATAAAIQgBADABAEQAAAEgBAEQAAACgHAIIgCAEQAAAkACAZQABAFgBAaQABAYADAEQAFAFAJgDQAFgBAJgEQAPgEALADQADABAJAGQAJAEAFgEQADgDAAgKQgBgLAAgEIAAg+QABgPAAgBQAAgHgFgGQgGgHgEgDQgDgGgBgIQAAgJAIgUQAGgRgCgJQAAgBgLgYQgHgOAEgOQACgKAGgRQAHgTACgIQAEgOgBgOQgCgVgPAEQgGABgCAKQAAADgBALQgBALgHAQQgKAYAAAfg");
	this.shape_60.setTransform(43.6,-9.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFF3BB").s().p("AAcCvIgMgHQgLgDgPAEQgIAEgGABQgIADgFgFQgFgEAAgYIAAgfQgCgZAAgkIACgEIAHgKQABgEgBgEIAAgHQABgIAQgTQALgPADgPQACgKACgYQAAgfAKgYQAHgQAAgLIACgOQACgKAGgBQAPgEACAVQAAAOgDAOIgJAbIgIAbQgEAOAGAOIAMAZQACAJgGARQgIAUAAAJQAAAIAFAGIAKAKQAEAGAAAHIgBAQIAAA+IABAPQAAAKgDADQgDACgDAAQgDAAgFgCg");
	this.shape_61.setTransform(43.6,-9.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AABixQAGgGAFACQAWAGgGAQQgCAIgHAOQgFAMAEAFQACABAIAFQAEACgCAGQgDAHADAIQACAGAIALQACACAJAIQADAEgCAGQgCAIAAADQAAADADAOQADAJAEACQABABgJAOQgIAPgJgEQgHgCAAAFQAAALAEAQQAEARAFAEQAFAEABAFQABADAEAWQAGAdAAAJQABATgHALQgGAJgMgFQgQgHgGADQgIACgEAJQgDAHgIABQgNABgFgFQgIgIgDgWQgGgYgBgHQgDgKAFgSQAKgfAFgQQAJgcAAgPQgBgQgDgHQgDgGgLgFQgLgFgEgDQgFgHABgKQAAgLATgPQAKgIASgNQAIgGgDgDQgFgFAAgDQAAgHACgQQACgSACgDQADgGADgEg");
	this.shape_62.setTransform(24.5,-9.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFF3BB").s().p("AgdCyQgIgHgDgWIgHgfQgDgKAFgSIAPgvQAJgdAAgOQgBgRgDgGQgDgGgLgFQgLgFgEgEQgFgFABgLQAAgLATgPIAcgVQAIgHgDgDQgFgEAAgDIACgXQACgRACgFQADgFADgFQAGgFAFACQAWAFgGAQQgCAJgHAOQgFAMAEAFQACACAIADQAEACgCAHQgDAHADAIQACAGAIALIALAKQADADgCAHIgCALIADAQQADAKAEACQABACgJANQgIAPgJgEQgHgDAAAGQAAALAEAQQAEARAFADQAFAFABAEIAFAaQAGAdAAAJQABATgHAKQgGAJgMgEQgQgHgGACQgIADgEAJQgDAGgIACIgFAAQgJAAgEgFg");
	this.shape_63.setTransform(24.5,-9.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA0hFQAHAEgDAEQgDAGgBABQgDACgFAEQgEAEgBgHIgEAQQgGAZgBAZQgBAbAEAGQACAEADgDQAEgEAEAIQAFAGAFAHQADAGgBALQAAANAAAiQAAAgABAIQAAAGgFgCQgKgDgKgBQgMgCgEAEQgJAHgDACQgKAHgEABQgFABgFgJQgGgNgHgcQgIggADgMQACgIAKgKQAIgJgBgIQAAgFAIgQQAFgNgJgLQgGgHgPgJQgLgEgCgMQgBgIgFgMQgCgGAEgGQABgBALgJQAGgGAEgLQADgJAMgMQAKgJgCgIQgEgKgBgTQgCgaAAgBQgBgLAAgDQABgFAHAAQAOAAABAAQALACgDAHQgCALABANQABAOAFAIQADAFAEAOQADAMAFAEQAHAEACAHQAAADAAAJQAAADAIADg");
	this.shape_64.setTransform(13.4,-7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFF3BB").s().p("AgUC1QgGgNgHgcQgIggADgMQACgIAKgKQAIgJgBgIQAAgFAIgQQAFgNgJgLQgGgHgPgJQgLgEgCgMQgBgIgFgMQgCgGAEgGIAMgKQAGgGAEgLQADgJAMgMQAKgJgCgIQgEgKgBgTIgCgbIgBgOQABgFAHAAIAPAAQALACgDAHQgCALABANQABAOAFAIQADAFAEAOQADAMAFAEQAHAEACAHIAAAMQAAADAIADQAHAEgDAEIgEAHIgIAGQgEAEgBgHIgEAQQgGAZgBAZQgBAbAEAGQACAEADgDQAEgEAEAIIAKANQADAGgBALIAAAvQAAAgABAIQAAAGgFgCIgUgEQgMgCgEAEQgJAHgDACIgOAIIgBAAQgEAAgFgIg");
	this.shape_65.setTransform(13.4,-7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AADioQgBAFgIAKQgIAJADAIQACAIAFATQAEARADAHQADAGAKANQAHANgCAOQgCALgHASQgEAPADARIAGAcIADAJQAEAKAGAIQALAPAGA8QACAagqAMQgOAFgOgyQgNgvAHgKQAAgBAMgGQAGgDgEgOQgCgHgOgXQgLgTgBgQQgDgdgCgLQgCgSAHgIQAJgKACgHQACgHgFgIQgFgKgBgHQgCgJACgKQACgHgDgLQgDgJADgGQADgGAEgKQAFgIAIAEQAGADAMAFQAGAEgBAIg");
	this.shape_66.setTransform(3.3,-5.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFF3BB").s().p("AgVCRQgNgvAHgKIAMgHQAGgDgEgOQgCgHgOgXQgLgTgBgQIgFgoQgCgSAHgIQAJgKACgHQACgHgFgIQgFgKgBgHQgCgJACgKQACgHgDgLQgDgJADgGIAHgQQAFgIAIAEIASAIQAGAEgBAIQgBAFgIAKQgIAJADAIIAHAbQAEARADAHIANATQAHANgCAOQgCALgHASQgEAPADARIAGAcIADAJQAEAKAGAIQALAPAGA8QACAagqAMIgDAAQgMAAgNgtg");
	this.shape_67.setTransform(3.3,-5.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgtivQAIgGAKgBQAMgBAEAIQAEAJAAAJQAAAIgEANQgFAQAAADQgBAHAGAJQAKARAHAoQACAJgCASQgCARACAQQABAGABATQABAGAHAKQAFAHAKgBQAHAAABARQABAKAOApQAKAegKAGQgTANgZADQgdADABgbQAAgVgMgdQgJgWAHgHQAIgKAAgNQAAgJgFgSQgCgFgPgaQgLgWACgKQABgFgDgaQgCgTAKgFQALgFABgFQAAgCgEgIQgCgEgIgGQgGgFAAgFQgBgMACgLQACgQAJgIg");
	this.shape_68.setTransform(-5.6,-1.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFF3BB").s().p("AgSCfQAAgVgMgdQgJgWAHgHQAIgKAAgNQAAgJgFgSQgCgFgPgaQgLgWACgKQABgFgDgaQgCgTAKgFQALgFABgFIgEgKQgCgEgIgGQgGgFAAgFQgBgMACgLQACgQAJgIQAIgGAKgBQAMgBAEAIQAEAJAAAJQAAAIgEANQgFAQAAADQgBAHAGAJQAKARAHAoQACAJgCASQgCARACAQIACAZQABAGAHAKQAFAHAKgBQAHAAABARQABAKAOApQAKAegKAGQgTANgZADIgGAAQgXAAABgYg");
	this.shape_69.setTransform(-5.6,-1.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAgCYQggAZgIg1QgFg/gDgMQgBgDgMhQQgEgXAAgGQgCgUAGgPQADgJgJgRQgIgRACgEQAEgIAKgFQAKgFABAKQACAHADANQACANACANQACANADAIQACAFAFAPQACAEANAVQAHAMgCAJQgDAJAAALQgCAOgCAMQgCARAIAeQAFAQAIAZQACALAEALQABAHgMAJg");
	this.shape_70.setTransform(-15.6,1.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFF3BB").s().p("AgIB8QgFg/gDgMIgNhTIgEgdQgCgUAGgPQADgJgJgRQgIgRACgEQAEgIAKgFQAKgFABAKIAFAUIAEAaQACANADAIIAHAUQACAEANAVQAHAMgCAJQgDAJAAALIgEAaQgCARAIAeIANApQACALAEALQABAHgMAJQgKAIgIAAQgQAAgGgkg");
	this.shape_71.setTransform(-15.6,1.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhPmbQADAIAaBPQAaBSADAkQAGBDASBGQAFASAiCFQAiCCAIARQAKAWAYBLQAXBKABAMQABALgHAFQgHAEgFgIQgGgIgqh0Qgqh0gFgVQgEgWgahtQgchtgHgZQgFgQgLg8QgLg6gFgPQgEgLgNg6QgMgzgGgKQgGgMAAAEQAAADABAOQABAKgCABQgEABgGABQgIAEgCAAQgBgBgHgHQgIgIAHgPQAIgQACgFQAEgLABgCQAEgGAJgCQAKgCAJAEQAJAFADAKg");
	this.shape_72.setTransform(3.6,25.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFF3BB").s().p("AB8GoQgGgIgqh0Qgqh0gFgVQgEgWgahtIgjiGQgFgQgLg8QgLg6gFgPQgEgLgNg6QgMgzgGgKQgGgMAAAEIABARQABAKgCABIgKACIgKAEIgIgIQgIgIAHgPIAKgVIAFgNQAEgGAJgCQAKgCAJAEQAJAFADAKIAdBXQAaBSADAkQAGBDASBGIAnCXQAiCCAIARQAKAWAYBLQAXBKABAMQABALgHAFIgFABQgEAAgDgFg");
	this.shape_73.setTransform(3.6,25.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgpidQAIgRAOAAIAKgBQAJABAAAIQAAAHgHANQgGAMABAFQAFAZAHAPQABAGACALQADANADAIQAEALgBAPQgBAIgCAMQgCAQAAADQAAARAFAIQAEAGAKAGQAIAFABAHQAAADALAcQAIAZgBAIQgBAMgOAQQgQARgRAEQgMADgEgNQgFgTgDgDQgMgLgHgNQgIgQAFgLQAGgLABgFQADgGACgNQADgUAAgJQABgOgEgJQgLgPgFgKQgKgSAEgFQACgEADgGQACgGAFgJQAGgKACgNQABgQABgHQACgSgLgKQgEgEgBgDQgBgEADgFg");
	this.shape_74.setTransform(-22.7,7.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFF3BB").s().p("AgLCmQgFgTgDgDQgMgLgHgNQgIgQAFgLIAHgQQADgGACgNIADgdQABgOgEgJIgQgZQgKgSAEgFIAFgKQACgGAFgJQAGgKACgNIACgXQACgSgLgKQgEgEgBgDQgBgEADgFQAIgRAOAAIAKgBQAJABAAAIQAAAHgHANQgGAMABAFQAFAZAHAPQABAGACALIAGAVQAEALgBAPIgDAUIgCATQAAARAFAIQAEAGAKAGQAIAFABAHIALAfQAIAZgBAIQgBAMgOAQQgQARgRAEIgFAAQgIAAgDgKg");
	this.shape_75.setTransform(-22.7,7.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgIiUQgOAhATAOQAKAJACAWQACARgDAKQgCAEgGASQgFARACAIQADASATAVQAHAHAJASQAJAQACAIQAHAfABAEQAFAcgIAIQgOAMgOAEQgTAHgHgMQgKgLgQgfQgMgYgGgQQgDgHAIgHQAJgIAAgEQAAgFgHgnQAAgBgJgfQgHgaACgDQACgDAKgKQAJgLAAgJQAAgGAFgJQAEgHgCgHQgCgHgFgFQgFgFgCgGQgDgOAAgOQABgTAJgEQALgFADgBQAEAAABAGQACAEADAJQADAIgCAGg");
	this.shape_76.setTransform(-29.9,12.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFF3BB").s().p("AgDCuQgKgLgQgfQgMgYgGgQQgDgHAIgHQAJgIAAgEQAAgFgHgnIgJggQgHgaACgDIAMgNQAJgLAAgJQAAgGAFgJQAEgHgCgHQgCgHgFgFQgFgFgCgGQgDgOAAgOQABgTAJgEIAOgGQAEAAABAGIAFANQADAIgCAGQgOAhATAOQAKAJACAWQACARgDAKIgIAWQgFARACAIQADASATAVQAHAHAJASQAJAQACAIIAIAjQAFAcgIAIQgOAMgOAEQgHADgFAAQgKAAgEgIg");
	this.shape_77.setTransform(-29.9,12.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgsiMQgFAFgEAIQgFgKABgKQACgMAJgFQAOgIAFALQAGAKgLAEQAJgBABALQABAKgEAHQAIAJACAPQABAJACASQAAAEAEAJQAEAIAAAFQABAFgCAJQgDAKAAAEQAAAMAHAKQACAGALAMQAOAQAOAiQACAGALARQAIAOACAKQADAWgeATQgZAQgSgcQgNgSgJggQgEgQgDgGIgCgEQgBgGACgSQABgOgCgKQgEgNgGgFQgDgDgCgFQgDgDgCgEQgGgMACgKQACgIAHgLQAFgHAAgNQACgHACgCQACgBAGgEQgTgGACgbQACgQAHgKQAEgGAGgE");
	this.shape_78.setTransform(-36.7,19.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFF3BB").s().p("AgHCXQgNgSgJggQgEgQgDgGIgCgEQgBgGACgSQABgOgCgKQgEgNgGgFQgDgDgCgFIgFgHQgGgMACgKQACgIAHgLQAFgHAAgNQACgHACgCIAIgFQgTgGACgbQACgQAHgKQAEgGAGgEQgGAEgEAGQgFAFgEAIQgFgKABgKQACgMAJgFQAOgIAFALQAGAKgLAEQAJgBABALQABAKgEAHQAIAJACAPIADAbIAEANQAEAIAAAFQABAFgCAJIgDAOQAAAMAHAKQACAGALAMQAOAQAOAiQACAGALARQAIAOACAKQADAWgeATQgJAGgIAAQgPAAgLgSg");
	this.shape_79.setTransform(-36.7,19.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgigFIAKAHQACgCABAAQASARAIAeQAGARALAkQAHARAEAHQAJAOAMAFQAQAHALgHQAMgIgDgRQgGgfgRgjQgEgIgUgPQgRgNgBgNQgBgEADgNQACgNgBgHQgBgHgEgIQgHgLgBgEQgHgWACgNQACgDABgCQACgEgDgGQgEgIgIAAQAKgQgQgGQgQgFAJAYQACAAACAFQACAEACgBQgIAFAEAGQADAFAGACQAAAFgBAAQgEAAAAACQgBACAAAYQAAATgLASQgEAGgNASgAhEgjQgBAAgCAAQgJACgCgFQgDgFAGgFQAEgCAHgDQgJABgFgEQgHgFADgJQACgHAHgBQAEgBALABQADATgMAEQALgDAGAIQAFAHgGAHQgBABAAABQANAGAAAPIAJAIQgJAPAFAIQADADAIAFQAHAFACAFQADAEACAIQABAEACAIQACAGAKASQALAQAAAIQACAUgUgGQgXgLgGgCIgQgdQgMgTgMgJQgMgJgBgCQgFgGAGgLQAGgMACgFQADgHAAgLQABgTAGgFQAEgFAJAE");
	this.shape_80.setTransform(-47,23.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFF3BB").s().p("AA2CPQgMgGgJgNQgEgHgHgRIgRg1QgIgegSgRIgDACIgKgHIARgYQALgSAAgTIABgaQAAgCAEAAQABAAAAgFQgGgCgDgFQgEgGAIgFQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAgBgBQgCgFgCAAQgJgYAQAFQAQAGgKAQQAIAAAEAIQADAGgCAEIgDAFQgCANAHAWIAIAPQAEAIABAHQABAHgCANQgDANABAEQABANARANQAUAPAEAIQARAjAGAfQADARgMAIQgGADgHAAQgGAAgIgDgAgFB6IgdgNIgQgdQgMgUgMgIQgMgJgBgCQgFgGAGgLQAGgMACgFQADgHAAgLQABgTAGgFQACgDAEAAIAAAAIABAAIAFABIAAAAIABABIgBgBIAAAAIgFgBIgBAAIAAAAQgEAAgCADIgDAAQgJABgCgEQgDgFAGgFIALgFQgJABgFgEQgHgFADgJQACgHAHgBIAPAAQADATgMAEQALgDAGAIQAFAHgGAHIgBACQANAGAAAPIAJAIQgJAPAFAIQADADAIAFQAHAFACAFIAFAMIADAMQACAGAKASQALAQAAAIQABAPgMAAIgHgBg");
	this.shape_81.setTransform(-47,23.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAwBTQgEABgKAGQgIAFgDgBIgCAAQAHgDgPgUQgJgNgJgMQgBgBgbgQQgRgLAEgMQABgEAIgFQAIgHABgEQACgHgCgLQgEgNgBgGQgCgiACgDQAGgIAKAEQAKAFgDAKQgHADgHANQAOgQAFAsQADARACAFQACAKAMACQABADASAiQAMAXABARQACABAAABQAAACAAABg");
	this.shape_82.setTransform(-57.9,31);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFF3BB").s().p("AAXBeIgCAAQAHgDgPgUQgJgNgJgMIgcgRQgRgLAEgMQABgEAIgFQAIgHABgEQACgHgCgLIgFgTQgCgiACgDQAGgIAKAEQAKAFgDAKQgHADgHANQAOgQAFAsQADARACAFQACAKAMACIATAlQAMAXABARIACACIAAADQgEABgKAGQgHAEgEAAIAAAAg");
	this.shape_83.setTransform(-57.9,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-80.2,168,161);


(lib.steg_neck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AioiSQADAIAtAwQAHAJDKCZQBhBCAAAHQAAAFgKABQgLAAgPgJQhEg1hBgyQiAhjgJgFQgHgEgNgRQgLgPgHgBQgIgBABAFQACAIgBABQgCAGgFAAQgFAAgFgGQgEgEABgaQAAgYADgDQADgCAEgBQAFgBABAEg");
	this.shape.setTransform(39,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("ACWCOIiFhnQiAhjgJgFQgHgEgNgRQgLgPgHgBQgIgBABAFIABAJQgCAGgFAAQgFAAgFgGQgEgEABgaQAAgYADgDQADgCAEgBQAFgBABAEQADAIAtAwQAHAJDKCZQBhBCAAAHQAAAFgKABIgBAAQgLAAgOgJg");
	this.shape_1.setTransform(39,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AiHh/QgEAAgIACQgHACgDAHQgEAHAEAEQAQAPgGAKQgMASAHAIQADAEADAIQADAEAFgGQAFgFACgNQABgNAEAAQALgDAPAPQACACAsAmQAoAgAHAIQAHAMBbA9QAIAFAbATQAYAPAFgBQAFgCAAgCQAAgBgFgGQgCgDgogaQgqgbgOgNQhWhRgPgLQgTgMgHgFQgLgHgGgHQgNgSgIgLQgQgVgFAAQAAAAgGgCg");
	this.shape_2.setTransform(31.9,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AB+ByIgjgYQhbg9gHgMQgHgIgoggIgugoQgPgPgLADQgEAAgBANQgCANgFAFQgFAGgDgEIgGgMQgHgIAMgSQAGgKgQgPQgEgEAEgHQADgHAHgCQAIgCAEAAIAGACQAFAAAQAVIAVAdQAGAHALAHIAaARQAPALBWBRQAOANAqAbQAoAaACADIAFAHQAAACgFACIgBAAQgGAAgWgOg");
	this.shape_3.setTransform(31.9,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgggxQgBAFAEAKQAEAKgCAFQgBAFgGAEQgHAGgBADQgJAMANAJQAEAEAWAIQAIAEAQAJQAQAHALAAQARgCgRgNQgLgJgQgIQgMgGgHgEQgLgHACgJQAGgQACgIQADgQgOgEg");
	this.shape_4.setTransform(13.2,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AAMAsIgYgMQgWgJgEgDQgNgKAJgMQABgDAHgFQAGgFABgEQACgGgEgJQgEgKABgFIANgCQAOAFgDAPIgIAZQgCAIALAHIATAKQAQAIALAJQARAOgRABIgCABQgKAAgPgIg");
	this.shape_5.setTransform(13.2,6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgUgOQgBAFgFAGQgFAGgCACQgFANARAGQAJAEARAEQADABALAFQALADADgDQAIgHgRgNQgDgCgJgDQgJgDgDgCQgHgGABgCQAEgGACgFQAFgLABgEQAEgLgJAAIgOgCQgDAFgBAHQgBAEgCAJg");
	this.shape_6.setTransform(-2.6,8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AATAmIgOgGQgRgEgJgEQgRgGAFgNIAHgIQAFgGABgFIADgNQABgHADgFIAOACQAJAAgEALIgGAPIgGALQgBACAHAGQADACAJADQAJADADACQARANgIAHQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgJgCg");
	this.shape_7.setTransform(-2.6,8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgPAAQgBgBAHgZQAFgUgMABQgKAAgCAXQgBAKgHAOQgCAMAQAIQAJAFAQAHQACABAKAFQAIAFAFABQAQAEgNgSQgHgLgJgGQgEgCgLgGg");
	this.shape_8.setTransform(5.4,8.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AAcAuQgFgBgIgFIgMgGQgQgHgJgFQgQgIACgMQAHgOABgKQACgXAKAAQAMgBgFAUQgHAZABABIAPAHIAPAIQAJAGAHALQALAOgJAAIgFAAg");
	this.shape_9.setTransform(5.4,8.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgFgnQACANgRAVQgEAFgHAFQgFAGAIAIQAEAFAKAEQAFACAJADQAFACAKAGQAKAFAHgBQAGgLgVgLQgWgMgBgHIAMgZQALgWgPgBg");
	this.shape_10.setTransform(-10,7.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AAPApQgKgGgFgCIgOgFQgKgEgEgFQgIgIAFgGQAHgFAEgFQARgVgCgNIAHgFQAPABgLAWIgMAZQABAHAWAMQAVALgGALIgCAAQgHAAgIgEg");
	this.shape_11.setTransform(-10,7.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AADgmQgDADgDAJQgEAJgDADQgFAFgJAFQgGAEAHAHQAEAFAIAFQAFACAHAFQAEADAIAFQAIAGAGABQADgFgEgHQgDgGgFgDQgBgFgEgDQgFgGgBgBQgEgEAAgBQAAgBAEgGQAJgIACgFQAFgJgMgEg");
	this.shape_12.setTransform(-24.1,4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AANAgIgMgIIgMgHQgIgFgEgFQgHgHAGgEQAJgFAFgFQADgDAEgJQADgJADgDIAIADQAMAEgFAJQgCAFgJAIIgEAHIAEAFIAGAHQAEADABAFQAFADADAGQAEAHgDAFQgGgBgIgGg");
	this.shape_13.setTransform(-24.1,4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgHgZQAHgKADgBQAJgCgBAIQgBACgEALQgFALAAADQgBAFACAHQADAGAMAIQAMAHACAGQACAEgdgLQgJgIgIgGQgQgLgBgEQgBgCAJgIQAMgKADgFg");
	this.shape_14.setTransform(-17.5,6.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AAEAdIgRgOQgQgLgBgEQgBgCAJgIQAMgKADgFQAHgKADgBQAJgCgBAIIgFANIgFAOQgBAFACAHQADAGAMAIQAMAHACAGQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgFAAgVgIg");
	this.shape_15.setTransform(-17.5,6.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgfQAAADgGAGQgCAEgDAKQAAABgLAGQgGACAHAIQAFAGAQAHQATAIAEADQAHgGgMgIQgOgHgDgDQgEgHAEgGQAIgKgBgGg");
	this.shape_16.setTransform(-30.8,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AAAAVQgQgHgFgGQgHgIAGgCIALgHQADgKACgEIAGgIIAIAKQABAGgIAKQgEAGAEAHQADADAOAIQAMAHgHAGQgEgCgTgJg");
	this.shape_17.setTransform(-30.8,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMgMQgGAEgIADQgEADALAGQAFAEAIAGQAGAFADAGQAIAKADACQAGADAIgHQACgKgJgFQgOgHgDgDQgEgIAGgHQAKgJgCgGIgJgLQgJARgIAEg");
	this.shape_18.setTransform(-38.1,-1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AAOAjQgDgCgIgKQgDgGgGgFIgNgKQgLgGAEgDIAOgHQAIgEAJgRIAJALQACAGgKAJQgGAIAEAHQADADAOAHQAJAFgCAKQgFAFgFAAIgEgBg");
	this.shape_19.setTransform(-38.1,-0.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgVgCQgCAIAVAMQAUALAFgKQgKgGgGgIQgCgFAAgEQABgIgBgDQgCgMgKAGQgLAFgEAKQACABABgCg");
	this.shape_20.setTransform(-45,-2.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AgCASQgVgMACgIIACgFQAAABAAAAQgBABAAAAQgBAAAAAAQAAAAgBgBQAEgKALgFQAKgGACAMIAAALQAAAEACAFQAGAIAKAGQgCAFgGAAQgHAAgKgGg");
	this.shape_21.setTransform(-45,-2.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgcgiQgDAFAGAFQADACAHAEIgBAIQgDAEgHAFQgHACgDAEQgDAFAAAJQgBAJADAFQAGACAMgYQAKgRAHANQAAAFgBAGQAAAGADAHQANARAHgHQADgEADgJQACgLgBgEQgBgDgKgEQgIgCADgMQAEgCAPgCQANgEgDgKQgGgCgHABQgHAAgEAEQgDgDAEgFQAEgEgFgFQgFgEgHADQgFAEgDABQgBAAgLAAQgLABgBABg");
	this.shape_22.setTransform(-44.3,-5.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AAAAfQgDgHAAgGIABgLQgHgNgKARQgMAYgGgCQgDgFABgJQAAgJADgFQADgEAHgCQAHgFADgEIABgIIgKgGQgGgFADgFQABgBALgBIAMAAIAIgFQAHgDAFAEQAFAFgEAEQgEAFADADQAEgEAHAAQAHgBAGACQADAKgNAEIgTAEQgDAMAIACQAKAEABADQABAEgCALQgDAJgDAEQgDACgCAAQgGAAgJgMg");
	this.shape_23.setTransform(-44.3,-5.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLARQAIAEAJACQAOACgCgJQgOgBgDgLQgBgNgCgIQgGgOgHAUQgHASALAFg");
	this.shape_24.setTransform(-50.6,-4.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("AAGAXQgJgCgIgEIAAgFQgLgFAHgSQAHgUAGAOQACAIABANQADALAOABQACAIgKAAIgEgBg");
	this.shape_25.setTransform(-50.6,-4.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgPgZQgCAGAHAFQgEACgDgBQgDgCgCgEQgDADAAAFQAAAIAAABQgCAFgCADQgCAJADAJQAEALAJADQADABgCgMQgEgPADgEQAJgNAEAFQACAAABAJQACAIAAADQAIAGACgBQADAAAHgIIgHgQQgCABAAACQgIgHAFgHQABgFALgBQAKgBgDgQQgWgGgJADQgLAEgDAHg");
	this.shape_26.setTransform(-50.6,-6.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF3BB").s().p("AgPAmQgJgDgEgLQgDgJACgJIAEgIIAAgJQAAgFADgDQACAEADACQADABAEgCQgHgFACgGQADgHALgEQAJgDAWAGQADAQgKABQgLABgBAFQgFAHAIAHIACgDIAHAQQgHAIgDAAQgCABgIgGQAAgDgCgIQgBgJgCAAQgEgFgJANQgDAEAEAPQACALgDAAIAAAAg");
	this.shape_27.setTransform(-50.6,-6.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAKgVQgBgFgJAMQgIAMgBADQgCAGADAKQAEAKAEgFQAOgLgEggg");
	this.shape_28.setTransform(-36.8,-11.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF3BB").s().p("AgIARQgDgKACgGQABgDAIgMQAJgMABAFQAEAggOALIgCACQgDAAgDgHg");
	this.shape_29.setTransform(-36.8,-11.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAEgTQgEgIgIAjQgBAEAFAFQAEAFAEgBQAFgCAAgOQAAgNgFgLg");
	this.shape_30.setTransform(-26.9,-8.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFF3BB").s().p("AgEARQgFgFABgEQAIgjAEAIQAFALAAANQAAAOgFACIgCAAQgCAAgEgEg");
	this.shape_31.setTransform(-26.9,-8.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgCgTQgCgGgCALIgDASQgGAVANgDQAJgCADgEQAFgGgJgHQgHgDAAgHQAAgKgBgCg");
	this.shape_32.setTransform(-6.4,-4.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFF3BB").s().p("AgJAEIADgSQACgLACAGIABAMQAAAHAHADQAJAHgFAGQgDAEgJACIgCAAQgKAAAFgSg");
	this.shape_33.setTransform(-6.4,-4.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABZggQgigdgIgGQgJgHgPgGQgQgGgHgDQgEgCgIgGQgIgFgEgCQgCAFAGAIQAHAIAAAEQgEgFgJgIQgLgKgCgDQAAADAAAFQgHgGgFAFQgDADgEAKIgDgCQgDAIgIAHQgBABgEgBQgCAAgCACQgBACABAEQACAEgBABQgBAFgEABQgHACgCACQgFAFgDANQgBAIAAAPQAAAOgBAHQgDAPgBAHQAAAEAAAOIgFAXQAVAbASALQAIAGAVgCQADAAAbgEQAZgEAbgNQAcgOATgUQAZgcAEgWQADgNgIgLQgFgIgOgNg");
	this.shape_34.setTransform(5.7,-13.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFF3BB").s().p("AhKBsQgSgLgVgbIAFgXIAAgSIAEgWIABgVQAAgPABgIQADgNAFgFQACgCAHgCQAEgBABgFIgBgFQgBgEABgCQABAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAAAQAAAAABAAQAIgHADgIIADACQAEgKADgDQAFgFAHAGIAAgIIANANQAJAIAEAFQAAgEgHgIQgGgIACgFIAMAHIAMAIIAXAJQAPAGAJAHIAqAjQAOANAFAIQAIALgDANQgEAWgZAcQgTAUgcAOQgbANgZAEIgeAEIgIAAQgOAAgHgEg");
	this.shape_35.setTransform(5.7,-13.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AACgVQAJAOACAHQAEAKgBAPQgDAdgcgXQABgDALgZQAFgNAAgLQgBgBgBgBIABgCQABACAAACg");
	this.shape_36.setTransform(-17.8,-8.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFF3BB").s().p("AgPAYIAMgbQAEgPAAgKIgBgCIABgDIAAAFQAJANADAIQAEAJgBAQQgCAQgKAAQgGAAgNgKg");
	this.shape_37.setTransform(-17.8,-7.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgehMQABgJABgFQADgJAEgDQAFgDAKABQAHABAGADQAZAJALAcQALAagIAaQgBAFgDAVQgCARgFAJQgTAhgFAOQgHAQgNABQgOAAgMgOQgDgEABgIQAAgJgCgEQgJgWAAgQQAAgVAAgIQABgRADgMQANgqABgEg");
	this.shape_38.setTransform(-10.8,-12.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFF3BB").s().p("AgjBbQgDgEABgIQAAgJgCgEQgJgWAAgQIAAgdQABgRADgMIAOguIACgOQADgJAEgDQAFgDAKABQAHABAGADQAZAJALAcQALAagIAaIgEAaQgCARgFAJQgTAhgFAOQgHAQgNABQgOAAgMgOg");
	this.shape_39.setTransform(-10.8,-12.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAhUQAKgKALAJQAJAIAEANQAJAngDANQgBAFgFAFQgCACgGAFQgGAKgDAKQgBACgDAVQgBAMgGAJQgGAMgHAEQgJAFgNAAIAAgFIgKgKQgBgoAAgTQABggAMgXQAQghALgMg");
	this.shape_40.setTransform(-20.7,-13.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFF3BB").s().p("AgdBaIAAgFIgKgKQgBgoAAgTQABggAMgXQAQghALgMQAKgKALAJQAJAIAEANQAJAngDANQgBAFgFAFIgIAHQgGAKgDAKIgEAXQgBAMgGAJQgGAMgHAEQgIAFgLAAIgDAAg");
	this.shape_41.setTransform(-20.7,-13.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAsgaQgCgJgLgPQgMgQgIgEQgKgGgKASQgGAJgKARQgbAnALAYIAAAWQACALARAFQAPAFAJgDQAKgEAIgRQAIgTADgHQAJgVACgDQAFgRgDgJg");
	this.shape_42.setTransform(-30.4,-14.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFF3BB").s().p("AgWBFQgRgFgCgLIAAgWQgLgYAbgnQAKgRAGgJQAKgSAKAGQAIAEAMAQQALAPACAJQADAJgFARIgLAYIgLAaQgIARgKAEQgDABgFAAQgHAAgJgDg");
	this.shape_43.setTransform(-30.4,-14.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgWgaQAPgSABgCQAIgOAKgBQAMgCAGAQQANAfgGARQgLAegOARQgUAagWgTIgFgFQAEgIgEgUQgEgUADgHQACgJAMgMg");
	this.shape_44.setTransform(-39.7,-16.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFF3BB").s().p("AgeA3IgFgFQAEgIgEgUQgEgUADgHQACgJAMgMIAQgUQAIgOAKgBQAMgCAGAQQANAfgGARQgLAegOARQgMAPgMAAQgJAAgJgIg");
	this.shape_45.setTransform(-39.7,-16.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAQgoQgCgJgEgCQgGgCgNARQgCABgSAWQgFAGAGAXQAFAWAGAKQADAEALAAQAIAAAGgEQAIgHALglQADgGgCgJQgBgKgHgFQgFgEgCgKg");
	this.shape_46.setTransform(-49.3,-16.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFF3BB").s().p("AgRAwQgGgKgFgWQgGgXAFgGIAUgXQANgRAGACQAEACACAJQACAKAFAEQAHAFABAKQACAJgDAGQgLAlgIAHQgGAEgIAAQgLAAgDgEg");
	this.shape_47.setTransform(-49.3,-16.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAKgBQACAPgCAGQAAAEgBAAQgDgBgFgDQgKgDgFgCQgJgEAHgLQADgDAFgPQACgFAHAAIAQAAQAGABgGAMQgBACgDACQgDABAAAEg");
	this.shape_48.setTransform(-55.6,-5.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFF3BB").s().p("AABAUIgPgFQgJgEAHgLQADgDAFgPQACgFAHAAIAQAAQAGABgGAMIgEAEQgDABAAAEQACAPgCAGQAAABAAABQAAABAAAAQgBABAAAAQAAAAAAAAIgIgEg");
	this.shape_49.setTransform(-55.6,-5.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgpAMQABgBARgLQALgHgJgLIgFgTQAOgEAIgGQADgCADgGQAFgGADgCQAHgCAGABQAIACgCAHQgBADgGAFQgGAEgBAFQADAAAGgCQAGgCACACQAHACgCAEQAAACgDAEQgBADgCAEQgCAEABAFQABAQAAAAQAKAGABALQAAAGgDAOQgBABAAAKQAAAIgCADQgEAEgHgDQgIgEgDgCIgSgGQgCgBgKACQgIABgDgCQgCgCgBgIQgBgKgBgBQgEgNgFgGg");
	this.shape_50.setTransform(-4.1,6.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFF3BB").s().p("AAZBAIgLgGIgSgGIgMABQgIABgDgCQgCgCgBgIIgCgLQgEgNgFgGIASgMQALgHgJgLIgFgTQAOgEAIgGQADgCADgGQAFgGADgCQAHgCAGABQAIACgCAHQgBADgGAFQgGAEgBAFQADAAAGgCQAGgCACACQAHACgCAEIgDAGIgDAHQgCAEABAFIABAQQAKAGABALQAAAGgDAOIgBALQAAAIgCADQgDACgDAAIgFgBg");
	this.shape_51.setTransform(-4.1,6.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgTg/QATAHALARQANAQAEAWQACAEgBAOQAAAOABAGQADALAKAWQABADACAGQABAGADADQgIAJgIAFQgMAIgGgDQgOgHgMguQgMgkgBgHQgDgLgDgGQgEgEgKgGIgFAAQAEgKgEgjQgDggAHgKQAIgKACASQACAbANAFg");
	this.shape_52.setTransform(24.3,0.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFF3BB").s().p("AAQBrQgOgHgMguQgMgkgBgHQgDgLgDgGQgEgEgKgGIgFAAQAEgKgEgjQgDggAHgKQAIgKACASQACAbANAFQATAHALARQANAQAEAWQACAEgBAOQAAAOABAGQADALAKAWIADAJQABAGADADQgIAJgIAFQgJAGgFAAIgEgBg");
	this.shape_53.setTransform(24.3,0.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAg2QACACAAAIQAAAHgCAEQAAAGAAAJQgBALABACQAHAEAXASQAEAEAGAPQAHAPAAAIQAAANgTAEQgWAFgEAGQgCACABgFQABgJgFgDQgGgEgEgEQgEgGgEgEQgEgFAAgIQACgJAAgFQABgUgEgHQgFgGgCgCQgDgDgFgDQgHgDADgcQAEggAAgBQgCgKAIACQADAAAGAHQAEAEAFAGQAEAEANALg");
	this.shape_54.setTransform(18.3,3.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFF3BB").s().p("AABBUQAAgJgEgDQgGgEgEgEIgIgKQgEgFABgIIABgOQABgUgEgHIgHgIIgIgGQgHgDAEgcIADghQgCgKAIACQADAAAHAHIAIAKIASAPQABACAAAIQAAAHgBAEQgBAGAAAJQgBALACACQAFAEAYASQAEAEAGAPQAGAPABAIQgBANgSAEQgWAFgEAGIgBABIAAgEg");
	this.shape_55.setTransform(18.3,3.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgNhJQAEAEAHAIQAEAGAEABQAFABAFAFQAFAFAAADQgBAEABAKQgBADgEAOQgBAFAGAFQAGAGAJAJQAHAHAAAFQAAAEAGASQADAQgJACQgIADgJgCQgMgBgFAAQgGABgDAEQAAAEgFgBQgGAAgEgEQgDgCgGgIQgEgFAAgLQAAgSAAgBQgBgHABgBQAEgDADgJQAEgLgBgCQAAgDgHgBQgMgEgBAAQgHgDgDgHQgDgGAGgGQAIgHACgDQACgEABgGQABgFADgEQAGgIAAAAQAEgEAFAEg");
	this.shape_56.setTransform(11.1,5.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFF3BB").s().p("AgFBMQgFAAgFgEIgJgKQgDgFAAgLIgBgTQgBgHACgBQAEgDACgJQAEgLAAgCQgBgDgHgBIgNgEQgHgDgDgHQgCgGAFgGQAIgHACgDQACgEABgGQABgFADgEIAGgIQAFgEAEAEIALAMQAEAGAFABQAEABAFAFQAFAFAAADIAAAOIgEARQgCAFAGAFIAQAPQAGAHABAFQgBAEAGASQADAQgIACQgJADgJgCQgMgBgEAAQgHABgCAEQgBADgDAAIgCAAg");
	this.shape_57.setTransform(11.1,5.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgmgjQACgDAFgDQAJgJACgCQABgBADgHQABgEAEgCQADgBAHABQAFABACACQADADgBAGQgBADgCAGIgBAGQAFABACgFQADgIABgBQAGgEABAFQAAADgBAHIAAAKQABABADABQADACABABQACADgBAGQgBADgCAGQAAAGACACQABACADAFQAEAHABALQACANgBAcQgDABgGgEQgHgFgCgBQgMgDgKACQgLAGgIADQgPAGACgLQADgBAGgCQAGgDgBgFQAAgDgGgEQgFgEABgEIADgRQAHgCABgOQAAgKgGgGQgBgBgGgDQgEgDgCgDQgCgGABgEg");
	this.shape_58.setTransform(3.5,6.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFF3BB").s().p("AghA8IAJgDQAGgDgBgFQAAgDgGgEQgFgEABgEIADgRQAHgCABgOQAAgKgGgGIgHgEQgEgDgCgDQgCgGABgEQACgDAFgDIALgLIAEgIQABgEAEgCQADgBAHABQAFABACACQADADgBAGIgDAJIgBAGQAFABACgFQADgIABgBQAGgEABAFQAAADgBAHIAAAKQAAAAAAAAQABABAAAAQABAAAAABQABAAABAAIAEADQACADgBAGIgDAJQAAAGACACIAEAHQAEAHABALQACANgBAcQgDABgGgEIgJgGQgMgDgKACIgTAJQgFACgDAAQgGAAABgHg");
	this.shape_59.setTransform(3.5,6.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgmACQANAAANgJQANgNgKgKQAEgDASgDQAQgDACgJQAGgBAEAEQAFAEgCAGQgKgCADAHQABADAEAHQABAHgFAEQgCADgIAEQgLAGADALQAEAOgDAIQgEALgOACQgBAAgYAAQgNAAAAAAQgGgCgCgHQgCgGADgIQACgJAGgCg");
	this.shape_60.setTransform(-17.4,3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFF3BB").s().p("AgWAyIgNAAQgGgCgCgHQgCgGADgIQACgJAGgCIgEgOQANAAANgJQANgNgKgKQAEgDASgDQAQgDACgJQAGgBAEAEQAFAEgCAGQgKgCADAHIAFAKQABAHgFAEIgKAHQgLAGADALQAEAOgDAIQgEALgOACIgZAAg");
	this.shape_61.setTransform(-17.4,3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgoAlQgGACgGgFQgGgGABgIQAAgFAIgIQAHgHAAgEQAKACACgBQAEgBAEgHQAFgHAAgEQgBgFgIgDQAEgGAWgCQAUgCAHAEQABABACADQACADACAAQAFADAKAAQATAGgTAGQgQAFgIAEQgNAGgDALQAAABgBANQAAAIgFAEQgDACgKgCQgLgCgDAAQgFgBgDAAQgEgBgEACQAAABAAAAQABAAABgBIgBACQgBAAAAgBQAAAAAAAAg");
	this.shape_62.setTransform(-29.5,-0.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFF3BB").s().p("AgKAmIgOgCIgIgBQgEgBgEACIAAABQgGACgGgFQgGgGABgIQAAgFAIgIQAHgHAAgEIAMABQAEgBAEgHQAFgHAAgEQgBgFgIgDQAEgGAWgCQAUgCAHAEIADAEIAEADQAFADAKAAQATAGgTAGQgQAFgIAEQgNAGgDALIgBAOQAAAIgFAEQgDABgCAAIgIgBgAgoAlIAAAAIACgBIgBACIgBgBgAgoAlIAAAAg");
	this.shape_63.setTransform(-29.5,-0.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAagVQgCADgFAEQgFAJADAHQAAACAHAPQAHAQgLAQQgLAPgJgKQAAgBgFgCQgGgDABAAIgWgEQgHgGAAgJQAAgEADgOQAFgRAFgDQAIgFACgFQACgEgCgGQgBgHAAgDQABgHACgBQADgBAHgCQADgBAMgIQANgGAAAOQAKAAAFADQABADgBAEQgGACgGAIQgBABAAAHg");
	this.shape_64.setTransform(-10.6,5.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFF3BB").s().p("AAAA4QAAgBgFgCQgGgDABAAIgWgEQgGgGgBgJIADgSQAEgRAHgDQAHgFACgFQABgEgBgGIgBgKQABgHACgBIAKgDIAPgJQAMgGAAAOQAKAAAGADQABADgBAEQgGACgGAIIgBAIIgHAHQgFAJADAHIAHARQAHAQgLAQQgHAJgGAAQgFAAgCgEg");
	this.shape_65.setTransform(-10.6,5.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag3ARQABgIAHgJQAEgDAEgBQADgBAHgCQAOgDAFgGQABgDAAgHQgBgIACgBQADgDAGACQAEABAGABIAVACQAHAAAPgDIABAFQgJAGgUAIQgPAKAAANQAAAGABAKQAAAHgIADQgEACgLAAQgMAAgGADIgHgBQgOAAgDgCQgCgPAAgDg");
	this.shape_66.setTransform(-22.7,1.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFF3BB").s().p("AgjAlQgOAAgDgCQgDgPABgDQAAgIAIgJQAEgDAEgBIAKgDQAOgDAEgGQACgDgBgHQAAgIABgBQADgDAGACIALACIAUACQAIAAAOgDIACAFQgJAGgUAIQgQAKAAANIACAQQgBAHgIADQgEACgLAAQgLAAgGADg");
	this.shape_67.setTransform(-22.8,1.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgfAAQAIgDgBgRQgCgMAAAAQABgFAKgBQACAAAGABQAFABACgBQACAAADgDQACgCAEgBQAHAAAGAFQAGAGAAAGQADACALAAQAJABAAAHQgNABgGABQgMADgCAJQgBADADANQABAJgIAHQgJAJgGADQgFADgLgDQgGgBgLgHQgKgGgIgBQgBgFAEgKQAGgMAAgBQACAAACAAQADAAAEABgAgmgBQADABADAAQABAAAAAAQABAAACAAIgEAA");
	this.shape_68.setTransform(-37.1,-3.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFF3BB").s().p("AgQAqQgGgBgLgHQgKgGgIgBQgBgFAEgKIAGgNIAEAAIAHABQAIgDgBgRIgCgMQABgFAKgBIAIABQAFABACgBQACAAADgDQACgCAEgBQAHAAAGAFQAGAGAAAGQADACALAAQAJABAAAHIgTACQgMADgCAJQgBADADANQABAJgIAHQgJAJgGADQgCACgFAAIgJgCgAggAAIAEAAIgDAAIgBAAQgDAAgDgBQADABADAAgAggAAIABAAIADAAgAggAAg");
	this.shape_69.setTransform(-37.1,-3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.6,-25.9,117.3,51.5);


(lib.steg_hip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AjShLQAFADAOgBQAPAAAGACQAOAEATAQQALAKAOARQATAXAEADQAKAKASAUQAQAQAQAIQAhASA7ABQA9ABAkgNQAGgCAMgHQAMgHAEgBQAKgEAFAHQAFAGgFAK");
	this.shape.setTransform(16.2,-29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AA9BLQg7gBghgSQgQgJgQgQIgbgdIgXgaQgNgQgLgKIE5BoQgMAHgFACQgiAMg3AAIgJAAgACwA2IABAAIAPgJQAKgDAGAGQAFAGgFALgACwA2gAjRhKQAGABALAAQAPgBAGACQAOAFATAQIABABg");
	this.shape_1.setTransform(16.3,-29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Aj0h+QgtALgQADQgYAFgUgBQgfgDgNAAQgYgBgRAGQgMAFgDAeQgCAgARAHQASAHAegBQAZgBAUgFQBagZAdACQADABBHgFQA+gEAbAIQAhALBCAlQBBAiASAQQAGAFBBAsQA8ApASAUQAQARAjAnQAeAgAGAKQAEAHABANQABALAHAHQAQARAcgXQAVgRADgDQAKgNgIgNQgHgLgQgGQgWgKgHgFQgggVgYgRQgrgegTgTQgGgGg2g7QgrgugMgHQgLgHgVgbQgUgYgJgFQgXgLgNgHQgZgNgFgGQgTgKgKgIQgRgNAQgPQAOgQAOACQAGACAIAHQADACALAIQAKAJgEAGQgDAFgGAEQgFAEgCAHQgDAIAdAOQAfAPADAGQADAHANgBQAQgCAHAEQAIAFAZAkQAaAjAIAGQAJAGAPASQARAVAMAKQAPAMAMAHQAHAEAMAHQAHAFA2A0QAHAHAPAQQANAOAJACQAaAHAEgQQAEgMAAgBQAAgFgIgJQgGgGgZgiQgXghgHgGQgIgJgFgLQgCgEgHgXQgGgPgHgEQgFgDgNAAQgHAAgFADQgDABgHgDQgNgFgWgNQgZgNgIgLQgFgHgYgYQgXgWgEgIQgIgNgDgGQgGgJAAgGQgBgDAEgKQADgHgGgGQgFgFgIgBQgIgBgEgGQgFgGAJgMQAMgPABgDQAAgCAHgQQAEgLgDgEQgNgOgFgDQgQgLgSAFQgNAEgWgBQgPgCgGAIQgGAHgDgNQgFgUgHgFQgRgOgKgFQgRgKgTgBQgTgBgZAHQgIADgYAIQgKADgKARQgDAFgMAZQgEAPgBACQgBADgOgBQgNgBACAQQAEATgDADQgRAUgDACQgWASgiAGg");
	this.shape_2.setTransform(9.6,8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AF0EhQgHgHgBgLQgBgNgEgHQgGgKgeggIgzg4QgSgUg8gpQhBgsgGgFQgSgQhBgiQhCglghgLQgbgIg+AEIhKAEQgdgChaAZQgUAFgZABQgeABgSgHQgRgHACggQADgeAMgFQARgGAYABIAsADQAUABAYgFIA9gOQAigGAWgSIAUgWQADgDgEgTQgCgQANABQAOABABgDIAFgRIAPgeQAKgRAKgDIAggLQAZgHATABQATABARAKQAKAFARAOQAHAFAFAUQADANAGgHQAGgIAPACQAWABANgEQASgFAQALQAFADANAOQADAEgEALIgHASQgBADgMAPQgJAMAFAGQAEAGAIABQAIABAFAFQAGAGgDAHQgEAKABADQAAAGAGAJIALATQAEAIAXAWQAYAYAFAHQAIALAZANQAWANANAFQAHADADgBQAFgDAHAAQANAAAFADQAHAEAGAPIAJAbQAFALAIAJQAHAGAXAhQAZAiAGAGQAIAJAAAFIgEANQgEAQgagHQgJgCgNgOIgWgXQg2g0gHgFIgTgLQgMgHgPgMQgMgKgRgVQgPgSgJgGQgIgGgagjQgZgkgIgFQgHgEgQACQgNABgDgHQgDgGgfgPQgdgOADgIQACgHAFgEQAGgEADgFQAEgGgKgJIgOgKQgIgHgGgCQgOgCgOAQQgQAPARANQAKAIATAKQAFAGAZANIAkASQAJAFAUAYQAVAbALAHQAMAHArAuIA8BBQATATArAeIA4AmQAHAFAWAKQAQAGAHALQAIANgKANIgYAUQgQANgMAAQgKAAgGgHg");
	this.shape_3.setTransform(9.6,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAjiAQgdgChFAFQhMAFgfAIQgUAFg5ASQgzARgTADQg2ALgqAMQhHAWAAAVQgBARAUAOQARAMAPgBQAVgBAugHQA3gIANgHQAPgJAqgKQAsgMAWgCQA/gFAIgBQAygDAOACQAQADAQALQAPAKAAAGQABALgCAVQgDAZgDAKQgGALgBAPQgCAPAEAIQADAHAdAAQARABAcgBQAJAAA6gMQA6gNAMAAQAGAAAxABQAlABAIgCIAMgIQAJgFAWgBQASAAAnAAQAgAAAMgEQARgGAGgFQAJgHAAgRQAAgVgegYQgkgbhCgUQgpgNhEgZQgygSgigHQg1gMgTgEQgegGgXgCg");
	this.shape_4.setTransform(-6.1,-25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AAbCBQgdAAgDgHQgEgIACgPQABgPAGgLQADgKADgZQACgVgBgLQAAgGgPgKQgQgLgQgDQgOgCgyADIhHAGQgWACgsAMQgqAKgPAJQgNAHg3AIQguAHgVABQgPABgRgMQgUgOABgRQAAgVBHgWQAqgMA2gLQATgDAzgRQA5gSAUgFQAfgIBMgFQBFgFAdACQAXACAeAGIBIAQQAiAHAyASQBEAZApANQBCAUAkAbQAeAYAAAVQAAARgJAHQgGAFgRAGQgMAEggAAIg5AAQgWABgJAFIgMAIQgIACglgBIg3gBQgMAAg6ANQg6AMgJAAIggAAIgNAAg");
	this.shape_5.setTransform(-6.1,-25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.7,-39.3,111.4,78.6);


(lib.steg_frontleg_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ACPBTQgkgcgIgMQgRgdgNgTQgYgogKgGQgNgIgcgaQgfgcgHgKQgJgQAAgXQAAgNgHgFQgHgHgOAFQgUAHgrAeQgvAgACANQACAVAGATQAIAZALAJQAHAFBDATQA/AQAFAHQAQAWAXAWQAGAEAXARQASAMACAFQADAEADAEQACAEgBANQgBAHgBASQAAAPAHAGQAJAHAOADQAQADARgGQAagIAMgGQASgJgCgJQgBgPgCgJQgCgQgEgFQgDgEgNgGQgQgGgGgFg");
	this.shape.setTransform(4.6,29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("ABnC4QgOgDgJgHQgHgGAAgPIACgZQABgNgCgEIgGgIQgCgFgSgMIgdgVQgXgWgQgWQgFgHg/gQQhDgTgHgFQgLgJgIgZQgGgTgCgVQgCgNAvggQArgeAUgHQAOgFAHAHQAHAFAAANQAAAXAJAQQAHAKAfAcQAcAaANAIQAKAGAYAoIAeAwQAIAMAkAcQAGAFAQAGQANAGADAEQAEAFACAQIADAYQACAJgSAJQgMAGgaAIQgLAEgKAAIgMgBg");
	this.shape_1.setTransform(4.6,29.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ADOkRQgwgdgKAAQgPABgFACQgLADgIAJQgIAJgpBEQgUAjgcAvQgBABgkBIQgfA4gKAJQgIAIgGAIQgFAFgQADQgQADgbgKQgEgCgigQQgMgFgTAJQgPAIgLAMQgKALgTAoQgUAqACAMQAGAiAPAKQAoAaARAHQAKAEAbAIQAYAKAOAMQAHAGAWAeQAPAVAIgDQAcgKAAgBQAUgGAMACQAeAEAQgPQAHgHgKgjQgLgpABgIQADgVAJgeQALgnANgSQAfgsAXgfQAqg4AWgRQAcgXApgnQAsgqAGgMQAGgLgLgQQgPgQgEgGQgGgJgxgdg");
	this.shape_2.setTransform(0,-17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AhoEdQgWgegHgGQgOgMgYgKIglgMQgRgHgogaQgPgKgGgiQgCgMAUgqQATgoAKgLQALgMAPgIQATgJAMAFIAmASQAbAKAQgDQAQgDAFgFIAOgQQAKgJAfg4IAlhJIAwhSQAphEAIgJQAIgJALgDQAFgCAPgBQAKAAAwAdQAxAdAGAJQAEAGAPAQQALAQgGALQgGAMgsAqQgpAngcAXQgWARgqA4Ig2BLQgNASgLAnQgJAegDAVQgBAIALApQAKAjgHAHQgQAPgegEQgMgCgUAGIgcALIgCAAQgIAAgNgSg");
	this.shape_3.setTransform(0,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-49.2,59.6,98.5);


(lib.steg_Frontleg_R_upper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ACmkHQgKAHg3A4Qg5A8gJAJQgCACgzA8QgsAxgLAHQgOAKgEACQgGABgQAAQgQAAgYgQQgDgCgegXQgLgIgUAFQgRADgNAKQgNAIgbAgQgeAkAAAMQgDAjAMANQAFAFAQARQARAQALAIQAJAGAYAPQAVAOALAPQAFAIAOAiQAKAYAIgBQAbgEAEAAQAUgBAMAFQAdALAUgLQAIgFgBgkQgCgqADgIQAIgVAQgbQARgiARgPQANgLA5gyQA3gsAZgMQAggPAxgcQA1gfAJgKQAJgJgIgTQgLgTgCgHQgEgLgognQgogngKgCQgOgCgGAAQgMAAgKAHg");
	this.shape.setTransform(9.9,-17.5,2.837,2.837);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AheEKQgMgFgUABIgfAEQgIABgKgYQgOgigFgIQgLgPgVgOIghgVQgLgIgRgQIgVgWQgMgNADgjQAAgMAegkQAbggANgIQANgKARgDQAUgFALAIIAhAZQAYAQAQAAQAQAAAGgBIASgMQALgHAsgxIA1g+IBChFQA3g4AKgHQAKgHAMAAIAUACQAKACAoAnQAoAnAEALQACAHALATQAIATgJAJQgJAKg1AfQgxAcggAPQgZAMg3AsIhGA9QgRAPgRAiQgQAbgIAVQgDAIACAqQABAkgIAFQgKAFgMAAQgMAAgPgFg");
	this.shape_1.setTransform(9.9,-17.5,2.837,2.837);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgkiJQgMAHgdAsQgXAjgIARQgFAJACAMQACAKAIAWQAIAVBDA0QBAAzAJgDQAFgCgEgYQgFgbACgGQADgHAagUQAbgVAEgEQAKgIgEgMIgGgKQgEgIgBgGQgBgHgCgFQgEgIgNgQQgOgQgGgEQgtgggMgGQgCgBgOgUQgLgOgMAHgAAOgYQAAAIgBACQgCAEgKABQgDABgDgGQgDgGAGgFQAFgIACgCQADgDAFAGQABABAAABQgBACABAEg");
	this.shape_2.setTransform(-68.6,54.6,2.837,2.837);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AgaBcQhDg0gIgVQgIgWgCgKQgCgMAFgJQAIgRAXgjQAdgsAMgHQAMgHALAOQAOAUACABQAMAGAtAgQAGAEAOAQQANAQAEAIIADAMQABAGAEAIIAGAKQAEAMgKAIIgfAZQgaAUgDAHQgCAGAFAbQAEAYgFACIgBAAQgLAAg9gwgAAFgjIgHAKQgGAFADAGQADAGADgBQAKgBACgEQABgCAAgIIAAgGIgBgCQgDgEgDAAIgCABg");
	this.shape_3.setTransform(-68.6,54.6,2.837,2.837);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-96.1,203,191.8);


(lib.steg_frontleg_R_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ACmkHQgKAHg3A4Qg5A8gJAJQgCACgzA8QgsAxgLAHQgOAKgEACQgGABgQAAQgQAAgYgQQgDgCgegXQgLgIgUAFQgRADgNAKQgNAIgbAgQgeAkAAAMQgDAjAMANQAFAFAQARQARAQALAIQAJAGAYAPQAVAOALAPQAFAIAOAiQAKAYAIgBQAbgEAEAAQAUgBAMAFQAdALAUgLQAIgFgBgkQgCgqADgIQAIgVAQgbQARgiARgPQANgLA5gyQA3gsAZgMQAggPAxgcQA1gfAJgKQAJgJgIgTQgLgTgCgHQgEgLgognQgogngKgCQgOgCgGAAQgMAAgKAHg");
	this.shape.setTransform(3.5,-22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AheEKQgMgFgUABIgfAEQgIABgKgYQgOgigFgIQgLgPgVgOIghgVQgLgIgRgQIgVgWQgMgNADgjQAAgMAegkQAbggANgIQANgKARgDQAUgFALAIIAhAZQAYAQAQAAQAQAAAGgBIASgMQALgHAsgxIA1g+IBChFQA3g4AKgHQAKgHAMAAIAUACQAKACAoAnQAoAnAEALQACAHALATQAIATgJAJQgJAKg1AfQgxAcggAPQgZAMg3AsIhGA9QgRAPgRAiQgQAbgIAVQgDAIACAqQABAkgIAFQgKAFgMAAQgMAAgPgFg");
	this.shape_1.setTransform(3.5,-22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AiAiCQAAAJADAmQABAPAAAHIALAGQAEACAhAPQAbAMAKAJQAQAQAFADQAJAJAFAMQAEAGAAANQAAALAIAOQAPAYAEAJQAGAPgDAMQgFARgOAbQgDALABAHQACAHAMAHQAIAFALAJQAKAGANAAQAIAAAKAEQAFADAJgHQAPgLAJgNQALgQgEgIQgBgCgEgVQgDgPgJgGQgLgHgFgIQAAgCgIgQQgEgLgCgQQgCgPACgMQACgNgBgRQgBgQgDgLQgCgGgNgXQgNgWgEgQQgJgagEgKQgGgRAFgKQAFgJAAgKIgBgTQABgRgEgLQgGgRgRACQgKABgUgDQgTgCgPAEQgQAFgYASQgaAUgFANQgEALABAbg");
	this.shape_2.setTransform(-6.3,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("ABTDjQgKgEgIAAQgNAAgKgGIgTgOQgMgHgCgHQgBgHADgLQAOgbAFgRQADgMgGgPQgEgJgPgYQgIgOAAgLQAAgNgEgGQgFgMgJgJIgVgTQgKgKgbgLIglgRIgLgGIgBgWIgDgvQgBgbAEgLQAFgNAagUQAYgSAQgFQAPgEATACQAUADAKgBQARgCAGARQAEALgBARIABATQAAAJgFAKQgFAKAGARIANAkQAEAQANAWQANAXACAGQADALABAQQABARgCANQgCAMACAPQACAQAEALIAIASQAFAIALAHQAJAGADAPIAFAXQAEAIgLAQQgJANgPALQgHAFgEAAIgDgBg");
	this.shape_3.setTransform(-6.3,27.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgkiJQgMAHgdAsQgXAjgIARQgFAJACAMQACAKAIAWQAIAVBDA0QBAAzAJgDQAFgCgEgYQgFgbACgGQADgHAagUQAbgVAEgEQAKgIgEgMIgGgKQgEgIgBgGQgBgHgCgFQgEgIgNgQQgOgQgGgEQgtgggMgGQgCgBgOgUQgLgOgMAHgAAOgYQAAAIgBACQgCAEgKABQgDABgDgGQgDgGAGgFQAFgIACgCQADgDAFAGQABABAAABQgBACABAEg");
	this.shape_4.setTransform(-24.2,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgaBcQhDg0gIgVQgIgWgCgKQgCgMAFgJQAIgRAXgjQAdgsAMgHQAMgHALAOQAOAUACABQAMAGAtAgQAGAEAOAQQANAQAEAIIADAMQABAGAEAIIAGAKQAEAMgKAIIgfAZQgaAUgDAHQgCAGAFAbQAEAYgFACIgBAAQgLAAg9gwgAAFgjIgHAKQgGAFADAGQADAGADgBQAKgBACgEQABgCAAgIIAAgGIgBgCQgDgEgDAAIgCABg");
	this.shape_5.setTransform(-24.2,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-51.4,72.9,102.3);


(lib.steg_frontleg_R_btm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgEgGQgEABAAADQAAACAEABQABABADAFQADADACgCQAEgEgBgEQAAgDgDgDQgCgCgBAAg");
	this.shape.setTransform(-5.5,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AABAHIgFgGQgEgBAAgCQAAgDAEgBIAGgCIADACQADADAAADQABAEgEAEIgCABIgCgCg");
	this.shape_1.setTransform(-5.5,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgDgMQgGABgFAJQgCACADADQADAEAGABQAEAAAEADQAGADACAAQADAAAAgCQAAgEABgDQABgFgDgFQgEgGgFAAQgFgCgDABg");
	this.shape_2.setTransform(-10.7,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AAEALIgIgDQgGgBgDgEQgDgDACgCQAFgJAGgBQADgBAFACQAFAAAEAGQADAFgBAFIgBAHQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgIgDg");
	this.shape_3.setTransform(-10.7,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgIgKQgDAKAHAGQAEADAEAEQADACACgEQACgDgDgCQgEgDgDgDQgBgEAAgCQABgEgDgCQgFgDgBAFg");
	this.shape_4.setTransform(-15,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AAEANIgIgHQgHgGADgKQABgFAFADQADACgBAEQAAACABAEQADADAEADQADACgCADQgBABAAABQAAAAgBAAQAAABgBAAQAAAAAAAAIgCgBg");
	this.shape_5.setTransform(-15,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgFgBQgCABgBABQAAADADAAQACAAAEABQAGABAAgCQAEgKgGABQgFAAgFAEg");
	this.shape_6.setTransform(-17.5,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AABAFIgGgBQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBQABgBACgBQAFgEAFAAQAGgBgEAKQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgBg");
	this.shape_7.setTransform(-17.5,14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAHAQQgUgIgCgFQgCgDACgFQADgEADgCQAJgGAHABQAEABgBAEQgBAGACACQAGAFAAAFQABAEgCADQgDAEgGgCg");
	this.shape_8.setTransform(-17.7,17.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AAHAQQgUgIgCgFQgCgDACgFQADgEADgCQAJgGAHABQAEABgBAEQgBAGACACQAGAFAAAFQABAEgCADQgCADgEAAIgDgBg");
	this.shape_9.setTransform(-17.7,17.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgcAHQgDAEAGABQACAAAMACQAJACACgBQAEgBAGgBQAFgBAEgGQAMgOgBgDIgBgDQgCgBgFABQgTADgDADQgCAEgVAGQgDACgCADg");
	this.shape_10.setTransform(-21.8,15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AgLAOIgOgCQgGgBADgEQACgDADgCQAVgGACgEQADgDATgDIAHAAIABADQABADgMAOQgEAGgFABIgKACIgBABIgKgCg");
	this.shape_11.setTransform(-21.8,15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgdgLQABgCAIgEQAFgCAGACQAGACADAEQADAJAIACQAFAAAFAEQAGAFACAFQADAFgFAAQgCABgIgCQgDAAgKgGQgIgGgEAAQgHAAgEgDQgEgCgFgGQgCgFABgBg");
	this.shape_12.setTransform(-5.7,10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AARASQgDAAgKgGQgIgGgEAAQgHAAgEgDQgEgCgFgGQgCgFABgBQABgCAIgEQAFgCAGACQAGACADAEQADAJAIACQAFAAAFAEQAGAFACAFQADAFgFAAIgBAAIgJgBg");
	this.shape_13.setTransform(-5.7,10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAFggQAEgBAFgBQACAAABAFQABAEACAGQABAFgEADQgFADgEAGQgEAFABAEQAAADAEAEQAEADgBAEQAAADgCAIQgBAFgEgDQgEgDgBgDQAAgEAAgDQgCgDgHgBQgHAAgBgBQgDgEABgMQABgDAGgGQAGgFACgGQADgIABgCQAAgCAFAAg");
	this.shape_14.setTransform(-4.5,16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AAFAiQgEgDgBgDIAAgHQgCgDgHgBQgHAAgBgBQgDgEABgMQABgDAGgGQAGgFACgGIAEgKQAAgCAFAAIAJgCQACAAABAFIADAKQABAFgEADQgFADgEAGQgEAFABAEQAAADAEAEQAEADgBAEIgCALQAAAAAAABQAAABgBAAQAAAAgBABQAAAAAAAAIgDgBg");
	this.shape_15.setTransform(-4.5,16.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAJgnQADgCAFAEQAFAFgBACQAAACgBAKQgCALgDADQgCACgJAGQgFAIAAAFQAAABABAOQABAHgCABQgFACgHgHQgIgHABgFQAAgBABgKQAAgHAGgFQAEgBAIgEQACgCACgGQAAgBABgOQAAgIAFgDg");
	this.shape_16.setTransform(-12,14);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AgNAjQgIgHABgFIABgLQAAgHAGgFIAMgFQACgCACgGIABgPQAAgIAFgDQADgCAFAEQAFAFgBACIgBAMQgCALgDADIgLAIQgFAIAAAFIABAPQABAHgCABIgCABQgEAAgGgGg");
	this.shape_17.setTransform(-12,14);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLgnQgDADADANQADAMgDACQgDADgIAFQgHADgBAEQgDAOAKADQADABAHgBQAGAAADAEQABABADAJQABAFAEAAQAFABAAgLQAAgOABgCQACgEAEgCQAEgDAEgGQALgQgIgIQgEgDgFAAQgHAAgDgCQgDgBgDgFQgCgEgBgBQgEgCgCAAQgDgBgCADg");
	this.shape_18.setTransform(-8.5,14.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AAFAqQgEAAgBgFIgEgKQgDgEgGAAQgHABgDgBQgKgDADgOQABgEAHgDIALgIQADgCgDgMQgDgNADgDQACgDADABIAGACQABABACAEQADAFADABQADACAHAAQAFAAAEADQAIAIgLAQQgEAGgEADQgEACgCAEQgBACAAAOQAAAKgEAAIgBAAg");
	this.shape_19.setTransform(-8.5,14.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAQgXQgCAAgBgBQABACgCACQgCACgCAIQgBAJgGAFQgDAIgKADQgIACAAABQAAAMAGgBQAPgEALgOQAGgJADgKQACgNgHgCg");
	this.shape_20.setTransform(-13.8,11.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AgUAPQAAgBAIgCQAKgCADgIQAGgFABgKQACgIACgCQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIADABQAHACgCAMQgDALgGAIQgLAOgPAFIgBAAQgFAAAAgMg");
	this.shape_21.setTransform(-13.8,11.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAKAQQAFABABgCQACgMAAAAQAHgNgZgGQgGgBgDAHIgFAIQgDABgBACQgBAEAFACQAEABAGAEQAEADAKABg");
	this.shape_22.setTransform(-10.6,8.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AAKAQQgKgBgEgDIgKgFQgFgCABgEQABgCADgBIAFgIQADgHAGABQAZAGgHANIgCAMQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAIgCgBg");
	this.shape_23.setTransform(-10.6,8.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABth0QAMADANgCQAIgBAGAVQABACADAJQACAIgGAEQgEADgMAGQgLAGgDADQgCABgFAKQgGAIgIAHQgeAXgPAFQgPAIgVAOQgSANgHAHQgEAEgRALQgTALgFAFQgZATgNAaQgEAIgEAIQgDADgIAAQgIAAgHgGQgEgCgLgLQgIgIgCgJQgCgLAGgEQAHgJAHgHQAMgNAQgLQA2gjAQgTQAHgHAOgUQAKgOAEgFQAKgIAFgFQAIgIgCgNQgBgOADgFIANgLQAMgLAFgEQAIgGAFAEQAMAIABABQAHAEAGABQAFAAAMAFg");
	this.shape_24.setTransform(9.6,-1.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("Ah+CDIgPgNQgIgIgCgJQgCgLAGgEIAOgQQAMgNAQgLQA2gjAQgTIAVgbQAKgOAEgFQAKgIAFgFQAIgIgCgNQgBgOADgFIANgLIARgPQAIgGAFAEIANAJQAHAEAGABQAFAAAMAFQAMADANgCQAIgBAGAVIAEALQACAIgGAEIgQAJIgOAJIgHALQgGAIgIAHQgeAXgPAFQgPAIgVAOQgSANgHAHQgEAEgRALQgTALgFAFQgZATgNAaIgIAQQgDADgIAAQgIAAgHgGg");
	this.shape_25.setTransform(9.6,-1.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABFiLQgBACgEANQgEAKgDAFQgDAFgZArQgYApgGAHQgMALhPA9QgFAEgOAHQgMAIgCALQgCAMAIANQAEAHAHAKQAHAPAKAAQAHAAAcgZQAXgWAKgLQAEgFANgUQALgVAGgIQADgDATgcQAOgUAKgHQAGgEATgVQAPgQAGgBQAIgCAIgHQAHgHABgGQABgFgRgWQgNgRgHgHQgEgFgHAAQgIgBgDAGg");
	this.shape_26.setTransform(2.1,-6.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF3BB").s().p("AhsCDIgLgRQgIgNACgMQACgLAMgIQAOgHAFgEQBPg9AMgLQAGgHAYgpIAcgwQADgFAEgKIAFgPQADgGAIABQAHAAAEAFQAHAHANARQARAWgBAFQgBAGgHAHQgIAHgIACQgGABgPAQQgTAVgGAEQgKAHgOAUIgWAfIgRAdQgNAUgEAFQgKALgXAWQgcAZgHAAQgKAAgHgPg");
	this.shape_27.setTransform(2.1,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-22.3,51.8,44.7);


(lib.steg_Frontleg_L_upper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(2,0,0,4).p("AJKsLQiKhSgcABQgpADgQAEQgeAKgYAaQgWAYhzDBQg7BlhPCFQgBADhqDLQhYCkgdAZQgWAXgRAVQgOAOguAJQgtAIhNgcQgLgEhiguQgigPg1AbQgqAXghAiQgcAfg2BxQg3B2AEAiQARBiAqAbQByBLAwATQAeALBLAYQBGAbAnAiQAUASA9BUQArA8AWgJQBQgcABgCQA4gRAjAGQBYALAtgsQAUgSgbhlQgfhzACgWQAIg9AZhVQAfhuAlgzQBYh+BBhYQB5ijA9gwQBPhAB1huQB9h3ASgjQARgfghgtQgqgvgLgRQgRgaiKhSg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AkrMoQg9hUgUgSQgngihGgbQhLgYgegLQgwgThyhLQgqgbgRhiQgEgiA3h2QA2hxAcgfQAhgiAqgXQA1gbAiAPIBtAyQBNAcAtgIQAugJAOgOQARgVAWgXQAdgZBYikIBrjOICKjqQBzjBAWgYQAYgaAegKQAQgEApgDQAcgBCKBSQCKBSARAaQALARAqAvQAhAtgRAfQgSAjh9B3Qh1BuhPBAQg9Awh5CjQhBBYhYB+QglAzgfBuQgZBVgIA9QgCAWAfBzQAbBlgUASQgtAshYgLQgjgGg4ARQgBAChQAcIgFACQgWAAgmg1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-87.9,165.4,175.1);


(lib.steg_Frontleg_L_mid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(2,0,0,4).p("AGWDtQhmhPgXgkQgvhRglg5QhEhygcgRQgngYhRhKQhahOgSgeQgbgtAAhBQAAgkgTgPQgVgTgoAOQg4AUh5BUQiFBcAEAlQAHA6ARA2QAXBJAeAYQAVAPC9A2QC0AxANATQAtBABGA9QAQAMBDAvQAxAiAHAOQAHANAKAMQAGALgEAlQgCASgEAzQAAAsAUAQQAbAVAmAHQAvAKAwgRQBJgYAigRQAzgagEgYQgFgsgEgZQgGgugLgOQgJgKgmgRQgsgSgSgNg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AEkIKQgmgHgbgVQgUgQAAgsIAGhFQAEglgGgLQgKgMgHgNQgHgOgxgiQhDgvgQgMQhGg9gthAQgNgTi0gxQi9g2gVgPQgegYgXhJQgRg2gHg6QgEglCFhcQB5hUA4gUQAogOAVATQATAPAAAkQAABBAbAtQASAeBaBOQBRBKAnAYQAcARBEByQAlA5AvBRQAXAkBmBPQASANAsASQAmARAJAKQALAOAGAuQAEAZAFAsQAEAYgzAaQgiARhJAYQgeALgeAAQgRAAgSgEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-53.6,110.3,107.3);


(lib.steg_Frontleg_L_btm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAci6QgFABgIANQgKAOgFAEQgFAEgNADQgPADgGABQgBABgSABQgKAAABAHQAAAPAOALQADADARANQAPANgBAGQgBAFAFAlQAFAnAAALQAABHAHASQAEASAIAxQACAKAJADQAIABAJgDQAGgCgBgNQgCgUgBgNQgEg6AHgfIAOg/QALg4AAgZQACgfAAgDQAAgWgGgKQgIgQgEgEQgJgIgOADg");
	this.shape.setTransform(4.3,-6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AAUC8QgJgDgCgKQgIgxgEgSQgHgSAAhHQAAgLgFgnQgFglABgFQABgGgPgNIgUgQQgOgLAAgPQgBgHAKAAIATgCIAVgEQANgDAFgEQAFgEAKgOQAIgNAFgBQAOgDAJAIQAEAEAIAQQAGAKAAAWIgCAiQAAAZgLA4IgOA/QgHAfAEA6IADAhQABANgGACQgGACgGAAIgFAAg");
	this.shape_1.setTransform(4.3,-6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AguilQgHABgDAFQgBACgBAJQAAAGAFAIQAKAPAAABQAFALAHAZQAHAcgBALQgBAPABB6QAAAKgEATQgCAPAGAHQAEAFADAIQACAFAIACQAUAEAZgGQANgCAEgCQAGgEgBgKQgBgKgJgiQgJghgFgSQgGgUgFgXQgGgaAAgMQAAgBgCgnQgBgdADgHQAFgIAAgEQAAgFgFgJQgIgSgGgFQgOgMgkADg");
	this.shape_2.setTransform(-1.6,-4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AgIClQgIgCgCgFQgDgIgEgFQgGgHACgPQAEgTAAgKQgBh6ABgPQABgLgHgcQgHgZgFgLIgKgQQgFgIAAgGIACgLQADgFAHgBQAkgDAOAMQAGAFAIASQAFAJAAAFQAAAEgFAIQgDAHABAdIACAoQAAAMAGAaQAFAXAGAUIAOAzQAJAiABAKQABAKgGAEQgEACgNACQgPADgNAAQgJAAgIgBg");
	this.shape_3.setTransform(-1.6,-4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AARgNQgMgBgFgBQgMgBgIADQgDACABAIQAAAGACADQACACACAEQADADAEABQAEAAAKAAQAKAAACgCQAGgHgBgIQACgGAAgDQAAgDgHAAg");
	this.shape_4.setTransform(6.2,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgJAQQgEgBgDgDIgEgGQgCgDAAgGQgBgIADgCQAIgDAMABIARACQAHAAAAADIgCAJQABAIgGAHQgCACgKAAIgOAAg");
	this.shape_5.setTransform(6.2,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgbgEQAAgFAIgBQAGAAAEACQAEABAFABQAIABACgCQAEgDACgBQAEgDACACQADADACAJQACAHgCAEQgCAEgFgBQgGgCgEgBQgBAAgQACQgOABgBgDQgGgLABgEg");
	this.shape_6.setTransform(0.3,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AAUAOIgKgDIgRACQgOABgBgDQgGgLABgEQAAgFAIgBQAGAAAEACIAJACQAIABACgCIAGgEQAEgDACACQADADACAJQACAHgCAEQgCADgDAAIgCAAg");
	this.shape_7.setTransform(0.3,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgJAAQgBABAGADQAFAGADgGQABgBAEgDQACgDgDgBQgIgCgBAAQgHABgBAFg");
	this.shape_8.setTransform(7.2,24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AgEAEQgGgDABgBQABgFAHgBIAJACQABAAAAABQABAAAAAAQAAABAAAAQAAABgBABIgFAEQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgEgDg");
	this.shape_9.setTransform(7.2,24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgEghQACgDAEACQAHADAAAEQAAAEgEAGQgEAFAAAEQACAQAGAKQAEAHAAABQACAEgEACQgDADgDABQgCAAgEAAQgLgBAAgOQAAgfACgFQABgGABgDQABgGADgDg");
	this.shape_10.setTransform(6.6,19.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AgBAkQgLgBAAgOQAAgfACgFIACgJQABgGADgDQACgDAEACQAHADAAAEQAAAEgEAGQgEAFAAAEQACAQAGAKIAEAIQACAEgEACQgDADgDABIgDAAIgDAAg");
	this.shape_11.setTransform(6.6,19.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgKgjQADgDAPAAQARAAACADQABADACAFQABAFgEAEQgKAIgEAIQgDAFgBAVQAAABABAKQAAAHgDgHQgHgLAAgDQgDgFgFgBQgBAAgLABQgIABgBgDQgBgDAFgDQAHgEACgEQADgCAAgPQgBgOAEgEg");
	this.shape_12.setTransform(0,19.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AAHAjIgHgOQgDgFgFgBIgMABQgIABgBgDQgBgDAFgDQAHgEACgEQADgCAAgPQgBgOAEgEQADgDAPAAQARAAACADIADAIQABAFgEAEQgKAIgEAIQgDAFgBAVIABALIgBAEIgCgEg");
	this.shape_13.setTransform(0,19.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAIgqQgEABgDALQgCAMgCABQgLAOAAAHQAAAEgBAIQgBAIACADQACADADAGQACAFAEABQAGACADAAQAGAAACgEQADgFgBgRQgCgSAAgBQgDgdADgFQACgEgCgDQgCgDgEADg");
	this.shape_14.setTransform(3,20.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AgDAqQgEgBgCgFIgFgJQgCgDABgIIABgMQAAgHALgOQACgBACgMQADgLAEgBQAEgDACADQACADgCAEQgDAFADAdIACATQABARgDAFQgCAEgGAAIgJgCg");
	this.shape_15.setTransform(3,20.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgPgIQgBACACACQACACADgBQACgBAHAEQACABAAAHQAAADAFADQAGACACgEQAEgJgHgGQgFgFgGgDQgHgFgDADQgDADgBgBg");
	this.shape_16.setTransform(-1,22.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AAHAOQgFgDAAgDQAAgHgCgBQgHgEgCABQgBABgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgDQAAABAAAAQABgBAAAAQABAAAAAAQABgBABgBQADgDAHAFQAGADAFAFQAHAGgEAJQgBABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBg");
	this.shape_17.setTransform(-1,22.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AADgKQgOAJgDADQgDAGAAACQgBADAEgCQADgBAKAAQAIAAADgDQAGgGABgBQADgBgCgDQgDgDgEgCQgFgDgDACg");
	this.shape_18.setTransform(-3.1,24.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AgRAKIADgIQADgDAOgJQADgCAFADQAEACADADQACADgDABIgHAHQgDADgIAAQgKAAgDABIgCABQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_19.setTransform(-3.1,24.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgUAKQAHgCANACQACAAAGACQAGABADgDQAGgFABgBQACgDgCgBQgCgEgCgCQgDgEgGgBQgGAAgGAGQgCABgIADQgIABgBADQgCADgCADQgBABAFAAg");
	this.shape_20.setTransform(-8.6,23.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AAIAMIgIgCQgNgCgHACQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAAAIAEgGQABgDAIgBIAKgEQAGgGAGAAQAGABADAEIAEAGQACABgCADIgHAGQgCACgEAAIgDAAg");
	this.shape_21.setTransform(-8.6,23.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLgFQgBACACAAQADACABABQADACAGAIQAKgBgBgHQgBgJgLgCQgEgBgCAAQgDABgCAEg");
	this.shape_22.setTransform(-5.5,22.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AgGAAIgEgCQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQACgFADAAIAGABQALACABAIQABAHgKACIgJgLg");
	this.shape_23.setTransform(-5.5,22.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAMgZQAEAKgBAHQgEAQgEAFQgBAAgFAKQgCAIgEAAQgGAAgCgFQgDgGAFgDQASgLgCgKQgBgNADgLQACgGADAJg");
	this.shape_24.setTransform(-3.6,18.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("AgNAaQgDgGAFgDQASgLgCgKQgBgNADgLQACgGADAJQAEAKgBAHQgEAQgEAFIgGAKQgCAIgEAAQgGAAgCgFg");
	this.shape_25.setTransform(-3.6,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-26.4,24.4,52.9);


(lib.Steg_backleg_R_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhNAvQgoAshMBZQgPASgvAvQgPAPgBACQgKALgBAJQgDAcAMAPQAHAJAXAPQAYAQAOAGQAOAFAMgDQAJgCANgJQAKgGACgGQADgJADgKQAnhkAXgYQANgNAkgkQAeggAIgNQAGgKAggsQAfgrAHgMQAXglAghAQAIgPARgMQASgNAFgHQAGgJA4hVQAwhUgXgSQghgZgegHQgngIgXAcQgUAXgbBGQgcBIgFAHQgHAJgSAkQgSAigIAKQgHAHglA8QgoA4gNAPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AjNFzQgOgGgYgQQgXgPgHgJQgMgPADgcQABgJAKgLIAQgRQAvgvAPgSQBMhZAogsQANgPAog4QAlg8AHgHQAIgKASgiQASgkAHgJQAFgHAchIQAbhGAUgXQAXgcAnAIQAeAHAhAZQAXASgwBUIg+BeQgFAHgSANQgRAMgIAPQggBAgXAlQgHAMgfArQggAsgGAKQgIANgeAgIgxAxQgXAYgnBkIgGATQgCAGgKAGQgNAJgJACIgIABQgJAAgJgDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-38.5,58.8,77);


(lib.steg_backleg_L_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag8lRQgBgCgCgDQgDgFgKABQgNABgEAMQgFAMAGAPQAEALAFAhQAEAgADAHQAGAOAKBQQAGApAKB8QABAPgEBKQgEBMABAXQABATgGAqQgGAtAAAMQAAAOgEAYQgBATALAMQAOANAJAFQAJAFASACQANADALACQAIABAVgEQAOgDADgCQAEgCAIgMQAFgIAIgCQAGgCAAgHQABgGgPghQgQgkgCgTQgCghgDhUQgDheACgRQACgQgChHQgDhNAAgQQgBgPgIgWQgHgTACgLQAAgBAEg5QADguAHgOQAIgRAFgYQAFgWAAgPQAAgWgFgNQgKgYgagIQgegJgQABQgTABgUANQgSAMgIATQgIARAFAGQACAEANATQAEAHADAFQAFAGACACQgDgCADAQQAEARAAgCQgCAKgCADQAAgXgBgMQgBgFgFgKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AATG5IgYgFQgSgCgJgFQgJgFgOgNQgLgMABgTQAEgYAAgOQAAgMAGgtQAGgqgBgTQgBgXAEhMQAEhKgBgPQgKh8gGgpQgKhQgGgOQgDgHgEggQgFghgEgLQgGgPAFgMQAEgMANgBQAKgBADAFIADAFQAFAKABAFQABAMAAAXIAEgNIAAAAIAAAAIAAAAIgCgHIAAgBIgBgCIgBgFIAAgEQgCgKACAAIAAAAIAAAAIgHgIIgHgMIgPgXQgFgGAIgRQAIgTASgMQAUgNATgBQAQgBAeAJQAaAIAKAYQAFANAAAWQAAAPgFAWQgFAYgIARQgHAOgDAuIgEA6QgCALAHATQAIAWABAPIADBdQACBHgCAQQgCARADBeQADBUACAhQACATAQAkQAPAhgBAGQAAAHgGACQgIACgFAIQgIAMgEACQgDACgOADQgRADgIAAIgEAAgAg2lCQgBgFgFgKIAHAIIAAAAIAAAAQgCAAACAKIAAAEIABAFIABACIAAABIACAHIAAAAIAAAAIAAAAIgEANQAAgXgBgMgAg8lRIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-45.1,21.4,90.4);


(lib.steg_backleg_L_btm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAPgRQgQgPgFAGQgMAOgEANQgBAFgHAHQgDAHALAFQAKAGAGgEQADgCAHgJQAEgCAOgFQAKgEAAgEQAAgFgRgNg");
	this.shape.setTransform(9,30.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AgWAZQgLgFADgHQAHgHABgFQAEgNAMgOQAFgGAQAPQARANAAAFQAAAEgKAEQgOAFgEACIgKALQgDACgDAAQgEAAgGgEg");
	this.shape_1.setTransform(9,30.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgSgOQgKAKgCAEQgFAGAHAEQABABANAMQAIAIAGgBQAIAAAMgJQAOgKgBgJQgCgHgIgIQgLgJgFgEQgGgGgGAGQgIAIgFAEg");
	this.shape_2.setTransform(12.3,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AgOAXIgOgNQgHgEAFgGQACgEAKgKIANgMQAGgGAGAGIAQANQAIAIACAHQABAJgOAKQgMAJgIAAIAAAAQgGAAgIgHg");
	this.shape_3.setTransform(12.3,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgFAKQgKAHAMgGQAKgFADgFQAEgFgBgEQgBgGgJADQgDABgIgBQgFgBABAFQABADAFAGQAEAFgDADg");
	this.shape_4.setTransform(17,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgFAKQADgDgEgFQgFgGgBgDQgBgFAFABQAIABADgBQAJgDABAGQABAEgEAFQgDAFgKAFIgHACQgBAAAGgDg");
	this.shape_5.setTransform(17,19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAMgIQgFgNgKAAQgHAAgDAGQgCAGADAHQACADAEANQAFALAHgEQAGgDACgKQACgIgEgIg");
	this.shape_6.setTransform(14.4,19.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AgGAOIgGgQQgDgHACgGQADgGAHAAQAKAAAFANQAEAIgCAIQgCAKgGADIgFABQgEAAgDgIg");
	this.shape_7.setTransform(14.4,19.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AghgqQgGAAAIAMQAKARABACQAAAEgEAHQgEAHABAGQACAFgBAFQABADALAFQAIAFAGAGQAGADAKgCQANgDAFgHQAGgHgIgIQgCgCgMgJQgHgFAAgFQAAgCAEgMQADgHgIgGQgKgIgIgDQgIgCgRABg");
	this.shape_8.setTransform(13.1,21.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AAAAqQgGgGgIgFQgLgFgBgDQABgFgCgFQgBgGAEgHQAEgHAAgEQgBgCgKgRQgIgMAGAAQARgBAIACQAIADAKAIQAIAGgDAHIgEAOQAAAFAHAFIAOALQAIAIgGAHQgFAHgNADIgIABQgFAAgDgCg");
	this.shape_9.setTransform(13.1,21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAIAeQgIAFgJgCQgPgFgFgCQgIgFgDgGQgCgHAJgHQAGgCANgHQAOgMAWgMQAFgDAIASQAIARgDAFQgIASgKABQgBAAgNAGg");
	this.shape_10.setTransform(16.4,13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AgJAhIgUgHQgIgFgDgGQgCgHAJgHIATgJQAOgMAWgMQAFgDAIASQAIARgDAFQgIASgKABIgOAGQgHAEgEAAIgGgBg");
	this.shape_11.setTransform(16.4,13.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AiYjYQASgLACAAQALgFAJAFQAGAEAeA7QAfA8AJAHQALAJAaAkQAXAfALARQAEAEAHASQAFANAJAKQAFAFAbArQAZAlAOAKQAZATAIAaIACAIQAAABgLAJQgLAKgDADQgGAEgKAEQgPAJgFABQgIADgCgNQgIgugLgYQgRghgCgDQgOgZgIgFQgRgKgSggQgEgHgOgkQgNgggIgHIghghQgYgYgIgEQgMgFgVgVQgYgYgCgNQgDgYABgFQABgPAMgIg");
	this.shape_12.setTransform(1.3,-8.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("ABfDcQgIgugLgYIgTgkQgOgZgIgFQgRgKgSggQgEgHgOgkQgNgggIgHIghghQgYgYgIgEQgMgFgVgVQgYgYgCgNQgDgYABgFQABgPAMgIIAUgLQALgFAJAFQAGAEAeA7QAfA8AJAHQALAJAaAkQAXAfALARQAEAEAHASQAFANAJAKQAFAFAbArQAZAlAOAKQAZATAIAaIACAIIgLAKIgOANQgGAEgKAEQgPAJgFABIgCABQgGAAgCgLg");
	this.shape_13.setTransform(1.3,-8.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AjPiCQgFARAFAJQAHALAcAcQAEAFAPATQAQARAOAFQAsAPAcAPQAWANAZAWQAcAZAJARQAVArADAiQACANABAPQACALAJAOQAJAQAHAFQAGAEAOAFQAKADAdgMQAcgMAGACQAKACAFgCQAFgCAFgJQAGgJAAgQQgBgQgJgEQgVgIgdgjQgWgagOgZQgFgHgog/Qglg4gEgIQgBgDgYgoQgSgigCgKQAAgFgGgWQgFgUgBgNQgBgUgEgKQgGgOgMgBQgKgCgJAHQgKAJgFABQgOADhAA1QgpAmgDAIg");
	this.shape_14.setTransform(0,-8.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("ABrD4QgOgFgGgEQgHgFgJgQQgJgOgCgLIgDgcQgDgigVgrQgJgRgcgZQgZgWgWgNQgcgPgsgPQgOgFgQgRIgTgYQgcgcgHgLQgFgJAFgRQADgIApgmQBAg1AOgDQAFgBAKgJQAJgHAKACQAMABAGAOQAEAKABAUQABANAFAUQAGAWAAAFQACAKASAiIAZArQAEAIAlA4IAtBGQAOAZAWAaQAdAjAVAIQAJAEABAQQAAAQgGAJQgFAJgFACQgFACgKgCQgGgCgcAMQgXAJgLAAIgFAAg");
	this.shape_15.setTransform(0,-8.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgBgRQgGACAAACQgCACgHAEQgGAEADAHQABAFACAEQgBACAEADQAFADAIgCQALgCADgEQACgDAEgKQADgLgJgFQgIgFgHAEg");
	this.shape_16.setTransform(9,27.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AgNASQgEgDABgCIgDgJQgDgHAGgEIAJgGQAAgCAGgCQAHgEAIAFQAJAFgDALQgEAKgCADQgDAEgLACIgFABQgFAAgDgCg");
	this.shape_17.setTransform(9,27.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AADgWQgIACgGAOQgFAMAGAFQALALADACQAJAGAAgKQABgQAAgGQAAgOgBgEQABgFgBAAQgDACgHABg");
	this.shape_18.setTransform(10.1,24.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AAEAYIgOgNQgGgFAFgMQAGgOAIgCIAKgDQAAAAAAAAQABABAAAAQAAABAAABQAAAAgBACQABAEAAAOIgBAWQAAAGgDAAQgCAAgEgCg");
	this.shape_19.setTransform(10.1,24.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAWgaQgHABgQAHQgTAIgBAEQAAABgIAKQgHALABADQACADABAEQACACAJgDQAIgDAKgEQAFgCAIABQAOACADAAQAIAAABgGQABgGgPghg");
	this.shape_20.setTransform(3.6,30.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AggAaIgDgHQgBgDAHgLIAIgLQABgEATgIQAQgHAHgBQAPAhgBAGQgBAGgIAAIgRgCQgIgBgFACIgSAHIgJACIgCgBg");
	this.shape_21.setTransform(3.6,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-34.5,44.3,69);


(lib.Steg_backleg_btm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgJQgHACgBAFQgBACAAAGQAAAGADACQADADADgHQAHgKACgCQADgHgEgDQgDgCAAABQgCADgDABg");
	this.shape.setTransform(-1.1,29.9,0.999,0.999,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AgGAOQgDgCAAgGIABgIQABgFAHgCQADgBACgDQAAgBAAAAQAAAAABAAQAAAAABABQAAAAABABQAEADgDAHIgJAMQgCAFgCAAIgCgBg");
	this.shape_1.setTransform(-1.1,29.9,0.999,0.999,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgEAGQAEAFAEgBQAFgBAAgJQgBgIgGgBQgDgBgDAFQgBACgCADQgBAAAEAGg");
	this.shape_2.setTransform(0.5,27.8,0.999,0.999,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AgEAGQgEgGABAAIADgFQADgFADABQAGABABAIQAAAJgFABIgCAAQgCAAgEgEg");
	this.shape_3.setTransform(0.5,27.8,0.999,0.999,19.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgHANQgCAGAIAAQAHAAACgGQABgEgBgLQgBgMABgDQABgCgFACQgHAGgBABQgEABABAJQACAKgCADg");
	this.shape_4.setTransform(1.4,25.3,0.999,0.999,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgHANQACgDgCgKQgBgJAEgBIAIgGQABgBABgBQABAAAAAAQABAAAAAAQAAABAAABIAAAOQABALgBAEQgCAGgHAAQgIAAACgGg");
	this.shape_5.setTransform(1.4,25.3,0.999,0.999,19.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgWAMQgEAFAHAEQAGAEAHgFQAGgIAFgDQAUgLAAgKQAAgGgHgCQgIgDgBAFQgBADgGADQgFAEgGAHQgFAEgIAJg");
	this.shape_6.setTransform(4.2,21.9,0.999,0.999,19.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AgTAVQgHgEAEgFIANgNQAGgHAFgEQAGgDABgDQABgFAIADQAHACAAAGQAAAKgUALQgFADgGAIQgEADgEAAIgFgCg");
	this.shape_7.setTransform(4.2,21.9,0.999,0.999,19.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMgDQgFADABAHQABAJALAAQAIABAGgGQACgDAEgIQADgGgFgFQgFgGgGACQgDABgDADQgCACgHAGg");
	this.shape_8.setTransform(-5.2,29.1,0.999,0.999,19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AgEAQQgLAAgBgJQgBgHAFgDIAJgIQADgDADgBQAGgCAFAGQAFAFgDAGQgEAIgCADQgGAFgHAAIgBAAg");
	this.shape_9.setTransform(-5.2,29.1,0.999,0.999,19.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgPAAQgEADABAKQAAAJADAEQACAEANgPQAKgMAIgPQADgHgFgFQgFgEgGADQgHAFgNAUg");
	this.shape_10.setTransform(-5,31.8,0.998,0.998,39.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AgPAaQgDgEAAgJQgBgKAEgDQANgUAHgFQAGgDAFAEQAFAFgDAHQgIAPgKAMQgKAMgEAAIgBgBg");
	this.shape_11.setTransform(-5,31.8,0.998,0.998,39.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAMgkIAGAEQAFAEAAAFQgCALgNAMQgHAEgGAKQgJALAAACQgMgPAHgPQAEgKAMgIQAMgKADgFg");
	this.shape_12.setTransform(-10.3,31.8,0.998,0.998,39.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AgTAAQAEgIAMgJQAMgJADgFIAGADQAFAFAAAEQgCAMgNAKQgHAGgGAKQgJAKAAADQgMgPAHgRg");
	this.shape_13.setTransform(-10,31.4,0.998,0.998,39.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgKgOQgFADABALQAAAKAEADQAGAFABAAQADABADgGQAJgLABgCQAEgEgFgFQgKgHAAAAQgDgCgJAEg");
	this.shape_14.setTransform(-1.9,27.4,0.999,0.999,19.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AgDASIgHgFQgEgDAAgKQgBgLAFgDQAJgEADACIAKAHQAFAFgEAEIgKANQgDAFgCAAIgBAAg");
	this.shape_15.setTransform(-1.9,27.4,0.999,0.999,19.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AARgRQgKgIgIgCQgDAAgHALQgGAKgBAEQAAABABAHQABAIgCACQgEAEgBAEQgCAGAHgDQAGgDALgEQAIgEADgEQAMgLADgEQACgFgKgJg");
	this.shape_16.setTransform(-8.8,27.4,0.998,0.998,46.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AgXAYQABgEAEgEQACgCgBgIIgBgIQABgEAGgKQAHgLADAAQAIACAKAIQAKAJgCAFQgDAEgMALQgDAEgIAEIgRAHIgEABQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABgBg");
	this.shape_17.setTransform(-8.8,27.4,0.998,0.998,46.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgCAWQAHADAEgEQAHgHADgGQAGgIgFgDQgIgHgFgFQgIgHgHAAQgGAAgBAGQgBADgBAIQgBAEgDAEQgBAFAFAFQAHAGAIADg");
	this.shape_18.setTransform(-4.5,25.3,0.999,0.999,19.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AgCAWQgIgDgHgGQgFgFABgFIAEgIIACgLQABgGAGAAQAHAAAIAHIANAMQAFADgGAIQgDAGgHAHQgCACgEAAIgFgBg");
	this.shape_19.setTransform(-4.5,25.3,0.999,0.999,19.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgqgrQgCADAEAFQAHAHABABQACAGABAHQAAAJgDAEQgKAKAAAIQAAADgBADQABADAGAEQAeAWAGgHQAFgFACgLQABgLABgEQAGgVAJgEQAKgEACAAQAFgDACgEQAEgLgMgBQgWAAgRgDQgTgDgKgGQgEgBgFAEg");
	this.shape_20.setTransform(0.5,21.6,0.999,0.999,19.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AgkAeQgGgEgBgDIABgGQAAgIAKgKQADgEAAgJQgBgHgCgGIgIgIQgEgFACgDQAFgEAEABQAKAGATADQARADAWAAQAMABgEALQgCAEgFADIgMAEQgJAEgGAVIgCAPQgCALgFAFQAAACgEAAQgKAAgWgRg");
	this.shape_21.setTransform(0.5,21.6,0.999,0.999,19.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhAgIQAIAQAMAIQAPAIAcgCQAFgBATAAQAQgBAGgDQASgLADgJQACgHgBgCQgCgCgKAGQgiARgVgFQgMgEgTgFQgWgIgFgFQgGgFgCAEQgCADAEAIg");
	this.shape_22.setTransform(5.8,16.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AgsAQQgMgIgIgQQgEgIACgDQACgEAGAFQAFAFAWAIQATAFAMAEQAVAFAigRQAKgGACACQABACgCAHQgDAJgSALQgGADgQABIgYABIgKAAQgVAAgMgGg");
	this.shape_23.setTransform(5.8,16.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA+kOQgKgBgiAIQgbAHgZAJQgOAFgeAFQgaAFgEADQgJAFgDAIQgCAGgBAMQAAAGAKAQQALAPgBAJQAAAJgDAQQgBANAEAFQADAEAZAZQAOAPAYAeQAfAmABAMQACAKAHAkQAIAkgFAWQgHAkgPAvQgDAMAEAOQAEARAKAGQAhAUATAAQAMAAAZgHQAagHAHgGQAGgGgIgZQgMghgEgQQgHgYgHgkQgIglgBgQQAAgFgHhDQgHg/ABgPQAAgcAAgQQAAgeAFgOQARgwAAgNQAAgKgIgJQgJgJgLgBg");
	this.shape_24.setTransform(-0.1,-11);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("AAAD7QgKgGgEgRQgEgOADgMQAPgvAHgkQAFgWgIgkQgHgkgCgKQgBgMgfgmQgYgegOgPIgcgdQgEgFABgNIADgZQABgJgLgPQgKgQAAgGQABgMACgGQADgIAJgFQAEgDAagFQAegFAOgFQAZgJAbgHQAigIAKABQALABAJAJQAIAJAAAKQAAANgRAwQgFAOAAAeIAAAsQgBAPAHA/IAHBIQABAQAIAlQAHAkAHAYIAQAxQAIAZgGAGQgHAGgaAHQgZAHgMAAQgTAAghgUg");
	this.shape_25.setTransform(-0.1,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-39.1,27.8,73.2);


(lib.mousetail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDCEAA").s().p("EA2sAIqQi5gukChyQkeiEiSg8Qj5hmjOgkQj9grjUA0QhfAYipAyIkbBTQlaBhjRAGQiLAEh7gkQhlgdhyhBQgggSivhvQiHhUhpgyQlDicnMgtQm7gslwBNQicAhiwA2QhJAXjjBNQl3B+kEAnQm7BEklgWQmTgdkPi+QHqAOFsggQHMgpF2h3QByglEdhtQD8hiCWgpQF6hqGPAVQGPAUFuCOQCzBGFdCqQE5CKDpARQC3ANDhgxQCCgcEPhVQEHhSCKgdQDgguC3ASQB/AMCRAwQBGAXC0BKQCbA/BfAaQCOAoCDABQCEAAEMgiQFDgqBrgHQDqgRCHAjQCmArA0B8QADBjg4BiQgyBXhXBGQivCMj+AeQhEAJhGAAQiiAAitgsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-459.3,-59.8,918.6,119.6);


(lib.mousehead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAhQgOgOAAgTQAAgSAOgOQAOgOASAAQAUAAANAOQAOAOAAASQAAATgOAOQgNAOgUAAQgSAAgOgOg");
	this.shape.setTransform(38.9,48.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghAhQgNgOAAgTQAAgSANgOQAOgOATAAQATAAAPAOQANAOAAASQAAATgNAOQgPAOgTAAQgTAAgOgOg");
	this.shape_1.setTransform(34.1,-47);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#503514").ss(2).p("AD/i4QjhBci4COQBFgpBRgMQhtBHhdBaQBJgjBLgTIgVAT");
	this.shape_2.setTransform(-74.9,88.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DCC1AA").s().p("AgcAIQhRAOhFApQC4iNDhhdIk6EhQhLAThIAjQBdhbBthJg");
	this.shape_3.setTransform(-72.5,86.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#503514").ss(2).p("AHHiiQheByh8BeQh8BgiNBGIBShYQhwBHiEAqQiDAriFAIQgDgOAggNQAngQAHgMQAFgKgFgMQgCgEgKgQQgYgkAKgxQAJgtAigrQAdgjAwglQAkgbA5gjQCXhcCdhLQALgFAJAAQALAAAAAH");
	this.shape_4.setTransform(-84,93.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DCC1AA").s().p("AmpEFQAngQAHgMQAFgKgFgMIgMgUQgYgjAKgyQAJgtAigrQAdgjAwglQAkgbA5giQCXhcCdhMQALgFAJAAQALABAAAGIE0B3QheByh8BeQh8BgiNBGIBShYQhwBIiEApQiDAriFAJQgDgOAggOg");
	this.shape_5.setTransform(-84,93.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#503514").ss(2).p("ADNBNQgBAEAGgBQAGgCgCgEQgCgGgOgBIjvgUIAphBQgzAOg5gLQg5gKgrggQAbgXAnAB");
	this.shape_6.setTransform(-88.3,-98);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DCC1AA").s().p("ADKBNIgagLIATABQAOABACAGQACAEgGACIgDAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBgAgsAvIAog+IC0BRgAhvgPQg5gKgrggQAbgXAnABICKA/QgbAGgcAAQgYAAgZgFgAgEgPIgDgBIAFgCIgCADgAgHgQg");
	this.shape_7.setTransform(-88,-98);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#503514").ss(2).p("AG9D3QhMAShkAAQg/gBh3gKQg0gFgcgGQgpgLgbgVQANgzArghQjdgmjChjQBngKBegdQhDgXgjg8Qgkg8ATg5QArAPA9gTQA8gTArAOQAhAMBNAOQBAANAtAGQBwAOCMCH");
	this.shape_8.setTransform(-104.1,-95.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DCC1AA").s().p("AEBEJQg/gBh3gKQg0gFgagGQgrgLgbgVQANgzArghQjdgmjChjQBngKBegdQhDgXgjg8Qgkg8ATg5QArAPA9gTQA8gTArAOQAhAMBNAOQBAANAtAGQBwAOCMCHIBtE3QhKAShhAAIgFAAg");
	this.shape_9.setTransform(-102.9,-95.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DCC1AA").s().p("AhFD3QgpgEgfgSQgfgTgDgXQgtliAtgoQAigfBBgFQBGgFANApQAYBBBVAoQAqAUANAJQAYATADAcQAGAxg4A5QhIBJgNAiQgbBBhQAAIgZgBg");
	this.shape_10.setTransform(282.7,-15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18181A").s().p("AjqCHQgcgxAwhMQAxhIBhg5QBfg4BZgFQBagEAcAyQAdAygxBLQgwBJhhA4QhfA4haAEIgOABQhNAAgbgug");
	this.shape_11.setTransform(54.6,48.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18181A").s().p("Ag5B9Qhmgvg3hHQg3hEAZg0QAYg0BZgEQBagDBjAwQBmAvA3BHQA3BEgZA0QgYA0hZAEIgLAAQhVAAhdgtg");
	this.shape_12.setTransform(49,-47);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#745532").s().p("Ai1SiQgVgcADggQAHgpABgUQADgkgPgWQgWgfg1A4QhKBNgZAJQiJA1iCgQIhagLQgwgDgqAQQgGgxARgwQASgwAlgmQhdAxhzAbQhoAZhZgBQhYgBgggaQgkgbAugvQAhghgygIQgngGh9AHQmYAWixgKQuSg2gYq2QgOmkDsj4QC9jGFRhQQDvg4EdAIQCKADBKANQgVgEgkgsQgpgzgMgHQgagPgLgYQgMgaALgWQALgVAfgNQAVgKAmgHQB1gVDAA1QB5AhAgAHQBYATBIgBIi6g5QgZgHgPgNQgTgQAJgPQAIgOAhgFQEpgyExgHIhkhHQgUgJhrgHQC8gREMBFQBGASCDAkQBrAcBGAFQBLAGBgBaQBEBABsCLQCOC2AfAkQBgBuBDAhQBGAjBbAYQBFATBlASQF7BFGFABQGGABF6hDIBkABQBrADApARQAgAOAXAmQAXAogBAsQgFBxiiAbQiPAWlcAbQoTAogvAFQlbAfkIBuQljCShgD8QgxCAiGCPQicClioA+QAUgOgCgZQgBgYgTgRQgQgPgbgKQgQgGgigJQg6BuhpBPQgVAQgRADIgKABQgaAAgTgYg");
	this.shape_13.setTransform(-5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.5,-123.3,605.2,249.3);


(lib.mouseFrontLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AilB1QBGgcAtgXQA7gfAvgkQBXhEAXhNQgUBLgpBBQgsBDg7AtQgrAigoAGIgRABQgmAAgdgeg");
	this.shape.setTransform(115.4,-19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AiJDTQBEg+AsgwQA2g9Aog7QBJhvgHhVQAJBSgVBTQgWBVgyBKQgmA3gpAcQgmAYgmAAQgQAAgRgFg");
	this.shape_1.setTransform(115.7,-86.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiUB0QAEg0Ahg7QAthNBEg7QBEg5BQggQhSAihEB1QgjA/geBNQgXA9gZBZQgpgpAGhAg");
	this.shape_2.setTransform(103.8,-118.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhaCfQgKgzAOhCQAUhXAyhNQAthJBCg0QhCA3gdCCQgRBEgGBWQgEA+ACBeQgzgbgOg+g");
	this.shape_3.setTransform(47.7,-105.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DDCEAA").s().p("AwbRyQhGhKgwhmQgqhbgLhSQgxmNDilNQBxikB7hXIAdgaQAlgfAogbQCBhWB0gQQBrgOEEAVQEHAVAUgCQAygFA7hJIBpiTQArg7gCh5IgEhfQgBg2AFgeQAGglAVgdQAUgcAZgLQAagLATAOQAWAPAHArQAGAngPBCQgEAQgcBmQgSBDgBAfQAAArAdAIQAyANBCjDIAwiUQAZhMAOgTQByicAGgGQBdhuAgAoQAvA7AIBHQAKBXhDA0QhaBHhfB3QhwCNAABLQAAAlAogjQAbgXBFhQQChi6AqgFQBJgJAwAhQAzAlgpA5QgcAni2BfQiqBagKAkQgQA4APA7QAQA/AqAKQAdAHA9AwQA/AiBHgxQAqgcArAUQAnASAVAtQAWAsgMAkQgOApg2AFQh0AMjWgnQjXgnhJguQg4gkjXAxQh1Acg3AMQhfAVgwABQhvAChiAnQhrAsg/BMQiaDCCmFBQAaAyANBhQAPBvgOBoQgoEbjiBFQg/ATg7AAQigAAiDiLg");
	this.shape_4.setTransform(-8.7,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.9,-141,264,282.1);


(lib.mouseBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#745532").s().p("A/VbfQiZgki0hGQiBgzjEhaQlLiZi3iJQkKjIh3kKQhijZgRkuQgMjaAflKQATjKAXh7QAhiwA5iDQBNixEoi/QBlhBCThOIDVhxQEjifEbg3QEsg7EpA7QGgBRGMCkIEtB8QCsBDClApQDkA5DFAAQCdABC7gmQBugWDsg6QDjgyDOgUQEmgcEMA0QDgAsD+BwQAWAKDXBEQDUBDCRBBQHeDWBOE2QBYFdnJFJQieBykFCLQkdCSh0BAQkFCPkABHQi+A1juAYQkAATh6APQjQAaigA+QjSBTm2DbQmFDDkGBZQmOCIlZAnQiPAQiJAAQj2AAjgg0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-368.2,-181.2,736.4,362.4);


(lib.mouseBackLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AkRBxQBBgJCGgtQB7gqBHgfQBvgzArhOQgpBNg8A7Qg/A8hLAhQhKAihYARQgnAHgdAAQg8AAgSgfg");
	this.shape.setTransform(139.2,-5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ai+CuQA5ghAQgUQAigtAbgZQAdgcBwhSQBjhQAHgvQgMBkgVAwQgZA7hEA+Qg7A2g9AcQguAWglAAQgdAAgXgNg");
	this.shape_1.setTransform(161.5,-51.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AjDBRQARg2Ayg0QBDhIBYguQBWgsBcgNQheAQhmBqQg1A6gzBKQgnA6gyBZQghg2AWhCg");
	this.shape_2.setTransform(146.3,-88.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AiXCKQABg4AghDQArhXBJhGQBEhDBWgoQhYArhACEQgkBHgbBWQgUBCgWBlQgwgqAChGg");
	this.shape_3.setTransform(96.6,-89.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DDCEAA").s().p("AsYPuQh/gKhZgeQhTgbhuhDIkKiqQiehmghiCQgchyBEh8QA7htB3hgQBthXBzgtQDWhTGGhgQF/hfDlgbIGQgwQEEgnBBg5QBIg/Alg1QAfgsAihRQAQglAegaQAcgZAegFQAegGARAUQATAVgEAvQgGBTAvgqQAbgYBDhKQCDhwAHgEQBehCAYAzQAjBLgJBMQgLBfhUAmQhTAmBFApQA6AjBeAKQBRAJApAvQAuA0g6AyQgoAiiYAbQiMAYgTAjQgiA+AXAlQAaAtBjgmQAzgUAoAZQAkAWAMAuQALAugWAnQgYApg6ANQhxAai3gIQh4gGjbgZQjsgahRgFQiegKhKAWQhNAUgQCqQgDAcgHCLQgGBxgLBIQghDfhuBzQiTCYkuAAQjqAAhqgIg");
	this.shape_4.setTransform(-13.8,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.6,-114.5,361.2,229.1);


(lib.grass02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#75784C").s().p("AAKBWIgMAAQgDAAAAgGQgDABgEgEQgFgFgDAAIABgRIgCgKIgDgtIABgDIgBgBIAAgBIACgHIgCgCIACgNIADgIIgCAAIACgEQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgCAAIACgfQADgDABgEIACgCIAAgBIABgBIABAEIAAACQAAAAAAgBQABgBAAAAQABgBAAAAQABAAAAABQADABABAEIAAgDQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABgCIABAGQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIAAAFIADgCIADgBIAEgEQADgBACAEQABACAAAGIADgEIAFAKQADAMgDAPIAAABIgHApQgEAfABAEQgDAQABAPIABAKIABADIgCACQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgBgBg");
	this.shape.setTransform(25.4,71.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#75784C").s().p("AAqAaIgCAAIgogMQgagHgHABQgPgDgPABQgJAAgUAEQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAFAAACgCQAIgEAAgJQAAgCAHAAQgBgDAEgEQAFgFAAgDIAIABIAIAAIALgCQAWgCAZACIADACIABgBIABAAIAIACIAAgBIAPADIAHAEIAAgBIAEACQABAAAAAAQABABABAAQAAAAAAAAQABAAAAAAIABgCIAhAIQABAAAGAEIACADIgDAAIADAAIABABIgEAAIADABIgGgBQAIADgMABIADABQgBACgGgDQAAAAAAABQABAAAAAAQAAAAABAAQABABAAAAQABAAABAAQABAAAAAAQABAAAAABQAAAAAAAAIgGAAQAAABAAAAQAAAAAAAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIgFgBQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIABADIADAGQAAACgEABQgBABgHgBIAEADIgLAEIgGAAQgJAAgLgDgABggBIgBAAIABAAg");
	this.shape_1.setTransform(15.4,57);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#75784C").s().p("AiKA5IAAgCIAAgEIgBACIAAgFIAAgBIAAABIgBAAIAAACIAAADIAAABIgBAAIAAgBIAAAAIgDgBQAAgCAEgDQgBAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBIAFgBQAAgBAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQgFADgBgBIAIgFQAAAAAAAAQgBgBAAAAQAAAAgBABQgBAAAAABIgEACIAGgEQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgHgBQgDgBAGgGQABgCAKgEIgHAAIAMgLQANgKAWgFIACAAIA/gVIA3gRIA5gMIAegCIARAAIAUAEQgBAAAAAAQAAABAAAAQABABABAAQAAABACABIADADIgBABQgPgHgHAAQgRACgDALQAAABgNABQACADgHAFQgHAFABADQgSABgGACIgPAGQgaAKgkAPIgGABIAAABIgCABIgMADIAAACIgVAIIgMABIAAACQgCACgFAAIgHABIABADIgbAKQgQAFgHAFIgEABQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_2.setTransform(46.7,56.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#75784C").s().p("AATBqQAAAGgCgBQgCgBgDgFQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgEQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQABABAAABQAAABAAAAQAAABAAAAQAAAAgBAAQgCgEAAgCQgBAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIABAEIgCgGQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgBAFQgCACgDgEQgCgBgCgIIgBAFIgIgKIgFgOIgCgQIAAgCQAAglABgPQAGgmAAgFQANg3AJgbQAAAAAAAAQABABAAAAQAAAAABgBQAAAAABgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABABgEAJQgBANAJAEQACABgEAIQAEAAACAGQACAHADABIgGARIABAMQgBAXABAaIgBADIABABIABACQgCAFABADIABAAIAAAQIgCAIIACAAIgBAFQAAABAAABQAAAAAAABQgBAAABABQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAEAcIACAJIgBAJIgCADIgBgDIABAEIgBABIgBgEIABAEIgDgIg");
	this.shape_3.setTransform(27,46.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#75784C").s().p("ABkCtQgCgBgJgNIADAKIgRgQIgQgWIgPgaIgBgCIgrhXQgZg3gMgRQgshPg1giQABAAAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBQgBgBAAgBQAAAAAAgBQgBAAABAAQAAgBAAABQADAAANALIALAEIAHACQAHABADgCQABgBAFAEIAHAJQABgFAKAGQAMAGABgCIAVAeIAQARQAYAkAfA1IADAHIACAAIABACIAIAQQAAAAAAAAQAAABAAAAQAAAAABgBQAAAAAAAAIAQAeIAGARIABAAIAEAJIAEAKIACABIABgBIAfA1IAMAQIAHAQIACAFIgEgFIAEAGIAAACIgGgHIgEgFQAJAQgTgSQAEAEgBAAQgCABgDgFIgEgHQgBABAEAGIAFAHQgIgHgCgEQAAAAgBAAQAAAAABABQAAAAAAABQABABABACIAEAFIgHgJQABADgBACQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIACAJIgCABQgBAAgGgFg");
	this.shape_4.setTransform(13.8,35.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#75784C").s().p("AiZDrIAFgGQgOANANgVQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgCAGgFIAGgIQAAgBgGAIQgHAIgBAAIALgPQAAgDgFAHIgFAGIAJgMQgEADgBgBQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgJAEQgDAAAGgLQABgDALgOIgJAHIAMgXQAOgZAXggIACgDQASgYAzhKQAvhGAKgQQAkgzAaghIAhgoQAXgZAQgOQAAAAAAABQAAAAABAAQAAAAABgBQABAAABgBQACAAABgBQABAAAAAAQABAAAAAAQAAAAAAABQgPAMgHAHQgSAYAFAKQABACgPAQQAEgBgFAOQgGAOADABIgcAjIgOAZIhDBtIgEAIIAAACIgCADIgNASQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIgYAkIgOARIAAABIgIALQgGAGgCAEQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIABABQgnA3gbAhQgDADgNAKIgGADIADgDIgEAEIgCAAg");
	this.shape_5.setTransform(43.9,29.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#494231").s().p("AAuBsQACgHAAgFQgDgMgKgCQgBAAAAgJQgDABgEgFQgFgGgDAAIgBgRIgFgLQgJgZgKgTIgBgDIgCgBIAAgBIgDgIIgBAAIgHgNIgCgJIgBABIgCgFQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAIgCAAIgUgeIgDgIIAAgEIACACIgCgCIAAgCIADADIgDgDIAGAGQgDgFADAAQACgBAFAEIgCgDQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABABIACADQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBgBAAIgCgEIAFAEQABAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgCgDIAEAEQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIABgDIAAgHQACgCAEADIAIAGIgCgGIAMAHQAGAEACAHQAFAGAEAHIABACQAMAWAJAZQAHAUAHAWQAKA3gEAjQAAAAgBAAQAAgBAAABQAAAAgBAAQAAABgBAAIgCACIgBgBg");
	this.shape_6.setTransform(32,80);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#494231").s().p("AhUA/QAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAEgFQACgMgGgGQgCgCAGgHQgDgBAAgHQABgHgCgCQAKgJADgDIAHgMQAXgdAYgNIAGgBIABgBIACgBIALgBIABgCQAPgBAMAFIAMAJIACgBQADACADAEIAFAGQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQALANAFANIAJAYQAAACgCAIIgCADIgBgDIAAAEIAAABIgBgFIAAAFIgBgJQgBAGgCgBIgEgFIAAABQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIAAgFQgBAAAAAAQAAABAAAAQAAABAAAAQAAABABABQAAAFgBAAIgCgHQgBgBAAABQAAAAAAAAQAAAAAAABQAAABAAABQABAAAAABQAAABAAAAQAAABAAAAQAAAAAAAAIgCgGQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABIgDABIgDAFQgDACgDgFIgDgHIgBAFIgIgIIgNgQIgBAAQgKgMgOAFQgIADgKAHQgIAFgDADQgWASgbAqQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABIgCAAIgBAAg");
	this.shape_7.setTransform(21.8,71.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#494231").s().p("AjMEkIAAgBIAAgCIABAAIAAgCQAAgFgDgFIgCgDIgBgBIgBAAIgBgBIADgGIAAgBIgBAAIgBABIAAAAIAAAAIAAAAIgDAAIgGACIAAAAIABAAIAGACIAAABIABABIgCAFIgBgCIAAAAQgFgEgHACIgCAAIgCACIADgDIABAAIAAgBIABAAIABgBIADgCIABAAIgCgBIgEADIAAgBIAAgBIABgBIACgJQABgFAKgVIgIAMIAFgRIAHgQIAXgnQAJgPATgYIADgEQApg2A7hDIBahmQB+iGA7g8QgCADAHgEQAGgFgBADQgRAQgHAJQgYAdADALQABACgVAVQAFgCgJAQQgKARADABIgpAqIgYAdQg1BAgzBBIgJAKIAAACIgDAEIgUAVQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIg2BAIAAACQgDAFgIAIQgHAIgDAFIgBACIACABIgVAbIglA4IgQAfIgKAQgAjZEJIgBABIAFgCIADABIAAAAIABAAIABAAIADgGQAAgEgEAKIgBAAIAEgIQgDAFgCgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABIgCACIACgBIgCABgAjVEeIgBgFIAAAAIgCgCQgDgCgDAAIgEAAIgBABIgBAAIAAAAQAAgBABAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgBAAIAAAAIABAAQAAgBAAAAQAAAAABAAQAAAAABgBQAAAAABAAIABAAIAEAAQAEAAADADIABABIAAgBIABAAIABACIAAAAIABABIgDAHg");
	this.shape_8.setTransform(45.9,42.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#494231").s().p("ACYCMIAAAEIgBgLQgBAKgCgEIgGgPIABAIQgBgBgBgGIgBgIQgBAAACAHQABAIgBABQgDgJAAgFQgCgCABAHQACAHgBAAIgCgMQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIgDAJQgCACgEgJIgFgQIAAAJIghhEQgRgmggglQgPgTgTgRQgOgOgIgFQgfgZghgMQgjgOgeAGQAAAAAAAAQAAAAAAgBQAAAAgBAAQgBAAgBAAQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAHgCIAKgBIAKgDIAHgDQAFgEACgDQABgDAQAFQgCgEAMAAQANgBAAgCQALADAXANIAWAKQAsAaAoAnIAFAHIACABIACACIALAPQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQALANAKARIAIAPIACAAQACAEACAGIAFALIABAAIABgBQAVAtAIAsQABAEgCAOIgCAFIgBgGIABAHIgBABg");
	this.shape_9.setTransform(16,50.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#555B3A").s().p("ACPBmQABgNgBgHQgEgLgFgFQgFgEgEAAQgCgBgDgOQgCADgIgHQgHgHgCACQgJgTgEgGQgFgEgKgHQgdgXgngOIgFgDIAAABIgCAAIgMgGIgBABIgZgGIgMgFIgBABIgIgCQgEgCgDAAIgBADQgkgFgXAHIgFAAIgHAAIgEAAIAEgCIgFACIgBAAIAFgEIgGAEIAAgBIAGgDIAFgBQgGAAAAgCQACgDAHgDIgEABQgBgCAFgBIAGgBQAAgBgGACIgHABQAIgEADAAQAAgBAAAAQAAAAAAAAQgBAAgBAAQgBAAgBABIgGABIAJgDQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgIgDQgCgCAIgEQACgDAMgCIgIgBQAJgFAJgDQAVgGAdAEIACAAQAsAGAjASQAhAOAgAZQAfAcARAfQARAjAAAoQAAgBgBAAQAAAAAAAAQAAABgBAAQAAABgBABIgCADIAAAAg");
	this.shape_10.setTransform(42.3,75.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#555B3A").s().p("AjPC6IgEADIALgJQgKAHACgFQACgEAKgLQgGAHAAgCQgBgBAGgEIAHgHQAAgBgHAGQgHAHgCAAIANgNQAAgDgFAGIgGAGIAKgKQgEACgBgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAABIgKADQgDAAAHgKIAOgQIgKAGIAOgWQAQgUAcgeIBShYQAggjAngqQAsgpAmgYQAdgSAWgIIAPgDIARgBQAVAAAOAGQgEgBAHAGIAEADQABAAAAABQAAAAAAAAQAAAAgBAAQAAAAgBgBIgNgFQgPgFgGAAIgKABIgIADQgGACgEADQgGAFgBAEQAAACgHADIgOAGQABAAAAAAQABABAAAAQAAABgBAAQAAABgBABIgGAHQgKALACACQgYAOgMAKQgFAEgOAQQgdAeg0A+IgHAIQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgCAEIgQAPIABACIgbAfIgRAQIABABQgDAEgGAFIgKAJQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIABAAQgqAvghAfQgBACgRAKIgGACIAFgEIgGAEIgCAAg");
	this.shape_11.setTransform(52.5,47.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#555B3A").s().p("Ah7A9QAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAHgFADgEQAHgMgFgIQgBgCAJgGQgDgCADgHQADgIgCgCIATgLIALgKQAegYAfgLIAGgBIABgBIACgBIAKgCQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIAMgCIANAAIAMACIABgBIAHABIAIACQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAUAEAKAEQAGACAIAEIAOAGIAIAJIABADIgDgBIADACIABACIgFgDIgEgCQAFAEgDABQgDABgHgDIAEADQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBIgFgDQAAABAAAAQAAAAABABQAAAAABABQABAAABABQAEACAAABIgIgDQgBAAAAAAQAAABABAAQAAAAABABQAAAAABAAIAEACIgHgDQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIgBAEIACAGQAAADgGgBIgKgDIAEAEIgMAAIgPgCIgQgDIgBAAQgagFgZAHQgOADgOAGQgMADgDADIgVALIgTAOIgSAPIgSAQQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAg");
	this.shape_12.setTransform(13,60.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#555B3A").s().p("AADEfIAGgUQgJAWAEgjIgCAJQgBgBACgHIACgKQgBAAgCAIQgBAKgBABQAAgMABgGQAAgCgBAIIAAAIIAAgPQAAAFgCgBQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABIgGAIQgCACgBgMIACgUIgEAKIgCgZIgChCIAAgDQACgegEhWIgDhmQABg/AEgnQAEgbAGgZQAKgiALgUQAAABAAAAQAAABABgBQAAAAABgBQABAAABgCQABgBABgBQABAAABgBQAAAAABAAQAAABgBAAIgHALIgIAQQgGAdAHAHIgBAJIgCAOQAEgDABAOQACAPADgBQgFAeABANIACAcQABAjAJBYIgBAKIACABIAAAEIAAAWQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAIACApIgCAWIACABIgBANIgBANIACACIABgBQgBBEgGApIgIAVIgEAFIACgHIgDAIIgCABIADgKIgDALg");
	this.shape_13.setTransform(30.9,28.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#555B3A").s().p("AAqFXIAAAGIAAgRQgCAPgCgGQgCgFgBgTIAAALQgCgBABgJIABgMQgBgBAAAMQgBAMgBABIAAgWQgCgDABAKIgBALIAAgTQgBAGgCAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAgBABIgFAMQgCACgCgPQgBgEAAgWIgCANIgFggQgEghgBg0IAAgEQAAg3gFhcQgHhigGgeQgKhlgYiVQABABAAAAQAAAAABAAQAAgBAAgBQAAgBAAgCQABgIABADIACANIADATQAJAiAKAEQADABADAbQACgEAHAQQAGASABgCIAGA3IAIAjQALBFANBZIAAANIABABIABAFIABAcQABAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIAEA1IgCAcIACABIAAAQIAAARIABACIABgBQACA/gBBIQAAAGgEAUIgDAIIAAgJIAAAKIgBACg");
	this.shape_14.setTransform(21.6,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,74.1,90.9);


(lib.Steg_mc_walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// steg_skull
	this.instance = new lib.steg_skull();
	this.instance.parent = this;
	this.instance.setTransform(-250.5,8.1,1,1,0,0,0,14.3,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:6.5,x:-265.9,y:15.7},0).wait(1).to({rotation:13,x:-266.9,y:14.1},0).wait(1).to({rotation:19.6,x:-267.6,y:12.4},0).wait(1).to({rotation:12.7,x:-267.5,y:14},0).wait(1).to({rotation:5.8,x:-267.2,y:15.5},0).wait(1).to({rotation:-1,x:-266.6,y:16.8},0).wait(1).to({rotation:-1.1,x:-266.3,y:17.2},0).wait(1).to({x:-265.9,y:17.5},0).wait(1).to({rotation:-1.2,x:-265.6,y:17.8},0).wait(1).to({rotation:5.9,x:-267.3,y:16.5},0).wait(1).to({rotation:13.1,x:-268.9,y:15.2},0).wait(1).to({rotation:20.2,x:-270.1,y:13.7},0).wait(1).to({rotation:13.5,x:-268.6,y:14.9},0).wait(1).to({rotation:6.7,x:-266.8,y:16},0).wait(1));

	// steg_front-leg_top
	this.instance_1 = new lib.steg_frontleg_top();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-123,-12,1,1,0,0,0,16,-40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,skewX:-4.1,skewY:-4.6,x:-138.6,y:29.5},0).wait(1).to({skewX:-8.3,skewY:-9.2,x:-138.1,y:30.1},0).wait(1).to({scaleY:1,skewX:-12.4,skewY:-13.8,x:-137.6,y:30.6},0).wait(1).to({skewX:-16.5,skewY:-18.4,x:-134.8,y:30.4},0).wait(1).to({skewX:-20.7,skewY:-22.9,x:-132,y:30},0).wait(1).to({skewX:-24.8,skewY:-27.5,x:-129.2,y:29.3},0).wait(1).to({scaleX:1,skewX:-10.7,skewY:-13.9,x:-137,y:28.8},0).wait(1).to({scaleY:1,skewX:3.4,skewY:-0.2,x:-144.4,y:25.7},0).wait(1).to({skewX:17.5,skewY:13.4,x:-150.8,y:20.1},0).wait(1).to({skewX:21.9,skewY:18.4,x:-153.5,y:24.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:26.2,skewY:23.4,x:-155.9,y:27.9},0).wait(1).to({skewX:30.5,skewY:28.4,x:-158.2,y:31.5},0).wait(1).to({skewX:21,skewY:19.6,x:-153,y:31.3},0).wait(1).to({scaleY:1,skewX:11.5,skewY:10.8,x:-147,y:30.1},0).wait(1));

	// steg_back-leg_L_btm
	this.instance_2 = new lib.steg_backleg_L_btm();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21,65,1,1,0,0,0,-15.7,-25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,rotation:-5,x:-10.9,y:89},0).wait(1).to({rotation:-10,x:-16.6,y:87.4},0).wait(1).to({rotation:-15,x:-22.5,y:85.7},0).wait(1).to({rotation:-3.6,x:-35.2,y:85.9},0).wait(1).to({rotation:7.8,x:-48.7,y:85.2},0).wait(1).to({rotation:19.1,x:-62.6,y:83.3},0).wait(1).to({rotation:24.1,x:-60,y:85.8},0).wait(1).to({rotation:29.1,x:-57.5,y:88},0).wait(1).to({rotation:34,x:-55,y:90},0).wait(1).to({rotation:29,x:-43.1,y:91.3},0).wait(1).to({rotation:24,x:-31.3,y:92.5},0).wait(1).to({rotation:19,x:-19.5,y:93.4},0).wait(1).to({rotation:13.5,x:-15.1,y:92.8},0).wait(1).to({rotation:8,x:-10.7,y:92},0).wait(1));

	// steg_back-leg_L_top
	this.instance_3 = new lib.steg_backleg_L_top();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-26,-22,1,1,0,0,0,-1.8,-40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,rotation:5,x:-27.7,y:18.7},0).wait(1).to({rotation:10,x:-31.2,y:18.8},0).wait(1).to({rotation:15,x:-34.7,y:18.5},0).wait(1).to({rotation:20.5,x:-38.5,y:17.9},0).wait(1).to({rotation:26.1,x:-42.1,y:16.8},0).wait(1).to({rotation:31.6,x:-45.6,y:15.5},0).wait(1).to({rotation:28.3,x:-43.6,y:16.9},0).wait(1).to({rotation:25.1,x:-41.5,y:18.2},0).wait(1).to({rotation:21.8,x:-39.3,y:19.4},0).wait(1).to({rotation:15.6,x:-35.1,y:20.3},0).wait(1).to({rotation:9.4,x:-30.8,y:20.8},0).wait(1).to({rotation:3.2,x:-26.4},0).wait(1).to({rotation:2.1,x:-25.7,y:20},0).wait(1).to({rotation:1.1,x:-24.9,y:19.2},0).wait(1));

	// steg_hip
	this.instance_4 = new lib.steg_hip();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-26.9,-21,1,1,0,0,0,4.8,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0,regY:0,x:-33.1,y:-5.7},0).wait(1).to({x:-34.4,y:-6.2},0).wait(1).to({x:-35.7,y:-6.6},0).wait(1).to({rotation:2.2,x:-34.4,y:-6.8},0).wait(1).to({rotation:4.5,x:-33,y:-7.1},0).wait(1).to({rotation:6.7,x:-31.6,y:-7.3},0).wait(1).to({rotation:5.4,x:-31.4,y:-6.2},0).wait(1).to({rotation:4.1,x:-31.3,y:-5},0).wait(1).to({rotation:2.8,x:-31.1,y:-3.9},0).wait(1).to({rotation:1.4,x:-30.7,y:-2.1},0).wait(1).to({rotation:0.1,x:-30.3,y:-0.3},0).wait(1).to({rotation:-1.2,x:-30,y:1.4},0).wait(1).to({rotation:-0.8,x:-30.6,y:-0.8},0).wait(1).to({rotation:-0.4,x:-31.2,y:-3},0).wait(1));

	// steg_ribs
	this.instance_5 = new lib.steg_ribs();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-36.4,-40.5,1,1,0,0,0,72.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0,regY:0,rotation:-1.4,x:-108.9,y:-21.2},0).wait(1).to({rotation:-2.8,x:-108.8,y:-18.5},0).wait(1).to({rotation:-4.2,x:-108.6,y:-15.7},0).wait(1).to({x:-108.3,y:-18.7},0).wait(1).to({rotation:-4.3,x:-108,y:-21.6},0).wait(1).to({x:-107.8,y:-24.6},0).wait(1).to({x:-107.9,y:-22.9},0).wait(1).to({rotation:-4.4,x:-108,y:-21.3},0).wait(1).to({x:-108.1,y:-19.7},0).wait(1).to({x:-108.3,y:-18.1},0).wait(1).to({x:-108.4,y:-16.5},0).wait(1).to({rotation:-4.5,x:-108.5,y:-14.8},0).wait(1).to({rotation:-3,x:-108.7,y:-17.8},0).wait(1).to({rotation:-1.5,x:-108.9,y:-20.8},0).wait(1));

	// steg_neck
	this.instance_6 = new lib.steg_neck();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-167,14.1,1,1,0,0,0,28.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,regY:-0.6,rotation:1.4,x:-195.2,y:14.6},0).wait(1).to({rotation:2.8,x:-195.1,y:16.2},0).wait(1).to({rotation:4.2,y:17.9},0).wait(1).to({rotation:2.6,x:-195.2,y:16.5},0).wait(1).to({rotation:0.9,y:15.2},0).wait(1).to({rotation:-0.7,x:-195.3,y:13.9},0).wait(1).to({rotation:-2.4,x:-195.2,y:13.5},0).wait(1).to({rotation:-4,x:-195.3,y:13.1},0).wait(1).to({rotation:-5.6,x:-195.2,y:12.6},0).wait(1).to({rotation:-2.8,x:-196.1,y:15.5},0).wait(1).to({rotation:0.1,x:-196.9,y:18.3},0).wait(1).to({rotation:2.9,x:-197.6,y:21.1},0).wait(1).to({rotation:1.9,x:-196.9,y:18.6},0).wait(1).to({rotation:1,x:-196.1,y:16},0).wait(1));

	// steg_Front-leg_L_btm
	this.instance_7 = new lib.steg_Frontleg_L_btm();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-120,77,1,1,0,0,0,1.4,-21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,scaleY:1,skewX:3.8,skewY:5,x:-118.8,y:97.8},0).wait(1).to({skewX:7.6,skewY:10,x:-116,y:97.5},0).wait(1).to({scaleY:1,skewX:11.4,skewY:15,x:-113.3,y:97.1},0).wait(1).to({skewX:16.4,skewY:20,x:-109,y:91.8},0).wait(1).to({scaleY:1,skewX:21.4,skewY:25,x:-104.7,y:86.3},0).wait(1).to({skewX:26.5,skewY:30,x:-100.3,y:80.6},0).wait(1).to({skewX:29.9,skewY:33.1,x:-121.7,y:83.4},0).wait(1).to({skewX:33.4,skewY:36.1,x:-143.1,y:86.1},0).wait(1).to({skewX:36.8,skewY:39.2,x:-164.5,y:88.7},0).wait(1).to({skewX:32.2,skewY:34.2,x:-168.5,y:93.4},0).wait(1).to({skewX:27.6,skewY:29.2,x:-172.4,y:97.9},0).wait(1).to({scaleY:1,skewX:23,skewY:24.2,x:-176.2,y:102.4},0).wait(1).to({skewX:17.8,skewY:18.6,x:-160.3,y:101},0).wait(1).to({skewX:12.7,skewY:13.1,x:-144.3,y:99.4},0).wait(1));

	// steg_front-leg_R_top
	this.instance_8 = new lib.steg_frontleg_R_top();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-141.5,4,1,1,0,0,0,-5.8,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,regY:0,rotation:9.9,x:-142.4,y:31.8},0).wait(1).to({rotation:19.9,x:-149.1,y:37.4},0).wait(1).to({rotation:29.8,x:-155.8,y:42.3},0).wait(1).to({rotation:19.8,x:-151.4,y:36.5},0).wait(1).to({rotation:9.8,x:-147,y:29.9},0).wait(1).to({rotation:-0.2,x:-142.6,y:22.7},0).wait(1).to({rotation:0.6,x:-134.3,y:22.9},0).wait(1).to({rotation:1.4,x:-126,y:23.1},0).wait(1).to({rotation:2.2,x:-117.7,y:23.3},0).wait(1).to({rotation:-5.6,x:-122.7,y:22.7},0).wait(1).to({rotation:-13.4,x:-127.9,y:21.7},0).wait(1).to({rotation:-21.3,x:-133.2,y:20.4},0).wait(1).to({rotation:-12.7,x:-134.4,y:22.7},0).wait(1).to({rotation:-4.2,x:-135.8,y:24.5},0).wait(1));

	// steg_front-leg_R_btm
	this.instance_9 = new lib.steg_frontleg_R_btm();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-139,77,1,1,0,0,0,20.6,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:0,regY:0,skewX:0.8,skewY:0.1,x:-172.1,y:97.8},0).wait(1).to({scaleX:1,scaleY:1,skewX:1.6,x:-184.5,y:100.3},0).wait(1).to({skewX:2.3,skewY:0.2,x:-197,y:102.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-9.9,skewY:-12.8,x:-180.3,y:102.2},0).wait(1).to({skewX:-22.2,skewY:-25.8,x:-162.7,y:100.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:-34.5,skewY:-38.8,x:-144.5,y:97.7},0).wait(1).to({scaleY:1,skewX:-39.5,skewY:-41.8,x:-135.9,y:97.4},0).wait(1).to({scaleX:1,skewX:-44.5,skewY:-44.9,x:-127.2,y:96.9},0).wait(1).to({scaleY:1,skewX:-49.5,skewY:-48,x:-118.7,y:96.2},0).wait(1).to({scaleX:1,skewX:-45.2,skewY:-43.9,x:-118.9,y:93},0).wait(1).to({skewX:-40.9,skewY:-39.9,x:-119.2,y:89.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-36.6,skewY:-35.9,x:-119.4,y:86.2},0).wait(1).to({scaleX:1,skewX:-31.5,skewY:-31,x:-131.8,y:93.2},0).wait(1).to({skewX:-26.4,skewY:-26.1,x:-144.1,y:100},0).wait(1));

	// Steg_back-leg_R_top
	this.instance_10 = new lib.Steg_backleg_R_top();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-26,-20,1,1,0,0,0,21.7,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:0,regY:0,rotation:-3.7,x:-49,y:14.2},0).wait(1).to({rotation:-7.3,x:-50.3,y:17.4},0).wait(1).to({rotation:-11,x:-51.4,y:20.5},0).wait(1).to({rotation:-24.6,x:-39.9,y:23.5},0).wait(1).to({rotation:-38.2,x:-28.1,y:24.4},0).wait(1).to({rotation:-51.8,x:-16.3,y:23.2},0).wait(1).to({rotation:-55.2,x:-11.2,y:22.8},0).wait(1).to({rotation:-58.6,x:-6.2,y:22.3},0).wait(1).to({rotation:-62,x:-1.2,y:21.6},0).wait(1).to({rotation:-44.5,x:-12.8,y:20.4},0).wait(1).to({rotation:-26.9,x:-25,y:15.7},0).wait(1).to({rotation:-9.4,x:-36.7,y:7.5},0).wait(1).to({rotation:-7,x:-40,y:9},0).wait(1).to({rotation:-4.6,x:-43.3,y:10.4},0).wait(1));

	// Steg_back-leg_btm
	this.instance_11 = new lib.Steg_backleg_btm();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-70,50,1,1,0,0,0,-6.4,-35.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:-1,regY:-0.9,rotation:5,x:-67.7,y:88},0).wait(1).to({rotation:10,x:-71,y:91.4},0).wait(1).to({rotation:15,x:-74.2,y:94.5},0).wait(1).to({rotation:1.3,x:-45.7,y:95.5},0).wait(1).to({rotation:-12.4,x:-17.5,y:94.4},0).wait(1).to({rotation:-26.1,x:9.9,y:91.7},0).wait(1).to({rotation:-28.8,x:19.1,y:90.8},0).wait(1).to({rotation:-31.6,x:28.2,y:89.8},0).wait(1).to({rotation:-34.3,x:37.3,y:88.7},0).wait(1).to({rotation:-32.6,x:16.2,y:85.6},0).wait(1).to({rotation:-31,x:-4.8,y:82.4},0).wait(1).to({rotation:-29.4,x:-26,y:79.2},0).wait(1).to({rotation:-20.9,x:-37.7,y:81.4},0).wait(1).to({rotation:-12.4,x:-49.8,y:83},0).wait(1));

	// steg_tail
	this.instance_12 = new lib.steg_tail();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-22,-35,1,1,0,0,0,-129.6,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:0,regY:0,rotation:0.7,x:107.1,y:-32},0).wait(1).to({rotation:1.3,x:106.5,y:-29.7},0).wait(1).to({rotation:2,x:105.9,y:-27.3},0).wait(1).to({rotation:1.3,x:106,y:-29.4},0).wait(1).to({rotation:0.7,y:-31.5},0).wait(1).to({rotation:0,x:106.1,y:-33.5},0).wait(1).to({rotation:1.2,x:106,y:-31.5},0).wait(1).to({rotation:2.3,x:105.9,y:-29.5},0).wait(1).to({rotation:3.5,x:105.8,y:-27.5},0).wait(1).to({rotation:3,x:106.1,y:-26.3},0).wait(1).to({rotation:2.5,x:106.4,y:-25.2},0).wait(1).to({rotation:2,x:106.8,y:-24.1},0).wait(1).to({rotation:1.5,x:107,y:-27.1},0).wait(1).to({rotation:1,x:107.3,y:-30.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283.3,-103.6,550.4,227.8);


(lib.mouse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouse-head
	this.instance = new lib.mousehead("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1424.7,263.4,1,1,0,0,0,-154,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:1.5,x:1578.7,y:266.2},0).wait(1).to({rotation:-0.5,y:260.9},0).wait(1).to({rotation:-2.4,x:1578.5,y:255.7},0).wait(1).to({rotation:-0.5,x:1578.7,y:260.9},0).wait(1));

	// mouse-Body
	this.instance_1 = new lib.mouseBody("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1445.9,266.9,1,1,0,0,0,266,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,scaleX:1,skewX:-2.2,skewY:-4.3,x:1181.9,y:323.7},0).wait(1).to({scaleX:1,rotation:2.6,skewX:0,skewY:0,x:1178.4,y:289.7},0).wait(1).to({rotation:0,skewX:7.4,skewY:9.4,x:1178.8,y:255.6},0).wait(1).to({skewX:1.5,skewY:1.9,x:1179.1,y:293.4},0).wait(1));

	// mouse-FrontLeg
	this.instance_2 = new lib.mouseFrontLeg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1375.6,254,1,1,0,180,0,-84,134);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,scaleX:1,skewX:181.2,skewY:-0.7,x:1408.1,y:400.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:169.6,skewY:-7.9,x:1473.5,y:394.5},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:158,skewY:-15.2,x:1536.8,y:382.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:175.6,skewY:-3,x:1475.7,y:388.5},0).wait(1));

	// mouse-FrontLeg
	this.instance_3 = new lib.mouseFrontLeg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1375.6,275,1,1,0,0,0,-84,134);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:16.1,skewY:13,x:1564.7,y:142},0).wait(1).to({scaleY:1,skewX:-4.5,skewY:-3,x:1469.9,y:130.3},0).wait(1).to({scaleY:1,skewX:-25.1,skewY:-19,x:1369.9,y:136.2},0).wait(1).to({scaleX:1,scaleY:1,skewX:-5,skewY:-3.8,x:1442,y:137.9},0).wait(1));

	// mouse-BackLeg
	this.instance_4 = new lib.mouseBackLeg("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(985.9,392.8,1,1,0,180,0,-35,99);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:161.4,skewY:-14.2,x:1138.5,y:494.6},0).wait(1).to({scaleY:1.01,skewX:193.6,skewY:11.3,x:1031.7,y:455.5},0).wait(1).to({scaleY:1.01,skewX:225.7,skewY:36.8,x:925,y:385.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:187.5,skewY:5.8,x:1004.2,y:472.1},0).wait(1));

	// mouse-BackLeg
	this.instance_5 = new lib.mouseBackLeg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(985.9,230.8,1,1,0,0,0,-35,99);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-24.6,skewY:-19.4,x:937.8,y:176.1},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:-2.1,skewY:-1.4,x:1029.4,y:119.1},0).wait(1).to({scaleX:0.98,scaleY:0.99,skewX:20.4,skewY:16.5,x:1117.6,y:76.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:4.1,skewY:3.3,x:1035,y:118.7},0).wait(1));

	// mouse-tail
	this.instance_6 = new lib.mousetail("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(884.3,302,1,1,0,0,0,425,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,regY:0,scaleX:1.02,skewX:20.1,skewY:15.3,x:476.2,y:244.2},0).wait(1).to({scaleX:1,scaleY:1.13,skewX:-14.4,skewY:0.6,x:444.7,y:244.4},0).wait(1).to({scaleX:0.97,scaleY:1.25,skewX:-48.9,skewY:-14.1,x:440.1,y:250.5},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:2,skewY:-3,x:461,y:281.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1881.3,606.3);


(lib.grass02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.grass02();
	this.instance.parent = this;
	this.instance.setTransform(-2.8,-3.3,1,1,0,0,0,37.1,45.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.427)",3,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-50.8,87,104);


(lib.Grass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.grass02 = new lib.grass02_1();
	this.grass02.parent = this;
	this.grass02.setTransform(9.5,36,0.835,0.797,0,0,180,-2.9,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.grass02).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.4,-2.2,75,86);


(lib.steg_skulleating = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// upper
	this.instance = new lib.steg_skull_upper();
	this.instance.parent = this;
	this.instance.setTransform(-0.9,-0.6,1,1,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,x:-0.8,y:-0.8},0).wait(41));

	// grass
	this.instance_1 = new lib.Grass();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.5,10.9,0.28,0.223,0,157.8,155.7,7.2,25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:8.2,regY:37.2,skewX:158.4,skewY:156.4,x:-5.7,y:8.4},0).wait(1).to({skewX:158.9,skewY:156.9,x:-5.6,y:8.3},0).wait(1).to({skewX:159.4,skewY:157.4,x:-5.5,y:8.2},0).wait(1).to({skewX:159.9,skewY:157.9,y:8.1},0).wait(1).to({skewX:160.4,skewY:158.3,x:-5.4,y:8},0).wait(1).to({skewX:160.9,skewY:158.8,x:-5.3,y:7.9},0).wait(1).to({skewX:161.4,skewY:159.3,x:-5.2,y:7.8},0).wait(1).to({skewX:161.9,skewY:159.8,x:-5.1,y:7.7},0).wait(1).to({skewX:162.4,skewY:160.3,x:-5,y:7.6},0).wait(1).to({skewX:162.9,skewY:160.8,x:-4.9,y:7.5},0).wait(1).to({skewX:163.4,skewY:161.3,y:7.4},0).wait(1).to({skewX:163.9,skewY:161.8,x:-4.8,y:7.3},0).wait(1).to({x:-4.9,y:7.4},0).wait(1).to({y:7.5},0).wait(1).to({x:-5,y:7.6},0).wait(1).to({y:7.7},0).wait(1).to({x:-5.1,y:7.8},0).wait(1).to({x:-5.2,y:7.9},0).wait(1).to({y:8},0).wait(1).to({x:-5.3,y:8.1},0).wait(1).to({y:8.2},0).wait(1).to({x:-5.4,y:8.3},0).wait(1).to({x:-5.5,y:8.4},0).wait(1).to({y:8.5},0).wait(1).to({x:-5.4,y:8.3},0).wait(1).to({x:-5.3,y:8.1},0).wait(1).to({x:-5.2,y:7.9},0).wait(1).to({x:-5,y:7.7},0).wait(1).to({x:-4.9,y:7.5},0).wait(1).to({x:-4.8,y:7.3},0).wait(1).to({skewX:163.3,skewY:161.3,x:-4.9,y:7.4},0).wait(1).to({skewX:162.8,skewY:160.7,y:7.5},0).wait(1).to({skewX:162.2,skewY:160.2,x:-5.1,y:7.7},0).wait(1).to({skewX:161.7,skewY:159.7,y:7.8},0).wait(1).to({skewX:161.2,skewY:159.1,x:-5.3},0).wait(1).to({skewX:160.6,skewY:158.6,y:8},0).wait(1).to({skewX:160.1,skewY:158,x:-5.5,y:8.1},0).wait(1).to({skewX:159.5,skewY:157.5,y:8.2},0).wait(1).to({skewX:159,skewY:156.9,x:-5.6,y:8.3},0).wait(1).to({skewX:158.4,skewY:156.4,x:-5.7,y:8.4},0).wait(1).to({skewX:157.9,skewY:155.9,x:-5.8,y:8.5},0).wait(1));

	// lower
	this.instance_2 = new lib.steg_skull_lower();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.9,1,1,1,-5.3,0,0,6.2,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,rotation:-4.3,x:0.9,y:4.3},0).wait(1).to({rotation:-3.3,y:4.2},0).wait(1).to({rotation:-2.3,x:0.8,y:4.1},0).wait(1).to({rotation:-1.3,y:4},0).wait(1).to({rotation:-0.2,x:0.7,y:3.9},0).wait(1).to({rotation:0.8,y:3.8},0).wait(1).to({rotation:1.8,x:0.6,y:3.7},0).wait(1).to({rotation:2.8,y:3.6},0).wait(1).to({rotation:3.8,x:0.5,y:3.5},0).wait(1).to({rotation:4.5,y:3.4},0).wait(1).to({rotation:5.1,y:3.3},0).wait(1).to({rotation:5.8,x:0.4,y:3.2},0).wait(1).to({rotation:5,x:0.5,y:3.3},0).wait(1).to({rotation:4.2,y:3.4},0).wait(1).to({rotation:3.4,y:3.5},0).wait(1).to({rotation:2.6,x:0.6,y:3.6},0).wait(1).to({rotation:1.7,y:3.7},0).wait(1).to({rotation:0.9,x:0.7,y:3.8},0).wait(1).to({rotation:0.1,y:3.9},0).wait(1).to({rotation:-0.7,y:4},0).wait(1).to({rotation:-1.5,x:0.8,y:4.1},0).wait(1).to({rotation:-2.4},0).wait(1).to({rotation:-3.2,x:0.9,y:4.2},0).wait(1).to({rotation:-4,y:4.3},0).wait(1).to({rotation:-2.5,x:0.8,y:4.2},0).wait(1).to({rotation:-1.1,y:4},0).wait(1).to({rotation:0.4,x:0.7,y:3.8},0).wait(1).to({rotation:1.9,x:0.6,y:3.7},0).wait(1).to({rotation:3.3,x:0.5,y:3.5},0).wait(1).to({rotation:4.8,y:3.4},0).wait(1).to({rotation:4.6},0).wait(1).to({rotation:4.5},0).wait(1).to({rotation:4.3},0).wait(1).to({rotation:3.3,y:3.5},0).wait(1).to({rotation:2.3,x:0.6,y:3.6},0).wait(1).to({rotation:1.3,y:3.7},0).wait(1).to({rotation:0.3,x:0.7,y:3.9},0).wait(1).to({rotation:-0.7,y:4},0).wait(1).to({rotation:-1.7,x:0.8,y:4.1},0).wait(1).to({rotation:-2.7,y:4.2},0).wait(1).to({rotation:-3.7,x:0.9,y:4.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-14.2,37.8,43.6);


(lib.stegcollapse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// steg_skull
	this.instance = new lib.steg_skull();
	this.instance.parent = this;
	this.instance.setTransform(540.3,789.4,2.825,2.825,-25.5,0,0,15.7,-9);

	this.instance_1 = new lib.steg_skulleating("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(422.9,900.1,2.826,2.826,15.5,0,0,11.1,-1.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleX:2.83,scaleY:2.83,rotation:-4.1,x:472.6,y:774.9},0).wait(1).to({rotation:17.3,x:439.9,y:714.2},0).wait(1).to({rotation:-9.6,x:455.7,y:774.3},0).wait(1).to({rotation:-36.6,x:480.1,y:827.3},0).wait(1).to({rotation:12.8,x:457.1,y:834.2},0).wait(1).to({rotation:62.3,x:468.2,y:830.6},0).wait(1).to({rotation:12.8,x:476.9,y:838.7},0).wait(1).to({rotation:-36.6,x:519.7,y:836.3},0).wait(1).to({rotation:-12.6,x:464.6,y:815.9},0).wait(1).to({rotation:11.4,x:416,y:789.5},0).wait(1).to({rotation:-12.6,x:464.6,y:815.9},0).wait(1).to({rotation:-36.6,x:519.7,y:836.3},0).wait(1).to({regX:13.4,regY:-5,scaleX:2.82,scaleY:2.82,x:540.3,y:676.3},0).wait(1).to({regX:0,regY:0,scaleX:2.83,scaleY:2.83,rotation:-16.7,x:500.4,y:747.1},0).wait(1).to({rotation:3.3,x:486.4,y:781},0).wait(1).to({rotation:23.2,x:477.1,y:813.4},0).wait(1).to({rotation:43.1,x:472.6,y:846.1},0).wait(1).to({x:488.6,y:870.1},0).wait(1).to({x:504.6,y:894.1},0).wait(2).to({rotation:39.4,x:503.7,y:896.6},0).wait(1).to({rotation:35.6,x:502.9,y:899.1},0).wait(1).to({rotation:31.9,x:502.3,y:901.7},0).wait(1).to({rotation:28.1,x:501.9,y:904.3},0).wait(9).to({rotation:23.1,x:486,y:883.8},0).wait(1).to({rotation:18.1,x:470.4,y:863.3},0).wait(1).to({rotation:13.1,x:455.1,y:842.8},0).wait(9).to({rotation:16.8,x:433.8,y:857.1},0).wait(1).to({rotation:20.5,x:412.8,y:871.3},0).wait(1).to({rotation:24.3,x:391.9,y:885.6},0).wait(1).to({rotation:28,x:371.1,y:899.8},0).wait(1).to({rotation:21.8,x:376.5,y:901.7},0).wait(1).to({rotation:15.6,x:382.4,y:903.6},0).to({_off:true},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).wait(1).to({regX:0,regY:3.7,scaleX:2.83,scaleY:2.83,rotation:15.6,x:388.9,y:905.3,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1));

	// steg_neck
	this.instance_2 = new lib.steg_neck();
	this.instance_2.parent = this;
	this.instance_2.setTransform(718.8,608.6,2.829,2.829,-54.4,0,0,27.7,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:-0.6,scaleX:2.83,scaleY:2.83,rotation:-25.3,x:585.1,y:626.9},0).wait(1).to({rotation:3.9,x:518.1,y:575.8},0).wait(1).to({rotation:-49.7,x:542.9,y:642},0).wait(1).to({rotation:-103.2,x:610.8,y:661.4},0).wait(1).to({rotation:-49.7,x:542.9,y:642},0).wait(1).to({rotation:3.9,x:518.1,y:575.8},0).wait(1).to({rotation:-49.7,x:592.1,y:642},0).wait(1).to({rotation:-103.2,x:709.2,y:661.4},0).wait(1).to({rotation:-49.7,x:592.1,y:642},0).wait(1).to({rotation:3.9,x:518.1,y:575.8},0).wait(1).to({rotation:-49.7,x:592.1,y:642},0).wait(1).to({rotation:-103.2,x:709.2,y:661.4},0).wait(1).to({regX:11.6,regY:8.4,scaleX:2.83,scaleY:2.83,rotation:-73.2,x:649.4,y:387.2},0).wait(1).to({regX:0,regY:-0.6,scaleX:2.83,scaleY:2.83,rotation:-55.6,x:646.2,y:558.9},0).wait(1).to({rotation:-37.9,x:680.6,y:705.4},0).wait(1).to({rotation:-20.3,x:718.9,y:851.9},0).wait(17).to({rotation:-10.3,x:701.3,y:855.4},0).wait(1).to({rotation:-0.3,x:684.8,y:859.4},0).wait(1).to({rotation:9.7,x:669.4,y:864.3},0).wait(9).to({rotation:5.5,x:652.8,y:867.8},0).wait(1).to({rotation:1.4,x:636.4,y:871.4},0).wait(1).to({rotation:-2.8,x:620.1,y:875.2},0).wait(1).to({rotation:-7,x:604.1,y:879.1},0).wait(1).to({rotation:-6.3,x:604.3,y:878.6},0).wait(1).to({rotation:-5.5,x:604.7,y:878.1},0).wait(106));

	// steg_Front-leg_L_upper
	this.instance_3 = new lib.steg_Frontleg_L_upper();
	this.instance_3.parent = this;
	this.instance_3.setTransform(829.8,584.9,0.995,0.995,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:1,scaleY:1,rotation:-48.8,x:826.1,y:542},0).wait(1).to({rotation:-77.4,x:822.3,y:499.2},0).wait(1).to({rotation:-47.5,x:880.9,y:545.8},0).wait(1).to({rotation:-17.5,x:939.6,y:592.5},0).wait(1).to({rotation:-47.5,x:880.9,y:545.8},0).wait(1).to({rotation:-77.4,x:822.3,y:499.2},0).wait(1).to({rotation:-47.5,x:880.9,y:545.8},0).wait(1).to({rotation:-17.5,x:939.6,y:592.5},0).wait(1).to({rotation:-47.5,x:880.9,y:545.8},0).wait(1).to({rotation:-77.4,x:822.3,y:499.2},0).wait(1).to({rotation:-47.5,x:880.9,y:545.8},0).wait(1).to({rotation:-17.5,x:939.6,y:592.5},0).wait(1).to({scaleX:1,scaleY:1,x:873,y:420.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:13.8,x:856.5,y:567.2},0).wait(1).to({rotation:45.2,x:840,y:713.8},0).wait(1).to({rotation:76.5,x:823.5,y:860.5},0).wait(139));

	// steg_Front-leg_L_mid
	this.instance_4 = new lib.steg_Frontleg_L_mid();
	this.instance_4.parent = this;
	this.instance_4.setTransform(799.9,679.4,0.993,0.993,20,0,0,-35.9,-36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:40.2,x:799.5,y:694.7},0).wait(1).to({rotation:60.4,x:777.4,y:657.8},0).wait(1).to({rotation:18.8,x:822.9,y:705.3},0).wait(1).to({rotation:-22.7,x:857.2,y:729.8},0).wait(1).to({rotation:18.8,x:822.9,y:705.3},0).wait(1).to({rotation:60.4,x:777.4,y:657.8},0).wait(1).to({rotation:18.8,x:822.9,y:705.3},0).wait(1).to({rotation:-22.7,x:857.2,y:729.8},0).wait(1).to({rotation:18.8,x:822.9,y:705.3},0).wait(1).to({rotation:60.4,x:777.4,y:657.8},0).wait(1).to({rotation:18.8,x:822.9,y:705.3},0).wait(1).to({rotation:-22.7,x:857.2,y:729.8},0).wait(1).to({regX:-25.4,regY:-26.8,scaleX:0.99,scaleY:0.99,rotation:22.3,x:799.7,y:578.4},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:64.8,x:841.3,y:754},0).wait(1).to({rotation:107.3,x:876.7,y:877.3},0).wait(140));

	// steg_back-leg_L_btm
	this.instance_5 = new lib.steg_backleg_L_btm();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1088.5,754.6,2.833,2.833,16,0,0,-15.2,-24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:-0.5,x:1181.3,y:817.1},0).wait(1).to({rotation:-17,x:1248.4,y:794.6},0).wait(1).to({rotation:-21.6,x:1252.6,y:789.4},0).wait(1).to({rotation:-26.2,x:1256.3,y:784},0).wait(1).to({rotation:-21.6,x:1252.6,y:789.4},0).wait(1).to({rotation:-17,x:1248.4,y:794.6},0).wait(1).to({rotation:-21.6,x:1222.3,y:804.6},0).wait(1).to({rotation:-26.2,x:1195.7,y:814.3},0).wait(1).to({rotation:-21.6,x:1222.3,y:804.6},0).wait(1).to({rotation:-17,x:1248.4,y:794.6},0).wait(1).to({rotation:-21.6,x:1222.3,y:804.6},0).wait(1).to({rotation:-26.2,x:1195.7,y:814.3},0).wait(1).to({regX:-15.2,regY:-22.6,scaleX:2.83,scaleY:2.83,rotation:33.8,x:1204.2,y:730.1},0).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:105.8,x:1080.5,y:906.3},0).wait(141));

	// steg_back-leg_L_top
	this.instance_6 = new lib.steg_backleg_L_top();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1115,502.8,2.835,2.835,7.5,0,0,-1.7,-40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:-5.8,x:1141.3,y:620.4},0).wait(1).to({rotation:-19.2,x:1176.8,y:618.5},0).wait(1).to({rotation:4.1,x:1131.3,y:626.4},0).wait(1).to({rotation:27.5,x:1086.4,y:615.8},0).wait(1).to({rotation:4.1,x:1131.3,y:626.4},0).wait(1).to({rotation:-19.2,x:1176.8,y:618.5},0).wait(1).to({rotation:4.1,x:1131.3,y:626.4},0).wait(1).to({rotation:27.5,x:1086.4,y:615.8},0).wait(1).to({rotation:4.1,x:1131.3,y:626.4},0).wait(1).to({rotation:-19.2,x:1176.8,y:618.5},0).wait(1).to({rotation:4.1,x:1131.3,y:626.4},0).wait(1).to({rotation:27.5,x:1086.4,y:615.8},0).wait(1).to({regX:1.6,regY:-37.7,rotation:-2.5,x:1208,y:429.5},0).wait(1).to({regX:0,regY:0,rotation:-34.1,x:1186.8,y:726.1},0).wait(1).to({rotation:-65.7,x:1148.8,y:888.8},0).wait(140));

	// steg_hip
	this.instance_7 = new lib.steg_hip();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1112,504.6,2.837,2.837,0,0,0,4.8,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:6.5,x:1096.3,y:536.3},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:13,x:1094.4,y:522.8},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:-3.8,x:1107.1,y:527.9},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:-20.6,x:1120.6,y:529},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:-3.8,x:1107.1,y:527.9},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:13,x:1094.4,y:522.8},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:-3.8,x:1107.1,y:527.9},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:-20.6,x:1120.6,y:529},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:-3.8,x:1107.1,y:527.9},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:13,x:1094.4,y:522.8},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:-3.8,x:1107.1,y:527.9},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:-20.6,x:1120.6,y:529},0).wait(1).to({regX:4.7,regY:-11.3,scaleX:2.83,scaleY:2.83,rotation:-20.5,x:1117.5,y:285.8},0).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:-24.1,x:1102.5,y:504.2},0).wait(1).to({rotation:-27.6,x:1088.6,y:687.7},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:-31.1,x:1074.8,y:871},0).wait(139));

	// steg_ribs
	this.instance_8 = new lib.steg_ribs();
	this.instance_8.parent = this;
	this.instance_8.setTransform(880.6,497,2.837,2.837,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,scaleX:2.84,scaleY:2.84,rotation:-13.4,x:872.3,y:432.3},0).wait(1).to({rotation:-26.7,x:865.3,y:367.6},0).wait(1).to({rotation:4.2,x:865.2,y:367.1},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:35.1,x:865.4,y:366.6},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:4.2,x:865.2,y:367.1},0).wait(1).to({rotation:-26.7,x:865.3,y:367.6},0).wait(1).to({rotation:4.2,x:865.2,y:410},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:35.1,x:865.4,y:452.4},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:4.2,x:865.2,y:410},0).wait(1).to({rotation:-26.7,x:865.3,y:367.6},0).wait(1).to({rotation:4.2,x:865.2,y:410},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:35.1,x:865.4,y:452.4},0).wait(1).to({rotation:5,x:865.8,y:266.3},0).wait(1).to({rotation:13.2,x:871.3,y:362.4},0).wait(1).to({rotation:21.4,x:876.8,y:458.4},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:29.6,x:882.4,y:554.5},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:37.7,x:887.9,y:650.6},0).wait(1).to({rotation:45.9,x:893.4,y:746.7},0).wait(137));

	// steg_Front-leg_L_btm
	this.instance_9 = new lib.steg_Frontleg_L_btm();
	this.instance_9.parent = this;
	this.instance_9.setTransform(847.9,783.8,2.837,2.837,0,0,0,1.4,-20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:0,regY:0,rotation:-27.3,x:880.1,y:851.3},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:-54.5,x:911.2,y:848.9},0).wait(1).to({rotation:1.1,x:886.3,y:869.9},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:56.8,x:866,y:840.3},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:1.1,x:886.3,y:869.9},0).wait(1).to({rotation:-54.5,x:911.2,y:848.9},0).wait(1).to({rotation:1.1,x:886.3,y:869.9},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:56.8,x:866,y:840.3},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:1.1,x:886.3,y:869.9},0).wait(1).to({rotation:-54.5,x:911.2,y:848.9},0).wait(1).to({rotation:1.1,x:886.3,y:869.9},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:56.8,x:866,y:840.3},0).wait(1).to({regX:1.6,regY:-17.2,scaleX:2.84,scaleY:2.84,rotation:11.8,x:961.4,y:723.9},0).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:82.4,x:867.3,y:925.6},0).wait(141));

	// Steg_back-leg_R_top
	this.instance_10 = new lib.Steg_backleg_R_top();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1114.8,507.7,2.831,2.831,-22.8,0,0,21.7,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:0,regY:0,scaleX:2.83,scaleY:2.83,rotation:-0.9,x:1038.6,y:599.1},0).wait(1).to({rotation:21,x:993.7,y:573.2},0).wait(1).to({rotation:-24.5,x:1062.9,y:618.7},0).wait(1).to({rotation:-70,x:1143.9,y:601.2},0).wait(1).to({rotation:-24.5,x:1062.9,y:618.7},0).wait(1).to({rotation:21,x:993.7,y:573.2},0).wait(1).to({rotation:-24.5,x:1062.9,y:618.7},0).wait(1).to({rotation:-70,x:1143.9,y:601.2},0).wait(1).to({rotation:-24.5,x:1062.9,y:618.7},0).wait(1).to({rotation:21,x:993.7,y:573.2},0).wait(1).to({rotation:-24.5,x:1062.9,y:618.7},0).wait(1).to({rotation:-70,x:1143.9,y:601.2},0).wait(1).to({regX:21.7,regY:-30.9,scaleX:2.83,scaleY:2.83,rotation:-25,x:1082.6,y:400.3},0).wait(1).to({regX:0,regY:0,scaleX:2.83,scaleY:2.83,rotation:6.7,x:1022.1,y:713.8},0).wait(1).to({rotation:38.4,x:1001.6,y:898},0).wait(140));

	// Steg_back-leg_btm
	this.instance_11 = new lib.Steg_backleg_btm();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1056.4,730.6,2.836,2.836,-1.6,0,0,-6.4,-34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:-1,regY:-0.9,rotation:9,x:1042.3,y:835.9},0).wait(1).to({rotation:19.7,x:1010.1,y:842.1},0).wait(1).to({rotation:30.5,x:992.5,y:837},0).wait(1).to({rotation:41.3,x:976.1,y:828.7},0).wait(1).to({rotation:30.5,x:992.5,y:837},0).wait(1).to({rotation:19.7,x:1010.1,y:842.1},0).wait(1).to({rotation:30.5,x:992.5,y:837},0).wait(1).to({rotation:41.3,x:976.1,y:828.7},0).wait(1).to({rotation:30.5,x:992.5,y:837},0).wait(1).to({rotation:19.7,x:1010.1,y:842.1},0).wait(1).to({rotation:30.5,x:992.5,y:837},0).wait(1).to({rotation:41.3,x:976.1,y:828.7},0).wait(1).to({regX:-1.9,regY:-31.9,scaleX:2.84,scaleY:2.84,rotation:11.3,x:1073.8,y:706.4},0).wait(1).to({regX:-1,regY:-0.9,scaleX:2.84,scaleY:2.84,rotation:124.8,x:966.9,y:874.4},0).wait(141));

	// steg_tail
	this.instance_12 = new lib.steg_tail();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1126.1,465.8,2.833,2.833,14,0,0,-128.9,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:22.7,x:1547.3,y:579.7},0).wait(1).to({rotation:31.3,x:1606.1,y:602.8},0).wait(1).to({rotation:-4.2,x:1657.6,y:385.9},0).wait(1).to({rotation:-39.7,x:1573.6,y:179.4},0).wait(1).to({rotation:-4.2,x:1657.6,y:385.9},0).wait(1).to({rotation:31.3,x:1606.1,y:602.8},0).wait(1).to({rotation:-4.2,x:1600.8,y:399.8},0).wait(1).to({rotation:-39.7,x:1460.1,y:207.2},0).wait(1).to({rotation:-4.2,x:1600.8,y:399.8},0).wait(1).to({rotation:31.3,x:1606.1,y:602.8},0).wait(1).to({rotation:-4.2,x:1600.8,y:399.8},0).wait(1).to({rotation:-39.7,x:1460.1,y:207.2},0).wait(1).to({regX:-119.5,regY:3.3,rotation:15.2,x:1317.8,y:293.3},0).wait(1).to({regX:0,regY:0,rotation:10,x:1604.9,y:446.1},0).wait(1).to({rotation:4.8,x:1559.8,y:518.3},0).wait(1).to({rotation:-0.4,x:1511.9,y:590.5},0).wait(1).to({rotation:-5.6,x:1461.3,y:662.7},0).wait(1).to({rotation:-10.8,x:1407.8,y:735.3},0).wait(1).to({rotation:-1.2,x:1415.3,y:791.4},0).wait(1).to({rotation:-1.2},0).wait(135));

	// steg_front-leg_R_mid
	this.instance_13 = new lib.steg_Frontleg_L_mid();
	this.instance_13.parent = this;
	this.instance_13.setTransform(751.1,680,1,1,0,0,0,-22.4,-52.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:0,regY:0,rotation:-5.8,x:770.6,y:726.9},0).wait(1).to({rotation:-11.5,x:767.5,y:720.9},0).wait(1).to({rotation:22.6,x:763.6,y:745.8},0).wait(1).to({rotation:56.8,x:759.5,y:751.1},0).wait(1).to({rotation:22.6,x:763.6,y:745.8},0).wait(1).to({rotation:-11.5,x:767.5,y:720.9},0).wait(1).to({rotation:22.6,x:763.6,y:745.8},0).wait(1).to({rotation:56.8,x:759.5,y:751.1},0).wait(1).to({rotation:22.6,x:763.6,y:745.8},0).wait(1).to({rotation:-11.5,x:767.5,y:720.9},0).wait(1).to({rotation:22.6,x:763.6,y:745.8},0).wait(1).to({rotation:56.8,x:759.5,y:751.1},0).wait(1).to({regX:-10.8,regY:-50.6,scaleX:1,scaleY:1,rotation:12.1,x:710.3,y:629.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:29.6,x:715.9,y:787.8},0).wait(1).to({rotation:47.1,x:723.1,y:890.2},0).wait(140));

	// steg_front-leg_R_btm
	this.instance_14 = new lib.steg_frontleg_R_btm();
	this.instance_14.parent = this;
	this.instance_14.setTransform(799.7,785.4,2.83,2.83,-17.8,0,0,20.9,-18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:0,regY:0,scaleX:2.83,scaleY:2.83,rotation:2.4,x:729.4,y:847},0).wait(1).to({rotation:22.7,x:707.4,y:835.8},0).wait(1).to({rotation:-6.4,x:728.7,y:868.9},0).wait(1).to({rotation:-35.5,x:763.5,y:887.5},0).wait(1).to({rotation:-6.4,x:728.7,y:868.9},0).wait(1).to({rotation:22.7,x:707.4,y:835.8},0).wait(1).to({rotation:-6.4,x:728.7,y:868.9},0).wait(1).to({rotation:-35.5,x:763.5,y:887.5},0).wait(1).to({rotation:-6.4,x:728.7,y:868.9},0).wait(1).to({rotation:22.7,x:707.4,y:835.8},0).wait(1).to({rotation:-6.4,x:728.7,y:868.9},0).wait(1).to({rotation:-35.5,x:763.5,y:887.5},0).wait(1).to({regX:20.9,regY:-18.2,scaleX:2.83,scaleY:2.83,rotation:-35.6,x:713,y:691.6},0).wait(1).to({regX:0,regY:0,scaleX:2.83,scaleY:2.83,rotation:-158.4,x:791.1,y:921.1},0).wait(141));

	// steg_Front-leg_R_upper
	this.instance_15 = new lib.steg_Frontleg_R_upper();
	this.instance_15.parent = this;
	this.instance_15.setTransform(791,609);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({rotation:-14,x:790.8,y:569.1},0).wait(1).to({rotation:-27.9,x:790.6,y:529.1},0).wait(1).to({rotation:26.7,x:772.3},0).wait(1).to({rotation:81.3,x:754},0).wait(1).to({rotation:41.7,x:735.7},0).wait(1).to({rotation:2.2,x:717.5},0).wait(1).to({rotation:4.3,x:740.2,y:572},0).wait(1).to({rotation:6.3,x:762.9,y:614.9},0).wait(1).to({rotation:4.3,x:740.2,y:572},0).wait(1).to({rotation:2.2,x:717.5,y:529.1},0).wait(1).to({rotation:4.3,x:740.2,y:572},0).wait(1).to({rotation:6.3,x:762.9,y:614.9},0).wait(1).to({y:420.6},0).wait(1).to({rotation:12.8,x:768.7,y:567.2},0).wait(1).to({rotation:19.3,x:774.6,y:713.8},0).wait(1).to({rotation:25.8,x:780.5,y:860.5},0).wait(139));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(446.7,261.3,1438.8,674.4);


(lib.steg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// grass
	this.instance = new lib.Grass();
	this.instance.parent = this;
	this.instance.setTransform(-22.1,925,1,1,0,0,0,22,57.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).wait(1).to({x:-0.4},0).wait(1).to({x:21.4},0).wait(1).to({x:43.2},0).wait(1).to({x:65},0).wait(1).to({x:86.7},0).wait(1).to({x:108.5},0).wait(1).to({x:130.3},0).wait(1).to({x:152.1},0).wait(1).to({x:173.8},0).wait(1).to({x:195.6},0).wait(1).to({x:217.4},0).wait(1).to({x:239.2},0).wait(1).to({x:261},0).wait(1).to({x:282.7},0).wait(1).to({x:304.5},0).wait(1).to({x:326.3},0).wait(1).to({x:348.1},0).wait(1).to({x:369.8},0).wait(1).to({x:391.6},0).wait(1).to({x:413.4},0).wait(1).to({x:435.2},0).wait(1).to({x:456.9},0).wait(1).to({x:478.7},0).wait(1).to({x:500.5},0).wait(14).to({regX:22.1,scaleY:1.01,skewX:-4,x:500.6},0).wait(1).to({regX:22,scaleY:1.01,skewX:-8,x:500.5},0).wait(1).to({regX:22.1,scaleY:1.02,skewX:-12,x:500.6},0).wait(1).to({scaleY:1.02,skewX:-10.3},0).wait(1).to({regX:22,scaleY:1.01,skewX:-8.6,x:500.5},0).wait(1).to({scaleY:1.01,skewX:-7,x:500.6,y:925.1},0).wait(1).to({scaleY:1,skewX:-5.3,x:500.5,y:925},0).wait(1).to({regX:22.1,scaleY:0.97,skewX:-1.3,x:500.6},0).wait(1).to({regX:22,scaleY:0.93,skewX:2.5,x:500.5,y:925.1},0).wait(173).to({scaleY:0.86,skewX:-6,y:925},0).wait(1).to({regX:22.1,scaleY:0.8,skewX:-14.6,x:500.6,y:925.1},0).wait(1).to({scaleY:0.91,skewX:32.3,y:925},0).wait(1).to({regX:22,scaleY:0.87,skewX:22.6,x:500.5,y:925.1},0).wait(1).to({scaleY:0.84,skewX:13,y:925},0).wait(1).to({regX:22.1,scaleY:0.8,skewX:3.5,x:500.6},0).wait(66).to({_off:true},1).wait(36));

	// steg_skull
	this.instance_1 = new lib.steg_skull();
	this.instance_1.parent = this;
	this.instance_1.setTransform(451.1,593.3,2.835,2.835,10.1,0,0,14.5,-8.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.steg_skulleating("synched",8);
	this.instance_2.parent = this;
	this.instance_2.setTransform(554,823.6,2.824,2.824,-32.1,0,0,16,-6.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:7.7,x:407.7,y:618},0).wait(1).to({rotation:5.2,x:409.2,y:625.9},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:2.7,x:410.7,y:633.7},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:0.2,x:412.3,y:641.6},0).wait(1).to({rotation:0.2},0).wait(7).to({scaleX:2.84,scaleY:2.84,rotation:-8.8,x:433.2,y:681.8},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:-17.8,x:455,y:721.3},0).wait(1).to({rotation:-26.8,x:477.6,y:760},0).wait(1).to({rotation:-35.8,x:500.8,y:797.6},0).wait(1).to({rotation:-44.8,x:524.4,y:834.2},0).wait(1).to({rotation:-41.9,x:522,y:838.1},0).wait(1).to({rotation:-38.9,x:519.7,y:841.9},0).wait(1).to({rotation:-35.9,x:517.4,y:845.6},0).wait(1).to({rotation:-32.9,x:515.1,y:849.1},0).wait(1).to({rotation:-29.9,x:512.9,y:852.6},0).wait(1).to({x:515.6,y:856.2},0).wait(1).to({x:518.2,y:859.9},0).wait(1).to({x:520.9,y:863.6},0).to({_off:true},1).wait(282));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).wait(1).to({regX:0,regY:3.7,scaleX:2.83,scaleY:2.83,rotation:-32.2,x:530.9,y:871.9,startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({regX:14.5,regY:-5.5,scaleX:2.82,scaleY:2.82,rotation:-32.1,x:554,y:823.4,mode:"single",startPosition:11},0).wait(1).to({regX:0,regY:3.7,scaleX:2.83,scaleY:2.83,rotation:-27.9,x:529.9,y:865.6},0).wait(1).to({rotation:-23.6,x:526.8,y:863.7},0).wait(1).to({rotation:-19.3,x:523.9,y:861.5},0).wait(1).to({rotation:-15,x:521.1,y:859.1},0).wait(1).to({rotation:-10.7,x:518.5,y:856.6},0).wait(1).to({rotation:-6.4,x:516.1,y:853.8},0).wait(1).to({rotation:-2.1,x:514,y:850.9},0).wait(1).to({rotation:-2.1},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:11},0).to({_off:true},1).wait(192));

	// walk on
	this.instance_3 = new lib.Steg_mc_walk("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(2722.5,606.9,2.837,2.837,0,0,0,-8,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-11.5,regY:12.1,x:2707.3,y:605.1,startPosition:1},0).wait(1).to({x:2702.1,startPosition:2},0).wait(1).to({x:2696.8,startPosition:3},0).wait(1).to({x:2656.3,startPosition:4},0).wait(1).to({x:2615.8,startPosition:5},0).wait(1).to({x:2575.3,startPosition:6},0).wait(1).to({x:2534.8,startPosition:7},0).wait(1).to({x:2494.4,startPosition:8},0).wait(1).to({x:2453.9,startPosition:9},0).wait(1).to({x:2413.4,startPosition:10},0).wait(1).to({x:2422.1,startPosition:11},0).wait(1).to({x:2430.7,startPosition:12},0).wait(1).to({x:2390.2,startPosition:13},0).wait(1).to({x:2349.7,startPosition:14},0).wait(1).to({x:2309.2,startPosition:0},0).wait(1).to({x:2268.7,startPosition:1},0).wait(1).to({x:2228.2,startPosition:2},0).wait(1).to({x:2187.7,startPosition:3},0).wait(1).to({x:2147.2,startPosition:4},0).wait(1).to({x:2080.8,startPosition:5},0).wait(1).to({x:2014.5,startPosition:6},0).wait(1).to({x:1993.1,startPosition:7},0).wait(1).to({x:1971.8,startPosition:8},0).wait(1).to({x:1950.4,startPosition:9},0).wait(1).to({x:1929,startPosition:10},0).wait(1).to({x:1941.6,startPosition:11},0).wait(1).to({x:1954.1,startPosition:12},0).wait(1).to({x:1888.9,startPosition:13},0).wait(1).to({x:1823.7,startPosition:14},0).wait(1).to({x:1758.4,startPosition:0},0).wait(1).to({x:1755,startPosition:1},0).wait(1).to({x:1751.5,startPosition:2},0).wait(1).to({x:1748,startPosition:3},0).wait(1).to({x:1744.6,startPosition:4},0).wait(1).to({x:1697.3,startPosition:5},0).wait(1).to({x:1650.1,startPosition:6},0).wait(1).to({x:1602.9,startPosition:7},0).wait(1).to({x:1555.6,startPosition:8},0).wait(1).to({x:1548.2,startPosition:9},0).wait(1).to({x:1540.8,startPosition:10},0).wait(1).to({x:1533.5,startPosition:11},0).wait(1).to({x:1509.9,startPosition:12},0).wait(1).to({x:1486.3,startPosition:13},0).wait(1).to({x:1462.7,startPosition:14},0).wait(1).to({x:1439.1,startPosition:0},0).wait(1).to({x:1415.5,startPosition:1},0).wait(1).to({x:1391.9,startPosition:2},0).wait(1).to({x:1368.3,startPosition:3},0).wait(1).to({x:1344.7,startPosition:4},0).wait(1).to({x:1321.1,startPosition:5},0).wait(1).to({x:1297.5,startPosition:6},0).wait(1).to({x:1273.9,startPosition:7},0).wait(1).to({x:1250.4,startPosition:8},0).wait(1).to({x:1226.8,startPosition:9},0).wait(1).to({x:1203.2,startPosition:10},0).wait(1).to({x:1179.6,startPosition:11},0).wait(1).to({x:1156,startPosition:12},0).wait(1).to({x:1132.4,startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).to({_off:true},1).wait(307));

	// steg_front-leg_top
	this.instance_4 = new lib.steg_frontleg_top();
	this.instance_4.parent = this;
	this.instance_4.setTransform(814.4,528.2,2.835,2.835,-11.8,0,0,17.4,-40.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:-9.7,x:785.1,y:649.7},0).wait(1).to({rotation:-7.4,x:780.4,y:648.5},0).wait(1).to({rotation:-5.2,x:775.7,y:647.1},0).wait(1).to({rotation:-3,x:771,y:645.5},0).wait(110).to({_off:true},1).wait(192));

	// steg_back-leg_L_btm
	this.instance_5 = new lib.steg_backleg_L_btm();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1026.6,742.6,2.837,2.837,0,0,0,-15.4,-25.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(65).to({_off:false},0).wait(1).to({regX:0,regY:0,rotation:3.7,x:1078.1,y:819.6},0).wait(1).to({rotation:7.5,x:1085.7,y:824.8},0).wait(1).to({rotation:11.2,x:1093.2,y:829.7},0).wait(1).to({rotation:15,x:1100.5,y:834.3},0).wait(110).to({_off:true},1).wait(192));

	// steg_back-leg_L_top
	this.instance_6 = new lib.steg_backleg_L_top();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1085,507.4,2.834,2.834,15.3,0,0,-1.8,-40.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(65).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:12.6,x:1065,y:619.8},0).wait(1).to({rotation:9.8,x:1070.5,y:620.6},0).wait(1).to({rotation:7,x:1076.1,y:621.2},0).wait(1).to({rotation:4.2,x:1081.7,y:621.5},0).wait(110).to({_off:true},1).wait(192));

	// steg_hip
	this.instance_7 = new lib.steg_hip();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1088.5,511.4,2.837,2.837,0,0,0,4.8,-15.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(65).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:0.9,x:1075.7,y:555.9},0).wait(1).to({rotation:1.7,x:1076.5,y:555.7},0).wait(1).to({scaleX:2.84,scaleY:2.84,rotation:2.6,x:1077.4,y:555.5},0).wait(1).to({rotation:3.5,x:1078.2,y:555.2},0).wait(110).to({_off:true},1).wait(192));

	// steg_ribs
	this.instance_8 = new lib.steg_ribs();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1061.6,466.2,2.836,2.836,-2.3,0,0,72.5,-16.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:-2.5,x:857.4,y:519.4},0).wait(1).to({x:856.7,y:517.7},0).wait(1).to({x:856,y:515.9},0).wait(1).to({x:855.3,y:514.2},0).wait(110).to({_off:true},1).wait(192));

	// steg_neck
	this.instance_9 = new lib.steg_neck();
	this.instance_9.parent = this;
	this.instance_9.setTransform(692.3,618.2,2.837,2.837,0,0,0,28.3,0.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65).to({_off:false},0).wait(1).to({regX:0,regY:-0.6,rotation:-1.2,x:611.7,y:616.8},0).wait(1).to({rotation:-2.4,x:611.5,y:619.2},0).wait(1).to({rotation:-3.6,x:611.2,y:621.5},0).wait(1).to({rotation:-4.8,x:611,y:623.9},0).wait(8).to({rotation:-15.8,x:612.5,y:639.1},0).wait(1).to({rotation:-26.9,x:617,y:653.8},0).wait(1).to({rotation:-37.9,x:624,y:667.1},0).wait(1).to({rotation:-48.9,x:633.6,y:678.8},0).wait(1).to({rotation:-59.9,x:645.2,y:688.3},0).wait(98).to({_off:true},1).wait(192));

	// steg_Front-leg_L_btm
	this.instance_10 = new lib.steg_Frontleg_L_btm();
	this.instance_10.parent = this;
	this.instance_10.setTransform(876.4,784.2,2.834,2.834,19.1,0,0,1.4,-20.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(65).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:16.1,x:845.9,y:841.4},0).wait(1).to({rotation:13,x:838.7,y:843.9},0).wait(1).to({rotation:9.8,x:831.6,y:846.2},0).wait(1).to({rotation:6.7,x:824.5,y:848.4},0).wait(110).to({_off:true},1).wait(192));

	// steg_front-leg_R_top
	this.instance_11 = new lib.steg_frontleg_R_top();
	this.instance_11.parent = this;
	this.instance_11.setTransform(739.5,605.4,2.834,2.834,17.3,0,0,-5.8,-21.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(65).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:11.2,x:749.5,y:661.8},0).wait(1).to({rotation:4.9,x:761.9,y:655.2},0).wait(1).to({rotation:-1.4,x:774.1,y:647.8},0).wait(1).to({rotation:-7.7,x:786.1,y:639.7},0).wait(110).to({_off:true},1).wait(192));

	// steg_front-leg_R_btm
	this.instance_12 = new lib.steg_frontleg_R_btm();
	this.instance_12.parent = this;
	this.instance_12.setTransform(711.3,797.1,2.835,2.835,-11.3,0,0,20.7,-18.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(65).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.91,rotation:0,skewX:-16,skewY:-14.1,x:694.7,y:857.8},0).wait(1).to({scaleX:2.84,scaleY:2.98,skewX:-20.5,skewY:-16.6,x:725.5,y:855.3},0).wait(1).to({scaleX:2.85,scaleY:3.06,skewX:-25,skewY:-19.2,x:756.4,y:852.4},0).wait(1).to({scaleX:2.85,scaleY:3.13,skewX:-29.5,skewY:-21.7,x:787.6,y:849.1},0).wait(110).to({_off:true},1).wait(192));

	// Steg_back-leg_R_top
	this.instance_13 = new lib.Steg_backleg_R_top();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1091.4,514,2.834,2.834,-15.3,0,0,22,-30.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(65).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:-16.7,x:1058.1,y:615.1},0).wait(1).to({rotation:-18,x:1061.6,y:615},0).wait(1).to({rotation:-19.2,x:1065,y:614.9},0).wait(1).to({rotation:-20.4,x:1068.5,y:614.8},0).wait(110).to({_off:true},1).wait(192));

	// Steg_back-leg_btm
	this.instance_14 = new lib.Steg_backleg_btm();
	this.instance_14.parent = this;
	this.instance_14.setTransform(1029.2,742.3,2.837,2.837,0,0,0,-0.6,-35.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(65).to({_off:false},0).wait(1).to({regX:-1,regY:-0.9,x:1029.6,y:837.3},0).wait(1).to({x:1031.3,y:835.4},0).wait(1).to({x:1032.9,y:833.4},0).wait(1).to({x:1034.5,y:831.5},0).wait(110).to({_off:true},1).wait(192));

	// steg_tail
	this.instance_15 = new lib.steg_tail();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1102.5,471.5,2.836,2.836,1.1,0,0,-129.6,-0.6);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(65).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.84,scaleY:2.84,rotation:2.7,x:1468.9,y:494.1},0).wait(1).to({rotation:4.2,x:1467.6,y:507.3},0).wait(1).to({rotation:5.7,x:1466,y:520.4},0).wait(1).to({rotation:7.2,x:1464.1,y:533.4},0).wait(110).to({_off:true},1).wait(192));

	// collapse
	this.instance_16 = new lib.stegcollapse("synched",0,false);
	this.instance_16.parent = this;
	this.instance_16.setTransform(1243.8,430,1,1,0,0,0,1242.7,431.7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(180).to({_off:false},0).wait(1).to({regX:1219.9,regY:409.6,x:1314.6,y:305.3,startPosition:1},0).wait(1).to({x:1408.2,y:202.7,startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({y:267.5,startPosition:15},0).wait(1).to({y:332.3,startPosition:16},0).wait(1).to({y:397.1,startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({regX:1242.7,regY:431.7,x:1431,y:419.2,mode:"single"},0).wait(1).to({regX:1219.9,regY:409.6,x:1408.2,y:397.1},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:19},0).wait(1).to({regX:1242.7,regY:431.7,x:1431,y:419.2,mode:"synched",loop:false},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).to({_off:true},1).wait(36));

	// MOUSE
	this.instance_17 = new lib.mouse("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-749.2,872.8,0.174,0.174,0,0,0,911.9,280.4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(118).to({_off:false},0).wait(1).to({regX:919,regY:284,x:-715.5,y:873.4,startPosition:1},0).wait(1).to({x:-683.2,startPosition:2},0).wait(1).to({x:-650.8,startPosition:3},0).wait(1).to({x:-618.4,startPosition:4},0).wait(1).to({x:-586,startPosition:0},0).wait(1).to({x:-553.7,startPosition:1},0).wait(1).to({x:-521.3,startPosition:2},0).wait(1).to({x:-488.9,startPosition:3},0).wait(1).to({x:-456.5,startPosition:4},0).wait(1).to({x:-424.2,startPosition:0},0).wait(1).to({x:-391.8,startPosition:1},0).wait(1).to({x:-359.4,startPosition:2},0).wait(1).to({x:-327,startPosition:3},0).wait(1).to({x:-294.7,startPosition:4},0).wait(1).to({x:-262.3,startPosition:0},0).wait(1).to({x:-229.9,startPosition:1},0).wait(1).to({x:-197.6,startPosition:2},0).wait(1).to({x:-165.2,startPosition:3},0).wait(1).to({x:-132.8,startPosition:4},0).wait(1).to({x:-100.4,startPosition:0},0).wait(1).to({x:-68.1,startPosition:1},0).wait(1).to({x:-35.7,startPosition:2},0).wait(1).to({x:-3.3,startPosition:3},0).wait(1).to({x:29.1,startPosition:4},0).wait(1).to({x:61.4,startPosition:0},0).wait(1).to({x:93.8,startPosition:1},0).wait(1).to({x:126.2,startPosition:2},0).wait(1).to({x:158.6,startPosition:3},0).wait(1).to({x:190.9,startPosition:4},0).wait(1).to({x:223.2,startPosition:0},0).wait(1).to({regX:1336,regY:301.1,x:295.9,y:876.4,mode:"single"},0).wait(1).to({regX:919,regY:284,x:223.2,y:873.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:1336,regY:301.1,x:295.9,y:876.4,mode:"synched"},0).wait(1).to({regX:919,regY:284,x:223.2,y:873.4,startPosition:1},0).wait(1).to({rotation:-3.1,y:877.4,startPosition:2},0).wait(1).to({rotation:-6.2,x:223.3,y:881.3,startPosition:3},0).wait(1).to({rotation:7.6,x:224.3,y:863.8,startPosition:4},0).wait(1).to({rotation:-15.5,x:225.1,y:892.9,startPosition:0},0).wait(1).to({rotation:5.7,x:223.9,y:866.3,startPosition:1},0).wait(1).to({rotation:-6.2,x:223.3,y:881.3,startPosition:2},0).wait(1).to({rotation:7.6,x:224.3,y:863.8,startPosition:3},0).wait(1).to({rotation:-15.5,x:225.1,y:892.9,startPosition:4},0).wait(1).to({rotation:5.7,x:223.9,y:866.3,startPosition:0},0).wait(1).to({rotation:-0.3,x:223.2,y:873.8,startPosition:1},0).wait(1).to({rotation:-6.2,x:223.3,y:881.3,startPosition:2},0).wait(1).to({rotation:7.6,x:224.3,y:863.8,startPosition:3},0).wait(1).to({regX:1324.8,regY:294.2,rotation:5.5,x:295.9,y:876.4,startPosition:0},0).wait(1).to({regX:919,regY:284,rotation:57.3,x:287.5,y:869.8,startPosition:1},0).wait(1).to({rotation:48.2,x:318.5,y:922.1,startPosition:2},0).wait(1).to({rotation:39.1,x:360.6,y:964.5,startPosition:3},0).wait(1).to({rotation:30,x:410.5,y:996.4,startPosition:4},0).wait(1).to({rotation:20.9,x:464.9,y:1019.2,startPosition:0},0).wait(1).to({rotation:11.8,x:522.3,y:1034.9,startPosition:1},0).wait(1).to({x:609.6,y:1047.6,startPosition:2},0).wait(1).to({x:696.9,y:1060.3,startPosition:3},0).wait(1).to({x:784.2,y:1072.9,startPosition:4},0).wait(1).to({x:871.5,y:1085.4,startPosition:0},0).wait(1).to({x:958.9,y:1097.9,startPosition:1},0).wait(1).to({x:1046.2,y:1110.4,startPosition:2},0).wait(1).to({x:1133.6,y:1122.8,startPosition:3},0).wait(1).to({x:1221,y:1135.1,startPosition:4},0).wait(1).to({x:1308.2,y:1147.3,startPosition:0},0).wait(1).to({x:1395.6,y:1159.5,startPosition:1},0).wait(1).to({x:1483.1,y:1171.6,startPosition:2},0).wait(1).to({x:1570.5,y:1183.6,startPosition:3},0).wait(1).to({x:1657.9,y:1195.4,startPosition:4},0).wait(1).to({x:1745.4,y:1207,startPosition:0},0).wait(1).to({x:1832.8,y:1218.4,startPosition:1},0).wait(1).to({x:1920.3,y:1229.3,startPosition:2},0).wait(1).to({x:2008,y:1239.6,startPosition:3},0).wait(1).to({x:2095.9,y:1247.3,startPosition:4},0).to({_off:true},1).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1942.7,277,1560.2,647);


// stage content:



(lib._20161004_CHOP_DiggingUpDinos_EndAnimations_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// steg
	this.instance = new lib.steg_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1691.2,608.9,0.87,0.87,0,0,0,1649.4,598.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(336));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(950.9,345.8,3313.6,1314.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;