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



(lib.tric_tail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AiDkAQAEgfgEgKQgFgKgXgPQgXgQgIADQgOADgGACQgKACAAAFQABAFACATQACASgFAHQgEAHACgkIACgqQgBgEgHgDQgKgEgFgEQgYgRgTACQgLACgGAIQgGAIAAAKQAAAMgIAcQgDAKgJgFQgKgFgEgQQgEgNAEgIQAHgJADgHQAFgKgGgSQgGgTgHABQgBAAgVgHQgPgFgEAMQgDAKAGAOQAGAMgHAKQgKAXgJAKQgQARgiAAQgJgBgJAKQgHAHgCAHQgBACAMAHQAOAIACAHQACAHgFAPQgDAKgIAXQgDANgEATQgDAQgDAKQgSA2AGAQQABADgCALQgBACAVADQAWADAOAFQAHADASAHQAMAFAFAJQAEAJAFAAQAGABAVgBQAUAAAGAEQAGADANALQAGAEAOALQAKAJASAIQATAJASABQAOABBZAtQBtA2BXA7QAFADAKAQQAJAPAFADQAEADAXAZQAYAaAEADQANAJAGAJQAGAIANALQAHAFAHANQAHANAGADQAGAEABAPQACAPAFADIATAMQAPAJApgYQAWgOAsgcQACgBgEgKQgCgEAEgEQADgCAJgGQASgMAogGQAVgDAWgDQASgIgKgVQgBgBgRgZQgqABgnAAQhMABAAgbQAAgEA0gNQA0gNgCgEQgRgcgGgIQgCgEhBAGQhCAFgCgEQgDgEA6gIQA6gIgDgFQgbghgFgJQgBgBhGgBQhEgCgLgYQgDgIArgGQArgGgFgHQglgpgIgMQgCgDgsAMQgrAKgQgXQgFgHAhgXQAggXgEgGQgEgFgYgWQgYgWgDgEQgHgLgeAMQgcAOAAgCQAAgSgGgVQgGgXgIgMQgPgTgTgVQgZgbgHACQgGADgEAMQgEAKAAAIQAAAEAEAQQADAPgFAHQgEAFABglQABgpgEgCQg1gjgKAAQgHAAgHAXQgDAIgBAHQgDALgBAK");
	this.shape.setTransform(-80.3,-53.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AD6GdIgTgMQgFgDgCgPQgBgPgGgEQgGgDgHgNQgHgNgHgFQgNgLgGgIQgGgJgNgJQgEgDgYgaQgXgZgEgDQgFgDgJgPQgKgQgFgDQhXg7htg2QhZgtgOgBQgSgBgTgJQgSgIgKgJIgUgPQgNgLgGgDQgGgEgUAAIgbAAQgFAAgEgJQgFgJgMgFIgZgKQgOgFgWgDQgVgDABgCQACgLgBgDQgGgQASg2QADgKADgQQAEgTADgNIALghQAFgPgCgHQgCgHgOgIQgMgHABgCQACgHAHgHQAJgKAJABQAiAAAQgRQAJgKAKgXQAHgKgGgMQgGgOADgKQAEgMAPAFIAWAHQAHgBAGATQAGASgFAKQgDAHgHAJQgEAIAEANQAEAQAKAFQAJAFADgKQAIgcAAgMQAAgKAGgIQAGgIALgCQATgCAYARQAFAEAKAEQAHADABAEIgCAqQgCAkAEgHQAFgHgCgSIgDgYQAAgFAKgCIAUgFQAIgDAXAQQAXAPAFAKQAEAKgEAfIgEAVIAEgVIAEgPQAHgXAHAAQAKAAA1AjQAEACgBApQgBAlAEgFQAFgHgDgPQgEgQAAgEQAAgIAEgKQAEgMAGgDQAHgCAZAbQATAVAPATQAIAMAGAXQAGAVAAASQAAACAcgOQAegMAHALQADAEAYAWQAYAWAEAFQAEAGggAXQghAXAFAHQAQAXArgKQAsgMACADQAIAMAlApQAFAHgrAGQgrAGADAIQALAYBEACQBGABABABQAFAJAbAhQADAFg6AIQg6AIADAEQACAEBCgFQBBgGACAEIAXAkQACAEg0ANQg0ANAAAEQAAAbBMgBIBRgBIASAaQAKAVgSAIIgrAGQgoAGgSAMIgMAIQgEAEACAEQAEAKgCABIhCAqQgeARgQAAQgGAAgEgCg");
	this.shape_1.setTransform(-80.3,-53.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgIgEQAEACAIACQAHACgCAH");
	this.shape_2.setTransform(0.8,37.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AgIgGIAMAFQAHABgCAHg");
	this.shape_3.setTransform(0.8,37.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgIgBQANAAgCAH");
	this.shape_4.setTransform(-3.8,34.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgFgDQAMAAgBAHg");
	this.shape_5.setTransform(-4.1,34.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAVgkQATgJAFACQAGAEgJAGQgLAGgCABQgPAIgDAMQgBACABAEQABACgBACQgCAFgGAHQgBACgCALQgBAJgEADQgGAFgFgDQgBgBgGgJIgFgGQgCgCgFgBIgHABQgCABgCgHQgDgMASgRQgDgFADgHIAEgKQAGAFAHAEQAJAEAFgBQAEgBAGgGQAHgHAEgCg");
	this.shape_6.setTransform(55,75.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AgQArIgHgKIgFgGQgCgCgFgBIgHABQgCABgCgHQgDgMASgRQgDgFADgHIAEgKQAGAFAHAEQAJAEAFgBQAEgBAGgGQAHgHAEgCQATgJAFACQAGAEgJAGIgNAHQgPAIgDAMIAAAGQABACgBACQgCAFgGAHIgDANQgBAJgEADQgEADgDAAIgEgBg");
	this.shape_7.setTransform(55,75.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgGgIQAAAGAEAEQACAGAFABIABgFQgCgBgBgDQgCgFgBAAIACgDg");
	this.shape_8.setTransform(69.7,85.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AgBADQgFgFABgGIAIAAIgCADIADAFQAAADACACIAAAEQgFAAgCgGg");
	this.shape_9.setTransform(69.6,85.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgGgEQAAACABAAQACAJAHACIgEgIQAAgDABgFg");
	this.shape_10.setTransform(65.8,84.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AgDgDQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIAHgEQgCAFACADIAEAIQgIgCgBgJg");
	this.shape_11.setTransform(65.6,85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAUghQAIACgHAUQgEALAAAMQACATgKADQgCAAgGgDQgFgCgEAAQgHACgCAAQgEABgCgIQgBgGAEgGQADgGAEgBQAAgDgDgCQgFgFgBgCQAEgCAEAAIAAgHQADADAGABQAFABADgDIAHgLQAGgJAEABg");
	this.shape_12.setTransform(72.1,81.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AABAfQgFgCgEAAIgJACQgEABgCgIQgBgGAEgGQADgGAEgBQAAgDgDgCIgGgHQAEgCAEAAIAAgHQADADAGABQAFABADgDIAHgLQAGgJAEABQAIACgHAUQgEALAAAMQACATgKADIgBAAQgCAAgFgDg");
	this.shape_13.setTransform(72.1,81.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAUgQQgIAIgCADIABAHIgDAMQAFAEgBAIQgCAHgFABQgCAAgEgDQgHgDgBgBQgGAAgDAAQgFgBgDgEQgBgCAHgMQAHgJgGgIQgCgCAKgCQALgCAAgCQADgDADgIQAEgFAFABQADAAAIADQAAAHgGAGg");
	this.shape_14.setTransform(67.8,80.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AgBAfIgIgEIgJAAQgFgBgCgEQgCgCAIgMQAHgJgHgIQgBgCAJgCQALgCAAgCQAEgDADgIQAEgFAFABQADAAAIADQgBAHgGAGIgKALIACAHIgEAMQAGAEgCAIQgBAHgGABIgGgDg");
	this.shape_15.setTransform(67.7,80.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgCgHQACADAAAFQAEAGADABQABgEgCgEQgBgDgBgDg");
	this.shape_16.setTransform(76.8,87.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AAAABIgEgIIAFABIADAGQABAEAAAEQgEgBgBgGg");
	this.shape_17.setTransform(77.1,87.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgHgKQABAHAEAFQACAGAGACQgGgSgFgBg");
	this.shape_18.setTransform(74.2,86.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AgBACQgEgEgBgHIACAAQAEACAHARQgGgBgCgHg");
	this.shape_19.setTransform(74.1,86.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAOAFQgFgGAIgIQAKgIgBgGQgHgIgLADQgEAHAAAFQgLgBgBAAQgFACgCAIQgBABABAGQAAACgBAEQgEAHgEAEQAFAGAJABQAFABAIAAQACAEAGAAQAEgIAAgBg");
	this.shape_20.setTransform(75.9,82.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AACAZIgNgBQgJgBgFgGQAEgEAEgHQABgDAAgDIAAgHQACgIAFgBIAMAAQAAgEAEgHQALgEAHAIQABAGgKAJQgIAHAFAHIABAPIgEAJQgGgBgCgEg");
	this.shape_21.setTransform(76,82.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgGgFQAAAFAFACQACAEAFABIAAgEQgCgBgBgCQgDgDAAAAIACgDg");
	this.shape_22.setTransform(82.4,87);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AgBACQgEgCgBgFIAIgBIgCADIADADQACACACABIAAAEQgFgBgDgEg");
	this.shape_23.setTransform(82.3,87);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgGgKQgDAHAGAGQAEAIAHAAQAAAAgEgJQgDgEACgGg");
	this.shape_24.setTransform(59.3,83.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("AgDADQgGgGADgHIAJACQgCAGADADIAEAKQgHgBgEgHg");
	this.shape_25.setTransform(59.3,83.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgHgNQAAAIAGAFQABADAIAIQABgEgEgHQgFgIABgDg");
	this.shape_26.setTransform(54.3,82.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF3BB").s().p("AgBACQgGgGAAgIIAIACQgBAEAFAGQAEAIgBAFIgJgLg");
	this.shape_27.setTransform(54.3,82);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgIgHQACAHAEAFQAEAKAFAAQAEgGgFgLQgEgNgEAAg");
	this.shape_28.setTransform(49.4,79.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF3BB").s().p("AgCAFQgEgFgCgHIAGgHQAEgBAEANQAFALgEAGQgFAAgEgKg");
	this.shape_29.setTransform(49.4,79.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgEgKQABAEAAALQABALAHAAQACgDgCgEQgDgFgBgCQAAgCABgFQACgGgBgDQAAgBgCAAg");
	this.shape_30.setTransform(44.5,76.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFF3BB").s().p("AgEAFQABgLgCgEIAFgFIADABQAAADgBAGQgCAFABACIADAHQACAEgBADQgIAAgBgLg");
	this.shape_31.setTransform(44.5,76.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgHgJQgBAGAGAKQAEANAGACQACgEgDgHQgEgKAAgBQgBgFABgDQAAgDADgGQgFgEgCAAg");
	this.shape_32.setTransform(39.7,74.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFF3BB").s().p("AgCAIQgGgLABgGIAGgMQACAAAFAEIgDAJIAAAIIAEALQADAHgCAEQgGgCgEgMg");
	this.shape_33.setTransform(39.7,74.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgGgUQgEAIAGAOQAEARAIADQACgEgDgIQgCgJAAgCQADgIABgEQABgHgIgCg");
	this.shape_34.setTransform(32.7,71.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFF3BB").s().p("AgEADQgGgOAEgJIAIgCQAIACgBAHIgEANQAAACACAJQADAIgCAEQgIgDgEgRg");
	this.shape_35.setTransform(32.7,71.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgHgTQgCANAFANQAEAQAJAAQABgEgEgIQgFgJAAgDQAAgCACgJQACgHgDgDg");
	this.shape_36.setTransform(27.8,69.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFF3BB").s().p("AgEAHQgFgNACgNIAJgDQADADgCAHIgCALQAAADAFAJQAEAIgBAEQgJAAgEgQg");
	this.shape_37.setTransform(27.8,69.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgbQgIAVAAANQABAVAPACQACgFgEgIQgEgJAAgEQAAgCAEgLQAEgLgEgDg");
	this.shape_38.setTransform(21.3,65);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFF3BB").s().p("AgIAGQAAgNAIgVIAGAEQAEADgEALIgEANQAAAEAEAJQAEAIgCAFQgPgCgBgVg");
	this.shape_39.setTransform(21.3,65.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAVgJQgDAJACAJQADAPgJACQgCABgGgCQgGgBgCAAQgGACgCABQgEAAgCgGQgBgEACgFQACgFAFgBQgBgDgDgDQgGgCgBgBQAEgCAEAAIgBgFQADACAGAAQAEABADgDQABAAAFgJQAFgHAEAAQAHABgFAQg");
	this.shape_40.setTransform(84,83.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFF3BB").s().p("AgSAVQgBgEACgFQADgFAEgBQAAgDgEgDIgGgDQADgCAEAAIgBgFQAEACAGAAQAEABADgDIAGgJQAEgHAEAAQAHABgEAQQgDAJABAJQADAPgIACQgDABgGgCIgHgBIgJADIAAAAQgEAAgCgGg");
	this.shape_41.setTransform(84.2,83.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAGgaQADAAAIgBQABAGgEAGQgFAIAAADIAEAFIAAAJQAGACAAAGQABAGgFACQgBAAgGAAQgHgBgBABQgEABgDAAQgFABgDgCQgCgBAEgLQADgKgIgEQgCAAAIgDQAKgFABgCQABgCAAgDQAAgEAAgBQACgFAEgBg");
	this.shape_42.setTransform(79.4,83.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFF3BB").s().p("AgPAaQgCgBAEgLQADgKgIgEQgCAAAIgDQAKgFABgCQABgCAAgDIAAgFQACgFAEgBIALgBQABAGgEAGQgFAIAAADIAEAFIAAAJQAGACAAAGQABAGgFACIgHAAIgIAAIgHABIgDABQgDAAgCgCg");
	this.shape_43.setTransform(79.4,83.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLgQQACAKALgHQALgGAGgIQAJgLAGABQAHACgJAPQgDAFgLALQgJAHgDAIQAAACgCALQgBAJgDADQgCADgFgCQgEgDABgGQgDgBgKACQgIABgFgEQADgMABgCQAIgJABgBQABgDgEgGQgDgHABgFQALACABAAg");
	this.shape_44.setTransform(64,80);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFF3BB").s().p("AgHAlQgEgDABgGQgDgBgKACQgIABgFgEIAEgOIAJgKQABgDgEgGQgDgHABgFIAMACIAFABQACAKALgHQALgGAGgIQAJgLAGABQAHACgJAPQgDAFgLALQgJAHgDAIIgCANQgBAJgDADQAAACgDAAIgEgBg");
	this.shape_45.setTransform(64,80);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAIAAQgDACgCANQgCANgBAEQgHAIgEgDQgGgGgFgCIgOAAQgHABAAgLQABgHAHgGQAIgGABgBIAGgRQAMAIAPgOQASgPALACQARAEgTAPQgYAPgCADg");
	this.shape_46.setTransform(59.7,77.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFF3BB").s().p("AgLAlQgGgGgFgCIgOAAQgHABAAgLQABgHAHgGQAIgGABgBIAGgRQAMAIAPgOQASgPALACQARAEgTAPQgYAPgCADQgDACgCANQgCANgBAEQgFAGgEAAIgCgBg");
	this.shape_47.setTransform(59.7,77.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgIgYQAJABALgHQARgLADgBQAKgEABAAQAGgBAAAHQAAAEgHAFQgJAEgCABQgHAGgGAOQgIAPgEAFIgBgBIgKAbQgDAIgIAAQgEgBgDgEQgEgFgCgBQgLgDgCgCQgHgFABgEQABgDAHgJQADgEAEgHQAFgFAGgCQAAgBgFgIQgFgHABgCQACgFAIACQAFABAIADg");
	this.shape_48.setTransform(50.4,72.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFF3BB").s().p("AgQAwQgEgBgDgEIgGgGIgNgFQgHgFABgEQABgDAHgJIAHgLQAFgFAGgCIgFgJQgFgHABgCQACgFAIACIANAEQAJABALgHIAUgMIALgEQAGgBAAAHQAAAEgHAFIgLAFQgHAGgGAOQgIAPgEAFIgBgBIgKAbQgCAIgIAAIgBAAg");
	this.shape_49.setTransform(50.4,72.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAhgsQARgCADAGQAEAHgPAKQgSAJgHAFQgJAHgDAKQgDAOgJAPQgLAQgDgMQgDgMgPgFQgOgGABAEQgDgOASgQQAQgQgHgNQAFgDAKAEQANAEABAAQAFgBALgFQAKgFAGgBg");
	this.shape_50.setTransform(45.6,70.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFF3BB").s().p("AgVApQgDgMgPgFQgOgGABAEQgDgOASgQQAQgQgHgNQAFgDAKAEQANAEABAAQAFgBALgFQAKgFAGgBQARgCADAGQAEAHgPAKQgSAJgHAFQgJAHgDAKQgDAOgJAPQgGAJgEAAQgDAAgBgFg");
	this.shape_51.setTransform(45.6,70.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAagiQgGABgbgKQgZgKgBAHIALAMQABAHACAIQAAAHgJAGQgEADgMABQgLABgEABQgHAHABAKQAAAJAHAFQADACAGABQAHABADABQACACAEAEQADAEACABQAPAJAJgTQAFgOACgTQABgHADgEQAEgDALgCQAFgBALAAQAJgBAGgDQAJgFADgFQAEgHgGgFQgHgHgLAEQgNAHgGABg");
	this.shape_52.setTransform(40.4,67.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFF3BB").s().p("AgcAvIgFgFIgGgGIgKgCQgGgBgDgCQgHgFAAgJQgBgKAHgHQAEgBALgBQAMgBAEgDQAJgGAAgHIgDgPIgLgMQABgHAZAKQAbAKAGgBQAGgBANgHQALgEAHAHQAGAFgEAHQgDAFgJAFQgGADgJABIgQABQgLACgEADQgDAEgBAHQgCATgFAOQgGANgJAAQgFAAgEgDg");
	this.shape_53.setTransform(40.4,67.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgeguQgGACAGAMQAGANgHAGQgCADgJABQgJACgDABQgDADgDADQgDAJgBABQgIAMAAADQABAFAPAFQACAAAIABQAGABAEACQADACADAFQACAEAEABQAGgIANgSQAKgRAJgIQAHgEATgIQASgHAHgHQAQgOgQgFQgOgEgPAHQgPAHgOgEQgQgIgNgE");
	this.shape_54.setTransform(35.2,63.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFF3BB").s().p("AgeAuQgDgFgDgBQgEgDgGgBIgKgBQgPgFgBgFQAAgDAIgMIAEgKQADgDADgDQADgBAJgCQAJgBACgCQAHgHgGgMQgGgMAGgDIAJgDIgCAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBQANAFAQAHQAOAEAPgHQAPgHAOAEQAQAFgQAOQgHAHgSAIQgTAHgHAEQgJAIgKARIgTAaQgEgBgCgEg");
	this.shape_55.setTransform(35.2,63.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Agng3QgHAFAIAJQAKAMAAAEQAAAGgIAGQgLAFgDADQgSANgFAKQgJAQATAJQAFACANAEQACABAEAHQAFAFACABQAJADANgZQAHgMAGgUQAJgMATgEQAhgIAJgMQALgNgRgDQgMgBgPADQgPAGgHACQgOADgHgGQgIgMgEgGQgIgMgKAHg");
	this.shape_56.setTransform(30.3,58.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFF3BB").s().p("AggA/QgCgBgFgFQgEgHgCgBIgSgGQgTgJAJgQQAFgKASgNQADgDALgFQAIgGAAgGQAAgEgKgMQgIgJAHgFIAGgEQAKgHAIAMIAMASQAHAGAOgDIAWgIQAPgDAMABQARADgLANQgJAMghAIQgTAEgJAMQgGAUgHAMQgMAWgIAAIgCAAg");
	this.shape_57.setTransform(30.3,58.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AghgvQgJAPAKAFQAAANgQAKQgSAKgDAKQgEAMAFADQADACALADQAHADADAIQAEAJADADQAIAHAHgIQAEgEAFgMQAGgOAAgDQgBgQABgCQADgGAIgBQANAAACAAQAFgBAGgHIALgMQAEgEAOgHQALgIABgIQADgQgOACQgIABgNAHQgLAIgGADQgLAHgHAAQgEgBgJgLQgIgKgIACg");
	this.shape_58.setTransform(24.4,55.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFF3BB").s().p("AglA7QgDgDgEgJQgDgIgHgDQgLgDgDgCQgFgDAEgMQADgKASgKQAQgKAAgNQgKgFAJgPIAIgIQAIgCAIAKQAJALAEABQAHAAALgHIARgLQANgHAIgBQAOgCgDAQQgBAIgLAIQgOAHgEAEIgLAMQgGAHgFABIgPAAQgIABgDAGQgBACABAQIgGARQgFAMgEAEQgDAEgEAAQgEAAgEgDg");
	this.shape_59.setTransform(24.4,55.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgQgfQgBAVAMAWQAKAaALgEQgCgFgFgLQgFgLgCgGQgCgagEgIg");
	this.shape_60.setTransform(16,62.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFF3BB").s().p("AgEAMQgMgXABgUIAMgCQADAIADAZIAHARIAHARIgDAAQgKAAgIgWg");
	this.shape_61.setTransform(15.9,62.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgFgrQgGAQAEAfQADAkAKAEQADgGgDgPQgEgSAAgEQAAgBAGgTQAEgOgGgFg");
	this.shape_62.setTransform(11.1,58.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFF3BB").s().p("AgHAEQgEgfAGgQIALAFQAGAFgEAOIgGAUIAEAWQADAPgDAGQgKgEgDgkg");
	this.shape_63.setTransform(11.1,58.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgjgiQgCACABADQABAEgBADQgBAFgDACQgDADgCADQgEAEgIAFQgJAEgEAEQgRARAOALQAIAFAPAIQAIAMAAAAQAEAEAJgGQAFgEAEgIQACgDAFgNQAEgLACgFQADgLAEgDQACgBAJgDQAIgDADgDQAIADAOgKQAIgFAOgKQAJgEACgCQAFgEgCgGQgBgFgHgFQgIgFgEAAQgKABgPAPQgQAPgKAAQgJABgLgMQgOgMgIgCQgEAEAAAGg");
	this.shape_64.setTransform(19.6,51.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFF3BB").s().p("AgqA9IgIgMQgPgIgIgFQgOgLARgRIANgIQAIgFAEgEIAFgGQADgCABgFQABgDgBgEQgBgDACgCIgCgMQAAgGAEgEQAIACAOAMQALAMAJgBQAKAAAQgPQAPgPAKgBQAEAAAIAFQAHAFABAFQACAGgFAEIgLAGIgWAPQgOAKgIgDQgDADgIADQgJADgCABQgEADgDALIgGAQIgHAQQgEAIgFAEQgGAEgDAAIgEgCg");
	this.shape_65.setTransform(19.6,51.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Agwg4QgEAHACAKQACALgCAFQgCAGgHAIQgJAIgDACQgRAUAEAIQACADALAFQAJAEgCAKQAPAeAZg1QACgEAGgNQAFgLAGgBQAEgBAJACQAJABAGgDQADgCAHgHQAFgFAGgDQAVgIAIgFQAUgPgMgLQgHgFgJAEQgEABgMAHQAAABgWAOQgOAKgIABQgLADgGgKQgFgNgDgHg");
	this.shape_66.setTransform(15.6,47.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFF3BB").s().p("AhAAzQACgKgJgEQgLgFgCgDQgEgIARgUIAMgKQAHgIACgGQACgFgCgLQgCgKAEgHIAcAEIAIAUQAGAKALgDQAIgBAOgKIAWgPIAQgIQAJgEAHAFQAMALgUAPQgIAFgVAIQgGADgFAFIgKAJQgGADgJgBQgJgCgEABQgGABgFALIgIARQgPAigMAAQgHAAgGgLg");
	this.shape_67.setTransform(15.6,47.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgFghQgKAAgGgHQgCgCgDgGQgDgGgCgCQgEgFgDgDQgEgDgIADQgHADADAHQABADADADQAAADADAMQABALgFAGQgDADgKAEQgLADgDAFQgPAVAAAIQABAGAHAFQAEACAIAFQAEAEAGAKQAFAIAHgCQAHgBAFgKQACgEAFgNQAEgLADgGQAEgKAFgEQAHgFAHACQAIADAFgCQAEgBAFgFQAGgHAEgCQAHgEASgBQAPgEAIgGQALgHAEgPQgJgFgKADQgCAAgSAGQgJADghAFQgMADgFgBg");
	this.shape_68.setTransform(10.6,42.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFF3BB").s().p("Ag/A8QgGgKgEgEIgMgHQgHgFAAgGQgBgIAQgVQADgFAKgDQALgEADgDQAFgGgCgLIgDgPQgDgDgBgDQgDgHAIgDQAHgDAFADIAGAIQADACACAGIAFAIQAGAHAKAAQAFABAMgDQAhgFAKgDIATgGQALgDAIAFQgEAPgKAHQgIAGgQAEQgRABgIAEQgEACgFAHQgFAFgFABQgFACgHgDQgIgCgGAFQgGAEgEAKIgGARIgHARQgGAKgGABIgDABQgFAAgFgHg");
	this.shape_69.setTransform(10.6,42.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAEgHQgCABgCAFQgFAEACACQADAHACgIQAEgFgCgGg");
	this.shape_70.setTransform(126.9,94);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFF3BB").s().p("AgEAFQgBgCAFgEQACgFACgBIABABQABAFgEAFQgCAEAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBgBgBg");
	this.shape_71.setTransform(127,94);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAABQgCABgBACQADACABgBQACgCABgDIgEgBg");
	this.shape_72.setTransform(124.8,94);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFF3BB").s().p("AgDACQABgCACAAIAAgDIAEACQgBACgCACIgBABIgDgCg");
	this.shape_73.setTransform(124.8,94.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgDQgBADABAHQACAHAGgDQAHgDgGgIQgHgFgDgCg");
	this.shape_74.setTransform(125.1,92.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFF3BB").s().p("AgDAFQgDgGADgEIgDgEQAFACAFAHQAGAGgHADIgDABQgBAAgCgFg");
	this.shape_75.setTransform(125.6,92.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AACABQgDgBgEAAQgBAMALgGQANgFgUgEg");
	this.shape_76.setTransform(128.9,93.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFF3BB").s().p("AgHAAQAEgCADACIgEgFQAUAFgNAEIgFACQgFAAAAgGg");
	this.shape_77.setTransform(129.1,94);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLguQAAAKAKApQABAGADAWQAFASADADQACgKgEgUQgEgYAAgFQABgWAAgIQgBgOgHgGg");
	this.shape_78.setTransform(0.3,51.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFF3BB").s().p("AADAiIgEgcQgKgoAAgLIAJgJQAHAGABAOIgBAeQAAAFAEAYQAEAUgCAKQgDgDgFgSg");
	this.shape_79.setTransform(0.3,51.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhKgIQgIAEgEAEQgEAFgLAZQgFAMADADQACADANACQANACAEACQABABAFAGQAEAEAEAAQAHgBAEgKQAEgNACgEQAFgQAIgOQAMgSAKgCQAFAAAJABQAIABAIgCQAJgDAUgFQAHgCAVgIQAFgCAMgEQAIgEgDgHQgGgMgXAFQgYAIgHABQgrAIgXgJQgCgBgRgJQgNgHgHABIAHAUQAAAFABAJQgBAIgGAFQgDACgLAGg");
	this.shape_80.setTransform(5.4,37.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFF3BB").s().p("AhBA9IgGgHQgEgCgNgCQgNgCgCgDQgDgDAFgMQALgZAEgFQAEgEAIgEIAOgIQAGgFABgIIgBgOIgHgUQAHgBANAHIATAKQAXAJArgIIAfgJQAXgFAGAMQADAHgIAEIgRAGIgcAKIgdAIQgIACgIgBQgJgBgFAAQgKACgMASQgIAOgFAQIgGARQgEAKgHABQgEAAgEgEg");
	this.shape_81.setTransform(5.4,37.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgCQgDACAAACIADABIABgBIACgCg");
	this.shape_82.setTransform(122.6,93.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFF3BB").s().p("AgDACIADgEIAEACIgCACIgCABg");
	this.shape_83.setTransform(122.5,93.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgCgCQgEAIAGgBQAIgCgHgGg");
	this.shape_84.setTransform(119.8,91.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFF3BB").s().p("AgCgCIADgCQAHAHgIABIAAABQgGAAAEgHg");
	this.shape_85.setTransform(119.8,92);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgBgDQgDACgCAEQAFAGADgEQAEgDABgFIgCgCg");
	this.shape_86.setTransform(117.4,89.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFF3BB").s().p("AgGADQACgEADgCIAGgCIACACQgBAFgFADQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQgDAAgDgDg");
	this.shape_87.setTransform(117.5,89.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgBgCQAAABAAABQAAACgBACQADADADgFQACgDgFgDg");
	this.shape_88.setTransform(114.7,88.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFF3BB").s().p("AgDAEIABgEIAAgCIACgCQAFADgCADQgCADgBAAIgDgBg");
	this.shape_89.setTransform(114.8,88.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgDgDQgEAGAHADQAIACgEgMg");
	this.shape_90.setTransform(111.9,90);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFF3BB").s().p("AAAAFQgHgCAEgHIAHgBQAEALgGAAIgCgBg");
	this.shape_91.setTransform(111.9,90);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgBgFQAAAFABABIAAADIABABQACgEAAgFg");
	this.shape_92.setTransform(107.8,88.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFF3BB").s().p("AAAAEIAAgDQgBgBAAgEIADAAQAAAGgCADg");
	this.shape_93.setTransform(107.8,88.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgHQgHALAJAEQADgDgCgFQgDgEAAgDg");
	this.shape_94.setTransform(106.6,88.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFF3BB").s().p("AAAgHIAAAAIADAHQACAFgDADQgJgEAHgLg");
	this.shape_95.setTransform(106.6,88.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAADQALADgJgJIgEABQgIADAKACg");
	this.shape_96.setTransform(100.5,87.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFF3BB").s().p("AAAADQgKgCAIgDIAEgBQAHAHgGAAIgDgBg");
	this.shape_97.setTransform(100.5,87.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgFgDQAIAKAHgBQABgEgDgCQgFgDgCgCg");
	this.shape_98.setTransform(97.4,87.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFF3BB").s().p("AgHgDIAHgCIAGAFQADACgBAEIgBAAQgHAAgHgJg");
	this.shape_99.setTransform(97.6,87.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgFgCQAFAIAHABQACgFgGgHg");
	this.shape_100.setTransform(93.8,87.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFF3BB").s().p("AgGgDIAIgCQAGAHgCAEQgHAAgFgJg");
	this.shape_101.setTransform(93.9,87.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgCgFQACACABAEQADAEAEABQAAgDgCgDQgCgCgBgCg");
	this.shape_102.setTransform(89.2,87.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFF3BB").s().p("AAAABIgEgGIAFABIADAEQACADgBADQgDgBgCgEg");
	this.shape_103.setTransform(89.4,87.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgIgHQACAGAEACQADAFAFABQgDgGgCgBQgCgGgEgBg");
	this.shape_104.setTransform(86.7,87.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFF3BB").s().p("AAAACQgFgDgBgFIACAAQAEAAACAGIAGAHQgGAAgCgFg");
	this.shape_105.setTransform(86.6,87.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAMgOQgDgEgIAAIgHAFQgCAAgGABQgBAFAEACQAHACABAAQADADAAAAQgDADgBABQgCAIAEAEQACAEAGgGQADAFAFAAQACgEAAgHQgBgIAAgCQgBgJgCgDg");
	this.shape_106.setTransform(95.1,84.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFF3BB").s().p("AAGAOQgGAGgCgEQgEgEACgIIAEgEQAAAAgDgDIgIgCQgEgCABgFIAIgBIAHgFQAIAAADAEQACADABAJIABAKQAAAHgCAEQgFAAgDgFg");
	this.shape_107.setTransform(95.1,84.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgNgGQAAACAAAEQABACAEABQgMAFAKAOQADAAAJgBQAKAAADgCQAGgDgDgFQgEgGAAgCQAAgDAAgBQAAgDgGgCQgJgEgJABIgBAHg");
	this.shape_108.setTransform(109.2,86.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFF3BB").s().p("AgJgBQgEgBgBgEIgBgGIACAEIACgHQAIgBAJAEQAHACAAADIgBAGQABABAEAFQACAFgGADQgCACgKAAIgMABQgLgOANgDg");
	this.shape_109.setTransform(109.4,86.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAEgIQgEABgDABQgGACgBAEQgBADADAEQADAEAFAAQAAAGAEgCQAFgBADgGQAIgOgUgFg");
	this.shape_110.setTransform(116.2,88.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFF3BB").s().p("AgBAJQgFAAgDgEQgDgEABgCQABgFAGgCIAHgCIgDgDQASAFgIAOQgCAGgFABIgCABQgBAAgBgFg");
	this.shape_111.setTransform(116.3,88.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgJQAAAIgJgDQgEAEAHAHQAGAGAFgCQAJgEgDgHQgCgEgHgFg");
	this.shape_112.setTransform(121.4,91.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFF3BB").s().p("AgGAHQgHgHAEgEQAJADAAgJIACABQAHAEACAFQADAGgJAEIgEABQgDAAgEgEg");
	this.shape_113.setTransform(121.4,91.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AADgHQgGACACAFQABAIAAADQAHAFADgLQACgKgKgCg");
	this.shape_114.setTransform(123.6,92.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFF3BB").s().p("AgEAJQACgDgDgGQgCgHAHgCIAAAAQAIACgCAKQgCAHgEAAIgEgBg");
	this.shape_115.setTransform(124,92.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AACgFQgLgFAFAKQACAHADAHQABABADABQAJgJgCgHQgDgGgKgEg");
	this.shape_116.setTransform(119.1,89.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFF3BB").s().p("AAAAMIgHgMQgFgNAMAGIgDgFQAKAEACAHQACAFgJAJIgCgBg");
	this.shape_117.setTransform(119.3,89.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAOgLQgEgFgKgBIgNABIABAEQACACAAAHQABAGABADQADAEAFABQAHABADACQACgEACgKQABgIgBgDg");
	this.shape_118.setTransform(113.1,87.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFF3BB").s().p("AAAAMQgFAAgDgEQgCgDAAgGQAAgHgDgDIAAgDIANgBQAKAAADAGQACADgCAIIgEAOQgCgDgHgBg");
	this.shape_119.setTransform(113.2,87.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAMgGQAAADABACQABABACADQABADAAADQgCAMgFgCQgBAAgLAAQgKgBAAgDQgBgLAIgFQACgCgCAAQgEAAABgEQAAgFABgBQACgBAEgCQABgBgBgBIAEgBQAKAAAAAGQAAABgBAGg");
	this.shape_120.setTransform(104.9,85.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFF3BB").s().p("AAIATIgMAAQgKgBAAgDQgBgLAIgFQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQgEAAABgEIABgGIAGgDQABAAABAAQAAgBAAAAQAAAAAAAAQgBAAgBgBIAEgBQAKAAAAAGIgBAHQAAADABACIADAEQABADAAADQgBALgEAAIgCgBg");
	this.shape_121.setTransform(105.1,85.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgHgMQABAAADgFQACgEACABQAGACABABQABABAAAEQAAABgBAJQgBAEACABQAGAIgCAFQgBACgEgBQgFgCgCABQgBAAgCADQgCADgDgBQgFAAgBgDQAAgBABgGQAEgIABgDQACgFgEgCQgHgDAJgCg");
	this.shape_122.setTransform(102.1,84.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFF3BB").s().p("AgHAVQgFAAgBgDIABgHIAFgLQACgFgEgCQgHgDAJgCQABAAADgFQACgEACABQAGACABABIABAFIgBAKQgBAEACABQAGAIgCAFQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAgBAAQgFgCgCABQgBAAgCADQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgBAAg");
	this.shape_123.setTransform(102.1,84.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMgNQgCABAAgCQAOgDABgBQAMgBADAGQACAFgDAKQgDALgEAEQgDgCgGAAQgHABgDgEQgBgEACgGQACgEAAgEg");
	this.shape_124.setTransform(98.7,84.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFF3BB").s().p("AgCAQQgHABgDgEQgBgEACgGQACgEAAgEIgEgHQAAAAAAAAQgBABAAgBQAAAAgBAAQAAAAAAgBIAPgEQAMgBADAGQACAFgDAKQgDALgEAEQgDgCgGAAg");
	this.shape_125.setTransform(98.8,84.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgHgBQAAABgGgHQAFgBAJgIQAIgHAHABQAEAIgFAFIAEALQAAAEAAAIQAAAGgFACQgBABgJAAQgIAAgBAAQgHgCAAgEQAAgCACgKQADgEAAgCg");
	this.shape_126.setTransform(91.8,84.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFF3BB").s().p("AgIAXQgGgCgBgEIACgMQAEgEAAgCQAAABgHgHQAFgBALgIQAHgHAHABQAEAIgFAFIADALIABAMQAAAGgFACIgLABIgGAAIgDAAg");
	this.shape_127.setTransform(92.1,84.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AACgMQgKABAAAAQgGABgBAHIABADQABAEgBADQgBAEgFAFQAFAFAIAAQAFAAAIgBQACADAFAAQADgFAAgCIgCgMQgGgEAIgGQAIgIgBgEQgIgGgKADQgDAGAAADg");
	this.shape_128.setTransform(87.9,84);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFF3BB").s().p("AAFAUIgNABQgIAAgFgFQAFgFABgEQABgDgBgEIgBgDQABgHAGgBIAKgBQAAgDADgGQAKgDAIAGQABAEgIAIQgIAGAGAEIACAMIgDAHQgFAAgCgDg");
	this.shape_129.setTransform(88,84);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMguQgBAUAJAkQAHApAKgDQACgIgFgQQgHgVgBgDQAAgCABgYQABgTgDgCg");
	this.shape_130.setTransform(5.9,55.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFF3BB").s().p("AgEAKQgJgkABgUIANgBQADACgBATIgBAaIAIAYQAFAQgCAIIgCAAQgIAAgHgmg");
	this.shape_131.setTransform(5.9,55.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAMgpQgOADgJgCQgKgCgOgJQgHgGgEgDQgJgHgFACQgNAFAUARIAFAPQgGAOgNAJQgXAPgBABQgSAQADAIQACAGALACQANACACABQgBAFADACIgBAEQALAPAIgIQAEgFAMgUIAOgUQAEgHAFgPQAJACAGgFQAEgDAFgHQAGgDAIAAQAFAAAKAAQAJAAAXAAQAUgBALgFQASgHgPgMQgQgMgOACQgMACgRAEQgTAFgKACg");
	this.shape_132.setTransform(0.4,32.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFF3BB").s().p("AhNA5IABgEQgDgCABgFIgPgDQgLgCgCgGQgDgIASgQIAYgQQANgJAGgOIgFgPQgUgRANgFQAFgCAJAHIALAJQAOAJAKACQAJACAOgDIAdgHQARgEAMgCQAOgCAQAMQAPAMgSAHQgLAFgUABIggAAIgPAAQgIAAgGADIgJAKQgGAFgJgCQgFAPgEAHIgOAUQgMAUgEAFQgDADgDAAQgGAAgHgKg");
	this.shape_133.setTransform(0.4,32.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA7hGQgLABgaAEQgHABgFALQgEAJgGgDQgEgCgKgPQgIgNgMABQgLACADASQABAKAEAPIgaAHQgDADgJAJQgIAIgDAEQgFAKgDAFQgFAJgHABQgGAOADACQACACAPAFQAFAEAEAKQAFAKAFAEQANgBASgUQANgNALgRQACgEACgIQABgFAGgCQAHgCAFgGQAEgEAHgKQAGACATgCQAGgBAJgHQAJgIAFgBQARgBARgNQARgPgZgGQgOgDgXABg");
	this.shape_134.setTransform(-5.1,27.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFF3BB").s().p("AhTA+QgEgKgFgDQgPgFgCgCQgDgCAGgOQAHgCAFgJIAIgPQADgEAIgHIAMgNIAagHIgFgZQgDgSALgBQAMgCAIANQAKAPAEACQAGADAEgJQAFgLAHgBIAlgEQAXgCAOAEQAZAGgRAOQgRAOgRABQgFAAgJAIQgJAIgGAAQgTACgGgCIgLAPQgFAGgHACQgGACgBAFIgEALQgLARgNAOQgSATgNACQgFgEgFgLg");
	this.shape_135.setTransform(-5.1,27.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgIg4QgBAMACATQACALACASQACAJABAVQAAASAGAHQADgGgBgZQgCgaAAgEQADgXAAgLQACgUgIgGg");
	this.shape_136.setTransform(-5.8,48.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFF3BB").s().p("AAAAkIgDgeIgEgdQgCgTABgMIALgGQAIAGgCAUIgDAiIACAeQABAZgDAGQgGgHAAgSg");
	this.shape_137.setTransform(-5.8,48.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgFg8QgIAOgBATQgBAFAAAZQACAuAKAJQADgEgBgKQAAgKAAgEQAAgZABgFQAAgFAIgUQAIgQgBgKQgCgFgGgEg");
	this.shape_138.setTransform(-11.8,42.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFF3BB").s().p("AgPAEIABgeQABgTAIgNIAMAAQAGAEACAEQABALgIAPQgIAUAAAFQgBAFAAAZIAAAOQABALgDAEQgKgJgCgvg");
	this.shape_139.setTransform(-11.8,42.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AACg7QgNgCgCAKQgBAFAAAKQgDAFADAEQAFAGAAAEQAAAGgBAYQgBAUACAMQABAKACADQAEAFADgIQAEgGgBgKQgCgMgBgEQgCgfAKgaQAFgHACgDQADgGgHgCQAEgBAAgBQABgDgPgCg");
	this.shape_140.setTransform(-18.1,37.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFF3BB").s().p("AgGA6QgCgDgBgKQgCgMABgUIABgeQAAgEgFgGQgDgEADgFIABgPQACgKANACQAPACgBADQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAHACgDAGIgHAKQgKAaACAfIADAQQABAKgEAGQgBAFgDAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_141.setTransform(-18.1,37.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgFg8QgHAKABARQACAoAAAFQgBAWABAHQACAQAIAHQAEgHgBgKQgBgMAAgGQACgbABgLQgBgMABgFQAAgJACgIQAFgNgBgFQAAgIgLAFg");
	this.shape_142.setTransform(-23.6,31.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFF3BB").s().p("AgJArQgBgIABgWIgCgtQgBgQAHgKIAGgFQALgEAAAHQABAFgFANQgCAJAAAIIAAARIgDAmIABASQABAKgEAIQgIgHgCgQg");
	this.shape_143.setTransform(-23.6,31.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAGgbQAEgSgIgBIgJADQgHAYADAYQAEAgASAIQADgFgEgHQgGgJgBgEQgDgLAAgMQADgPADgJg");
	this.shape_144.setTransform(-41.8,10.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFF3BB").s().p("AgLAGQgDgYAHgZIAJgCQAIAAgEATIgGAYQAAAMADALIAHANQAEAHgDAFQgSgIgEggg");
	this.shape_145.setTransform(-41.8,10.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgJAAQACALACAXQABAFACALQACAKADAEQAGgMgCgXQgFgaAAgHQgBgTAEgLQAGgLACgGQAEgKgIgDIgJgBQgPAGABAYQABANAEAWg");
	this.shape_146.setTransform(-30.2,24.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFF3BB").s().p("AgCA0IgDgQIgEgkQgEgVgBgNQgBgYAPgGIAJACQAIACgEAKIgIASQgEALABASQAAAIAFAZQACAXgGAMQgDgEgCgJg");
	this.shape_147.setTransform(-30.2,24.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAhBQgOAGABAYQAAANAFAWQACAdABAFQABAFADALQABAKAEAEQAGgMgDgXQgEgagBgHQgBgTAEgLQAGgLACgGQAEgKgHgDg");
	this.shape_148.setTransform(-36.8,19.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFF3BB").s().p("AgBAzIgEgPIgDgkQgFgVAAgNQgBgYAOgGIAKABQAHADgEALIgIARQgEALABASQABAIAEAZQADAXgGAMQgEgDgBgLg");
	this.shape_149.setTransform(-36.8,19.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAEg7QgGgBgHgHQABgIgHAAQgHAAgIALIgFAXQAAAIgQAGQgUAGgCACQgDADgSAXQgIAKgCAEQgDAGAFAFQADADAFADQACADgCAJQACADAKALQALALADABQAXgSAQgmQAFgJADgCQACgCAJgCQALgDAJgDQAJgFAGgQQAGgOAJAAQAFAAAgAAQAegDgBgNQAAgIgXgFQgUgFgIADQgLAFgUACQgNACgHgBg");
	this.shape_150.setTransform(-10.3,22.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFF3BB").s().p("AhSBAIgMgNQACgKgCgDIgIgGQgFgFADgGIAKgOIAVgaQACgCAUgGQAQgGAAgHIAFgYQAIgLAHAAQAHAAgBAJQAHAGAGACQAHAAANgCQAUgCALgEQAIgEAUAFQAXAFAAAIQABANgeADIglAAQgJABgGANQgGAQgJAFQgJAEgLADQgJACgCABQgDACgFAKQgQAlgXASQgDAAgLgMg");
	this.shape_151.setTransform(-10.3,22.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgxA6QAKgOACgBQAEgFAPgCQANgDAEgGQACgGgFgVQgFgRAJAEQAFACADgEQAEgGAEgBQAcgIAFAAQAfABAXAHQAZAIgNgWQgOgWgPAAQgNAAAAgBQABgBgMgBQgDgBgaAFQgYAFgGgEQgDgDgHgCQgEgBgGgHIgGgBQgHAAgDADQgFAEADAHIABAaQgFAHgbAGQgYAGgBALQgBADgMAHQgNAHgBAGQAAAHAGAGQAEADAIAGQAHAJAJANQAJAIAMgFQAHgDAHgJg");
	this.shape_152.setTransform(-16.1,15.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFF3BB").s().p("AhUBDIgQgWIgMgJQgGgGAAgHQABgGANgHQAMgHABgDQABgLAYgGQAbgGAFgHIgBgaQgDgHAFgEQADgDAHAAIAGABQAGAHAEABIAKAFQAGAEAYgFQAagFADABQAMABgBABIANABQAPAAAOAWQANAWgZgIQgXgHgfgBQgFAAgcAIQgEABgEAGQgDAEgFgCQgJgEAFARQAFAVgCAGQgEAGgNADQgPACgEAFIgMAPQgHAJgHADQgFABgEAAQgHAAgFgEg");
	this.shape_153.setTransform(-16.1,15.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AARg5QgWAFgHgEQgKgBgMgMIgFgBQgHAAgEADQgEAEACAHIABAaQgFAHgbAGQgXAGgCALQAAADgNAHQgMAHgBAGQgBAHAHAGQAEADAHAGQAHAJAKANQAIAIAMgFQAHgDAIgJQAKgOABgBQAFgFAOgCQANgDAEgGQAFgGgHgVQgGgRAKAEQAGACADgEQAFgGACgBQAegIADAAQADAAAlgDQAggCAKACQAYAIgFgWQgFgWgQAAQgLAAgXAFQgUAEgNgBQgDgBgaAFg");
	this.shape_154.setTransform(-21,10.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFF3BB").s().p("AhkBDIgRgWIgLgJQgHgGABgHQABgGAMgHQANgHAAgDQACgLAXgGQAbgGAFgHIgBgaQgCgHAEgEQAEgDAHAAIAFABQAMAMAKABQAHAEAWgFQAagFADABQANABAUgEQAXgFALAAQAQAAAFAWQAFAWgYgIQgKgCggACIgoADQgDAAgeAIQgCABgFAGQgDAEgGgCQgKgEAGARQAHAVgFAGQgEAGgNADQgOACgFAFIgLAPQgIAJgHADQgEABgFAAQgGAAgFgEg");
	this.shape_155.setTransform(-21,10.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABPg/QgUAEgNgCQgPgBgLgBQgUgDgFgEQgHgEgIAGQgIAGgGgGIgFgCQgSABAFAOIgEALQgEAEgaAQQgUANgCALQAAADgNAHQgMAHgBAHQgBAGAHAGQAEAEAHAGQAHAIAKANQAIAIAMgEQAHgDAIgKQAJgNACgCQAGgGAGgIQADgFAGgKQAEgFABgPQABgKALADQAGADADgFQAFgGACgBQAcgHAFAAQADAAAlgDQAggDAKADQAYAHgFgVQgFgWgQAAQgLAAgXAFg");
	this.shape_156.setTransform(-26.9,4.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFF3BB").s().p("AhkBDIgRgVIgLgKQgHgGABgGQABgHAMgHQANgHAAgDQACgLAUgNQAagQAEgEIAEgLQgFgOASgBIAFACQAGAGAIgGQAIgGAHAEQAFAEAUADIAaACQANACAUgEQAXgFALAAQAQAAAFAWQAFAVgYgHQgKgDggADIgoADQgFAAgcAHQgCABgFAGQgDAFgGgDQgLgDgBAKQgBAPgEAFIgJAPQgGAIgGAGIgLAPQgIAKgHADQgEABgEAAQgHAAgFgFg");
	this.shape_157.setTransform(-26.9,4.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AB7gzQgQgHgTgBQgLgBgZACQgGAAgPgEQgTgFgMgBQgCAAgNgGQgKgFgMADQgJACgCANIgCATQgDAIgNADQgOADgFAFIgpAxQgDgBgEAFQAEAHAMAHQALAHAFAJQABACAAAIQAAAGAGACQAFACANgMQAOgIAcgaQAggdAIgGQArgFgBgBQA6gIAVACQAIABAAgRQgBgRgLgFg");
	this.shape_158.setTransform(-32.8,-3.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFF3BB").s().p("AhfBOQgGgCAAgGQAAgIgBgCQgEgJgMgHQgMgHgEgHQAEgFADABIAqgxQAEgFAPgDQAMgDAEgIIACgTQABgNAJgCQAMgDALAFIAOAGQAMABATAFQAPAEAHAAQAZgCALABQASABARAHQALAFAAARQABARgIgBQgWgCg6AIIgpAGQgIAGggAdQgcAagOAIQgLAKgGAAIgCAAg");
	this.shape_159.setTransform(-32.7,-3.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ah6AaQgEAAgDAEQAFAIANAIQANAIAFAJQABACABAJQABAGAGADQAEABAGgFQAEgCAFgFQAOgIAbgbQAdgfAKgGQAZgBgEgNQgEgMAJgBQAMgBAcgEQAagCAQACQAJACgCgSQgCgTgMgFQgSgIgUgCQgLgBgaABQgDAAgLAIQgKAGgRgDQAAAAgOgHQgLgFgMACQgKACAAAOIgBAVQgDAIgMADQgPADgFAFg");
	this.shape_160.setTransform(-38.3,-10);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFF3BB").s().p("AhUBTQgHgDgBgGQAAgJgBgCQgGgJgMgIQgNgIgFgIQACgEAEAAIAogzQAEgFAPgDQANgDADgIIABgVQAAgOAJgCQAMgCAMAFIAOAHQARADAJgGQALgIADAAQAagBAMABQATACASAIQANAFACATQACASgJgCQgRgCgZACIgpAFQgIABAEAMQADANgZABQgJAGgdAfQgcAbgOAIIgIAHQgFAEgDAAIgCAAg");
	this.shape_161.setTransform(-38.2,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.9,-95.8,261.9,191.6);


(lib.tric_shoulder_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AneCAQgRgTgGABQgMACAZAtQAIAOArA2QAwA7ARAMQAKAGAdAfQAYAaAOADQAFACAXAVQAdAbAZAQQBaA7B7gRQDRgcCQhIQAegOgOgOQgNgNgQAHQg/AehHAaQiIAwhAgFQh7gMhEgoQgSgKACgCQAIgEgBgJQgBgGgOgSQgKgOAKgNQAOgUAHgHQALgLASgHQAOgFgCgZQgCgbALgGQAagOA7AAQAVAAACgBQABAAAGgLQAGgJAHgaQAHgdADgLQAFgaAcgsQAjg3AkgYQAVgOBahLQBQhCAggQQBIglA9gUQAZgJAFgDQAIgFADgKQAFgSAAgVQgBgegQgNQgpgigOgKQgngfgSgGQgSgGgHAEQgJAJgLAIQgcAUg3A5QhkBrgSARQgbAZgTASQglAggXANQAwglAnglQAqgmAJgSQAIgPgYAMQgkAUgTAJQgRAIgjAUQgiAUgdAPQgtAWgcAJQghALgmAFQgJABgtgEQgmgDgMAGQgQAIg3ApQg4ArgOAOQgcAZgPARQgcAfgBAeQAAA1ABAHQABAJAEAJQAIAJAKANQAmAwghgjQgQgRgHgSg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AjVGsQgZgQgdgbQgXgVgFgCQgOgDgYgaQgdgfgKgGQgRgMgwg7Qgrg2gIgOQgZgtAMgCQAGgBARATQAHASAQARQAgAigigsIgBgBIgCgCIgSgWQgEgJgBgJQgBgHAAg1QABgeAcgfQAPgRAcgZQAOgOA4grQA3gpAQgIQAMgGAmADQAtAEAJgBQAmgFAhgLQAcgJAtgWQAdgPAigUQAjgUARgIQATgJAkgUQAYgMgIAPQgJASgqAmQgnAlgwAlQAXgNAlggIAugrQASgRBkhrQA3g5AcgUQALgIAJgJQAHgEASAGQASAGAnAfQAOAKApAiQAQANABAeQAAAVgFASQgDAKgIAFQgFADgZAJQg9AUhIAlQggAQhQBCQhaBLgVAOQgkAYgjA3QgcAsgFAaIgKAoQgHAagGAJQgGALgBAAQgCABgVAAQg7AAgaAOQgLAGACAbQACAZgOAFQgSAHgLALQgHAHgOAUQgKANAKAOQAOASABAGQABAJgIAEQgCACASAKQBEAoB7AMQBAAFCIgwQBHgaA/geQAQgHANANQAOAOgeAOQiQBIjRAcQgbAEgZAAQhbAAhGgugAnHCjQgQgRgHgSIASAWIACACIABABQATAZgCAAQgBAAgOgPgAneCAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.8,-48.4,103.4,96.9);


(lib.tric_ribs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgXALQgBAFALgCQAHgBAGgEQAEgBAKgDQAJgDABgFQABgSgVAMQgPAJgCAAQgJAGgBAFg");
	this.shape.setTransform(11.6,51.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AgXALQABgFAJgGIARgJQAVgMgBASQgBAFgJADIgOAEQgGAEgHABIgFABQgGAAABgEg");
	this.shape_1.setTransform(11.6,51.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgbAOQAXAFALgJQAEgDALgHQAJgIgEgEQgHgGgXAHQgJADgIAHQgJAGACAJg");
	this.shape_2.setTransform(6.8,52.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AgbAOQgCgJAJgGQAIgHAJgDQAXgHAHAGQAEAEgJAIIgPAKQgHAGgMAAQgHAAgIgCg");
	this.shape_3.setTransform(6.8,52.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgXALQAGAGATgGQAWgHACgHQADgKgOABQgNAAgIAHQgLAFgFABQgHAFAGAFg");
	this.shape_4.setTransform(1.7,51.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgXALQgGgFAHgFIAQgGQAIgHANAAQAOgBgDAKQgCAHgWAHQgIADgHAAQgHAAgDgDg");
	this.shape_5.setTransform(1.7,51.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAKAAQgOAIgtANQgVAHgLADQgXADgHAEIgDAMQA7gMBBgbQATgIAogNQAWgJAHgDQAUgKgBgKQAAgPgXALQgGADgXAOQgVAOgiAPg");
	this.shape_6.setTransform(-11.9,54);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AhwAnQAHgEAXgDIAggKQAtgNAOgIQAigPAVgOQAXgOAGgDQAXgLAAAPQABAKgUAKIgdAMIg7AVQhBAbg7AMg");
	this.shape_7.setTransform(-11.8,53.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAogcQgrAhgVANQgKAHglAMQgeALgDAHQgDAIANgCQAGAAAHgDQAYgMA0gZQAsgVAbgTQAZgSAFgEQASgQgPgDQgOgCgSANQgUAQgHAFg");
	this.shape_8.setTransform(-17.1,51.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AhoA3QADgHAegLQAlgMAKgHQAVgNArghIAbgVQASgNAOACQAPADgSAQIgeAWQgbATgsAVIhMAlQgHADgGAAIgEAAQgJAAADgGg");
	this.shape_9.setTransform(-17.1,51.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AANgcIggAuQgFAIgMAKQgNAMgFAGIgHAIQgEAJAEADQAEADAKgEQAIgEAIgJQAFgFAHgKQARgVAlgnQAhgrgEgMQgIgUgrA+g");
	this.shape_10.setTransform(-23.3,49.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("Ag9BKQgEgDAEgJIAHgIIASgSQAMgKAFgIIAgguQArg+AIAUQAEAMghArQglAngRAVIgMAPQgIAJgIAEQgGADgDAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBgBg");
	this.shape_11.setTransform(-23.3,49.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAjgpQgoApgKAMQgHAJgXAxQgXAugFAFQgkAhAGgcQAGgWAZg2QAag4ANgJQAHgGAlgyQAkgvALgCQAJgDAYgMQASgIgGAPQgIARgTAZQgTAYgWAVg");
	this.shape_12.setTransform(64.8,-46.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AhnB+QAGgWAZg2QAag4ANgJQAHgGAlgyQAkgvALgCQAJgDAYgMQASgIgGAPQgIARgTAZQgTAYgWAVQgoApgKAMQgHAJgXAxQgXAugFAFQgUASgHAAQgGAAADgNg");
	this.shape_13.setTransform(64.8,-46.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AB5jGQgPAGgqAhQgyAngTAaQgZAfgYA4QgZA5gGAuQgRB9gHAJQgFAEgKgDQgKgDACgJQAHg3AKg2QAThsATghQAZgsA0g8QA4g/AugfQAFgDANABQAOABAAAHQAAAFgBAJQgCAHgKAEg");
	this.shape_14.setTransform(61.2,-42.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("Ah8DnQgKgDACgJQAHg3AKg2QAThsATghQAZgsA0g8QA4g/AugfQAFgDANABQAOABAAAHIgBAOQgCAHgKAEQgPAGgqAhQgyAngTAaQgZAfgYA4QgZA5gGAuQgRB9gHAJQgDACgFAAIgHgBg");
	this.shape_15.setTransform(61.2,-42.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA5lIQgdAVAAASQAAAHgTArQgQArgBAIQgBAEgaBUQgYBOAAAPQAAAHgPCQQgOCMACAKQACAKABAQQABANAJABQAHACAIhoQAIiBADgSQAIgsAWhXQAUhdAIgQQANgdAJgSQAPghAKgNQAmg2gLgQQgJgMgDgCQgHgEgJAIg");
	this.shape_16.setTransform(50.4,-34.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AhJFOQgJgBgBgNQgBgQgCgKQgCgKAOiMQAPiQAAgHQAAgPAYhOIAbhYQABgIAQgrQATgrAAgHQAAgSAdgVQAJgIAHAEQADACAJAMQALAQgmA2QgKANgPAhIgWAvQgIAQgUBdQgWBXgIAsQgDASgICBQgIBmgHAAIAAAAg");
	this.shape_17.setTransform(50.4,-34.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAmUQgFALgDAQQgDASADAIQADAHAFgBQAEAAAGgDQACAAAAgRQAAgQAEgCQAEgDgKBDQgKBCgEARQgFANgGBbQgDAvgEA/QAAAKgSCKQgQCDAAAOQABAMgCBEQgBBAAEAJQAFAKADAAQAEAAADgIQADgFAOiuQAPi2ACgKQAEgYARiFQATiLACgQQAAgDANhJQALg9gDgJQgGgQgEgFQgHgKgKABQgTADgMAag");
	this.shape_18.setTransform(38.3,-24.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("Ag2GoQgEgJABhAIABhQQAAgOAQiDIASiUIAHhuQAGhbAFgNQAEgRAKhCQAKhDgEADQgEACAAAQQAAARgCAAIgKADQgFABgDgHQgDgIADgSQADgQAFgLQAMgaATgDQAKgBAHAKQAEAFAGAQQADAJgLA9IgNBMIgVCbIgVCdIgRDAQgOCugDAFQgDAIgEAAQgDAAgFgKg");
	this.shape_19.setTransform(38.3,-24.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgCnQQgNALgQASQgRAVgHAPQgFAMAKAXQAKAXALACQALACANgpQAKgngCgLQgCgLADAAQACAAgBAWQgBAHACBTQADBOgGAwQgDAvgVByQgUBrAAAIQgBALgIBXQgGBVACAQQACANAGBTQAFBQACAJQADAPAJAAQAKABgBgRQgCgeAAheQABhwAFgrQAUi1AThSQAKgpAIheQAHhbABgLQAGg6AAgOQABg5gQgKQgTgMgHgBQgIgBgKAKg");
	this.shape_20.setTransform(29.2,-20.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AgbHaQgJAAgDgPQgCgJgFhQQgGhTgCgNQgCgQAGhVIAJhiQAAgIAUhrQAVhyADgvQAGgwgDhOIgBhaQABgWgCAAQgDAAACALQACALgKAnQgNApgLgCQgLgCgKgXQgKgXAFgMQAHgPARgVQAQgSANgLQAKgKAIABQAHABATAMQAQAKgBA5IgGBIIgIBmQgIBegKApQgTBSgUC1QgFArgBBwQAABeACAeQABAQgJAAIgBAAg");
	this.shape_21.setTransform(29.2,-20.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AASo5QAIAEANA3QAMA5ABAqQAAAhgOCmQgQCvAAAOQgBAfAPEBQAOEAAEATQAEASgDAGQgBAFgKADQgKADgEgEQgEgFgEgSQgFgXgPkXQgOkjADhEQAAgBAJifQAJiAgCgSQgCgLgDgyQgCgpgBgGQgCgEgIAvQgJA1gGAFQgFADgIgBQgKgDgFgJQgFgJAXg5QAWg3AIgIQAGgHAEgBQAFAAAJAEg");
	this.shape_22.setTransform(8.3,-8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AAeI7QgEgFgEgSQgFgXgPkXQgOkjADhEIAJigQAJiAgCgSIgFg9QgCgpgBgGQgCgEgIAvQgJA1gGAFQgFADgIgBQgKgDgFgJQgFgJAXg5QAWg3AIgIQAGgHAEgBQAFAAAJAEQAIAEANA3QAMA5ABAqQAAAhgOCmIgQC9QgBAfAPEBQAOEAAEATQAEASgDAGQgBAFgKADIgHACQgEAAgDgDg");
	this.shape_23.setTransform(8.3,-8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgBokQABABAEAMQADAHAKEQQAKD6AAAoQABBdAdDFQAPBjAQBfQABATgDAIQgEAIgLABQgJABgCgJQgDgUgFgTQgJgogLg8QgUhsgKhlQgMiIgJi6QgGingBgNQgBgQAChTQAChJgDgHQgDgJgNAeQgGAQgLAcQgDAHgLgDQgMgDgCgLQgDgNAbg2QAbg5APgBQAPAAAFAFg");
	this.shape_24.setTransform(0.3,-5.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("AA8IiQgDgUgFgTQgJgogLg8QgUhsgKhlQgMiIgJi6IgHi0QgBgQAChTQAChJgDgHQgDgJgNAeIgRAsQgDAHgLgDQgMgDgCgLQgDgNAbg2QAbg5APgBQAPAAAFAFIAFANQADAHAKEQQAKD6AAAoQABBdAdDFIAfDCQABATgDAIQgEAIgLABIgBAAQgIAAgCgIg");
	this.shape_25.setTransform(0.3,-5.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag8nGQgEAvgFAJQgFAJgXAIQgXAJAEgFQACgCAPhBQAPhCAEgGQAIgLAMgJQAOgKAHAEQAGAEAMAsQAPA3AAABQAGAUAZGGQABAMAvECQAuD/gBAOQgCATgLAKQgMAKgFgOQgEgMgtjwQguj6gCgHQgDgPgRjDQgSjJgCgKQgCgOgCgmQgCgmgBgFQgBgDgDAmg");
	this.shape_26.setTransform(-7.7,-4.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF3BB").s().p("ABYIYQgEgMgtjwIgwkBQgDgPgRjDIgUjTQgCgOgCgmIgDgrQgBgDgDAmQgEAvgFAJQgFAJgXAIQgXAJAEgFQACgCAPhBQAPhCAEgGQAIgLAMgJQAOgKAHAEQAGAEAMAsIAPA4QAGAUAZGGQABAMAvECQAuD/gBAOQgCATgLAKQgFAEgEAAQgFAAgDgIg");
	this.shape_27.setTransform(-7.7,-4.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhmmuQgDAFgHADQgLAFAGABQAEABgJADQgbAJAHgXQAGgcADgQQAGgdAJACQAHABAMgCQALgCAEADQAGAFAUBEQAVBHABAfQACAfAoDOQAoDDAIAfQALAmAkCHQAoCWACAMQACARAAABQgBAEgIACQgJACgJgQQgLgUgYhDQgwiNgyjiQgxjVgFhQQgCgqgFgaQgHgpgQgjQgDgFAAgLQAAgFAAgEQgBgGAAgDQgBgEABABQABAAABAEQAAAEgBAEg");
	this.shape_28.setTransform(-15,-1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF3BB").s().p("AB2HmQgLgUgYhDQgwiNgyjiQgxjVgFhQQgCgqgFgaQgHgpgQgjQgDgFAAgLIAAgJIABgGIAAgCQgBgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAIgBgBIAAADIABABIAAAAIABAJQgDAFgHADQgLAFAGABQAEABgJADQgbAJAHgXIAJgsQAGgdAJACQAHABAMgCQALgCAEADQAGAFAUBEQAVBHABAfQACAfAoDOQAoDDAIAfIAvCtQAoCWACAMIACASQgBAEgIACIgDAAQgHAAgIgOgAhmmuIgBgJIAAAAIgBgBIAAgDIABABQAAAAAAAAQABAAAAABQAAAAAAABQAAABABABIAAACIgBAGIAAAAg");
	this.shape_29.setTransform(-15,-1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AidleQAAACAAADQgBASAEAPQAGAVCxGaQASAqAwBsQA3B8AFAHQAHAKAKAAQALABgCgOQgCgMhajKQhajNgGgPQgZhAgTgxQgkhdgIgLQgIgLgLgvQgLgwgDgIQgCgQgCgHQgEgNgQgEQgQgEgCAKQgGAagCAFQgFAJAMANQAEAEAJgEQABAAAAgBQABgMAEAFQACAEgHADg");
	this.shape_30.setTransform(-32.8,0.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFF3BB").s().p("ACsGaQgKAAgHgKQgFgHg3h8IhCiWQixmagGgVQgEgPABgSIAAgFQAFgCAAgDIAAgCIgCgCIAAAAIgBABQgBABgBAHIgBABQgJAEgEgEQgMgNAFgJQACgFAGgaQACgKAQAEQAQAEAEANQACAHACAQIANA4QAMAvAIALQAHALAlBdIAsBxIBgDcQBZDKACAMQADANgKAAIgBAAgAidleQABgHABgBIABgBIAAAAIACACIAAACQAAADgFACIAAAAg");
	this.shape_31.setTransform(-32.8,0.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ACOHAQgFgFhIjPQhHjTgGgKQgHgMgwiVQgwiagDgGQgDgFgBgkQAAgdgJAGQgMAHgHAAQgIAAgGgMQgHgLAMgiQALgiAJADQADABAMgCQAGgCAEALQAEALALBGQANBNABAFQACALBGDLQBIDWAEAMQAAABA8CVQAxB9gFAHQgHAKgFABQgFABgIgGg");
	this.shape_32.setTransform(-23.3,-0.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFF3BB").s().p("ACOHAQgFgFhIjPQhHjTgGgKQgHgMgwiVQgwiagDgGQgDgFgBgkQAAgdgJAGQgMAHgHAAQgIAAgGgMQgHgLAMgiQALgiAJADQADABAMgCQAGgCAEALQAEALALBGIAOBSQACALBGDLIBMDiIA8CWQAxB9gFAHQgHAKgFABIgCAAQgFAAgGgFg");
	this.shape_33.setTransform(-23.3,-0.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AiEkxQgGgNAHgNQACgFAMgOQAFgFAEgFQADgBAJAHQANAKAiBkQCjH7ADAWQABAJALAeQAJAZgDAGQgIAPgHgXQgFgQjBo2QgEgKgKgpQgHgcgGgCQgFgBgBAHQgBAKgGACQgHAFgBgBQgBAAgFgLg");
	this.shape_34.setTransform(-44.8,4.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFF3BB").s().p("AB4FbIjGpGQgEgKgKgpQgHgcgGgCQgFgBgBAHQgBAKgGACQgHAFgBgBIgGgLQgGgNAHgNQACgFAMgOIAJgKQADgBAJAHQANAKAiBkQCjH7ADAWQABAJALAeQAJAZgDAGQgDAGgDAAQgFAAgEgOg");
	this.shape_35.setTransform(-44.8,4.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhGjdQAEAUAHAaQACAPB9EkQAEAKAeBAQAbA8gCAEQgDAGgLgFQgMgHgKgUQgCgChQi/QhOi8gGgKQgEgIgEgcQgDgXgHgGQgIgFgCAFQgEALgBABQgFAEgGgDQgHgDgBgJQgBgIARgaQAPgaAEgBQAFgBAFACQAHACgCAGQgBAGAIAkg");
	this.shape_36.setTransform(-55.4,-3.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFF3BB").s().p("ABxEPQgMgHgKgUIhSjBQhOi8gGgKQgEgIgEgcQgDgXgHgGQgIgFgCAFQgEALgBABQgFAEgGgDQgHgDgBgJQgBgIARgaQAPgaAEgBQAFgBAFACQAHACgCAGQgBAGAIAkIALAuQACAPB9EkIAiBKQAbA8gCAEQgBADgEAAQgEAAgFgCg");
	this.shape_37.setTransform(-55.4,-3.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ah3iZQABAGgBAKQAAAHAKgDQAIgDAKgOQAJgMAEABQAOAEAIAZQABAEAbBDQAYA9ACALQACAOAcA5QAQAeAVAmQAFAKATAkQASAfAGABQAHACABgDQAAAAgCgLQAAgEgdgzQgfg4gIgWQgwiLgJgWQgOgYgFgKQgHgOgCgLQgEgcgDgRQgGgfgFgDQAAAAgHgGQgDgDgKgCQgJgCgIAFQgIAFADAIQAIAagMAGQgYAMADAOg");
	this.shape_38.setTransform(-65.5,-4.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFF3BB").s().p("ABxDkQgGgBgSgfIgYguIglhEQgcg5gCgOQgCgLgYg9IgchHQgIgZgOgEQgEgBgJAMQgKAOgIADQgKADAAgHQABgKgBgGQgDgOAYgMQAMgGgIgaQgDgIAIgFQAIgFAJACQAKACADADIAHAGQAFADAGAfIAHAtQACALAHAOIATAiQAJAWAwCLQAIAWAfA4QAdAzAAAEIACALQgBAAAAABQAAAAAAAAQgBAAAAAAQgBABgBAAIgEgBg");
	this.shape_39.setTransform(-65.5,-4.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMmQQgHgBgJgBQgLAAgCgBQgCAAgGgLQgIgMAMgeQAKgZAKgKQAJgKACgCQAHgEAKACQAPACAKAIQAKAJABANQABAJAIBeQAGBigIAoQgPBGADBWQAAAVAACbQAACYAEAXQAGAbAGBZQAFBZgDAMQgCANgLACQgLABgFgLQgEgLgRiNQgOiNABgXQACgaABh/QABiAgBgdQgBgTAGhFQAEhCgBgSQAAgNAAhDQABg6gCgOQgEgNAAAUQgBAegBAFQgDAKgCABg");
	this.shape_40.setTransform(17.6,-10);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFF3BB").s().p("AAXHxQgEgLgRiNQgOiNABgXQACgaABh/QABiAgBgdQgBgTAGhFQAEhCgBgSQAAgNAAhDQABg6gCgOQgEgNAAAUQgBAegBAFQgDAKgCABIgQgCIgNgBQgCAAgGgLQgIgMAMgeQAKgZAKgKIALgMQAHgEAKACQAPACAKAIQAKAJABANIAJBnQAGBigIAoQgPBGADBWIAACwQAACYAEAXQAGAbAGBZQAFBZgDAMQgCANgLACIgDAAQgJAAgEgKg");
	this.shape_41.setTransform(17.6,-10);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Agzg8QALAQACAIIADAYQgIgCgFAJQgEAIAJABQAeAEAVATQAPAMAcAdQgDgKgYgZQgeghgQgUQgGgXgEgPQgIgdgMALQgHAGAIAKg");
	this.shape_42.setTransform(-65.7,-18.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFF3BB").s().p("AALAhQgVgTgegEQgJgBAEgJQAFgIAIACIgDgYQgCgIgLgQQgIgKAHgGQAMgLAIAdIAKAmQAQAUAeAhQAYAZADAKQgcgdgPgMg");
	this.shape_43.setTransform(-66,-19.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgOgVQg5gNgIAHQgMAKAWAHQAIADAZAEQAfADAfAXQATAOAiAfQgJgagTgbQgXgZgKgOQgJgWgIgOQgMgbgNALQgHAGANAPQAOAPgDAFg");
	this.shape_44.setTransform(-76.7,-16.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFF3BB").s().p("AAdAdQgfgYgfgEQgZgCgIgDQgWgHAMgKQAIgHA5ANIAHgOQADgFgOgPQgNgPAHgGQANgLAMAbQAIAOAJAWQAKAOAXAZQATAbAJAaQgigfgTgOg");
	this.shape_45.setTransform(-77,-16.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAoipQgPAIgIAiQgKApgHALQgMATgPgLQgZgSgJgBQgfgDAIAXQAHAVAUAKQAQAIgJAgQgOA2gBAFQAAAEgKAeQgJAaACAgQABARAWABQArADAFACQAMAEAEgdQAFgnAEgHQAFgJAAgpQgBgpAKgRQAQgbgDgQQgDgRAIgRQAag1AHgPQALgZgFgFQgFgFgQADQgNADgLAFg");
	this.shape_46.setTransform(76.5,-47.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFF3BB").s().p("AgLCzQgFgCgrgDQgWgBgBgRQgCggAJgaQAKgeAAgEIAPg7QAJgggQgIQgUgKgHgVQgIgXAfADQAJABAZASQAPALAMgTQAHgLAKgpQAIgiAPgIQALgFANgDQAQgDAFAFQAFAFgLAZIghBEQgIARADARQADAQgQAbQgKARABApQAAApgFAJQgEAHgFAnQgEAZgIAAIgEAAg");
	this.shape_47.setTransform(76.5,-47.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA3jDQgVACgKAGQgPAJgKAwQgOA5gIAMQgNAVgCgDQgJgLgMgBQgfgBAIAZQAHAXAVAIQARAIADAWQABAIgCAqQAAAEgLAiQgIAdACAkQACARARgEQAegJAMAEQANADgCgaQgEgiAGgLQALgWAHgeQAIgkgEgdQgGgXgBgNQgDgYALgbQAZg8AIgSQALgbgGgGQgFgFgXACg");
	this.shape_48.setTransform(63.5,-50.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFF3BB").s().p("Ag0C3QgCgkAIgdQALgiAAgEQACgqgBgIQgDgWgRgIQgVgIgHgXQgIgZAfABQAMABAJALQACADANgVQAIgMAOg5QAKgwAPgJQAKgGAVgCQAXgCAFAFQAGAGgLAbIghBOQgLAbADAYQABANAGAXQAEAdgIAkQgHAegLAWQgGALAEAiQACAagNgDQgMgEgeAJIgGABQgMAAgBgOg");
	this.shape_49.setTransform(63.5,-50.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgDh/QgOA4gIAMQgNAVgDgDQgIgLgMAAQgfgBAQAfQAOAbAWAKQARAIAAARQABALgFAiQAAADgFAaQgEAVACAjQABATASABQAoADACAAQANADABgQQABgbAEgJQAJgSADg0QACgwgFghQAAgEgOgaQgJgQAKgZQAag8AHgSQAMgcgGgFQgFgGgXADQgWACgJAGQgQAJgJAwg");
	this.shape_50.setTransform(51.4,-52.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFF3BB").s().p("AAbDBIgqgDQgSgBgBgTQgCgjAEgVIAFgdQAFgigBgLQAAgRgRgIQgWgKgOgbQgQgfAfABQAMAAAIALQADADANgVQAIgMAOg4QAJgwAQgJQAJgGAWgCQAXgDAFAGQAGAFgMAcIghBOQgKAZAJAQQAOAaAAAEQAFAhgCAwQgDA0gJASQgEAJgBAbQgBAOgJAAIgEgBg");
	this.shape_51.setTransform(51.4,-52.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAiAQgFAYgCAXQgBAQgIARQgMAYgMgEQgcgIgDAAQgeACATAeQARAZAXAIQASAGACARQABAKgBAjQAAADgCAbQgCAUAGAkQADATARADQALACAiAAQAPACAEgJQADgPAFgNQAHgSgGg3QgFgwgJglQgJgXgEgOQgHgYAIgbQAJggAXg5QAPgkgFgFQgHgFgaAGQgbAHgNANQgMAMABADQADALgIAdg");
	this.shape_52.setTransform(38,-52.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFF3BB").s().p("AAtDPQgiAAgLgCQgRgDgDgTQgGgkACgUIACgeQABgjgBgKQgCgRgSgGQgXgIgRgZQgTgeAegCQADAAAcAIQAMAEAMgYQAIgRABgQQACgXAFgYQAIgdgDgLQgBgDAMgMQANgNAbgHQAagGAHAFQAFAFgPAkQgXA5gJAgQgIAbAHAYIANAlQAJAlAFAwQAGA3gHASQgFANgDAPQgDAHgLAAIgFAAg");
	this.shape_53.setTransform(38,-52.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AADhkQgBAegKAGQgRAJgGAMQgNAagDAAQgJgEgPABQgeADATAVQARAVAXAIQASAHACAQQABALgBAjQAAADgCAbQgCAVAGAjQADAUARACQALACAiABQAPACAEgJQADgQAFgNQAIgTgCg7QgBg6gIggQAAgBgSgfQgLgVAHgbQAJggAXg5QAPglgFgEQgJgIgQgCQgVgDgNANQgZAYgCBNg");
	this.shape_54.setTransform(26.1,-52.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFF3BB").s().p("AAtDVQgigBgLgCQgRgCgDgUQgGgjACgVIACgeQABgjgBgLQgCgQgSgHQgXgIgRgVQgTgVAegDQAPgBAJAEQADAAANgaQAGgMARgJQAKgGABgeQAChNAZgYQANgNAVADQAQACAJAIQAFAEgPAlQgXA5gJAgQgHAbALAVIASAgQAIAgABA6QACA7gIATQgFANgDAQQgDAHgLAAIgFAAg");
	this.shape_55.setTransform(26.1,-52.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAIjBQgVAbAHBJQACAegLAHQgRAKgFAMQgJAagEABQgIgDgPACQgeAGAVASQATASAYAHQASAEAEAQQADAKACAiQABACAAAbQAAAUAKAiQADATATAAQALABAigDQAPABADgJQACgQAEgNQAFgTgHg5QgIg4gLgeQgBgCgUgbQgOgTAFgbQAFggARg5QALglgFgEQgKgGgRgBQgVgBgLAOg");
	this.shape_56.setTransform(15.3,-50.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFF3BB").s().p("AAVDPQgTAAgDgTQgKgiAAgUIgBgdQgCgigDgKQgEgQgSgEQgYgHgTgSQgVgSAegGQAPgCAIADQAEgBAJgaQAFgMARgKQALgHgCgeQgHhJAVgbQALgOAVABQARABAKAGQAFAEgLAlQgRA5gFAgQgFAbAOATIAVAdQALAeAIA4QAHA5gFATQgEANgCAQQgDAJgPgBIgpACIgEAAg");
	this.shape_57.setTransform(15.3,-50.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgHi4QgJAPgBAlQgBAogEALQgJAagEAGQgCACgDASQgGAdgIAFQgHAEgXgGQglgHAVAYQAVAcAUgDQANgBgBAmQgCAtAQANQALAKAFAAQACACAPAhQAIATAFAAQAFAAAagGQAMgBAcACQAWgBACgQQADgbgLhAQgOhKgUgaQgOgOgEgGQgHgJABgdQAAggAHg7QAFgngGgCQgLgFgQACQgVACgHAQg");
	this.shape_58.setTransform(4.2,-48);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFF3BB").s().p("AANDMQgFAAgIgTQgPghgCgCQgFAAgLgKQgQgNACgtQABgmgNABQgUADgVgcQgVgYAlAHQAXAGAHgEQAIgFAGgdQADgSACgCQAEgGAJgaQAEgLABgoQABglAJgPQAHgQAVgCQAQgCALAFQAGACgFAnQgHA7AAAgQgBAdAHAJQAEAGAOAOQAUAaAOBKQALBAgDAbQgCAQgWABQgcgCgMABQgYAGgGAAIgBAAg");
	this.shape_59.setTransform(4.2,-48);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgGjKQgJAPgBAkQgBAogEAMQgKAdAAAOQAAAUgDALQgFAZgJAEQgQABgOAFQghAMADARQADARAkAAQAPAAAGAcQAKAwAFAMQAFALAJAMQALANANAdQAIARASgEQAMgDAggJQARgCAIgMQAHgLACgVQABgNgggyQgegxAEgOQAGgOgHgnQgIg0AAgSQAAggAHg8QAFgmgGgDQgLgFgQACQgVADgHAQg");
	this.shape_60.setTransform(-7.2,-43.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFF3BB").s().p("AAFDRQgNgdgLgNQgJgMgFgLQgFgMgKgwQgGgcgPAAQgkAAgDgRQgDgRAhgMQAOgFAQgBQAJgEAFgZQADgLAAgUQAAgOAKgdQAEgMABgoQABgkAJgPQAHgQAVgDQAQgCALAFQAGADgFAmQgHA8AAAgQAAASAIA0QAHAngGAOQgEAOAeAxQAgAygBANQgCAVgHALQgIAMgRACIgsAMIgHABQgNAAgGgOg");
	this.shape_61.setTransform(-7.2,-43.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABJjYQgKgGgRABQgVACgKAPQgKAOgCAlQgDAogDALQgMAcACAfQACAkgEALQgHAbgJADQgQAAgOAEQggAJgMAYQgMAXAVgBQARgBAPANQAKAJAXAaQAOANADAIQAEAHANAnQAHASATgDQAMgCAhgHQARgCAIgLQAHgKAEgWQACgMgdg1QgcgyAGgNQAGgOgEgoQgFg0ABgSQACghALg6QAHgmgGgDg");
	this.shape_62.setTransform(-20.7,-38.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFF3BB").s().p("AADDPIgRguQgDgIgOgNQgXgagKgJQgPgNgRABQgVABAMgXQAMgYAggJQAOgEAQAAQAJgDAHgbQAEgLgCgkQgCgfAMgcQADgLADgoQACglAKgOQAKgPAVgCQARgBAKAGQAGADgHAmQgLA6gCAhQgBASAFA0QAEAogGAOQgGANAcAyQAdA1gCAMQgEAWgHAKQgIALgRACIgtAJIgFAAQgPAAgGgPg");
	this.shape_63.setTransform(-20.7,-38.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgDgrQAAAhgEAKQgJAZgKADQgPgBgPADQgfAGgOAWQgOAWAVAAQARAAAOANQAJAJAXAaQAMANADAIQADAHANAmQAEARATgCQALgBAigFQARAAAJgLQAIgIAFgVQADgLgZg0QgZgxAGgMQAHgNgBglQgCgzACgQQAEgfAPg3QAJgkgGgDQgKgFgQAAQgVAAgLANQgLANgFAjQgGAlgFALQgMAaAAAeg");
	this.shape_64.setTransform(-32.2,-35.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFF3BB").s().p("AAADCIgQgtQgDgIgMgNQgXgagJgJQgOgNgRAAQgVAAAOgWQAOgWAfgGQAPgDAPABQAKgDAJgZQAEgKAAghQAAgeAMgaQAFgLAGglQAFgjALgNQALgNAVAAQAQAAAKAFQAGADgJAkQgPA3gEAfQgCAQACAzQABAlgHANQgGAMAZAxQAZA0gDALQgFAVgIAIQgJALgRAAIgtAGIgDAAQgRAAgDgPg");
	this.shape_65.setTransform(-32.2,-35.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABLjOQgWgNgTAXQgLAPgNAfQgQAqgCAFQgLAVAAAzQAAAhgSgFQgXgMgEgCQgEgCgIAQQgIASAQATQAQASAVAAQASAAACAJQABAFgFAZQgDAOAJAgQAJAlAAAZQAAAQALgFQAWgLAQAAQAPAAAFgNQAEgTADgMQACgKgEg2QgDgyAHgNQAGgLgQgkQgSgpADgWQAEgfAPg2QAJgkgGgDg");
	this.shape_66.setTransform(-40,-31.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFF3BB").s().p("AAADHQAAgZgJglQgJggADgOQAFgZgBgFQgCgJgSAAQgVAAgQgSQgQgTAIgSQAIgQAEACIAbAOQASAFAAghQAAgzALgVIASgvQANgfALgPQATgXAWANQAGADgJAkQgPA2gEAfQgDAWASApQAQAkgGALQgHANADAyQAEA2gCAKIgHAfQgFANgPAAQgQAAgWALIgFACQgGAAAAgNg");
	this.shape_67.setTransform(-40,-31.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgsAfQASAAACAJQABAFgFAZQgEAXADAnQAFArALARQAIAOAGgEQARgKAPAAQAQAAADgHQABgNADgNQADgKgEg2QgEgyAHgNQAGgLgJgYQgLgeADgVQAFgkAVg3QAQgpgFgDQgMgIgIgDQgOgGgLANQgLAOgKAeQgMAkgEAIQgEAKgQA6QgJAegTgHQgXgIgCABQgDAJgGAMQgJASANAIQAIAFAYAAg");
	this.shape_68.setTransform(-50.9,-27.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFF3BB").s().p("AgNDAQgLgRgFgrQgDgnAEgXQAFgZgBgFQgCgJgSAAQgYAAgIgFQgNgIAJgSIAJgVQACgBAXAIQATAHAJgeQAQg6AEgKQAEgIAMgkQAKgeALgOQALgNAOAGQAIADAMAIQAFADgQApQgVA3gFAkQgDAVALAeQAJAYgGALQgHANAEAyQAEA2gDAKQgDANgBANQgDAHgQAAQgPAAgRAKIgCABQgGAAgGgLg");
	this.shape_69.setTransform(-50.9,-27.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgbgiQgQgFgIgOQgCgEgGAMQgLAVABAPQABAPARAAQATAAALAPQAJAOgEATQgMA3gBAFQgHArAKAPQAJAMAHgEQAPgIAQAAQAPgBADgGQABgMADgLQADgJgEgwQgDgsAGgMQAHgKgJgbQgLgiADgTQAFgfAUgwQAPgkgGgDQgNgGgUAaQgIALgcAuQgJATAAAiQAAAUgSgFg");
	this.shape_70.setTransform(-61,-24.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFF3BB").s().p("AgaCsQgKgPAHgrIANg8QAEgTgJgOQgLgPgTAAQgRAAgBgPQgBgPALgVQAGgMACAEQAIAOAQAFQASAFAAgUQAAgiAJgTQAcguAIgLQAUgaANAGQAGADgPAkQgUAwgFAfQgDATALAiQAJAbgHAKQgGAMADAsQAEAwgDAJQgDALgBAMQgDAGgPABQgQAAgPAIIgDABQgGAAgHgJg");
	this.shape_71.setTransform(-61,-24.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAbieQgOAjgNAUQgJAUABAbQABAOgRgGQgZgIgGACQgFACgJASQgIAPACAEQACADALAMQAEAIAUAPQANALgDAOQgLAvgCANQgHArAKAPQAJAMAIgEQAQgIAOAAQAQAAACgHQACgMADgLQACgIgEgxQgDgsAHgLQAFgJgJgcQgJgfAKgSQATgiAOggQARgpgIgCQgggJgOAWg");
	this.shape_72.setTransform(-69.5,-22.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFF3BB").s().p("AgmCmQgKgPAHgrQACgNALgvQADgOgNgLQgUgPgEgIIgNgPQgCgEAIgPQAJgSAFgCQAGgCAZAIQARAGgBgOQgBgbAJgUQANgUAOgjQAOgWAgAJQAIACgRApQgOAggTAiQgKASAJAfQAJAcgFAJQgHALADAsQAEAxgCAIQgDALgCAMQgCAHgQAAQgOAAgQAIIgEABQgGAAgHgJg");
	this.shape_73.setTransform(-69.5,-22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.2,-74.8,172.4,134.9);


(lib.tric_neck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag1gsQgEAKAPAPQAPAQgCAGIgDAVQgPAAgQADQgXADgDAHQgJASAVACQAIABAWgDQAvgIBOACQgpgXgpg0QgOgTgIgGQgSgNgJAUg");
	this.shape.setTransform(-19.6,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AhGA5QgVgCAJgSQADgHAXgDQAQgDAPAAIADgVQACgGgPgQQgPgPAEgKQAKgUARANQAIAGAMATQArA0ApAXQhOgCgvAIQgQACgJAAIgFAAg");
	this.shape_1.setTransform(-20.3,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgagHQgRAAgRACQgbACgEADQgJANAXACQAJAAAZgCQAfgDAkAPQAWAJAoAWQgPgYgZgVQgdgTgNgLQgMgTgLgMQgVgXgJAPQgFAHAQALQARALgCAGg");
	this.shape_2.setTransform(22,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AAcAdQgkgPgfAEQgYACgKgBQgXgCAKgMQAEgFAagBQASgCAQAAIAEgPQACgGgSgMQgQgLAFgHQAKgOAUAXQALAMANATIApAeQAaAVAOAYQgngXgXgJg");
	this.shape_3.setTransform(21.5,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgEgTQgMgOgGgEQgPgKgIAPQgDAHAMALQANAMgCAEIgCAPQgNAAgNACQgTADgDAFQgHAMARACQAHABASgCQAmgGBCABQgjgRghglg");
	this.shape_4.setTransform(13.2,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("Ag6ApQgRgCAHgMQADgFATgDQANgCANAAIACgPQACgEgNgMQgMgLADgHQAIgPAPAKQAHAEAKAOQAiAlAjARQhEgBgjAGIgWACIgEgBg");
	this.shape_5.setTransform(12.5,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgkgOQAMAMgBAEIgDAPQgMAAgNACQgUADgCAFQgIAMASACQAGABATgCQAlgGBDABQgigQgigmQgMgOgHgEQgOgKgIAPQgDAHAMALg");
	this.shape_6.setTransform(4.7,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("Ag6ApQgRgCAHgMQADgFATgDQANgCANAAIACgPQACgEgNgMQgMgLAEgHQAHgPAPAKQAGAEAKAOQAkAmAiAQQhEgBgkAGIgWACIgDgBg");
	this.shape_7.setTransform(4,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhQAiQgIARASACQALABAQgEQArgGBFABQglgUgkgxQgNgRgHgGQgQgNgIATQgDAJANAOQANAPgBAFIgDAUQgNAAgOADQgVADgDAGg");
	this.shape_8.setTransform(-5.5,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("Ag/A1QgSgCAIgRQADgGAVgDQAOgDANAAIADgUQABgFgNgPQgNgOADgJQAIgTAQANQAHAGALARQAmAxAlAUQhGgBgqAGQgMADgKAAIgFAAg");
	this.shape_9.setTransform(-6.2,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgkA1QgRBOARAZQAKAOAHAAQAFAAAZgDQAOAAgBgFQgCgOACgHQACgHAEg0QAEguAHgMQAFgJgEgNQgEgMAKgTQAOgYAGg4QAHg3gJgDQgfgIgEAQQgNAugCAEQgQAngEANQgJAUgTgGQgQgFgIgNQgDgFgGAMQgHAPAEAIQACAEAMAQQAMAUAEAKQAGARgEARg");
	this.shape_10.setTransform(28.3,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AgkCcQgRgZARhOQAEgRgGgRQgEgKgMgUIgOgUQgEgIAHgPQAGgMADAFQAIANAQAFQATAGAJgUIAUg0QACgEANguQAEgQAfAIQAJADgHA3QgGA4gOAYQgKATAEAMQAEANgFAJQgHAMgEAuQgEA0gCAHQgCAHACAOQABAFgOAAIgeADQgHAAgKgOg");
	this.shape_11.setTransform(28.3,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABEhfQAHgxgJgCQgfgHgEAOQgNAogCAEQgQAfgEAHQgHAKgVgGQgQgEgIgMQgDgEgGALQgHANAEAGQADAFAMANQAKARAFARQAGAXgEAPQgRBEARAWQAKANAHAAQAGAAAYgDQAOAAgBgEQgCgNACgGQACgHAEgtQAEgpAHgKQAGgIgEgLQgFgLAKgQQAOgVAGgxg");
	this.shape_12.setTransform(18.3,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AgkCJQgRgWARhEQAEgPgGgXQgFgRgKgRIgPgSQgEgGAHgNQAGgLADAEQAIAMAQAEQAVAGAHgKQAEgHAQgfQACgEANgoQAEgOAfAHQAJACgHAxQgGAxgOAVQgKAQAFALQAEALgGAIQgHAKgEApQgEAtgCAHQgCAGACANQABAEgOAAIgeADQgHAAgKgNg");
	this.shape_13.setTransform(18.3,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAThrQgKANgFAjQgEAUgQgEQgMgEgUgOQgKgHgHALQgJAPAAAFQAAAEAJAOQALAQAFAQQAGAUgEAPQgRA/ARAVQAKAMAHAAQAFAAAZgDQAOAAgBgEQgCgMACgFQACgIgEgpQgFgmAHgJQAGgIAEgLQAEgJAKgPQALgQAMgyQAMgyACgCQAGgKgWAJQgXAJgQAWg");
	this.shape_14.setTransform(10.3,-1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AgvCEQgRgVARg/QAEgPgGgUQgFgQgLgQQgJgOAAgEQAAgFAJgPQAHgLAKAHQAUAOAMAEQAQAEAEgUQAFgjAKgNQAQgWAXgJQAWgJgGAKQgCACgMAyQgMAygLAQQgKAPgEAJQgEALgGAIQgHAJAFAmQAEApgCAIQgCAFACAMQABAEgOAAIgeADQgHAAgKgMg");
	this.shape_15.setTransform(10.3,-1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA6iKQgXAJgQAWQgKANgGAjQgDAUgQgEQgNgDgTgOQgKgIgHALQgJAPAAAFQAAAFAJANQAKAQAGAQQAGAUgEAPQgRBAARAUQAKAMAGAAQAGAAAZgDQAOAAgBgEQgDgMACgFQADgIgFgpQgEgmAGgJQAGgIAEgLQAFgJAKgPQALgQAMgyQAMgyACgCQAGgKgWAJg");
	this.shape_16.setTransform(-0.4,-1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AgvCEQgRgUARhAQAEgPgGgUQgGgQgKgQQgJgNAAgFQAAgFAJgPQAHgLAKAIQATAOANADQAQAEADgUQAGgjAKgNQAQgWAXgJQAWgJgGAKQgCACgMAyQgMAygLAQQgKAPgFAJQgEALgGAIQgGAJAEAmQAFApgDAIQgCAFADAMQABAEgOAAIgfADQgGAAgKgMg");
	this.shape_17.setTransform(-0.4,-1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhcBmQgBABgBABQgFARArALQAjAJAWgBQAegCgCgiQgIgqgBgRQgDgdAHgVQAHgTARgdQAJgNAXgbQASgZABgVQgLABgRAMQgSANgJABQgJAAgPgJQgPgIgKACQgEALgCAZQgCAXgFALQgGAOgMAHQgUANgCACQgQAQgJAjQgLAwgDAHIAFARQABgBAAABQgBACAAABg");
	this.shape_18.setTransform(-10.3,-1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("Ag4CEQgrgLAFgRIABgCIABACIAAgCIABAAIgCAAIgEgRQADgHALgwQAIgjARgQIAWgPQAMgHAGgOQAEgLACgXQADgZADgLQALgCAPAIQAPAJAJAAQAJgBASgNQAQgMAMgBQgBAVgSAZQgYAbgIANQgSAdgGATQgHAVADAdQABARAIAqQACAigeACIgDAAQgWAAgggIgAhdBmIACAAIgBAAIAAACgAhdBmg");
	this.shape_19.setTransform(-10.3,-1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAqhXQgMgNgXAMQgSAKgLAPQgKAQgFAYQgDAOgDAaIADAJQAAAFgGAcQgEAbAHAHQAHAGATgIQARgIAJAHQAFgNAEgfQADgdAHgPQANgcAEgPQAJghgMgNg");
	this.shape_20.setTransform(-21.9,0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AgrBdQgHgHAEgbQAGgcAAgFIgDgJQADgaADgOQAFgYAKgQQALgPASgKQAXgMAMANQAMANgJAhQgEAPgNAcQgHAPgDAdQgEAfgFANQgJgHgRAIQgLAEgGAAQgGAAgDgCg");
	this.shape_21.setTransform(-21.9,0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgwAaQAAAFgHAcQgFAbAJAHQAJAGAVgIQAVgIAKAHQAGgOAFgeQAEgdAIgPQAPgdAFgOQALghgOgNQgOgNgcAMQgWAKgMAPQgMAQgGAYQgDAOgEAag");
	this.shape_22.setTransform(-29.6,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AgzBdQgJgHAFgbQAHgcAAgFIgDgJQAEgaADgOQAGgYAMgQQAMgPAWgKQAcgMAOANQAOANgLAhQgFAOgPAdQgIAPgEAdQgFAegGAOQgKgHgVAIQgMAEgIAAQgGAAgEgCg");
	this.shape_23.setTransform(-29.6,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-18.1,72.8,36.2);


(lib.tric_hip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ah5mrQAVAOA2AvQBAA6gCAOQgBAQgGAMQgFAMgKAQQgFAGgYAOQgPAJADAOQABADgDAYQgBAKAUAFQAPAEA4gPQAzgOAMAKQAWATAQAUQAWAagDANQgCALgFAgQgJAcgXABQgmAKgSAFQggAGgKgVQgIgTgighQgdgbACgNQADgOgIgQQgKgRAAgBQADgNgBgEQgCgJgXAKQgWAKgcABQgoACgQADQgiAHgsgGQgpgFgcgMQgogPgVgLQgmgSgPgWQgOgbgEgFQgEgGgUgCQgTgBgLAGQgKAIgKAFQgIAEgSAFQgPAEgDAFQgaAggBATQAAAJgBAlQgBAjACAMQACALAAARQABAMALADQAKACAKADQAHAAAQgFQAXgIAdgGQAjgIATAAQADAAAzgJQArgIAlAGQA1AJA8ATQBCAVATARQATARAvAjQAsAkAWARQACABA4AiQAlAXALASQAKAPAoA7QAjA9gFA0QgFAxABAhQABAigBAJQgBARgZAqQgZApgPALQgOAMgBAEQAAAFAPACQARABA1g9QA1g9AGgeQAGgggDhGQgDhIgKgeQgYgugPgeQgag2ADgnQADg1AAgOQABgUANgGQAKgFAPgLQANgFANANQAPAPAZAbQAYAdARAWQAMAQAdApQAcAlAXASQAQANAsAxQAoAtARAJQAQAKASARQAOALALgLQAOgOgDgnQgDgogTgTQgRgRhGhuQhJhzgNgVQgLgRgmgvQgggngHgQQgKgWgTgbQgVgegTgQQgfgegUgSQgjgigYgIQgcgKhGgiQhCghgcgQQgLgHgbgTQgTgNgUgIQgVgJgSgMQgfgVgOgIQgYgOgSgGQgSgHgHgEQgfgTgJgDQgagMgFAOQgFAQAPAYQAPAYAYAMQAIAFAhAhQAcAcAjAKQAcAJAZAEQADABADAAQACABADAAQALAEAMAFQARAIA9AbQA3AaASANQAhAXAKAIQAWATAIAOQAlBFAMAgQAZBDAgAaQAGAFAvAZQAmAUAPAWQAPASAXAOQAiAVAQAOQAeAaAtBFQAqBCALAi");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("ACCJbQgPgCAAgFQABgEAOgMQAPgLAZgpQAZgqABgRQABgJgBgiQgBghAFgxQAFg0gjg9IgyhKQgLgSglgXIg6gjQgWgRgsgkQgvgjgTgRQgTgRhCgVQg8gTg1gJQglgGgrAIIg2AJQgTAAgjAIQgdAGgXAIQgQAFgHAAIgUgFQgLgDgBgMQAAgRgCgLQgCgMABgjIABguQABgTAaggQADgFAPgEQASgFAIgEQAKgFAKgIQALgGATABQAUACAEAGQAEAFAOAbQAPAWAmASQAVALAoAPQAcAMApAFQAsAGAigHQAQgDAogCQAcgBAWgKQAXgKACAJQABAEgDANIAKASQAIAQgDAOQgCANAdAbQAiAhAIATQAKAVAggGIA4gPQAXgBAJgcIAHgrQADgNgWgaQgQgUgWgTQgMgKgzAOQg4APgPgEQgUgFABgKQADgYgBgDQgDgOAPgJQAYgOAFgGQAKgQAFgMQAEgJACgLIIbIWQgLgigqhCQgthFgegaQgQgOgigVQgXgOgPgSQgPgWgmgUQgvgZgGgFQgggagZhDQgMggglhFQgIgOgWgTQgKgIghgXQgSgNg3gaIhOgjQgMgFgLgEIgFgCIACACIgIgCQgZgEgcgJQgjgKgcgcQghghgIgFQgYgMgPgYQgPgYAFgQQAFgOAaAMQAJADAfATQAHAEASAHQASAGAYAOQAOAIAfAVQASAMAVAJQAUAIATANIAmAaQAcAQBCAhQBGAiAcAKQAYAIAjAiIAzAwQATAQAVAeQATAbAKAWQAHAQAgAnQAmAvALARIBWCIQBGBuARARQATATADAoQADAngOAOQgLALgOgLQgSgRgQgKQgRgJgogtQgsgxgQgNQgXgSgcglIgpg5QgRgWgYgdQgZgbgPgPQgNgNgNAFQgPALgKAFQgNAGgBAUIgDBDQgDAnAaA2IAnBMQAKAeADBIQADBGgGAgQgGAeg1A9QgzA8gSAAIgBAAgAAPkeIiLiNIADAAQAVAOA2AvQBAA6gCAOIgBAIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.5,-61.3,125.2,122.7);


(lib.tric_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AABAEIgBgH");
	this.shape.setTransform(-4.3,30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgBAFQADgFgCgD");
	this.shape_1.setTransform(-7.9,42.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AlvKYIAMASQAGAIgIAnQgIAjAKAHQAMAHAVgJQAMgFAZgPQAGgDAagaQAWgWAdgHQAdgHAOAKQAHAFAIAHQAVAAAZgYQAHgHAegdQAbgbAAgNQAAgRABgDQACgFARgYQAMgRBEhcQBBhWAEgNQADgKgCAAQgHADgGgIQgKgMgTgGQgTgHgNAGQgKAFAEAfQAFAegGACQgFABACgJQABgLgKAAQgLAAgDAlQgEAyAAACQgFAPgUAlQgUAmAHgUQAEgLAJgvQAGgwAHgTQANgsAIgYQAOgsAOgNQANgOAjgLQAXgIAXgEQAKgCAdAIQAfAJAKAAQAaAAA1gSQAQgGAKgHQALgJgEgJQgSglgigeQgUgSAAgWQAAgXAUgYQATgXAmgIQAjgIAPAKQAJAGAaARQAVAMACgNQAEgYAbgkQAHgJAXgFQAUgDACgNQAGgzADggQABgSAbgaQAagYAAgIQAAgHgVgMQgUgLAFgQQAEgMAUgXQAPgSgEgIQgBgBgVgaQgQgSADgNQADgJAUgeQAQgZgFgDQgSgKgNgJQgZgRgCgNQgBgGAFgyQAFgogJgCQgTgDgXgJQgggNgGgLQgFgKAFgyQAEgqgEAEQgHAHgwAMQgxAMAAgHQADgcABgUQACgmgGANQgFAOggACQglgBgOAAQgOAAgBgBQgDgFgSgGQgYgIgpAOQg2ARAegFQAMgCANAOQAFAFAUAdQALAQgGAhQgJAzAAAKQAAAOADAgQACARgFAKQgFAJgPAKQgLAHADAFQAGAIAKAaQAMAdAAAKQAAALgHAFQgEADgRAJQgKAFAEANQAGAZAAAGQAAAPgJAEQgPAEgJAEQgLAGADAXQACAMAGAXQABALgHANQgKASgCAIQgFAPgVAOQgUANgQADQgKACgPgcQgLgWAAAFQAAALgJAKQgGAGgRAQQgNALg3AGQhIAHAAAAQhFARgdARQgVAMggAMQgPAFhJAXQgqANhhAEQhOACADAFQAHAKBIANQBIAOAegCQAUgBBOgEQBKgFAagGQAbgFASALQALAHAVAPQAQAIAAAEQABADgCANQAAAHACAQQABAQAAATQAAAQgRAbQgVAfgIAeQgJAkg6BAQg+BBgOAPQgUAVhcAoQhXAmgiAFQgeAEgJAEQgKAFgCALQgDALArAMQAqALAxADQAiABAXgKQAPgGAKAHQAOAJAAAXQAAAHgEAeQgCALgGALQAAAIAXAKIAAAAIAEABIAAABIAIADAgYBxQgaALgSgZQgNgRgDgYQgDgbANgPIAfgjQAiAAAJAEQASAHAEAYQACASAEAUQAAANgNANQgVAZgSAIgADCBUQgPgIAMgOQAzg+AIAWQAFALgJASQgIARgPAMQgOAMgPgIgAgqFxQgIgjgEgUQgHgjACgGQADgJAYgEQAYgEgRAKQgOAIABADQAEAHgGAKQgKAPAIA8IACAJAhQHuIAAAFQAAAXgGAGQgCACgXALQgMAHACgEQAGgKgFgIQgGgQgDgFQgGgJgPAFQgOAEAEAHQACADgFgBQgHgCABgGQABgFgKAAQgLgBgDAYQgBAOgDAlQgEAWgQgGQgqgPgCgBQgegFgTgUQgSgVAAgcIAKgSQAPgVAXgVQAYgVAzgSQAcgJAsgMQAWgIAFAOQAEAJAEAkQADARgNAhQgIAUASgBQAKgBAHgGQABgOACAE");
	this.shape_2.setTransform(0,-6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AljMDQgKgHAIgjQAIgngGgIIgMgSIAAAAIAEABIAAABIAIADIgIgDIAAgBIgEgBIAAAAQgXgKAAgIQAGgLACgLQAEgeAAgHQAAgXgOgJQgKgHgPAGQgXAKgigBQgxgDgqgLQgrgMADgLQACgLAKgFQAJgEAegEQAigFBXgmQBcgoAUgVIBMhQQA6hAAJgkQAIgeAVgfQARgbAAgQQAAgTgBgQIgCgXQACgNgBgDQAAgEgQgIIgggWQgSgLgbAFQgaAGhKAFIhiAFQgeAChIgOQhIgNgHgKQgDgFBOgCQBhgEAqgNIBYgcQAggMAVgMQAdgRBFgRIBIgHQA3gGANgLIAXgWQAJgKAAgLQAAgFALAWQAPAcAKgCQAQgDAUgNQAVgOAFgPQACgIAKgSQAHgNgBgLQgGgXgCgMQgDgXALgGQAJgEAPgEQAJgEAAgPQAAgGgGgZQgEgNAKgFQARgJAEgDQAHgFAAgLQAAgKgMgdQgKgagGgIQgDgFALgHQAPgKAFgJQAFgKgCgRQgDggAAgOQAAgKAJgzQAGghgLgQQgUgdgFgFQgNgOgMACQgeAFA2gRQApgOAYAIQASAGADAFQABABAOAAIAzABQAggCAFgOQAGgNgCAmIgEAwQAAAHAxgMQAwgMAHgHQAEgEgEAqQgFAyAFAKQAGALAgANQAXAJATADQAJACgFAoQgFAyABAGQACANAZARIAfATQAFADgQAZQgUAegDAJQgDANAQASIAWAbQAEAIgPASQgUAXgEAMQgFAQAUALQAVAMAAAHQAAAIgaAYQgbAagBASIgJBTQgCANgUADQgXAFgHAJQgbAkgEAYQgCANgVgMIgjgXQgPgKgjAIQgmAIgTAXQgUAYAAAXQAAAWAUASQAiAeASAlQAEAJgLAJQgKAHgQAGQg1ASgaAAQgKAAgfgJQgdgIgKACQgXAEgXAIQgjALgNAOQgOANgOAsIgVBEQgHATgGAwQgJAvgEALQgHAUAUgmQAUglAFgPIAEg0QADglALAAQAKAAgBALQgCAJAFgBQAGgCgFgeQgEgfAKgFQANgGATAHQATAGAKAMQAGAIAHgDQACAAgDAKQgEANhBBWIhQBtQgRAYgCAFQgBADAAARQAAANgbAbIglAkQgZAYgVAAIgPgMQgOgKgdAHQgdAHgWAWQgaAagGADQgZAPgMAFQgMAFgJAAQgHAAgFgDgAiEF9QgsAMgcAJQgzASgYAVQgXAVgPAVIgKASQAAAcASAVQATAUAeAFIAsAQQAQAGAEgWIAEgzQADgYALABQAKAAgBAFQgBAGAHACQAFABgCgDQgEgHAOgEQAPgFAGAJQADAFAGAQQAFAIgGAKQgCAEAMgHQAXgLACgCQAGgGAAgXIAAgFQABgKABgBIAAAAIABABIAAAAIAAAAIAAAAIAAAAIgBgBIAAAAQgBABgBAKQgHAGgKABQgSABAIgUQANghgDgRQgEgkgEgJQgDgJgKAAQgGAAgIADgAggEEQgYAEgDAJQgCAGAHAjIAMA3IACAJIgCgJQgIg8AKgPQAGgKgEgHQgBgDAOgIQAMgHgJAAIgKABgAhKAQQgNAPADAbQADAYANARQASAZAagLQASgIAVgZQANgNAAgNIgGgmQgEgYgSgHQgJgEgiAAgAC/A+QgMAOAPAIQAPAIAOgMQAPgMAIgRQAJgSgFgLQgCgGgGAAQgOAAglAug");
	this.shape_3.setTransform(0,-6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAAAIABAA");
	this.shape_4.setTransform(-36.6,60);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AEjk1QAKgFADALQACAGAAAOQAAAHABAiQgDAggNAEQgMADACAJQACALgGAHQhUBWgSAVQgNAQgZAnQgYAjgIAPQgFAJgmAwQgoAxgGAKQgPAcgDAIQgOAUgLAIQgQALgyAaQg0AbgUAHQhLAYgXAAQgOAAgRgHQgTgJALgIQAGgGAcgFQAagGAKgKQAHgIAbgSQAagSANgPQALgMAfgUQAXgPgBgIQgFgRgBgKQgCgSAIgKQAHgJAYgUQAdgYAFgFQAPgPATgaQAaggACgKQABgIANgNQANgNADgJQACgHgDgcQgDgUAKAAQANAAADADQAAABAGAOQAEAMAGgGQAFgGAAgSQAAgUgHgMQgHgNgNACQgDABgWANQgOAIgNgKQgPgKAGgPQADgIAMgNQAFgFASgKQAKgFAWgLQAKgGALgMQAHgFADAPQADAMACARQAEAMAMACQAIABAJARQAHAQAMgEQAJgDAHgIQAFgHANAAQAMAAgBACQgBABAOgDQAVgFANgNQAOgPgEgOQgDgNAIgVg");
	this.shape_5.setTransform(9.7,44.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF3BB").s().p("AkmEwQgTgJALgIQAGgGAcgFQAagGAKgKQAHgIAbgSQAagSANgPQALgMAfgUQAXgPgBgIQgFgRgBgKQgCgSAIgKQAHgJAYgUIAigdQAPgPATgaQAaggACgKQABgIANgNQANgNADgJQACgHgDgcQgDgUAKAAQANAAADADIAGAPQAEAMAGgGQAFgGAAgSQAAgUgHgMQgHgNgNACQgDABgWANQgOAIgNgKQgPgKAGgPQADgIAMgNQAFgFASgKIAggQQAKgGALgMQAHgFADAPIAFAdQAEAMAMACQAIABAJARQAHAQAMgEQAJgDAHgIQAFgHANAAQAMAAgBACIANgCQAVgFANgNQAOgPgEgOQgDgNAIgVIAJgTQAKgFADALQACAGAAAOIABApQgDAggNAEQgMADACAJQACALgGAHQhUBWgSAVQgNAQgZAnQgYAjgIAPQgFAJgmAwQgoAxgGAKIgSAkQgOAUgLAIQgQALgyAaQg0AbgUAHQhLAYgXAAQgOAAgRgHg");
	this.shape_6.setTransform(9.7,44.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AjfA9QgfADgBAGQgCAGAiAEQAmAFBAgIQBIgJAxgVQAxgWAZgFQAXgEAvADQAlACAAASQAAAGgBAPQgBAQAFANQAKAbAIgEQAFgDAVgUQAZgRADhCQAEhFgugLQgRgEgYgPQgYgPgMgCQgugKhbBOQgeAYhSAlQhSAngdADg");
	this.shape_7.setTransform(-32.7,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF3BB").s().p("AC4BZQgFgNABgQIABgVQAAgSglgCQgvgDgXAEQgZAFgxAWQgxAVhIAJQhAAIgmgFQgigEACgGQABgGAfgDQAdgDBSgnQBSglAegYQBbhOAuAKQAMACAYAPQAYAPARAEQAuALgEBFQgDBCgZARQgVAUgFADIgDAAQgHAAgIgXg");
	this.shape_8.setTransform(-32.7,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AArhSQhCAngTgOQgSgNgDgqQgDghgSADQgZABgFACQgDABgLAVQgOAdgKAlQgPA0AJAaQAPAmAhAkQAoAsAjgCQAqgDAIgCQAOgEgCgMQgFgWgCgQQgCgcAJgXQAVgzBDgkQBRgqg7gVQgWgHhIAqg");
	this.shape_9.setTransform(-26.2,69.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF3BB").s().p("AhuBlQghgkgPgmQgJgaAPg0QAKglAOgdQALgVADgBQAFgCAZgBQASgDADAhQADAqASANQATAOBCgnQBIgqAWAHQA7AVhRAqQhDAkgVAzQgJAXACAcQACAQAFAWQACAMgOAEQgIACgqADIgDAAQgiAAgmgqg");
	this.shape_10.setTransform(-26.2,69.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA4h3QACALASAZQAOAVgDASQgFAdgpAqQgvA1gFAFQgfAbglAHIgDgSQgBABABADQAAABgDABQAAgcgBgOQADAEAHAFQABgCADgFQACgFABgDQAIADALgMQAJgJAFgMQADACADADQAKgJgBgSIAFAFQACgMAAgHQAAAAACACQACABAAAAQABgDAEgJQAEgHAAgEIAFAFQADgHAEgNQAFgQABgDIAAAIQAHgGADgMQADgOACgEQAEgGAJgJQAIgJADgGg");
	this.shape_11.setTransform(10.3,43.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF3BB").s().p("AhTBlIAAAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBgqIAKAJIADgGIADgJQAIADALgLQAKgKAFgMIAFAFQALgJgBgSIAFAGIABgUIADACIACABIAFgMQADgGABgFIAFAFIAHgUIAFgTIABAIQAHgFACgNQADgOADgEQADgFAJgKQAJgJADgFQABAKASAZQAPAVgEASQgFAdgpAqQguA2gGAEQgeAbgmAHg");
	this.shape_12.setTransform(10.3,43.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABchSQAJgagCgOQgtgHg/BiQgFAIgMAXQgKAUgKALQgcAigXATIAJAPQAEAFAFAKQAFAIAHABIAEgOQAFgBAGgEQAHgEADgCQABgKgBgFIADAEQACgCABgEQABgEACgBQAHAEACAAQABgJgBgFQACAFAEAGQAAgMAAgFQAGAEADABQAFgNgBgIQAFAFAAABQAAgIABgEQACgDAFgGIAFAJQAGgPgBgPIAFAJQAHgRgBgIQADAEAGAEQAAgBAAgIQABgHgBgEQAPALAHgcIAFAGQAAgNAHgOQABADAAAGQAJgIAKgZg");
	this.shape_13.setTransform(5.6,40.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF3BB").s().p("AhQByIgJgPIgJgPQAXgTAcgiQAKgLAKgUIARgfQA/hiAtAHQACAOgJAaQgKAZgJAIIgBgJQgHAOAAANIgFgGQgHAcgPgLQABAEgBAHIAAAJIgJgIQABAIgHARIgFgJQABAPgGAPIgFgJIgHAJQgBAEAAAIIgFgGQABAIgFANQgDgBgGgEIAAARQgEgGgCgFIAAAOIgJgEQgCABgBAEIgDAGIgDgEIAAAPIgKAGQgGAEgFABIgEAOQgHgBgFgIg");
	this.shape_14.setTransform(5.7,40.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgwASQgOgBABgLQABgHAJgHQAHgFAOADQAPAEAGgCQAEgBAXgWQAUgRALAKQAkAgg/AhQgWANgVACQgYACgDgOg");
	this.shape_15.setTransform(31.3,22.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF3BB").s().p("AgwAeIAAgMQgOgBABgLQABgHAJgHQAHgFAOADQAPAEAGgCQAEgBAXgWQAUgRALAKQAkAgg/AhQgWANgVACIgGAAQgSAAgDgMg");
	this.shape_16.setTransform(31.3,22.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgegKQgLAdAeAGQAbAHAMgaQAQgegcgBQgSAAgZAMg");
	this.shape_17.setTransform(34,16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFF3BB").s().p("AgLAZQgegGALgdIADgDQAZgMASAAQAcABgQAeQgKAUgSAAIgLgBg");
	this.shape_18.setTransform(34,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-85,123.6,170.1);


(lib.tric_frontleg_R_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhjheQAFgDADgDQALgIgVgWQgSgTgsgBQgaAAgLACQgXADgMAKQgLAKABAZQAAANACAZIgEANQABALgEAfQgDAYAEARQAGAEAMAHQALAGAJADQAKAEAOgBQAIAAARgBQAaABAMAMQAGAGADAMQADAPACAFQAIANAKACQAHACAQABQAEAAAEADQAEADAFAAQALAAAKgHQAJgHAPgmQAMggASgBQAVgBA2A2QgOgGgJgIQADAHAIAJQAJAJADAGQABACAFASQADALAIAGQAOALAXAGQAYAFARgFQAWgHAKgXQAIgcAEgPQAJgaADgSQAEgXgCgXQgEgcgJgLQgMgNgcAEQgIABgmAJQgbAHgUgBQgxgCgfgKQgugOgRggQgCgEgHgyQgFgfgcgDQgQgBgJAFQgNAGAHAPQACAEAJAFQAJAGACAFQADAFABAJQABAFABAJQgDACgNACQgCACgCACQAAAAABABQgDgCgCgBQAFgBADgBgAhmhZQAEACAIACQANADAFAFQgKgDgHgCQgKgDgDgEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("ACYCqQgXgGgOgLQgIgGgDgLIgGgUQgDgGgJgJQgIgJgDgHQAJAIAOAGQg2g2gVABQgSABgMAgQgPAmgJAHQgKAHgLAAQgFAAgEgDQgEgDgEAAQgQgBgHgCQgKgCgIgNQgCgFgDgPQgDgMgGgGQgMgMgagBIgZABQgOABgKgEQgJgDgLgGIgSgLQgEgRADgYQAEgfgBgLIAEgNIgCgmQgBgZALgKQAMgKAXgDQALgCAaAAQAsABASATQAVAWgLAIIgIAGIgIACIAFADQADAEAKADIARAFQgFgFgNgDIgMgEIgBgBIAEgEQANgCADgCIgCgOQgBgJgDgFQgCgFgJgGQgJgFgCgEQgHgPANgGQAJgFAQABQAcADAFAfQAHAyACAEQARAgAuAOQAfAKAxACQAUABAbgHQAmgJAIgBQAcgEAMANQAJALAEAcQACAXgEAXQgDASgJAaIgMArQgKAXgWAHQgIACgLAAQgKAAgMgCgAhrhcIAIgCIgEAEIABABIgFgDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-18.2,52.5,36.5);


(lib.tric_frontleg_R_foot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgKABQAAABgDADQgCACAAAEQABAIAGABQAFABADgEQAGgGAHgRQAEgIgDgDQgDgEgIAFIgLAFQgBAEgBAIg");
	this.shape.setTransform(3.9,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AgIAUQgGgBgBgIQAAgEACgCIADgEQABgIABgEIALgFQAIgFADAEQADADgEAIQgHARgGAGQgCADgEAAIgCAAg");
	this.shape_1.setTransform(3.9,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgBAAQgDAAgBAAQgDADABAIQAWADgKgXQgBAAgFAGg");
	this.shape_2.setTransform(8.4,6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AgHAKQgBgHADgEIAEABIAAgEIAGgGQAJAVgQAAIgFgBg");
	this.shape_3.setTransform(8.4,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgTAFQAIAQALgGQAEgCAHgFQAHgGACgDQABgDgBgFQAAgGgCgBQgCgBgDADQgFADgBAAQgBABgLACQgJABgCAHg");
	this.shape_4.setTransform(2.7,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgTAFIADgFQACgHAJgBIAMgDIAGgDQADgDACABQACABAAAGQABAFgBADQgCADgHAGQgHAFgEACIgFACQgIAAgGgMg");
	this.shape_5.setTransform(2.7,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgVIgVAJQABABAAAEQgBAEABACQABABAEAAQAEAAABACQADACACAHQACAIACACQAEAAAJgIQAIgIACgFQADgMgKgCQgMgCAAgEg");
	this.shape_6.setTransform(6.5,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AgGALQgCgGgCgDQgBgCgEAAQgEAAgBgBQgBgCAAgDIAAgGIAVgJIADABQAAAEALACQALACgEAMQgCAGgIAHQgIAIgFAAIgEgKg");
	this.shape_7.setTransform(6.6,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgigRQABALAMAGQARAJACACQACAEAKAQQAKAMAHgLQACgDAAgIQABgIABgDQADgGABgDQACgDgEgEQgCgEgHgDQgIgDgDgCQgFgDgFgFQgFgHgBAAQgDgDgDAAQgBAAgIACg");
	this.shape_8.setTransform(1.8,-6.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AAKAfQgKgQgCgEIgTgLQgMgGgBgLIAQgRIAJgCQADAAADADIAGAHQAFAFAFADIALAFQAHADACAEQAEAEgCADIgEAJIgCALQAAAIgCADQgEAFgEAAQgEAAgFgGg");
	this.shape_9.setTransform(1.8,-6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgtgoQAAAEAJANQADAGAFANQADAEAKAKQADAEAEASQAIAjANgQQABgCACgHQACgEAGgDQAHgDAPgCQACgIgUgOQgXgMgFgEQgKgJgIgOQgDgJgCgEQgDgHgGgDg");
	this.shape_10.setTransform(2.9,-2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AgIAfQgEgRgDgEQgKgKgDgFIgIgTQgJgMAAgEIANgOQAGACADAIIAFAMQAIAOAKAKIAcAQQAUAOgCAHQgPADgHADQgGACgCAFIgDAJQgEAEgEAAQgHAAgGgYg");
	this.shape_11.setTransform(2.9,-2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgRgGQAQAOADAZQABAEACAJQABAIAEADQAEADAHgBQAHgBAEgEQAKgHgCgNQgCgLgJgJQgOgKgGgEQgJgGgCgMQgDgQgDgJQgEgPgLAAIgQANQgCALAJALQAEAGALALg");
	this.shape_12.setTransform(-0.9,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AAKA5QgEgDgBgIIgDgNQgDgZgQgOIgPgRQgJgLACgLIAQgNQALAAAEAPIAGAZQACAMAJAGIAUAOQAJAJACALQACANgKAHQgEAEgHABIgDAAQgFAAgDgCg");
	this.shape_13.setTransform(-0.9,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAkAAQgFAEgEACIgJAJQgegBgJgCQgKgCgGgIQgDgCAAgCQABgDAGgIQAJACAPABQAJAAARgBQAEAAAKgBQAIAAABADQABADgFAGg");
	this.shape_14.setTransform(-5.1,-10.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AgVALQgKgBgGgIQgDgDAAgCQABgCAGgIQAJACAPAAIAaAAIAOgBQAIAAABADQABADgFAGQgFAEgEACIgJAIQgegBgJgCg");
	this.shape_15.setTransform(-5.1,-10.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAJACIgFALQgBgCgDgDQgGgEgCgCQgHgEAAgBQgCgCAFgGQAEgFAEgBQAEgBACADQAMAJACAFQgEACgDABg");
	this.shape_16.setTransform(-2.6,-7.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AAAAKIgHgFIgIgFQgBgDAEgFQAFgGADgBQAEgBADAEQAMAIABAEQgDADgEACIgEALIgFgGg");
	this.shape_17.setTransform(-2.7,-8.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgKgOQgFAEAAADQAAACAEAIQABABAAAIQABADAFABQANADAFgKQADgIgDgPQgJADgFgDg");
	this.shape_18.setTransform(-5.8,-6.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AgEAPQgFgBgBgDIgBgJIgEgKQAAgDAFgEIAKAAQAFADAJgDQADAPgDAIQgEAIgKAAIgEgBg");
	this.shape_19.setTransform(-5.8,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-13,20.5,26.1);


(lib.tric_frontleg_R_btm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ACBioQAEAmgZA1QgPAeggA2QgDAGgTAiQgNAZgIAQQgQAngCAGQAAADgDAWQgDAOgEAJQgBAFgFAPQgFAOgEADQgFAEgQAAQgMgBgKgBQgVgDgSgMQgWgPABgUQAAgIAIgLQAOgQABgBQAKgSAEgUQACgHAFgkQAEgaAHgQQADgKACgOQACgSACgGQAAgGgSgkQgMgWAagMQAHgDAggMQAYgJALgIQAPgJATgYQAUgbALgJQAUgPATAUQAQARADAYg");
	this.shape.setTransform(1.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AhEDcQgVgDgSgMQgWgPABgUQAAgIAIgLIAPgRQAKgSAEgUIAHgrQAEgaAHgQQADgKACgOQACgSACgGQAAgGgSgkQgMgWAagMIAngPQAYgJALgIQAPgJATgYQAUgbALgJQAUgPATAUQAQARADAYQAEAmgZA1QgPAeggA2IgWAoQgNAZgIAQIgSAtIgDAZQgDAOgEAJIgGAUQgFAOgEADQgFAEgQAAIgWgCg");
	this.shape_1.setTransform(1.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AANiFQgLgLgIgBQgMgBgEAPQgCAHAFAQQAGAUABACQAGAugLA4QgIAugOApQgCAGgFAPQgDANAKAGQAJAGAKgIQAJgFAGgLQAKgVAFgoQAGg2ACgKQAPg2AHgcQAMgygGgFQgGgFgOAEg");
	this.shape_2.setTransform(-9.4,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AgnCPQgKgGADgNIAHgVQAOgpAIguQALg4gGguIgHgWQgFgQACgHQAEgPAMABQAIABALALIANgFQAOgEAGAFQAGAFgMAyIgWBSQgCAKgGA2QgFAogKAVQgGALgJAFQgGAFgFAAQgEAAgEgDg");
	this.shape_3.setTransform(-9.4,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,-23.2,30.4,46.5);


(lib.tric_frontleg_L_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhXh5QAGgCAFgDQAMgIgSgaQgQgWgtgIQgagEgOAAQgXgBgPAJQgNAJgDAZQgCAOgCAbIgGANQgBAMgJAfQgHAbABATQAFAEAMAIQALAIAIAFQAKAFAPACQAaADAAAAQAdAGAJANQAGAHAAANQABARACAFQAGAPALAEQAGACARAEQAEABAEAEQADAEAGABQAMACAKgGQALgGAWgmQARggAUACQAYADAuBBQgOgIgIgKQACAHAIALQAHALACAHQABAEACARQABAMAIAIQANAOAXAKQAZAJATgDQAXgDAOgXQAIgNAMgeQAOgbAFgRQAIgYABgYQABgggIgKQgKgQgegBQgJAAgoAEQgeACgVgEQg0gLgdgOQgugWgNgkQgCgFAAg1QABgigdgHQgRgDgKADQgPAEAFARQACAEAIAIQAJAHACAGQACAGgBAYQgFACgIAAQgDAAgDAAgAhah1QAFADAIADQAMAFAFAHQgKgFgHgDQgKgGgDgEQgDgCgBgBQADAAAEgBQgCABgCABQABABAAABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("ACHDDQgXgKgNgOQgIgIgBgMQgCgRgBgEQgCgHgHgLQgIgLgCgHQAIAKAOAIQguhBgYgDQgUgCgRAgQgWAmgLAGQgKAGgMgCQgGgBgDgEQgEgEgEgBQgRgEgGgCQgLgEgGgPQgCgFgBgRQAAgNgGgHQgJgNgdgGIgagDQgPgCgKgFQgIgFgLgIIgRgMQgBgTAHgbQAJgfABgMIAGgNIAEgpQADgZANgJQAPgJAXABQAOAAAaAEQAtAIAQAWQASAagMAIIgLAFIAGAAQAIAAAFgCQABgYgCgGQgCgGgJgHQgIgIgCgEQgFgRAPgEQAKgDARADQAdAHgBAiQAAA1ACAFQANAkAuAWQAdAOA0ALQAVAEAegCIAxgEQAeABAKAQQAIAKgBAgQgBAYgIAYQgFARgOAbQgMAegIANQgOAXgXADIgJABQgQAAgTgHgAheh4IAEADQADAEAKAGIARAIQgFgHgMgFIgNgGIgBgCIAEgCIgHABIAAAAgAheh4IAHgBIgEACIABACIgEgDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-21.2,55,42.5);


(lib.tric_frontleg_L_foot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgSgDQANAPAFADQAHAFAHgDQAHgDAAgJQgBgNgTgGQgRgIgEAQg");
	this.shape.setTransform(-4.5,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AAAAPQgFgDgNgPIgCgDQAEgQARAIQATAGABANQAAAJgHADIgFABQgFAAgEgDg");
	this.shape_1.setTransform(-4.5,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAZgFQgLgJgLAIQgIAGgMAFQANAGAJgBQAOgBAFgKg");
	this.shape_2.setTransform(2.5,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AgVAFQANgFAIgGQALgIALAJIgBAEQgFAKgOABIgCABQgKAAgLgGg");
	this.shape_3.setTransform(2.9,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgTgBQABABAJAGQAHAGACAFQAKAAALgFQADgLgUgKQgSgMgGAKg");
	this.shape_4.setTransform(-1.6,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AAAARQgCgFgHgGIgKgHIgBgKQAGgKASAMQAUAKgDALQgKAFgLAAIAAAAg");
	this.shape_5.setTransform(-1.6,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AASgTQgGAJgRAKQgVAIgFAGQAEAFAWAFQAHABADgDQACgCAGgGQADgDAJABQAHAAACgHQADgHgPgMg");
	this.shape_6.setTransform(-8.9,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AgGAWQgWgFgEgFQAFgGAVgIQARgKAGgJIAEAFQAPAMgDAHQgCAHgHAAQgJgBgDADIgIAIQgCACgDAAIgFAAg");
	this.shape_7.setTransform(-8.8,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgJgRQgEAGgCAJQgDAJADAFQACAFAMACQACAAAOAAQACgFAAgLQAAgKgDgCg");
	this.shape_8.setTransform(-1.1,5.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AgBASQgMgBgCgFQgDgFADgJQACgJAEgHIAXAIQADACAAAKQAAALgCAGIgQgBg");
	this.shape_9.setTransform(-1.1,5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAOgQQgGgEgGABQgCAAgFAEQgGAEgCABIgIAIQAAACgBAIQAAAIACACQAEAEAGgCQAFgDABgFQAEgCAHACQAIADADgBQADgCABgJQABgGgBgEQgCgGgGgDg");
	this.shape_10.setTransform(4.2,4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AgUASQgCgCAAgIIABgKIAIgIIAIgFQAFgEACAAQAGgBAGAEQAGADACAGQABAEgBAGQgBAJgDACQgDABgIgDQgHgCgEACQgBAFgFADIgEAAQgDAAgDgCg");
	this.shape_11.setTransform(4.2,4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMgJQgCAFABAFQABAIAEADQADACAFABQAJAAADgDQADgCAAgJQgBgHgCgEQgFgHgOAFg");
	this.shape_12.setTransform(10.7,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AAAAPQgFgBgDgCQgEgDgBgIQgBgFACgFIAFgDQAOgFAFAHQACAEABAHQAAAJgDACQgDADgHAAIgCAAg");
	this.shape_13.setTransform(10.7,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgQAAQAFADALAOQAKAIAHgQQADgHgEgEQgHgHgDgEQgGgHgBABQgFAFgFADg");
	this.shape_14.setTransform(8.9,-2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AAAARIgRgRIAFgLIAKgIQACgBAGAHIAJALQAFAEgDAHQgFALgHAAQgDAAgCgDg");
	this.shape_15.setTransform(9,-2.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgfgbQgBALAJAJQAOAOABACQADAEAFATQAFAOAKgJQADgDACgHQACgIACgCQACgDAEgFQADgEgCgFQgBgDgGgFQgHgFgCgCQgEgEgDgGQgFgIgBgBQgCgEgCgBQgBAAgIAAg");
	this.shape_16.setTransform(6.1,-7.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AAAAgQgFgTgDgEIgPgQQgJgJABgLIAUgMIAJAAQACABACAEIAGAJQADAGAEAEIAJAHQAGAFABADQACAFgDAEIgGAIIgEAKQgCAHgDADQgEADgDAAQgGAAgCgIg");
	this.shape_17.setTransform(6.1,-7.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMgtQgBgIgFgEIgRALQgBAEAGAOQACAHABANQABAHAHALQACAEAAASQAAAkAQgLQABgCADgGQADgEAGgBQAEAAAIABQAIAAADAAQAEgHgQgTQgTgTgDgDQgIgOgDgOQgBgJgBgFg");
	this.shape_18.setTransform(3.4,-3.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AgRAfQAAgSgCgEQgHgLgBgHIgDgUQgGgOABgEIARgLQAFAEABAIIACAOQADAOAIAOQADAEATASQAQATgEAHIgLAAIgMgBQgGABgDAEQgDAGgBACQgEADgDAAQgJAAAAgcg");
	this.shape_19.setTransform(3.4,-3.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Agag1QgEAKAFANQADAHAIANQAKATgBAZQAAAEgBAIQgBAIADAEQAEAFAFAAQAGABAGgCQALgGABgMQABgMgHgKQgKgNgFgGQgHgIgBgMQACgRAAgJQgBgQgIgDg");
	this.shape_20.setTransform(-1,-1.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AAFA/QgFgBgEgEQgDgEABgIIABgNQABgZgKgSIgLgVQgFgMAEgKIATgJQAIADABAQIgCAZQABANAHAIIAPASQAHALgBALQgBANgLAFQgEACgFAAIgDAAg");
	this.shape_21.setTransform(-1,-1.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAYgMQgBgCgFgHQgFAGgJAFQgIAGgGADQgFABgDABQgEACgBAEQAAADAEAEQAEAEADAAIAHAFQAQgLAFgFQAFgFACgHQABgFAAgCg");
	this.shape_22.setTransform(3.1,-12.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AgMASQgDgBgEgEQgEgEAAgDQABgDAEgDIAIgCIAOgJQAJgEAFgHIAGAJIgBAHQgCAHgFAGQgFAFgQAKg");
	this.shape_23.setTransform(3.1,-12.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAHAEIgHAKQAAgDgDgEQgFgGgBgBQgFgHAAAAQgBgDAGgEQAGgEADAAQACAAAEAEQAJALAAAEQgHADgBAAg");
	this.shape_24.setTransform(-0.6,-10);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("AgDAKIgGgIIgFgHQgBgCAGgFQAGgDADAAQACAAAEAEQAJALAAAEIgIADIgHAKQAAgEgDgDg");
	this.shape_25.setTransform(-0.6,-10.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAQgKQgIABgHgEIgIgDQgHACAAADQAAACABAJQAAABgCAIQAAADAEACQAIADADAAQAFAAAEgFQAEgGADgQg");
	this.shape_26.setTransform(-3.9,-9.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF3BB").s().p("AgLAOQgEgCAAgDIACgJIgBgLQAAgDAHgCIAIADQAHAEAIgBQgDAQgEAGQgEAFgFAAQgDAAgIgDg");
	this.shape_27.setTransform(-3.9,-9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-15.8,26.4,31.6);


(lib.tric_frontleg_L_btm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhSipQgBgkADgOQAGgaAdADQAYADATASQAbAcAPA8QAJAiAMBDQAAACAJAsQAGAdAFATQALAmAFALQACAFAKASQAIAOADAKQABAFAHAPQAFAOgBAGQgCALgfATQgTANgXACQgcADgNgRQgGgHAAgOIAAgYQgDgVgJgUQgDgFgUgiQgPgYgGgSQgDgKgJgOQgLgQgDgHQgEgGgngNQgZgLAOgbQADgGASggQAOgXAFgQQAGgSgCggg");
	this.shape.setTransform(1.9,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AAQDlQgGgHAAgOIAAgYQgDgVgJgUIgXgnQgPgYgGgSQgDgKgJgOQgLgQgDgHQgEgGgngNQgZgLAOgbIAVgmQAOgXAFgQQAGgSgCggQgBgkADgOQAGgaAdADQAYADATASQAbAcAPA8QAJAiAMBDIAJAuQAGAdAFATQALAmAFALIAMAXQAIAOADAKIAIAUQAFAOgBAGQgCALgfATQgTANgXACIgIAAQgWAAgLgOg");
	this.shape_1.setTransform(1.9,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag/h1QgQgCgJAGQgLAHAHAPQADAHAPAJQASAMADACQAlAiAcA0QAZAsAQAqQACAGAGAPQAGANAMgCQALgBAEgNQADgMgCgMQgFgZgXgkQgfgugFgKQgag4gLgbQgYgwgJAAQgJAAgIANg");
	this.shape_2.setTransform(-5.5,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AA9CEIgIgVQgQgqgZgsQgcg0glgiIgVgOQgPgJgDgHQgHgPALgHQAJgGAQACIAHgNQAIgNAJAAQAJAAAYAwIAlBTQAFAKAfAuQAXAkAFAZQACAMgDAMQgEANgLABIgCABQgKAAgGgMg");
	this.shape_3.setTransform(-5.5,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-25.4,32.2,51);


(lib.tric_backleg_R_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AktE5QAKAAAQACQARABAXgHQAdgJALgIQALgIAQgVQAOgUgDgWQgDgVgMgCQgIgBABAKQABARgDAJQgGARgCgYQgCgXAIgQQAFgMAGgHQAEgFAHgHQAEgEgDgIQABgKAWgRQAKgIAkgiQAYgVANgGQAHgDAUgFQARgFAUgLQAcgNAggUQAdgUAVgUQAcgZAVgZQADgDAPgUQAIgLAQgFQAHgDAhgRQAagPAYgEQAZgFAigVQASgLAUgPQAIgFgBgKQAAgBgEgRQAAgXgEgPQgGgdgbABQgWABgXgOQgTgLgJAGQgEACghALQgZAJgOAPQgMAOgfAYQgiAbgPAOQg8A8hcA+QheA+gMALQgVAWgmASQgsAZgSAOQhIA4gDADQgtAkgJARQgMAXgFAjQgGAoALAUQAQAbASAUQAXAbAPABQASABAEgCQAFgDAAgQQAAgJgDgHgAl0C8QgGAWAFAFQACADAQAhQAQAhAKAJQATAJAEAFQADADACADQgMAAgDgEQgJgMgEgEQghgQgNgYQgSgeAVgjQABgDABgDQAKgdAAgGQABgJALAGQALAFgHAGQgSARgKAQg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AlFFdQgPgBgXgbQgSgUgQgbQgLgUAGgoQAFgjAMgXQAJgRAtgkIBLg7QASgOAsgZQAmgSAVgWQAMgLBeg+QBcg+A8g8QAPgOAigbQAfgYAMgOQAOgPAZgJIAlgNQAJgGATALQAXAOAWgBQAbgBAGAdQAEAPAAAXIAEASQABAKgIAFQgUAPgSALQgiAVgZAFQgYAEgaAPQghARgHADQgQAFgIALIgSAXQgVAZgcAZQgVAUgdAUQggAUgcANQgUALgRAFQgUAFgHADQgNAGgYAVIguAqQgWARgBAKQADAIgEAEIgLAMQgGAHgFAMQgIAQACAXQACAYAGgRQADgJgBgRQgBgKAIABQAMACADAVQADAWgOAUQgQAVgLAIQgLAIgdAJQgXAHgRgBQgQgCgKAAQADAHAAAJQAAAQgFADQgCABgIAAIgMAAgAl3D9QANAYAhAQIANAQQADAEAMAAIgFgGQgEgFgTgJQATAJAEAFIAFAGQgMAAgDgEIgNgQQgKgJgQghQgQghgCgDQgFgFAGgWQAKgQASgRQACgCAAgCQAAgEgGgDIgBAAIAAAAIAAAAIAAgBIAAAAIgCAAIgBgBIgBAAIAAAAIgCAAIAAAAQgEAAgBAFQAAAGgKAdIgCAGQgVAjASAegAl0C8IAAAAgAlyC2QAKgdAAgGQABgFAEAAIAAAAIACAAIAAAAIABAAIABABIACAAIAAAAIAAABIAAAAIAAAAIABAAQAGADAAAEQAAACgCACQgSARgKAQIACgGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-35.9,83.2,72);


(lib.tric_backleg_R_foot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag9gJQgOALgDAJQgHAVgBADQgCAPAHAFQAHAFAKAHQAIAFAMAAQAKAAAGgPQAIgUAIgGQAMgJAHgDQAGgCAXgGQA0gQgBgVQAAgKgDAAQgKgCgPgEQghgJgRAJQgCABAAgFQAAgHAAgGQAAgHgHgDQgIgEgEAGQgXAigHAHQgMAKgHAHg");
	this.shape.setTransform(10.1,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AhABDIgRgMQgHgFACgPIAIgYQADgJAOgLIATgRQAHgHAXgiQAEgGAIAEQAHADAAAHIAAANQAAABAAABQAAABAAABQABAAAAAAQABAAAAAAQARgJAhAJIAZAGQADAAAAAKQABAVg0AQIgdAIQgHADgMAJQgIAGgIAUQgGAPgKAAQgMAAgIgFg");
	this.shape_1.setTransform(10.1,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAkgIQgagFgOgBQgcAAgDAOQAFABARABQANABAGACQAGADALAGQAJAEACgNg");
	this.shape_2.setTransform(-15.6,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AAXAOIgRgJQgGgCgNgBIgWgCQADgOAcAAQAOABAaAFIgCANQgCAKgGAAIgDgBg");
	this.shape_3.setTransform(-15.6,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgKgPIgEAgQANACAMABQADgRACgVQgKgCgHAEg");
	this.shape_4.setTransform(-9.4,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgPARIAFggIAJgBQAHgEAJACQgBAVgEARQgLgBgOgCg");
	this.shape_5.setTransform(-9.4,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAWgSQgCgEgIAJQgJAKgGgGQgKgHgEALQgCAFgCATQASAEALgEQAQgGgBgQg");
	this.shape_6.setTransform(-5.3,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AgWATQADgTACgFQADgLAKAHQAHAGAJgKQAIgJACAEIAAAPQABAQgQAGQgGACgGAAQgHAAgKgCg");
	this.shape_7.setTransform(-5.3,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgeQAAAOgFAHQgNAKgBABQgHALADALQADANANAAQAUABAJgcQAKgbgYgGg");
	this.shape_8.setTransform(-0.6,7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AgHAiQgNAAgDgNQgDgLAHgKIAOgMQAFgHAAgOIAIAHQAYAGgKAbQgJAbgTAAIgBAAg");
	this.shape_9.setTransform(-0.6,7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAihNQgEAKgDASQgGAWgPATQgRAXgKAJQgEAEgRALQgOAJgEAHQgFALAFALQAFAMALgBQAHgBAQgLQAJgHAMgKQATgOASgYQATgWAGgWQADgLgCgNQgBgDgEgTIgJgKQgIgQgHASg");
	this.shape_10.setTransform(6.6,-3.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("Ag8BNQgFgLAFgLQAEgHAOgJQARgLAEgEQAKgJARgXQAPgTAGgWQADgSAEgKQAHgSAIAQIAJAKIAFAWQACANgDALQgGAWgTAWQgSAYgTAOIgVARQgQALgHABIgCAAQgJAAgFgLg");
	this.shape_11.setTransform(6.6,-3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgfAQQAgAEAHAAQAegCgGgUQgHgZgXANQgYAQgHABg");
	this.shape_12.setTransform(-2.5,11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AgfAQIABgNQAHgBAYgQQAYgNAGAZQAGAUgeACIgmgEg");
	this.shape_13.setTransform(-2.5,11.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AATATQgIgBgNgGIgGgMQgLgIAAgKQARgBALAMQANAKgDAQg");
	this.shape_14.setTransform(1.4,10.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AgCAMIgGgMQgLgIAAgKQARgBALAMQANAKgDAQQgIgBgNgGg");
	this.shape_15.setTransform(1.4,10.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgNgaQgGALAAAEQABABAFAMQALAZADAAQAGABAGgNQAGgKAAgFQABgMgDgEQgEgGgMgDg");
	this.shape_16.setTransform(3.9,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AABAbQgDAAgLgZIgGgNQAAgEAGgLIAOABQAMADAEAGQADAEgBAMQAAAFgGAKQgFAMgGAAIgBAAg");
	this.shape_17.setTransform(3.9,8.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgNgYQgDAJgHAMQAGACAQATQAKAQAKgJQANgMgMgSQgKgQgNgGg");
	this.shape_18.setTransform(5.3,5.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AgCASQgQgTgGgCQAHgMADgJIAKgDQANAGAKAQQAMASgNAMQgEADgEAAQgHAAgFgKg");
	this.shape_19.setTransform(5.4,5.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgXgaQgJARAOATQAMATARAHQAXgcgIgXQgIgagjAFg");
	this.shape_20.setTransform(8.1,3.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AgSALQgOgUAJgRIAGgJQAjgGAIAbQAIAXgXAcQgRgIgMgSg");
	this.shape_21.setTransform(8.1,3.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AATAGQgGANgNARQgNAVgCgIQgIgYgCgHQgCgMAFgGQADgFAGgIQAGgIABgHQgBgLAAgFQgBgIAKACIALACQALAPACAMQACANgJAOg");
	this.shape_22.setTransform(11.1,7.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AgPAxQgIgYgCgHQgCgMAFgGIAJgNQAGgIABgHIgBgQQgBgIAKACIALACQALAPACAMQACANgJAOQgGANgNARQgJAPgEAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_23.setTransform(11.1,7.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AACgWQAAAAgBAAIAIgHQgGgJARgOQAQgOAFAQQADAIgLAJQgKAHgNADIgHAAQAAABgBAAQAIgBAHACQALACACAHQACAHgHAFQgKAEgEAEQgDAEgIAZQgHAUgIACQgMADgKgTQgFgLABgBQAAgBAIgKQAGgIALgPQAKgOAIgFg");
	this.shape_24.setTransform(14.6,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("AglArQgFgLABgBIAIgLIARgXQAKgOAIgFIgBAAIAIgHQgGgJARgOQAQgOAFAQQADAIgLAJQgKAHgNADIgHAAIgBABQAIgBAHACQALACACAHQACAHgHAFQgKAEgEAEQgDAEgIAZQgHAUgIACIgDABQgKAAgJgRg");
	this.shape_25.setTransform(14.6,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAGgnQAJABABAEQABADACAMQACAIgKAKQgLAJgCAIQgDASgFAEQgFAFgCgPQgEgSAHgWQAIgcAMABg");
	this.shape_26.setTransform(17.3,-7.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF3BB").s().p("AgRAcQgEgSAHgWQAIgcAMABQAJABABAEIADAPQACAIgKAKQgLAJgCAIQgDASgFAEIgCACQgDAAgCgMg");
	this.shape_27.setTransform(17.3,-7.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAHg/QgBAEgFAfQgCAbgEAFQgEAFgLAKQgLAKgDAGQgCAFgGACQgCABAFADQAEADAIAAQAIAAAEAHQAIAMAFAMQACAGAHgEQAIgEAFgNQAKgTAEgKQAJgSgFgIQgGgJgCgKQgBgNACgIQAIgQACgLQAGgUgLgEQgIgEgJAGQgIAGgEAKg");
	this.shape_28.setTransform(12,-4.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF3BB").s().p("AgCBQQgFgMgIgMQgEgHgIAAQgIAAgEgDQgFgDACgBQAGgCACgFQADgGALgKQALgKAEgFQAEgFACgbIAGgjQAEgKAIgGQAJgGAIAEQALAEgGAUQgCALgIAQQgCAIABANQACAKAGAJQAFAIgJASIgOAdQgFANgIAEQgDACgCAAQgCAAgCgEg");
	this.shape_29.setTransform(12,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.2,-14.2,40.5,29.1);


(lib.tric_backleg_R_btm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAhkgQAOAIAVAKQARAJALAMQAFAFAVATQANAMAEAJQADAJAGALQADAKgIAKQg/BIgbAoQgYAjgVAqQgWAzgCAYQgBARgOAfQgNAaADAIQAEAJACAVQABAaABAEQACAPgFAMQgFAQgPADQgUAJgKADQgSAFgPgJQgSgKgHgTQgHgSAGgUQAEgPAKgIQAFgFAOgJQAMgLARg1QATg4gDgcQgCgUAAgwQAAgvgDgPQgDgRAFggQAGgrABgKQgCgoACgVQAEglAWgKQAOgGATABQATACASALg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("Ah3EoQgSgKgHgTQgHgSAGgUQAEgPAKgIQAFgFAOgJQAMgLARg1QATg4gDgcQgCgUAAgwQAAgvgDgPQgDgRAFggQAGgrABgKQgCgoACgVQAEglAWgKQAOgGATABQATACASALQAOAIAVAKQARAJALAMIAaAYQANAMAEAJIAJAUQADAKgIAKQg/BIgbAoQgYAjgVAqQgWAzgCAYQgBARgOAfQgNAaADAIQAEAJACAVIACAeQACAPgFAMQgFAQgPADQgUAJgKADQgHACgGAAQgKAAgKgGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-31.2,31.9,62.5);


(lib.tric_backleg_L_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AmVCtQAJAEAPAJQAPAGAYADQAeADANgDQANgCAXgOQAVgNAGgWQAFgTgKgHQgHgFgDAKQgGAQgGAHQgMANAHgWQAHgWAOgMQAKgJAIgEQACgCAMgFQAFgCABgIQAFgJAagHQAOgEAugQQAegLAOAAQAEAAAuACQAkABAZgBQAbgBAUgHQANgFAcgLQATgFABgLQACgLALgEQAqgRArADQAIAAAlgDQAegDAXAFQAaAGAngGQAUgDAZgGQAKgCADgKQAAgBACgRQAJgVADgQQAFgdgZgJQgUgIgQgWQgNgRgLABQgFABgigCQgbgCgSAIQgQAIgnAKQgpAMgTAIQhPAfhvAUQhsAUgQAGQhGAchBARQgTAFhNALQg+AIgNALQgUAOgSAeQgVAjACAWQAEAfAJAaQAKAiAOAHQAQAIAFgBQAGgBAGgOQADgJAAgHQgLgFgBgEQgDgOgDgGQAOAQACAFQABAEABAEgAmMAAQABAAABgBQADgGAWgIQAKgEACAAQgXAJgQAKQgMAPgJAKQgSAWACAIQABADACAmQABAjAGANQgTgXAFgwQAEguAlgbg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("Am5DFQgOgHgKgiQgJgagEgfQgCgWAVgjQASgeAUgOQANgLA+gIQBNgLATgFQBBgRBGgcQAQgGBsgUQBvgUBPgfQATgIApgMQAngKAQgIQASgIAbACQAiACAFgBQALgBANARQAQAWAUAIQAZAJgFAdQgDAQgJAVIgCASQgDAKgKACQgZAGgUADQgnAGgagGQgXgFgeADQglADgIAAQgrgDgqARQgLAEgCALQgBALgTAFIgpAQQgUAHgbABQgZABgkgBIgygCQgOAAgeALIg8AUQgaAHgFAJQgBAIgFACIgOAHQgIAEgKAJQgOAMgHAWQgHAWAMgNQAGgHAGgQQADgKAHAFQAKAHgFATQgGAWgVANQgXAOgNACQgNADgegDQgYgDgPgGQgPgJgJgEIgCgIQgCgFgOgQQADAGADAOQABAEALAFQAAAHgDAJQgGAOgGABIgBAAQgFAAgPgHgAm1BJQgFAwATAXQgGgNgBgjQgCgmgBgDQgCgIASgWIAVgZQAQgKAXgJIgMAEQgWAIgDAGIgCABQglAbgEAugAmhCkQgDgOgDgGQAOAQACAFIACAIQgLgFgBgEgAmKgBQADgGAWgIIAMgEQgXAJgQAKIACgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-21.5,98,43);


(lib.Tric_backleg_L_foot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag9gJQgOALgDAJQgHAVgBADQgCAPAHAFQAHAFAKAHQAIAFAMAAQAKAAAGgPQAIgUAIgGQAMgJAHgDQAGgCAXgGQA0gQgBgVQAAgKgDAAQgKgCgPgEQghgJgRAJQgCABAAgFQAAgHAAgGQAAgHgHgDQgIgEgEAGQgXAigHAHQgMAKgHAHg");
	this.shape.setTransform(10.1,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AhABDIgRgMQgHgFACgPIAIgYQADgJAOgLIATgRQAHgHAXgiQAEgGAIAEQAHADAAAHIAAANQAAABAAABQAAABAAABQABAAAAAAQABAAAAAAQARgJAhAJIAZAGQADAAAAAKQABAVg0AQIgdAIQgHADgMAJQgIAGgIAUQgGAPgKAAQgMAAgIgFg");
	this.shape_1.setTransform(10.1,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAkgIQgagFgOgBQgcAAgDAOQAFABARABQANABAGACQAGADALAGQAJAEACgNg");
	this.shape_2.setTransform(-15.6,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AAXAOIgRgJQgGgCgNgBIgWgCQADgOAcAAQAOABAaAFIgCANQgCAKgGAAIgDgBg");
	this.shape_3.setTransform(-15.6,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgKgPIgEAgQANACAMABQADgRACgVQgKgCgHAEg");
	this.shape_4.setTransform(-9.4,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgPARIAFggIAJgBQAHgEAJACQgBAVgEARQgLgBgOgCg");
	this.shape_5.setTransform(-9.4,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAWgSQgCgEgIAJQgJAKgGgGQgKgHgEALQgCAFgCATQASAEALgEQAQgGgBgQg");
	this.shape_6.setTransform(-5.3,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AgWATQADgTACgFQADgLAKAHQAHAGAJgKQAIgJACAEIAAAPQABAQgQAGQgGACgGAAQgHAAgKgCg");
	this.shape_7.setTransform(-5.3,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgeQAAAOgFAHQgNAKgBABQgHALADALQADANANAAQAUABAJgcQAKgbgYgGg");
	this.shape_8.setTransform(-0.6,7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AgHAiQgNAAgDgNQgDgLAHgKIAOgMQAFgHAAgOIAIAHQAYAGgKAbQgJAbgTAAIgBAAg");
	this.shape_9.setTransform(-0.6,7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAihNQgEAKgDASQgGAWgPATQgRAXgKAJQgEAEgRALQgOAJgEAHQgFALAFALQAFAMALgBQAHgBAQgLQAJgHAMgKQATgOASgYQATgWAGgWQADgLgCgNQgBgDgEgTIgJgKQgIgQgHASg");
	this.shape_10.setTransform(6.6,-3.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("Ag8BNQgFgLAFgLQAEgHAOgJQARgLAEgEQAKgJARgXQAPgTAGgWQADgSAEgKQAHgSAIAQIAJAKIAFAWQACANgDALQgGAWgTAWQgSAYgTAOIgVARQgQALgHABIgCAAQgJAAgFgLg");
	this.shape_11.setTransform(6.6,-3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgfAQQAgAEAHAAQAegCgGgUQgHgZgXANQgYAQgHABg");
	this.shape_12.setTransform(-2.5,11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AgfAQIABgNQAHgBAYgQQAYgNAGAZQAGAUgeACIgmgEg");
	this.shape_13.setTransform(-2.5,11.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AATATQgIgBgNgGIgGgMQgLgIAAgKQARgBALAMQANAKgDAQg");
	this.shape_14.setTransform(1.4,10.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AgCAMIgGgMQgLgIAAgKQARgBALAMQANAKgDAQQgIgBgNgGg");
	this.shape_15.setTransform(1.4,10.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgNgaQgGALAAAEQABABAFAMQALAZADAAQAGABAGgNQAGgKAAgFQABgMgDgEQgEgGgMgDg");
	this.shape_16.setTransform(3.9,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AABAbQgDAAgLgZIgGgNQAAgEAGgLIAOABQAMADAEAGQADAEgBAMQAAAFgGAKQgFAMgGAAIgBAAg");
	this.shape_17.setTransform(3.9,8.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgNgYQgDAJgHAMQAGACAQATQAKAQAKgJQANgMgMgSQgKgQgNgGg");
	this.shape_18.setTransform(5.3,5.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AgCASQgQgTgGgCQAHgMADgJIAKgDQANAGAKAQQAMASgNAMQgEADgEAAQgHAAgFgKg");
	this.shape_19.setTransform(5.4,5.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgXgaQgJARAOATQAMATARAHQAXgcgIgXQgIgagjAFg");
	this.shape_20.setTransform(8.1,3.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AgSALQgOgUAJgRIAGgJQAjgGAIAbQAIAXgXAcQgRgIgMgSg");
	this.shape_21.setTransform(8.1,3.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AATAGQgGANgNARQgNAVgCgIQgIgYgCgHQgCgMAFgGQADgFAGgIQAGgIABgHQgBgLAAgFQgBgIAKACIALACQALAPACAMQACANgJAOg");
	this.shape_22.setTransform(11.1,7.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AgPAxQgIgYgCgHQgCgMAFgGIAJgNQAGgIABgHIgBgQQgBgIAKACIALACQALAPACAMQACANgJAOQgGANgNARQgJAPgEAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_23.setTransform(11.1,7.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AACgWQAAAAgBAAIAIgHQgGgJARgOQAQgOAFAQQADAIgLAJQgKAHgNADIgHAAQAAABgBAAQAIgBAHACQALACACAHQACAHgHAFQgKAEgEAEQgDAEgIAZQgHAUgIACQgMADgKgTQgFgLABgBQAAgBAIgKQAGgIALgPQAKgOAIgFg");
	this.shape_24.setTransform(14.6,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("AglArQgFgLABgBIAIgLIARgXQAKgOAIgFIgBAAIAIgHQgGgJARgOQAQgOAFAQQADAIgLAJQgKAHgNADIgHAAIgBABQAIgBAHACQALACACAHQACAHgHAFQgKAEgEAEQgDAEgIAZQgHAUgIACIgDABQgKAAgJgRg");
	this.shape_25.setTransform(14.6,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAGgnQAJABABAEQABADACAMQACAIgKAKQgLAJgCAIQgDASgFAEQgFAFgCgPQgEgSAHgWQAIgcAMABg");
	this.shape_26.setTransform(17.3,-7.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF3BB").s().p("AgRAcQgEgSAHgWQAIgcAMABQAJABABAEIADAPQACAIgKAKQgLAJgCAIQgDASgFAEIgCACQgDAAgCgMg");
	this.shape_27.setTransform(17.3,-7.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAHg/QgBAEgFAfQgCAbgEAFQgEAFgLAKQgLAKgDAGQgCAFgGACQgCABAFADQAEADAIAAQAIAAAEAHQAIAMAFAMQACAGAHgEQAIgEAFgNQAKgTAEgKQAJgSgFgIQgGgJgCgKQgBgNACgIQAIgQACgLQAGgUgLgEQgIgEgJAGQgIAGgEAKg");
	this.shape_28.setTransform(12,-4.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF3BB").s().p("AgCBQQgFgMgIgMQgEgHgIAAQgIAAgEgDQgFgDACgBQAGgCACgFQADgGALgKQALgKAEgFQAEgFACgbIAGgjQAEgKAIgGQAJgGAIAEQALAEgGAUQgCALgIAQQgCAIABANQACAKAGAJQAFAIgJASIgOAdQgFANgIAEQgDACgCAAQgCAAgCgEg");
	this.shape_29.setTransform(12,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.2,-14.2,40.5,29.1);


(lib.tric_backleg_L_btm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgkgBQAAAGgEAJQgBAIALAIQANAKAWgBQAWgBAJgXQAJgTgHgXQgGgEgDgDQgFgEgFAAQgGgBgEAEQgHAFgBABQgBACgJADQgIACgDADQgCACgCAHQgDAFgFAC");
	this.shape.setTransform(11.9,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AgeAeQgLgIABgIQAEgJAAgGIAEgCQAFgCADgFIAEgJQADgDAIgCIAKgFIAIgGQAEgEAGABQAFAAAFAEIAJAHQAHAXgJATQgJAXgWABIgEAAQgUAAgLgJg");
	this.shape_1.setTransform(11.9,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhyjrQAIgFAJgGQAHgCAQAEQALADASABQAMACACAPQAGAlAKAwQANBEAEAMQAFAJAJANQAGALAAAKQAAAIgBATQABATAKARQAIAMAWAoQAUAjAGAJQAGAIANARQAKAPADALQACALgEADQgBAAgUAGQgJADgOAUQgKAPgFgIQgFgHgRg0QgUg8gKgVQgIgVgMgzQgMgsgHgKQgLgPgbgyQgZgwgFgOQgNgigDgLQgJgjALgHg");
	this.shape_2.setTransform(0.9,-3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AA7D1QgFgHgRg0QgUg8gKgVQgIgVgMgzQgMgsgHgKQgLgPgbgyQgZgwgFgOQgNgigDgLQgJgjALgHIARgLQAHgCAQAEQALADASABQAMACACAPIAQBVQANBEAEAMIAOAWQAGALAAAKIgBAbQABATAKARIAeA0QAUAjAGAJIATAZQAKAPADALQACALgEADIgVAGQgJADgOAUQgGAKgFAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_3.setTransform(0.9,-3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ai3jfQAHgNAQgKQARgLAVgDQAQgCAWgFQATgDARACQAHABAcACQAPABAJAEQAIAEAMAGQAIAFAAAMQAAAJgBAwQgBAyACAbQAEAnALAsQAMAyAOASQAIAKAeA3QAaAuAIAFQAIAEABgBQABAAAGAFQAMAKAFALQAGAPgIALQgNASgIAJQgOAPgSADQg5AIgNgdQgKgVgBgGQgBgKAMgCQANgDgWhOQgWhOgVgUQg9g5gagWQgNgLgQgaQgXglgFgGQgagcgMgQQgUgdALgUg");
	this.shape_4.setTransform(0,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AA8D3QgKgVgBgGQgBgKAMgCQANgDgWhOQgWhOgVgUQg9g5gagWQgNgLgQgaIgcgrQgagcgMgQQgUgdALgUQAHgNAQgKQARgLAVgDQAQgCAWgFQATgDARACIAjADQAPABAJAEIAUAKQAIAFAAAMIgBA5QgBAyACAbQAEAnALAsQAMAyAOASQAIAKAeA3QAaAuAIAFQAIAEABgBIAHAFQAMAKAFALQAGAPgIALQgNASgIAJQgOAPgSADQgNACgKAAQglAAgKgXg");
	this.shape_5.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-28.9,39.7,58);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFB500").ss(5.6,0,0,4).p("AE5iqQA3AzBGBAQAeAcAjAWQABADACACQAEAIAGAGQAHAJAHAHQACAEABAEQABADABAEQAIAIAHAHQAMALALAMQAEADADAEQACAEAAAEQACAHgBAHQAAAIgDAIQiIAIiSgkQhhgYhlgBQgJAPgHAQQgJAVgRAQQgDADgCAEQgEAQgIAPQgJASgJATQgEAHgEAIQAAADAAAEQAAAEAAAEQgKATgKASQgPAXgSAWQgCAEgCAEQgBADAAAEQgBAEgBAEQgBADgDAEQgCAEgEAEQgEADgEAEQgFAQgHAOQgFAMgHAJQAAABgBABQgCADgCACQgEAFgFAEQgDADgEADQgFABgEgBQgIAAgHgEQgEgDgEgDQgBgEgBgEQgBgHAAgIQAAgHAAgIQAEgJAGgIQAAgEAAgEQAAgWAAgXQACgEABgDQACgEACgEQACgEABgDQAAgiAAgiQAAgeAAgeQAEgHADgIQAFgMAIgKQAAgEAAgEQAAgEABgDQACgEACgEQADgCACgCQAAgIAAgIQAAgTAAgSQjpgmj+gHQgBgEgBgEQgBgHACgGQABgHACgIQDKg4DKhBQAigLAggPQAJg3gCg6QgCg0gBg1QAAgbAEgZQAEgEAEgCQAHgDAHgCQAAgBAAgBQAKAAAKAAQBEA6BGA5QAmAgAoAfQClgZCdhKQAdgOAfgFQAHADAFAEQAHAGAFAIQABADAAAEQgBADgCAEQgCAEgDADQgFAHgHAGQhhAfhLBIQgeAegeAeg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCF13").s().p("Ah1HAQgIAAgHgEIgIgGIgCgIIgBgPIAAgPQAEgJAGgIIAAgIIAAgtIADgHIAEgIIADgHIAAhEIAAg8IAHgPQAFgMAIgKIAAgIIABgHIAEgIIAFgEIAAgQIAAglQjpgmj+gHIgCgIQgBgHACgGIADgPQDKg4DKhBQAigLAggPQAJg3gCg6IgDhpQAAgbAEgZQAEgEAEgCIAOgFIAAgCIAUAAICKBzQAmAgAoAfQClgZCdhKQAdgOAfgFQAHADAFAEQAHAGAFAIQABADAAAEIgDAHIgFAHIgMANQhhAfhLBIIg8A8IB9BzQAeAcAjAWIADAFQAEAIAGAGIAOAQIADAIIACAHIAPAPIAXAXIAHAHIACAIQACAHgBAHQAAAIgDAIQiIAIiSgkQhhgYhlgBQgJAPgHAQQgJAVgRAQIgFAHQgEAQgIAPIgSAlIgIAPIAAAHIAAAIQgKATgKASQgPAXgSAWIgEAIIgBAHIgCAIIgEAHIgGAIIgIAHQgFAQgHAOQgFAMgHAJIgBACIgEAFIgJAJIgHAGIgGABIgDgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,-49.5,126.7,97.2);


(lib.pin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.51)").s().p("AgIL7IAkmHQAVjqgniKQgShJgjgxQgjgxgxh5Qgyh4A0jHIAziqQAhhvAPhYQAiCEgaBwQhIEZAOBZQAGAuAeAqQAPAWA7BCQBEBKAgBPQAFALAHAdQAHAgAAAKQgDAqACBcQAABigSBoQgVB/gvDNQguDKgVBCQgVhOAOiMg");
	this.shape.setTransform(56.4,108.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// pin
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgDBiQgygEgtgMIgigMQAEgZACghQADhAgJgnIAqAIQAwAJAYgCQA4gEArgJQAVgFAJgEIgBAQQgBAWABAUQACBBAVAoQgbASgTAGQgeAKgnAAIgVgBg");
	this.shape_1.setTransform(35.3,69.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(5,0,0,4).p("AgdwlQD1gGgWEJQgCAbgFAfQgLBAgZBSQgGAUgTA+QgFAPgDALQgGAUgCAJQgOBDAUBCQAEALAEAKQAYA9AzArQAvAoAcAjQAgAnATAsQAmBWgBChQAABOgwDmQgOBFgTBUQgpCzgpCfQivB6ivh5QgxiFgzikQghhrgXhYQgwi4gFhqQgGiGAhhlQAkhyBMg3QA2gnAThRQABgDAAgDQAQhMgUhIQgCgIgFgQQgFgPgHgXQgSg0gJggQgYhOgKg+QgGgggCgbQgUj9DmgFg");
	this.shape_2.setTransform(36.2,106.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiXPqQgxiFgzikQghhrgXhYQgwi4gFhqQgGiGAhhlQAkhyBMg3QA2gnAThRIABgGQAQhMgUhIIgHgYIgMgmIgbhUQgYhOgKg+QgGgggCgbQgUj9DmgFQD1gGgWEJQgCAbgFAfQgLBAgZBSIgZBSIgIAaIgIAdQgOBDAUBCIAIAVQAYA9AzArQAvAoAcAjQAgAnATAsQAmBWgBChQAABOgwDmIghCZQgpCzgpCfQhYA9hYAAQhWAAhYg8g");
	this.shape_3.setTransform(36.2,106.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-4.2,77.5,219.4);


(lib.tric_mc_walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tric_head
	this.instance = new lib.tric_head();
	this.instance.parent = this;
	this.instance.setTransform(530,425.9,2.568,2.568,2.8,0,0,31.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:1.5,x:449.9,y:420.4},0).wait(1).to({rotation:0.3,y:419},0).wait(1).to({rotation:-1,x:450,y:417.1},0).wait(1).to({rotation:-2.2,x:450.2,y:415.3},0).wait(1).to({rotation:-1.7,x:450.3,y:425.1},0).wait(1).to({rotation:-1.2,x:450.4,y:434.9},0).wait(1).to({rotation:-0.7,x:450.5,y:444.7},0).wait(1).to({rotation:-0.2,x:450.6,y:454.5},0).wait(1).to({rotation:0.8,x:450.8,y:449.4},0).wait(1).to({rotation:1.8,x:450.9,y:444.4},0).wait(1).to({rotation:0.7,x:451,y:435.4},0).wait(1).to({rotation:-0.3,x:451.1,y:426.5},0).wait(1).to({rotation:-1.4,x:451.2,y:417.6},0).wait(1).to({rotation:-2.5,x:451.3,y:408.6},0).wait(1).to({rotation:-1.7,x:451.1,y:415.5},0).wait(1).to({rotation:-1,x:450.9,y:422.3},0).wait(1).to({rotation:-0.3,y:434.6},0).wait(1).to({rotation:0.4,y:447},0).wait(1).to({rotation:1.2,x:450.7,y:441.1},0).wait(1).to({rotation:1.9,x:450.5,y:435.2},0).wait(1).to({rotation:2.6,x:450.3,y:429.3},0).wait(1));

	// tric_back-leg_L_top
	this.instance_1 = new lib.tric_backleg_L_top();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1205.6,436.4,2.568,2.568,-90.3,0,0,40.1,-7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,rotation:-87.3,x:1217.9,y:538.2},0).wait(1).to({rotation:-84.1,x:1211.1,y:536.9},0).wait(1).to({rotation:-72.8,x:1189.3,y:534.6},0).wait(1).to({rotation:-61.4,x:1168.1,y:528.1},0).wait(1).to({rotation:-51.4,x:1150,y:524.8},0).wait(1).to({rotation:-41.3,x:1133.4,y:518.7},0).wait(1).to({rotation:-35.1,x:1123.9,y:517.2},0).wait(1).to({rotation:-28.9,x:1115.2,y:514.8},0).wait(1).to({rotation:-34.6,x:1120.4,y:518.3},0).wait(1).to({rotation:-40.4,x:1126.4,y:521.1},0).wait(1).to({rotation:-46.7,x:1137,y:523.4},0).wait(1).to({rotation:-53,x:1148.2,y:524.6},0).wait(1).to({rotation:-59.4,x:1160},0).wait(1).to({rotation:-65.7,x:1172.3,y:523.5},0).wait(1).to({rotation:-72,x:1184.9,y:521.1},0).wait(1).to({rotation:-78.3,x:1197.7,y:517.4},0).wait(1).to({rotation:-84.7,x:1210.5,y:512.5},0).wait(1).to({rotation:-91,x:1223.2,y:506.3},0).wait(1).to({rotation:-90.9,x:1223.5,y:513.6},0).wait(1).to({rotation:-90.7,x:1223.8,y:520.9},0).wait(1).to({rotation:-90.6,x:1224.1,y:528.2},0).wait(1));

	// tric_back-leg_L_btm
	this.instance_2 = new lib.tric_backleg_L_btm();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1283.8,659.2,2.564,2.564,-37.6,0,0,-7.4,-25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:-51.6,x:1334.7,y:678.8},0).wait(1).to({rotation:-65.6,x:1326.2,y:655.6},0).wait(1).to({rotation:-73.2,x:1281.9,y:641.7},0).wait(1).to({rotation:-80.8,x:1236.4,y:627.8},0).wait(1).to({rotation:-60.9,x:1194.3,y:637.6},0).wait(1).to({rotation:-41,x:1144.2,y:645.5},0).wait(1).to({rotation:-1.6,x:1091.9,y:678.9},0).wait(1).to({rotation:37.8,x:1030.2,y:682.3},0).wait(1).to({rotation:35.3,x:1044.3,y:680.9},0).wait(1).to({rotation:32.8,x:1058.5,y:679.3},0).wait(1).to({rotation:27,x:1088.9,y:682.2},0).wait(1).to({rotation:21.2,x:1119.5,y:684.5},0).wait(1).to({rotation:15.4,x:1150.1,y:686},0).wait(1).to({rotation:9.5,x:1180.7,y:686.8},0).wait(1).to({rotation:3.7,x:1211.2,y:686.9},0).wait(1).to({rotation:-2.1,x:1241.6,y:686.3},0).wait(1).to({rotation:-7.9,x:1271.7,y:685.1},0).wait(1).to({rotation:-13.7,x:1301.6,y:683.1},0).wait(1).to({rotation:-19.5,x:1311.2,y:687.4},0).wait(1).to({rotation:-25.3,x:1320.3,y:691.1},0).wait(1).to({rotation:-31.1,x:1329,y:694.2},0).wait(1));

	// Tric_back-leg_L_foot
	this.instance_3 = new lib.Tric_backleg_L_foot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1412.7,735.4,2.565,2.565,-63.2,0,0,13.2,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:-71.5,x:1420.2,y:732.6},0).wait(1).to({rotation:-79.9,x:1424.3,y:689.4},0).wait(1).to({rotation:-76.4,x:1377.5,y:665.5},0).wait(1).to({rotation:-72.9,x:1330.6,y:641.4},0).wait(1).to({rotation:-69.4,x:1280.1,y:677.2},0).wait(1).to({rotation:-65.9,x:1229.5,y:712.8},0).wait(1).to({rotation:-35.2,x:1101.4,y:750.5},0).wait(1).to({rotation:-4.6,x:977.7,y:777.9},0).wait(1).to({rotation:-3.9,x:993.7,y:780.4},0).wait(1).to({rotation:-3.2,x:1009.8,y:783},0).wait(1).to({rotation:-4.2,x:1047.5,y:783.4},0).wait(1).to({rotation:-5.2,x:1085.2,y:783.8},0).wait(1).to({rotation:-6.2,x:1123,y:784.3},0).wait(1).to({rotation:-7.3,x:1160.7,y:784.7},0).wait(1).to({rotation:-8.3,x:1198.5,y:785.1},0).wait(1).to({rotation:-9.3,x:1236.3,y:785.5},0).wait(1).to({rotation:-10.3,x:1274,y:785.9},0).wait(1).to({rotation:-11.3,x:1311.8,y:786.3},0).wait(1).to({rotation:-22.9,x:1333.8,y:786.2},0).wait(1).to({rotation:-34.4,x:1356.6,y:784.9},0).wait(1).to({rotation:-45.9,x:1380.2,y:782.1},0).wait(1));

	// tric_front-leg_L_foot
	this.instance_4 = new lib.tric_frontleg_L_foot("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(792.3,785.5,2.564,2.564,34.8,0,0,-0.2,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-0.1,regY:-0.1,scaleX:2.57,scaleY:2.57,rotation:33,x:809.6,y:782.7},0).wait(1).to({rotation:31.3,x:821,y:787.8},0).wait(1).to({rotation:29.6,x:850.5,y:784.1},0).wait(1).to({rotation:27.9,x:879.9,y:780.4},0).wait(1).to({rotation:26.2,x:894.1,y:783.3},0).wait(1).to({rotation:24.5,x:908.4,y:786.2},0).wait(1).to({rotation:0.8,x:936.4,y:768.4},0).wait(1).to({rotation:-22.8,x:964.3,y:752.1},0).wait(1).to({rotation:6,x:848.3,y:732.3},0).wait(1).to({rotation:34.8,x:731.9,y:714.9},0).wait(1).to({x:723.8,y:724.5},0).wait(1).to({x:715.8,y:734},0).wait(1).to({x:707.7,y:743.6},0).wait(1).to({x:699.7,y:753.2},0).wait(1).to({x:691.6,y:762.7},0).wait(1).to({x:683.6,y:772.3},0).wait(1).to({x:675.5,y:781.8},0).wait(1).to({x:667.5,y:791.4},0).wait(1).to({x:696.5,y:788.3},0).wait(1).to({x:725.5,y:785.3},0).wait(1).to({x:754.5,y:782.2},0).wait(1));

	// tric_front-leg_L_btm
	this.instance_5 = new lib.tric_frontleg_L_btm("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(825.5,688.1,2.564,2.564,34.8,0,0,-0.2,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:32.3,x:834.5,y:687.8},0).wait(1).to({rotation:29.8,x:843.8,y:686.3},0).wait(1).to({rotation:21.9,x:860.1,y:683.8},0).wait(1).to({rotation:14.1,x:876.4,y:681.1},0).wait(1).to({rotation:12.3,x:891.9,y:684.6},0).wait(1).to({rotation:10.5,x:907.4,y:688},0).wait(1).to({rotation:5.1,x:915.3,y:677.1},0).wait(1).to({rotation:-0.2,x:923.2,y:666.2},0).wait(1).to({rotation:39.8,x:863.4,y:662.8},0).wait(1).to({rotation:79.8,x:803.6,y:658.8},0).wait(1).to({rotation:78.1,x:795.1,y:666.5},0).wait(1).to({rotation:76.4,x:786.5,y:674.3},0).wait(1).to({rotation:74.7,x:778,y:682},0).wait(1).to({rotation:73,x:769.4,y:689.8},0).wait(1).to({rotation:71.3,x:760.9,y:697.5},0).wait(1).to({rotation:69.6,x:752.4,y:705.3},0).wait(1).to({rotation:67.9,x:743.8,y:713},0).wait(1).to({rotation:66.2,x:735.3,y:720.7},0).wait(1).to({rotation:59.2,x:755.3,y:713.8},0).wait(1).to({rotation:52.3,x:775.3,y:706.8},0).wait(1).to({rotation:45.3,x:795.3,y:699.8},0).wait(1));

	// tric_front-leg_L_top
	this.instance_6 = new lib.tric_frontleg_L_top("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(760.6,567.2,2.564,2.564,45.4,0,0,-12.7,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:40,x:784.9,y:594.8},0).wait(1).to({rotation:34.8,x:789.6,y:595.7},0).wait(1).to({rotation:26.4,x:796.9,y:602.8},0).wait(1).to({rotation:18.1,x:803.7,y:609.5},0).wait(1).to({rotation:18.2,x:817.7,y:611.9},0).wait(1).to({rotation:18.3,x:831.8,y:614.4},0).wait(1).to({rotation:10.3,x:835.8,y:609.6},0).wait(1).to({rotation:2.4,x:839.3,y:604.6},0).wait(1).to({rotation:1.1,x:812.6,y:598.5},0).wait(1).to({rotation:-0.1,x:785.8,y:592.5},0).wait(1).to({rotation:9.1,x:785.5,y:597.4},0).wait(1).to({rotation:18.3,x:784.3,y:602.1},0).wait(1).to({rotation:27.6,x:782.3,y:606.4},0).wait(1).to({rotation:36.8,x:779.7,y:610.2},0).wait(1).to({rotation:46.1,x:776.5,y:613.4},0).wait(1).to({rotation:55.3,x:772.7,y:616},0).wait(1).to({rotation:64.6,x:768.6,y:617.7},0).wait(1).to({rotation:73.8,x:764.3,y:618.6},0).wait(1).to({rotation:67.5,x:768,y:613.8},0).wait(1).to({rotation:61.1,x:771.6,y:608.5},0).wait(1).to({rotation:54.8,x:775.2,y:602.9},0).wait(1));

	// tric_shoulder_L
	this.instance_7 = new lib.tric_shoulder_L();
	this.instance_7.parent = this;
	this.instance_7.setTransform(834.4,467.5,2.568,2.568,0,0,0,17.6,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,rotation:-1.2,x:789.9,y:503.5},0).wait(1).to({rotation:-2.3,x:790.7,y:503.6},0).wait(1).to({rotation:-3.5,x:791.4,y:503.7},0).wait(1).to({rotation:-4.7,x:792.2},0).wait(1).to({rotation:-5.9,x:793.1,y:503.8},0).wait(1).to({rotation:-7,x:793.9},0).wait(1).to({rotation:-8.2,x:794.7},0).wait(1).to({rotation:-9.4,x:795.6},0).wait(1).to({rotation:-3.9,x:791.7,y:499.1},0).wait(1).to({rotation:1.6,x:788.2,y:494},0).wait(1).to({rotation:0.9,x:788.5,y:497},0).wait(1).to({rotation:0.2,x:788.9,y:499.9},0).wait(1).to({rotation:-0.4,x:789.2,y:502.9},0).wait(1).to({rotation:-1.1,x:789.6,y:505.8},0).wait(1).to({rotation:-1.8,x:790,y:508.8},0).wait(1).to({rotation:-2.5,x:790.3,y:511.7},0).wait(1).to({rotation:-3.2,x:790.7,y:514.7},0).wait(1).to({rotation:-3.8,x:791.1,y:517.6},0).wait(1).to({rotation:-2.8,x:790.6,y:513.3},0).wait(1).to({rotation:-1.8,x:790.1,y:509.1},0).wait(1).to({rotation:-0.8,x:789.6,y:504.8},0).wait(1));

	// tric_hip
	this.instance_8 = new lib.tric_hip();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1208.4,437.3,2.568,2.568,0,0,0,10,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,regY:0,x:1182.7,y:457.8},0).wait(1).to({y:454.7},0).wait(1).to({y:451.5},0).wait(1).to({y:448.4},0).wait(1).to({y:445.2},0).wait(1).to({y:442.1},0).wait(1).to({y:447.3},0).wait(1).to({y:452.6},0).wait(1).to({y:457.8},0).wait(1).to({y:463.1},0).wait(1).to({y:460.4},0).wait(1).to({y:457.8},0).wait(1).to({y:455.2},0).wait(1).to({y:452.6},0).wait(1).to({y:449.9},0).wait(1).to({y:447.3},0).wait(1).to({y:444.7},0).wait(1).to({y:442.1},0).wait(1).to({y:446.3},0).wait(1).to({y:450.5},0).wait(1).to({y:454.7},0).wait(1));

	// tric_tail
	this.instance_9 = new lib.tric_tail();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1126,396,2.567,2.567,-6.8,0,0,-111.8,-59.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:0.2,regY:0,scaleX:2.57,scaleY:2.57,rotation:-6,x:1428,y:514.4},0).wait(1).to({rotation:-5.2,x:1426.3,y:515.4},0).wait(1).to({rotation:-4.4,x:1424.5,y:516.4},0).wait(1).to({rotation:-3.6,x:1422.7,y:517.4},0).wait(1).to({rotation:-2.8,x:1420.8,y:518.4},0).wait(1).to({rotation:-2,x:1418.8,y:519.3},0).wait(1).to({rotation:-3.1,x:1421.4,y:520.2},0).wait(1).to({rotation:-4.1,x:1423.9,y:521},0).wait(1).to({rotation:-5.2,x:1426.2,y:521.8},0).wait(1).to({rotation:-6.2,x:1428.5,y:522.6},0).wait(1).to({rotation:-5.9,x:1427.7,y:521.4},0).wait(1).to({rotation:-5.5,x:1426.9,y:520.2},0).wait(1).to({rotation:-5.1,x:1426.1,y:519},0).wait(1).to({rotation:-4.8,x:1425.3,y:517.8},0).wait(1).to({rotation:-4.4,x:1424.4,y:516.5},0).wait(1).to({rotation:-4,x:1423.6,y:515.3},0).wait(1).to({rotation:-3.6,x:1422.7,y:514.1},0).wait(1).to({rotation:-3.3,x:1421.9,y:512.8},0).wait(1).to({rotation:-4.5,x:1424.6,y:511},0).wait(1).to({rotation:-5.6,x:1427.2,y:509},0).wait(1).to({rotation:-6.8,x:1429.6,y:507.1},0).wait(1));

	// tric_neck
	this.instance_10 = new lib.tric_neck();
	this.instance_10.parent = this;
	this.instance_10.setTransform(702.2,452.5,2.568,2.568,0,0,0,33.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:0,regY:0,rotation:0.4,x:616.2,y:417.6},0).wait(1).to({rotation:0.7,y:417.5},0).wait(1).to({rotation:1.1,x:616.3,y:417.3},0).wait(1).to({rotation:1.4,y:417.1},0).wait(1).to({rotation:-0.9,x:614.7,y:420.9},0).wait(1).to({rotation:-3.2,x:613.3,y:424.8},0).wait(1).to({rotation:-5.5,x:612.4,y:428.3},0).wait(1).to({rotation:-7.8,x:611.7,y:431.9},0).wait(1).to({rotation:-4.9,x:613.2,y:427.4},0).wait(1).to({rotation:-2.1,x:614.8,y:423.1},0).wait(1).to({rotation:0.7,x:616.8,y:418.8},0).wait(1).to({rotation:3.5,x:618.9,y:414.5},0).wait(1).to({rotation:6.4,x:621.2,y:410.4},0).wait(1).to({rotation:9.2,x:623.7,y:406.4},0).wait(1).to({rotation:6,x:621.4,y:411},0).wait(1).to({rotation:2.7,x:619.4,y:415.6},0).wait(1).to({rotation:-2.5,x:615.9,y:423.2},0).wait(1).to({rotation:-7.8,x:613.3,y:431},0).wait(1).to({rotation:-6,x:613.8,y:428},0).wait(1).to({rotation:-4.3,x:614.3,y:425},0).wait(1).to({rotation:-2.6,x:615,y:422.1},0).wait(1));

	// tric_back-leg_R_foot
	this.instance_11 = new lib.tric_backleg_R_foot();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1118.7,743.2,2.567,2.567,-6,0,0,17.4,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:-7.5,x:1130.2,y:779},0).wait(1).to({rotation:-8.9,x:1183,y:781.6},0).wait(1).to({rotation:-10.4,x:1221.3,y:781.2},0).wait(1).to({rotation:-11.8,x:1259.6,y:780.8},0).wait(1).to({rotation:-13.4,x:1274.8,y:781.8},0).wait(1).to({rotation:-14.9,x:1290.1,y:782.7},0).wait(1).to({rotation:-16.5,x:1305.3,y:783.7},0).wait(1).to({rotation:-18,x:1320.6,y:784.6},0).wait(1).to({rotation:-19.5,x:1335.9,y:785.5},0).wait(1).to({rotation:-21.1,x:1351.2,y:786.3},0).wait(1).to({rotation:-23.6,x:1328.7,y:777.5},0).wait(1).to({rotation:-26.2,x:1306.2,y:768.6},0).wait(1).to({rotation:-28.7,x:1283.7,y:759.7},0).wait(1).to({rotation:-31.3,x:1261.3,y:750.6},0).wait(1).to({rotation:-33.8,x:1239,y:741.5},0).wait(1).to({rotation:-36.4,x:1216.7,y:732.2},0).wait(1).to({rotation:-39,x:1194.5,y:722.9},0).wait(1).to({rotation:-41.5,x:1172.2,y:713.4},0).wait(1).to({rotation:-33.6,x:1150.3,y:729},0).wait(1).to({rotation:-25.8,x:1128.7,y:743.6},0).wait(1).to({rotation:-17.9,x:1107.7,y:757.3},0).wait(1));

	// tric_ribs
	this.instance_12 = new lib.tric_ribs();
	this.instance_12.parent = this;
	this.instance_12.setTransform(705.2,421.2,2.568,2.568,2.1,0,0,-73.1,-18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:0,regY:-7.3,rotation:1.8,x:891.8,y:456.9},0).wait(1).to({rotation:1.5,x:892.1,y:455.7},0).wait(1).to({rotation:1.1,x:892.3,y:454.5},0).wait(1).to({rotation:0.7,x:892.5,y:453.3},0).wait(1).to({rotation:0.4,x:892.7,y:452.1},0).wait(1).to({rotation:0,x:892.9,y:450.9},0).wait(1).to({rotation:0.6,x:892.8,y:452.5},0).wait(1).to({rotation:1.1,x:892.7,y:454.1},0).wait(1).to({rotation:1.7,x:892.5,y:455.6},0).wait(1).to({rotation:2.2,x:892.3,y:457.2},0).wait(1).to({rotation:1.7,x:892.9,y:455.4},0).wait(1).to({rotation:1.2,x:893.4,y:453.6},0).wait(1).to({rotation:0.8,x:893.8,y:451.7},0).wait(1).to({rotation:0.3,x:894.3,y:449.9},0).wait(1).to({rotation:-0.2,x:894.8,y:448.1},0).wait(1).to({rotation:-0.7,x:895.2,y:446.3},0).wait(1).to({rotation:-0.4,x:894.1,y:448.6},0).wait(1).to({rotation:0,x:892.9,y:450.9},0).wait(1).to({rotation:0.5,x:892.6,y:452.5},0).wait(1).to({rotation:1,x:892.3,y:454.1},0).wait(1).to({rotation:1.5,x:892.1,y:455.7},0).wait(1));

	// tric_back-leg_R_top
	this.instance_13 = new lib.tric_backleg_R_top();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1195.6,438.7,2.567,2.567,-8.5,0,0,31.6,-21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:-21.3,x:1138.3,y:516.3},0).wait(1).to({rotation:-34,x:1155.9,y:524.3},0).wait(1).to({rotation:-47.3,x:1176.2,y:528},0).wait(1).to({rotation:-60.5,x:1197.3,y:526.6},0).wait(1).to({rotation:-62.6,x:1200.5,y:524.9},0).wait(1).to({rotation:-64.8,x:1203.7,y:523},0).wait(1).to({rotation:-67,x:1206.9,y:521.1},0).wait(1).to({rotation:-69.2,x:1210,y:519},0).wait(1).to({rotation:-71.3,x:1213.2,y:516.7},0).wait(1).to({rotation:-73.5,x:1216.2,y:514.3},0).wait(1).to({rotation:-65.6,x:1202.7,y:516},0).wait(1).to({rotation:-57.7,x:1188.8,y:515.9},0).wait(1).to({rotation:-49.7,x:1174.9,y:514},0).wait(1).to({rotation:-41.8,x:1161.3,y:510.2},0).wait(1).to({rotation:-33.9,x:1148,y:504.5},0).wait(1).to({rotation:-26,x:1135.5,y:497.2},0).wait(1).to({rotation:-18,x:1123.9,y:488.3},0).wait(1).to({rotation:-10.1,x:1113.5,y:477.9},0).wait(1).to({rotation:-9.8,x:1115.7,y:483.8},0).wait(1).to({rotation:-9.4,x:1117.9,y:489.6},0).wait(1).to({rotation:-9.1,x:1120.1,y:495.5},0).wait(1));

	// tric_back-leg_R_btm
	this.instance_14 = new lib.tric_backleg_R_btm();
	this.instance_14.parent = this;
	this.instance_14.setTransform(1070.5,619,2.564,2.564,-40.8,0,0,4.9,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:-46.2,x:1133.6,y:674.5},0).wait(1).to({rotation:-51.6,x:1177.4,y:688.5},0).wait(1).to({rotation:-52.2,x:1216.6,y:687},0).wait(1).to({rotation:-52.7,x:1255.8,y:685.6},0).wait(1).to({rotation:-53.2,x:1266.8,y:684.2},0).wait(1).to({rotation:-53.7,x:1277.7,y:682.8},0).wait(1).to({rotation:-54.3,x:1288.7,y:681.4},0).wait(1).to({rotation:-54.8,x:1299.6,y:680},0).wait(1).to({rotation:-55.3,x:1310.6,y:678.6},0).wait(1).to({rotation:-55.8,x:1321.6,y:677.2},0).wait(1).to({rotation:-57.5,x:1296.2,y:668.2},0).wait(1).to({rotation:-59.1,x:1270.8,y:659.2},0).wait(1).to({rotation:-60.8,x:1245.3,y:650.1},0).wait(1).to({rotation:-62.4,x:1219.9,y:641},0).wait(1).to({rotation:-64,x:1194.4,y:631.8},0).wait(1).to({rotation:-65.7,x:1168.9,y:622.7},0).wait(1).to({rotation:-67.3,x:1143.3,y:613.5},0).wait(1).to({rotation:-68.9,x:1117.7,y:604.3},0).wait(1).to({rotation:-62.7,x:1112.1,y:617.4},0).wait(1).to({rotation:-56.4,x:1106,y:630.2},0).wait(1).to({rotation:-50.2,x:1099.6,y:642.5},0).wait(1));

	// tric_front-leg_R_top
	this.instance_15 = new lib.tric_frontleg_R_top();
	this.instance_15.parent = this;
	this.instance_15.setTransform(772.6,600.2,2.566,2.566,13.3,0,0,-8.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:63.4,x:784.7,y:613.2},0).wait(1).to({rotation:113.3,x:763.8,y:612.5},0).wait(1).to({rotation:112.9,x:763.5,y:618.6},0).wait(1).to({rotation:112.5,x:763.3,y:624.8},0).wait(1).to({rotation:94.2,x:768.6,y:621.2},0).wait(1).to({rotation:75.9,x:773.7,y:615.4},0).wait(1).to({rotation:64,x:776.5,y:607.5},0).wait(1).to({rotation:52.1,x:778.7,y:598.8},0).wait(1).to({rotation:47.8,x:787.2,y:588.1},0).wait(1).to({rotation:43.4,x:795.5,y:577.2},0).wait(1).to({rotation:41,x:798.4,y:582.7},0).wait(1).to({rotation:38.5,x:801.3,y:588.2},0).wait(1).to({rotation:36,x:804.2,y:593.7},0).wait(1).to({rotation:33.5,x:807.1,y:599.2},0).wait(1).to({rotation:31,x:809.8,y:604.7},0).wait(1).to({rotation:28.6,x:812.6,y:610.1},0).wait(1).to({rotation:26.1,x:815.3,y:615.5},0).wait(1).to({rotation:23.6,x:818,y:621},0).wait(1).to({rotation:21.1,x:813.1,y:616.4},0).wait(1).to({rotation:18.6,x:808.2,y:611.9},0).wait(1).to({rotation:16.2,x:803.2,y:607.4},0).wait(1));

	// tric_front-leg_R_btm
	this.instance_16 = new lib.tric_frontleg_R_btm("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(841.6,643,2.564,2.564,30.6,0,0,-1,-18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:34.7,x:760.9,y:685.3},0).wait(1).to({rotation:38.8,x:701.9,y:685.8},0).wait(1).to({rotation:32.9,x:701.1,y:701.6},0).wait(1).to({rotation:26.9,x:700.5,y:716.9},0).wait(1).to({rotation:21,x:731.6,y:719.3},0).wait(1).to({rotation:15.1,x:762.7,y:721.3},0).wait(1).to({rotation:9.1,x:778.8,y:714.1},0).wait(1).to({rotation:3.2,x:794.9,y:706.5},0).wait(1).to({rotation:-5.6,x:800.1,y:703.1},0).wait(1).to({rotation:-14.3,x:805.1,y:698.6},0).wait(1).to({rotation:-18.2,x:816.9,y:699.4},0).wait(1).to({rotation:-22.1,x:828.7,y:700.1},0).wait(1).to({rotation:-26,x:840.3,y:700.5},0).wait(1).to({rotation:-29.9,x:851.9,y:700.8},0).wait(1).to({rotation:-33.9,x:863.3,y:700.9},0).wait(1).to({rotation:-37.8,x:874.6,y:700.8},0).wait(1).to({rotation:-41.7,x:885.8,y:700.5},0).wait(1).to({rotation:-45.6,x:896.8,y:700.1},0).wait(1).to({rotation:-28.7,x:881.8,y:703.2},0).wait(1).to({rotation:-11.7,x:864.7,y:702.8},0).wait(1).to({rotation:5.2,x:846.6,y:698.5},0).wait(1));

	// tric_front-leg_R_foot
	this.instance_17 = new lib.tric_frontleg_R_foot("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(769.5,736.1,2.565,2.565,23.3,0,0,0.1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:32.2,x:711.3,y:733.1},0).wait(1).to({rotation:40.9,x:654.5,y:727.9},0).wait(1).to({rotation:49.7,x:645.5,y:749.2},0).wait(1).to({rotation:58.4,x:636.6,y:770.4},0).wait(1).to({rotation:67.8,x:671.8,y:773},0).wait(1).to({rotation:77.3,x:707.1,y:775.5},0).wait(1).to({rotation:75.1,x:734.7,y:779.7},0).wait(1).to({rotation:72.9,x:762.2,y:783.9},0).wait(1).to({rotation:70.6,x:769.4,y:782.9},0).wait(1).to({rotation:68.4,x:776.7,y:781.9},0).wait(1).to({rotation:66.7,x:794.2,y:782.3},0).wait(1).to({rotation:65,x:811.8,y:782.7},0).wait(1).to({rotation:63.4,x:829.4,y:783.2},0).wait(1).to({rotation:61.7,x:846.9,y:783.6},0).wait(1).to({rotation:60,x:864.5,y:784},0).wait(1).to({rotation:58.3,x:882.1,y:784.4},0).wait(1).to({rotation:56.6,x:899.6,y:784.8},0).wait(1).to({rotation:54.9,x:917.2,y:785.3},0).wait(1).to({rotation:42.9,x:884.9,y:782.7},0).wait(1).to({rotation:30.9,x:852.7,y:780},0).wait(1).to({rotation:18.9,x:820.5,y:777.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,197.6,1507.6,636.3);


(lib.tric_mc_dizzy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tric_head
	this.instance = new lib.tric_head();
	this.instance.parent = this;
	this.instance.setTransform(729.8,341.1,2.567,2.567,9.8,0,0,31.4,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:3.1,x:676.9,y:322.7},0).wait(1).to({rotation:-3.7,x:693.4,y:305.8},0).wait(1).to({rotation:-10.4,x:687.5,y:284.7},0).wait(1).to({rotation:-5.3,x:674.5,y:263},0).wait(1).to({rotation:-0.3,x:661.1,y:244.9},0).wait(1).to({rotation:4.8,x:655.4,y:255.9},0).wait(1).to({rotation:9.8,x:649.1,y:266.4},0).wait(1).to({rotation:10.6,x:640.5,y:283.5},0).wait(1).to({rotation:11.4,x:629.1,y:299},0).wait(1).to({rotation:12.1,x:617.2,y:314.1},0).wait(1).to({rotation:12.9,x:624.6,y:327.3},0).wait(1));

	// tric_back-leg_L_top
	this.instance_1 = new lib.tric_backleg_L_top();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1156,682.3,2.568,2.568,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-2},0).wait(11));

	// tric_back-leg_L_btm
	this.instance_2 = new lib.tric_backleg_L_btm();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1059.1,737.7,2.567,2.567,97.3,0,0,-8,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:989,y:749.4},0).wait(11));

	// Tric_back-leg_L_foot
	this.instance_3 = new lib.Tric_backleg_L_foot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(876.1,683.7,2.565,2.565,20.3,0,0,16.6,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:828.8,y:688.6},0).wait(11));

	// tric_front-leg_L_foot
	this.instance_4 = new lib.tric_frontleg_L_foot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(910.1,665.3,2.564,2.564,33.1,0,0,0.2,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-0.1,regY:-0.1,scaleX:2.57,scaleY:2.57,x:901.9,y:676.4},0).wait(11));

	// tric_front-leg_L_btm
	this.instance_5 = new lib.tric_frontleg_L_btm();
	this.instance_5.parent = this;
	this.instance_5.setTransform(924.6,549,2.564,2.564,30.1,0,0,-6.2,-10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:924.4,y:580.9},0).wait(11));

	// tric_front-leg_L_top
	this.instance_6 = new lib.tric_frontleg_L_top();
	this.instance_6.parent = this;
	this.instance_6.setTransform(894.1,431.7,2.564,2.564,59.9,0,0,-17.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:888.8,y:486.6},0).wait(11));

	// tric_shoulder_L
	this.instance_7 = new lib.tric_shoulder_L();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1075.1,334.3,2.565,2.565,22.5,0,0,38.1,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:22.6,x:945.3,y:391.6},0).wait(11));

	// tric_hip
	this.instance_8 = new lib.tric_hip();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1239,533.6,2.564,2.564,30.8,0,0,10,-16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:1195.3,y:556.5},0).wait(11));

	// tric_tail
	this.instance_9 = new lib.tric_tail();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1289.7,656,2.564,2.564,-36.8,0,0,-114.5,-64.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:0.2,regY:0,scaleX:2.57,scaleY:2.57,rotation:-36.9,x:1624.4,y:611.4},0).wait(11));

	// tric_neck
	this.instance_10 = new lib.tric_neck();
	this.instance_10.parent = this;
	this.instance_10.setTransform(972.5,288.7,2.567,2.567,-8.8,0,0,33.4,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:886.5,y:294.1},0).wait(11));

	// tric_ribs
	this.instance_11 = new lib.tric_ribs();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1208.1,568.3,2.564,2.564,60.4,0,0,67.7,-42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:0,regY:-7.3,scaleX:2.57,scaleY:2.57,x:1044.6,y:461.2},0).wait(11));

	// tric_front-leg_R_top/ribs
	this.instance_12 = new lib.tric_frontleg_R_top();
	this.instance_12.parent = this;
	this.instance_12.setTransform(886.7,471.5,2.565,2.565,108.3,0,0,-18.4,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:853.6,y:510.2},0).wait(11));

	// tric_front-leg_R_btm
	this.instance_13 = new lib.tric_frontleg_R_btm();
	this.instance_13.parent = this;
	this.instance_13.setTransform(830.4,568.5,2.566,2.566,17.8,0,0,-1.1,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:818.6,y:614.3},0).wait(11));

	// tric_front-leg_R_foot
	this.instance_14 = new lib.tric_frontleg_R_foot();
	this.instance_14.parent = this;
	this.instance_14.setTransform(776.9,665.8,2.565,2.565,64.4,0,0,-3,-10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:755.6,y:684.5},0).wait(11));

	// tric_back-leg_R_foot
	this.instance_15 = new lib.tric_backleg_R_foot();
	this.instance_15.parent = this;
	this.instance_15.setTransform(910,775.5,2.566,2.566,74,0,0,17.4,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:870.4,y:740.3},0).wait(11));

	// tric_back-leg_R_top
	this.instance_16 = new lib.tric_backleg_R_top();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1241.9,622.2,2.564,2.564,30.3,0,0,31.6,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:30.4,x:1135.3,y:643.4},0).wait(11));

	// tric_back-leg_R_btm
	this.instance_17 = new lib.tric_backleg_R_btm();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1008.9,663.1,2.565,2.565,69,0,0,4.8,-20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:954.9,y:670.6},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(462.5,88.3,1575,718.6);


(lib.tric_mc_charge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tric_head
	this.instance = new lib.tric_head();
	this.instance.parent = this;
	this.instance.setTransform(530.3,433.2,2.568,2.568,2.5,0,0,31.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:2.6,x:450.2,y:427.4},0).wait(1).to({rotation:2.7,x:450.1,y:425.9},0).wait(1).to({x:450,y:424.4},0).wait(1).to({y:422.8},0).wait(1).to({rotation:2.8,x:449.9,y:421.3},0).wait(1).to({regX:31.2,regY:0.1,x:530,y:425.8},0).wait(1).to({regX:0,regY:0,x:450,y:421.7},0).wait(7).to({rotation:-8.6,x:447.7,y:457.5},0).wait(1).to({rotation:-20.1,x:448.6,y:492.9},0).wait(1).to({rotation:-21.1,x:449.1,y:494.3},0).wait(1).to({rotation:-22.1,x:449.6,y:495.6},0).wait(1).to({rotation:-21.6,x:449.4,y:494.9},0).wait(1).to({rotation:-21.1,x:449.1,y:494.3},0).wait(1).to({rotation:-20.6,x:448.9,y:493.6},0).wait(1).to({rotation:-20.1,x:448.6,y:492.9},0).wait(1).to({rotation:-19.5,x:448.4,y:492.3},0).wait(1).to({rotation:-19,x:448.1,y:491.6},0).wait(1).to({rotation:-18.5,x:447.9,y:490.9},0).wait(3).to({rotation:-19.1,x:448.1,y:491.6},0).wait(1).to({rotation:-19.6,x:448.4,y:492.3},0).wait(1).to({rotation:-20.1,x:448.6,y:493},0).wait(1).to({rotation:-20.7,x:448.9,y:493.7},0).wait(1).to({rotation:-21.2,x:449.2,y:494.4},0).wait(1).to({rotation:-21.7,x:449.4,y:495.1},0).wait(1).to({rotation:-22.3,x:449.7,y:495.8},0).wait(1).to({rotation:-22.8,x:450,y:496.5},0).wait(5).to({regX:31.2,regY:-0.2,scaleX:2.57,scaleY:2.57,x:523.9,y:465.6},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:-22.4,x:450,y:496.6},0).wait(1).to({rotation:-22,x:449.8,y:496.1},0).wait(1).to({rotation:-21.6,x:449.6,y:495.5},0).wait(1).to({rotation:-21.2,x:449.4,y:495},0).wait(1).to({rotation:-20.9,x:449.2,y:494.5},0).wait(1).to({rotation:-20.5,x:449,y:494},0).wait(1).to({rotation:-20.1,x:448.8,y:493.5},0).wait(1).to({rotation:-19.7,x:448.6,y:493},0).wait(1).to({rotation:-19.3,x:448.4,y:492.5},0).wait(1).to({rotation:-18.9,x:448.2,y:492},0).wait(1).to({rotation:-18.5,x:448.1,y:491.5},0).wait(1).to({rotation:-19,x:448.3,y:492},0).wait(1).to({rotation:-19.4,x:448.5,y:492.6},0).wait(1).to({rotation:-19.8,x:448.7,y:493.2},0).wait(1).to({rotation:-20.2,x:448.9,y:493.7},0).wait(1).to({rotation:-20.7,x:449.1,y:494.3},0).wait(1).to({rotation:-21.1,x:449.3,y:494.8},0).wait(1).to({rotation:-21.5,x:449.5,y:495.4},0).wait(1).to({rotation:-21.9,x:449.8,y:495.9},0).wait(1).to({rotation:-22.4,x:450,y:496.5},0).wait(1).to({rotation:-22.8,x:450.2,y:497.1},0).wait(5).to({regX:31.3,regY:-0.2,scaleX:2.57,scaleY:2.57,x:524.1,y:465.6},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:-24.5,x:455.4,y:509},0).wait(1).to({rotation:-26.2,x:460.8,y:520.7},0).wait(1).to({rotation:-28,x:466.2,y:532.5},0).wait(1).to({rotation:-29.7,x:471.6,y:544.2},0).wait(1).to({rotation:-31.4,x:477.1,y:555.9},0).wait(1).to({rotation:-33.1,x:482.7,y:567.5},0).wait(5).to({rotation:-26,x:398.6,y:519.1},0).wait(1).to({rotation:-18.8,x:315.6,y:470.2},0).wait(1).to({rotation:-35.8,x:12.9,y:487},0).wait(2).to({rotation:-51.1,x:27.7,y:502.4},0).wait(1).to({rotation:-46,x:30.3,y:643.7},0).wait(1).to({rotation:-40.9,x:17.3,y:492.5},0).wait(1).to({rotation:-35.8,x:64.9,y:489},0).wait(1).to({rotation:2.8,x:717.5,y:315.9},0).wait(1).to({rotation:-6.1,x:741.9,y:284.3},0).wait(1).to({rotation:1.9,x:695.4,y:306.2},0).wait(1).to({rotation:9.8,x:650.5,y:328.1},0).wait(1));

	// tric_back-leg_L_top
	this.instance_1 = new lib.tric_backleg_L_top();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1204.8,425.3,2.568,2.568,-90.5,0,0,39.9,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,rotation:-78.6,x:1203,y:534.3},0).wait(1).to({rotation:-66.5,x:1183.1,y:536.5},0).wait(1).to({rotation:-54.4,x:1164.3,y:534.2},0).wait(1).to({rotation:-42.3,x:1147.6,y:527.7},0).wait(1).to({rotation:-30.3,x:1133.6,y:517.7},0).wait(1).to({regX:40.3,regY:-13.5,scaleX:2.56,scaleY:2.56,x:1205.5,y:436},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:1133.6,y:518.1},0).wait(32).to({regX:40.4,regY:-13.5,scaleX:2.56,scaleY:2.56,x:1205.7,y:436.2},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:1133.6,y:518.4},0).wait(25).to({scaleX:2.56,scaleY:2.56,x:1134,y:518.7},0).wait(1).to({scaleX:2.57,scaleY:2.57,rotation:-29.2,x:1136.6,y:525.3},0).wait(1).to({rotation:-28.2,x:1139.3,y:531.9},0).wait(1).to({rotation:-27.2,x:1141.9,y:538.4},0).wait(1).to({rotation:-26.1,x:1144.5,y:545},0).wait(1).to({rotation:-25.1,x:1147.2,y:551.6},0).wait(1).to({rotation:-24,x:1149.8,y:558.2},0).wait(5).to({rotation:-11.9,x:1072.9,y:547.5},0).wait(1).to({rotation:0.3,x:996,y:536.7},0).wait(1).to({rotation:-26.3,x:668.6,y:483.1},0).wait(1).to({rotation:-18.1,x:655,y:469.7},0).wait(1).to({rotation:-5.1,x:472.4,y:467},0).wait(1).to({rotation:7.8,x:122.2,y:500.8},0).wait(1).to({rotation:20.8,x:472.4,y:466.9},0).wait(1).to({rotation:33.7,x:668.6,y:483},0).wait(1).to({rotation:46.7,x:1170.5,y:602.2},0).wait(1).to({rotation:-2,x:1134.3,y:710.1},0).wait(1).to({x:1145.1,y:696.2},0).wait(1).to({x:1155.8,y:682.3},0).wait(1));

	// tric_back-leg_L_btm
	this.instance_2 = new lib.tric_backleg_L_btm();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1278.3,647.2,2.564,2.564,-31.1,0,0,-7.4,-25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:-24.9,x:1285,y:691.5},0).wait(1).to({rotation:-18.7,x:1240.7,y:688.4},0).wait(1).to({rotation:-12.5,x:1195.9,y:684.6},0).wait(1).to({rotation:-6.2,x:1150.8,y:680.1},0).wait(1).to({rotation:0,x:1105.3,y:674.8},0).wait(1).to({regX:-8.1,regY:-26.2,x:1085.2,y:607.5},0).wait(1).to({regX:0,regY:0,x:1106,y:674.8},0).wait(32).to({regX:-8.1,regY:-26.5,x:1085.2,y:607.6},0).wait(1).to({regX:0,regY:0,x:1106,y:675.6},0).wait(25).to({regX:-8.1,regY:-26.5,x:1085.2,y:607.6},0).wait(1).to({regX:0,regY:0,rotation:-1.5,x:1106.7,y:679.8},0).wait(1).to({rotation:-3,x:1107.5,y:683.8},0).wait(1).to({rotation:-4.5,x:1108.2,y:687.8},0).wait(1).to({rotation:-6,x:1109,y:691.8},0).wait(1).to({rotation:-7.5,x:1109.7,y:695.7},0).wait(1).to({rotation:-9,x:1110.4,y:699.6},0).wait(5).to({rotation:-4.6,x:1001.6,y:656.1},0).wait(1).to({rotation:-0.2,x:892.6,y:612.2},0).wait(1).to({rotation:-19.6,x:649.5,y:616.7},0).wait(1).to({rotation:-28.2,x:647.1,y:590.3},0).wait(1).to({rotation:-22.6,x:456.3,y:598.3},0).wait(1).to({rotation:-16.9,x:278.3,y:528},0).wait(1).to({rotation:-11.3,x:444.6,y:606.1},0).wait(1).to({rotation:-5.6,x:634.5,y:625.2},0).wait(1).to({rotation:0,x:1103.5,y:655.4},0).wait(1).to({rotation:97.3,x:940.9,y:747.7},0).wait(1).to({x:964.9,y:748.7},0).wait(1).to({x:988.9,y:749.7},0).wait(1));

	// Tric_back-leg_L_foot
	this.instance_3 = new lib.Tric_backleg_L_foot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1388.9,743.3,2.564,2.564,-45.9,0,0,12.9,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:-37.3,x:1328,y:781.9},0).wait(1).to({rotation:-28.7,x:1275.8,y:781.7},0).wait(1).to({rotation:-20.2,x:1224,y:780.6},0).wait(1).to({rotation:-11.6,x:1172.7,y:778.9},0).wait(1).to({rotation:-3.1,x:1122.1,y:776.6},0).wait(1).to({regX:17.4,regY:-9.5,rotation:-3,x:1166.2,y:749.3},0).wait(1).to({regX:0,regY:0,rotation:-3.1,x:1122.9,y:776},0).wait(32).to({regX:17.4,regY:-9.5,rotation:-3,x:1166.2,y:749.3},0).wait(1).to({regX:0,regY:0,rotation:-3.1,x:1122.9,y:776},0).wait(25).to({regX:17.4,regY:-9.3,rotation:-3,x:1166.3,y:749.6},0).wait(1).to({regX:0,regY:0,rotation:-1.1,x:1121.7,y:775.3},0).wait(1).to({rotation:0.9,x:1120.6,y:774.6},0).wait(1).to({rotation:2.9,x:1119.5,y:774},0).wait(1).to({rotation:4.9,x:1118.5,y:773.3},0).wait(1).to({rotation:6.8,x:1117.5,y:772.7},0).wait(1).to({rotation:8.8,x:1116.6,y:771.9},0).wait(5).to({rotation:4.5,x:992.8,y:741.9},0).wait(1).to({rotation:0.2,x:869.3,y:711.7},0).wait(1).to({rotation:-83.4,x:732.9,y:714.9},0).wait(1).to({x:734.1,y:675.7},0).wait(1).to({rotation:-62.7,x:518.9,y:702.4},0).wait(1).to({rotation:-41.9,x:244.8,y:707.3},0).wait(1).to({rotation:-21.2,x:485.1,y:690.3},0).wait(1).to({rotation:-0.4,x:669.8,y:692.3},0).wait(1).to({rotation:20.3,x:1078.1,y:738.9},0).wait(1).to({x:982.1,y:734.9},0).wait(1).to({x:904,y:712.8},0).wait(1).to({x:825.9,y:690.7},0).wait(1));

	// tric_front-leg_L_foot
	this.instance_4 = new lib.tric_frontleg_L_foot("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(748.8,790.1,2.564,2.564,34.8,0,0,-0.1,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:-0.1,scaleX:2.57,scaleY:2.57,rotation:31.8,x:777.2,y:780.3},0).wait(1).to({rotation:28.8,x:799.9,y:778.6},0).wait(1).to({rotation:25.8,x:822.8,y:776.9},0).wait(1).to({rotation:22.8,x:845.6,y:775.3},0).wait(1).to({rotation:19.8,x:868.5,y:773.7},0).wait(1).to({regX:-1,regY:-11.9,scaleX:2.57,scaleY:2.57,x:876.1,y:744.9,mode:"independent"},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:2.57,scaleY:2.57,x:867.9,y:774.1},0).wait(7).to({rotation:13.5,x:859.2,y:746.7},0).wait(1).to({rotation:7.2,x:850.6,y:718.8},0).wait(1).to({rotation:-9.9,x:782.5,y:728.2},0).wait(1).to({rotation:-27,x:713.7,y:735},0).wait(1).to({rotation:10.6,x:689.6,y:766.2},0).wait(1).to({rotation:48.2,x:666.9,y:784.9},0).wait(1).to({rotation:22.4,x:751.1,y:788.5},0).wait(1).to({rotation:-3.3,x:837.3,y:786.3},0).wait(1).to({rotation:-29,x:922.7,y:778.2},0).wait(1).to({rotation:-48.3,x:960.1,y:732.3},0).wait(1).to({rotation:-67.6,x:994.8,y:684.3},0).wait(1).to({rotation:-17.3,x:897.2,y:745.2},0).wait(1).to({rotation:33.1,x:791.5,y:785.7},0).wait(13).to({regX:-1.4,regY:-12.2,scaleX:2.56,scaleY:2.56,x:806.3,y:758.8},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:2.57,scaleY:2.57,rotation:20.2,x:821.6,y:753.8},0).wait(1).to({rotation:7.2,x:851.6,y:719.5},0).wait(1).to({rotation:-9.9,x:783.6,y:728.6},0).wait(1).to({rotation:-27,x:715,y:735},0).wait(1).to({rotation:10.6,x:690.5,y:767},0).wait(1).to({rotation:48.2,x:667.1,y:786},0).wait(1).to({rotation:22.4,x:751.9,y:789.4},0).wait(1).to({rotation:-3.3,x:838.4,y:786.8},0).wait(1).to({rotation:-29,x:923.9,y:778.2},0).wait(1).to({rotation:-48.3,x:961.3,y:731.9},0).wait(1).to({rotation:-67.6,x:995.8,y:683.5},0).wait(1).to({rotation:-17.3,x:898.4,y:745.4},0).wait(1).to({rotation:33.1,x:792.1,y:786.7},0).wait(13).to({regX:-0.6,regY:-4.5,scaleX:2.56,scaleY:2.56,x:797.6,y:777.2},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:2.57,scaleY:2.57,rotation:29.2,x:794.6,y:784.5},0).wait(1).to({rotation:25.2,x:796.6,y:781.7},0).wait(1).to({rotation:21.3,x:798.8,y:778.8},0).wait(1).to({rotation:17.4,x:800.9,y:775.8},0).wait(1).to({rotation:13.5,x:803,y:772.8},0).wait(1).to({rotation:9.5,x:805.1,y:769.7},0).wait(5).to({rotation:4.6,x:792.5,y:762.8},0).wait(1).to({rotation:-0.3,x:779.9,y:755.7},0).wait(1).to({rotation:-46.4,x:508.1,y:677.7},0).wait(1).to({rotation:-61.4,x:391.4,y:715.7},0).wait(1).to({rotation:-42.5,x:401.7,y:564.2},0).wait(1).to({rotation:-23.6,x:146.6,y:568.2},0).wait(1).to({rotation:-4.7,x:395.3,y:567.8},0).wait(1).to({rotation:14.2,x:497.6,y:681.9},0).wait(1).to({rotation:33.1,x:864.7,y:525},0).wait(1).to({x:968.7,y:723},0).wait(1).to({x:936.9,y:699.1},0).wait(1).to({x:905,y:675.2},0).wait(1));

	// tric_front-leg_L_btm
	this.instance_5 = new lib.tric_frontleg_L_btm("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(795.5,698.7,2.564,2.564,45.4,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:40.2,x:812.1,y:696.8},0).wait(1).to({rotation:35.1,x:828.6,y:694.2},0).wait(1).to({rotation:30,x:845.2,y:691.6},0).wait(1).to({rotation:24.9,x:861.8,y:689},0).wait(1).to({rotation:19.8,x:878.4,y:686.4},0).wait(1).to({regX:-7.6,regY:-12.8,scaleX:2.57,scaleY:2.57,x:870.9,y:649.1,mode:"independent"},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:878.1,y:686.6},0).wait(7).to({rotation:32.3,x:876.8,y:660.3},0).wait(1).to({rotation:44.8,x:875.5,y:632.2},0).wait(1).to({rotation:69.3,x:817.1,y:656.1},0).wait(1).to({rotation:93.7,x:762.9,y:674.7},0).wait(1).to({rotation:80.5,x:748.8,y:697.1},0).wait(1).to({rotation:67.3,x:736.3,y:718.2},0).wait(1).to({rotation:39.5,x:775.2,y:721.7},0).wait(1).to({rotation:11.8,x:815.4,y:716.6},0).wait(1).to({rotation:-15.9,x:852.8,y:703.2},0).wait(1).to({rotation:-36.1,x:878.1,y:673.9},0).wait(1).to({rotation:-56.4,x:898.9,y:642.7},0).wait(1).to({rotation:-14.3,x:861.9,y:678.8},0).wait(1).to({rotation:27.8,x:810.8,y:700.9},0).wait(1).to({rotation:27.8},0).wait(12).to({regX:-7.8,regY:-12.7,scaleX:2.57,scaleY:2.57,x:808.9,y:662.7},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:36.3,x:843.6,y:667},0).wait(1).to({rotation:44.8,x:876,y:632.3},0).wait(1).to({rotation:69.3,x:817.5,y:656.5},0).wait(1).to({rotation:93.7,x:763.1,y:675.2},0).wait(1).to({rotation:80.5,x:749.1,y:697.5},0).wait(1).to({rotation:67.3,x:736.6,y:718.5},0).wait(1).to({rotation:39.5,x:775.6,y:721.8},0).wait(1).to({rotation:11.8,x:815.9,y:716.4},0).wait(1).to({rotation:-15.9,x:853.2,y:702.8},0).wait(1).to({rotation:-36.1,x:878.3,y:673.3},0).wait(1).to({rotation:-56.4,x:899,y:642.1},0).wait(1).to({rotation:-14.3,x:862.2,y:678.3},0).wait(1).to({rotation:27.8,x:811.3,y:700.9},0).wait(1).to({rotation:27.8},0).wait(12).to({regX:-5.8,regY:-10.8,scaleX:2.57,scaleY:2.57,x:810.7,y:669.9},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:30.2,x:814.8,y:700.5},0).wait(1).to({rotation:32.5,x:818.6,y:699.5},0).wait(1).to({rotation:34.9,x:822.4,y:698.6},0).wait(1).to({rotation:37.2,x:826.2,y:697.5},0).wait(1).to({rotation:39.5,x:830,y:696.4},0).wait(1).to({rotation:41.9,x:833.9,y:695.3},0).wait(5).to({rotation:21.1,x:794.5,y:686.9},0).wait(1).to({rotation:0.3,x:754.7,y:674.5},0).wait(1).to({rotation:-23,x:454.8,y:614.4},0).wait(1).to({rotation:52,x:404,y:631.2},0).wait(1).to({rotation:-30.8,x:341.2,y:490.9},0).wait(1).to({rotation:-28.2,x:182.2,y:409.9},0).wait(1).to({rotation:-25.6,x:339.6,y:493.3},0).wait(1).to({rotation:-23,x:454.8,y:614.4},0).wait(1).to({rotation:69.2,x:932,y:454.8},0).wait(1).to({rotation:30.1,x:975.4,y:624.4},0).wait(1).to({x:949.4,y:602.4},0).wait(1).to({x:923.4,y:580.4},0).wait(1));

	// tric_front-leg_L_top
	this.instance_6 = new lib.tric_frontleg_L_top("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(760.2,573.5,2.564,2.564,54.9,0,0,-12.6,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:43.8,x:784.2,y:604.7},0).wait(1).to({rotation:32.9,x:792.9,y:605.7},0).wait(1).to({rotation:21.9,x:800.7,y:605.9},0).wait(1).to({rotation:11,x:807.5,y:605.4},0).wait(1).to({rotation:0,x:813.2,y:604.6},0).wait(1).to({regX:-19.3,regY:-8.7,x:764,y:582.6,mode:"independent"},0).wait(1).to({regX:0,regY:0,x:813.6,y:605},0).wait(7).to({rotation:-12.5,x:807.3,y:591.8},0).wait(1).to({rotation:-25,x:798.5,y:578},0).wait(1).to({rotation:-5.3,x:785.7,y:594.6},0).wait(1).to({rotation:14.5,x:766.8,y:609},0).wait(1).to({rotation:24.2,x:763.6,y:618.7},0).wait(1).to({rotation:33.9,x:759.4,y:627.3},0).wait(1).to({rotation:28.7,x:766.6,y:627.6},0).wait(1).to({rotation:23.5,x:773.6},0).wait(1).to({rotation:18.3,x:780.2,y:627.2},0).wait(1).to({rotation:9.4,x:788.6,y:623.7},0).wait(1).to({rotation:0.5,x:795.8,y:619.4},0).wait(1).to({rotation:21.3,x:784.8,y:614.4},0).wait(1).to({rotation:42.1,x:768.7,y:604.3},0).wait(13).to({regX:-19.2,regY:-9.3,scaleX:2.56,scaleY:2.56,x:746.8,y:554.6},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:8.5,x:786.4,y:590.7},0).wait(1).to({rotation:-25,x:790.4,y:565.6},0).wait(1).to({rotation:-5.3,x:781.2,y:589.2},0).wait(1).to({rotation:14.5,x:766,y:610.5},0).wait(1).to({rotation:24.2,x:762.6,y:620.1},0).wait(1).to({rotation:33.9,x:758.1,y:628.6},0).wait(1).to({rotation:28.7,x:765.5,y:629},0).wait(1).to({rotation:23.5,x:772.6},0).wait(1).to({rotation:18.3,x:779.3,y:628.7},0).wait(1).to({rotation:9.4,x:787.9,y:625.3},0).wait(1).to({rotation:0.5,x:795.4,y:621.1},0).wait(1).to({rotation:21.3,x:783.8,y:615.9},0).wait(1).to({rotation:42.1,x:767.3,y:605.4},0).wait(13).to({regX:-18.6,regY:-12.9,scaleX:2.56,scaleY:2.56,x:754.1,y:548.5},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:38.9,x:772.2,y:608.6},0).wait(1).to({rotation:35.8,x:777.1,y:612},0).wait(1).to({rotation:32.6,x:781.9,y:615.1},0).wait(1).to({rotation:29.4,x:786.7,y:618.1},0).wait(1).to({rotation:26.2,x:791.3,y:620.9},0).wait(1).to({rotation:23.1,x:795.9,y:623.6},0).wait(5).to({rotation:11.3,x:735.7,y:629.1},0).wait(1).to({rotation:-0.5,x:673.8,y:632.9},0).wait(1).to({rotation:-3.5,x:364.1,y:575.9},0).wait(1).to({x:351.5,y:563.3},0).wait(1).to({rotation:-37.6,x:252.2,y:490.6},0).wait(1).to({rotation:-26.2,x:165.5,y:476},0).wait(1).to({rotation:-14.9,x:248.8,y:513.3},0).wait(1).to({rotation:-3.5,x:364.1,y:575.9},0).wait(1).to({rotation:92,x:977.9,y:366.6},0).wait(1).to({rotation:68.7,x:954.7,y:528.3},0).wait(1).to({rotation:64.3,x:922,y:509.1},0).wait(1).to({rotation:59.9,x:889.4,y:489.6},0).wait(1));

	// tric_shoulder_L
	this.instance_7 = new lib.tric_shoulder_L();
	this.instance_7.parent = this;
	this.instance_7.setTransform(834.3,468.5,2.568,2.568,-0.8,0,0,17.6,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,rotation:-0.6,x:789.8,y:501.7},0).wait(1).to({rotation:-0.5,x:790,y:503.6},0).wait(1).to({rotation:-0.3,x:790.3,y:505.5},0).wait(1).to({rotation:-0.2,x:790.5,y:507.4},0).wait(1).to({rotation:0,x:790.8,y:509.3},0).wait(1).to({regX:-10.2,regY:-10.7,x:763.8,y:482.2},0).wait(1).to({regX:0,regY:0,x:790,y:509.7},0).wait(32).to({regX:-10.3,regY:-10.8,x:764,y:482.4},0).wait(1).to({regX:0,regY:0,x:790.4,y:510.1},0).wait(25).to({regX:38.1,regY:-39.6,x:888.3,y:407.8},0).wait(1).to({regX:0,regY:0,rotation:0.7,x:792.5,y:511.4},0).wait(1).to({rotation:1.4,x:794.5,y:513.3},0).wait(1).to({rotation:2.1,x:796.6,y:515.1},0).wait(1).to({rotation:2.9,x:798.6,y:517},0).wait(1).to({rotation:3.6,x:800.7,y:518.8},0).wait(1).to({rotation:4.3,x:802.8,y:520.6},0).wait(5).to({rotation:2,x:727.9},0).wait(1).to({rotation:-0.2,x:653.2,y:520.4},0).wait(1).to({rotation:-3.8,x:357.7,y:497.7},0).wait(1).to({rotation:1.7,x:347.8,y:488.5},0).wait(1).to({rotation:-32.8,x:223.3,y:484.1},0).wait(1).to({rotation:-23.1,x:40.3,y:437.5},0).wait(1).to({rotation:-13.4,x:178.9,y:467.3},0).wait(1).to({rotation:-3.8,x:357.7,y:497.7},0).wait(1).to({rotation:86.2,x:970.5,y:262.2},0).wait(1).to({rotation:-14.8,x:946.9,y:405.7},0).wait(1).to({rotation:3.9,x:940.8,y:403.1},0).wait(1).to({rotation:22.6,x:945.7,y:390.6},0).wait(1));

	// tric_hip
	this.instance_8 = new lib.tric_hip();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1208.4,430.9,2.568,2.568,0,0,0,10,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,regY:0,x:1182.7,y:454.2},0).wait(1).to({y:456.5},0).wait(1).to({y:458.8},0).wait(1).to({y:461.1},0).wait(1).to({y:463.4},0).wait(1).to({regX:10,regY:-17.7,x:1208.4,y:418.3},0).wait(1).to({regX:0,regY:0,x:1182.7,y:463.8},0).wait(32).to({regX:10,regY:-17.9,x:1208.4,y:418.2},0).wait(1).to({regX:0,regY:0,x:1182.7,y:464.1},0).wait(25).to({regX:10,regY:-17.9,x:1208.4,y:418.1},0).wait(1).to({regX:0,regY:0,rotation:-2.8,x:1184.9,y:468.2},0).wait(1).to({rotation:-5.6,x:1187.2,y:472.2},0).wait(1).to({rotation:-8.4,x:1189.6,y:476.1},0).wait(1).to({rotation:-11.2,x:1191.9,y:479.9},0).wait(1).to({rotation:-14,x:1194.4,y:483.6},0).wait(1).to({rotation:-16.8,x:1196.8,y:487.1},0).wait(2).to({rotation:-16.7,x:1196.7},0).wait(3).to({rotation:-16.6,x:1127.5,y:487.5},0).wait(1).to({x:1058.3,y:488},0).wait(1).to({rotation:-16.5,x:680.1,y:411.6},0).wait(2).to({rotation:-7,x:475.5,y:392.9},0).wait(1).to({rotation:2.6,x:245.5,y:376.7},0).wait(1).to({rotation:12.2,x:460.7,y:383.7},0).wait(1).to({rotation:21.7,x:650.8,y:393.5},0).wait(1).to({rotation:31.3,x:1199.4,y:575.5},0).wait(1).to({rotation:23,x:1201.5,y:576.5},0).wait(1).to({rotation:26.9,x:1197.4,y:568.2},0).wait(1).to({rotation:30.8,x:1193.4,y:559.8},0).wait(1));

	// tric_tail
	this.instance_9 = new lib.tric_tail();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1125.8,389.6,2.567,2.567,-6.8,0,0,-111.5,-59.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:0.2,regY:0,scaleX:2.57,scaleY:2.57,x:1432.7,y:508.8},0).wait(1).to({x:1436.7,y:510.4},0).wait(1).to({x:1440.7,y:512.1},0).wait(1).to({x:1444.7,y:513.8},0).wait(1).to({x:1448.7,y:515.5},0).wait(1).to({regX:-118.2,regY:-68.2,scaleX:2.57,scaleY:2.57,x:1126,y:377.3},0).wait(1).to({regX:0.2,regY:0,scaleX:2.57,scaleY:2.57,x:1448.6,y:515.2},0).wait(32).to({regX:-118.4,regY:-68.4,scaleX:2.57,scaleY:2.57,x:1125.9,y:377.2},0).wait(1).to({regX:0.2,regY:0,scaleX:2.57,scaleY:2.57,x:1449.1,y:515.5},0).wait(25).to({regX:-115.2,regY:-64.6,scaleX:2.57,scaleY:2.57,x:1135.4,y:386.2},0).wait(1).to({regX:0.2,regY:0,scaleX:2.57,scaleY:2.57,rotation:-6.5,x:1446.9,y:517.6},0).wait(1).to({rotation:-6.2,x:1444.6,y:519.4},0).wait(1).to({rotation:-5.9,x:1442.2,y:521.2},0).wait(1).to({rotation:-5.6,x:1439.8,y:523},0).wait(1).to({rotation:-5.3,x:1437.5,y:524.8},0).wait(1).to({rotation:-5,x:1435.1,y:526.6},0).wait(5).to({rotation:-2.4,x:1360.1,y:544.4},0).wait(1).to({rotation:0.2,x:1284.5,y:561.7},0).wait(1).to({rotation:-10,x:981.5,y:472.3},0).wait(1).to({rotation:-13.5,x:987.8,y:452.2},0).wait(1).to({rotation:-19.9,x:799.8,y:399},0).wait(1).to({rotation:-26.3,x:339.3,y:291},0).wait(1).to({rotation:-18.2,x:798,y:409.4},0).wait(1).to({rotation:-10,x:981.5,y:472.3},0).wait(1).to({rotation:-32.6,x:1596,y:614.7},0).wait(1).to({rotation:-36.9,x:1632.9,y:636.9},0).wait(1).to({x:1629.7,y:623.8},0).wait(1).to({x:1626.5,y:610.7},0).wait(1));

	// tric_neck
	this.instance_10 = new lib.tric_neck();
	this.instance_10.parent = this;
	this.instance_10.setTransform(702.3,452.7,2.568,2.568,-2.5,0,0,33.5,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:0,regY:0,rotation:-2.1,x:615.2,y:412.8},0).wait(1).to({rotation:-1.6,x:616.1,y:412.9},0).wait(1).to({rotation:-1,x:617,y:413},0).wait(1).to({rotation:-0.5,x:618,y:413.1},0).wait(1).to({rotation:0,x:618.9,y:413.2},0).wait(1).to({regX:33.5,regY:3.5,x:705.3,y:421.3},0).wait(1).to({regX:0,regY:0,x:619.2,y:412.2},0).wait(7).to({rotation:-1.7,x:619,y:414.9},0).wait(1).to({rotation:-3.5,x:618.9,y:417.5},0).wait(1).to({rotation:-3.7,y:417.8},0).wait(1).to({rotation:-3.9,x:618.8,y:418.1},0).wait(1).to({rotation:-4.1,y:418.4},0).wait(1).to({rotation:-4.3,y:418.7},0).wait(1).to({rotation:-4.5,y:419.1},0).wait(1).to({rotation:-4.7,y:419.4},0).wait(1).to({rotation:-4.9,y:419.7},0).wait(1).to({rotation:-5.1,y:420},0).wait(1).to({rotation:-5.4,y:420.3},0).wait(1).to({rotation:-5.6,y:420.6},0).wait(1).to({rotation:-5.8,y:420.9},0).wait(13).to({regX:33.4,regY:3.5,rotation:-3.3,x:705.1,y:421.3},0).wait(1).to({regX:0,regY:0,x:619,y:417.2},0).wait(1).to({rotation:-3.1,y:416.9},0).wait(1).to({rotation:-2.9,y:416.7},0).wait(1).to({rotation:-2.7,y:416.4},0).wait(1).to({rotation:-2.5,y:416.1},0).wait(1).to({rotation:-2.3,x:619.1,y:415.8},0).wait(1).to({rotation:-2.1,y:415.5},0).wait(1).to({rotation:-2,y:415.2},0).wait(1).to({rotation:-1.8,y:414.9},0).wait(1).to({rotation:-1.6,y:414.6},0).wait(1).to({rotation:-1.4,x:619.2,y:414.4},0).wait(1).to({rotation:-1.2,y:414.1},0).wait(1).to({rotation:-1,y:413.8},0).wait(13).to({regX:33.5,regY:3.1,rotation:0.3,x:704.6,y:421},0).wait(1).to({regX:0,regY:0,rotation:0,x:619.7,y:426.2},0).wait(1).to({rotation:0.1,x:620.7,y:439.5},0).wait(1).to({x:621.8,y:452.8},0).wait(1).to({rotation:0.2,x:622.9,y:466},0).wait(1).to({x:623.9,y:479.3},0).wait(1).to({x:625,y:492.5},0).wait(1).to({rotation:0.3},0).wait(1).to({y:492.4},0).wait(2).to({rotation:0.4,y:492.3},0).wait(1).to({x:552.9,y:461.2},0).wait(1).to({rotation:0.5,x:480.9,y:430},0).wait(1).to({rotation:-18.8,x:144.4,y:400.6},0).wait(2).to({rotation:-70,x:110,y:360.4},0).wait(1).to({rotation:-42.9,x:20.6,y:325.1},0).wait(1).to({rotation:-15.8,x:62.1,y:298.2},0).wait(1).to({rotation:11.2,x:170.2,y:445.9},0).wait(1).to({rotation:-38.2,x:860.1,y:285.4},0).wait(1).to({rotation:-8.8,x:892.5,y:263.8},0).wait(1).to({x:889.4,y:278.8},0).wait(1).to({x:886.3,y:293.7},0).wait(1));

	// tric_ribs
	this.instance_11 = new lib.tric_backleg_R_foot();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1141.3,716.1,2.566,2.566,-17.8,0,0,19.2,-9.6);

	this.instance_12 = new lib.tric_ribs();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1067.2,356.4,2.568,2.568,0,0,0,67.7,-44.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:-15.7,x:1090,y:755.4},0).wait(1).to({rotation:-13.6,x:1078.2,y:756},0).wait(1).to({rotation:-11.4,x:1066.3,y:756.6},0).wait(1).to({rotation:-9.3,x:1054.6,y:757.1},0).wait(1).to({rotation:-7.1,x:1042.9,y:757.6},0).to({_off:true},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).wait(1).to({regX:0,regY:-7.3,x:893.3,y:451.7},0).wait(32).to({regX:67.7,regY:-44.5,x:1067.2,y:356.5},0).wait(1).to({regX:0,regY:-7.3,x:893.3,y:452.1},0).wait(25).to({regX:67.7,regY:-41.6,x:1067.2,y:364.4},0).wait(1).to({regX:0,regY:-7.3,rotation:-1.3,x:895.4,y:458.8},0).wait(1).to({rotation:-2.7,x:897.5,y:465.1},0).wait(1).to({rotation:-4,x:899.7,y:471.4},0).wait(1).to({rotation:-5.4,x:902,y:477.6},0).wait(1).to({rotation:-6.7,x:904.4,y:483.7},0).wait(1).to({rotation:-8.1,x:906.9,y:489.8},0).wait(5).to({rotation:-4.1,x:830.5,y:476.5},0).wait(1).to({rotation:-0.2,x:754.8,y:462.8},0).wait(1).to({rotation:7.1,x:420.7,y:408.2},0).wait(2).to({rotation:19,x:251.4,y:384.5},0).wait(1).to({rotation:30.9,x:56,y:315.9},0).wait(1).to({rotation:42.8,x:257.1,y:304.2},0).wait(1).to({rotation:54.8,x:440.2,y:252.8},0).wait(1).to({rotation:66.7,x:1044.8,y:413.6},0).wait(1).to({rotation:60.4,x:1036.7,y:440.6},0).wait(1).to({x:1041.3,y:450.5},0).wait(1).to({x:1045.9,y:460.5},0).wait(1));

	// tric_front-leg_R_top/ribs
	this.instance_13 = new lib.tric_ribs();
	this.instance_13.parent = this;
	this.instance_13.setTransform(705,421,2.568,2.568,1.3,0,0,-71.8,-18);

	this.instance_14 = new lib.tric_frontleg_R_top();
	this.instance_14.parent = this;
	this.instance_14.setTransform(751,564.5,2.564,2.564,35.3,0,0,-19.7,-9.8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:0,regY:-7.3,rotation:1.2,x:889.5,y:452.9},0).wait(1).to({rotation:0.9,x:890.4,y:452.7},0).wait(1).to({rotation:0.6,x:891.4,y:452.4},0).wait(1).to({rotation:0.3,x:892.3,y:452.2},0).wait(1).to({rotation:0,x:893.2,y:452},0).to({_off:true},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(6).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:777.7,y:614.3},0).wait(20).to({rotation:19.4,x:790.5,y:597.2},0).wait(1).to({rotation:3.5,x:800.3,y:577},0).wait(1).to({rotation:19.7,x:785.6,y:581.7},0).wait(1).to({rotation:35.9,x:767.7,y:583.1},0).wait(1).to({rotation:61,x:743,y:598.4},0).wait(1).to({rotation:86,x:717.8,y:603.1},0).wait(1).to({rotation:67.3,x:746.7,y:608.5},0).wait(1).to({rotation:48.7,x:775.9,y:608},0).wait(1).to({rotation:34.6,x:786.1,y:605.6},0).wait(1).to({rotation:20.6,x:794.7,y:600.3},0).wait(1).to({rotation:28,x:786.5,y:607.7},0).wait(1).to({rotation:35.3,x:777.7,y:614.3},0).wait(1).to({regX:-19.8,regY:-10,scaleX:2.56,scaleY:2.56,x:751.2,y:564.5},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:777.7,y:614.8},0).wait(13).to({rotation:19.4,x:790.7,y:597.7},0).wait(1).to({rotation:3.5,x:800.6,y:577.5},0).wait(1).to({rotation:19.7,x:785.7,y:582.2},0).wait(1).to({rotation:35.9,x:767.8,y:583.6},0).wait(1).to({rotation:61,x:742.9,y:598.9},0).wait(1).to({rotation:86,x:717.5,y:603.5},0).wait(1).to({rotation:67.3,x:746.5,y:609},0).wait(1).to({rotation:48.7,x:775.9,y:608.5},0).wait(1).to({rotation:34.6,x:786.2,y:606.2},0).wait(1).to({rotation:20.6,x:794.9,y:600.8},0).wait(1).to({rotation:28,x:786.6,y:608.2},0).wait(1).to({rotation:35.3,x:777.7,y:614.8},0).wait(1).to({regX:-19.7,regY:-7.1,scaleX:2.56,scaleY:2.56,x:746.9,y:570.6},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:35.1,x:778.1,y:613},0).wait(1).to({rotation:34.9,x:778.6,y:611.4},0).wait(1).to({rotation:34.7,x:779.1,y:609.8},0).wait(1).to({rotation:34.5,x:779.6,y:608.1},0).wait(1).to({rotation:34.3,x:780.1,y:606.5},0).wait(1).to({rotation:34,x:780.6,y:604.9},0).wait(5).to({rotation:16.5,x:724,y:604.7},0).wait(1).to({rotation:-0.9,x:663.4,y:601.5},0).wait(1).to({rotation:8,x:351.8,y:572.8},0).wait(2).to({rotation:27.1,x:198.9,y:544.8},0).wait(1).to({rotation:46.1,x:84.1,y:508.6},0).wait(1).to({rotation:65.2,x:166.9,y:559.1},0).wait(1).to({rotation:84.2,x:291.2,y:599.9},0).wait(1).to({rotation:103.3,x:889.1,y:386.9},0).wait(1).to({rotation:89.3,x:911.1,y:492.3},0).wait(1).to({rotation:98.8,x:882,y:503.7},0).wait(1).to({rotation:108.3,x:853.6,y:513.7},0).wait(1));

	// tric_front-leg_R_btm
	this.instance_15 = new lib.tric_backleg_R_top();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1191.8,429.4,2.567,2.567,-9,0,0,31.6,-20.9);

	this.instance_16 = new lib.tric_frontleg_R_btm();
	this.instance_16.parent = this;
	this.instance_16.setTransform(791.2,657,2.567,2.567,8,0,0,-1.1,-18.6);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:-6.6,x:1119.5,y:497.5},0).wait(1).to({rotation:-4.1,x:1119,y:499.7},0).wait(1).to({rotation:-1.7,x:1118.6,y:501.8},0).wait(1).to({rotation:0.8,x:1118.4,y:503.8},0).wait(1).to({rotation:3.3,y:505.7},0).to({_off:true},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(6).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:8.1,x:787.3,y:704.7},0).wait(20).to({rotation:29.2,x:797.3,y:677.3},0).wait(1).to({rotation:50.4,x:810.1,y:644.1},0).wait(1).to({rotation:53.5,x:770.3,y:651.1},0).wait(1).to({rotation:56.7,x:730.7,y:658},0).wait(1).to({rotation:37.2,x:709.4,y:686.3},0).wait(1).to({rotation:17.8,x:691,y:710},0).wait(1).to({rotation:-12.4,x:761.8,y:719.8},0).wait(1).to({rotation:-42.6,x:829,y:717},0).wait(1).to({rotation:-51.9,x:857,y:682.9},0).wait(1).to({rotation:-61.2,x:884,y:648},0).wait(1).to({rotation:-26.5,x:839.9,y:683.7},0).wait(1).to({rotation:8.1,x:787.3,y:704.7},0).wait(1).to({regX:-1.1,regY:-18.6,scaleX:2.57,scaleY:2.57,rotation:8,x:791.2,y:657},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:8.1,x:787.3,y:704.7},0).wait(13).to({rotation:29.2,x:797.3,y:677.3},0).wait(1).to({rotation:50.4,x:810.1,y:644.1},0).wait(1).to({rotation:53.5,x:770.3,y:651.1},0).wait(1).to({rotation:56.7,x:730.7,y:658},0).wait(1).to({rotation:37.2,x:709.4,y:686.3},0).wait(1).to({rotation:17.8,x:691,y:710},0).wait(1).to({rotation:-12.4,x:761.8,y:719.8},0).wait(1).to({rotation:-42.6,x:829,y:717},0).wait(1).to({rotation:-51.9,x:857,y:682.9},0).wait(1).to({rotation:-61.2,x:884,y:648},0).wait(1).to({rotation:-26.5,x:839.9,y:683.7},0).wait(1).to({rotation:8.1,x:787.3,y:704.7},0).wait(1).to({regX:-1.1,regY:-18.6,scaleX:2.57,scaleY:2.57,rotation:8,x:791.2,y:657},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:10.1,x:789.9,y:705.9},0).wait(1).to({rotation:12.1,x:792.5,y:707.1},0).wait(1).to({rotation:14.2,x:795.1,y:708.2},0).wait(1).to({rotation:16.2,x:797.7,y:709.2},0).wait(1).to({rotation:18.3,x:800.3,y:710.1},0).wait(1).to({rotation:20.3,x:803,y:711.1},0).wait(5).to({rotation:10.8,x:763.5,y:698},0).wait(1).to({rotation:1.3,x:724.1,y:683.6},0).wait(1).to({rotation:32.5,x:367.5,y:660.8},0).wait(1).to({rotation:47.6,x:357.4,y:653.3},0).wait(1).to({rotation:48.5,x:180.7,y:628.6},0).wait(1).to({rotation:49.5,x:116.2,y:616.1},0).wait(1).to({rotation:50.4,x:179.6,y:627.5},0).wait(1).to({rotation:51.4,x:355.2,y:651},0).wait(1).to({rotation:52.4,x:804.9,y:472.2},0).wait(1).to({rotation:6.5,x:876.5,y:606.7},0).wait(1).to({rotation:12.2,x:847.5,y:611},0).wait(1).to({rotation:17.8,x:818.5,y:614.8},0).wait(1));

	// tric_front-leg_R_foot
	this.instance_17 = new lib.tric_backleg_R_btm();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1074.3,604.9,2.564,2.564,-50.2,0,0,4.9,-16.9);

	this.instance_18 = new lib.tric_frontleg_R_foot();
	this.instance_18.parent = this;
	this.instance_18.setTransform(752.6,757.3,2.565,2.565,68.5,0,0,-3.9,-10.6);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:-45.5,x:1091.9,y:642.5},0).wait(1).to({rotation:-40.8,x:1084},0).wait(1).to({rotation:-36.2,x:1076.1,y:642.1},0).wait(1).to({rotation:-31.5,x:1068,y:641.5},0).wait(1).to({rotation:-26.8,x:1059.8,y:640.6},0).to({_off:true},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(6).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:68.4,x:730.9,y:776.6},0).wait(20).to({rotation:38.9,x:747.5,y:741},0).wait(1).to({rotation:9.3,x:766.5,y:698.3},0).wait(1).to({rotation:28.4,x:709.2,y:699.4},0).wait(1).to({rotation:47.4,x:652.3,y:697.4},0).wait(1).to({rotation:66.4,x:638.3,y:736.8},0).wait(1).to({rotation:85.5,x:626.7,y:773.9},0).wait(1).to({rotation:90.6,x:724.7,y:778.5},0).wait(1).to({rotation:95.8,x:822.9,y:783},0).wait(1).to({rotation:29,x:884.9,y:764.4},0).wait(1).to({rotation:-37.8,x:952.2,y:711},0).wait(1).to({rotation:15.3,x:842.5,y:755.4},0).wait(1).to({rotation:68.4,x:730.9,y:776.6},0).wait(1).to({regX:-3.9,regY:-10.6,scaleX:2.57,scaleY:2.57,rotation:68.5,x:752.6,y:757.3},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:68.4,x:730.9,y:776.6},0).wait(13).to({rotation:38.9,x:747.5,y:741},0).wait(1).to({rotation:9.3,x:766.5,y:698.3},0).wait(1).to({rotation:28.4,x:709.2,y:699.4},0).wait(1).to({rotation:47.4,x:652.3,y:697.4},0).wait(1).to({rotation:66.4,x:638.3,y:736.8},0).wait(1).to({rotation:85.5,x:626.7,y:773.9},0).wait(1).to({rotation:90.6,x:724.7,y:778.5},0).wait(1).to({rotation:95.8,x:822.9,y:783},0).wait(1).to({rotation:29,x:884.9,y:764.4},0).wait(1).to({rotation:-37.8,x:952.2,y:711},0).wait(1).to({rotation:15.3,x:842.5,y:755.4},0).wait(1).to({rotation:68.4,x:730.9,y:776.6},0).wait(1).to({regX:-3.9,regY:-10.6,scaleX:2.57,scaleY:2.57,rotation:68.5,x:752.5,y:757.2},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:67.2,x:733.3,y:776.2},0).wait(1).to({rotation:66,x:735.9,y:775.9},0).wait(1).to({rotation:64.7,x:738.4,y:775.6},0).wait(1).to({rotation:63.5,x:740.9,y:775.3},0).wait(1).to({rotation:62.2,x:743.5,y:775},0).wait(1).to({rotation:61,x:746,y:774.7},0).wait(5).to({rotation:30.7,x:731.1,y:777},0).wait(1).to({rotation:0.5,x:717.6,y:771.5},0).wait(1).to({rotation:7.5,x:323,y:722.8},0).wait(1).to({rotation:14.5,x:298.7,y:704.9},0).wait(1).to({rotation:-19.5,x:189.4,y:689.1},0).wait(1).to({rotation:-16.2,x:112,y:722.2},0).wait(1).to({rotation:-12.9,x:186.7,y:691.1},0).wait(1).to({rotation:-9.5,x:331,y:719.7},0).wait(1).to({rotation:80.7,x:710.1,y:513.4},0).wait(1).to({rotation:33.1,x:840.4,y:714},0).wait(1).to({rotation:48.8,x:797.9,y:701.2},0).wait(1).to({rotation:64.4,x:756.5,y:686.5},0).wait(1));

	// tric_back-leg_R_foot
	this.instance_19 = new lib.tric_frontleg_R_top();
	this.instance_19.parent = this;
	this.instance_19.setTransform(780.2,605.4,2.566,2.566,16.1,0,0,-8.3,2.4);

	this.instance_20 = new lib.tric_backleg_R_foot();
	this.instance_20.parent = this;
	this.instance_20.setTransform(1084.7,722,2.567,2.567,-6,0,0,17.4,-11.7);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:20,x:797.7,y:607.3},0).wait(1).to({rotation:23.8,x:792.9,y:609.2},0).wait(1).to({rotation:27.7,x:788,y:611.1},0).wait(1).to({rotation:31.5,x:783,y:613},0).wait(1).to({rotation:35.3,x:777.9,y:614.9},0).to({_off:true},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(6).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:1043.5,y:756.5},0).wait(32).to({regX:17.4,regY:-11.8,scaleX:2.57,scaleY:2.57,x:1084.8,y:722.1},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:1043.5,y:756.9},0).wait(25).to({regX:17.4,regY:-10.8,scaleX:2.57,scaleY:2.57,x:1084.8,y:724.3},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:-5.2,x:1043.1,y:756.8},0).wait(1).to({rotation:-4.3,x:1043,y:757},0).wait(1).to({rotation:-3.4,x:1042.9,y:757.3},0).wait(1).to({rotation:-2.5,x:1042.8,y:757.5},0).wait(1).to({rotation:-1.6,x:1042.7,y:757.7},0).wait(1).to({rotation:-0.7,y:758},0).wait(5).to({rotation:-2.3,x:930.8,y:765.1},0).wait(1).to({rotation:-4,x:819.1,y:772.2},0).wait(1).to({rotation:-5.6,x:826.1,y:759},0).wait(1).to({rotation:-80.7,x:867.6,y:730.5},0).wait(1).to({rotation:-76.2,x:478.3,y:668.5},0).wait(1).to({rotation:-52.7,x:164.8,y:656.7},0).wait(1).to({rotation:-29.1,x:384.6,y:664.9},0).wait(1).to({rotation:-5.6,x:826.1,y:759},0).wait(1).to({rotation:-11.1,x:1024.4,y:717.2},0).wait(1).to({rotation:74,x:831,y:729.7},0).wait(1).to({x:850.8,y:735},0).wait(1).to({x:870.6,y:740.3},0).wait(1));

	// tric_back-leg_R_top
	this.instance_21 = new lib.tric_frontleg_R_btm("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(848.3,651.6,2.567,2.567,5.1,0,0,-0.9,-18.2);

	this.instance_22 = new lib.tric_backleg_R_top();
	this.instance_22.parent = this;
	this.instance_22.setTransform(1203.4,438.7,2.568,2.568,3.3,0,0,31.6,-28.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:5.8,x:834.5,y:699.7},0).wait(1).to({rotation:6.5,x:822.6,y:701},0).wait(1).to({rotation:7.1,x:810.7,y:702.3},0).wait(1).to({rotation:7.7,x:798.8,y:703.7},0).wait(1).to({rotation:8.4,x:787,y:705},0).to({_off:true},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(6).to({_off:false},0).wait(1).to({regX:0,regY:0,x:1118.2,y:506.1},0).wait(32).to({regX:31.6,regY:-28.2,x:1203.3,y:438.6},0).wait(1).to({regX:0,regY:0,x:1118.2,y:506.2},0).wait(25).to({regX:31.5,regY:-28.1,x:1203.2,y:438.7},0).wait(1).to({regX:0,regY:0,rotation:4.4,x:1117.2,y:509},0).wait(1).to({rotation:5.6,x:1116.1,y:511.9},0).wait(1).to({rotation:6.8,x:1115,y:514.7},0).wait(1).to({rotation:7.9,x:1114,y:517.5},0).wait(1).to({rotation:9.1,x:1113.1,y:520.2},0).wait(1).to({rotation:10.3,x:1112.2,y:523},0).wait(5).to({rotation:5,x:1047.6,y:526.2},0).wait(1).to({rotation:-0.3,x:983.8,y:528.9},0).wait(1).to({rotation:-64.9,x:743.2,y:502.3},0).wait(1).to({rotation:-42.2,x:700.7,y:506.3},0).wait(1).to({rotation:-20.9,x:466,y:478.6},0).wait(1).to({rotation:0.5,x:116.1,y:405.5},0).wait(1).to({rotation:21.9,x:413.9,y:419.1},0).wait(1).to({rotation:43.3,x:407.5,y:379.4},0).wait(1).to({rotation:64.7,x:1128.1,y:574.3},0).wait(1).to({rotation:30.4,x:1126.2,y:639.8},0).wait(1).to({x:1130.7,y:641.7},0).wait(1).to({x:1135.3,y:643.6},0).wait(1));

	// tric_back-leg_R_btm
	this.instance_23 = new lib.tric_frontleg_R_foot("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(841.3,773.3,2.566,2.566,-11,0,0,1.2,0);

	this.instance_24 = new lib.tric_backleg_R_btm();
	this.instance_24.parent = this;
	this.instance_24.setTransform(1039.5,581.1,2.565,2.565,-26.8,0,0,4.8,-24.1);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({regX:0,scaleX:2.57,scaleY:2.57,rotation:4.8,x:816.2,y:774.2},0).wait(1).to({rotation:20.7,x:794.4,y:774.5},0).wait(1).to({rotation:36.6,x:772.9,y:775},0).wait(1).to({rotation:52.5,x:751.5,y:775.6},0).wait(1).to({rotation:68.4,x:730.3,y:776.3},0).to({_off:true},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(6).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:1056.4,y:641.9},0).wait(32).to({regX:4.8,regY:-24.1,scaleX:2.57,scaleY:2.57,x:1039.4,y:581.3},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,x:1056.3,y:642},0).wait(25).to({regX:4.7,regY:-19.9,scaleX:2.57,scaleY:2.57,x:1044.5,y:590.2},0).wait(1).to({regX:0,regY:0,scaleX:2.57,scaleY:2.57,rotation:-28.1,x:1056.7,y:642.1},0).wait(1).to({rotation:-29.4,x:1056.6,y:642.9},0).wait(1).to({rotation:-30.7,y:643.6},0).wait(1).to({rotation:-32,x:1056.5,y:644.4},0).wait(1).to({rotation:-33.3,x:1056.4,y:645.1},0).wait(1).to({rotation:-34.6,x:1056.3,y:645.8},0).wait(5).to({rotation:-17.2,x:969.9,y:658.1},0).wait(1).to({rotation:0.2,x:883.2,y:665.6},0).wait(1).to({rotation:-56.4,x:804.5,y:662.7},0).wait(1).to({rotation:-80,x:764.2,y:637},0).wait(1).to({rotation:-69.4,x:615.9,y:637.6},0).wait(1).to({rotation:-58.7,x:243.5,y:585.5},0).wait(1).to({rotation:-48.1,x:511.9,y:590.5},0).wait(1).to({rotation:-37.5,x:779.2,y:594},0).wait(1).to({rotation:-26.8,x:1045.7,y:595.9},0).wait(1).to({rotation:38.4,x:1009.9,y:679.5},0).wait(1).to({rotation:53.7,x:981.7,y:675.5},0).wait(1).to({rotation:69,x:956.9,y:670.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(283.6,205.6,1505.8,634.2);


(lib.stars_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.star("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(96,-102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.43,scaleY:1.56,skewY:7.9,x:-192,y:40.4},6).to({regY:0.1,scaleX:1.07,scaleY:1.09,rotation:-180000,skewX:160,skewY:161.2,x:48,y:-78.8},5).wait(1));

	// Layer 2
	this.instance_1 = new lib.star("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-145,-47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.58,x:111,y:15.4},6).to({scaleX:0.93,scaleY:1,rotation:-180200,x:-102.5,y:-37},5).wait(1));

	// Layer 1
	this.instance_2 = new lib.star("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(10.6,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-0.2,regY:-0.1,scaleX:0.48,scaleY:0.77,skewX:27.3,skewY:30,x:-52.1,y:-151},6).to({scaleX:0.91,scaleY:0.96,rotation:-180000,skewX:164.5,skewY:165,x:0.3,y:12.3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.7,-152.1,367.7,244.8);


(lib.bowlingPinswiggle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// topple pin
	this.instance = new lib.pin("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(55.3,144.7,0.813,0.813,0,0,0,36.8,211.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:36.2,regY:106.3,rotation:1.7,x:57.2,y:59.3},0).wait(1).to({rotation:3.3,x:59.8,y:59.4},0).wait(1).to({rotation:5,x:62.2,y:59.5},0).wait(1).to({rotation:2.3,x:58.2,y:59.3},0).wait(1).to({rotation:-0.5,x:54.1,y:59.2},0).wait(1).to({rotation:-3.2,x:50.1,y:59.4},0).wait(1).to({rotation:-2.1,x:51.6,y:59.3},0).wait(1).to({rotation:-1.1,x:53.2,y:59.2},0).wait(1));

	// pin
	this.instance_1 = new lib.pin("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.7,97.5,0.813,0.813,0,0,0,37.1,211.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:36.2,regY:106.3,rotation:-1.3,x:67,y:12},0).wait(1).to({rotation:-2.7,x:65,y:12.1},0).wait(1).to({rotation:-4,x:63,y:12.2},0).wait(1).to({rotation:-2.1,x:65.8,y:12},0).wait(1).to({rotation:-0.2,x:68.7},0).wait(1).to({rotation:1.7,x:71.4},0).wait(1).to({rotation:1.1,x:70.7,y:11.9},0).wait(1).to({rotation:0.6,x:69.8,y:12},0).wait(1));

	// pin
	this.instance_2 = new lib.pin("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(84.9,58.4,0.813,0.813,0,0,0,39,208.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:36.2,regY:106.3,rotation:-0.4,x:82,y:-25},0).wait(1).to({rotation:-0.9,x:81.4,y:-24.9},0).wait(1).to({rotation:-1.3,x:80.7},0).wait(1).to({rotation:0.1,x:82.8,y:-25},0).wait(1).to({rotation:1.5,x:84.9},0).wait(1).to({rotation:3,x:87},0).wait(1).to({rotation:2,x:85.5},0).wait(1).to({rotation:1,x:84.1},0).wait(1));

	// pin
	this.instance_3 = new lib.pin("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(98.3,26.8,0.813,0.813,0,0,0,38,210.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:36.2,regY:106.3,rotation:1.4,x:98.9,y:-57.8},0).wait(1).to({rotation:2.8,x:101,y:-57.7},0).wait(1).to({rotation:4.2,x:103,y:-57.6},0).wait(1).to({rotation:1.7,x:99.3,y:-57.7},0).wait(1).to({rotation:-0.9,x:95.5},0).wait(1).to({rotation:-3.4,x:91.8,y:-57.5},0).wait(1).to({rotation:-2.3,x:93.5,y:-57.6},0).wait(1).to({rotation:-1.1,x:95.2,y:-57.7},0).wait(1));

	// pin
	this.instance_4 = new lib.pin("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.8,111.8,0.813,0.813,0,0,0,35,211.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:36.2,regY:106.3,rotation:-1.7,x:-2.3,y:26.5},0).wait(1).to({rotation:-3.3,x:-4.7,y:26.6},0).wait(1).to({rotation:-5,x:-7.2,y:26.7},0).wait(1).to({rotation:-2.9,x:-4.1,y:26.5},0).wait(1).to({rotation:-0.9,x:-1.1},0).wait(1).to({rotation:1.1,x:1.9},0).wait(1).to({rotation:0.8,x:1.4},0).wait(1).to({rotation:0.4,x:0.8},0).wait(1));

	// pin
	this.instance_5 = new lib.pin("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(13.2,76.9,0.813,0.813,0,0,0,34.2,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:36.2,regY:106.3,rotation:1.7,x:17.4,y:-8.1},0).wait(1).to({rotation:3.5,x:20.1,y:-8},0).wait(1).to({rotation:5.2,x:22.5,y:-7.7},0).wait(1).to({rotation:5.8,x:23.4,y:-7.6},0).wait(1).to({rotation:6.4,x:24.3,y:-7.5},0).wait(1).to({rotation:7,x:25.2,y:-7.4},0).wait(1).to({rotation:4.7,x:21.8,y:-7.8},0).wait(1).to({rotation:2.3,x:18.4,y:-8.1},0).wait(1));

	// pin
	this.instance_6 = new lib.pin("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(28.1,41.6,0.813,0.813,0,0,0,34.5,210.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:36.2,regY:106.3,rotation:-1.3,x:27.6,y:-43.3},0).wait(1).to({rotation:-2.7,x:25.6,y:-43.2},0).wait(1).to({rotation:-4,x:23.6},0).wait(1).to({rotation:-4.5,x:22.9,y:-43.1},0).wait(1).to({rotation:-5,x:22.2},0).wait(1).to({rotation:-5.5,x:21.5,y:-43},0).wait(1).to({rotation:-3.6,x:24.1,y:-43.2},0).wait(1).to({rotation:-1.8,x:26.8,y:-43.3},0).wait(1));

	// pin
	this.instance_7 = new lib.pin("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-48.8,86.3,0.813,0.813,0,0,0,34.5,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:36.2,regY:106.3,rotation:-0.4,x:-47.9,y:1.8},0).wait(1).to({rotation:-0.7,x:-48.5},0).wait(1).to({rotation:-1.1,x:-49},0).wait(1).to({rotation:0,x:-47.4},0).wait(1).to({rotation:1.1,x:-45.8},0).wait(1).to({rotation:2.2,x:-44.2,y:1.9},0).wait(1).to({rotation:1.5,x:-45.2},0).wait(1).to({rotation:0.7,x:-46.3},0).wait(1));

	// pin
	this.instance_8 = new lib.pin("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-34.5,51.1,0.813,0.813,0,0,0,35.2,210.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:36.2,regY:106.3,rotation:1.2,x:-31.9,y:-33.6},0).wait(1).to({rotation:2.3,x:-30.2,y:-33.5},0).wait(1).to({rotation:3.5,x:-28.5,y:-33.4},0).wait(1).to({rotation:1.6,x:-31.3,y:-33.6},0).wait(1).to({rotation:-0.3,x:-34},0).wait(1).to({rotation:-2.2,x:-36.8},0).wait(1).to({rotation:-1.4,x:-35.8},0).wait(1).to({rotation:-0.7,x:-34.6},0).wait(1));

	// pin
	this.instance_9 = new lib.pin("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-97.9,51.6,0.813,0.813,0,0,0,34.2,211.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:36.2,regY:106.3,rotation:-1.2,x:-98.1,y:-33.7},0).wait(1).to({rotation:-2.5,x:-100,y:-33.6},0).wait(1).to({rotation:-3.7,x:-101.8,y:-33.5},0).wait(1).to({rotation:-1.7,x:-98.9,y:-33.6},0).wait(1).to({rotation:0.2,x:-95.9},0).wait(1).to({rotation:2.2,x:-93,y:-33.5},0).wait(1).to({rotation:1.5,x:-94.1,y:-33.6},0).wait(1).to({rotation:0.7,x:-95.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.7,-146.2,256.1,293.8);


(lib.bowlingPinsfallDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// topple pin
	this.instance = new lib.pin("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(55.3,144.6,0.813,0.813,-1,0,0,36.6,209.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:36.2,regY:106.3,rotation:-1.1,x:53.4,y:60.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-6.5,x:45.4,y:61.1},0).wait(1).to({rotation:-2,x:51.9,y:60.6},0).wait(1).to({rotation:2.4,x:58.5},0).wait(1).to({rotation:31.4,x:98.8,y:72.7},0).wait(1).to({rotation:60.4,x:128.4,y:102.8},0).wait(1).to({rotation:89.4,x:139.4,y:143.5},0).wait(1));

	// pin
	this.instance_1 = new lib.pin("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.7,97.5,0.813,0.813,0.5,0,0,37.1,211.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:36.2,regY:106.3,rotation:0.6,x:69.8,y:12.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// pin
	this.instance_2 = new lib.pin("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(84.9,58.4,0.813,0.813,0.8,0,0,38.5,208.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:36.2,regY:106.3,rotation:1,x:84.5,y:-24.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// pin
	this.instance_3 = new lib.pin("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(98.2,26.9,0.813,0.813,-1,0,0,37.9,209.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:36.2,regY:106.3,rotation:-1.1,x:95.2,y:-57.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// pin
	this.instance_4 = new lib.pin("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.8,111.9,0.813,0.813,0.3,0,0,34.3,210.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:36.2,regY:106.3,rotation:0.4,x:1.4,y:27.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// pin
	this.instance_5 = new lib.pin("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(13.2,76.9,0.813,0.813,2.3,0,0,33,210.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:36.2,regY:106.3,x:19.2,y:-7.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// pin
	this.instance_6 = new lib.pin("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(28.1,41.6,0.813,0.813,-1.8,0,0,34.1,209.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:36.2,regY:106.3,x:27.2,y:-42.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// pin
	this.instance_7 = new lib.pin("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-48.8,86.2,0.813,0.813,0.6,0,0,33.5,209.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:36.2,regY:106.3,rotation:0.7,x:-45.5,y:2.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// pin
	this.instance_8 = new lib.pin("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-34.4,51.1,0.813,0.813,-0.6,0,0,34.4,210.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:36.2,regY:106.3,rotation:-0.7,x:-34,y:-33.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// pin
	this.instance_9 = new lib.pin("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-97.9,51.5,0.813,0.813,0.6,0,0,33.3,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:36.2,regY:106.3,rotation:0.7,x:-94.4,y:-32.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.2,-145.5,253.4,294.5);


(lib.tric_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stars
	this.instance = new lib.stars_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(765.4,332.8,0.551,0.551,0,0,0,-59.4,-36.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(173).to({_off:false},0).to({alpha:1,startPosition:7},7).wait(96));

	// tric
	this.instance_1 = new lib.tric_mc_walk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(2378.4,493.3,0.694,0.694,0,0,0,895.2,477.4);

	this.instance_2 = new lib.tric_mc_charge("synched",1,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1282.1,493.3,0.694,0.694,0,0,0,895.2,477.4);
	this.instance_2._off = true;

	this.instance_3 = new lib.tric_mc_dizzy("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1014.2,524.2,0.694,0.694,1.8,0,0,895.1,477.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:1037.2,regY:514.2,x:2461.5,y:518.8,startPosition:1},0).wait(1).to({x:2446,startPosition:2},0).wait(1).to({x:2430.6,startPosition:3},0).wait(1).to({x:2415.1,startPosition:4},0).wait(1).to({x:2399.7,startPosition:5},0).wait(1).to({x:2384.3,startPosition:6},0).wait(1).to({x:2368.8,startPosition:7},0).wait(1).to({x:2341.4,startPosition:8},0).wait(1).to({x:2313.9,startPosition:9},0).wait(1).to({x:2286.5,startPosition:10},0).wait(1).to({x:2259,startPosition:11},0).wait(1).to({x:2231.5,startPosition:12},0).wait(1).to({x:2204.1,startPosition:13},0).wait(1).to({x:2176.7,startPosition:14},0).wait(1).to({x:2149.2,startPosition:15},0).wait(1).to({x:2121.7,startPosition:16},0).wait(1).to({x:2094.2,startPosition:17},0).wait(1).to({x:2066.8,startPosition:18},0).wait(1).to({x:2045.9,startPosition:19},0).wait(1).to({x:2024.9,startPosition:20},0).wait(1).to({x:2004,startPosition:21},0).wait(1).to({x:1983.1,startPosition:0},0).wait(1).to({x:1962.2,startPosition:1},0).wait(1).to({x:1941.2,startPosition:2},0).wait(1).to({x:1920.3,startPosition:3},0).wait(1).to({x:1899.4,startPosition:4},0).wait(1).to({x:1878.5,startPosition:5},0).wait(1).to({x:1857.5,startPosition:6},0).wait(1).to({x:1836.6,startPosition:7},0).wait(1).to({x:1815.7,startPosition:8},0).wait(1).to({x:1794.7,startPosition:9},0).wait(1).to({x:1768.7,startPosition:10},0).wait(1).to({x:1742.7,startPosition:11},0).wait(1).to({x:1716.7,startPosition:12},0).wait(1).to({x:1690.7,startPosition:13},0).wait(1).to({x:1664.7,startPosition:14},0).wait(1).to({x:1638.7,startPosition:15},0).wait(1).to({x:1612.7,startPosition:16},0).wait(1).to({x:1586.7,startPosition:17},0).wait(1).to({x:1560.6,startPosition:18},0).wait(1).to({x:1534.6,startPosition:19},0).wait(1).to({x:1519.2,startPosition:20},0).wait(1).to({x:1503.8,startPosition:21},0).wait(1).to({x:1488.4,startPosition:0},0).wait(1).to({x:1473,startPosition:1},0).wait(1).to({x:1457.6,startPosition:2},0).wait(1).to({x:1442.2,startPosition:3},0).wait(1).to({x:1426.8,startPosition:4},0).wait(1).to({x:1411.4,startPosition:5},0).wait(1).to({x:1396,startPosition:6},0).wait(1).to({x:1380.6,startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).to({_off:true},1).wait(188));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({_off:false},0).wait(1).to({regX:902.3,regY:478.4,x:1287,y:494,startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({x:1225.1,y:496.4,startPosition:78},0).wait(1).to({x:1163.2,y:498.9,startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({rotation:0.5,x:1091.1,startPosition:83},0).wait(1).to({rotation:1,x:1019.1,y:499,startPosition:84},0).wait(1).to({rotation:1.5,y:512,startPosition:85},0).wait(1).to({rotation:2,y:525,startPosition:86},0).to({_off:true},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(174).to({_off:false},0).wait(1).to({regX:1228.8,regY:517.2,rotation:2,x:1244.7,y:559.7,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1));

	// pins
	this.instance_4 = new lib.bowlingPinswiggle_mc("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-265.6,590.6,1,1,0,0,0,0,-0.7);
	this.instance_4._off = true;

	this.instance_5 = new lib.bowlingPinsfallDown("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(446.5,590.6,1,1,0,0,0,0,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},62).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5,p:{mode:"single",loop:undefined}}]},19).to({state:[{t:this.instance_5,p:{mode:"synched",loop:false}}]},17).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).wait(1).to({regX:1,regY:1.1,x:-241.6,y:592.4},0).wait(1).to({x:-218.7},0).wait(1).to({x:-195.7},0).wait(1).to({x:-172.7},0).wait(1).to({x:-149.7},0).wait(1).to({x:-126.8},0).wait(1).to({x:-103.8},0).wait(1).to({x:-80.8},0).wait(1).to({x:-57.8},0).wait(1).to({x:-34.9},0).wait(1).to({x:-11.9},0).wait(1).to({x:11},0).wait(1).to({x:34},0).wait(1).to({x:57},0).wait(1).to({x:79.9},0).wait(1).to({x:102.9},0).wait(1).to({x:125.9},0).wait(1).to({x:148.9},0).wait(1).to({x:171.8},0).wait(1).to({x:194.8},0).wait(1).to({x:217.8},0).wait(1).to({x:240.7},0).wait(1).to({x:263.7},0).wait(1).to({x:286.7},0).wait(1).to({x:309.7},0).wait(1).to({x:332.6},0).wait(1).to({x:355.6},0).wait(1).to({x:378.6},0).wait(1).to({x:401.6},0).wait(1).to({x:424.5},0).wait(1).to({x:447.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:-0.7,x:446.5,y:590.6,mode:"synched"},0).to({_off:true},19).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1956.3,306.5,1043.2,433.1);


// stage content:



(lib._20161004_CHOP_DiggingUpDinos_EndAnimations_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// tric
	this.instance = new lib.tric_MC("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1301.2,581.5,1,1,0,0,0,1303,580.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},263).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(950.9,345.8,3006.8,1314.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;