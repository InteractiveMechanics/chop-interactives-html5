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



(lib.trex_skulltop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AGiitQAEABAKADQAFACAEgHQAGgJAAgSQABgUgHgNQgGgMg3gYQgsgUgVgGQgggJgKgCQgfgHgKAFQgEABgQgSQgQgTgFABQgEABgCAXQgCAWgGAAQgcgBgRABQgfACgQAOQglAiglAKQgMAEgTAaQgYAggFAEQgSAQgaAZQggAegEAIQgEAHgGACQgKACgIACQgLADgBAEQgBACAAAMQAAAIgJABQgTACgJADQgPAEAAABIgBAGQgHALgCACQgEAEgNACQgKABgCACQgDADgDABQgFABgFAHQgHAJgGAEQgHAEgGgBQgFgDgDAAQAAAAgHAOQgGAOgKABQgKACgEAIQgDAFgDALQgDAFgbAXQgPAMgYATQgMALgTAWQgSAXgLAQQgIANAKAlQAGATAKAbIAKAfQAIATAKgBQAEgBARACQALABAJgHQAJgHAYgBQAYgBAFgDQAIgEA8gTQAxgPAcgIQAagHAngPQAwgSAOgKQAogfAWgdQAIgOAggNQAXgJAWgFQALgDASgHQARgIAHgBQAHgBAVAKQAXAKAJAAQALAAALgHQANgJAIgFQAQgJAFgEQALgIANgNQALgNAIgCQAWgIABAAQASgIAGgCQABAAAVgEQACAAAmgGQAbgEAPgFQAfgLAAgXQAAgRgZgGQgHgBgPgOQgTgTgBAAQgFgEACgUQADgjAAgDQACgXAAgIQABgKgFgCQgBgBgBAAIgHAAIgPACQgCAAgDAAAgxhlQAMgLALgLQALgLAHAOQAEAIAEATQAFANgFAaQABACAMAPQAGAJAJAGQAJAGAHASQAFARAAALQAAAIgQASQgRATgQAJQgIAEgXAHQgRAFgFAHQgLANgaAHQgRAFgSgHQgXgIgEgaQgFgfAFgcQAGgeARgNQAigeAegpQAJgLAHgIgABohqQgJAIAHARQAEALALABQAMAAADAFQALAVACArQAAAbgigbQghgbgJgbQgBgCgDghQgEgegCgDQgPgOAAgWQAAgVAPgOQAOgPAVAAQAVAAAPAPQAPAOAAAVQAAAPgIANQgIAMgNAGQgCABgKAFgAmMCBQANgHAFgBQAGgCALACQAJABADAIQACAGgFAFQgDADgJAHQgIAHgEAIQgMAYAAABQgIAQAAAIQAAANAAADQgCAHgIACQgKADgJgDQgKgDgEgLQgEgLABgSQABgSAGgGQABAAAQgWQANgRAJgFgAjHCBQgKAAgHgEQgHgEAAgFQAAgGAHgEQAHgEAKAAQAKAAAHAEQAHAEAAAGQAAAFgHAEQgHAEgKAAgAFAiaIgYAJQgeALAAAIQAAAWAjARQANAHAdAHQAgAIACABQAIAEACAKQABAGAAARQAAALgOAHQgIADgRAGQgIAEgQACQgSABgLABQgOACgFgDQgDgBgIgIQgHgIgPg1QgOgzAAgMQgDgcgCgVQgEgpAEgJQAEgLACgDQACgEALgFQAKgEAPACQAJABAQAEQAQACAPAIQATAKADAMQADAMgEAGQgBACgKAKQgKALhGATQgMADAEAFQAEAEAPACQALABAhgMgAFgilIgSAGIgOAFAFxioIgRADQAIgCAIgBgAGKisIgEAAQgBAAAAAAQgLADgJAB");
	this.shape.setTransform(109.1,77.3,2.237,2.237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AmgFZIgVgBQgKABgIgTIgKgfIgQguQgKglAIgNQALgQASgXQATgWAMgLIAngfQAbgXADgFIAGgQQAEgIAKgCQAKgBAGgOIAHgOQADAAAFADQAGABAHgEQAGgEAHgJQAFgHAFgBQADgBADgDQACgCAKgBQANgCAEgEIAJgNIABgGIAPgFQAJgDATgCQAJgBAAgIQAAgMABgCQABgEALgDIASgEQAGgCAEgHQAEgIAggeQAagZASgQQAFgEAYggQATgaAMgEQAlgKAlgiQAQgOAfgCQARgBAcABQAGAAACgWQACgXAEgBQAFgBAQATQAQASAEgBQAKgFAfAHIAqALQAVAGAsAUQA3AYAGAMQAHANgBAUQAAASgGAJQgEAHgFgCIgOgEIgCgBIgHAAIgPACIgEAAIgBAAQgLADgJABQAJgBALgDIAFAAIAPgCIAHAAIACABQAFACgBAKIgCAfIgDAmQgCAUAFAEIAUATQAPAOAHABQAZAGAAARQAAAXgfALQgPAFgbAEIgoAGIgWAEQgGACgSAIIgXAIQgIACgLANQgNANgLAIIgVANIgVAOQgLAHgLAAQgJAAgXgKQgVgKgHABQgHABgRAIQgSAHgLADQgWAFgXAJQggANgIAOQgWAdgoAfQgOAKgwASQgnAPgaAHIhNAXQg8ATgIAEQgFADgYABQgYABgJAHQgIAGgJAAIgDAAgAl6B5QgFABgNAHQgJAFgNARIgRAWQgGAGgBASQgBASAEALQAEALAKADQAJADAKgDQAIgCACgHIAAgQQAAgIAIgQIAMgZQAEgIAIgHIAMgKQAFgFgCgGQgDgIgJgBIgKgBIgHABgAjYBqQgHAEAAAGQAAAFAHAEQAHAEAKAAQAKAAAHgEQAHgEAAgFQAAgGgHgEQgHgEgKAAQgKAAgHAEgAgah7IgXAWIgQATQgeApgiAeQgRANgGAeQgFAcAFAfQAEAaAXAIQASAHARgFQAagHALgNQAFgHARgFQAXgHAIgEQAQgJARgTQAQgSAAgIQAAgLgFgRQgHgSgJgGQgJgGgGgJIgNgRQAFgagFgNQgEgTgEgIQgEgIgFAAQgEAAgFAFgAA7jBQgPAOAAAVQAAAWAPAOQACADAEAeIAEAjQAJAbAhAbQAiAbAAgbQgCgrgLgVQgDgFgMAAQgLgBgEgLQgHgRAJgIIAMgGQANgGAIgMQAIgNAAgPQAAgVgPgOQgPgPgVAAQgVAAgOAPgAD0j4QgLAFgCAEIgGAOQgEAJAEApIAFAxQAAAMAOAzQAPA1AHAIQAIAIADABQAFADAOgCIAdgCQAQgCAIgEIAZgJQAOgHAAgLQAAgRgBgGQgCgKgIgEIgigJQgdgHgNgHQgjgRAAgWQAAgIAegLIAYgJIgKAEQghAMgLgBQgPgCgEgEQgEgFAMgDQBGgTAKgLIALgMQAEgGgDgMQgDgMgTgKQgPgIgQgCIgZgFIgKgBQgIAAgHADgAFOifIASgGgAFgilIARgDIgBAAQgIABgIACgAFgilIAAAAgAFwioIABAAIgRADQAIgCAIgBgAFxiogAGFisIAAAAgAGGisIAEAAIgFAAIABAAg");
	this.shape_1.setTransform(109.1,77.3,2.237,2.237);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAKgCQgMACgEAC");
	this.shape_2.setTransform(185.6,40.7,2.237,2.237);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgCAAIAFAA");
	this.shape_3.setTransform(201.5,38,2.237,2.237);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgTADQAGgCANgBQAAAAAAAAIAFAAQgDAAgCAA");
	this.shape_4.setTransform(196.3,38.6,2.237,2.237);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgGAAIANAA");
	this.shape_5.setTransform(199.1,38.2,2.237,2.237);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgOABIAOgBIAAAAQgHAAgHABg");
	this.shape_6.setTransform(191.6,39.7,2.237,2.237);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgpAqQAPAUAHAGQAWAUASgBQAIgBgCgDQAAgBgOgQQgLgNgDgOQgEgPAFgHQAEgEACAHQACAKAFACQABAAAPAGQAIADAHAAQAFAAgDgBQgHgEgBgHQAAgCgGgSQgDgJAJAFQAHAGARANQAPALAEgCQAEgBgDgHQgGgKgDgHQgEgIAEAAQACAAAIAIQAFAEAKAMQAKAKAJAAQANABANAAQgOgGgIgTQgEgJgIgFQgFgFACgEQACgGAGADQAEACAMAJQALAFADAAQACAAALAAQAPgBgBgCQgHgFgKgJQgUgVADgCQAAgDAAgBQABgBALAFQAMAFATADQASADADgCQACgBgFgCQgLgFgIgFQgJgGgEgHQgDgHAEgEQACgFACgBQACgCAIAIQAKALADABQADACAFgCQADgBgEgFQgGgIABgFQAAgEgFgMQgDgJAFADQABAAAOAKQAJAGAEgCQAFgCgFgPQgEgQgKgKImrC5QADADAPAUQAQAUAKADQAJADAKAHQAKAHADABQAFABgPgZQgRgcgDgFQgCgFAWAcQAaAfALADQAJACALADQAGABgEgGQgDgEgKgKQgKgIgEgIQgIgQgDgIQgHgOAEgCQADgBAFAIQAIANAIAIQAGAGAGAIQAGAGAGAEQAHAFAMABQALABgMgKQgFgFgBgBQgCgGgEgJQgKgTgDgIQgFgNAFAAQAFgBALAYQAMAZAGADQAFACALAHQAMAGAKABQAKABABgBQACgDgNgNQgMgNgJgTQgHgQgBgLQAAgEALANg");
	this.shape_7.setTransform(65.1,136.8,2.237,2.237);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF3BB").s().p("AhiCAIgUgGQgLgCgbgfQgWgcADAEIAUAhQAOAagFgCIgNgIQgKgHgJgCQgKgDgQgUIgRgXIGqi6QAKAKAFAQQAEAQgFACQgEABgJgGIgOgKQgFgCADAIQAFANgBAEQAAAFAFAHQAEAGgDABQgFACgDgCIgNgMQgIgIgCABQgBABgDAGQgDADADAHQADAIAJAFQAIAGALAEQAGACgDACQgDACgSgDQgTgDgMgGQgLgEAAABIgBADQgDADAVAUIARAPQABABgQACIgMAAQgEAAgKgGIgRgKQgFgDgCAFQgCAFAFAEQAIAGAEAJQAIASAOAHIgbgBQgIgBgKgKIgPgQQgIgHgDAAQgDAAADAHIAJARQAEAHgFACQgEABgOgLIgZgSQgIgFADAIIAGAVQABAHAHADQABABAAAAQAAAAAAAAQgBAAAAABQgBAAgBAAQgHAAgJgEIgPgGQgGgBgCgLQgBgHgDAFQgHAGAFAPQACAPAMANIAOAQQACAEgIAAQgTABgWgUQgHgGgPgTQgKgOAAAEQAAALAIARQAIATANANQAMAMgCADQgBABgJgBQgLgBgLgGIgQgIQgGgDgMgaQgLgXgFAAQgGABAFANIANAaIAHAPIAGAGQAMALgMgBQgLgBgIgGQgGgEgFgGIgNgOQgHgIgJgNQgEgHgDABQgEABAGAOIAMAYQAEAIAJAJQALAJACAEQAEAGgEAAIgBAAg");
	this.shape_8.setTransform(65.5,136.9,2.237,2.237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,220.3,167.6);


(lib.trex_skullbtm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgDIAAAH");
	this.shape.setTransform(116.2,67.7,2.237,2.237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ADmlyQgIACgNAKQgOAMgFABQgFADgWAEQgWAEgKAFQgQAIhUA2QgUANgPAnQgJAVgKAbQgJANgXAuQgZAxgHAVQgHATADAbQACAQAFAbQADAQgIAbQgBACgOAoQgGAPgTAZQgLANgSAVQgKANggAcQggAdgHACQgEACgYAYQgaAagKAHQgUANgHAlQgCAJADAEQAFAFAQgDQALgBBBACQA+ACAJgDQALgDAKgLQAGgGALgQQCljXAIgOQAGgIAUgNQAjgXABgBQARgMAWgdQAbgmAHgHQALgKARgdQATggAIgKQAMgPAGgpQAFgwADgSQACgOABgdQABgTAEgMQAFgOAGgIQAEgEALgJQAFgDAMgFQAJgEAEgFQAEgGgGgUQgGgUgGgGQgGgGgJgEQgKgFgGADQgFACgNgMQgPgNgDgBQgHgBgEAEQgEAGgDAPIgBANIADgBQAPgBAKAFQAMAHgIAOQgFAIgJAHQgFADgNAHIgGADQAFgCgDAPQgDANgGALQgKASgHgGQgIgKgFgCQgHgCAGgFQAMgKAJgJQAIgGAJgFIgCABgAChhsQABgEAFgBQAGgBAGAGQAGAGACAXQACAXgGAOQgHAOgUANQgUANgDgOQgEgNANgQQAYgcgFgbQAAgCgBgBQAAgDABgCg");
	this.shape_1.setTransform(80.3,91.4,2.237,2.237);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF3BB").s().p("AjoGXQhBgCgLABQgQADgFgFQgDgEACgJQAHglAUgNQAKgHAagaQAYgYAEgCQAHgCAggdQAggcAKgNIAdgiQATgZAGgPIAPgqQAIgbgDgQIgHgrQgDgbAHgTQAHgVAZgxQAXguAJgNIATgwQAPgnAUgNQBUg2AQgIQAKgFAWgEQAWgEAFgDQAFgBAOgMQANgKAIgCIgIA1IACgBQgJAFgIAGIgVATQgGAFAHACQAFACAIAKQAHAGAKgSQAGgLADgNQADgPgFACIAGgDIASgKQAJgHAFgIQAIgOgMgHQgKgFgPABIgDABIABgNQADgPAEgGQAEgEAHABQADABAPANQANAMAFgCQAGgDAKAFQAJAEAGAGQAGAGAGAUQAGAUgEAGQgEAFgJAEQgMAFgFADQgLAJgEAEQgGAIgFAOQgEAMgBATQgBAdgCAOIgIBCQgGApgMAPQgIAKgTAgQgRAdgLAKQgHAHgbAmQgWAdgRAMIgkAYQgUANgGAIQgIAOilDXQgLAQgGAGQgKALgLADQgGACgYAAIgpgBgAChhkQAFAbgYAcQgNAQAEANQADAOAUgNQAUgNAHgOQAGgOgCgXQgCgXgGgGQgGgGgGABQgFABgBAEIAAAIIgBgDIAAgBIABgEIgBAEIAAABIABADIAAAAgAChhkIAAAAg");
	this.shape_2.setTransform(80.3,91.4,2.237,2.237);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgZAXQgEgHgCgKQgBgGACgfQACACATAaQANASAMgDQAAgRABgCQADgIANAIQgJgUgDgJQgGgQABgRQAHAGAOAMQAMALAKAGQgKgOgEgKQgEgLABgPQAGADALAKQALAJAIADQgIgVgDgLQgGgUACgOQAEAFAJAMQAJALAHAEQAEgHgHgRQgHgRAHgKQAHAAAOALQABgFgDgIQgDgLgBgDQABABAYAGQAYAIAAAHIgSAfQgTAjgEASQgFAThtBlQg3Azg2AvQgMgEgPgPQgQgRACgLQAKAMAJACQgIgPgCgJQgDgNAHgLQAMAVAfAPQgoggABgiQAIAFAUAOQARAMALAFQgNgPgFgJQgJgPACgOQAGADAKAIQALAJAFACQAKAFAUAHQgPgbgGgOQgMgaAEgSQALAFATASQAJAJAHAGQAJAIAGAD");
	this.shape_3.setTransform(34.4,139.9,2.237,2.237);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF3BB").s().p("AiKCPQgQgRACgKQAKALAJACQgIgPgCgIQgDgOAHgLQAMAVAfAPQgoggABghQAIAEAUAOQARANALAEQgNgPgFgJQgJgOACgOQAGACAKAIQALAJAFACQAKAGAUAGQgPgbgGgOQgMgZAEgTQALAGATARIAQAPQAJAIAGAEQgGgEgJgIQgEgGgCgKQgBgHACgfQACACATAaQANASAMgDQAAgRABgBQADgJANAJIgMgeQgGgQABgRIAVATQAMAKAKAGQgKgOgEgKQgEgLABgPQAGADALAKQALAKAIACIgLgfQgGgVACgOIANASQAJAKAHAEQAEgHgHgRQgHgRAHgKQAHAAAOAMQABgGgDgIIgEgNIAZAHQAYAHAAAHIgSAfQgTAjgEATQgFAShtBlQg3Azg2AvQgMgEgPgPg");
	this.shape_4.setTransform(34.4,140.3,2.237,2.237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,156.6,185.1);


(lib.trexbackLegupperR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhKnAQAWgBAEARQACALACAZQgBgXACgKQACgPAPgHQAUgKAiAXQAYARAJAbQAGASACAmQAYAFgRA5QgJAfgQAtQgFAjAGAsQAEAZgFAGQgMAIgMANQgUAWgFAwQgCAmACAqQADAXACA9QAFA3AVAXQAMAOAVAEQAMADAYABQAnAEAAAuQAAAPABAcQgCAXgKANQgHAKgTAOQgVAOgJAHQgdAXgkgJQgigJgVghQgHgLgFgbQgGgjgBgFQgJgfAAgxQAAgZgGgdQgIgigEgSQgFgZAAgLQAAgKADglQgIgcAAgkQAAgMAEg3QAEgygBgYQgBgdgEgSQgFgagMgQQgJgLgEgZQgCgcgBgMQgJg5ABgOQABgSAYgZQAGgGAMgMQAKgJAOgBg");
	this.shape.setTransform(0,0,2.237,2.237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AAJHFQgigJgVghQgHgLgFgbIgHgoQgJgfAAgxQAAgZgGgdIgMg0QgFgZAAgLQAAgKADglQgIgcAAgkQAAgMAEg3QAEgygBgYQgBgdgEgSQgFgagMgQQgJgLgEgZIgDgoQgJg5ABgOQABgSAYgZIASgSQAKgJAOgBQAWgBAEARQACALACAZQgBgXACgKQACgPAPgHQAUgKAiAXQAYARAJAbQAGASACAmQAYAFgRA5QgJAfgQAtQgFAjAGAsQAEAZgFAGQgMAIgMANQgUAWgFAwQgCAmACAqQADAXACA9QAFA3AVAXQAMAOAVAEQAMADAYABQAnAEAAAuIABArQgCAXgKANQgHAKgTAOIgeAVQgUAQgZAAQgKAAgKgCg");
	this.shape_1.setTransform(0,0,2.237,2.237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-103,65.7,206);


(lib.trexpelvis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AkmnJQBCgIA6AeQATAJAZAXQAeAaANAIQAQAKBEg6QBDg3AHAMQAIANAAgHQABgCAHAWQASA3AEAHQAHAJARAQQAUASAGABQAIAAAHAIQAHAHABAIQAAADAJAgQAIAgACAPQACAMADAZQAEATAGAHQAGAFBaA2QBcA2AJAHQAIAHBbA6QBWA7ABAHQABAIgGACQgCAAgOAAQgIAAhohFQhwhIgLgFQgGgDg1gfQgqgYgOgCQgNgChMAFQhPAGgLgBQgSgBgIgFQgGgEgGgMQgDgHgJgCQgCAAAHgFQAIgEAKgFQAGgEACgIQACgGgBgSQgCgVABgIQABgLADgDQAAAAAKgCQAFgBAHgCQADgCgFgKQgHgQg9gRQhEgTgbAUQgZASggBnQgmB5gFAKQgRAdgKA1QgKAvABAlQABArACAJQAFAUAVAMQAXAPAlAIQAlAJAegDQAOgBAnAMQAdAJAXgNQAfgQAMATQAKASgPATQgKAOgtAPQgwAOgPAGQgBAAg3APQgsAMgtAVQgwAXgnAFQgnADgQABQgBAAg7AOQgqAKgSgHQgNgEguAKQgoAIgLgOQgTgWgEgHQgGgNAJgSQAHgNA5gRQBBgTARgOQAagUAgguQAegsAQgmQAZg5AkhxQAtiLAAgtQAAgxgDgPQgEgUgRgKQgNgJgJgSQgOgegJgNQgcgrADgkQADgmAmgFg");
	this.shape.setTransform(0,55.1,2.237,2.237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("ApBHGQgTgWgEgHQgGgNAJgSQAHgNA5gRQBBgTARgOQAagUAgguQAegsAQgmQAZg5AkhxQAtiLAAgtQAAgxgDgPQgEgUgRgKQgNgJgJgSQgOgegJgNQgcgrADgkQADgmAmgFQBCgIA6AeQATAJAZAXQAeAaANAIQAQAKBEg6QBDg3AHAMQAIANAAgHQABgCAHAWQASA3AEAHQAHAJARAQQAUASAGABQAIAAAHAIQAHAHABAIIAJAjQAIAgACAPIAFAlQAEATAGAHQAGAFBaA2QBcA2AJAHQAIAHBbA6QBWA7ABAHQABAIgGACIgQAAQgIAAhohFQhwhIgLgFIg7giQgqgYgOgCQgNgChMAFQhPAGgLgBQgSgBgIgFQgGgEgGgMQgDgHgJgCQgCAAAHgFIASgJQAGgEACgIQACgGgBgSQgCgVABgIQABgLADgDIAKgCIAMgDQADgCgFgKQgHgQg9gRQhEgTgbAUQgZASggBnQgmB5gFAKQgRAdgKA1QgKAvABAlQABArACAJQAFAUAVAMQAXAPAlAIQAlAJAegDQAOgBAnAMQAdAJAXgNQAfgQAMATQAKASgPATQgKAOgtAPIg/AUIg4APQgsAMgtAVQgwAXgnAFIg3AEIg8AOQgqAKgSgHQgNgEguAKQgPADgKAAQgTAAgHgJg");
	this.shape_1.setTransform(0,55.1,2.237,2.237);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AmbkLQAegWALADQAMADArgEQAqgDAKgEQAGgDAYACQAaACAGgBQAHgCAaAFQAeAFAIAAQAOgBAnAAQAnAAASABQAUAAA0AJQA6AKAZALQAkAPB3A+QAPAIBYAnQBTAmAMAIQAPALAOARQAPARACAKQAGAYAAABQACANgIAKQgKAOgCAEQgEAHADAKIAIAPQADAGgGAKQgRAagcAAQgLAAhFgQQhEgRgHAAQgFAAACACQADACgQAGQgLAFgPALQgJAIgNgBQgFgBhMgIQgXgCgKAEQgIAGgFABQgZAEAEARQAKAsgIAUQgFAQgEAFQgFAJgOgBQgDAAgUgEQgKgCgKAGQgEADgdAkQgXAggQADQgQADgwgjQg4gogGgCQgPgGhAgHQg0gGgUAAQgLgBgCgRQgDgQAFgDQAEgCAJgMQAKgMAFgLQABgDAPgdQAMgWABgJQAEgPAAgIQABgPgIgKQgBgBgTgZQgMgRgNgHQgQgHgbAHQgZAHgPAOQgPAKgEAEQgGAEgBALQAAAEAEAPQACAHgLAEQgQAFgfgCQghgDgKgLQghglADhGQABgXAAgJQACgPAHgKQAFgHgBgCQgBAAAHgGQAJgHAcACQAaABADgDQAKgRgCgOQgJgvAKgLQAJgMAZgSg");
	this.shape_2.setTransform(-1.7,-92.2,2.237,2.237);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AhbEJQg4gogGgCQgPgGhAgHQg0gGgUAAQgLgBgCgRQgDgQAFgDQAEgCAJgMQAKgMAFgLIAQggQAMgWABgJQAEgPAAgIQABgPgIgKIgUgaQgMgRgNgHQgQgHgbAHQgZAHgPAOIgTAOQgGAEgBALQAAAEAEAPQACAHgLAEQgQAFgfgCQghgDgKgLQghglADhGIABggQACgPAHgKQAFgHgBgCIAGgGQAJgHAcACQAaABADgDQAKgRgCgOQgJgvAKgLQAJgMAZgSQAegWALADQAMADArgEQAqgDAKgEQAGgDAYACQAaACAGgBQAHgCAaAFQAeAFAIAAIA1gBIA5ABQAUAAA0AJQA6AKAZALQAkAPB3A+IBnAvQBTAmAMAIQAPALAOARQAPARACAKIAGAZQACANgIAKQgKAOgCAEQgEAHADAKIAIAPQADAGgGAKQgRAagcAAQgLAAhFgQQhEgRgHAAQgBAAgBAAQgBAAAAAAQAAABAAAAQAAAAAAABQADACgQAGQgLAFgPALQgJAIgNgBIhRgJQgXgCgKAEQgIAGgFABQgZAEAEARQAKAsgIAUQgFAQgEAFQgFAJgOgBIgXgEQgKgCgKAGQgEADgdAkQgXAggQADIgDAAQgRAAgsggg");
	this.shape_3.setTransform(-1.7,-92.2,2.237,2.237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-159.7,272.1,319.5);


(lib.trex_tailend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgDAFQADAEABABQAHADACgKQACgPgMAGQgHAEACACAgDAFQgBgDgBgCIAAAAQABADABACg");
	this.shape.setTransform(129.9,81,2.234,2.234);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AAAAJQgCgBgDgEIgCgEQgCgDAJgEQAKgGgCAPQgBAIgFAAIgCgBgAgHAAIAAAAIACAEIgCgEg");
	this.shape_1.setTransform(130.4,81.3,2.234,2.234);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgOgBIAAACQAHACAOALQAMAGgFgSQgBgEgDgFQgEgHgFgBQgFAAAAAJQgBAGgFAAIABgBg");
	this.shape_2.setTransform(124.5,75.8,2.234,2.234);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AAHAOQgOgLgHgCIAAgCIAFAAIgBABQAFAAABgGQAAgJAFAAQAFABAEAHQADAFABAEQAEAOgGAAIgFgCg");
	this.shape_3.setTransform(124.5,75.8,2.234,2.234);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgJgFQAAABADAFQABAEADADQADAFAFgBQAFgBAAgJQgBgIgJgEQgDgCgEABQgFABACAFg");
	this.shape_4.setTransform(135.4,86.6,2.234,2.234);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgCAIQgDgDgBgEIgDgGIAAgBQgCgEAFgBQAEgBADACQAJAEABAIQAAAJgFABIgCAAQgEAAgCgEg");
	this.shape_5.setTransform(135.4,86.6,2.234,2.234);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAAEQgIAAgDAAQgGACAHAFQATAHAAgBQAJgCgGgPQgGgSgIACQgBAQADACg");
	this.shape_6.setTransform(118.8,69.6,2.234,2.234);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AgKALQgHgFAGgCIALAAIAAgCQgDgCABgQQAIgCAGASQAGAPgJACIAAAAIgTgGg");
	this.shape_7.setTransform(118.8,69.6,2.234,2.234);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgFAGQAAAAgBgBIAEABQgCABgBgBQAFAIAGAAQAIgBgBgLQgBgLgIgDQgFgDABAPQgEAAgIgBQgBADADADQACACADgBg");
	this.shape_8.setTransform(113.3,65.2,2.234,2.234);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AgFAGIABAAIAAAAIACAAIgEgBIABABQgDABgCgCQgDgDABgDQAIABAEAAQgBgPAFADQAIADABALQABALgIABQgGAAgFgIgAgFAGIgBgBIAEABIgCAAIAAAAIgBAAg");
	this.shape_9.setTransform(113.3,65.2,2.234,2.234);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAJAMQgHAAgEgCQgHgCgBgEQAFgEABgCQgCgHABgDQALAEAEAIQABADgBAGQgBACAAABgAAEAOQADAAACgC");
	this.shape_10.setTransform(108.6,60.5,2.234,2.234);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AAEANIAEgCQgGAAgEgBQgHgCgBgEIAGgGIgBgKQALADAEAJQABACgBAGQgCAFgDAAIgBAAg");
	this.shape_11.setTransform(108.6,60.6,2.234,2.234);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAQAYQAFgKAAgLQgBgLgJgIQgDgCgHgEQgGgEgDgDQgEgGgCgCQgEgFgCAHQgDAGAFAEQADACAGAEQAFAFgBAEQgBACgCAGQgBAIAJAEQALAFABAJIAEAAIABAAIgCACQAAgBABgBg");
	this.shape_12.setTransform(101.7,55.1,2.234,2.234);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AANAgQgBgJgMgFQgIgEABgKIACgGQABgEgEgFIgJgGQgFgEACgGQADgHAEAFIAGAIQADADAFAEIALAGQAIAIABALQABALgFAKg");
	this.shape_13.setTransform(101.5,53.3,2.234,2.234);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLgjQAHAAAIAKQAIAKACAJQACAGABAMQACAQgDADQgHAKgGgLQgEgNgBgBQgCgCgGgBQgFAAgBgDQgCgDAHgMIgBAFQAEgIgBgJQgCgPAAgDg");
	this.shape_14.setTransform(87,40.7,2.234,2.234);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AADAeIgFgOQgCgCgGgBQgFAAgBgDQgCgDAHgMIgBAFQAEgIgBgJIgCgSQAHAAAIAKQAIAKACAJQACAGABAMQACAQgDADQgDAFgEAAQgDAAgDgGg");
	this.shape_15.setTransform(87,40.7,2.234,2.234);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgKgWQgCAFgCAIQgCANAJAHQAGAEANAKQAGgFgGgQQgBgCgJgRQgHgSgFALg");
	this.shape_16.setTransform(95.2,50,2.234,2.234);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AgHAMQgJgHACgNQACgIACgFQAFgLAHASIAKATQAGAQgGAFIgTgOg");
	this.shape_17.setTransform(95.2,49.9,2.234,2.234);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgFgCQgBgBgEgQQgEgQABgDQACgIAGALQADAGACALQAKASADAKQACAIgCAPQgDAPgFgIQgBgCgBgGQgBgGgBgCQgBgDgBgBQgBgBgEAAQgGAAAAgHQAAgIAFgEg");
	this.shape_18.setTransform(78.9,34.4,2.234,2.234);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AAFAoIgCgIIgCgIQgBgDgBgBIgFgBQgGAAAAgHQAAgIAFgEIACgCIgFgRQgEgQABgDQACgIAGALIAFARQAKASADAKQACAIgCAPQgCAKgDAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_19.setTransform(78.9,34.4,2.234,2.234);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AABgQQAQAQADAJQADAIgDAMQgDAOgIgHQgBgCgCgFQgCgGgBgBQgDgEgBAAQgBgBgGAAQgJgBgBgGQAAgGAIgEIACgCQgCgBgFgOQgHgOACgDQADgHAJAKQAFAGAEAJg");
	this.shape_20.setTransform(69.1,27.3,2.234,2.234);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AAJAkIgDgHIgDgHQgDgEgBAAIgHgBQgJgBgBgGQAAgGAIgEIACgCIgHgPQgHgOACgDQADgHAJAKIAJAPQAQAQADAJQADAIgDAMQgCAJgEAAQgCAAgDgCg");
	this.shape_21.setTransform(69.1,27.3,2.234,2.234);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgIgCQgCAAgGgOQgHgOABgDQADgHAKAJQAFAGAEAJQAQAPAFAJQADAHgDANQgDAOgHgHQgCgBgCgFQgCgGgCgCQgCgDgBAAQgCgBgFAAQgKAAAAgGQgBgGAIgEg");
	this.shape_22.setTransform(59.1,18.7,2.234,2.234);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AALAjQgCgBgCgFIgEgIQgCgDgBAAIgHgBQgKAAAAgGQgBgGAIgEIACgDQgCAAgGgOQgHgOABgDQADgHAKAJIAJAPQAQAPAFAJQADAHgDANQgCAJgEAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBg");
	this.shape_23.setTransform(59.1,18.7,2.234,2.234);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAAVQgCgBgFAAQgKAAAAgHQgBgHAIgFIACgDQgCgBgGgQQgHgQACgEQADgIAJAMQAFAGAEAKQAQATAFAKQADAIgDAPQgDAQgHgIQgCgBgCgGQgCgHgBgCQgDgDgBgBg");
	this.shape_24.setTransform(48.9,10.9,2.234,2.234);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("AALApIgEgHIgDgJQgDgDgBgBIgHgBQgKAAAAgHQgBgHAIgFIACgDQgCgBgGgQQgHgQACgEQADgIAJAMIAJAQQAQATAFAKQADAIgDAPQgCAKgEAAQgCAAgCgCg");
	this.shape_25.setTransform(48.9,10.9,2.234,2.234);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMgkQAGAGAHALQAUASAGALQAEAJgEAOQgDAQgKgIQgCgBgDgHQgCgGgCgCQgEgEgCAAQgBgBgIAAQgMAAAAgHQgBgIALgEIACgDQgCgBgIgQQgJgQACgEQAEgIALALg");
	this.shape_26.setTransform(37,2.4,2.234,2.234);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF3BB").s().p("AAOApQgCgBgDgHQgCgGgCgCQgEgEgCAAIgJgBQgMAAAAgHQgBgIALgEIACgDQgCgBgIgQQgJgQACgEQAEgIALALIANARQAUASAGALQAEAJgEAOQgCALgGAAQgCAAgDgDg");
	this.shape_27.setTransform(37,2.4,2.234,2.234);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgNgDQgDgBgJgSQgLgTACgEQAFgKAOAOQAIAHAIAMQAYAVAHAMQAFAKgEARQgEASgMgJQgDgCgDgHQgDgIgCgCQgFgEgCgBQgCAAgJAAQgOAAgBgJQgBgIANgFg");
	this.shape_28.setTransform(23.6,-5.3,2.234,2.234);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF3BB").s().p("AARAvQgDgCgDgHQgDgIgCgCQgFgEgCgBIgLAAQgOAAgBgJQgBgIANgFIACgEQgDgBgJgSQgLgTACgEQAFgKAOAOQAIAHAIAMQAYAVAHAMQAFAKgEARQgDAMgGAAQgDAAgEgDg");
	this.shape_29.setTransform(23.6,-5.3,2.234,2.234);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgeAZQADABAJACQAGABAKAAQAGABADAFQAIAOADABQAEADAGgLQAHgKgBgLQgBgIgHgNQgGgJgDgDQgGgHgJADQgCgIgOgOQgRgPgCAEQgDAHAOAKQAPALAAAHIABABQgQAMgBAAQgIAGgCALQAAAHADACg");
	this.shape_30.setTransform(9.6,-14,2.234,2.234);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFF3BB").s().p("AASAyQgDgBgIgOQgDgFgGgBQgKAAgGgBIgMgDQgDgCAAgHQACgLAIgGIARgMIgBgBQAAgHgPgLQgOgKADgHQACgEARAPQAOAOACAIQAJgDAGAHIAJAMQAHANABAIQABALgHAKQgEAJgEAAIgCgBg");
	this.shape_31.setTransform(9.6,-14,2.234,2.234);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgjgxQgDAHANALQAPALABAHIABAAQgRALgCABQgKAGgBALQAAAHAEACQADABALACQAGACAMAAQAHABAEAGQAJANAEACQAFADAGgLQAHgKgBgKQgBgJgIgNQgIgJgDgEQgIgHgKADQgBgKgPgQQgQgRgEAJg");
	this.shape_32.setTransform(-6.3,-23.1,2.234,2.234);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFF3BB").s().p("AAWA0QgEgCgJgNQgEgGgHgBQgMAAgGgCIgOgDQgEgCAAgHQABgLAKgGIATgMIgBAAQgBgHgPgLQgNgLADgHQAEgJAQARQAPAQABAKQAKgDAIAHQADAEAIAJQAIANABAJQABAKgHAKQgFAJgEAAIgCgBg");
	this.shape_33.setTransform(-6.3,-23.1,2.234,2.234);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAVgNQgJgIgLADQgBgJgRgPQgRgPgGADQgFACAPANQASAPABAJIABAAQgTALgCABQgLAHgBALQAAAIAFACQADACAMACQABAAATACQAJACAEAFQALAPADACQAGADAIgLQAHgLgCgLQgBgKgJgNQgIgLgEgEg");
	this.shape_34.setTransform(-23.2,-31.8,2.234,2.234);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFF3BB").s().p("AAYA3QgDgCgLgPQgEgFgJgCIgUgCIgPgEQgFgCAAgIQABgLALgHIAVgMIgBAAQgBgJgSgPQgPgNAFgCQAGgDARAPQARAPABAJQALgDAJAIQAEAEAIALQAJANABAKQACALgHALQgGAJgFAAIgDgBg");
	this.shape_35.setTransform(-23.2,-31.8,2.234,2.234);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgKgSQgPASAAAAQgIAMABANQABAJAFABQADABALgBQAJABADACQABACAHAHQAKAMAKgCQAJgBAFgQQAFgOgEgMQgDgLgKgLQgKgMgDgDQgJgHgIAGQgEgKgRgOQgRgOgFAIQgEAGAQAKQASALACAJg");
	this.shape_36.setTransform(-41.3,-41.2,2.234,2.234);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFF3BB").s().p("AAIAvQgHgHgBgCQgDgCgJgBIgOAAQgFgBgBgJQgBgNAIgMIAPgSIgBAAQgCgJgSgLQgQgKAEgGQAFgIARAOQARAOAEAKQAIgGAJAHIANAPQAKALADALQAEAMgFAOQgFAQgJABIgCABQgJAAgJgLg");
	this.shape_37.setTransform(-41.3,-41.2,2.234,2.234);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Agwg6QACALANAVQACAEABAGQACAEgEACIgHAEQgCACgCALQgDANgBABQgCAEADAGQAEAGAGAAQAJgBANADQAOAEABAEQACACgBAFQgCADAGADQAIAEAHgCQAIgCADgGQAEgHACgKQADgMgCgEQgDgEAEgHQADgHAEAEQAGAEgFgFQgEgEgHgCQgHgCgCgCQgCgCgBgHQgBgHgBgDQgCgEgIAAQgHgBgEAFQgDAEgCABQgFABgCAAQgBgBgJgIQgHgGgDgJQgEgJgBgBQgGgGgDgDQgGgFACAHg");
	this.shape_38.setTransform(-57.6,-51.8,2.234,2.234);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFF3BB").s().p("AAGA8QgGgDACgDQABgFgCgCQgBgEgOgEQgNgDgJABQgGAAgEgGQgDgGACgEIAEgOQACgLACgCIAHgEQAEgCgCgEQgBgGgCgEQgNgVgCgLQgCgHAGAFIAJAJIAFAKQADAJAHAGIAKAJIAHgBQACgBADgEQAEgFAHABQAIAAACAEIACAKQABAHACACQACACAHACQAHACAEAEQAFAFgGgEQgEgEgDAHQgEAHADAEQACAEgDAMQgCAKgEAHQgDAGgIACIgFABQgFAAgFgDg");
	this.shape_39.setTransform(-57.6,-51.8,2.234,2.234);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgqgQQACAEgEADIgGAGQgCACgBAMQgBAPgBACQgCAEADAGQAEAGAHgBQAIgBAOACQAPABADAEQACACgBAGQgBAEAEADQAHADAIgDQAHgDADgHQADgJACgLQACgNgDgFQgDgEADgIQADgGAEACQAEACAMgCQAMgEAAgGQABgFgEAAQgDAAgIADQgIAFgDABQgGACgHgCQgIgCgCgDQgCgCgCgGQgBgJgBgCQgDgFgHABQgGAAgDAFQgFAGgCABQgFACgCAAQgBgBgKgIQgHgGgEgIQgEgJgCgCQgIgIgCgBQgGgFACAIQAFAPANATQADAEABAGg");
	this.shape_40.setTransform(-77,-59.7,2.234,2.234);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFF3BB").s().p("AABBAQgEgDABgEQABgGgCgCQgDgEgPgBQgOgCgIABQgHABgEgGQgDgGACgEQABgCABgPQABgMACgCIAGgGQAEgDgCgEQgBgGgDgEQgNgTgFgPQgCgIAGAFIAKAJIAGALQAEAIAHAGIALAJQACAAAFgCQACgBAFgGQADgFAGAAQAHgBADAFIACALQACAGACACQACADAIACQAHACAGgCIALgGQAIgDADAAQAEAAgBAFQAAAGgMAEQgMACgEgCQgEgCgDAGQgDAIADAEQADAFgCANQgCALgDAJQgDAHgHADIgHACQgEAAgEgCg");
	this.shape_41.setTransform(-77,-59.7,2.234,2.234);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABAgWQgCAAgIAEQgIAFgEACQgGACgHgBQgIgCgCgCQgCgCgDgHQgBgIgCgDQgCgEgJABQgFABgDAGQgEAGgCABQgFADgCgBQgBAAgLgHQgIgGgEgIQgGgJgBgBQgKgIgBgBQgGgEACAIQAEAKARAWQADAEACAGQACAEgEADIgGAGQgBACAAANQAAAPgBACQgBAEAEAGQAEAGAGgBQAJgCAOAAQAPABABADQACACAAAGQgBAFAHACQAIADAHgEQAHgEACgIQADgIABgMQABgNgDgEQgEgFADgHQACgHAEADQAFADAMgFQAMgGgBgFQAAgGgEABg");
	this.shape_42.setTransform(-100.2,-67.4,2.234,2.234);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFF3BB").s().p("AAJA+QgHgCABgFQAAgGgCgCQgBgDgPgBQgOAAgJACQgGABgEgGQgEgGABgEIABgRQAAgNABgCIAGgGQAEgDgCgEQgCgGgDgEQgRgWgEgKQgCgIAGAEIALAJIAHAKQAEAIAIAGQALAHABAAQACABAFgDQACgBAEgGQADgGAFgBQAJgBACAEIADALQADAHACACQACACAIACQAHABAGgCIAMgHQAIgEACAAQAEgBAAAGQABAFgMAGQgMAFgFgDQgEgDgCAHQgDAHAEAFQADAEgBANQgBAMgDAIQgCAIgHAEQgEACgEAAIgHgBg");
	this.shape_43.setTransform(-100.2,-67.4,2.234,2.234);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhFg/QAFAMASAYQAEAEACAGQACAFgDAEQgGAHAAABQgBABABAQQABASgBACQgBAFAEAHQAFAHAGgDQAJgDAOAAQANgBAEAEQADACgBAHQAAAFAGACQAJADAHgFQAHgFABgJQACgKAAgOQAAgPgDgFQgDgFACgHQACgKAEADQAEADAMgHQAMgHgBgGQAAgHgEABQgDAAgHAGQgIAGgEACQgFAEgIgCQgIgBgDgCQgCgCgDgIQgCgJgCgDQgCgFgJACQgFACgDAGQgDAIgDACQgFADgBgBQgBAAgLgHQgJgGgGgKQgFgKgCgBQgIgHgDgCQgHgEADAJg");
	this.shape_44.setTransform(-122,-73.6,2.234,2.234);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFF3BB").s().p("AAPBFQgGgCAAgFQABgHgDgCQgEgEgNABQgOAAgJADQgGADgFgHQgEgHABgFIAAgUQgBgQABgBIAGgIQADgEgCgFQgCgGgEgEQgSgYgFgMQgDgJAHAEIALAJIAHALQAGAKAJAGIAMAHQABABAFgDQADgCADgIQADgGAFgCQAJgCACAFQACADACAJQADAIACACQADACAIABQAIACAFgEIAMgIQAHgGADAAQAEgBAAAHQABAGgMAHQgMAHgEgDQgEgDgCAKQgCAHADAFQADAFAAAPQAAAOgCAKQgBAJgHAFQgEADgFAAIgHgBg");
	this.shape_45.setTransform(-122,-73.6,2.234,2.234);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgEAAQADAIAGgBQAEgHgJgFg");
	this.shape_46.setTransform(62.3,30.3,2.234,2.234);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFF3BB").s().p("AgFAAIAFgGQAIAGgEAHIAAAAQgGAAgDgHg");
	this.shape_47.setTransform(62.4,30.4,2.234,2.234);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgIgFQAAAIAIADQAGACADgEQACgEgHgBg");
	this.shape_48.setTransform(52.3,23.2,2.234,2.234);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFF3BB").s().p("AAAAGQgIgEAAgHIAMADQAHACgCADQgCADgEAAIgDAAg");
	this.shape_49.setTransform(52.3,23.4,2.234,2.234);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLgDQABADAIAEQAFAFAFgDQAIgEgIgDQgHgFgFAAg");
	this.shape_50.setTransform(40.3,15.8,2.234,2.234);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFF3BB").s().p("AgCAEQgIgEgBgDIAHgDQAFAAAHAFQAIADgIAEIgEABQgEAAgCgDg");
	this.shape_51.setTransform(40.4,15.8,2.234,2.234);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMgCIgBABQAVALAKgBQABgIgMgFQgKgHgGAFg");
	this.shape_52.setTransform(28.8,8.8,2.234,2.234);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFF3BB").s().p("AgPgBIABgBIADgEQAGgFAKAHQAMAFgBAIIgBAAQgLAAgTgKg");
	this.shape_53.setTransform(29.3,8.8,2.234,2.234);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgPgEQgBADAOAGQAMAHAEgDQAGgEgMgHQgJgKgGAEg");
	this.shape_54.setTransform(14.8,1,2.234,2.234);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFF3BB").s().p("AgCAFQgOgGABgDIAIgEQAGgEAJAKQAMAHgGAEIgDABQgFAAgIgFg");
	this.shape_55.setTransform(14.8,1,2.234,2.234);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgPgDQAGAEALAGQAPAHgBgIQAAgBgFgFQgGgGgBgBQgEgDgFABQgHAAgDAFg");
	this.shape_56.setTransform(-1.4,-7.6,2.234,2.234);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFF3BB").s().p("AACAHQgLgGgGgEIAAgBQADgFAHAAQAFgBAEADIAHAHIAFAGQAAAEgEAAQgDAAgHgDg");
	this.shape_57.setTransform(-1.4,-7.6,2.234,2.234);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgUgJQgBAJASAGQAIAEADACQACACADADQACACAEgEQAJgKgVgNQgUgQgHAOg");
	this.shape_58.setTransform(-15.9,-13.8,2.234,2.234);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFF3BB").s().p("AANARIgFgFQgDgCgIgEQgSgGABgJIAAgBQAHgOAUAQQAVANgJAKQgDADgCAAIgBgBg");
	this.shape_59.setTransform(-15.9,-13.8,2.234,2.234);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgWgHQAGAJAPAHQAOAIALgCQADgJgLgHQgOgJgCgEg");
	this.shape_60.setTransform(-35.3,-22.1,2.234,2.234);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFF3BB").s().p("AgCAJQgPgHgGgJIAWgHQACAEAOAJQALAHgDAJIgEAAQgKAAgLgGg");
	this.shape_61.setTransform(-35,-22,2.234,2.234);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgYgIQAXAPABABQAUAMAEgKQACgEgIgGQgHgHgGgDQgFgEgIABQgDAAgNADg");
	this.shape_62.setTransform(-53.3,-29.9,2.234,2.234);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFF3BB").s().p("AAAAIIgYgQIAAgCIAQgDQAIgBAFAEQAGADAHAHQAIAGgCAEQgBAFgGAAQgGAAgLgHg");
	this.shape_63.setTransform(-53.3,-29.9,2.234,2.234);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgjgMQAHAEACABQAGACAEgDQADgBAFgFQAEgFAEgCQAIgDAGAJQAEAFAGAKIALAPQAGALgMgFQgEgBgOgJQgJgHgIAAQgKABgGAAQgKgBgCgEg");
	this.shape_64.setTransform(-74.1,-36.8,2.234,2.234);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFF3BB").s().p("AAcAVIgRgKQgKgHgHAAIgQABQgLgBgBgEIgBgMIAJAFQAFACAFgDIAHgGQAFgFAEgCQAIgDAGAJIAJAPIALAPQAEAIgEAAIgGgCg");
	this.shape_65.setTransform(-74,-36.8,2.234,2.234);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AACgZQAIgEAGAKQACADABAGQABAGABADQADAEAJAIQAIAOgGACQgCABgHgEQgGgEgCgBQgGgCgJAAQgIAAgGAAQgIAAgFgCQgFgCgHgFIADgJQAJAFAHgEQAGgCAFgKQAEgKAEgDg");
	this.shape_66.setTransform(-95.9,-45.5,2.234,2.234);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFF3BB").s().p("AAaAYIgIgFQgGgCgJAAIgOAAQgJAAgFgCQgFgCgGgFIADgJQAIAFAIgEQAGgCAEgKQAEgKAFgDQAHgEAGAKQACADABAGIACAJQADAEAJAIQAIAOgGACIgBAAQgCAAgFgDg");
	this.shape_67.setTransform(-95.8,-45.5,2.234,2.234);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAfAeQgGgEgEgDQgLgGgLgBQgRABgLgBQgTgBACgKIAGgLQAHAAALABQAJgBAFgJQAHgMACgCQAIgGAIAJQAGAGACALQAEANABADQACAEAMAKQAIAJgKACQgFABgGgDg");
	this.shape_68.setTransform(-117,-49.9,2.234,2.234);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFF3BB").s().p("AAfAeIgKgHQgLgGgLgBIgcAAQgTgBACgKIAGgLIASABQAJgBAFgJQAHgMACgCQAIgGAIAJQAGAGACALIAFAQQACAEAMAKQAIAJgKACIgDAAQgEAAgEgCg");
	this.shape_69.setTransform(-117,-49.9,2.234,2.234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.9,-90.3,277.9,180.8);


(lib.trex_ribs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAhbQADAFgKAWQgMAXADAIQADAHANAKQAFAFAMAIQAVARAIAVQAJAbgQAWQgGAKgNAFQgPAHgKgKQgIgHAAgSQAAgUAAgIQgBgQgTgjQgRgiACgJQAGgYALgPQAPgVAQAUg");
	this.shape.setTransform(-251.5,-113.4,2.237,2.237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AgFBgQgIgHAAgSIAAgcQgBgQgTgjQgRgiACgJQAGgYALgPQAPgVAQAUQADAFgKAWQgMAXADAIQADAHANAKIARANQAVARAIAVQAJAbgQAWQgGAKgNAFQgGADgGAAQgIAAgFgGg");
	this.shape_1.setTransform(-251.5,-113.4,2.237,2.237);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ACUlqQAIABAPAIQAsAZAVAAQAKAAALAOQAEAGALATQAHAMgDAHQgCAGgLAIQgEADgJAAQgFABgJAMQgBABgXAVQgMALABAOQADAfgRATQgJALg0BSQg4BVgJAVQgGAPgTA0QgQAugFAJQgEAIgVAmQgTAlACAQQABANAEAWQACARgHABQgBAAgGgHQgGgGgaAIQgJADgMAXQgKASgEgHQgGgLgOgNQgOgOgJgDQgIgDgoAAQglABgQACQgRAEgGAAQgKAAACgQQAEhBAJgCQAEgBALgLQAMgIALAIQALAHALAAQAPAAAKADQARAFAcAAQAcAAAOgFQAggMAAgPQAAgHASgsQARgsAJgNQAFgJAXhCQAZg/AHgKQAHgKARgXQAPgVAFgXQADgRAJhMQAIhIADgKIAAgaQgBgPAOgRQAKgLANACg");
	this.shape_2.setTransform(-40.4,-27.9,2.237,2.237);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AhlFqQgGgLgOgNQgOgOgJgDQgIgDgoAAQglABgQACQgRAEgGAAQgKAAACgQQAEhBAJgCQAEgBALgLQAMgIALAIQALAHALAAQAPAAAKADQARAFAcAAQAcAAAOgFQAggMAAgPQAAgHASgsQARgsAJgNQAFgJAXhCQAZg/AHgKIAYghQAPgVAFgXQADgRAJhMQAIhIADgKIAAgaQgBgPAOgRQAKgLANACQAIABAPAIQAsAZAVAAQAKAAALAOIAPAZQAHAMgDAHQgCAGgLAIQgEADgJAAQgFABgJAMIgYAWQgMALABAOQADAfgRATQgJALg0BSQg4BVgJAVIgZBDQgQAugFAJIgZAuQgTAlACAQIAFAjQACARgHABQgBAAgGgHQgGgGgaAIQgJADgMAXQgHANgEAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_3.setTransform(-40.4,-27.9,2.237,2.237);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AjFjoQAAgCAAgCQgBgDAAgEQgDgUAEgFQASgQASAoQAMAeAIAPQAMAYAPARQABABBFBLQApAtAVAjQAPAWAdAwQAbAqAXAaQAOARAZArQAfA1AOAUQgJgDhsiTQhsiWgEgDQgNgKghgkQgcgfgNgQQgGgHgTgTQgHgGgJgJAjFjoQAAAKgEAWQgDAYADALQAFASATABQALAAAWgDQgBgCAAgCAjCjYQAAgBgDgP");
	this.shape_4.setTransform(-62.4,-7.2,2.237,2.237);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("ABTB5QhsiWgFgDQgMgKghgkQgdgfgNgQQgFgHgUgSIACADQgXADgLAAQgTgBgFgSQgDgLAEgYIAEggIgCgLQgDgUAFgFQARgQASAoIAUAtQANAYAPARIBGBMQAoAtAWAjIAsBGQAaAqAXAaQAPARAZArQAeA1APAUQgKgDhriTg");
	this.shape_5.setTransform(-63.3,-7.7,2.237,2.237);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgiBvQAAgHgCgMQgEgbAAgCQgBgMADgQQAEgWAAgFQACgMgLgJQgMgKgCgGQgEgRAPgBQAJAAARACQAXgDACgfQACgsAEgHQASgkARAeQAQAcgEAcQAAADgEAKQgDAHAAAFQAAADADAHQADAGAAAFQgBAKgLAMQgMAMgCAFQgGAPANAgQAMAeAAAAQgCANABAiQgDAZgagEQgQgDgSgRQgMgJgIgKQgBAFgBACAgrBkQAEAFAFAG");
	this.shape_6.setTransform(-102.5,-62.3,2.237,2.237);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AAUCWQgQgDgSgRQgMgJgIgKQAAgHgCgMIgEgdQgBgMADgQIAEgbQACgMgLgJQgMgKgCgGQgEgRAPgBQAJAAARACQAXgDACgfQACgsAEgHQASgkARAeQAQAcgEAcIgEANQgDAHAAAFQAAADADAHQADAGAAAFQgBAKgLAMQgMAMgCAFQgGAPANAgIAMAeQgCANABAiQgDAVgTAAIgHAAgAgrBkIAJALQgBAFgBACgAgiBvIAAAAg");
	this.shape_7.setTransform(-102.5,-62.3,2.237,2.237);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ai3nvQAEgEAKADQAGACAFgEQAFABALAcQAKAYAzBiQAyBiAFAMQAaBEBkENQBsEkAXBKQAFARgMALQgMALgHgOQgEgKgLgfQgJgdgFgGQgBgChMjLQhUjhgxh0QgEgKgVg7QgSgwgFgJQgHgKgZg1QgXgvgFgLQgFgLAAAAQgDgBgHASQgHAQgRALQgXAPgGAGQgdAeALgkQAMgkAJgfQARg7ABgQQABgSAFgFg");
	this.shape_8.setTransform(60.6,-8.4,2.237,2.237);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("ADNHrQgEgKgLgfQgJgdgFgGIhNjNQhUjhgxh0IgZhFQgSgwgFgJQgHgKgZg1Igcg6IgFgLQgDgBgHASQgHAQgRALQgXAPgGAGQgdAeALgkIAVhDQARg7ABgQQABgSAFgFQAEgEAKADQAGACAFgEQAFABALAcQAKAYAzBiQAyBiAFAMQAaBEBkENQBsEkAXBKQAFARgMALQgFAFgEAAQgGAAgEgIg");
	this.shape_9.setTransform(60.6,-8.4,2.237,2.237);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AjLjQQBAiAAEgUQADgOATgNQASgMAJADQATAHAGAJQADAEAIAWQANAmAxCfQAEALBDCiQBGCuARBLQAAAAAZBJQATA6gIgHQgQgLgLghQgJgggEgGQgEgGgqhtQg4iVghhSQg0iRgKgPQg1hPgDgIIgDgKQgDgBgJANQg6BVgVANQgPAKgIgLQgHgKAIgPg");
	this.shape_10.setTransform(72.1,-27.5,2.237,2.237);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("ADOGJQgQgLgLghQgJgggEgGQgEgGgqhtIhZjnQg0iRgKgPQg1hPgDgIIgDgKQgDgBgJANQg6BVgVANQgPAKgIgLQgHgKAIgPQBAiAAEgUQADgOATgNQASgMAJADQATAHAGAJQADAEAIAWQANAmAxCfIBHCtQBGCuARBLIAZBJQARA0gFAAIgBgBg");
	this.shape_11.setTransform(72.1,-27.5,2.237,2.237);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ai0irQBNh4AGgUQAFgOAUgLQAUgKAIAEQATAJAFAKQACADAFAYQAKAnAnCbQADALAsB1QA2CRAVA+QAJAZALAqQAOAzgJgIQgOgNgJgZQgHgZgDgFQgQgzgSg2Qgkhtgbg1QgHgMgbhBQgahCgDgFQgEgJgNgqQgMglgCgJQgDgLglAtQgMAOgZAUQgZASgSAJQgQAIgGgMQgGgLAJgOg");
	this.shape_12.setTransform(90.7,-38.7,2.237,2.237);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AC3FXQgOgNgJgZQgHgZgDgFIgihpQgkhtgbg1QgHgMgbhBIgdhHQgEgJgNgqIgOguQgDgLglAtQgMAOgZAUQgZASgSAJQgQAIgGgMQgGgLAJgOQBNh4AGgUQAFgOAUgLQAUgKAIAEQATAJAFAKQACADAFAYIAxDCQADALAsB1QA2CRAVA+QAJAZALAqQAMAsgFAAIgCgBg");
	this.shape_13.setTransform(90.7,-38.7,2.237,2.237);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAKkdQABAJACAXQADASAQBAQAQA+ACALQANA6AOA7QAdB2AVBEQAGAUAJAmQAKAsgHgHQgLgLgHgVQgGgWgCgFQgMgrgOgvQgbhfgVgtQgGgLgMgzQgMg0gCgFQgEgHgJguQgJgjgDgPQgBgFgTAQQgSAQgLANQgKANgVARQgVARgOAHQgOAHgEgJQgFgKAIgMQBBhrAFgRQAGgTAHgFQAOgMAmABQAOAAADAPg");
	this.shape_14.setTransform(109.5,-44.1,2.237,2.237);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("ACREsQgLgLgHgVIgIgbIgahaQgbhfgVgtQgGgLgMgzIgOg5QgEgHgJguIgMgyQgBgFgTAQQgSAQgLANQgKANgVARQgVARgOAHQgOAHgEgJQgFgKAIgMQBBhrAFgRQAGgTAHgFQAOgMAmABQAOAAADAPIADAgIATBSIASBJIAbB1QAdB2AVBEQAGAUAJAmQAJAmgEAAIgCgBg");
	this.shape_15.setTransform(109.5,-44.1,2.237,2.237);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAkbQANAAACAPQACAIABAWQAFAgAZBxQAFAgARBPQAXBuARBBQAGATAHAjQAIAqgGgGQgKgLgGgUQgEgUgCgEQgKgqgLgsQgXhYgSgrQgFgLgJgvQgKgxgCgFQgDgHgJgrQgGgmgCgJQgBgFgRAQQgQAOgKAOQgKAMgTARQgSAQgNAIQgMAHgEgKQgEgIAHgMQAHgMAZgtQAeg0ADgKQAGgSAGgFQAMgLAhgBg");
	this.shape_16.setTransform(126.7,-48.7,2.237,2.237);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AB9EbQgKgLgGgUQgEgUgCgEIgVhWQgXhYgSgrQgFgLgJgvIgMg2QgDgHgJgrIgIgvQgBgFgRAQQgQAOgKAOQgKAMgTARQgSAQgNAIQgMAHgEgKQgEgIAHgMQAHgMAZgtQAeg0ADgKQAGgSAGgFQAMgLAhgBQANAAACAPQACAIABAWQAFAgAZBxQAFAgARBPQAXBuARBBQAGATAHAjQAHAlgEAAIgBgBg");
	this.shape_17.setTransform(126.7,-48.7,2.237,2.237);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ah2hMQABAGAFAMQAEAKABAJQABAIACAQQACAOAFAGQALATAZADQAqADABABQAaAJAxAjQAGAEAHALQAIALAFADQAKAIAKgEQAGgBAOgIQADgNgZgTQgegVgIgGQgLgJgZgTQgYgQgKgKQgpgigRgeQgFgOgDgFQgFgJgMgCQgOgCgJAHQgJAHgBAO");
	this.shape_18.setTransform(-32.7,66.8,2.237,2.237);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("ABTBoQgFgDgIgLQgHgLgGgEQgxgjgagJIgrgEQgZgDgLgTQgFgGgCgOIgDgYQgBgJgEgKQgFgMgBgGIgFgGQABgOAJgHQAJgHAOACQAMACAFAJIAIATQARAeApAiIAiAaIAkAcIAmAbQAZATgDANQgOAIgGABIgGABQgHAAgHgFg");
	this.shape_19.setTransform(-32.7,66.8,2.237,2.237);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgOgMQgBAHANAJQALANABAIQACARADgaQACgVgHgOQgHgPgHAEQgJAEgBAOg");
	this.shape_20.setTransform(-0.3,160.6,2.237,2.237);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AAKAZQgBgIgLgNQgNgJABgHQABgOAJgEQAHgEAHAPQAHAOgCAVQgCAQgBAAQgBAAgBgHg");
	this.shape_21.setTransform(-0.3,160.6,2.237,2.237);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgPgHQACAIABAGQAEAQAGAHQACAEAIgBQAGgBAEgCQACgBAAgGQAAgHgCgEQgBgBgJgIQgGgFAAgFQAAgHgCgLQAAgGgEgBQgGgBgFAIQgFAHACABQADACAAAB");
	this.shape_22.setTransform(-4.3,148.6,2.237,2.237);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AgCAeQgGgHgEgQIgDgOIAAgHQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgCgBAFgHQAFgIAGABQAEABAAAGQACALAAAHQAAAFAGAFIAKAJQACAEAAAHQAAAGgCABQgEACgGABIgEAAQgEAAgCgDg");
	this.shape_23.setTransform(-4.3,148.6,2.237,2.237);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgKgEQgCAGgCAFQgBADAFAEQADADAAACQABgCAEgDQACgDAIgIQADgDADADQACADgCgFQgEgJAAgHQAAgKgKABQgKABgEAI");
	this.shape_24.setTransform(-7.3,141.8,2.237,2.237);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("AgKARQgFgEABgDIAEgLIgEgLQAEgIAKgBQAKgBAAAKQAAAHAEAJQABABAAABQAAABAAAAQAAABAAgBQgBAAAAgBQgDgDgDADIgKALIgFAFIgDgFg");
	this.shape_25.setTransform(-7.3,141.1,2.237,2.237);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgDAqQgDABgGgKQgHgOgEgTQgDgVAGgFQAEgDgBAAIAFgDQAGgDAGgGQADgCAFALQAEAJgEAIQgEAJAEAGQAEAHAKALQAHAJgHAEQgFADgBgDQAAgFgIAFQgHAFgEAGg");
	this.shape_26.setTransform(-10.1,131,2.237,2.237);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF3BB").s().p("AgMAhQgHgOgEgTQgDgVAGgFQABAAAAgBQABgBABAAQAAgBAAAAQAAAAAAAAIAFgDQAGgDAGgGQADgCAFALQAEAJgEAIQgEAJAEAGQAEAHAKALQAHAJgHAEQgFADgBgDQAAgFgIAFQgHAFgEAGIgBAAQgDAAgFgJg");
	this.shape_27.setTransform(-10,131,2.237,2.237);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgJgkQgEAWADAnQACgLACgGQACgKADgGQABgCAGgMQAGgJAAgHQgMAAgFgC");
	this.shape_28.setTransform(-21.1,151.9,2.237,2.237);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF3BB").s().p("AgJgdIAEgDQAFACAMAAQAAAHgGAJIgHANQgDAFgCALIgEASQgDgnAEgXg");
	this.shape_29.setTransform(-21.1,150.2,2.237,2.237);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLgPQABAEADAKQABAIgFAFQgHAIAAABQAAADAJAAQAEAAAMAGQAHAEAAgKQAAgBAEgaQADgRgHgCQgMgFgDgCQgKgDAAAGg");
	this.shape_30.setTransform(-19.3,138,2.237,2.237);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFF3BB").s().p("AAHAeQgMgGgEAAQgJAAAAgDIAHgJQAFgFgBgIIgEgOIAAgLQAAgGAKADIAPAHQAHACgDARIgEAbQAAAHgEAAIgDgBg");
	this.shape_31.setTransform(-19.3,138,2.237,2.237);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgHgbQgIAAAAAJIAAAkQgBAFAHgCQAEgBAFgCQAAAAAGAIQAEAGAAgLQAAgJAFgaQADgPgIACQgDABgOgBg");
	this.shape_32.setTransform(-18.3,127.9,2.237,2.237);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFF3BB").s().p("AAGAaQgGgIAAAAIgJADQgHACABgFIAAgkQAAgJAIAAQAOABADgBQAIgCgDAPQgFAaAAAJQAAAHgCAAIgCgCg");
	this.shape_33.setTransform(-18.3,127.9,2.237,2.237);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAehTQAEAGABAQQABASgGAMQgKAUgOBGQgCAKAFAGQABADgIACQgSAGgHABQgOABAEgKQAGgMAHgbQAHgaABgNQABgNgHgQQgGgOAEgMQACgKASADQAOACgBgGQgCgJAIgHQAHgHAEAGg");
	this.shape_34.setTransform(-8.1,104.1,2.237,2.237);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFF3BB").s().p("AghBOQAGgMAHgbQAHgaABgNQABgNgHgQQgGgOAEgMQACgKASADQAOACgBgGQgCgJAIgHQAHgHAEAGQAEAGABAQQABASgGAMQgKAUgOBGQgCAKAFAGQABADgIACQgSAGgHABIgDAAQgLAAAEgJg");
	this.shape_35.setTransform(-8.1,104.1,2.237,2.237);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgDhAQADgMADABQADAAAJAGQAGADgCAOQgBAIgDAaQgBADABAyQABAigJAAQgDAAgNAGQgIAEgBgKQgCgIAJgZQAIgaAAgIQAAgCgBgcQgCgWADgOg");
	this.shape_36.setTransform(-17.5,105.9,2.237,2.237);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFF3BB").s().p("AgSBFQgCgIAJgZQAIgaAAgIIgBgeQgCgWADgOQADgMADABQADAAAJAGQAGADgCAOIgEAiIAAA1QABAigJAAQgDAAgNAGIgEABQgFAAAAgHg");
	this.shape_37.setTransform(-17.5,105.9,2.237,2.237);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ah2hTQgLAJgDAeQgCAXADATQAIAnAkAcQA2AqBeAAQAqAAAXgcQAOgTgKgPQgRgRgJgLQgGgJgPgZQgMgXgKgMQgGgGgJgFQgOgHgCgBQgFgDgKgIQgJgIgGgDQgJgIgSgCQgGgBgZgBQgYgBgKACQgRADgJAP");
	this.shape_38.setTransform(-72,62.1,2.237,2.237);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFF3BB").s().p("AhXBBQgkgcgIgnQgDgTACgXQADgeALgJIAAgDQAJgPARgDQAKgCAYABIAfACQASACAJAIIAPALIAPALIAQAIQAJAFAGAGQAKAMAMAXQAPAZAGAJQAJALARARQAKAPgOATQgXAcgqAAQheAAg2gqg");
	this.shape_39.setTransform(-72,62.1,2.237,2.237);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhkgxQgMADBTAuQBSAtAiAJQAdAIgagVQgvgjgDgEQgJgHgJgVQgHgQgOgHQgagNhLANg");
	this.shape_40.setTransform(-55.8,91.8,2.237,2.237);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFF3BB").s().p("ABXA2QgigJhSgtQhTguAMgDQBLgNAaANQAOAHAHAQQAKAVAIAHQAEAEAuAjQATAPgKAAIgMgCg");
	this.shape_41.setTransform(-55.8,91.8,2.237,2.237);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AjQjUQgPAPgEgBQgFgBAFgSQATg+AAgBQAQg4AAgPQAAgRAFgFQAEgEALACQAGABAFgDQAFAAAOAaQALAWA7BZQA7BYAFALQDxHvgDAPQgCAKgFAAQgFgBgHgJQgFgGhnjSQhojXgHgMQgLgTg1hJQgyhFgKgMQgHgIgJgVQgLgZgBgBQgDgGgBABQgBADgHATQgFAOgKAZQgIAVgNANg");
	this.shape_42.setTransform(-39.9,-3.4,2.237,2.237);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFF3BB").s().p("ADfF6QgFgBgHgJQgFgFhnjTQhojXgHgMQgLgTg1hIQgyhFgKgMQgHgIgJgWIgMgaQgDgGgBACIgIAWIgPAnQgIAVgNANQgPAPgEgBQgFgCAFgRIAThAQAQg4AAgPQAAgRAFgEQAEgEALABQAGACAFgEQAFABAOAZQALAWA7BZQA7BZAFALQDxHvgDAOQgCALgFAAIAAgBg");
	this.shape_43.setTransform(-39.9,-3.4,2.237,2.237);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ai1loQgBACgIAUQgFANgJAaQgJAVgNANQgOAPgFgBQgEgBAFgSQAihvAAgYQAAgQAGgFQAEgEAKABQAHACAFgEQAFABANAZQAMAXA7BYQA6BaAGAKQAPAdBnDiQB0D9AjBWQAFANgCAHQgBAEgCACQgCAJgKgFQgHgEgKgLQghhbgshtQhYjbhLh8QgMgTg1hIQgyhGgKgLQgHgIgJgWQgJgVgCgFQgDgGgBACg");
	this.shape_44.setTransform(-14.1,-0.8,2.237,2.237);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFF3BB").s().p("ADoGuQgHgEgKgLQghhbgshtQhYjbhLh8QgMgTg1hIQgyhGgKgLQgHgIgJgWIgLgaQgDgGgBACIgJAWIgOAnQgJAVgNANQgOAPgFgBQgEgBAFgSQAihvAAgYQAAgQAGgFQAEgEAKABQAHACAFgEQAFABANAZQAMAXA7BYQA6BaAGAKQAPAdBnDiQB0D9AjBWQAFANgCAHQgBAEgCACQgBAGgFAAQgDAAgDgCg");
	this.shape_45.setTransform(-14.1,-0.8,2.237,2.237);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhxgSQADAEADAEQAMAOAXASQANAKAaATQAUAPA3AvQAxAoAeAWQAQALAJANQAGAIAOAWQAEAHAQAUQAHAIgMgGQgMgHgNgNQgOgQgHgIQhXhVhOgzQgogZgsgRQgtgRgGgEQgdgPAIgXQAagCAIgcQACgFAEgtQACgTAAgGQAAgLgFgOQgFgQACgHQACgKAQgBQAGgBASAIQAOAGAMgJQAJgHADgQQACgSACgIQAEgNAGgIQAJgLAJAHQALAHgFAVQgCALgHATQgBAHgGASQgEAQAAAJQAAALADAOQABALgLAKQgHAIgLAGQgHAGgDAPQgEAgAAAZQgMAAgIgHQgGgGgCgJQgCgHgBgIQADgrAAgMQgNgBgEABQANAEAAAPQgBAJgCASQACAMAFAM");
	this.shape_46.setTransform(-92.8,-39.1,2.237,2.237);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFF3BB").s().p("AC1ECQgMgHgNgNIgVgYQhXhVhOgzQgogZgsgRQgtgRgGgEQgdgPAIgXQAagCAIgcQACgFAEgtQACgTAAgGQAAgLgFgOQgFgQACgHQACgKAQgBQAGgBASAIQAOAGAMgJQAJgHADgQQACgSACgIQAEgNAGgIQAJgLAJAHQALAHgFAVQgCALgHATIgHAZQgEAQAAAJQAAALADAOQABALgLAKQgHAIgLAGQgHAGgDAPQgEAgAAAZQgNAAgHgHIAGAIQAMAOAXASIAnAdIBLA+QAxAoAeAWQAQALAJANIAUAeIAUAbQABABABABQAAABABABQAAAAAAAAQgBABAAAAIgHgDgAiKhnQANAEAAAPIgDAbQACAMAFAMIgDgPQADgrAAgMIgMgBIgFABg");
	this.shape_47.setTransform(-92.8,-39.1,2.237,2.237);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AALiVQgLARgFAFQgFAEgHAMQgFAKgIADQgKADgGgHQgGgIAHgHQADgDAQgnQARgpACgFQAHgMAEgDQALgGAaAGQAKACgBALQgBAHgDAQQgBAZgDBZQAAAHgEBOQgDBYABAyQAAAPgBAcQgBAggEgFQgFgKgBgQQABgPgBgEQAAghAAgjQgBhGgFgjQgBgHABgmQACgmgBgEQgBgGABgiQACgiAAgDQAAgCgKAMg");
	this.shape_48.setTransform(170.3,-49.1,2.237,2.237);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFF3BB").s().p("AAeDfQgFgKgBgQIAAgTIAAhEQgBhGgFgjQgBgHABgmIABgqQgBgGABgiIACglQAAgCgKAMQgLARgFAFQgFAEgHAMQgFAKgIADQgKADgGgHQgGgIAHgHQADgDAQgnIATguQAHgMAEgDQALgGAaAGQAKACgBALIgEAXIgEByIgEBVQgDBYABAyIgBArQgBAcgDAAIgBgBg");
	this.shape_49.setTransform(170.3,-49.1,2.237,2.237);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgOikQgKAXgGAIQgEAGgEARQgDANgHAFQgKAIgIgHQgHgHAGgKQACgFAJgxQAKg0ACgHQAFgRAFgFQAKgLAZgCQAKAAABANQABAIgBATQADAdANBnQAEAiAIBCQAMBkAKA6QAEAUADAeQAEAmgEgGQgHgJgEgSQgCgSgBgEQgGglgHgoQgNhRgLgmQgDgKgFgqQgFgsgCgFQgCgGgCgnQgFgogBgDQAAgDgHARg");
	this.shape_50.setTransform(151.3,-53.1,2.237,2.237);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFF3BB").s().p("ABFEAQgHgJgEgSQgCgSgBgEIgNhNQgNhRgLgmQgDgKgFgqQgFgsgCgFQgCgGgCgnIgGgrQAAgDgHARQgKAXgGAIQgEAGgEARQgDANgHAFQgKAIgIgHQgHgHAGgKQACgFAJgxIAMg7QAFgRAFgFQAKgLAZgCQAKAAABANIAAAbIAQCEIAMBkQAMBkAKA6QAEAUADAeQADAhgCAAIgBgBg");
	this.shape_51.setTransform(151.3,-53.1,2.237,2.237);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ai4ngQAGABAFgDQAFABAMAbQALAXA2BeQA2BeAFALQASAnBtEMQB+EyAdBZQAFAOgOAAQgQgDgBABQgCAIgKgyQgMg4gEgFQgihZgrhsQhWjYhEiCQgTgjgmg0QgHgKgcgyQgVgpgIgPQgFgLAAAAQgDgBgIASQgHAPgSAKQgZAPgGAGQgQAOgEgBQgFgBAGgSQAMgjAKgdQASg4ABgQQABgRAGgFQAEgEALADg");
	this.shape_52.setTransform(36.2,-3.3,2.237,2.237);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFF3BB").s().p("ADgHiQgCAHgKgxQgMg4gEgGIhNjEQhWjYhEiCQgTgjgmg1QgHgJgcgzIgdg4IgFgKQgDgBgIASQgHAPgSAKQgZAPgGAFQgQAPgEgBQgFgCAGgRIAWhAQASg4ABgQQABgRAGgFQAEgEALADQAGABAFgEQAFACAMAbQALAWA2BfQA2BeAFALQASAnBtEMQB+EyAdBYQAFAOgOAAQgQgCgBABg");
	this.shape_53.setTransform(36.2,-3.3,2.237,2.237);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ai5nVQAHACAFgDQAFABAMAaQALAWA2BcQA2BbAFAMQARAkBuEHQB9ErAeBWQAFAOgPAAQgPgDgBABQgCAIgLgwQgMg3gEgFQghhXgrhpQhXjThEh/QgYgsghgpQgHgKgbgxQgZgugEgJQgDgJgCgBQgDgBgIARQgHAPgSAKQgaAPgGAFQgQAPgEgCQgEgBAGgRQAMgiAKgdQASg3ABgPQABgRAGgEQAEgEAKACg");
	this.shape_54.setTransform(10.2,-3.8,2.237,2.237);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFF3BB").s().p("ADgHWQgCAHgLgvQgMg4gEgFQghhWgrhpQhXjUhEh+QgYgsghgpQgHgKgbgxIgdg3QgDgJgCgBQgDgBgIARQgHAPgSAKQgaAPgGAFQgQAPgEgCQgEgCAGgRIAWg+QASg4ABgPQABgQAGgEQAEgEAKACQAHABAFgCQAFABAMAaQALAWA2BcQA2BbAFAMQARAjBuEHQB9EsAeBWQAFANgPAAQgPgCgBABg");
	this.shape_55.setTransform(10.2,-3.7,2.237,2.237);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhFg3QADgIAPgFQASgGADgDQAFgFAkgZQAmgaAFgNQAFgOAHAeQADAQAIAoQAIAhAIA5QAKBEgGAQQgCAGAKAaQAFAPgeAAQhCAEghABQhBAAgLgOQgNgQAFg0QAEgwANgWQAIgOADgOQACgSAEgJg");
	this.shape_56.setTransform(238.8,-56.3,2.237,2.237);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFF3BB").s().p("AhfCKQgNgQAFg0QAEgwANgWQAIgOADgOQACgSAEgJQADgIAPgFQASgGADgDQAFgFAkgZQAmgaAFgNQAFgOAHAeIALA4QAIAhAIA5QAKBEgGAQQgCAGAKAaQAFAPgeAAQhCAEghABIgFAAQg8AAgLgOg");
	this.shape_57.setTransform(238.8,-56.3,2.237,2.237);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMjyQgQBNgDAlQgEA0AYAPQAMAJBBAHQAXACgIAKQgKAMg9ANQgLADAVAgQAaAogBAGQAAAJgFAfQgEAfABAUQABAHAAAuQABAgADAJQADALgIAGQgIAHgDgFQgVgwgFgBQgGgCgDgBQgGgBgHAFQgIAFgLAQQgKAOgBAEQgBADABAKQAAAJgIgBQgKgBgFgMQgFgLAAgKQgBgpgBgjQAAhGAJgNQAIgLgJgwQgJgzABgHQAHgPADgIQAGgPgKgnQgKgmAHgcQAHgcAAgDQgCgIADgDQADgEgEgPQgHgTgCgIQgDgNAGgGQAHgHAOgGQAOgGAIACQAKACAIALQAJAPgEASg");
	this.shape_58.setTransform(236.6,-84.3,2.237,2.237);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFF3BB").s().p("Ag8EhQgKgBgFgMQgFgLAAgKIgChMQAAhGAJgNQAIgLgJgwQgJgzABgHIAKgXQAGgPgKgnQgKgmAHgcQAHgcAAgDQgCgIADgDQADgEgEgPIgJgbQgDgNAGgGQAHgHAOgGQAOgGAIACQAKACAIALQAJAPgEASQgQBNgDAlQgEA0AYAPQAMAJBBAHQAXACgIAKQgKAMg9ANQgLADAVAgQAaAogBAGIgFAoQgEAfABAUIABA1QABAgADAJQADALgIAGQgIAHgDgFQgVgwgFgBIgJgDQgGgBgHAFQgIAFgLAQQgKAOgBAEIAAANQAAAIgHAAIgBAAg");
	this.shape_59.setTransform(236.6,-84.3,2.237,2.237);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA1jsQgEANgQArQgOAoACAPQACAVAGAdQAGAhAEAOQAEALAGASQAFARACAOQABALAKASQAJAPgCAIQgCAJgIAeQgIAfgBATQgBAKgEArQgEAgACAKQACALgJAFQgIAFgDgFQgPgygHgCQgGgDgCgBQgFgCgHAEQgIAFgNAOQgMANgBAEQgBACAAALQgBAJgJgCQgJgDgEgNQgEgLACgKQAXiEADgYQACgbACgHQABgHAEgRQAPgWAKgOQARgegFgoQgDgogHhWQgBgIAEgDQADgCgDgQQgEgUgBgIQgBgNAGgFQAHgHAOgEQAOgEAIADQAJADAHAMQAHAPgGASg");
	this.shape_60.setTransform(202.5,-87.4,2.237,2.237);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFF3BB").s().p("Ag5EeQgJgDgEgNQgEgLACgKQAXiEADgYIAEgiIAFgYIAZgkQARgegFgoQgDgogHhWQgBgIAEgDQADgCgDgQQgEgUgBgIQgBgNAGgFQAHgHAOgEQAOgEAIADQAJADAHAMQAHAPgGASIgUA4QgOAoACAPQACAVAGAdQAGAhAEAOIAKAdQAFARACAOQABALAKASQAJAPgCAIIgKAnQgIAfgBATIgFA1QgEAgACAKQACALgJAFQgIAFgDgFQgPgygHgCIgIgEQgFgCgHAEQgIAFgNAOQgMANgBAEQgBACAAALQgBAHgGAAIgDAAg");
	this.shape_61.setTransform(202.5,-87.4,2.237,2.237);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABDj5QAKAMgBAJQgIBogEANQgNA0AFAVQAFAXAAAwQABAKgFAQQgCAJgIAYQgHAbAABJQAAAtgJAdQgCAGgMgPQgNgPAAgNQgBgMgEgBQgJAAgHgBQgKgBgCAAQgGABgMABQgRAFgDAAQgDABgDgQQgEgQADgxQADgmAEgUQABgJAIgSQAIgVADgMQAEgPAXgfQALgRAJgNQAAgLAAgnQACgmgCgQQAAgDAAgkQAAgSgJgGQgMgHgCgDQgCgCgGgQQgEgKAMgDQAHgCAMgBQAEgDASAAQATAAAKADQALADAJAMg");
	this.shape_62.setTransform(174.5,-87.1,2.237,2.237);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFF3BB").s().p("AAREBQgNgPAAgNQgBgMgEgBQgJAAgHgBIgMgBIgSACIgUAFQgDABgDgQQgEgQADgxQADgmAEgUQABgJAIgSQAIgVADgMQAEgPAXgfIAUgeQAAgLAAgnQACgmgCgQIAAgnQAAgSgJgGQgMgHgCgDQgCgCgGgQQgEgKAMgDIATgDQAEgDASAAQATAAAKADQALADAJAMQAKAMgBAJQgIBogEANQgNA0AFAVQAFAXAAAwQABAKgFAQIgKAhQgHAbAABJQAAAtgJAdQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgEAAgIgLg");
	this.shape_63.setTransform(174.5,-87.1,2.237,2.237);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA3jqQAGANAFAqQAGAwgJAOQgKAPAAAEQAAAEAKAMQAHAIABAGQABAGAEAFQAFAGgJAEQgOAGgDAFQgFAIAFAYQADAKAFAPQABAHgCAaQgCAegFAMQgFAMgGAmQgDATgEAbQgBAKgPgBQgOgBgFgIQgDgJgDAAQgEAAgIAKQgFAGgGARQgEAKgHgCQAAAAgaANQgQAJAFgbQAKgpAEgQQAHgcgGgOQgHgRAEgbQAEgaAIgKQAFgGAOgQQANgQAFgLQAFgNACgVQAAgFABgaQAAgKgDgmQgEgnAAgEQAAgEgBgOQgCgOAAgOQAAgLAHgHQAHgGAEABQAEABAXgFQAWgDAEAHg");
	this.shape_64.setTransform(118.3,-89.1,2.237,2.237);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFF3BB").s().p("AhLDbIAOg5QAHgcgGgOQgHgRAEgbQAEgaAIgKIATgWQANgQAFgLQAFgNACgVIABgfQAAgKgDgmIgEgrIgBgSQgCgOAAgOQAAgLAHgHQAHgGAEABQAEABAXgFQAWgDAEAHQAGANAFAqQAGAwgJAOQgKAPAAAEQAAAEAKAMQAHAIABAGQABAGAEAFQAFAGgJAEQgOAGgDAFQgFAIAFAYIAIAZQABAHgCAaQgCAegFAMQgFAMgGAmIgHAuQgBAKgPgBQgOgBgFgIQgDgJgDAAQgEAAgIAKQgFAGgGARQgEAKgHgCIgaANQgEACgDAAQgIAAAEgUg");
	this.shape_65.setTransform(118.3,-89.1,2.237,2.237);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABBjcQACAJAAAZQAAAYgCAYQgCARgEATQgDAPAAAEQAAAFgEAWQgDAXAHAOQALAVABADQADAJgEAIQgGALgQAIIgGALQgFALAJAAQANABACACQADAEgBARQgLCBgIAIQgHAHgHgDQgIgCgDgLQgCgOgDgFQgDgHgMADQgMADgEAKQgFAKgGAAQgNACgHgCQgKgDgFgLQgFgLAHgrQAFgqAHgNQACgFACgQQACgNAJgPQAIgMAMgTQAIgOAEgWQADgTgBgJQgCgPAAgMQABgJAEgyQADglgDgIQgEgMgBgFQgCgKADgKQACgFALgCQALgCAKACQAGABAPgBQAMAAACAHg");
	this.shape_66.setTransform(88.9,-87.1,2.237,2.237);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFF3BB").s().p("AAbDkQgIgCgDgLQgCgOgDgFQgDgHgMADQgMADgEAKQgFAKgGAAQgNACgHgCQgKgDgFgLQgFgLAHgrQAFgqAHgNQACgFACgQQACgNAJgPIAUgfQAIgOAEgWQADgTgBgJQgCgPAAgMIAFg7QADglgDgIIgFgRQgCgKADgKQACgFALgCQALgCAKACQAGABAPgBQAMAAACAHQACAJAAAZQAAAYgCAYQgCARgEATIgDATIgEAbQgDAXAHAOQALAVABADQADAJgEAIQgGALgQAIIgGALQgFALAJAAQANABACACQADAEgBARQgLCBgIAIQgFAFgFAAIgEgBg");
	this.shape_67.setTransform(88.9,-87.1,2.237,2.237);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgvAYQAKgGAGgbIADgcQAOgLAAgRIAAiFQABgIAPgGQAPgFAIACQACABAPgEQALgDACAGQACAGgBAXQgCAYABAGQACAJAAAsQAAAtgCAOQgBALABAVQABAWgBADQgBAGgGAJQgIALgDAFQgGAIAAACQgBACAHAGQAEAFgBAHQgBAJADAKQAGATgLBKQgDASADAMQABAFgBgBQgDgGgDgDQgGgHgOgEQgWgGgCAAQgKgCgJAAQgKABgDgJQgDgHgBgZQgBgKgEgaQgEgTADgOQABgGgBgdQgBgSAJgGg");
	this.shape_68.setTransform(63.9,-87.2,2.237,2.237);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFF3BB").s().p("AAlDcIgGgJQgGgHgOgEIgYgGQgKgCgJAAQgKABgDgJQgDgHgBgZQgBgKgEgaQgEgTADgOQABgGgBgdQgBgSAJgGQAKgGAGgbIADgcQAOgLAAgRIAAiFQABgIAPgGQAPgFAIACQACABAPgEQALgDACAGQACAGgBAXQgCAYABAGQACAJAAAsQAAAtgCAOQgBALABAVIAAAZQgBAGgGAJIgLAQQgGAIAAACQgBACAHAGQAEAFgBAHQgBAJADAKQAGATgLBKQgDASADAMIAAAEIAAAAg");
	this.shape_69.setTransform(63.9,-87.2,2.237,2.237);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgWi6QABgIAIgEQACgBAPgDQAIgBAPgFQANgDAIAAQALAAACACQADAEAAATQAAAPgHAnQgIAogBAGQgFBRAFAQQADANgBAGQgBADgFAJQgDAGgBARQgBAagBAJQgBANADAnQADAigDAIQgEAOgDACQgEAEgJgHQgEgEgLgOQgFgKgHAAQgHABgQAIIgOAIQgEATgHgMQgEgIgChEQgDg/ABgHQADgYAGABQAHACABgCQAEgHAAgJQAAgOAAgNQAAgQAKgTQAMgWADgMQADgQgEgkQgEgqAAgOg");
	this.shape_70.setTransform(38.1,-84.3,2.237,2.237);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFF3BB").s().p("AAUDPQgEgEgLgOQgFgKgHAAQgHABgQAIIgOAIQgEATgHgMQgEgIgChEQgDg/ABgHQADgYAGABQAHACABgCQAEgHAAgJIAAgbQAAgQAKgTQAMgWADgMQADgQgEgkQgEgqAAgOQABgIAIgEIARgEIAXgGQANgDAIAAQALAAACACQADAEAAATQAAAPgHAnIgJAuQgFBRAFAQQADANgBAGIgGAMQgDAGgBARIgCAjQgBANADAnQADAigDAIQgEAOgDACIgDACQgEAAgGgFg");
	this.shape_71.setTransform(38.1,-84.3,2.237,2.237);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgUi6QAMgGAJACQARAFAOAPQAEAFAIBIQAKBMgGAUQgFATgBBNQAABNgBADQgBAGAFAFQACACgIgBQgKgBgJgHQgMgJgHgCQgJgDgGAAQgJACgJABQgMACgCgGQAAAAgCgUQgCgOACgZQADgaAFgQQANgpADgmQADgcABgOQACgagGgFQgHgGgBghQAAglAAgJQAAgJAMgHg");
	this.shape_72.setTransform(-14.4,-77.4,2.237,2.237);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFF3BB").s().p("AAnC/QgKgBgJgHQgMgJgHgCQgJgDgGAAIgSADQgMACgCgGIgCgUQgCgOACgZQADgaAFgQQANgpADgmIAEgqQACgagGgFQgHgGgBghIAAguQAAgJAMgHQAMgGAJACQARAFAOAPQAEAFAIBIQAKBMgGAUQgFATgBBNQAABNgBADQgBAGAFAFQABAAAAABQAAAAgBAAQAAAAAAAAQgBAAgBAAIgEAAg");
	this.shape_73.setTransform(-14.4,-77.4,2.237,2.237);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAijFQAdACAEABQAFACgDAbQgCAdAAABQACAFABA9QACA+gCAHQgBACgKAHQgJAHABAGQACANgCALQgKA3ADASQAAAEADAhQACAdACAGQACAGgdgOQgdgQgBABQgEABgHAIQgIAJgCAFQgCAGgHABQgHABgIgEQgIgEgHhJQgIhKAHgLQAJgQAhg0QAHgLABgmQgBgoAAgLQAAgBgDgaQgBgPAEgMQACgHAFgBQADgBAIAAQAKAAAYABg");
	this.shape_74.setTransform(10.3,-81.8,2.237,2.237);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFF3BB").s().p("AgzDDQgIgEgHhJQgIhKAHgLIAqhEQAHgLABgmIgBgzIgDgbQgBgPAEgMQACgHAFgBIALgBIAiABQAdACAEABQAFACgDAbIgCAeQACAFABA9QACA+gCAHQgBACgKAHQgJAHABAGQACANgCALQgKA3ADASIADAlQACAdACAGQACAGgdgOQgdgQgBABQgEABgHAIQgIAJgCAFQgCAGgHABIgDABQgGAAgGgEg");
	this.shape_75.setTransform(10.3,-81.8,2.237,2.237);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAeg3QgGA0AAAVQgBATARAYQAFAIgBAnQAAAjgDAQQgCAKgEgDQgJgHgCAAQgNgDgHgBQgJgCAAAGQADAVgQgDQgKgCgFgIQgDgHgDgTQgFgjgCgVQgEgpAHgEQAMgJAHgnQABgGADgzQADgpAFgJQADgHgFgQQgFgQACgFQAFgPASAAQADAAARgCQAKgBACADQAHANABAEQAFAPgHALQgGANgIA/g");
	this.shape_76.setTransform(-42.4,-71.3,2.237,2.237);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFF3BB").s().p("AgSCxQgKgCgFgIQgDgHgDgTIgHg4QgEgpAHgEQAMgJAHgnIAEg5QADgpAFgJQADgHgFgQQgFgQACgFQAFgPASAAIAUgCQAKgBACADIAIARQAFAPgHALQgGANgIA/QgGA0AAAVQgBATARAYQAFAIgBAnQAAAjgDAQQgCAKgEgDQgJgHgCAAIgUgEQgJgCAAAGQADASgMAAIgEAAg");
	this.shape_77.setTransform(-42.4,-71.3,2.237,2.237);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhEARQg+gEgWgCQgOgBgDAAQgEAAAJAGQALAIB2AJQCVAHARgKQAPgJAQgYQASgcgRgCQgSgDgEAEQgEADgDAYQgEAWh+AEQgQAAg4gEg");
	this.shape_78.setTransform(76.5,106.5,2.237,2.237);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFF3BB").s().p("AgjAhQh2gJgLgIQgJgGAEAAIARABIBUAGQA4AEAQAAQB+gEAEgWQADgYAEgDQAEgEASADQARACgSAcQgQAYgPAJQgKAFg4AAQgoAAg8gCg");
	this.shape_79.setTransform(76.5,106.5,2.237,2.237);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABMAGQgxgDgSAAQgRABg8gEQhYgEgBAAQgPgBgDAAQgFAAAKAFQAHADA9AGQAwAEAVABQCfAHASgJQAzgYgbgDQgNgCgBADQgDAHgOAHQgSAIgrgCg");
	this.shape_80.setTransform(51,109.4,2.237,2.237);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFF3BB").s().p("AghAOIhFgFQg9gGgHgDQgKgFAFAAIASABIBZAEQA8AEARgBQASAAAxADQArACASgIQAOgHADgHQABgDANACQAbADgzAYQgLAFg5AAQgrAAhCgDg");
	this.shape_81.setTransform(51,109.4,2.237,2.237);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ACJAAQgSAHgsgBQgwgEgSABQgSAAg7gDQhCgDgXgBQgPgCgEAAQgEAAAKAGQALAFB+AJQCfAGARgJQAWgKAHgEQANgKgRgCQgOgCAAADQgDAHgOAHg");
	this.shape_82.setTransform(25.1,106.2,2.237,2.237);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFF3BB").s().p("AghAOQh+gJgLgFQgKgGAEAAIATACIBZAEQA7ADASAAQASgBAwAEQAsABASgHQAOgHADgHQAAgDAOACQARACgNAKQgHAEgWAKQgKAGg6AAQgrAAhBgDg");
	this.shape_83.setTransform(25.1,106.2,2.237,2.237);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAfg3QgGAzgBAWQAAATAQAYQAFAIAAAnQAAAigEAQQgCALgEgDQgJgHgCgBQgNgDgGAAQgKgCABAFQACAWgQgDQgKgCgEgJQgEgGgCgTQgHg0gBgEQgEgpAHgEQAMgKAHgmQABgHAEgyQACgpAFgJQADgHgEgQQgFgQABgFQAGgPARAAQADAAARgCQAKgBACADQAHALACAGQAEAOgGAMQgHANgHA/g");
	this.shape_84.setTransform(-62,-66.3,2.237,2.237);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFF3BB").s().p("AgSCxQgKgCgEgJQgEgGgCgTIgIg4QgEgpAHgEQAMgKAHgmIAFg5QACgpAFgJQADgHgEgQQgFgQABgFQAGgPARAAIAUgCQAKgBACADQAHALACAGQAEAOgGAMQgHANgHA/QgGAzgBAWQAAATAQAYQAFAIAAAnQAAAigEAQQgCALgEgDIgLgIIgTgDQgKgCABAFQACATgMAAIgEAAg");
	this.shape_85.setTransform(-62,-66.3,2.237,2.237);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgDiAQgCgGADgJQACgJAKgBQAHgBAJgBQAGAAADAEQADADAJAGQAHAFgJAJQgLANgDAGQgEAJABAOQABAKgGAgQgFAdACAIQACAHgBABQgBAEAAAHQgBAGAEAGQAEAHABAZQABATAEArQADAdgCAEQgCAHgbgDQgfgFgEABQgOADgCg8QgBg8AHgFQAOgJgLgUQgJgRgBgDQgEgLAFgLQAHgMAEgDQAFgEAJADQAIADAIgeQAFgfgDgMg");
	this.shape_86.setTransform(-82.2,-61.8,2.237,2.237);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFF3BB").s().p("AAFCbQgfgFgEABQgOADgCg8QgBg8AHgFQAOgJgLgUIgKgUQgEgLAFgLQAHgMAEgDQAFgEAJADQAIADAIgeQAFgfgDgMQgCgGADgJQACgJAKgBIAQgCQAGAAADAEQADADAJAGQAHAFgJAJQgLANgDAGQgEAJABAOQABAKgGAgQgFAdACAIIABAIIgBALQgBAGAEAGQAEAHABAZIAFA+QADAdgCAEQgCAFgNAAIgOgBg");
	this.shape_87.setTransform(-82.2,-61.8,2.237,2.237);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ACagOQgDAHgOAHQgTAHgrgBQgwgEgSAAQgRABg8gDQhQgEgJAAQgPgCgDAAQgFAAAKAGQALAFB+AJQCfAGASgJQAVgLAHgDQANgKgRgCQgOgCAAADg");
	this.shape_88.setTransform(1.8,98.8,2.237,2.237);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFF3BB").s().p("AghAOQh+gJgLgFQgKgGAFAAIASACIBZAEQA8ADARgBQASAAAwAEQArABATgHQAOgHADgHQAAgDAOACQARACgNAKQgHADgVALQgLAGg6AAQgrAAhBgDg");
	this.shape_89.setTransform(1.8,98.8,2.237,2.237);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AB9gjQgMgBgDABIgPARQgNAPgbAGQggAHgOADQgMADgsAEQg7AFgHABQgLAAgDABQgDAAAIAGQAFAFAtgCQAdgBAXgCQAUgCAggGQAvgKAIgJQABgCAdgXQATgQgLAAg");
	this.shape_90.setTransform(-16.2,87.3,2.237,2.237);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFF3BB").s().p("Ah6AhQgIgGADAAQADgBALAAIBCgGQAsgEAMgDIAugKQAbgGANgPIAPgRQADgBAMABQALAAgTAQIgeAZQgIAJgvAKQggAGgUACIg0ADIgWABQgYAAgEgEg");
	this.shape_91.setTransform(-16.2,87.3,2.237,2.237);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgFj0QgIAHgHAFQgOAKgCACQgFAHAIALQAHAJACAgQACAjACAEQAFANABAZQABAbgHACQgEABgNgBQgMgBgJADQgPAFABARQABAPANAQQADACAQAOQAHAGgBAIQgCAPgBABQgCAHgMALQgLALgDAgQgCARgBAdQgHA7AHASQADAIADAKQADAEAGgGQAEgDAEgTQAEgQAHgDQAEgBAJgHQAEgEAIADQAIADADAFQABABAGAMQACAFgGAKQgEAHAIADQAEABAOAKQAIAGABgJQACgTAFhLQAFhTgDgJQgGgMgCgGQgEgKADgGQACgEAGACQAEACgCgJQgIgQgFgHQgHgPAKgKQAIgIAMAFQAKAEADgIQAHgagHgcQgNggAAgNQAAgQgCggQgCgogDgLQgDgNgNgGQgMgFgMAEQgKADgFAFg");
	this.shape_92.setTransform(147.1,-89.4,2.237,2.237);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFF3BB").s().p("AAcD9QgOgKgEgBQgIgDAEgHQAGgKgCgFIgHgNQgDgFgIgDQgIgDgEAEQgJAHgEABQgHADgEAQQgEATgEADQgGAGgDgEIgGgSQgHgSAHg7IADguQADggALgLQAMgLACgHIADgQQABgIgHgGIgTgQQgNgQgBgPQgBgRAPgFQAJgDAMABQANABAEgBQAHgCgBgbQgBgZgFgNQgCgEgCgjQgCgggHgJQgIgLAFgHIAQgMIAPgMQAFgFAKgDQAMgEAMAFQANAGADANQADALACAoIACAwQAAANANAgQAHAcgHAaQgDAIgKgEQgMgFgIAIQgKAKAHAPIANAXQACAJgEgCQgGgCgCAEQgDAGAEAKIAIASQADAJgFBTQgFBLgCATQgBAFgDAAQgCAAgDgCg");
	this.shape_93.setTransform(147.1,-89.4,2.237,2.237);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag4AVQgEAAABACQAAADAGABQAQADAOgHQAGgDAXgRQAKgFAFgEQAJgHAGgDQAOgFAIgBQAEAAgCgDQgCgCgIAAQgIABgPAJQgJAGgNAJQgdARgFACQgKADgBAAQgGACgKgBg");
	this.shape_94.setTransform(-8.1,107.8,2.237,2.237);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFF3BB").s().p("Ag1AbQgGgBAAgDQgBAAABgBQAAAAAAAAQABgBAAAAQABAAABAAQAKABAGgCIALgDQAFgCAdgRIAWgPQAPgJAIgBQAIAAACACQACADgEAAQgIABgOAFQgGADgJAHIgPAJQgXARgGADQgJAFgLAAIgKgBg");
	this.shape_95.setTransform(-8.1,107.8,2.237,2.237);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA8gYQgCgDgIAAQgIABgPAJQgJAGgNAJQgXAPgLAEQgJADgCABQgFABgLgBQgEAAABACQAAADAGABQAQADAOgHQAHgDAWgRQAKgFAFgEQAJgGAGgDQANgGAJAAQAEgBgCgCg");
	this.shape_96.setTransform(-0.2,109.3,2.237,2.237);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFF3BB").s().p("Ag1AbQgGgBAAgDQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAABAAQALABAFgBIALgEQALgEAXgPIAWgPQAPgJAIgBQAIAAACADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgJAAgNAGQgGADgJAGIgPAJQgWARgHADQgJAFgLAAIgKgBg");
	this.shape_97.setTransform(-0.2,109.3,2.237,2.237);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAGgDQghAVgJACQgKAEgDABQgHABgNAAQgFAAABADQABACAGACQAUAEARgJQAKgEAbgVQALgGAHgFQALgIAIgEQAPgGALgBQAFAAgCgEQgDgDgKABQgJAAgTAMQgKAHgRALg");
	this.shape_98.setTransform(11.7,111.3,2.237,2.237);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFF3BB").s().p("AhCAhQgGgCgBgCQgBgDAFAAQANAAAHgBIANgFQAJgCAhgVIAbgSQATgMAJAAQAKgBADADQACAEgFAAQgLABgPAGQgIAEgLAIIgSALQgbAVgKAEQgMAGgNAAIgMgBg");
	this.shape_99.setTransform(11.7,111.3,2.237,2.237);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAGgDQghAVgJADQgLAEgDAAQgGACgNgBQgFAAABADQAAADAHABQAVAEAQgIQAGgDAfgWQALgHAGgEQALgJAIgDQARgHAKAAQAFgBgDgDQgCgDgKAAQgKABgTALQgDADgXAPg");
	this.shape_100.setTransform(21.8,113.9,2.237,2.237);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFF3BB").s().p("AhCAhQgHgBAAgDQgBgDAFAAQANABAGgCIAOgEQAJgDAhgVIAagSQATgLAKgBQAKAAACADQADADgFABQgKAAgRAHQgIADgLAIIgRAMQgfAWgGADQgLAFgOAAIgMgBg");
	this.shape_101.setTransform(21.8,113.9,2.237,2.237);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAGgDQghAWgIADQgLAEgDABQgGABgNAAQgFAAABADQABADAGABQAUADARgIQAIgFAMgIQALgKAFgEQALgHAGgFQALgIAIgEQAQgHAKgBQAGAAgDgEQgDgDgKABQgJABgTAMQgKAHgQAMg");
	this.shape_102.setTransform(36.2,115.6,2.237,2.237);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFF3BB").s().p("AhBAjQgGgBgBgDQgBgDAFAAQANAAAGgBIAOgFQAIgDAhgWIAagTQATgMAJgBQAKgBADADQADAEgGAAQgKABgQAHQgIAEgLAIIgRAMIgQAOIgUANQgNAGgOAAIgKgBg");
	this.shape_103.setTransform(36.2,115.6,2.237,2.237);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABBglQgKABgUANQgLAHgSAMQgiAYgKADQgLAEgDABQgHACgOAAQgGAAABADQABADAHABQAVADATgJQAJgEAegYQAYgTAOgGQARgIALgBQAGAAgDgEQgDgDgKABg");
	this.shape_104.setTransform(42.8,118,2.237,2.237);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFF3BB").s().p("AhGAlQgHgBgBgDQgBgDAGAAQAOAAAHgCIAOgFQAKgDAigYIAdgTQAUgNAKgBQAKgBADADQADAEgGAAQgLABgRAIQgOAGgYATQgeAYgJAEQgOAHgPAAIgLgBg");
	this.shape_105.setTransform(42.8,118,2.237,2.237);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAGgEQgGAEgQALQgPALgHADQgLAEgEABQgHACgOAAQgFAAABAEQAAADAIABQAWAEASgKQAIgFANgKQAMgLAGgEQAMgJAGgFQAMgJAIgFQASgIALgBQAFgBgDgDQgDgEgKABQgKABgUAOQgLAIgSANg");
	this.shape_106.setTransform(54.1,120.5,2.237,2.237);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFF3BB").s().p("AhGAoQgIgBAAgDQgBgEAFAAQAOAAAHgCIAPgFQAHgDAPgLIAWgPIAdgVQAUgOAKgBQAKgBADAEQADADgFABQgLABgSAIQgIAFgMAJIgSAOIgSAPIgVAPQgOAHgPAAIgLgBg");
	this.shape_107.setTransform(54.1,120.5,2.237,2.237);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAHgEQgiAagLAGQgNAFgCABQgIADgPABQgGABABADQABADAIAAQAYABATgLQAJgFAegbQAMgJAHgGQALgKAJgFQASgKAMgBQAGgBgEgDQgEgEgLACQgLACgUAQQgLAIgRAOg");
	this.shape_108.setTransform(63.7,122.2,2.237,2.237);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFF3BB").s().p("AhIAtQgIAAgBgDQgBgDAGgBQAPgBAIgDIAPgGQALgGAigaIAcgWQAUgQALgCQALgCAEAEQAEADgGABQgMABgSAKQgJAFgLAKIgTAPQgeAbgJAFQgSAKgVAAIgEAAg");
	this.shape_109.setTransform(63.7,122.2,2.237,2.237);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABNgxQgDgEgLADQgLADgTARQgLAJgQAQQgeAdgMAIQgMAGgDABQgIADgOADQgGABACADQABADAIAAQAYAAASgNQAJgHAbgdQALgLAGgGQALgLAJgGQASgMAKgCQAGgBgEgDg");
	this.shape_110.setTransform(73.6,123,2.237,2.237);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFF3BB").s().p("AhNAxQgCgDAGgBQAOgDAIgDIAPgHQAMgIAegdIAbgZQATgRALgDQALgDADAEQAEADgGABQgKACgSAMQgJAGgLALIgRARQgbAdgJAHQgSANgYAAQgIAAgBgDg");
	this.shape_111.setTransform(73.6,123,2.237,2.237);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABHg4QgMADgWATQgMALgSASQglAjgMAGQgOAIgDABQgIAEgRACQgGABABAEQACADAJAAQAbAAAUgOQAKgHAOgOQAMgOAGgGQANgMAHgHQAMgNAKgHQATgMAOgDQAGgCgEgEQgEgEgNAEg");
	this.shape_112.setTransform(86.5,122.2,2.237,2.237);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFF3BB").s().p("AhZA4QgBgEAGgBQARgCAIgEIARgJQAMgGAlgjIAegdQAWgTAMgDQANgEAEAEQAEAEgGACQgOADgTAMQgKAHgMANIgUATIgSAUQgOAOgKAHQgUAOgbAAQgJAAgCgDg");
	this.shape_113.setTransform(86.5,122.2,2.237,2.237);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABWg2QAHgBgEgEQgFgEgMADQgMADgWAVQgXAXgIAHQgkAlgNAHQgMAIgEABQgJAEgRADQgGABABAEQACADAJAAQAbAAAVgPQAMgJAegjQAGgEANgQQANgOAKgGQATgNANgEg");
	this.shape_114.setTransform(98.1,123.5,2.237,2.237);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFF3BB").s().p("AhZA7QgBgEAGgBQARgDAJgEQAEgBAMgIQANgHAkglIAfgeQAWgVAMgDQAMgDAFAEQAEAEgHABQgNAEgTANQgKAGgNAOIgTAUQgeAjgMAJQgVAPgbAAQgJAAgCgDg");
	this.shape_115.setTransform(98.1,123.5,2.237,2.237);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABWg2QAHgBgEgEQgFgEgMADQgMADgWAVQgXAXgIAHQgkAlgNAHQgMAIgEABQgJAEgRADQgGABABAEQACADAJAAQAbAAAVgPQAMgJAegjQAGgEANgQQANgOAKgGQATgNANgEg");
	this.shape_116.setTransform(109.4,123.5,2.237,2.237);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFF3BB").s().p("AhZA7QgBgEAGgBQARgDAJgEQAEgBAMgIQANgHAkglIAfgeQAWgVAMgDQAMgDAFAEQAEAEgHABQgNAEgTANQgKAGgNAOIgTAUQgeAjgMAJQgVAPgbAAQgJAAgCgDg");
	this.shape_117.setTransform(109.4,123.5,2.237,2.237);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAngqQgYAbgHAIQgpArgKAHQgNAJgFACQgJAEgSADQgGABABAFQACAEAKAAQAcAAAWgRQAKgIAOgRQAHgJANgQQAHgGANgSQANgPAKgIQAVgPANgEQAHgCgEgEQgFgFgNAEQgNAEgXAXg");
	this.shape_118.setTransform(121.2,123.9,2.237,2.237);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFF3BB").s().p("AhdBDQgBgFAGgBQASgDAJgEIASgLQAKgHApgrIAfgjQAXgXANgEQANgEAFAFQAEAEgHACQgNAEgVAPQgKAIgNAPQgNASgHAGIgUAZQgOARgKAIQgWARgcAAQgKAAgCgEg");
	this.shape_119.setTransform(121.2,123.9,2.237,2.237);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAygsQgfAcgJAJQg1AugNAHQgRAIgFACQgLAEgVACQgIAAACAFQABAGAMABQAiACAagRQANgJASgRQAKgKAQgRQAJgGARgTQARgRANgIQAQgKAHgDQAIgDALgCQAJgCgFgFQgFgGgQADQgQADgdAZg");
	this.shape_120.setTransform(136.6,122.8,2.237,2.237);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFF3BB").s().p("AhnBKQgMgBgBgGQgCgFAIAAQAVgCALgEIAWgKQANgHA1guIAoglQAdgZAQgDQAQgDAFAGQAFAFgJACQgLACgIADQgHADgQAKQgNAIgRARQgRATgJAGIgaAbQgSARgNAJQgYAPgdAAIgHAAg");
	this.shape_121.setTransform(136.6,122.8,2.237,2.237);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAZgFQgwApgRAJQgLAFgZACQgfACgQACQgIAAACAFQACAFALABQASACAZgCQAigCAMgIQAQgLAognIAagYQAQgQANgHQAQgJAHgDQAIgDAKgCQAIgBgEgGQgFgFgPADQgPADgdAXQgfAbgJAIg");
	this.shape_122.setTransform(142.3,125.3,2.237,2.237);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFF3BB").s().p("Ah0BDQgLgBgCgFQgCgFAIAAIAvgEQAZgCALgFQARgJAwgpIAogjQAdgXAPgDQAPgDAFAFQAEAGgIABQgKACgIADQgHADgQAJQgNAHgQAQIgaAYQgoAngQALQgMAIgiACIgUABIgXgBg");
	this.shape_123.setTransform(142.3,125.3,2.237,2.237);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ACBg/QgFgGgQADQgPADgdAXQgeAbgKAIQgVARgLAKQgVARgLAGQgLAFgZADQgfACgQABQgHABABAEQABAFALABQASACAagCQAhgCANgIQAMgIAQgQQAKgJASgRQAIgHASgQQAQgQANgHQAPgJAIgEQAIgDAKgCQAJgBgFgFg");
	this.shape_124.setTransform(155.5,127.9,2.237,2.237);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFF3BB").s().p("Ah1BDQgLgBgBgFQgBgEAHgBIAvgDQAZgDALgFQALgGAVgRQALgKAVgRIAogjQAdgXAPgDQAQgDAFAGQAFAFgJABQgKACgIADIgXANQgNAHgQAQIgaAXIgcAaQgQAQgMAIQgNAIghACIgYABIgUgBg");
	this.shape_125.setTransform(155.5,127.9,2.237,2.237);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhNA1QgfACgPABQgIABACAEQABAFALABQASACAZgCQAigCAMgIQANgIAQgQQAKgJARgRQAJgHARgQQARgQAMgHQAQgJAHgEQAIgDALgCQAIgBgFgFQgEgGgQADQgPADgdAXQgeAbgKAIQgzArgNAHQgLAFgaADg");
	this.shape_126.setTransform(168.7,130.9,2.237,2.237);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFF3BB").s().p("Ah1BDQgLgBgBgFQgCgEAIgBIAugDQAagDALgFQANgHAzgrIAogjQAdgXAPgDQAQgDAEAGQAFAFgIABQgLACgIADIgXANQgMAHgRAQIgaAXIgbAaQgQAQgNAIQgMAIgiACIgXABIgUgBg");
	this.shape_127.setTransform(168.7,130.9,2.237,2.237);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgpAtQgKAFgaADQgfACgPABQgIABACAEQABAFALABQASACAZgCQAigCAMgIQANgIAQgQQAKgJARgQQAJgIARgQQARgQAMgHQAQgJAHgDQAIgEALgBQAIgCgFgFQgEgGgQADQgPADgdAXQgeAbgKAIQgzArgOAHg");
	this.shape_128.setTransform(178.7,132.6,2.237,2.237);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFF3BB").s().p("Ah1BDQgLgBgBgFQgCgEAIgBIAugDQAagDAKgFQAOgHAzgrIAogjQAdgXAPgDQAQgDAEAGQAFAFgIACQgLABgIAEIgXAMQgMAHgRAQIgaAYIgbAZQgQAQgNAIQgMAIgiACIgXABIgUgBg");
	this.shape_129.setTransform(178.7,132.6,2.237,2.237);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhngLQgGgJgCgFQgFgLAAgBQADgBAEgFQALgLAEgFQAIgIACgNQgDgmAAgTQAAgjAdAHQAKACAKAFQAHACALgMQADgDAKgQQAHgNAGgEQAbgQgGAmQgDATgLAhQgCAJABAUQgBARgJAHQgDADgRAEQgVAFgCABQgcAKgMAWQgNAWAFAbQAHAmA3AjQAdATA6AgQAEADA1AZQAkARALAVQgLAHgMgJQgNgNgHgEQgKgGgogOQgTgGgYgPQgbgSgLgIQgbgTgNgJQgYgQgTgGQgkgNgMgHQgbgRAEgYAiiADQAEgCAKACQAIAAAFgDQAFgBADgJQADgKACgEQAHgBAHAHQACACADAFQADACADAE");
	this.shape_130.setTransform(-120.1,-55.1,2.237,2.237);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFF3BB").s().p("ACODNQgNgNgHgEQgKgGgpgOQgSgGgYgPIgmgaIgogcQgYgQgTgGQgkgNgMgHQgbgRAEgYIACgHQAEgCAKACQAIAAAFgDQAFgBADgJIAFgOQAHgBAHAHIAFAHQgGgJgCgFIgFgMQADgBAEgFIAPgQQAIgIACgNQgDgmAAgTQAAgjAdAHQAKACAKAFQAHACALgMQADgDAKgQQAGgNAHgEQAbgQgGAmQgDATgLAhQgCAJABAUQgBARgJAHQgDADgRAEIgXAGQgcAKgMAWQgNAWAFAbQAHAmA3AjQAdATA6AgIA5AcQAkARALAVQgFADgFAAQgHAAgGgFg");
	this.shape_131.setTransform(-120.2,-55.1,2.237,2.237);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhvAPQAhgCAGhHQAHhUAOgLQAOgMAUAVQASAVAQgMQAGgFARgjQAMgYAZACQAGAQgGARQgCADgOAZQgGAMgBAWQAAAXgFAIQgHAPgXAEQgYAEgKADQgYAIgPAqQgGABgFgEQAEAIgDAKQgJAfABAFQACAQAPASQAMAOAQAMQANAKAWALQAfAPAGADQAIAFAZARQAUANANAGQgfAHgtgbQgOgJg0gpQglgcgcgcQgNgNgEgPQgDgSgEgOAhBACQgBAAAAgBQgDgBgHgFQAIADADAEg");
	this.shape_132.setTransform(-143.2,-67.4,2.237,2.237);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFF3BB").s().p("AAoCwQgOgJg0gpQglgcgcgcQgNgNgEgPQgDgSgEgOIAJAFQAhgCAGhHQAHhUAOgLQAOgMAUAVQASAVAQgMQAGgFARgjQAMgYAZACQAGAQgGARIgQAcQgGAMgBAWQAAAXgFAIQgHAPgXAEQgYAEgKADQgYAIgPAqQgGABgFgEQAEAIgDAKQgJAfABAFQACAQAPASQAMAOAQAMQANAKAWALIAlASIAhAWQAUANANAGIgNACQgbAAgkgWg");
	this.shape_133.setTransform(-144.3,-67.4,2.237,2.237);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAijQAbAEAGgEQAEgCAdgWQAVgQAPgBQAHAPgWAWQgYAYACARQABAEAJAUQAHARgDAHQgDAHgSAJQgCABgZAJQgfALgNAHQgWAMgFAXQgGAcAFAUQAFAQATAbQAHAKAMAUQANASAKAMQAHAJAWAQQAUAPAHAKQgTALgpgqQgogygKgKQgngpgMgRQgYgjACghQAEgCAFgBQAoAEAOgvQAJg7AGgWQAGgXASACg");
	this.shape_134.setTransform(-160.5,-76.6,2.237,2.237);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFF3BB").s().p("AAVCrIgyg8QgngpgMgRQgYgjACghQAEgCAFABIAAgCQAoAEAOgvQAJg7AGgWQAGgXASACQAbAEAGgEIAhgYQAVgQAPgBQAHAPgWAWQgYAYACARQABAEAJAUQAHARgDAHQgDAHgSAJIgbAKQgfALgNAHQgWAMgFAXQgGAcAFAUQAFAQATAbIATAeQANASAKAMQAHAJAWAQQAUAPAHAKQgEADgFAAQgTAAgggig");
	this.shape_135.setTransform(-160.5,-76.6,2.237,2.237);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag8gXQADgGADgIQAHgTADgYQACgTgHgeQgHgfAAgQQALgCAnAOQAZAKARgVQARgeALgQQAXgeAEAjQADAVgOAhQgQAkAAAQQAAALAAANQgCAHgQAGQgPAEgIACQgNAEgJAFQgNAJgMASQgBACgTAeQgNAXACASQACANAPAaQAMATASASQAJAKAYAVQAPAOAMAWQAOAZgDARQgJgOgbgSQgcgUgJgKQgagbgaglQgYgigEgiQgCgTAGgRQAIgYASAEgAhRgHQAMgCAJgO");
	this.shape_136.setTransform(-171.5,-88.8,2.237,2.237);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFF3BB").s().p("AAbDHQgcgUgJgKQgagbgaglQgYgigEgiQgCgTAGgSQAIgXASAEIAGgOQAHgTADgYQACgTgHgeQgHgfAAgQQALgCAnAOQAZAKARgVQARgeALgQQAXgeAEAjQADAVgOAhQgQAkAAAQIAAAYQgCAHgQAGIgXAGQgNAEgJAFQgNAJgMASIgUAgQgNAXACASQACANAPAaQAMATASASIAhAfQAPAOAMAWQAOAZgDARQgJgOgbgSgAhRgDQAMgBAIgOIABgBIAAAAIgBABg");
	this.shape_137.setTransform(-171.5,-89.8,2.237,2.237);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhDAVQAVgtgDg9QgBgegKgQQgDgFgOgKQgMgKgCgHQgFgVAkAJQAUAEAcAKQAVACAOgYQAPgZAVAAQAFgRAKgHQALgHAAAZQAAALgHATQgIAYgBAGQgLA0gBACQgKAYghAFQgBAYgDALQgEAMgJASQgVAhgHAaQgJgHADgVQAFgagBgEQgHAAgGAFQAFAKgBAZQgBAZAEALQAEAKAPARQASAUACAFQAcAsAPAPQAGAHAVASQATARACAKQgYAEglgkQgYgYgUghQgRgagUgmQgVgqgLgV");
	this.shape_138.setTransform(-184.9,-101.6,2.237,2.237);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFF3BB").s().p("AAfDKQgZgYgUghQgRgagTgmIghg/IAQADQAVgtgCg9QgBgegLgQQgDgFgNgKQgNgKgBgHQgFgVAkAJQATAEAcAKQAWACAOgYQAPgZAVAAQAEgRAKgHQALgHAAAZQABALgHATQgJAYgBAGIgLA2QgKAYgiAFQgBAYgDALQgDAMgKASQgVAhgGAaQgKgHAEgVQAEgaAAgEQgHAAgHAFQAFAKgBAZQgBAZAEALQAEAKAQARIAUAZQAcAsAOAPIAcAZQATARACAKIgGAAQgXAAggggg");
	this.shape_139.setTransform(-185,-101.6,2.237,2.237);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAshyQgFAMgXAXQgQAUAAATQgBANABAcQAAAIgDARQgEAPABAIQACAIAHALQAFAFAKAKQAUAVAeAuQAdAnAMApQgkgpgQgeQgMgYgJgNQgMgQgRgOQgagVgGgGQgNgQACgXQAAAAAEgYQADgNgCgLQgBgFgHgRQgGgNAAgJIgEgPQgKgQgSgBQgdgCgHgDQgBgSAggLQARgFAbgJQAOgKAEgnQADglANgHQAUgMAKAnQAFAVADAfQADAJAHANQAFAMgFAMg");
	this.shape_140.setTransform(-205.4,-110.6,2.237,2.237);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFF3BB").s().p("AA8ClQgMgYgJgMQgMgRgSgNQgagVgFgGQgOgQADgXIAEgZQACgMgCgLQgBgGgHgQQgGgOABgJIgEgPQgLgPgSgCQgcgCgIgDQgBgRAggLIAtgPQAOgKAEgmQADgmANgHQATgMAKAoQAFAUAEAfQADAKAHANQAEAMgFAMQgFAMgXAWQgQAVgCATQAAAMACAcQAAAIgCARQgFAQACAIQABAIAIAKIAPAQQATAUAfAvQAdAnAMApQgkgqgQgeg");
	this.shape_141.setTransform(-206,-112,2.237,2.237);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Aheh2QAEgOAOgIQAWgOgEAmQgBARADAGQADAHAHgSQAGgPgEgoQgBgLgGgKQgKgRgBgBQgIgRAIgCQAFgCAUAAQAYgCAAAAQAIACAFAQQAMAggLAQQASgLABALQAAAHgEAQQgCAKAEANQAFANgCAKQgCAJgJANQgJAPgBAHQgEANADANQAAAGAEAQQAFAPAGAeQAHAZAPAOQAcAZAKALQATAUALAWQANAZADAPQgYgjgEgFQgSgYgRgNQgEgDgmgOQgWgJgEgWQgCgIABgUQABgSgDgJQgGgQgUgTQgKgLgbgPQgagPgKgNQgQgVALgRQAGgIASgLQAEgDAFgDAhghjQgBgLADgI");
	this.shape_142.setTransform(-222.1,-118,2.237,2.237);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFF3BB").s().p("ABeCvQgSgYgRgNQgEgDgmgOQgWgJgEgXQgCgHABgVQABgRgDgJQgGgRgUgSQgKgLgbgQQgagOgKgNQgQgWALgQQAGgIASgLQAEgOAOgJQAWgOgEAnQgBAQADAHQADAGAHgRQAGgPgEgoQgBgMgGgJIgLgSQgIgRAIgCQAFgCAUAAIAYgCQAIACAFAQQAMAggLAQQASgLABALQAAAHgEAQQgCAKAEANQAFAMgCALQgCAJgJANQgJAPgCAHQgDAMACANQAAAHAFAQQAFAPAGAeQAHAZAPAOQAcAZAKAKQATAVALAWQANAZADAPIgcgog");
	this.shape_143.setTransform(-222.5,-119.6,2.237,2.237);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ah7hHQgRgYALgfQADgIAagrQALgTACgDQALgMAMAFQANAGgEAUIgGAcQATABgFATQgEALgLASQgJASgDAMQgDAQAFASQALABAFALQAHARABACQAEAFALAGQAKAIAFAGQAJAMASAbQAPAYgDATQgVAFgMggQgRgkgJgDQgHAdAhAYQANAMAoARQBZAmAEAxQgegYgOgMQgYgUgVgNQgfgSgQgEQgRgCgHgCQgLgDgGgLQgGgPgCgEQgDgHgOgHQgQgJgEgDQgKgHgIgKQgOgTgCgaQABgiAAgS");
	this.shape_144.setTransform(-231.4,-120.3,2.237,2.237);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFF3BB").s().p("ABbCpQgZgUgVgNQgfgSgPgEQgSgCgGgCQgLgDgGgLIgJgTQgDgHgNgHQgQgJgFgDQgKgHgHgKQgPgTgBgaIAAg0IgCgFQgRgYAMgfQADgIAZgrIAOgWQALgMALAFQAOAGgFAUIgGAcQAUABgGATQgDALgLASQgKASgDAMQgDAQAFASQAMABAEALIAIATQAEAFALAGQALAIAEAGIAbAnQAQAYgDATQgWAFgMggQgQgkgJgDQgHAdAgAYQAOAMAnARQBZAmAEAxIgrgkg");
	this.shape_145.setTransform(-231.5,-121,2.237,2.237);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAHA4QACgDADgEQAJgOAJgTQAOgaAGgOQAGgMAAgEQACgJgIgGQgGgEgPAAQgNAAgIADQgSAIgfAmQghAoApARQAOAFAdAI");
	this.shape_146.setTransform(-141.8,-58.3,2.237,2.237);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFF3BB").s().p("AghAvQgpgRAhgoQAfgmASgIQAIgDANAAQAPAAAGAEQAIAGgCAJQAAAEgGAMIgUAoQgKATgIAOIgCALQgdgIgOgFg");
	this.shape_147.setTransform(-141.8,-58.2,2.237,2.237);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgNBBQATgCALgQQALgWAHgMQACgEALgKQAJgJABgJQAEgVgRgOQgUgQgMAKQgIAHgMAVQgEAGgXAPQgSALgFALQgEAOATASQAQAPAOAD");
	this.shape_148.setTransform(-156,-69.6,2.237,2.237);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFF3BB").s().p("AgMA9QgOgDgQgPQgTgSAEgOQAFgLASgLQAXgPAEgGQAMgVAIgHQAMgKAUAQQARAOgEAVQgBAJgJAJIgNAOIgSAiQgLAQgTACg");
	this.shape_149.setTransform(-156,-69.6,2.237,2.237);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgMBBQAdgpARgZQAhgzgkgJQgVgFgKAOQgHAHgMAWQgGAJgSATQgMAUAOAQQACACAMAFQAIADAAAJIAHAA");
	this.shape_150.setTransform(-168.4,-81.7,2.237,2.237);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFF3BB").s().p("AgMA7IgHAAQAAgJgIgDQgMgFgCgCQgOgQAMgUQASgTAGgJQAMgWAHgHQAKgOAVAFQAkAJghAzQgRAZgdApg");
	this.shape_151.setTransform(-168.4,-81.4,2.237,2.237);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgYA1QABgBABgBQAUgQAYgcQArgsgLgOQgIgKgeADQgYADgMAGQgNAGgJATQgJAPgCAPQgJAyAmgDgAghA7QAFgDAEgD");
	this.shape_152.setTransform(-177.2,-93.8,2.237,2.237);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFF3BB").s().p("Ag1AJQACgOAJgQQAJgSANgGQAMgHAYgCQAegDAIAJQALAOgrAsQgZAegVAQIgEAAQghAAAIgvg");
	this.shape_153.setTransform(-177.2,-94.6,2.237,2.237);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgRg3QgMACgEAcQgCAQgBAXQgDARAGATQAGAZARgBQAJAAADgLQABgBAGgRQACgGAEgKQAFgKACgFQAOgfAAgEQAGgZgSgHQgGgDgPACQgQACgEAAQAAgBACgFg");
	this.shape_154.setTransform(-191.5,-107.6,2.237,2.237);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFF3BB").s().p("AghArQgGgUADgRQABgXACgPQAEgdAMgBIACgEQgCAFAAACIAUgCQAPgCAGACQASAHgGAZQAAAEgOAfIgHAQIgGAPIgHASQgDALgJABIgBAAQgQAAgGgYg");
	this.shape_155.setTransform(-191.5,-105.9,2.237,2.237);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AADg/QgTgBgHAGQgDADgEAJQgEAIgHABIABACQgOgCAHAMQADAEAKALQAGAHAOAVQAOAeADAEQAOAQATgFQASgFgFgbQgKgfgCgHQgFghgBgEQgHgRgVgCg");
	this.shape_156.setTransform(-226.5,-114.2,2.237,2.237);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFF3BB").s().p("AADA0IgRgiQgOgVgGgHQgKgLgDgEQgHgMAOACIgBgCQAHgBAEgIQAEgJADgDQAHgGATABQAVACAHARQABAEAFAhQACAHAKAfQAFAbgSAFIgJABQgOAAgKgMg");
	this.shape_157.setTransform(-226.5,-114.2,2.237,2.237);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AACBAQAQADAJgNQAIgMAAgaQAAgJAEggQABgPgCgFQgDgEgOgFQgegLgGgBQgYgEAAAWQABAJAFAMQAHARABAEQACAGAAAMQAAAPACAGQADAQANAJQAAABABAAQAEADACACQAKAEALgB");
	this.shape_158.setTransform(-209.5,-111.5,2.237,2.237);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFF3BB").s().p("AACBAIgIgDIAGABIgFgEQgNgJgDgQQgCgGAAgPQAAgMgCgGIgIgVQgFgMgBgJQAAgWAYAEQAGABAeALQAOAFADAEQACAFgBAPIgEApQAAAagIAMQgHAKgKABIANACIgEABQgJAAgIgEg");
	this.shape_159.setTransform(-209.5,-111.5,2.237,2.237);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgPgvQAFAAANgBQAOgBAGACQAHAEACAKQABAGAAANQABAGACAKQACAKAAAIQABAPgCAEQgCAEgMADQgWAGgOgDQgWgEgCgUQgDgQAIgUQALgXAEgL");
	this.shape_160.setTransform(-244.8,-111.7,2.237,2.237);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFF3BB").s().p("AgNAxQgWgEgCgUQgDgQAIgUQALgXAFgLIABgCIASgBQAOgBAGACQAHAEACAKIABATIAEAQIABASQABAPgCAEQgCAEgMADQgOAEgKAAIgMgBg");
	this.shape_161.setTransform(-244.8,-111.7,2.237,2.237);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AADgxQgWAPgJAiQgHAXABAIQABAQAVACQAmAFAIgqQADgPgDgVQgCgMgEgEQgEgEgMgD");
	this.shape_162.setTransform(-127.4,-52.3,2.237,2.237);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFF3BB").s().p("AgMAxQgVgCgBgQQgBgIAHgXQAJgiAWgPIAJACQAMADAEAEQAEAEACAMQADAVgDAPQgIAmgfAAIgHgBg");
	this.shape_163.setTransform(-127.4,-52.3,2.237,2.237);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAgAOQAFgRgNgWQgOgYgRACQgIABgIAHQgIAIgDAIQgFALAFAIQADAEAKAKQADACAKAPQABADAFAHQACAHADACQARAIAKgXQAKgVgEgM");
	this.shape_164.setTransform(-27.5,-77,2.237,2.237);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFF3BB").s().p("AADAuQgDgCgCgHIgGgKIgNgRQgKgKgDgEQgFgIAFgLQADgIAIgIQAIgHAIgBQARgCAOAYQAMAUgDAPIADgMQAEAMgKAVQgHARgLAAQgEAAgFgCg");
	this.shape_165.setTransform(-27.5,-77,2.237,2.237);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgYAQQANAUAWgMQAZgNABgUQAAgLgKgFQgIgEgMACQgGABgGAHIgMALQgaAQAKAKg");
	this.shape_166.setTransform(81.5,-85.7,2.237,2.237);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFF3BB").s().p("AgYAQIgJACQgKgKAagQIAMgLQAGgHAGgBQAMgCAIAEQAKAFAAALQgBAUgZANQgJAFgGAAQgMAAgIgNg");
	this.shape_167.setTransform(81.5,-85.7,2.237,2.237);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AApghQgDgGgMAAQgDAAgPACQgFAAgMAAQgNgBgGABQgLACgFAHQgGAHADALQADAJAHABQAGACAKAAIACgCQACABAVAbQAQATAQgLQAIgFADgKQAEgKgDgJQgEgMAAgDQAAgHgBgDQAAgHgCgDg");
	this.shape_168.setTransform(161.3,-88.7,2.237,2.237);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFF3BB").s().p("AAEAcQgVgbgCgBIgCACQgKAAgGgCQgHgBgDgJQgDgLAGgHQAFgHALgCQAGgBANABIARAAIASgCQAMAAADAGQACADAAAHIABAKQAAADAEAMQADAJgEAKQgDAKgIAFQgGAEgGAAQgKAAgKgMg");
	this.shape_169.setTransform(161.3,-88.7,2.237,2.237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263.5,-168.8,527.1,337.6);


(lib.trex_backLegupperL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhjDaQgBAVAUgSQAUgSgMgMQgYgYgFgIQgOgYAQgXQArg+AqgeQARgNBNgvQAUgNBEgYQBAgWALgJQAYgTAYhJQAZhQgpgCQgngChNA3QhLA7gQAGQgWAJhKA5QhGA1gTATIgWAVQgJAWgWASQgSAOgHAGQgMAJgOAOQgcAZgOANQgaAYgDAOQgHAcgBAKQAAAPAKASQAPAcACADQALANAWAFQAlAHATABQAgACAVgKQAUgKAGgRQAEgUACgJQAEgNgNgPQAAAAgBgBQgQgOAAgDQgDgJgBgJQAAgBAAgBQAAAAAAAAQgBgNAGgOIAHgLQgMAWAAAQAiBCYQACAQAPARQACADACAC");
	this.shape.setTransform(0,0,2.237,2.237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("Ai4EaQgTgBglgHQgWgFgLgNIgRgfQgKgSAAgPQABgKAHgcQADgOAagYIAqgmQAOgOAMgJIAZgUQAWgSAJgWIAWgVQATgTBGg1QBKg5AWgJQAQgGBLg7QBNg3AnACQApACgZBQQgYBJgYATQgLAJhAAWQhEAYgUANQhNAvgRANQgqAegrA+QgQAXAOAYQAFAIAYAYQAMAMgUASQgUASABgVIABgGQAAgKgKgMIgEgFQgPgRgCgQIAAAAIAAAAIAAgFQAAgLAFgLIAHgLQgMAWAAAQQAAgQAMgWIgHALQgFALAAALIAAAFIAAAAIAAAAIAAACQABAJADAJQAAADAQAOIABABQAKAMAAAKIgBAGIgGAdQgGARgUAKQgRAJgaAAIgKgBg");
	this.shape_1.setTransform(0,0,2.237,2.237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.3,-64.3,136.6,128.6);


(lib.trex_backLegmidR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AEVCJQgggPhNgvQhUg0gcgSQg6ghgdgRQg0gegUgTQgcgZgkgiQgngmgLgNQgMgPgCgCQgFgDgIACQgOACgCABQgHADgBAJQgBAHAAAMQgBALgMAOQgHAIgUAZQgPATgJAHQgKAIAIAKQAFAGALAOQAGANAEADQAFAGAKAAQAIAAAsgEQArgDARAHQApAQB3A3QCRBGApAeQAjAaAwAgQApAbAGAFQALAJAKgDQALgEAFgRQAIgeAAgDQACgPgKgEQgDgBgLACQgKABgegPg");
	this.shape.setTransform(-1.5,-4.5,2.237,2.237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AEmDZIgvggQgwgggjgaQgpgeiRhGQh3g3gpgQQgRgHgrADIg0AEQgKAAgFgGQgEgDgGgNIgQgUQgIgKAKgIQAJgHAPgTIAbghQAMgOABgLQAAgMABgHQABgJAHgDIAQgDQAIgCAFADIAOARQALANAnAmQAkAiAcAZQAUATA0AeIBXAyIBwBGQBNAvAgAPQAeAPAKgBQALgCADABQAKAEgCAPIgIAhQgFARgLAEIgFABQgIAAgIgHg");
	this.shape_1.setTransform(-1.5,-4.5,2.237,2.237);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AASAnQALgIAVgLQAOgJgDgJQgEgHgLgHQgPgIgJgGQgRgOgGgEQgPgGgLANQgJAKgJAUQgIAQgGAGQgGAGAOAIQAKAGAOAEQAGACAOAFQALADAOgKg");
	this.shape_2.setTransform(80.9,44.1,2.237,2.237);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AgHAuIgUgHQgOgEgKgGQgOgIAGgGQAGgGAIgQQAJgUAJgKQALgNAPAGQAGAEARAOQAJAGAPAIQALAHAEAHQADAJgOAJQgVALgLAIQgLAIgIAAIgGgBg");
	this.shape_3.setTransform(80.9,44.1,2.237,2.237);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AF1CEQAHAEALAJQAKAGAHAAQAIgBACgIQABgGgEgIQgHgRgDgEQgLgOgWgEQgYgFgZgMQgSgJgjgUQgxgegdgPQg0gegTgHQgMgFg8ggQg3gfgTgGQgMgDgIgNQgFgHgiACQg+AGgLAAQgkgBgygOQgwgMgXAIQgSAMgIABQgMACgSAOQgVAQgGADQgOAGgEAHQgGAJAMAHQAEACAUAJQANAHAHAIQAGAHACAIQACAEAPABQAMAAASADQAPACALgFQAKgEAIgHQAHgEAQABQDmAXAsAPQAXAJCOA6QCGA4AIACQAGACAMAAQAJABAIAEg");
	this.shape_4.setTransform(-1.1,5.7,2.237,2.237);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AGHCRIgSgNQgIgEgJgBQgMAAgGgCIiOg6QiOg6gXgJQgsgPjmgXQgQgBgHAEQgIAHgKAEQgLAFgPgCQgSgDgMAAQgPgBgCgEQgCgIgGgHQgHgIgNgHIgYgLQgMgHAGgJQAEgHAOgGQAGgDAVgQQASgOAMgCQAIgBASgMQAXgIAwAMQAyAOAkABQALAAA+gGQAigCAFAHQAIANAMADQATAGA3AfQA8AgAMAFQATAHA0AeIBOAtQAjAUASAJQAZAMAYAFQAWAEALAOQADAEAHARQAEAIgBAGQgCAIgIABIgBAAQgHAAgJgGg");
	this.shape_5.setTransform(-1.1,5.7,2.237,2.237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.7,-55.6,191.6,111.3);


(lib.trex_backLegmedL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AB6lnQgSARgDASQgDAXgCAdQgBAZABANQAAAFgIATQgHATABAUQABAKAICaQAICPACAaQACAVgDBTQgCBKADALQADAKAGANQACAKgQANQgCABgXAdQgKAMgPgKQgcgPgLgIQgRgOAAgQQAAgQAEgTQABgEAHggQAFgPAAgkQABgsADgWQAEggABhIQABg4gBgsQgBhNgNgwQgCgTgZgqQgYgpgRgSQgbgagOgPQgagbABgOQAAgrAAgCQAFgfAcgMQALgFALAMQAQARAIAEQALAFANAJQANAIASABQAUABAggFQARgDAZgFQATgCAFACQAJABAEALQADAIgOANg");
	this.shape.setTransform(0,0,2.237,2.237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AAuGtQgcgPgLgIQgRgOAAgQQAAgQAEgTIAIgkQAFgPAAgkQABgsADgWQAEggABhIQABg4gBgsQgBhNgNgwQgCgTgZgqQgYgpgRgSIgpgpQgagbABgOIAAgtQAFgfAcgMQALgFALAMQAQARAIAEQALAFANAJQANAIASABQAUABAggFIAqgIQATgCAFACQAJABAEALQADAIgOANQgSARgDASQgDAXgCAdQgBAZABANQAAAFgIATQgHATABAUIAJCkQAICPACAaQACAVgDBTQgCBKADALQADAKAGANQACAKgQANIgZAeQgGAGgHAAQgFAAgHgEg");
	this.shape_1.setTransform(0,0,2.237,2.237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-98,61.9,196.1);


(lib.trex_backLegfootR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgthCQAIgGAOANQAIAHAJAKQADADAQAHQASAJAGAJQAEAHAKANQAHAOABAKQAAAIACAMQABAJgDAFQgDAGgEgDQgDgDgFgMQgIgRgDgGQgIgNgOgLQgLgIAAAAQgJgBgKgDQgqgPABgPQAAgSAPgLg");
	this.shape.setTransform(-9.6,-65.1,2.237,2.237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AA0BDQgDgDgFgMIgLgXQgIgNgOgLQgLgIAAAAQgJgBgKgDQgqgPABgPQAAgSAPgLQAIgGAOANQAIAHAJAKQADADAQAHQASAJAGAJIAOAUQAHAOABAKIACAUQABAJgDAFQgCAEgCAAIgDgBg");
	this.shape_1.setTransform(-9.6,-65.1,2.237,2.237);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAPghQgIAAgIAEQgMAGgHAJQgHAKgEAMQgEAOAAAKQAAAFAGgJQAJgOALgEQAJgCAKAAQAIAAAGgDQARgJgHgPQgDgJgCgCQgDgDgLAAg");
	this.shape_2.setTransform(8.2,71.2,2.237,2.237);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AgjAgQAAgKAEgOQAEgMAHgKQAHgJAMgGQAIgEAIAAQALAAADADIAFALQAHAPgRAJQgGADgIAAQgKAAgJACQgLAEgJAOQgEAGgBAAIgBgCg");
	this.shape_3.setTransform(8.2,71.2,2.237,2.237);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAdgTQgLgBgEgLQgEgJgJACQgFABADAAQAEAAgHADQgIADAAAGQgBAIgCADQgEAEgFADQgFACgDAEQgGAEgBADQgBAGAIAIQAGAFAGAKQAFAGAIgDQAHgDABgKQACgLAGgBQAGgCAIgCQAHgCACgFQAGgHABgEQADgIgNgCg");
	this.shape_4.setTransform(21.2,63.4,2.237,2.237);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgUAjQgGgKgGgFQgIgIABgGQABgDAGgEQADgEAFgCQAFgDAEgEQACgDABgIQAAgGAIgDQAHgDgEAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAJgCAEAJQAEALALABQANACgDAIQgBAEgGAHQgCAFgHACIgOAEQgGABgCALQgBAKgHADIgFABQgFAAgDgEg");
	this.shape_5.setTransform(21.2,63.4,2.237,2.237);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgOgdQgHACABAKQABAMgCAEQgCABgJAEQgFABAEAHQADAGACAJQADAGALACQAOACAGgCQAJgCAAgJQAAgIAEgIQAEgIABAAQACgCAGgJQAFgJgBgEQgBgFAAAAQgFgBgLgCQgOgDgFABQAAAAgOAFg");
	this.shape_6.setTransform(29.4,51.9,2.237,2.237);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AgOAjQgLgCgDgGQgCgJgDgGQgEgHAFgBQAJgEACgBQACgEgBgMQgBgKAHgCIAOgFQAFgBAOADIAQADIABAFQABAEgFAJIgIALIgFAIQgEAIAAAIQAAAJgJACIgGABIgOgBg");
	this.shape_7.setTransform(29.4,51.9,2.237,2.237);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AglglQgGADAJAJIAMAMQACADAFAHQAFAGAAAKQAAADgFAOQgDAGAIAGQAGAEAGAHQAGADAGgFQAGgEALgEQAJgEAAgMQgBgLgFgHQgGgHAAgDQAAgGADgFQAEgFAAgFQABgGgDgJQgFgMAAAAQgBgFgBABQgFAEgJAHQgMAIgFgBQgJgCgIAAQgHAAgBgCQAAgBgHADg");
	this.shape_8.setTransform(28.5,33.8,2.237,2.237);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AACA1IgMgLQgIgGADgGQAFgOAAgDQAAgKgFgGIgHgKIgMgMQgJgJAGgDQAHgDAAABQABACAHAAQAIAAAJACQAFABAMgIIAOgLQABAAAAAAQAAAAAAABQABAAAAABQAAABAAABIAFAMQADAJgBAGQAAAFgEAFQgDAFAAAGQAAADAGAHQAFAHABALQAAAMgJAEQgLAEgGAEQgEADgDAAIgFgBg");
	this.shape_9.setTransform(28.5,33.8,2.237,2.237);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAWgzQgBgDgKADQgHACgEAJQgDAKgLADQgIADgMABQgIABgHAEQgEADAIAFQAMAHABABQADACAMAHQAKAIgBAIQgBALABADQABAGAFAEQAFAEAKACQAMACAEgEQAMgHAEgEQAKgKgGgHQgDgDgMgKQgHgGgBgGQgBgEgFgRQgDgNACgFQAEgIgBgCg");
	this.shape_10.setTransform(23.3,13.2,2.237,2.237);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AANA1QgKgCgFgEQgFgEgBgGIAAgOQABgIgKgIQgMgHgDgCIgNgIQgIgFAEgDQAHgEAIgBQAMgBAIgDQALgDADgKQAEgJAHgCQAKgDABADQABACgEAIQgCAFADANIAGAVQABAGAHAGIAPANQAGAHgKAKQgEAEgMAHQgDADgGAAIgHgBg");
	this.shape_11.setTransform(23.3,13.2,2.237,2.237);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AiGiYQgMAGABAKQACAIAJAIQAFAFAGAGQAFAEALAAQAGABAJgEQAEgDAGAGQAIAKAXAkQAYAmADALQACAHADARQAFARAJAKQAGAJAJAJQAHAHAGAMQAAABAVAjQAMAWAAAJQAAAOAIANQAJARARAAQAgAAAOgbIAKgWQADgMgNgIQgSgJgHgEQgKgFgFgLQgEgJgBgSQAAgQgEgFQgZgqgOgIQgogdgLgTQgIgNgHgXQgHgXACgHQAAgBAJgEQAEgCgJgPQgKgWgEgIQgHgMgOgCQgOgCgaAOQgcASgMAFg");
	this.shape_12.setTransform(-7,-35.5,2.237,2.237);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("ABACsQgIgNAAgOQAAgJgMgWIgVgkQgGgMgHgHIgPgSQgJgKgFgRIgFgYQgDgLgYgmQgXgkgIgKQgGgGgEADQgJAEgGgBQgLAAgFgEIgLgLQgJgIgCgIQgBgKAMgGQAMgFAcgSQAagOAOACQAOACAHAMIAOAeQAJAPgEACIgJAFQgCAHAHAXQAHAXAIANQALATAoAdQAOAIAZAqQAEAFAAAQQABASAEAJQAFALAKAFIAZANQANAIgDAMIgKAWQgOAbggAAQgRAAgJgRg");
	this.shape_13.setTransform(-7,-35.5,2.237,2.237);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAjgeIgRABQgFgEgOAIQgMAGgPAMQgOAJgFAHQgKALAAALQAAACAEgDQAJgGAJgEQAKgEALgGQAIgEAGADQAZAIAKgEQAGgBAHgGQAHgGACgHQADgJgJgHQgIgIgIABg");
	this.shape_14.setTransform(-14,73.3,2.237,2.237);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("Ag5AfQAAgLAKgLQAFgHAOgJQAPgMAMgGQAOgIAFAEIARgBQAIgBAIAIQAJAHgDAJQgCAHgHAGQgHAGgGABQgKAEgZgIQgGgDgIAEIgVAKQgJAEgJAGIgDABIgBAAg");
	this.shape_15.setTransform(-14,73.3,2.237,2.237);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAjgmQgJgEgGANQgGAQgLACQgIACgIAHQgIAEgJABQgNABgBAFQgBADAHALQAEAGAFAKQAGAFAPgLQAJgJAWgOQARgKACgKQADgNAAgEQAAgFgKgGg");
	this.shape_16.setTransform(4.3,66.2,2.237,2.237);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AgdAnIgJgQQgHgLABgDQABgFANgBQAJgBAIgEQAIgHAIgCQALgCAGgQQAGgNAJAEQAKAGAAAFQAAAEgDANQgCAKgRAKIgfAXQgLAHgFAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_17.setTransform(4.3,66.2,2.237,2.237);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLg1QgBgBAAgBQAFAAgEACQADAEAOAHQAWAKgCASQgBAKgGAUQAAAPgNAMQgKALgMABQgJABgBgGQAAgBADgQQACgLABgFQABgKAGgIQAEgJgEgVQgFgTAFgCQABAAABgBg");
	this.shape_18.setTransform(19.8,52.3,2.237,2.237);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AgaAyIADgRIADgQQABgKAGgIQAEgJgEgVQgFgTAFgCIACgBIgBgCQAFAAgEACQADAEAOAHQAWAKgCASQgBAKgGAUQAAAPgNAMQgKALgMABIgBABQgIAAgBgGg");
	this.shape_19.setTransform(19.8,52.3,2.237,2.237);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Agqg7QgHABAIAJQAMAPAAABQACAFAOAVQAMAUAAAHQAAAPABAGQAAAMAGAEQANAIABAAQAHADAGgFQAJgJACgEQAEgKgEgUQgDgegCgPQgEgbgOgHQgOgIgTACQgWAFgIABg");
	this.shape_20.setTransform(18.5,29.1,2.237,2.237);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AAUBBIgOgIQgGgEAAgMIgBgVQAAgHgMgUIgQgaIgMgQQgIgJAHgBIAegGQATgCAOAIQAOAHAEAbQACAPADAeQAEAUgEAKQgCAEgJAJQgEADgFAAIgEgBg");
	this.shape_21.setTransform(18.5,29.1,2.237,2.237);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AguhFQAOAjADAPQABAHADAZQAFAZAHALQAIANACACQACABAJACQARADAGAAQAOgBABgMQACgOgEgMQgGgMgRgTQgHgHgegbQgXgTgHgQg");
	this.shape_22.setTransform(8.9,-2,2.237,2.237);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AAIBDIgLgDIgKgPQgHgLgFgZIgEggQgDgPgOgjQAHAQAXATQAeAbAHAHQARATAGAMQAEAMgCAOQgBAMgOABIgCAAQgGAAgPgDg");
	this.shape_23.setTransform(8.9,-2,2.237,2.237);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgHgFQADAAADABQABAAAGgCQAjgNAIgJQAEgFAAAIQgBAJgDAKQgFAKgDAEQgFAHgNAFQgSAIgFACQgJACgNgEQgegJAAgOQAAgFAJgHQAJgJAAAGQgBAFAMAAQAGAAAKAAg");
	this.shape_24.setTransform(27.9,-25.2,2.237,2.237);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("AgWAcQgegJAAgOQAAgFAJgHQAJgJAAAGQgBAFAMAAIAQAAIAGABQABAAAGgCQAjgNAIgJQAEgFAAAIQgBAJgDAKIgIAOQgFAHgNAFIgXAKIgHABQgHAAgIgDg");
	this.shape_25.setTransform(27.9,-25.2,2.237,2.237);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAZAAQAEADgDAGQAAAAABAMQAAAGgLgCQgSAAgIAAQgOgBAAgNQAAgIACgLQACgHgEgFQgHgJATALQAXANADABQAHABAEADg");
	this.shape_26.setTransform(13.8,-27.9,2.237,2.237);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF3BB").s().p("AAQAZIgaAAQgOgBAAgNQAAgIACgLQACgHgEgFQgHgJATALQAXANADABQAHABAEADQAEADgDAGIABAMQAAAEgFAAIgGAAg");
	this.shape_27.setTransform(13.8,-27.9,2.237,2.237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,-81.5,81.6,163);


(lib.trex_backLegfootL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AguAYIgCACQgBgOAPgLQAEgBAYgMQA0gaADgBQABAGgJAKQgFAFgJAIQgJAJgSAQQAAACgIANQgFAJgIACQgKADgHgFQgIgFAAgKQAAAAABgBIAAABg");
	this.shape.setTransform(48.2,-14.6,2.237,2.237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AgmAmQgIgFAAgKIABAAIAAgBIgBABIgCACQgBgOAPgLIAcgNIA3gbQABAGgJAKIgOANIgbAZIgIAPQgFAJgIACIgHABQgGAAgEgDgAguAXIABgBIAAABgAguAXg");
	this.shape_1.setTransform(48.2,-14.4,2.237,2.237);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAog4QgFADgOgCQgPgBgGACQgRAIgJAVQgMAagDALQgIAdALAKQgBgtA3gFQAOgBAEgCQAFgEABgOQADgLABgHQADgOgFgCg");
	this.shape_2.setTransform(-39,47.9,2.237,2.237);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AgpAPQADgMAMgZQAJgWARgIQAGgCAPACQAOACAFgDIACABQAFADgDAOIgEASQgBAOgFADQgEACgOABQg3AGABAtQgLgKAIgdg");
	this.shape_3.setTransform(-39,47.3,2.237,2.237);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAPALQgBAEgBAWQgJABgIgDQgKgEgEgHIgBABQACgYACgEQAEgVAJgHQgBAMAGAGQAIAGAKgFQABAIgHAPg");
	this.shape_4.setTransform(38.2,-2.1,2.237,2.237);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AgEAgQgLgEgEgHIgBABIAEgcQAEgVAJgHQgBAMAGAGQAIAGALgFQABAIgHAPIgCAaIgEABQgIAAgFgDg");
	this.shape_5.setTransform(38.4,-1.5,2.237,2.237);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AADgjQgCAEgBAHQgBAFgFAEQgJAGgMADQgJAAgEAAQgHABgEAFQgIALAHAOQAHAMANAGQANAHAJgIIARgQQAFgCAbgFQAXgHgIgMQgCgDgJgFQgJgFgCgDQgEgFgBgKQgBgLgDgDIAAgBQgKAAgDABQgEABgDAJg");
	this.shape_6.setTransform(-18.5,34.9,2.237,2.237);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("AggArQgNgGgHgMQgHgOAIgLQAEgFAHgBIANAAQAMgDAJgGQAFgEABgFIADgLQADgJAEgBQADgBAKAAIAAABQADADABALQABAKAEAFQACADAJAFQAJAFACADQAIAMgXAHQgbAFgFACIgRAQQgEAFgHAAQgFAAgGgEg");
	this.shape_7.setTransform(-18.5,34.9,2.237,2.237);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgagsQgNAHADAUQADARAKAMQAKANANAKQAQALAOAAQgMgMgFgOQgEgMAAgQQABgMgBgFQgBgIgIgDQAAAAgNgDQgIgBgFgEQgBgBAAAAIACAAQAAAAgBABg");
	this.shape_8.setTransform(40,14,2.237,2.237);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AADAjQgNgKgJgOQgKgLgDgRQgDgUAMgIQAGAFAHABIANADQAJADABAIIgBAQQAAARAFAMQAEANANANQgPAAgQgLg");
	this.shape_9.setTransform(39.2,14,2.237,2.237);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLgYQgFAIgNAKQgQAMgDADQgMAOgBAKQAAALAMAOQALALANgCQAMgDAIgMQAFgOADgFQAGgKAKgFQAFgDAUgGQARgGABgHQAAgEgPgJQgSgMgCgCQgCgDgIgRQgFgNgFgCQgFADgFABQgDACAAAKQAAASgFAIg");
	this.shape_10.setTransform(1.6,19.9,2.237,2.237);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AgxA5QgMgNAAgLQABgLAMgNIATgPQANgLAFgIQAFgHAAgSQAAgLADgCQAFAAAFgDQAFACAFANIAKATIAUAOQAPAKAAADQgBAHgRAHIgZAIQgKAFgGAKIgIATQgIANgMACIgEABQgLAAgJgKg");
	this.shape_11.setTransform(1.6,19.9,2.237,2.237);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAmguQgSARgOAWQgGALgNAWQgOARgXAAIgIAEQAUAKADABQALACASgHQAQgIANgQQADgDALgTQAFgGABgBQADgFAGgOQADgHAJgJQAEgEgEgMQgEgOgWATg");
	this.shape_12.setTransform(71.1,-28.1,2.237,2.237);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("AgnA6IgXgLIAJgEQAXAAANgRIATghQAOgWATgRQAVgTAFAOQADAMgDAEQgJAJgDAHIgJATIgGAHIgOAWQgNAQgQAIQgOAFgJAAIgHAAg");
	this.shape_13.setTransform(71.9,-28.1,2.237,2.237);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AB3gjQAJgGAFgGQAFgGAYgJQASgGgDgMQgEgRgHgQQgIgTgIgJQgdghgcAJQgMAFgEAUQgDALgDAUQgDAKgEAEQgDADgOAMQgQAQhZBBQgLAJgbAdQgWAXgLAEQgRADgGABQgIADgIALQgSAcASAWQAHAJAJAPQAIAMAPgDQAMgDAQgdQAQgfAIgCQAFgBANgCQAJgCAJgEQAFgCAogyQApguAQgGQAngMATgMg");
	this.shape_14.setTransform(45.8,-21.8,2.237,2.237);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AiYCeQgJgPgHgJQgSgWASgcQAIgLAIgDIAXgEQALgEAWgXQAbgdALgJQBZhBAQgQIARgPQAEgEADgKIAGgfQAEgUAMgFQAcgJAdAhQAIAJAIATQAHAQAEARQADAMgSAGQgYAJgFAGQgFAGgJAGQgTAMgnAMQgQAGgpAuQgoAygFACQgJAEgJACIgSADQgIACgQAfQgQAdgMADIgGABQgKAAgHgKg");
	this.shape_15.setTransform(45.8,-21.8,2.237,2.237);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAlggIADAAQACgJgKACQgJABgFAFQgCADgGAHQgEAGgEAEQgKAJgLACIgPABQgJAAgDADQgEAIAGAUQADAIADACQAEACAIgCQAIgCAPgFQAIgCATgCQAWgFACgRQACgHgFgPQgDgMgFgFIAAAAIgDgCQACABABABg");
	this.shape_16.setTransform(-30.2,30.5,2.237,2.237);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AgmAoQgDgCgDgIQgGgUAEgIQADgDAJAAIAPgBQALgCAKgJIAIgKIAIgKQAFgFAJgBQAKgCgCAJIgDAAIgDgCIADACIAAAAQAFAFADAMQAFAPgCAHQgCARgWAFIgbAEIgXAHIgHABIgFgBgAAlggIgDgCIADACg");
	this.shape_17.setTransform(-30.2,30.5,2.237,2.237);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAqAcQgDgHAAgOQABgSAAgIQABgSgMADQgRAIgHACQgFABgWgBQgWgBgFAFQgGAGAFASQAEATAIAGQAGAEAGgDQAEgBAGgHQAGgGAEgCQAEgCAGADQAIACAMAKQAJAGAJgFQADgBACgCIgCAGQgCgBgBgCg");
	this.shape_18.setTransform(-50.5,36,2.237,2.237);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("AgjAfQgIgGgEgTQgFgSAGgGQAFgFAWABQAWABAFgBQAHgCARgIQAMgDgBASIgBAaQAAAOAEAHQgKAFgJgGQgMgKgIgCQgHgDgDACQgEACgGAGQgGAHgEABIgEACQgEAAgEgDgAAuAeIAEgDIgCAGIgCgDgAAuAeIAAAAg");
	this.shape_19.setTransform(-51.3,35.6,2.237,2.237);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgqBEQALALANgRQAOgWAEgFQAGgLAPgMQATgNAFgFQALgLgGgRQgGgQgPgEIAAgEQgEAHgLAMQgLANgDAGQgLATgaARQgJAGgCAFQgDAFABAJQABAUAHAHg");
	this.shape_20.setTransform(-9.9,16.2,2.237,2.237);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AgqA9QgHgHgBgUQgBgJADgFQACgFAJgGQAagRALgTIAOgTQALgMAEgHIAAAEQAPAEAGAQQAGARgLALQgFAFgTANQgPAMgGALIgSAbQgIALgHAAQgFAAgEgFg");
	this.shape_21.setTransform(-9.9,17.8,2.237,2.237);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA1gaQACgGgmAAQgPAAgEABQgMACgIAGQgOALgIARQgIASgBARQAGAAALgKQAMgLAFgCQATgGAVAGQAQAEACAAQAJAAADgLQAFgcgDgIQAAAAAAABIAAgCQAAAAAAABg");
	this.shape_22.setTransform(-73.9,38.3,2.237,2.237);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AgtACQAJgRANgLQAJgHALgCIAUgBQAmAAgCAGIgBABIAAgCIABABIgBgBIAAACIABgBQADAIgGAcQgCALgKAAIgSgEQgUgGgTAHQgFACgMALQgLAJgGABQAAgRAIgSg");
	this.shape_23.setTransform(-73.9,39.1,2.237,2.237);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAtgnQgFAHgSACQgWADgCABQgmAMgFATQgDAKAIAOQAHAQALgBQAHAAAJgQQAIgSADgDQARgKAIgHQAPgNABgOg");
	this.shape_24.setTransform(7.9,0.3,2.237,2.237);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("AgoAbQgIgOADgLQAFgSAmgNIAYgEQASgCAFgGIABACQgBANgPANIgZARQgDADgIATQgJAPgHABIAAAAQgLAAgHgPg");
	this.shape_25.setTransform(7.9,0.8,2.237,2.237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.1,-60.4,174.1,121.4);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000CC").ss(3,1,1).p("AFUAAQAACNhkBjQhkBkiMAAQhmAAhRg2QgdgTgbgbQhkhjAAiNQAAiMBkhjQBjhkCMAAQBkAABQAzQAfAUAdAdQBkBjAACMg");
	this.shape.setTransform(-1.1,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("Ai2EeQgegTgbgbQhjhjgBiNQABiMBjhjQBjhjCMAAQBkAABPAyQAgAUAdAdQBkBjgBCMQABCNhkBjQhjBjiNAAQhmAAhQg1g");
	this.shape_1.setTransform(-1.1,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.6,-36.2,71,71);


(lib.trex_tailbase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trex_tailend();
	this.instance.parent = this;
	this.instance.setTransform(293.6,33.8,0.687,0.687,0,0,0,-115,-65.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAfgfQADAHADABQAVAIAEgIQAEgGAEgEQAFgEgBAFQgBALgUAMQgMAHgDACQgFABADAFQACAEAGAFQAEAFgCAHQgBAEAAANQAAALgDAEQgFAIgCAEQgDAFgHgEQgFgEgJgKQgIgJgDgCQgJgFgMgBQgOgBgHAFQgOALABgWQgCgQAAgJQgBgOAHgEQANgFACABIAAgBQACgDgEgFQgHgHgDgEQgHgIgEgJQgFgMADgEQADgDgCAAIAFgDQAFgDAKAOQACAEAGAMQADAHAHABQAJACACABQACAAAEgDQADgBACgIQAAgHAFAAQAHgBAEABQAGACADAGQABACAFAMg");
	this.shape.setTransform(272.3,24.7,1.536,1.536);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3BB").s().p("AAUBIQgFgEgJgKQgGgJgFgCQgKgFgMgBQgOgBgHAFQgOALABgWIgCgZQgBgOAIgEQAMgFACABIABgBQABgDgEgFIgKgLQgGgIgFgJQgFgMAEgEQAAgBABgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIAFgDQAGgDAJAOIAJAQQADAHAGABIALADQADAAAEgDQACgBADgIQACgHADAAQAHgBADABQAGACAEAGIAFAOQADAHAEABQAVAIAEgIQADgGAFgEQAEgEAAAFQgBALgUAMIgQAJQgFABADAFQADAEAFAFQAEAFgBAHQgBAEAAANQgBALgDAEIgGAMQgCADgDAAQgCAAgDgCg");
	this.shape_1.setTransform(273.2,24.7,1.536,1.536);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAahEQAGACAEAEQAEAFAEACQAGACgBAMQgBANAFACQAIAEABABQABABgBAHQgBAEgJgBQgIgBAAAGQAAAFADAEQACADAEAHQAGAPgFANQgCAEAAAJQgCAIgHADQgJAFgFgBQgFgCgHgKQgHgOgDgFQgFgIgLAEQgKADgHAGQgGAGgFABQgKADgEgFQgDgEACgKQABgPAAgIQACgMAHgEQAGgEAKgFQAGgDgDgEIgVgWQgJgHgFgHQgGgKAGgCQANgEAPARQACABAGANQAEAHAJABQAIABAFgKQADgFADgIQABgCAEgHQAEgGAHACg");
	this.shape_2.setTransform(253.9,20.9,1.536,1.536);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF3BB").s().p("AAdBGQgFgCgHgKQgHgOgDgFQgFgIgLAEQgKADgHAGQgGAGgFABQgKADgEgFQgDgEACgKIABgXQACgMAHgEIAQgJQAGgDgDgEIgVgWQgJgHgFgHQgGgKAGgCQANgEAPARIAIAOQAEAHAJABQAIABAFgKIAGgNIAFgJQAEgGAHACQAGACAEAEQAEAFAEACQAGACgBAMQgBANAFACIAJAFQABABgBAHQgBAEgJgBQgIgBAAAGQAAAFADAEIAGAKQAGAPgFANQgCAEAAAJQgCAIgHADQgHAEgFAAIgCAAg");
	this.shape_3.setTransform(253.9,20.9,1.536,1.536);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AApgvQgJACADAFQABAEALAGQAJAFgCAFQgBAFgEACQgFACgDAEIgJAHQgDAAAGADQAFADAJACQAGADgEAHQgCAFAAAKQAAAKgFAJQgEAIABAIQABAFgHAAQgHAAgJgKQgKgKgMgBQgSgCgJACQgDABgIADQgGAHgDAAQgFADgHgKQgHgKABgVQACgUAGgFQAFgCACgCQABAAACgGQACgFgFgFQgIgGgCgIQgBgEgHgPQgEgJADAAQARgGAFAGQACACAGAKQAFAKADABQACABAEAGQADADAGAAQAFAAABgLQACgNABgBIAGgLQAEgHACAAQAEAAAWAKIAFAFQAFAFAGgCQAFgCAKgGQAJgEAEAEQAEAEgCADQgCADgLACQgPACgFABg");
	this.shape_4.setTransform(237.6,17.6,1.536,1.536);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF3BB").s().p("AATBAQgKgLgMgBQgSgCgJACQgDABgIADQgGAGgDACQgFACgHgKQgHgJABgWQACgUAGgFIAHgEIADgGQACgEgFgGQgIgGgCgHIgIgUQgEgJADAAQARgGAFAGIAIAMQAFAKADABQACABAEAGQADADAGAAQAFAAABgLQACgNABgBIAGgLQAEgHACAAQAEAAAWAKIAFAFQAFAGAGgDIAPgIQAJgEAEAEQAEAEgCACQgCAEgLACIgUADQgJABADAGQABAEALAFQAJAFgCAGQgBAFgEACQgFACgDAEIgJAGQgDABAGADQAFADAJADQAGACgEAHQgCAFAAAKQAAAKgFAJQgEAIABAIQABAFgHAAQgHAAgJgJg");
	this.shape_5.setTransform(237.6,17.6,1.536,1.536);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgBgpQABgDABgGQACgFAFAAQAeAAAKgFQADgBAHgHQAFgEAEADQAEADAKAEQAGADgHAEQgFACgNADQgLADgDADQgFAGAAABQgBADAGAFQAJAHABACQACADgDAFQgCADgJACQgHABAAAEQAAACAGACQAJAEACABQAEADABAKQABAJgBAHQgDAbgKAKQgEAFgEgEQgIgFgKgBQgQgDgGgBQgHgBgGAFQgJAGgDABQgFADgJAAQgKAAgHgGQgHgHABgIQAFg0AFgCQASgFgHgKQgCgDgEgMQgDgJgFgFQgRgQgDgDQgMgMAIABQAEABAHgGQAFgEAHAJQAGAJANAMQALALAEAGQADAFACAIQAAADAHACQAFABABgLQAAgOADgCg");
	this.shape_6.setTransform(216.8,14.3,1.536,1.536);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF3BB").s().p("Ag4BIQgHgHABgIQAFg0AFgCQASgFgHgKQgCgDgEgMQgDgJgFgFIgUgTQgMgMAIABQAEABAHgGQAFgEAHAJQAGAJANAMQALALAEAGQADAFACAIQAAADAHACQAFABABgLQAAgOADgCQABgDABgGQACgFAFAAQAeAAAKgFQADgBAHgHQAFgEAEADQAEADAKAEQAGADgHAEQgFACgNADQgLADgDADIgFAHQgBADAGAFQAJAHABACQACADgDAFQgCADgJACQgHABAAAEQAAACAGACIALAFQAEADABAKQABAJgBAHQgDAbgKAKQgEAFgEgEQgIgFgKgBIgWgEQgHgBgGAFIgMAHQgFADgJAAIgBAAQgJAAgHgGg");
	this.shape_7.setTransform(216.8,14.3,1.536,1.536);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAFhRQABAAAHAEQAFADAHABQAHACAEgBQACAAAMgDQAGgCAJgHQAFgEABAGQAAAHACAGQAAADgHADQgLADgEACQgGACADAHQACAHAHAFQAIAGABADQAEAIAAACQAAAFgEACQgCABgJgFQgHgDAAAHQAAAGAIAEQAJACABAFQACAJgCAcQgCAagHAJQgEAIgCAAQgCABgJgEQgFgCgBgGQgBgEgRgBQgKAAgVACQgPABgPgDQgPgCACgFQADgPgBgBQgEgagBgHQgCgUAHgBQAEgBALACQAFABgBgGQgCgFgIgBQgHgCgCgJQgBgFABgPQABgHgFgBQgIgBgDgMQgEgMAIAAQATgBADAFQABAAAEAJQAEAIADACQACABAEALQADAHAGgBQAGAAADgIQACgIABgEQAEgKACgFQACgIADACg");
	this.shape_8.setTransform(195.7,12.2,1.536,1.536);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF3BB").s().p("AAoBTQgFgCgBgGQgBgEgRgBIgfACQgPABgPgDQgPgCACgFIACgQIgFghQgCgUAHgBQAEgBALACQAFABgBgGQgCgFgIgBQgHgCgCgJQgBgFABgPQABgHgFgBQgIgBgDgMQgEgMAIAAQATgBADAFIAFAJQAEAIADACQACABAEALQADAHAGgBQAGAAADgIIADgMIAGgPQACgIADACIAIAEIAMAEQAHACAEgBIAOgDQAGgCAJgHQAFgEABAGQAAAHACAGQAAADgHADIgPAFQgGACADAHQACAHAHAFQAIAGABADQAEAIAAACQAAAFgEACQgCABgJgFQgHgDAAAHQAAAGAIAEQAJACABAFQACAJgCAcQgCAagHAJQgEAIgCAAIgBABQgDAAgHgEg");
	this.shape_9.setTransform(195.7,12.2,1.536,1.536);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhNhRQADgDADgHQAEgFAGAGQAHAGATAVQACADADAJQADAHAJAAQAIgBADgEQABgDACgHQABgDAAgMQAAgKADAAQAJgDAYADQATABAJgEQANgFACAKQACADAAACQgDABgIABQgNgBgEAAQgHAAABAIQACAKAAAAQABACAGAMQAGAKAAAHQAAAEgDAIQgCAFgGAAQgGAAAAADQAAAEABAAQAFADAEACQAIAHABAFQACAFgCAMQgBAJgEALQgHASAAABQgCAHgBAJQgBAFgHACQgIACgEgDQgDgBgFgIQgCgJgBgDQgBgFgRAAQgXAAgFAAQgFAAgFAEQgEADACABQABABgHABQgNABgCgCQgDgCABgOQAAgZABgOQABgXAGgEQAIgGABAAQABgCAAgFQgBgIgPgXQgJgMgDgFQgFgIAEgFg");
	this.shape_10.setTransform(176.5,10.3,1.536,1.536);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF3BB").s().p("AAbBcQgDgBgFgIIgDgMQgBgFgRAAIgcAAQgFAAgFAEQgBABgBAAQgBABAAABQAAAAAAABQAAAAABAAQABABgHABQgNABgCgCQgDgCABgOIABgnQABgXAGgEIAJgGQABgCAAgFQgBgIgPgXIgMgRQgFgHAEgGQADgDADgHQAEgFAGAGIAaAbQACADADAJQADAHAJAAQAIgBADgEIADgKQABgDAAgMQAAgKACAAQAKgDAYADQATABAJgEQANgFACAKIACAFIgLACIgRgBQgHAAABAIIACAKIAHAOQAGAKAAAHQAAAEgDAIQgCAFgGAAQgGAAAAADQAAABAAABQAAABAAAAQAAABAAAAQABAAAAAAQAFADAEACQAIAHABAFQACAFgCAMQgBAJgEALIgHATQgCAHgBAJQgBAFgHACIgGABQgEAAgCgCg");
	this.shape_11.setTransform(176.4,10.3,1.536,1.536);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAbhdQAIAEAEgBIALgDQAGgBAKgEQAIgBADAEQACADAGADQACADgKADQgFACgQABQgIAAAAAHQAAAPAJAOQADAFAEAFQACADgIAEQgDACgQAFQgKADADAEQABABAFAJQACADAHABQAGABAGAAQADABAAAHQAAAggCAIQgBABAAARQAAAMgJAFQgLAIgCAAQgEABgJgJQgTgTgTAKQgHADgFAFQgGAFgFACQgIAHgDABQgEACgIgKQgGgHAEgJQAFgNgDgOQgFgUABgQQACgOAHgDQAGgDAAgFQAAgFgGgEQgKgGgBgBQgGgGAAgIQAAgIgBgCQgDgEgEgGQgFgKABgDQACgDAMgCQANgCAEABQAGACAFAGQABACABANQABAMAEAFQAEAFABADQABACAPgBQAGgBgBgMQgBgPADgEQACgDABgMQABgKADgDQAIgFAGAAQAEAAAJAFg");
	this.shape_12.setTransform(155.6,9,1.536,1.536);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF3BB").s().p("Ag8BbQgGgHAEgJQAFgNgDgOQgFgUABgQQACgOAHgDQAGgDAAgFQAAgFgGgEIgLgHQgGgGAAgIQAAgIgBgCIgHgKQgFgKABgDQACgDAMgCQANgCAEABQAGACAFAGQABACABANQABAMAEAFQAEAFABADQABACAPgBQAGgBgBgMQgBgPADgEQACgDABgMQABgKADgDQAIgFAGAAQAEAAAJAFQAIAEAEgBIALgDIAQgFQAIgBADAEQACADAGADQACADgKADQgFACgQABQgIAAAAAHQAAAPAJAOIAHAKQACADgIAEQgDACgQAFQgKADADAEIAGAKQACADAHABIAMABQADABAAAHQAAAggCAIIgBASQAAAMgJAFQgLAIgCAAQgEABgJgJQgTgTgTAKQgHADgFAFQgGAFgFACQgIAHgDABIgBAAQgEAAgHgIg");
	this.shape_13.setTransform(155.6,9,1.536,1.536);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Agxg5QAJAGAHAHQAEAFADAIQACAFAGACQAIACADgHQACgFAAgLQgEgNgCgIQgEgOAKgFQAKgGAMgCQAIgBAQgBQAJgBALgJQAKgIAEACQAIAFAFAHQAEAJgHAFQgCABgPAHQgKAEAAAFQAAAFgCAGQgBAGAEAHQAFAJAAAKQgBAJgFAEQgIAGgDACQgEAEAEABQARANAEAKQADAIgBAPQAAADACAbQABARgFAFQgEAKgBACQgCADgKgFQgDgBgRgNQgLgJgJADQgDABgQACQgMACgEAFQgHAJgDABQgEACgJgEQgKgEgEgKQgEgKAEgLQACgFAAgdQAAgYAGgDQAGgCAJgBQAFgCgFgGQgDgEgJgHQgIgHgFgGQgCgDgRgNQgKgJAGgEQACgCAGgLQADgFAIAEQAHAEALAGg");
	this.shape_14.setTransform(133.1,7.8,1.536,1.536);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF3BB").s().p("AAzBtQgDgBgRgNQgLgJgJADIgTADQgMACgEAFQgHAJgDABQgEACgJgEQgKgEgEgKQgEgKAEgLQACgFAAgdQAAgYAGgDIAPgDQAFgCgFgGQgDgEgJgHQgIgHgFgGQgCgDgRgNQgKgJAGgEQACgCAGgLQADgFAIAEIASAKQAJAGAHAHQAEAFADAIQACAFAGACQAIACADgHQACgFAAgLIgGgVQgEgOAKgFQAKgGAMgCIAYgCQAJgBALgJQAKgIAEACQAIAFAFAHQAEAJgHAFIgRAIQgKAEAAAFQAAAFgCAGQgBAGAEAHQAFAJAAAKQgBAJgFAEIgLAIQgEAEAEABQARANAEAKQADAIgBAPIACAeQABARgFAFIgFAMQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgDAAgGgDg");
	this.shape_15.setTransform(133.1,7.8,1.536,1.536);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgQhQQAHgCALgIQAFgCAJAAQAEAAAKgBQARgCAkgJQADAFgGAFQgBABgKAGQgOAIgCALQgCAIAIAQQAHANgHAJQgHAGgDACQgFAFADAGQADADAIAAQALAAACABQALAFAAATQAAAIgDAUQgBAIgFARQAAAEgBAJQgBAJgDADQgHAFgHgDQgDgCgGgHQgGgHgFgCQgEgBgLAAQgUAAgGADQgFABgEAFQgGAGgCACQgGADgHAAQgIAAgFgEQgFgEgBgGQAAgIgBgGQgCgLgBgGQgCgKABgIQAAgEAFgMQAEgJgCgHQgCgBgBgBQAAgDgBgBQADAHAHgHQAGgGgBgHQgBgIgOgKQgPgMgFgHQgLgPAQgFQAMgEARAHQAGADAFAGQAGAIABABQAOANgBgVQgEgYAAgCg");
	this.shape_16.setTransform(110.6,9.2,1.536,1.536);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF3BB").s().p("AgyBmQgFgEgBgHIgBgNIgDgSQgCgKABgIQAAgEAFgLQAEgKgCgHQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgBgEQADAHAHgHQAGgFgBgIQgBgIgOgKQgPgMgFgHQgLgOAQgGQAMgEARAIQAGACAFAGIAHAKQAOANgBgVQgEgZAAgCIABgCQAHgCALgHQAFgCAJAAIAOgBQARgDAkgJQADAGgGAFIgLAGQgOAIgCAMQgCAIAIAPQAHANgHAKIgKAIQgFAFADAGQADADAIAAQALAAACABQALAFAAASQAAAIgDAUIgGAaIgBANQgBAIgDADQgHAGgHgEIgJgJQgGgGgFgCQgEgBgLAAQgUAAgGACQgFACgEAFIgIAHQgGAEgHAAQgIgBgFgDg");
	this.shape_17.setTransform(110.6,9.2,1.536,1.536);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAVhfQAJgDARgKQATgIADANQADAIgGAEQgHAEgFADQgSAKAOALQAIAGAQAMQAFAIgOAMQgUATAAAAQgGAMgFAFQAHAAAPgHQANgEAFAQQADAJgBATQgBALgBASQAAAVgDAHQgFANgPgKQgMgMgIgCQgHgBgTAFQgFABgMAJQgMAIgHAAQgZABgDghQgEgiABgRQAAgQAJAAQAFAAARACQACgEgEgDIACgCQgKgDgLgIQgKgJgGgJQgGgKgBgOQgBgKACgDQADgEAJAAQAPgBAKAMQADADAFAJQAFAHAGgGQADgCABgKQABgMABgBQAFgSAEgFQADgFAHgBQANgBABAAg");
	this.shape_18.setTransform(89.2,10.7,1.536,1.536);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF3BB").s().p("Ag7BQQgEgiABgRQAAgQAJAAIAWACQACgEgEgDIACgCQgKgDgLgIQgKgJgGgJQgGgKgBgOQgBgKACgDQADgEAJAAQAPgBAKAMQADADAFAJQAFAHAGgGQADgCABgKIACgNQAFgSAEgFQADgFAHgBIAOgBQAJgDARgKQATgIADANQADAIgGAEIgMAHQgSAKAOALIAYASQAFAIgOAMIgUATQgGAMgFAFQAHAAAPgHQANgEAFAQQADAJgBATIgCAdQAAAVgDAHQgFANgPgKQgMgMgIgCQgHgBgTAFQgFABgMAJQgMAIgHAAIgBAAQgYAAgDggg");
	this.shape_19.setTransform(89.2,10.7,1.536,1.536);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA2hbQgLAKAEAOQAGAXAAADQAAAEgOASQgMAOAHAFQADACAKAAQALAAADACQAMAFAAAOQAAAFgCAJQgCAJgBAFQgBAOABAOQABAEACAKQABAJgCAEQgCAEgJACQgJADgEgCQgEgCgDgIQgDgJgBgCQgEgGgEgCQgEgBgJAAQgRAAgHAEQgEACgDAHQgEAIgDACQgLAMgKgJQgJgIgBgPQgCgtAAgHQgBgJAAgGQgBgKACgDQADgDAJABQAIAAACgEQgBgBAAAAQgBAAgBAAIABgDQgGAEgNgPQgMgNgDgJQgBgFACgGQACgHAFgCQAIgEAPAMQAGAEALALQAJAFADgRQACgIgCgUQgCgTADgJQADgJAQgBQAKgBARABQASgBAHAGQAGAGgDADQgGAEgEADg");
	this.shape_20.setTransform(68.2,12,1.536,1.536);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF3BB").s().p("AAuBxQgEgCgDgIIgEgLQgEgGgEgCQgEgBgJAAQgRAAgHAEQgEACgDAHIgHAKQgLAMgKgJQgJgIgBgPIgCg0IgBgPQgBgKACgDQADgDAJABQAIAAACgEIgBgBIgCAAIABgDQgGAEgNgPQgMgNgDgJQgBgFACgGQACgHAFgCQAIgEAPAMQAGAEALALQAJAFADgRQACgIgCgUQgCgTADgJQADgJAQgBIAbAAQASgBAHAGQAGAGgDADIgKAHQgLAKAEAOIAGAaQAAAEgOASQgMAOAHAFQADACAKAAQALAAADACQAMAFAAAOIgCAOIgDAOQgBAOABAOIADAOQABAJgCAEQgCAEgJACIgJACIgEgBg");
	this.shape_21.setTransform(68.2,12,1.536,1.536);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgIh3QACgKASgBQAEAAAaADQAHABATgBQAPADAAAUQAAADgOAEQgPAFAAAEQAAAGAGAJQAFAIAGABQAMACgKAGQgMAHAAABQAFAcgKAHQgJAGAEAHQAGAKAEAEQAFAFAAAMQAAAHAAAMQABALAGAiQADAegPAFQgLADgKgHQgNgLgEgBQgagGgHAFQgFAIgJACQgNADgFgFQgDgDgCgNQgBgIAAgeQAAgGgDgOQgEgPAAgFQAAgDADgEQAEgGAAgBIAEgHQACgDgBgDQgIgCgFgDQgIgGgHgFQgKgHAAgLQgBgMAMgCQAHgBALALQAEAEAKANQACACAHABQAIABACACQADACAEgUQAEgUAAgOQAAgBABgLQAAgGgBgEQgEgKAEgUg");
	this.shape_22.setTransform(46.5,10.7,1.536,1.536);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF3BB").s().p("AAoB+QgOgLgDgBQgagGgHAFQgFAIgJACQgNADgFgFQgDgDgCgNQgBgIAAgeQAAgGgDgOIgEgUQAAgDACgEIAFgHIAEgHQACgDgBgDQgJgCgEgDIgQgLQgJgHAAgLQgBgMALgCQAIgBAKALIAPARQABACAIABQAIABACACQADACAEgUQAEgUgBgOIABgMQABgGgCgEQgDgKAEgUQACgKASgBIAeADQAHABATgBQAPADAAAUQAAADgOAEQgPAFAAAEQAAAGAGAJQAFAIAGABQAMACgKAGQgMAHAAABQAEAcgJAHQgJAGAEAHQAFAKAFAEQAFAFAAAMIAAATIAHAtQADAegPAFIgHABQgHAAgHgFg");
	this.shape_23.setTransform(46.5,10.7,1.536,1.536);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AA5hFQAJALAGABQANACgIANQgEAHgGAJQgBADgJAKQgGAIAGALQACAEAFAEQADACAGAEQAEAFACAGIABANQAFAsAAAFQAAAjgRAJQgLAGgMgIQgOgKgHgEQgLgEgNAEQgPAHgIACQgMADgFgFQgEgDgBgNQgBgIAAgeQAAgGgEgOQgDgPgBgFQAAgDADgEQAEgGABgBQABgDgEgEQgEgEgBgEQgCAAgMABQgGAAgFgGQgMgXAUgDQAJgBAKADQAKAEAFAGQACACAHABQAIABACACQADACAHAAQAGgBACgDIADgEQgCgLAAgoQAAgFgCgEQgFgFgBgDQgEgKAEgUQACgLAQgJQARgIAMABQAXADgIAXQgIAWAAAFQAAAHAKAKg");
	this.shape_24.setTransform(23.6,9.6,1.536,1.536);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF3BB").s().p("AAtCHQgOgKgHgEQgLgEgNAEQgPAHgIACQgMADgFgFQgEgDgBgNQgBgIAAgeQAAgGgEgOIgEgUQAAgDADgEIAFgHQABgDgEgEQgEgEgBgEIgOABQgGAAgFgGQgMgXAUgDQAJgBAKADQAKAEAFAGQACACAHABQAIABACACQADACAHAAQAGgBACgDIADgEQgCgLAAgoQAAgFgCgEQgFgFgBgDQgEgKAEgUQACgLAQgJQARgIAMABQAXADgIAXQgIAWAAAFQAAAHAKAKQAJALAGABQANACgIANIgKAQQgBADgJAKQgGAIAGALQACAEAFAEIAJAGQAEAFACAGIABANIAFAxQAAAjgRAJQgFADgFAAQgGAAgHgFg");
	this.shape_25.setTransform(23.6,9.6,1.536,1.536);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgHiEQACgMAPgDQAMgDAQACQAaADADAAQARAFgEAMQgBAEgEAHQgFAHgBAEQgDAIAAATQAAASAEAIQAAACAGAJQAFAIgBADQAAAEgRAJQgNAHAGAMQADAHANAJQAFAFABAGQABAFAAAKQAFAvAAAIQAAAngRAKQgLAHgMgJQgOgLgHgEQgKgGgNAFQgPAIgIACQgOADgEgFQgEgEgBgNQgCgOAAgdIgBgpQgBgOACgGQABgBAEgGQADgDgBgGQgBAAgVAAQgNABgEgIQgFgLAEgJQAFgJALgCQAigEAHAIQABACABAIQAAAHADACQAEACAHgBQAGAAACgDIACgFQgCgNAAgsQAAgKAAgFQAAgJAAgFQAAgBgFgLQgDgHABgFg");
	this.shape_26.setTransform(2.2,9.7,1.536,1.536);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF3BB").s().p("AAsCRQgOgLgHgEQgKgGgNAFQgPAIgIACQgOADgEgFQgEgEgBgNQgCgOAAgdIgBgpQgBgOACgGIAFgHQADgDgBgGIgWAAQgNABgEgIQgFgLAEgJQAFgJALgCQAigEAHAIQABACABAIQAAAHADACQAEACAHgBQAGAAACgDIACgFQgCgNAAgsIAAgPQAAgJAAgFIgFgMQgDgHABgFQACgMAPgDQAMgDAQACIAdADQARAFgEAMQgBAEgEAHQgFAHgBAEQgDAIAAATQAAASAEAIIAGALQAFAIgBADQAAAEgRAJQgNAHAGAMQADAHANAJQAFAFABAGIABAPIAFA3QAAAngRAKQgEADgFAAQgHAAgHgFg");
	this.shape_27.setTransform(2.2,9.7,1.536,1.536);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhCg8QAGgEAOgeQAOgfAAgLQAAgLgRgBQgRgBgCgKQgMgpgEgSQgHgeAXgGQAMgDARgBQASgBAKACQAFABAbgDQAbgBAAAJQABAlgXAOQgaAPAAAEQAAAKASAWQAVAZABAIQAEAfANAFQAQAFA/gOQAGgCAFACQAHABAAAHQABAJgHAFQgGAFgEgCQgJgDg1AGQg5AGgDAJQgFANAKANQALAOgCAGQgBACgGADQgEACADAJQABAEAGAEQADACAFAEQAKAJAEARQABAHACAZQAAAFAEAiQACAXAAAQQAAASgDAkQAAACAAALQAAAGgCAFQgDAIgHAAQgDAAgIgFQgHgHgEgEQgIgHgXgBQgaAAgJAPQgLARgCAAQgZACgCgqQACg0AAgVQAAgQgGhAIAAgjQAAgXgGgJQgDgEgfgPQgbgNABgOQACgNAMgIQAJgFAMgCQAFAAAKgCQAIgBAGAAQAFAAACABQAAABAEAEQACACADAEQADADAEgC");
	this.shape_28.setTransform(-260,-24.9,1.536,1.536);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF3BB").s().p("AhTDcIAChJQAAgQgGhAIAAgjQAAgXgGgJQgDgEgfgPQgbgNABgOQACgNAMgIQAJgFAMgCIAPgCQAIgBAGAAIAHABIAEAFIAFAGQADADAEgCIAAAEQAGgEAOgeQAOgfAAgLQAAgLgRgBQgRgBgCgKQgMgpgEgSQgHgeAXgGQAMgDARgBQASgBAKACQAFABAbgDQAbgBAAAJQABAlgXAOQgaAPAAAEQAAAKASAWQAVAZABAIQAEAfANAFQAQAFA/gOQAGgCAFACQAHABAAAHQABAJgHAFQgGAFgEgCQgJgDg1AGQg5AGgDAJQgFANAKANQALAOgCAGQgBACgGADQgEACADAJQABAEAGAEIAIAGQAKAJAEARQABAHACAZIAEAnQACAXAAAQQAAASgDAkIAAANQAAAGgCAFQgDAIgHAAQgDAAgIgFIgLgLQgIgHgXgBQgaAAgJAPQgLARgCAAIgCAAQgXAAgCgog");
	this.shape_29.setTransform(-260,-24.9,1.536,1.536);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhCgwQAGgDAKgZQAJgYABgLQAAgMgWgUQgXgUgBgKQgEgnAFgWQAHggAZgEQANgCAzAPQAwAMACAOQADAOgDAQQgDALgOAMQgOANgDAKQgCAKAJATQAJAVABAJQACAfAMAFQAQAHA/gKQAGgBAFACQAHACAAAGQAAAJgHAFQgGAFgEgCQgIgEg3ACQg4ABgFAKQgGAMAKAOQAKAMgDAHQgBADgGADQgFACADAIQACAHAMAJQAJAKADAQQABAIAAAZQAAAGABAhQABAXgBAQQgCAYgFAeQgBACgBALQAAAFgDAGQgDAHgGAAQgEgBgIgFQgGgIgEgEQgFgIgZgCQgagCgKAPQgMAPgCAAQgZABABgqQAFg0ACgVQABgWgCg6QAAgBADgjQABgWgFgLQgCgFgegPQgbgPADgOQADgNANgHQAKgFALAAQAAAAAPgBQAJgBAFABQAFAAABACQABAAAEAFQACACADAEQACADAEgB");
	this.shape_30.setTransform(-234.7,-25.6,1.536,1.536);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFF3BB").s().p("AhnDmIAHhJQABgWgCg6IADgkQABgWgFgLQgCgFgegPQgbgPADgOQADgNANgHQAKgFALAAIAPgBIAOAAQAFAAABACIAFAFIAFAGQACADAEgBIAAAEQAGgDAKgZQAJgYABgLQAAgMgWgUQgXgUgBgKQgEgnAFgWQAHggAZgEQANgCAzAPQAwAMACAOQADAOgDAQQgDALgOAMQgOANgDAKQgCAKAJATQAJAVABAJQACAfAMAFQAQAHA/gKQAGgBAFACQAHACAAAGQAAAJgHAFQgGAFgEgCQgIgEg3ACQg4ABgFAKQgGAMAKAOQAKAMgDAHQgBADgGADQgFACADAIQACAHAMAJQAJAKADAQQABAIAAAZIABAnQABAXgBAQQgCAYgFAeIgCANQAAAFgDAGQgDAHgGAAQgEgBgIgFIgKgMQgFgIgZgCQgagCgKAPQgMAPgCAAIAAAAQgZAAABgpg");
	this.shape_31.setTransform(-234.7,-25.6,1.536,1.536);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhCguQAGgCALgWQAKgVABgLQABgKgWgTQgXgUAAgJQgGhTAqgEQAQgCAvARQAwAMACAOQACAOgEANQgCAJgPALQgPALgCAJQgDAJAIASQAKAUAAAHQAAAdAMAFQAQAHBAgHQARgBAAAKQgBAJgGAEQgHAEgEgCQgIgEg2gBQg5AAgEAIQgHALAJANQAKALgDAGQgBADgHACQgEACACAIQABADAGAFQACACAFAEQAJAKACAPQABAHgBAXQgBAHABAcQAAAWgCAOQgCAVgGAcQgBAFgBAGQAAAFgDAFQgEAHgGgBQgEgBgHgEQgEgIgEgEQgHgHgZgDQgZgDgLAMQgMAOgCAAQgagBACgmQAIgvACgTQACgTAAg1QAAgBADggQADgUgFgKQgDgEgdgQQgagOADgNQADgLANgGQAKgEAMAAIAPAAQAIgBAGABQAFABABABQACABADAEQACACACAEQADADADgB");
	this.shape_32.setTransform(-210.8,-20.6,1.536,1.536);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFF3BB").s().p("AAND4QgEgBgHgEIgIgMQgHgHgZgDQgZgDgLAMQgMAOgCAAQgagBACgmIAKhCQACgTAAg1IADghQADgUgFgKQgDgEgdgQQgagOADgNQADgLANgGQAKgEAMAAIAPAAQAIgBAGABQAFABABABIAFAFIAEAGQADADADgBIAAADQAGgCALgWQAKgVABgLQABgKgWgTQgXgUAAgJQgGhTAqgEQAQgCAvARQAwAMACAOQACAOgEANQgCAJgPALQgPALgCAJQgDAJAIASQAKAUAAAHQAAAdAMAFQAQAHBAgHQARgBAAAKQgBAJgGAEQgHAEgEgCQgIgEg2gBQg5AAgEAIQgHALAJANQAKALgDAGQgBADgHACQgEACACAIQABADAGAFIAHAGQAJAKACAPQABAIgBAWIAAAjQAAAWgCAOQgCAVgGAcIgCALQAAAFgDAFQgEAGgFAAIgBAAg");
	this.shape_33.setTransform(-210.8,-20.6,1.536,1.536);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhCgrQAGgDALgUQAKgUABgLQABgKgWgSQgXgTgBgJQgFhOApgEQAKgBAYAGQAMADASAGQAvANACAMQADAOgEAMQgDAJgOAKQgPALgDAIQgCAJAIARQAJATAAAHQABAbAMAFQAPAGBAgFQASgCAAAKQgBAIgGAFQgHADgEgCQgIgEg2AAQg5gBgEAIQgHAKAJAMQAKALgDAGQgBACgGADQgFABADAIQABAGAMAIQAJAJACAOQABAGgBAWQAAAJAAAZQABAVgCANQgCAVgGAaQgBAFgBAGQAAAEgDAFQgEAHgGgBQgDgBgIgEQgEgIgEgEQgHgHgZgDQgagDgLANQgLANgCAAQgagBACgkQAHgtACgSQACgOAAgVQAAgXAAgLIAEgfQACgUgFgJQgDgEgdgPQgagOADgMQADgLANgFQALgEALAAQAAAAAOAAQAJgBAGABQAEABACABQABABADAEQACACADADQADADADgB");
	this.shape_34.setTransform(-190.4,-16.6,1.536,1.536);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFF3BB").s().p("AAODtQgDgBgIgEIgIgMQgHgHgZgDQgagDgLANQgLANgCAAQgagBACgkIAJg/IACgjIAAgiIAEgfQACgUgFgJQgDgEgdgPQgagOADgMQADgLANgFQALgEALAAIAOAAQAJgBAGABIAGACIAEAFIAFAFQADADADgBIAAAEQAGgDALgUQAKgUABgLQABgKgWgSQgXgTgBgJQgFhOApgEQAKgBAYAGIAeAJQAvANACAMQADAOgEAMQgDAJgOAKQgPALgDAIQgCAJAIARQAJATAAAHQABAbAMAFQAPAGBAgFQASgCAAAKQgBAIgGAFQgHADgEgCQgIgEg2AAQg5gBgEAIQgHAKAJAMQAKALgDAGQgBACgGADQgFABADAIQABAGAMAIQAJAJACAOIAAAcIAAAiQABAVgCANQgCAVgGAaIgCALQAAAEgDAFQgEAGgFAAIgBAAg");
	this.shape_35.setTransform(-190.4,-16.6,1.536,1.536);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhCgpQAGgDAKgVQAJgUABgKQAAgLgIgQQgJgSgBgIQgEgmADgQQAFgdAZgDQAJgBAMAFQAPAIADAAQAFACAFABQAEABABAIQAEAOgEANQgCAIgKAQQgJAPgCAJQgCAIAOAPQAPARABAHQABAbAUAIQAXAJA/gIQAGgBAFABQAHACAAAGQAAAIgHAEQgGAEgEgCQgJgDg2ABQg4ABgFAIQgGALAKAMQAKAKgDAGQgBADgGACQgFACADAHQACAGAMAHQAJAJADAPQABAFAAAXQAAAGACAcQAAAUgBAOQAAAKgGAkQgBACgBAKQAAAFgDAEQgDAHgGgBQgEgBgIgEQgGgHgEgEQgFgGgZgDQgagCgKANQgLANgDAAQgZABABglQAFgtABgSQACgTgCgyQABgUABgLQACgTgGgKQgCgFgegMQgagNACgMQADgMANgFQAJgFAMAAQADAAAMgBQAJAAAFAAQAFABABABQABAAAEAEQACACADAEQACADAEgB");
	this.shape_36.setTransform(-167.6,-13.4,1.536,1.536);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFF3BB").s().p("AAYDsQgEgBgIgEIgKgLQgFgGgZgDQgagCgKANQgLANgDAAQgZABABglQAFgtABgSQACgTgCgyIACgfQACgTgGgKQgCgFgegMQgagNACgMQADgMANgFQAJgFAMAAIAPgBIAOAAIAGACIAFAEIAFAGQACADAEgBIAAADQAGgDAKgVQAJgUABgKQAAgLgIgQQgJgSgBgIQgEgmADgQQAFgdAZgDQAJgBAMAFIASAIIAKADQAEABABAIQAEAOgEANQgCAIgKAQQgJAPgCAJQgCAIAOAPQAPARABAHQABAbAUAIQAXAJA/gIQAGgBAFABQAHACAAAGQAAAIgHAEQgGAEgEgCQgJgDg2ABQg4ABgFAIQgGALAKAMQAKAKgDAGQgBADgGACQgFACADAHQACAGAMAHQAJAJADAPIABAcIACAiQAAAUgBAOQAAAKgGAkIgCAMQAAAFgDAEQgDAGgFAAIgBAAg");
	this.shape_37.setTransform(-167.6,-13.4,1.536,1.536);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhBgxQAZgBADAAQAEABABABQABAAAEAEQACABACAEQADACAEABQAJgGACguQABgOgFgjQgEghADgOQAFgaAWgCQAJgBALAEQAQAHADABQAEABAFABQAEABABAHQADAMgDALQgCAIgJANQgJAOgCAHQgGAVADAbQABALANAKQANALANgBQAFgBAGACQAGACAAAEQAAAHgHAEQgGADgEgBQgHgDgVABQgWABgFAHQgFAJAJALQAKAJgDAFQgBACgGACQgEABACAHQABADAGAEQACACAFADQAJAIACAMQABAGAAATQAAAGACAXQABATgBALQgBANgFAcQgCAJgMASQgDAFgGAAQgDgBgIgEQgBAAgEgNQgDgKgVgCQgZgCgKALQgKALgCAAQgYABAAggQAGgoABgQQABgQgCgsQABgSABgJQABgRgFgIQAAgBgQgNQgLgKADgLQACgKANgFQAJgEALAAg");
	this.shape_38.setTransform(-146.9,-9.2,1.536,1.536);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFF3BB").s().p("AAfDWQgDgBgIgEQgBAAgEgNQgDgKgVgCQgZgCgKALQgKALgCAAQgYABAAggQAGgoABgQQABgQgCgsIACgbQABgRgFgIIgQgOQgLgKADgLQACgKANgFQAJgEALAAIAcgBIAFACIAFAEIAEAFQADACADgBIAAADQAKgEACgxQABgOgFgjQgEghADgOQAFgaAWgCQAJgBALAEIATAIIAJACQAEABABAHQADAMgDALQgCAIgJANQgJAOgCAHQgGAVADAbQABALANAKQANALANgBQAFgBAGACQAGACAAAEQAAAHgHAEQgGADgEgBQgHgDgVABQgWABgFAHQgFAJAJALQAKAJgDAFQgBACgGACQgEABACAHQABADAGAEIAHAFQAJAIACAMQABAGAAATIACAdQABATgBALQgBANgFAcQgCAJgMASQgDAFgFAAIgBAAg");
	this.shape_39.setTransform(-146.9,-9.2,1.536,1.536);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAPjIQAIgBALAFQAOAGADABQAEABAFABQADABABAHQADAKgDALQgCAHgIAMQgIAMgCAIQgFASACAaQABAKAMAKQAMAKAMgBQAPgCAAAIQAAAHgGADQgFADgEgBQgHgDgSABQgVABgEAHQgFAIAIAKQAJAIgDAFQgBACgFACQgEABADAGQABADAEADQADACAEADQAIAIACALQABAGAAARQAAAEACAXQAAARgBALQgBARgEAVQgCAHgKARQgIAOgIgEQgFgCgHgIQgGgJgDgCQgFgEgMAEQgPAFgDAAQgmABAGhPQACgTABgKQADgRgBgLQAAgQgBgJQgBgPgFgIQgBgBgOgLQgKgKADgKQACgJALgFQAIgDAKAAQAJAAARgBQAEABABABQABAAADADQACABACADQADADAEAAQAHgHACgoQABgQgEgeQgDgeACgOQAFgXATgDg");
	this.shape_40.setTransform(-125.6,-5.3,1.536,1.536);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFF3BB").s().p("AAVDIQgFgCgHgIQgGgJgDgCQgFgEgMAEQgPAFgDAAQgmABAGhPIADgdQADgRgBgLIgBgZQgBgPgFgIIgPgMQgKgKADgKQACgJALgFQAIgDAKAAIAagBIAFACIAEADIAEAEQADADADgBIAAADQAIgEACgtQABgQgEgeQgDgeACgOQAFgXATgDQAIgBALAFIARAHIAJACQADABABAHQADAKgDALQgCAHgIAMQgIAMgCAIQgFASACAaQABAKAMAKQAMAKAMgBQAPgCAAAIQAAAHgGADQgFADgEgBQgHgDgSABQgVABgEAHQgFAIAIAKQAJAIgDAFQgBACgFACQgEABADAGQABADAEADIAHAFQAIAIACALIABAXIACAbQAAARgBALQgBARgEAVQgCAHgKARQgHALgGAAIgDgBg");
	this.shape_41.setTransform(-125.6,-5.3,1.536,1.536);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABMiuQAEALgDAJQgCAHgIAMQgIAMgCAHQgGAUAFAXQAEAaANAMQABABAKAEQAHADAAAEQAAALgQgGQgggKgHALQgFAJAOAGQAOAFgDAFQgBACgGACQgEABADAGQABADAGADQADABAFADQAJAGADALQABAFABARQABAFACAWQACAPgBALQAAARgEAUQgBAGgLASQgIAOgJgEQgGgCgHgIQgJgIgEgCQgHgDgMAFQgPAFgEAAQgqACADhLQABgTABgJQABgRgBgLQgBgPgBgIQgCgOgGgIQgMgGgGgFQgLgJACgKQACgIANgFQAJgEALgBIAOgBQAJgBAFABQAFAAAGAEQACABADADQACACAFABQAEgEABgQQABgNAAgOQAAgPgEgdQgGgcADgOQAEgWAVgDQAJgCAMAEQARAFADABQAFABAFAAQADABACAHg");
	this.shape_42.setTransform(-105.2,-1.9,1.536,1.536);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFF3BB").s().p("AAwDAQgGgCgHgIQgJgIgEgCQgHgDgMAFQgPAFgEAAQgqACADhLIACgcQABgRgBgLIgCgXQgCgOgGgIIgSgLQgLgJACgKQACgIANgFQAJgEALgBIAOgBIAOAAQAFAAAGAEIAFAEQACACAEgBIAAADQAFgCABgTQABgNAAgOQAAgPgEgdQgGgcADgOQAEgWAVgDQAJgCAMAEIAUAGIAKABQADABACAHQAEALgDAJQgCAHgIAMQgIAMgCAHQgGAUAFAXQAEAaANAMIALAFQAHADAAAEQAAALgQgGQgggKgHALQgFAJAOAGQAOAFgDAFQgBACgGACQgEABADAGQABADAGADIAIAEQAJAGADALQABAFABARIADAbQACAPgBALQAAARgEAUQgBAGgLASQgHALgGAAIgEgBg");
	this.shape_43.setTransform(-105.2,-1.9,1.536,1.536);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AARgaQAEADACAJQACAEACAJQADAFAKANIAFAFQAEADAAACQABAFgLAAQgHABgHgFQgIgGgFgDQgMgHgOACQgMADgHAAQgNACgCgIQAEgIAHgDQADAAAJgBQAHgBADgDQADgDAAgJQABgIAFgDQAOgHAJAJg");
	this.shape_44.setTransform(276.2,42.3,1.536,1.536);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFF3BB").s().p("AAZAcIgNgJQgMgHgOACQgMADgHAAQgNACgCgIQAEgIAHgDIAMgBQAHgBADgDQADgDAAgJQABgIAFgDQAOgHAJAJQAEADACAJIAEANQADAFAKANIAFAFQAEADAAACQABAFgLAAIgBAAQgGAAgHgEg");
	this.shape_45.setTransform(276.3,42.3,1.536,1.536);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgoAAQAOAAAGgFQAEgEAIgPQAIgMAJACQALACAGAMQAFAIAGANQACACAFAGQAFAEACAEQAEAHgBAFQgCAGgIAAQgGABgGgFQgHgFgEgDQgKgJgMACQgQADgJABQgSAEgGgHQgEgEABgHQABgGAHAAg");
	this.shape_46.setTransform(259.3,38.9,1.536,1.536);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFF3BB").s().p("AAgAfIgLgIQgKgJgMACIgZAEQgSAEgGgHQgEgEABgHQABgGAHAAIAFAAQAOAAAGgFQAEgEAIgPQAIgMAJACQALACAGAMQAFAIAGANIAHAIQAFAEACAEQAEAHgBAFQgCAGgIAAIgBAAQgFAAgGgEg");
	this.shape_47.setTransform(259.3,38.9,1.536,1.536);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AggAJQALAIAFgPQADgRACgFQAIgNAKADQAKAEAGANQACAEACAIQADAFAEAEQACACAHAFQAFAFgCAGQgEAJgTgFQgUgGgDAAQgLAAgFAAQgKAAgGgBQgIgCgEgFQgEgGALgBg");
	this.shape_48.setTransform(242.9,34.8,1.536,1.536);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFF3BB").s().p("AAXAeQgUgGgDAAIgQAAIgQgBQgIgCgEgFQgEgGALgBIAFAAQALAIAFgPQADgRACgFQAIgNAKADQAKAEAGANIAEAMQADAFAEAEIAJAHQAFAFgCAGQgDAGgJAAIgLgCg");
	this.shape_49.setTransform(242.9,34.8,1.536,1.536);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgwAIQASACAIgFQAHgFABgEQAAgIABgGQABgNAKgGQAJgHALAKQAIAGABARQABAQAFAGQABABAIAFQAHADABAFQACAIgFAFQgFAFgHgCQgEAAgIgFQgHgFgFgBQgLgDgOABQgJACgEABQgIACgFgCQgFgDgEgHQgDgIAEgFg");
	this.shape_50.setTransform(224.2,33.8,1.536,1.536);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFF3BB").s().p("AAjApQgEAAgIgFQgHgFgFgBQgLgDgOABIgNADQgIACgFgCQgFgDgEgHQgDgIAEgEIAAgBQASACAIgFQAHgFABgEIABgOQABgNAKgGQAJgHALAKQAIAGABARQABAQAFAGIAJAGQAHADABAFQACAIgFAFQgDADgGAAIgDAAg");
	this.shape_51.setTransform(224.2,33.8,1.536,1.536);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgRALQAFgHgDgSQgEgRAJgFQAMgHAGAPQAEAIACARQAEAMAJAGQADACALACQAJACADAFQAHAMgWAAQgRAAgNgEQgIgDgEABQgEAAgKADQgaAJgIgKQgGgIAJgEQAFgDALgCQAHgDAHgHQAIgHgGgC");
	this.shape_52.setTransform(205.9,32.4,1.536,1.536);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFF3BB").s().p("Ag0AiQgGgIAJgEQAGgDAKgCQAHgDAHgHIACgCIAAgHQAGACgGAFIAAAGQAGgHgEgSQgEgRAJgFQAMgHAGAPQAEAIACARQAEAMAJAGIAOAEQAJACADAFQAIAMgXAAQgRAAgNgEQgIgDgEABQgEAAgKADQgMAEgIAAQgJAAgFgFg");
	this.shape_53.setTransform(205.9,32.4,1.536,1.536);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgigdQAHAEAJgNQAIgLALAIQAKAGAAAOQAAASACADQADAFAUAJQAQAIgDALQgEAKgQACQgDAAgWAAQgEAAgMgEQgLgEgGABQgBAAgGAEQgDABgFgEQgGgGACgMQALgBAHgGQAJgGAAgIQABgGgCgCQgEgDgEgDQgGgEgCgFQgDgFAHgBgAghgdQgBAAAAAA");
	this.shape_54.setTransform(186.9,31.2,1.536,1.536);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFF3BB").s().p("AgMApQgLgEgGABIgHAEQgDABgFgEQgGgGACgMQALgBAHgGQAJgGAAgIQABgGgCgCIgIgGQgGgEgCgFQgEgGAJAAIgBADQAHABAJgNQAIgLALAIQAKAGAAAOQAAASACADQADAFAUAJQAQAIgDALQgEAKgQACIgZAAQgEAAgMgEg");
	this.shape_55.setTransform(186.9,31.2,1.536,1.536);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAAgeQABAGgBANQABALAIADQAFAEAPgDQANgCAFAEQAPAOgXAPQgSANgRADQgbAEgLgNQgDgEgBgEQgBgGABgDQACgDAFgDQAEgDABgFQABgFgDgGQgDgGgEgEQgBgBgJgEQgIgEABgFQAJABAFgKQAFgNAFgDQAKgFAJAHQAIAGABALg");
	this.shape_56.setTransform(168.9,31.2,1.536,1.536);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFF3BB").s().p("AgiAqQgDgEgBgEQgBgGABgDQACgDAFgDQAEgDABgFQABgFgDgGQgDgGgEgEIgKgFQgIgEABgEIAAgBQAJABAFgKQAFgNAFgDQAKgFAJAHQAIAGABALQABAGgBANQABALAIADQAFAEAPgDQANgCAFAEQAPAOgXAPQgSANgRADIgLABQgSAAgJgKg");
	this.shape_57.setTransform(168.9,31.2,1.536,1.536);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag2gQQABADAGADQADABAGADQAKAGADAHQACADACARQADAVAUABQARABATgKQAUgKgDgZQAAgFgCgDQgDgEgHAAQgEAAgFAEQgGADgDAAQgVAHgFgTQgJgdgGgEQgLgHgGAKQgJAMgCADQgFgBgDADQgEADACAGg");
	this.shape_58.setTransform(149.7,31.9,1.536,1.536);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFF3BB").s().p("AACAxQgUgBgDgVQgCgRgCgDQgDgHgKgGIgJgEQgGgDgBgDQgCgGAEgDQADgDAFABIALgPQAGgKALAHQAGAEAJAdQAFATAVgHIAJgDQAFgEAEAAQAHAAADAEQACADAAAFQADAZgUAKQgSAJgQAAIgCAAg");
	this.shape_59.setTransform(149.7,31.9,1.536,1.536);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAMgCQAJAEAOgCQAOgDAIAJQAGALgDAPQgEATgZAEQgVADgRgHQgOgGgDgCQgJgFgBgJQgBgDADgGQAEgHgBgHQgBgIgBgDQgCgEgIgBQgMgCgDgBQgGgCADgFQAFgIAMgNQABgBAEgHQACgFADgBQANgDASAlQAGAPAHAEg");
	this.shape_60.setTransform(129.2,33.4,1.536,1.536);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFF3BB").s().p("AgHAzQgOgGgDgCQgJgFgBgJQgBgDADgGQAEgHgBgHIgCgLQgCgEgIgBIgPgDQgGgCADgFQAFgIAMgNIAFgIQACgFADgBQANgDASAlQAGAPAHAEQAJAEAOgCQAOgDAIAJQAGALgDAPQgEATgZAEIgMABQgOAAgMgFg");
	this.shape_61.setTransform(129.2,33.4,1.536,1.536);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgTg1QAIAHACAQQAEAgAOALQANAIALgLQAMgKAHAAQALABABASQAAAPgGAJQgPAVgfgGQgegGgKgVQgFgPgEgGQgEgJgLgFQgEgCgBgBQgDgBgBgDIgBgFQgCgCAEgGQADgDAFgGQAEgEACgEQAAgCAAgGQAAgFABgCQAEgDAJABQAIACAFADg");
	this.shape_62.setTransform(108.1,36,1.536,1.536);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFF3BB").s().p("AAMA6QgegGgKgVQgFgPgEgGQgEgJgLgFIgFgDQgDgBgBgDIgBgFQgCgCAEgGIAIgJQAEgEACgEIAAgIQAAgFABgCQAEgDAJABQAIACAFADQAIAHACAQQAEAgAOALQANAIALgLQAMgKAHAAQALABABASQAAAPgGAJQgLAQgWAAIgNgBg");
	this.shape_63.setTransform(108.1,36,1.536,1.536);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Agtg/QANgGAHAOQACAEAFAUQAIAdARALQAIAFASABQARACAIAEQAMAIgDAQQgDAPgOAEQgSAGghgOQgSgEgHgDQgIgEgBgFQAAgBgBgMQgBgkgQgJQgGgDgFgGQgHgJAKgGg");
	this.shape_64.setTransform(86.7,38.9,1.536,1.536);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFF3BB").s().p("AgBA4QgSgEgHgDQgIgEgBgFIgBgNQgBgkgQgJQgGgDgFgGQgHgJAKgGIAQgVQANgGAHAOIAHAYQAIAdARALQAIAFASABQARACAIAEQAMAIgDAQQgDAPgOAEQgFACgHAAQgQAAgXgKg");
	this.shape_65.setTransform(86.7,38.9,1.536,1.536);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhCghQgDgIALgKQAGgEAKgMQAIgIAIAMQAKAOAKAfQAGAZAaAIQAHACAQAFQAOAFADALQAKAegjADQggADgSgOQgGgEgDgGQgBgCgDgKQACgFABgGQABgMgHgIQgGgHgKgGQgJgHgCgCQgNgNgBgFg");
	this.shape_66.setTransform(65.5,41.4,1.536,1.536);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFF3BB").s().p("AgJA8QgGgEgDgGIgEgMQACgFABgGQABgMgHgIQgGgHgKgGIgLgJQgNgNgBgFQgDgIALgKQAGgEAKgMQAIgIAIAMQAKAOAKAfQAGAZAaAIIAXAHQAOAFADALQAKAegjADIgKAAQgZAAgPgLg");
	this.shape_67.setTransform(65.5,41.4,1.536,1.536);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag8gkQgJgJgBgHQAAgJAMgKQABgBADgFQADgEADgBQAGgDAFAFQABABAIAIQAIAKABAOQACAZABABQADANALAMQAJANAMAGQAGADARABQAOACAHAGQAJAKgCANQgCANgMAIQgPAMgfgQQgbgPgJgTQgGgMgDgRQgDgRgCgFQgDgIgEgFQgCgDgLgKg");
	this.shape_68.setTransform(43.1,42.5,1.536,1.536);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFF3BB").s().p("AAKBLQgbgPgJgTQgGgMgDgRQgDgRgCgFQgDgIgEgFIgMgNQgKgJAAgHQgBgJAMgKIAEgGQADgEADgBQAGgDAFAFIAJAJQAIAKABAOIADAaQADANALAMQAJANAMAGQAGADARABQAOACAHAGQAKAKgDANQgCANgLAIQgHAFgKAAQgMAAgSgJg");
	this.shape_69.setTransform(43.1,42.5,1.536,1.536);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag+hLQAEgCAHgMQAGgJAKADQALADADAPQACAJABARQAEAZAOAZQANAYAVAMQAGAEAPAFQANAGAFAJQAIAOgIALQgIAKgQACQgVADgbgRQgMgIgGgJQgGgJgCgQQgGghgMgYQgJgUgHgGQgIgFgEgDQgGgEABgJIADgEQAEgEAHgDg");
	this.shape_70.setTransform(21.3,45.3,1.536,1.536);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFF3BB").s().p("AABBSQgMgIgGgJQgGgJgCgQQgGghgMgYQgJgUgHgGIgMgIQgGgEABgJIADgEQAEgEAHgDQAEgCAHgMQAGgJAKADQALADADAPQACAJABARQAEAZAOAZQANAYAVAMQAGAEAPAFQANAGAFAJQAIAOgIALQgIAKgQACIgGABQgTAAgXgPg");
	this.shape_71.setTransform(21.3,45.3,1.536,1.536);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AguhbQAGAAAAgHQABgIAIgCQAOgDAIAOQAGAKABAPQABAUAAAjQABAcATATQAFAGAQAJQAOAIAFAHQAHAJABAPQAAAQgJAGQgQALgdgYQgXgTgLgUQgHgOgDgXQgCgYgDgNQgDgWgJgKQgIgHgEgEQgGgGAAgIIACgGQAFgGANgCg");
	this.shape_72.setTransform(-1.2,48.3,1.536,1.536);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFF3BB").s().p("AANBdQgXgTgLgUQgHgOgDgXQgCgYgDgNQgDgWgJgKIgMgLQgGgGAAgIIACgGQAFgGANgCQAGAAAAgHQABgIAIgCQAOgDAIAOQAGAKABAPIABA3QABAcATATQAFAGAQAJQAOAIAFAHQAHAJABAPQAAAQgJAGQgEADgHAAQgOAAgUgQg");
	this.shape_73.setTransform(-1.2,48.3,1.536,1.536);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgLhOQAAArACANQAFAdASAPQALAJAeAUQAXAUgIAXQgIAZgfgOQgVgJgTgTQgQgPgCgdQgDglgEgKQgDgGgCgOQgDgNgDgGQAAgBgQgUQgNgPAEgFIAIACQAKABAFgEQAEgFALgFQAVgQAAArg");
	this.shape_74.setTransform(-23.3,48.5,1.536,1.536);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFF3BB").s().p("AAfBpQgVgJgTgTQgQgPgCgdQgDglgEgKQgDgGgCgOQgDgNgDgGIgQgVQgNgPAEgFIAIACQAKABAFgEQAEgFALgFQAVgQAAArQAAArACANQAFAdASAPIApAdQAXAUgIAXQgFAQgPAAQgJAAgKgFg");
	this.shape_75.setTransform(-23.3,48.5,1.536,1.536);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhCheQAJAFAMgLQAPgQACgBQANgEAFARQACAFACAVQACARABAlQADAfAMASQAEAEAjAYQAaASAAATQgBAPgJAIQgKAIgPgDQgMgEgLgMQgGgHgMgQQgRgbgDgPQgCgSgKgeQgFgQgDgJQgEgOgFgIQgJgLgFgGQgKgMAHgGg");
	this.shape_76.setTransform(-45.1,49,1.536,1.536);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFF3BB").s().p("AAmB2QgMgEgLgMIgQgXQgTgbgDgPQgCgSgKgeIgIgZQgEgOgFgIIgOgRQgKgMAHgGIgBgBQAJAFAMgLIARgRQANgEAFARQACAFACAVQACARABAlQAEAfALASQAEAEAjAYQAaASAAATQgBAPgJAIQgHAGgJAAIgJgBg");
	this.shape_77.setTransform(-44.5,49,1.536,1.536);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AhBhMIgHAEQAAAIgBAUQABARAHAIQAGAIAMAJQAGADANAKQANAKAXAfQAYAaAVABQAGABAPgEQAAgJgOgOQgEgFgSgOQgHgGgOgIQgPgJgEgFQgQgMgCgCQgKgJgEgJQgCgEgDgXQgDgSgIgFQgHgFgIAFg");
	this.shape_78.setTransform(-151.1,33.3,1.536,1.536);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFF3BB").s().p("AA1BPQgVgBgYgaQgXgfgNgKIgTgNQgMgJgGgIQgHgIgBgRIABgcIAHgEQAIgFAHAFQAIAFADASQADAXACAEQAEAJAKAJIASAOIATAOIAVAOIAWATQAOAOAAAJQgNADgGAAIgCAAg");
	this.shape_79.setTransform(-151.1,33.3,1.536,1.536);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag+hmQgGADgHAPQgFAMACAPQABAHASAYQAQAWAAAGQgBATA5AvQA7AuAHgJQAFgHgugtQgvgugDgFQgJgJgDgEQgFgIgBgLQgBgngDgOQgIgdgUAKg");
	this.shape_80.setTransform(-129.1,39.4,1.536,1.536);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFF3BB").s().p("AANBEQg5gvABgTQAAgGgQgWQgSgYgBgHQgCgPAFgMQAHgPAGgDQAUgKAIAdQADAOABAnQABALAFAIIAMANQADAFAvAuQAuAtgFAHQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgNAAgxgmg");
	this.shape_81.setTransform(-129.1,39.4,1.536,1.536);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgzhzQgFADgHAPQgGANADAPQACAIAHAOQAKARACAFQADAJAHAQQAGAPADALQACALAIAPQALAUACAFQAHAWAYAOQAbAOAKgXQAIgSgWgYQgcgXgIgIQgPgTgHgKQgKgLgBghQgBgngEgOQgHgegVAKg");
	this.shape_82.setTransform(-110,42.6,1.536,1.536);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFF3BB").s().p("AAcBxQgYgOgHgWIgNgZQgIgPgCgLQgDgLgGgPIgKgZIgMgWQgHgOgCgIQgDgPAGgNQAHgPAFgDQAVgKAHAeQAEAOABAnQABAhAKALQAHAKAPATQAIAIAcAXQAWAYgIASQgGAOgMAAQgIAAgLgFg");
	this.shape_83.setTransform(-110,42.6,1.536,1.536);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgmgCQAIANACAKQADAJAEARQAEAPAFAKQALAVAcANQAhAOANgVQALgRgWgYQgHgHgfgZQgYgXgEgDQgLgMAAgeQgBgjgEgNQgIgbgaAJQgHACgJAOQgHAMADANQABAIAKAMQALARACAEQAEAIAIAQg");
	this.shape_84.setTransform(-85.8,44,1.536,1.536);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFF3BB").s().p("AAbBqQgcgNgLgVQgFgKgEgPIgHgaQgCgKgIgNIgMgYIgNgVQgKgMgBgIQgDgNAHgMQAJgOAHgCQAagJAIAbQAEANABAjQAAAeALAMIAcAaQAfAZAHAHQAWAYgLARQgIAMgPAAQgKAAgNgFg");
	this.shape_85.setTransform(-85.8,44,1.536,1.536);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("Ag5hvQgGACgKAOQgIAMAEAOQABAIAKAOQALAQADAFQATAkAEAMQACAJAFASQAEAQAFAKQAMAVAdANQAiAPAOgWQALgRgXgZQgIgJgfgYQgXgTgGgIQgMgMAAgfQgBgkgEgOQgJgcgbAKg");
	this.shape_86.setTransform(-65.2,46.4,1.536,1.536);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFF3BB").s().p("AAcBtQgdgNgMgVQgFgKgEgQIgHgbQgEgMgTgkIgOgVQgKgOgBgIQgEgOAIgMQAKgOAGgCQAbgKAJAcQAEAOABAkQAAAfAMAMQAGAIAXATQAfAYAIAJQAXAZgLARQgJANgPAAQgLAAgNgGg");
	this.shape_87.setTransform(-65.2,46.4,1.536,1.536);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AAHiXQALACAeADQAaADADAGQADAGgDAJQAAABgGAQQgCAHgIASQgHASACAKQABADgCAHQAAACAIACQAHACAAAFQAAADgDAJQgCAJgCABQgBABgIgCQgPgEgCABQgIAAgCAMQgBAOAAABQABAEAMABQAQACADAKQAAACAAAUQAAAIADAiQABAfgCAIQgCAGgCAIQgCAFgNAAQgOAAgLgMQgKgLgGAAQgJAAgGADQgBABgMALQgHAHgIgCQgBAAgOgFQgHgDgDg7QgCg+gCgIQAAgEAIgGQAHgDgDgBIgOgFQgFgEACgJQAAgMABgCQACgDAMABQAbAEAPgHQAGgDADgOQADgQABgIIAEgoQgBgPAAgHQABgNAKADg");
	this.shape_88.setTransform(-16.8,8,1.536,1.536);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFF3BB").s().p("AAQCNQgKgLgGAAQgJAAgGADIgNAMQgHAHgIgCIgPgFQgHgDgDg7QgCg+gCgIQAAgEAIgGQAHgDgDgBIgOgFQgFgEACgJQAAgMABgCQACgDAMABQAbAEAPgHQAGgDADgOIAEgYIAEgoIgBgWQABgNAKADIApAFQAaADADAGQADAGgDAJIgGARIgKAZQgHASACAKQABADgCAHQAAACAIACQAHACAAAFIgDAMQgCAJgCABQgBABgIgCQgPgEgCABQgIAAgCAMIgBAPQABAEAMABQAQACADAKIAAAWIADAqQABAfgCAIIgEAOQgCAFgNAAQgOAAgLgMg");
	this.shape_89.setTransform(-16.8,8,1.536,1.536);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABGgbQgBADgDAKQgBAKgCACQgBABgIgDQgPgEgCAAQgIABgCALQgBAOACADQACADAJAGQAOAOACADQADAGAAANIACAuQACAjgCAIQgEALgCABQgCACgPAAQgOgBgJgJQgIgJgGAAQgMAAgEAAQgGABgIAIQgIAIgGACQgFACgJgEQgHgDgDhBQgChFgCgIQgBgFAJgGQAHgFgDgCQgLgDgDgBQgFgDACgLQAAgNABgCQACgDAMABQAbAEAPgIQAGgDADgPQADgSABgIQACgmACgHQACgHgCgQQgCgPACgCQAFgHAKAEIAXAIQALADAQADQAMADADAGQADAHgDAKQgBADgFAQQgCAHgJAVQgGATACALQABAEgCAHQAAACAIACQAHADAAAFg");
	this.shape_90.setTransform(-37.5,5.5,1.536,1.536);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFF3BB").s().p("Ag6CnQgHgDgDhBQgChFgCgIQgBgFAJgGQAHgFgDgCQgLgDgDgBQgFgDACgLQAAgNABgCQACgDAMABQAbAEAPgIQAGgDADgPIAEgaQACgmACgHQACgHgCgQQgCgPACgCQAFgHAKAEIAXAIIAbAGQAMADADAGQADAHgDAKIgGATIgLAcQgGATACALQABAEgCAHQAAACAIACQAHADAAAFIgEANQgBAKgCACQgBABgIgDIgRgEQgIABgCALQgBAOACADQACADAJAGQAOAOACADQADAGAAANIACAuQACAjgCAIQgEALgCABQgCACgPAAQgOgBgJgJQgIgJgGAAIgQAAQgGABgIAIQgIAIgGACIgEABQgEAAgGgDg");
	this.shape_91.setTransform(-37.5,5.5,1.536,1.536);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("AgciuQAHgHARAFQAHADAWAHQACAAAqAGQAeAEACAGQAFALAAAGQAAAKgLADQgLADgGAHQgDAFgEAMQgCAHgHAMQgEAKACALQACAHABAHQACAFAJADQAIACAAAHQgBAHgGADQgKAFgEACQgGACgGgBQgJgEgDAAQgDAAgBALQgCANACACQACACAIAGQALALABAIQAAAGgCAOQAAAJACAlQACAjgCAIQgDAHgDALQgFAHgNAAQgOAAgGgLQgFgLgGAAQgCAAgRgEQgJgCgHAHQgIAJgGABQgFACgJgEQgHgDAAhAQABhEgBgIQgBgKgBgFQgBgIgFgBQgSgHgBgBQgJgGACgKQABgKALAAQAHAAASAEQAKABgHgSQgGgUAEgCQAKgFACgBQAFgFABgLQACgIAMgOQAKgNgCgCQgJgLABgQQABgNAFgFg");
	this.shape_92.setTransform(-59.1,3.1,1.536,1.536);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFF3BB").s().p("AALCoQgFgLgGAAIgTgEQgJgCgHAHQgIAJgGABQgFACgJgEQgHgDAAhAQABhEgBgIIgCgPQgBgIgFgBIgTgIQgJgGACgKQABgKALAAIAZAEQAKABgHgSQgGgUAEgCIAMgGQAFgFABgLQACgIAMgOQAKgNgCgCQgJgLABgQQABgNAFgFQAHgHARAFIAdAKIAsAGQAeAEACAGQAFALAAAGQAAAKgLADQgLADgGAHQgDAFgEAMQgCAHgHAMQgEAKACALIADAOQACAFAJADQAIACAAAHQgBAHgGADIgOAHQgGACgGgBQgJgEgDAAQgDAAgBALQgCANACACIAKAIQALALABAIIgCAUIACAuQACAjgCAIIgGASQgFAHgNAAQgOAAgGgLg");
	this.shape_93.setTransform(-59.1,3.1,1.536,1.536);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#CEC28E").ss(0.8,0,0,4).p("ABHhxQgKAEgDAJQgGAQAAAFQgCAMAIAJQAEAFAJAIQAGAEADAHQACAGACAFQABADgEACQgTAIgLgDQgIgBgCACQgBACgCAOQgBAOACACQABACAJAGQALAKAAAIQAAAGgCAOQAAAKADAlQABAigCAJQgCAHgEAKQgEAIgOAAQgOAAgGgLQgFgLgHAAQgDAAgOgEQgJgDgHAHQgJAJgFABQgGACgJgEQgHgCAAhBQAChEgBgIQgBgKgBgFQgCgJgFAAQgNgEgFgEQgJgFABgLQACgKADAAQADABAOADQAkAEAMgGQAGgDAAgHQgBgKABgIQADgQABgWQABgagDgEQgQgQgFgIQgKgOAMgKQAHgHAaAHQAMADAZAIQAKADAbACQAWACADAHQAIAQAAABQADALgLADQgRAEgEADg");
	this.shape_94.setTransform(-82.2,0,1.536,1.536);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFF3BB").s().p("AAQCqQgFgLgHAAIgRgEQgJgDgHAHQgJAJgFABQgGACgJgEQgHgCAAhBQAChEgBgIIgCgPQgCgJgFAAQgNgEgFgEQgJgFABgLQACgKADAAIARAEQAkAEAMgGQAGgDAAgHQgBgKABgIQADgQABgWQABgagDgEQgQgQgFgIQgKgOAMgKQAHgHAaAHIAlALQAKADAbACQAWACADAHIAIARQADALgLADQgRAEgEADQgKAEgDAJQgGAQAAAFQgCAMAIAJIANANQAGAEADAHIAEALQABADgEACQgTAIgLgDQgIgBgCACIgDAQQgBAOACACIAKAIQALAKAAAIIgCAUIADAvQABAigCAJIgGARQgEAIgOAAQgOAAgGgLg");
	this.shape_95.setTransform(-82.2,0,1.536,1.536);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.7,-68.3,752.4,209.2);


(lib.trex_skull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// trex_skull-top
	this.instance = new lib.trex_skulltop("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(81.7,-93.4,1,1,0,0,0,203.6,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

	// trex_skull-btm
	this.instance_1 = new lib.trex_skullbtm("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(112.7,-41.6,1,1,0,0,0,145.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:77.3,regY:91.4,rotation:1.1,x:43.2,y:34.7},0).wait(1).to({rotation:2.2,x:41.7,y:33.4},0).wait(1).to({rotation:3.4,x:40.2,y:31.9},0).wait(1).to({rotation:4.5,x:38.8,y:30.5},0).wait(1).to({rotation:5.6,x:37.5,y:29},0).wait(1).to({rotation:6.7,x:36,y:27.5},0).wait(1).to({rotation:7.9,x:34.7,y:26},0).wait(1).to({rotation:6.6,x:36.3,y:27.8},0).wait(1).to({rotation:5.2,x:37.9,y:29.5},0).wait(1).to({rotation:3.9,x:39.5,y:31.2},0).wait(1).to({rotation:2.6,x:41.2,y:32.9},0).wait(1).to({rotation:1.3,x:43,y:34.4},0).wait(1).to({rotation:0,x:44.7,y:36},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-128.4,245.8,256.8);


(lib.trex_scratch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t-rex_backLeg-foot-R
	this.instance = new lib.trex_backLegfootR();
	this.instance.parent = this;
	this.instance.setTransform(116.5,41.2,0.688,0.688,-46.6,0,0,0,-44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0,scaleX:0.69,scaleY:0.69,rotation:-43.1,x:115.4,y:43.7},0).wait(1).to({rotation:-39.8,x:91.8,y:25},0).wait(1).to({rotation:-44.8,x:66,y:25.6},0).wait(1).to({rotation:-49.8,x:40,y:25.9},0).wait(1).to({rotation:-54.8,x:13.8,y:26.1},0).wait(1).to({rotation:-32.3,x:-40.7,y:34.4},0).wait(1).to({rotation:-9.8,x:-97.8,y:38.7},0).wait(1).to({rotation:35.1,x:-165.2,y:24.8},0).wait(1).to({rotation:80.1,x:-222.2,y:-3.8},0).wait(1).to({rotation:125,x:-261.5,y:-35.5},0).wait(1).to({rotation:124.7,x:-257.6,y:-24.1},0).wait(1).to({rotation:124.5,x:-253.7,y:-12.6},0).wait(1).to({rotation:124.2,x:-249.8,y:-1.2},0).wait(1).to({rotation:139.6,x:-250.2,y:-24.3},0).wait(1).to({rotation:155.1,x:-249.3,y:-45.7},0).wait(1).to({rotation:129.5,x:-254,y:-20.4},0).wait(1).to({rotation:103.9,x:-254.2,y:8.7},0).wait(1).to({rotation:125.4,x:-255.4,y:-18.7},0).wait(1).to({rotation:146.8,x:-253.1,y:-43.6},0).wait(1).to({rotation:121.6,x:-256.5,y:-17},0).wait(1).to({rotation:96.4,x:-254.9,y:12.6},0).wait(1).to({rotation:125.7,x:-255.3,y:-18.8},0).wait(1).to({rotation:155.1,x:-249.3,y:-45.7},0).wait(1).to({rotation:127.4,x:-254.7,y:-19.5},0).wait(1).to({rotation:99.7,x:-254.6,y:10.9},0).wait(1).to({rotation:123.3,x:-256,y:-17.7},0).wait(1).to({rotation:146.8,x:-253.1,y:-43.6},0).wait(1).to({rotation:121.2,x:-256.6,y:-16.8},0).wait(1).to({rotation:95.7,x:-254.9,y:13},0).wait(1).to({rotation:125.4,x:-255.4,y:-18.7},0).wait(1).to({rotation:155.1,x:-249.3,y:-45.7},0).wait(1).to({rotation:119.5,x:-257.1,y:-16},0).wait(1).to({rotation:83.9,x:-254.9,y:19.3},0).wait(1).to({rotation:115.4,x:-258.1,y:-14},0).wait(1).to({rotation:146.8,x:-253.1,y:-43.6},0).wait(1).to({rotation:121.4,x:-256.6,y:-16.9},0).wait(1).to({rotation:95.9,x:-254.9,y:12.9},0).wait(1).to({rotation:125.5,x:-255.3,y:-18.7},0).wait(1).to({rotation:155.1,x:-249.3,y:-45.7},0).wait(1).to({rotation:121.4,x:-256.6,y:-16.9},0).wait(1).to({rotation:87.7,x:-255,y:17.3},0).wait(1).to({rotation:117.2,x:-257.6,y:-15},0).wait(1).to({rotation:146.8,x:-253.1,y:-43.6},0).wait(1).to({rotation:126.2,x:-256.8,y:-30.1},0).wait(1).to({rotation:105.7,x:-257.2,y:-14.2},0).wait(1).to({rotation:85.1,x:-253.9,y:2.7},0).wait(1).to({rotation:64.5,x:-246.7,y:19.2},0).wait(43).to({rotation:44.5,x:-171.4,y:48.7},0).wait(1).to({rotation:24.5,x:-93.5,y:75.5},0).wait(1).to({rotation:4.6,x:-14.1,y:98.9},0).wait(1).to({rotation:4.6},0).wait(25).to({rotation:-3,x:-33.5,y:66.5},0).wait(1).to({rotation:-10.5,x:-53,y:33.6},0).wait(1).to({rotation:49.6,x:-124.2,y:117.9},0).wait(8).to({rotation:37.2,x:-67.7,y:109},0).wait(1).to({rotation:24.8,x:-10.3,y:98.9},0).wait(1).to({rotation:12.4,x:47.7,y:87.5},0).wait(1).to({rotation:0,x:106,y:74.8},0).wait(1));

	// t-rex_backLeg-mid-R
	this.instance_1 = new lib.trex_backLegmidR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.2,29.9,0.688,0.688,-15,0,0,-53.9,-14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,scaleX:0.69,scaleY:0.69,rotation:-11.3,x:14.2,y:4.2},0).wait(1).to({rotation:-7.6,x:-7.8,y:-21.2},0).wait(1).to({rotation:-10.7,x:-35.7,y:-14.5},0).wait(1).to({rotation:-13.9,x:-63.8,y:-7.9},0).wait(1).to({rotation:-17,x:-91.9,y:-1.2},0).wait(1).to({rotation:20.4,x:-100.4,y:-26},0).wait(1).to({rotation:57.8,x:-121.8,y:-59.8},0).wait(1).to({rotation:74.7,x:-139.4,y:-61.1},0).wait(1).to({rotation:91.5,x:-157,y:-65.7},0).wait(1).to({rotation:108.3,x:-173.7,y:-73.4},0).wait(1).to({rotation:103.3,x:-174.6,y:-62.4},0).wait(1).to({rotation:98.3,x:-175.3,y:-51.5},0).wait(1).to({rotation:93.2,x:-175.9,y:-41},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:108.3,x:-173.7,y:-73.4},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:93.2,x:-175.9,y:-41},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:108.3,x:-173.7,y:-73.4},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:93.2,x:-175.9,y:-41},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:108.3,x:-173.7,y:-73.4},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:93.2,x:-175.9,y:-41},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:108.3,x:-173.7,y:-73.4},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:93.2,x:-175.9,y:-41},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:108.3,x:-173.7,y:-73.4},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:93.2,x:-175.9,y:-41},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:108.3,x:-173.7,y:-73.4},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:93.2,x:-175.9,y:-41},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:108.3,x:-173.7,y:-73.4},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:93.2,x:-175.9,y:-41},0).wait(1).to({rotation:100.8,x:-174.9,y:-56.9},0).wait(1).to({rotation:108.3,x:-173.7,y:-73.4},0).wait(1).to({rotation:106.3,x:-172.9,y:-71.2},0).wait(1).to({rotation:104.3,x:-172,y:-69.1},0).wait(1).to({rotation:102.3,x:-171.1,y:-66.9},0).wait(1).to({rotation:100.3,x:-170.3,y:-64.9},0).wait(43).to({rotation:65.3,x:-136.4,y:-20.6},0).wait(1).to({rotation:30.3,x:-104.9,y:10},0).wait(1).to({rotation:-4.7,x:-83.3,y:30.7},0).wait(1).to({rotation:-4.7},0).wait(25).to({rotation:-14.4,x:-111.7,y:10.7},0).wait(1).to({rotation:-24,x:-141.2,y:-9.3},0).wait(1).to({rotation:5.8,x:-151.4,y:31.1},0).wait(1).to({rotation:5.8},0).wait(7).to({rotation:5.4,x:-104.6,y:22.9},0).wait(1).to({rotation:5,x:-57.8,y:14.7},0).wait(1).to({rotation:4.6,x:-11,y:6.4},0).wait(1).to({rotation:4.2,x:35.8,y:-1.8},0).wait(1));

	// t-rex-backLeg-upper-R
	this.instance_2 = new lib.trexbackLegupperR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-30,-83.8,0.689,0.689,2.8,0,0,0,-54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:0,rotation:13.4,x:-42.4,y:-70.9},0).wait(1).to({rotation:24,x:-52.6,y:-96.8},0).wait(1).to({rotation:42.5,x:-70.4,y:-76.1},0).wait(1).to({rotation:61,x:-85.6,y:-58.3},0).wait(1).to({rotation:79.5,x:-97.3,y:-42.3},0).wait(1).to({rotation:109.5,x:-95.4,y:-66.3},0).wait(1).to({rotation:139.5,x:-84,y:-86.8},0).wait(1).to({rotation:139.4,x:-83.9,y:-85.3},0).wait(1).to({x:-83.8,y:-83.8},0).wait(1).to({rotation:139.3,y:-82.3},0).wait(1).to({rotation:134.3,x:-86.1,y:-80.1},0).wait(1).to({rotation:129.4,x:-88.3,y:-77.6},0).wait(1).to({rotation:124.4,x:-90.3,y:-75},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:139.3,x:-83.8,y:-82.3},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:124.4,x:-90.3,y:-75},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:139.3,x:-83.8,y:-82.3},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:124.4,x:-90.3,y:-75},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:139.3,x:-83.8,y:-82.3},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:124.4,x:-90.3,y:-75},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:139.3,x:-83.8,y:-82.3},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:124.4,x:-90.3,y:-75},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:139.3,x:-83.8,y:-82.3},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:124.4,x:-90.3,y:-75},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:139.3,x:-83.8,y:-82.3},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:124.4,x:-90.3,y:-75},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:139.3,x:-83.8,y:-82.3},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:124.4,x:-90.3,y:-75},0).wait(1).to({rotation:131.9,x:-87.3,y:-78.9},0).wait(1).to({rotation:139.3,x:-83.8,y:-82.3},0).wait(47).to({rotation:112.5,x:-94,y:-69.5},0).wait(1).to({rotation:85.7,x:-96.8,y:-53.6},0).wait(1).to({rotation:59,x:-91.5,y:-38.3},0).wait(26).to({rotation:63.4,x:-125.9,y:-42.3},0).wait(1).to({rotation:67.8,x:-160,y:-46.4},0).wait(1).to({rotation:59.4,x:-163.6,y:-41.5},0).wait(8).to({rotation:44.6,x:-131.6,y:-51.9},0).wait(1).to({rotation:29.7,x:-97.8,y:-64.1},0).wait(1).to({rotation:14.9,x:-62.8,y:-78.5},0).wait(1).to({rotation:0,x:-27.2,y:-95.3},0).wait(1));

	// t-rex_skull
	this.instance_3 = new lib.trex_skull("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-417.2,-128.8,0.686,0.686,19.3,0,0,40.2,-36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:1,regY:0.1,scaleX:0.69,scaleY:0.69,rotation:11.4,x:-447.5,y:-115.4},0).wait(1).to({rotation:3.2,x:-443.5,y:-116.9},0).wait(1).to({rotation:5,x:-445.2,y:-80.4},0).wait(1).to({rotation:6.8,x:-446.8,y:-44},0).wait(1).to({rotation:8.5,x:-448.5,y:-7.5},0).wait(1).to({rotation:10.3,x:-449.6,y:-5.9},0).wait(1).to({rotation:12,x:-450.7,y:-4.2},0).wait(1).to({x:-450.1,y:-11.1},0).wait(1).to({x:-449.4,y:-17.9},0).wait(1).to({x:-448.7,y:-24.7},0).wait(1).to({rotation:15,x:-449.7,y:-30.2},0).wait(1).to({rotation:18,x:-450.5,y:-35.8},0).wait(1).to({rotation:21,x:-451.2,y:-41.3},0).wait(1).to({rotation:24,x:-457.9,y:-39.8},0).wait(1).to({rotation:27,x:-464.5,y:-38.4},0).wait(1).to({x:-464.1,y:-30.7},0).wait(1).to({x:-463.6,y:-23},0).wait(1).to({x:-464.1,y:-30.7},0).wait(1).to({x:-464.5,y:-38.4},0).wait(1).to({x:-464.1,y:-30.7},0).wait(1).to({x:-463.6,y:-23},0).wait(1).to({x:-464.1,y:-30.7},0).wait(1).to({x:-464.5,y:-38.4},0).wait(1).to({x:-464.1,y:-30.7},0).wait(1).to({x:-463.6,y:-23},0).wait(1).to({x:-464.1,y:-30.7},0).wait(1).to({x:-464.5,y:-38.4},0).wait(1).to({x:-464.1,y:-30.7},0).wait(1).to({x:-463.6,y:-23},0).wait(1).to({x:-464.1,y:-30.7},0).wait(1).to({x:-464.5,y:-38.4},0).wait(1).to({x:-464.1,y:-30.7},0).wait(1).to({x:-463.6,y:-23},0).wait(1).to({x:-464.1,y:-30.7},0).wait(1).to({x:-464.5,y:-38.4},0).wait(1).to({x:-464.1,y:-30.7},0).wait(1).to({x:-463.6,y:-23},0).wait(1).to({x:-464.1,y:-30.7},0).wait(1).to({x:-464.5,y:-38.4},0).wait(1).to({x:-464.1,y:-30.7},0).wait(1).to({x:-463.6,y:-23},0).wait(1).to({x:-464.1,y:-30.7},0).wait(1).to({x:-464.5,y:-38.4},0).wait(1).to({rotation:22.7,x:-460.6,y:-38},0).wait(1).to({rotation:18.4,x:-456.4,y:-37.6},0).wait(1).to({rotation:14.1,x:-452.1,y:-37.3},0).wait(1).to({rotation:9.8,x:-447.6,y:-37.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:9.3,x:-447.1,y:-36.7},0).wait(1).to({rotation:8.8,x:-446.5,y:-36.3},0).wait(1).to({rotation:8.3,x:-446,y:-35.9},0).wait(1).to({rotation:7.8,x:-445.5,y:-35.5},0).wait(1).to({rotation:7.3,x:-445,y:-35.1},0).wait(1).to({rotation:6.8,x:-444.4,y:-34.7},0).wait(1).to({rotation:6.3,x:-443.9,y:-34.3},0).wait(1).to({rotation:5.8,x:-443.4,y:-34},0).wait(1).to({rotation:5.3,x:-442.8,y:-33.6},0).wait(1).to({rotation:4.8,x:-442.3,y:-33.2},0).wait(1).to({rotation:4.3,x:-441.8,y:-32.8},0).wait(1).to({rotation:3.8,x:-441.2,y:-32.5},0).wait(1).to({rotation:3.3,x:-440.7,y:-32.1},0).wait(1).to({rotation:2.8,x:-440.1,y:-31.7},0).wait(1).to({rotation:2.3,x:-439.6,y:-31.3},0).wait(1).to({rotation:1.8,x:-439,y:-31},0).wait(1).to({rotation:1.3,x:-438.5,y:-30.6},0).wait(1).to({rotation:0.8,x:-437.9,y:-30.2},0).wait(1).to({rotation:0.3,x:-437.4,y:-29.9},0).wait(1).to({rotation:-0.2,x:-436.8,y:-29.5},0).wait(1).to({rotation:-0.7,x:-436.3,y:-29.1},0).wait(1).to({rotation:-1.2,x:-435.7,y:-28.8},0).wait(1).to({rotation:-1.7,x:-435.1,y:-28.4},0).wait(1).to({rotation:-2.2,x:-434.6,y:-28.1},0).wait(1).to({rotation:-2.7,x:-434,y:-27.7},0).wait(1).to({rotation:-3.2,x:-433.4,y:-27.4},0).wait(1).to({rotation:-3.7,x:-432.9,y:-27},0).wait(1).to({rotation:-4.2,x:-432.3,y:-26.7},0).wait(1).to({rotation:-4.7,x:-431.7,y:-26.3},0).wait(1).to({rotation:-5.2,x:-431.1,y:-26},0).wait(1).to({rotation:-5.7,x:-430.6,y:-25.6},0).wait(1).to({rotation:-6.2,x:-430,y:-25.3},0).wait(1).to({rotation:-6.7,x:-429.4,y:-25},0).wait(1).to({rotation:-7.2,x:-428.8,y:-24.6},0).wait(1).to({rotation:-7.7,x:-428.2,y:-24.3},0).wait(1).to({rotation:-8.2,x:-427.6,y:-24},0).wait(1).to({rotation:-8.7,x:-427,y:-23.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-6.9,x:-432.1,y:0.1},0).wait(1).to({rotation:-5.1,x:-437.1,y:24},0).wait(1).to({regX:71.7,regY:-79.8,rotation:-3.5,x:-392,y:-21.9,mode:"synched"},0).wait(1).to({regX:1,regY:0.1,rotation:-5.1,x:-436.7,y:33.5,startPosition:1},0).wait(1).to({rotation:-6.5,x:-436.5,y:31.1,startPosition:2},0).wait(1).to({rotation:-8,x:-436.2,y:28.6,startPosition:3},0).wait(1).to({rotation:-9.4,x:-435.9,y:26.1,startPosition:4},0).wait(1).to({rotation:-9.2,x:-434.7,y:32.1,startPosition:5},0).wait(1).to({rotation:-9,x:-433.5,y:38.1,startPosition:6},0).wait(1).to({rotation:-8.8,x:-432.3,y:44,startPosition:7},0).wait(1).to({rotation:-9,x:-433.5,y:38.1,startPosition:8},0).wait(1).to({rotation:-9.2,x:-434.7,y:32.1,startPosition:9},0).wait(1).to({rotation:-9.4,x:-435.9,y:26.1,startPosition:10},0).wait(1).to({rotation:-9.2,x:-434.7,y:32.1,startPosition:11},0).wait(1).to({rotation:-9,x:-433.5,y:38.1,startPosition:12},0).wait(1).to({rotation:-8.8,x:-432.3,y:44,startPosition:13},0).wait(1).to({rotation:-9,x:-433.5,y:38.1,startPosition:0},0).wait(1).to({rotation:-9.2,x:-434.7,y:32.1,startPosition:1},0).wait(1).to({rotation:-9.4,x:-435.9,y:26.1,startPosition:2},0).wait(1).to({rotation:-9.2,x:-434.7,y:32.1,startPosition:3},0).wait(1).to({rotation:-9,x:-433.5,y:38.1,startPosition:4},0).wait(1).to({rotation:-8.8,x:-432.3,y:44,startPosition:5},0).wait(1).to({rotation:-9,x:-433.5,y:38.1,startPosition:6},0).wait(1).to({rotation:-9.2,x:-434.7,y:32.1,startPosition:7},0).wait(1).to({rotation:-9.4,x:-435.9,y:26.1,startPosition:8},0).wait(1).to({rotation:-7.5,x:-436.3,y:29.5,startPosition:9},0).wait(1).to({rotation:-5.6,x:-436.6,y:32.7,startPosition:10},0).wait(1).to({rotation:-3.7,x:-436.9,y:35.9,startPosition:11},0).wait(1).to({rotation:-0.4,x:-460.3,y:48.3,startPosition:12},0).wait(1).to({rotation:2.9,x:-483.5,y:60.6,startPosition:13},0).wait(1).to({rotation:6.2,x:-506.5,y:72.6,startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({regX:67.2,regY:-73.6,rotation:6.1,x:-456,y:25.4,mode:"single",startPosition:7},0).wait(1).to({regX:1,regY:0.1,rotation:6.2,x:-506.7,y:70.7},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:7},0).wait(1).to({rotation:4.7,x:-487.7,y:20.1},0).wait(1).to({rotation:3.1,x:-468.7,y:-30.6},0).wait(1).to({rotation:1.6,x:-449.7,y:-81.4},0).wait(1).to({rotation:0,x:-430.7,y:-132.1},0).wait(1));

	// ball
	this.instance_4 = new lib.ball("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1236,-204.5,1,1,0,0,0,-0.8,31.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).wait(1).to({regX:-1.1,regY:-0.8,x:-1211.3,y:-238.9},0).wait(1).to({x:-1186,y:-244.2},0).wait(1).to({x:-1160.5,y:-252.7},0).wait(1).to({x:-1134.6,y:-263.9},0).wait(1).to({x:-1108.3,y:-276.5},0).wait(1).to({x:-1081.6,y:-288.3},0).wait(1).to({x:-1054.5,y:-293},0).wait(1).to({x:-1027.2,y:-275.4},0).wait(1).to({x:-1000.3,y:-222.9},0).wait(1).to({x:-974.9,y:-149.1},0).wait(1).to({x:-952.4,y:-64.4},0).wait(1).to({x:-933.3,y:27.6},0).wait(1).to({x:-917.3,y:124},0).wait(1).to({scaleX:1.5,scaleY:0.7,x:-903.8,y:-0.5},0).wait(1).to({scaleX:1,scaleY:1,x:-891.5,y:-93.7},0).wait(1).to({x:-880.4,y:-121.6},0).wait(1).to({x:-869.8,y:-93.7},0).wait(1).to({x:-859.6,y:-10.3},0).wait(1).to({x:-849.3,y:124},0).wait(1).to({x:-839,y:58.3},0).wait(1).to({scaleX:1.3,scaleY:0.8,x:-828.5,y:42.4},0).wait(1).to({scaleX:1,scaleY:1,x:-817.4,y:58.3},0).wait(1).to({x:-805.9,y:124},0).wait(1).to({x:-794,y:95.6},0).wait(1).to({scaleX:1.2,scaleY:0.9,x:-781.6,y:98.9},0).wait(1).to({scaleX:1,scaleY:1,x:-768.5,y:124},0).wait(1).to({x:-754.9},0).wait(1).to({regX:-0.8,regY:31.8,x:-732.1,y:159},0).wait(1).to({regX:-1.1,regY:-0.8,x:-718.1,y:126.4},0).wait(1).to({x:-704.9},0).wait(1).to({x:-689.8,y:126.5},0).wait(1).to({x:-675,y:126.6},0).wait(1).to({x:-659.1,y:126.7},0).wait(1).to({x:-642.8,y:126.8},0).wait(1).to({x:-626.2,y:126.9},0).wait(1).to({x:-618.2,y:127},0).wait(1).to({x:-611.1,y:127.1},0).wait(1).to({x:-603.8,y:127.2},0).wait(1).to({x:-596},0).wait(1).to({x:-588.2,y:127.3},0).wait(1).to({x:-580.2},0).wait(1).to({x:-571.9},0).wait(1).to({x:-563,y:127.4},0).wait(1).to({x:-560.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-0.8,regY:31.8,x:-559.9,y:160},0).wait(1).to({regX:-1.1,regY:-0.8,x:-560.2,y:127.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,skewX:3.3,skewY:1.3,x:-558.2,y:124.1},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:15.9,skewY:6.2,x:-550.6,y:112.4},0).wait(1).to({scaleX:0.97,scaleY:1.01,skewX:26.1,skewY:10.3,x:-544.7,y:104},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:-522.3,y:46.5},0).wait(1).to({x:-494.5,y:-25},0).wait(1).to({x:-465.2,y:-100.3},0).wait(1));

	// t-rex pelvis
	this.instance_5 = new lib.trexpelvis();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-72,-140.9,0.689,0.689,0,0,0,-63,-116.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0,regY:0,x:-28.6,y:-85.3},0).wait(1).to({y:-110},0).wait(1).to({rotation:0.3,x:-29.1,y:-78.7},0).wait(1).to({rotation:0.7,x:-29.6,y:-47.3},0).wait(1).to({rotation:1,x:-30.1,y:-15.9},0).wait(1).to({rotation:1.4,x:-30.6,y:-15.7},0).wait(1).to({rotation:1.7,x:-31,y:-15.4},0).wait(1).to({rotation:2,x:-31.5,y:-15.2},0).wait(1).to({rotation:2.4,x:-32,y:-14.9},0).wait(1).to({rotation:2.7,x:-32.5,y:-14.7},0).wait(1).to({rotation:3.1,x:-31,y:-16.5},0).wait(1).to({rotation:3.4,x:-29.5,y:-18.2},0).wait(1).to({rotation:3.7,x:-28,y:-20},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:-0.4,x:-22.1,y:-22.9},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:3.7,x:-28,y:-20},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:-0.4,x:-22.1,y:-22.9},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:3.7,x:-28,y:-20},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:-0.4,x:-22.1,y:-22.9},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:3.7,x:-28,y:-20},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:-0.4,x:-22.1,y:-22.9},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:3.7,x:-28,y:-20},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:-0.4,x:-22.1,y:-22.9},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:3.7,x:-28,y:-20},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:-0.4,x:-22.1,y:-22.9},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:3.7,x:-28,y:-20},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:-0.4,x:-22.1,y:-22.9},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:3.7,x:-28,y:-20},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:-0.4,x:-22.1,y:-22.9},0).wait(1).to({rotation:1.7,x:-25,y:-21.4},0).wait(1).to({rotation:3.7,x:-28,y:-20},0).wait(45).to({rotation:-5.2,x:-25,y:-26.1},0).wait(1).to({rotation:-14.1,x:-23.3,y:-34},0).wait(1).to({rotation:-23,x:-23.1,y:-43.6},0).wait(26).to({rotation:-26,x:-44.7,y:-48.4},0).wait(1).to({rotation:-29,x:-66.4,y:-53.3},0).wait(1).to({rotation:-32,x:-88.3,y:-58.4},0).wait(8).to({rotation:-24,x:-71.5,y:-69.9},0).wait(1).to({rotation:-16,x:-56,y:-82.5},0).wait(1).to({rotation:-8,x:-41.8,y:-96.4},0).wait(1).to({rotation:0,x:-28.6,y:-111.7},0).wait(1));

	// t-rex_ribs
	this.instance_6 = new lib.trex_ribs();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-71.6,-111.6,0.687,0.687,3,0,0,190.5,-52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,regY:0,rotation:0.2,x:-203.5,y:-100.2},0).wait(1).to({rotation:-2.6,x:-202.3,y:-118.1},0).wait(1).to({rotation:-3.7,x:-201.4,y:-84.6},0).wait(1).to({rotation:-4.8,x:-200.6,y:-51},0).wait(1).to({rotation:-5.8,x:-199.7,y:-17.5},0).wait(1).to({rotation:-6.9,x:-198.2,y:-15.3},0).wait(1).to({rotation:-8,x:-196.6,y:-13.1},0).wait(1).to({rotation:-7.1,x:-196.8,y:-15.2},0).wait(1).to({rotation:-6.2,x:-197,y:-17.3},0).wait(1).to({rotation:-5.3,x:-197.2,y:-19.4},0).wait(1).to({rotation:-4.7,x:-197.1,y:-20.8},0).wait(1).to({rotation:-4.2,x:-197,y:-22.3},0).wait(1).to({rotation:-3.6,x:-196.8,y:-23.8},0).wait(1).to({rotation:-4.3,x:-198.4,y:-21.8},0).wait(1).to({rotation:-5,x:-199.9,y:-19.8},0).wait(1).to({rotation:-5.9,x:-199.2,y:-17.8},0).wait(1).to({rotation:-6.8,x:-198.4,y:-15.8},0).wait(1).to({rotation:-5.9,x:-199.2,y:-17.8},0).wait(1).to({rotation:-5,x:-199.9,y:-19.8},0).wait(1).to({rotation:-5.9,x:-199.2,y:-17.8},0).wait(1).to({rotation:-6.8,x:-198.4,y:-15.8},0).wait(1).to({rotation:-5.9,x:-199.2,y:-17.8},0).wait(1).to({rotation:-5,x:-199.9,y:-19.8},0).wait(1).to({rotation:-5.9,x:-199.2,y:-17.8},0).wait(1).to({rotation:-6.8,x:-198.4,y:-15.8},0).wait(1).to({rotation:-5.9,x:-199.2,y:-17.8},0).wait(1).to({rotation:-5,x:-199.9,y:-19.8},0).wait(1).to({rotation:-5.9,x:-199.2,y:-17.8},0).wait(1).to({rotation:-6.8,x:-198.4,y:-15.8},0).wait(1).to({rotation:-5.9,x:-199.2,y:-17.8},0).wait(1).to({rotation:-5,x:-199.9,y:-19.8},0).wait(1).to({rotation:-5.9,x:-199.2,y:-17.8},0).wait(1).to({rotation:-6.8,x:-198.4,y:-15.8},0).wait(1).to({rotation:-5.9,x:-199.2,y:-17.8},0).wait(1).to({rotation:-5,x:-199.9,y:-19.8},0).wait(1).to({rotation:-5.9,x:-199.2,y:-17.8},0).wait(1).to({rotation:-6.8,x:-198.4,y:-15.8},0).wait(1).to({rotation:-5.9,x:-199.2,y:-17.8},0).wait(1).to({rotation:-5,x:-199.9,y:-19.8},0).wait(1).to({rotation:-5.9,x:-199.2,y:-17.8},0).wait(1).to({rotation:-6.8,x:-198.4,y:-15.8},0).wait(1).to({rotation:-5.9,x:-199.2,y:-17.8},0).wait(1).to({rotation:-5,x:-199.9,y:-19.8},0).wait(1).to({rotation:-3.9,x:-200.8,y:-22.2},0).wait(1).to({rotation:-2.8,x:-201.6,y:-24.7},0).wait(1).to({rotation:-1.7,x:-202.4,y:-27.2},0).wait(1).to({rotation:-0.6,x:-203.2,y:-29.7},0).wait(1).to({rotation:-0.6},0).wait(42).to({rotation:-3.9,x:-202.9,y:-20.9},0).wait(1).to({rotation:-7.2,x:-202.1,y:-12.2},0).wait(1).to({rotation:-10.5,x:-201,y:-3.8},0).wait(1).to({rotation:-9.7,x:-201.7,y:-5.3},0).wait(1).to({rotation:-9,x:-202.4,y:-6.8},0).wait(1).to({rotation:-8.3,x:-203.1,y:-8.4},0).wait(1).to({rotation:-7.6,x:-203.8,y:-9.9},0).wait(1).to({rotation:-8.7,x:-202.8,y:-7.7},0).wait(1).to({rotation:-9.7,x:-201.8,y:-5.4},0).wait(1).to({rotation:-10.8,x:-200.7,y:-3.2},0).wait(1).to({rotation:-9.7,x:-201.8,y:-5.4},0).wait(1).to({rotation:-8.7,x:-202.8,y:-7.7},0).wait(1).to({rotation:-7.6,x:-203.8,y:-9.9},0).wait(1).to({rotation:-8.7,x:-202.8,y:-7.7},0).wait(1).to({rotation:-9.7,x:-201.8,y:-5.4},0).wait(1).to({rotation:-10.8,x:-200.7,y:-3.2},0).wait(1).to({rotation:-9.7,x:-201.8,y:-5.4},0).wait(1).to({rotation:-8.7,x:-202.8,y:-7.7},0).wait(1).to({rotation:-7.6,x:-203.8,y:-9.9},0).wait(1).to({rotation:-8.7,x:-202.8,y:-7.7},0).wait(1).to({rotation:-9.7,x:-201.8,y:-5.4},0).wait(1).to({rotation:-10.8,x:-200.7,y:-3.2},0).wait(1).to({rotation:-9.7,x:-201.8,y:-5.4},0).wait(1).to({rotation:-8.7,x:-202.8,y:-7.7},0).wait(1).to({rotation:-7.6,x:-203.8,y:-9.9},0).wait(1).to({rotation:-8.6,x:-202.9,y:-7.9},0).wait(1).to({rotation:-9.5,x:-202,y:-5.8},0).wait(1).to({rotation:-10.5,x:-201,y:-3.8},0).wait(1).to({rotation:-13.6,x:-219.1,y:1.5},0).wait(1).to({rotation:-16.8,x:-236.9,y:6.7},0).wait(1).to({rotation:-19.9,x:-254.4,y:11.5},0).wait(8).to({rotation:-15,x:-243.5,y:-22.2},0).wait(1).to({rotation:-10,x:-231.7,y:-56.4},0).wait(1).to({rotation:-5,x:-218.9,y:-91.1},0).wait(1).to({rotation:0,x:-205.3,y:-126.1},0).wait(1));

	// t-rex_tail-base
	this.instance_7 = new lib.trex_tailbase();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-42,-133.8,0.999,0.999,-15.1,0,0,-251.3,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:91.8,regY:36.6,scaleX:1,scaleY:1,rotation:-7.9,x:307.1,y:-139.6},0).wait(1).to({rotation:-0.6,x:301.8,y:-120.9},0).wait(1).to({rotation:-2.6,x:303.8,y:-101.9},0).wait(1).to({rotation:-4.7,x:305.4,y:-83},0).wait(1).to({rotation:-6.7,x:306.6,y:-64.2},0).wait(1).to({rotation:-8.7,x:307.1,y:-76.5},0).wait(1).to({rotation:-10.7,x:307.2,y:-88.8},0).wait(1).to({rotation:-9.6,x:306.9,y:-81.9},0).wait(1).to({rotation:-8.5,x:306.5,y:-75},0).wait(1).to({rotation:-7.3,x:305.9,y:-68.1},0).wait(1).to({rotation:-5.6,x:304.8,y:-57.4},0).wait(1).to({rotation:-3.8,x:303.4,y:-46.7},0).wait(1).to({rotation:-2,x:301.6,y:-36},0).wait(1).to({rotation:-1.2,x:300.5,y:-30.7},0).wait(1).to({rotation:-0.3,x:299.4,y:-25.6},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-2.2,x:301.4,y:-37.1},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-0.3,x:299.4,y:-25.6},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-2.2,x:301.4,y:-37.1},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-0.3,x:299.4,y:-25.6},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-2.2,x:301.4,y:-37.1},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-0.3,x:299.4,y:-25.6},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-2.2,x:301.4,y:-37.1},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-0.3,x:299.4,y:-25.6},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-2.2,x:301.4,y:-37.1},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-0.3,x:299.4,y:-25.6},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-2.2,x:301.4,y:-37.1},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-0.3,x:299.4,y:-25.6},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-2.2,x:301.4,y:-37.1},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-0.3,x:299.4,y:-25.6},0).wait(1).to({rotation:-1.3,x:300.4,y:-31.3},0).wait(1).to({rotation:-2.2,x:301.4,y:-37.1},0).wait(45).to({rotation:-6.6,x:304,y:-63.5},0).wait(1).to({rotation:-10.9,x:304.6,y:-90},0).wait(1).to({rotation:-15.3,x:303.2,y:-116.6},0).wait(1).to({rotation:-19.6,x:299.8,y:-143},0).wait(1).to({rotation:-24,x:294.3,y:-169.2},0).wait(1).to({rotation:-28.4,x:286.9,y:-194.9},0).wait(1).to({rotation:-32.7,x:277.6,y:-219.9},0).wait(1).to({rotation:-20.7,x:296.7,y:-149.4},0).wait(1).to({rotation:-8.7,x:300.7,y:-76.2},0).wait(1).to({rotation:3.4,x:289.4,y:-3.7},0).wait(1).to({rotation:-8.7,x:299.7,y:-76.2},0).wait(1).to({rotation:-20.7,x:294.7,y:-149.4},0).wait(1).to({rotation:-32.7,x:274.5,y:-219.9},0).wait(1).to({rotation:-20.7,x:293.7,y:-149.4},0).wait(1).to({rotation:-8.7,x:297.7,y:-76.2},0).wait(1).to({rotation:3.4,x:286.3,y:-3.7},0).wait(1).to({rotation:-8.7,x:296.7,y:-76.2},0).wait(1).to({rotation:-20.7,x:291.7,y:-149.4},0).wait(1).to({rotation:-32.7,x:271.5,y:-219.9},0).wait(1).to({rotation:-20.7,x:290.6,y:-149.4},0).wait(1).to({rotation:-8.7,x:294.7,y:-76.2},0).wait(1).to({rotation:3.4,x:283.3,y:-3.7},0).wait(1).to({rotation:-8.7,x:293.6,y:-76.2},0).wait(1).to({rotation:-20.7,x:288.6,y:-149.4},0).wait(1).to({rotation:-32.7,x:268.5,y:-219.9},0).wait(1).to({rotation:-20.7,x:287.6,y:-149.4},0).wait(1).to({rotation:-8.7,x:291.6,y:-76.2},0).wait(1).to({rotation:3.4,x:280.3,y:-3.7},0).wait(1).to({rotation:3.4,x:261.3},0).wait(1).to({x:242.4},0).wait(1).to({x:223.5},0).wait(8).to({rotation:2.5,x:243,y:-31.4},0).wait(1).to({rotation:1.7,x:262.4,y:-59.1},0).wait(1).to({rotation:0.8,x:281.7,y:-86.7},0).wait(1).to({rotation:0,x:301,y:-114.4},0).wait(1));

	// t-rex_backLeg-foot-L
	this.instance_8 = new lib.trex_backLegfootL();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-44.9,100.9,0.687,0.687,5.5,0,0,54.8,-11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-0.1,regY:0.7,rotation:-5.1,x:-76.3,y:98.1},0).wait(1).to({rotation:-15.8,x:-68,y:90.1},0).wait(1).to({rotation:-7.6,x:-72.8,y:100.4},0).wait(1).to({rotation:0.7,x:-76.8,y:110.4},0).wait(1).to({rotation:9,x:-80.1,y:120.2},0).wait(5).to({rotation:8.1,x:-80.7,y:119.2},0).wait(1).to({rotation:7.3,x:-81.3,y:118.2},0).wait(1).to({rotation:6.5,x:-81.9,y:117.2},0).wait(1).to({rotation:5.7,x:-82.4,y:116.2},0).wait(1).to({rotation:4.9,x:-83,y:115.2},0).wait(1).to({rotation:4.1,x:-83.6,y:114.2},0).wait(113).to({rotation:3.1,x:-105.5,y:111.3},0).wait(1).to({rotation:2.1,x:-127.4,y:108.4},0).wait(1).to({rotation:1.2,x:-149.3,y:105.5},0).wait(1).to({rotation:0.2,x:-171.2,y:102.6},0).wait(1));

	// t-rex_backLeg-med-L
	this.instance_9 = new lib.trex_backLegmedL();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-116.8,7.8,0.686,0.686,-42.1,0,0,-13.1,-67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:0,regY:0,scaleX:0.69,scaleY:0.69,rotation:-34,x:-70.6,y:19.6},0).wait(1).to({rotation:-25.9,x:-62.9,y:2.1},0).wait(1).to({rotation:-35.5,x:-67.5,y:23.2},0).wait(1).to({rotation:-45.2,x:-73.2,y:43.4},0).wait(1).to({rotation:-54.8,x:-79.9,y:62.8},0).wait(5).to({rotation:-53.7,x:-80,y:60.5},0).wait(1).to({rotation:-52.5,x:-80.1,y:58.3},0).wait(1).to({rotation:-51.4,x:-80.2,y:56},0).wait(1).to({rotation:-50.2,x:-80.3,y:53.8},0).wait(1).to({rotation:-49.1,x:-80.4,y:51.5},0).wait(1).to({rotation:-48,x:-80.6,y:49.2},0).wait(113).to({rotation:-36,x:-89.5,y:40.1},0).wait(1).to({rotation:-24,x:-99.9,y:29.6},0).wait(1).to({rotation:-12,x:-111.6,y:17.3},0).wait(1).to({rotation:0,x:-124,y:3.2},0).wait(1));

	// t-rex_backLeg-upper-L
	this.instance_10 = new lib.trex_backLegupperL();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-61.3,-73.2,0.687,0.687,1.5,0,0,28.4,-30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:0,regY:0,rotation:-6.6,x:-71.8,y:-78.4},0).wait(1).to({rotation:-14.8,x:-61.9,y:-104.2},0).wait(1).to({rotation:-4.9,x:-70.2,y:-70},0).wait(1).to({rotation:5.1,x:-77.9,y:-36.6},0).wait(1).to({rotation:15.1,x:-84.9,y:-3.7},0).wait(5).to({rotation:15.5,x:-85.3,y:-6.8},0).wait(1).to({rotation:16,x:-85.6,y:-9.9},0).wait(1).to({rotation:16.4,x:-86,y:-13.1},0).wait(1).to({rotation:16.9,x:-86.3,y:-16.2},0).wait(1).to({rotation:17.4,x:-86.7,y:-19.3},0).wait(1).to({rotation:17.8,x:-87.1,y:-22.5},0).wait(113).to({rotation:13.4,x:-87.8,y:-41.9},0).wait(1).to({rotation:8.9,x:-88.4,y:-61.3},0).wait(1).to({rotation:4.5,x:-88.8,y:-80.9},0).wait(1).to({rotation:0,x:-89.2,y:-100.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-532,-230.5,1228.2,375.6);


(lib.trex_walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t-rex_backLeg-foot-R
	this.instance = new lib.trex_backLegfootR();
	this.instance.parent = this;
	this.instance.setTransform(106,44.1,0.689,0.689,0,0,0,-15,-66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:-23.3,x:138.8,y:80.6},0).wait(1).to({rotation:-46.5,x:156.9,y:65.2},0).wait(1).to({rotation:-39.8,x:109.5,y:30},0).wait(1).to({rotation:-33,x:61.5,y:-5.7},0).wait(1).to({rotation:-16.8,x:21.4,y:29.8},0).wait(1).to({rotation:-0.6,x:-20.5,y:62},0).wait(1).to({rotation:33.7,x:-92.2,y:93.2},0).wait(1).to({rotation:67.9,x:-158.1,y:109.2},0).wait(1).to({rotation:63.2,x:-124.5,y:111.1},0).wait(1).to({rotation:58.5,x:-90.7,y:112.8},0).wait(1).to({rotation:48.5,x:-77,y:111.2},0).wait(1).to({rotation:38.6,x:-62.5,y:108.5},0).wait(1).to({rotation:28.7,x:-47.4,y:104.5},0).wait(1).to({rotation:18.8,x:-31.9,y:99.1},0).wait(1).to({rotation:14.1,x:5.2,y:97.3},0).wait(1).to({rotation:9.4,x:42.3,y:95.1},0).wait(1));

	// t-rex_backLeg-mid-R
	this.instance_1 = new lib.trex_backLegmidR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,-14.2,0.689,0.689,4.1,0,0,-55.5,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,rotation:-5.4,x:37.7,y:14.3},0).wait(1).to({rotation:-15,x:37.3,y:29.7},0).wait(1).to({rotation:-7.6,x:-6.6,y:-20.8},0).wait(1).to({rotation:-0.2,x:-51.3,y:-71.5},0).wait(1).to({rotation:18.8,x:-60.7,y:-61.9},0).wait(1).to({rotation:37.7,x:-73.7,y:-54.6},0).wait(1).to({rotation:48.8,x:-94.1,y:-25.1},0).wait(1).to({rotation:59.9,x:-115.2,y:3},0).wait(1).to({rotation:41.1,x:-106,y:8.8},0).wait(1).to({rotation:22.2,x:-99.2,y:11.1},0).wait(1).to({rotation:29.9,x:-84.6,y:2.7},0).wait(1).to({rotation:37.6,x:-70.5,y:-6.3},0).wait(1).to({rotation:45.2,x:-56.9,y:-15.8},0).wait(1).to({rotation:52.9,x:-43.6,y:-25.9},0).wait(1).to({rotation:40.7,x:-21.7,y:-17.8},0).wait(1).to({rotation:28.5,x:-0.8,y:-11.2},0).wait(1));

	// t-rex-backLeg-upper-R
	this.instance_2 = new lib.trexbackLegupperR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27.2,-132.9,0.689,0.689,0,0,0,0,-63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:0,rotation:1.4,x:-29.7,y:-64.6},0).wait(1).to({rotation:2.8,x:-32.2,y:-40.1},0).wait(1).to({rotation:24,x:-55.2,y:-91.1},0).wait(1).to({rotation:45.2,x:-75.8,y:-147.6},0).wait(1).to({rotation:43.3,x:-74.6,y:-152.7},0).wait(1).to({rotation:41.4,x:-73.3,y:-157.8},0).wait(1).to({rotation:47,x:-77.9,y:-129.7},0).wait(1).to({rotation:52.6,x:-82.2,y:-102},0).wait(1).to({rotation:63.6,x:-85,y:-83},0).wait(1).to({rotation:74.5,x:-86.4,y:-64.7},0).wait(1).to({rotation:59.4,x:-80.1,y:-85.8},0).wait(1).to({rotation:44.3,x:-71.2,y:-108.4},0).wait(1).to({rotation:29.1,x:-62.2,y:-126.8},0).wait(1).to({rotation:14,x:-51.6,y:-148},0).wait(1).to({rotation:10.5,x:-45.5,y:-133},0).wait(1).to({rotation:7,x:-39.4,y:-118.2},0).wait(1));

	// t-rex pelvis
	this.instance_3 = new lib.trexpelvis();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-72,-192,0.689,0.689,0,0,0,-63,-116.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,x:-28.6,y:-86.1},0).wait(1).to({y:-60.5},0).wait(1).to({y:-110},0).wait(1).to({y:-159.5},0).wait(1).to({y:-164.5},0).wait(1).to({y:-169.5},0).wait(1).to({y:-140.6},0).wait(1).to({y:-111.7},0).wait(1).to({y:-86.1},0).wait(1).to({y:-60.5},0).wait(1).to({y:-101.6},0).wait(1).to({y:-142.6},0).wait(1).to({y:-156},0).wait(1).to({y:-169.5},0).wait(1).to({y:-155},0).wait(1).to({y:-140.6},0).wait(1));

	// t-rex_skull
	this.instance_4 = new lib.trex_skull();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-395.3,-181.7,0.687,0.687,0,0,0,80.8,-93.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:1,regY:0.1,rotation:9.7,x:-459.6,y:-112.8},0).wait(1).to({rotation:19.5,x:-467.3,y:-110},0).wait(1).to({rotation:3.2,x:-453.5,y:-106.1},0).wait(1).to({rotation:-13,x:-435.2,y:-107},0).wait(1).to({rotation:-17.4,x:-430.2,y:-113.1},0).wait(1).to({rotation:-21.8,x:-425,y:-119.7},0).wait(1).to({rotation:-10.9,x:-437.7,y:-117.1},0).wait(1).to({rotation:0,x:-448.8},0).wait(1).to({rotation:7.4,x:-456.8,y:-110.9},0).wait(1).to({rotation:14.8,x:-463.9,y:-105.5},0).wait(1).to({rotation:-2.6,x:-448.1,y:-96.6},0).wait(1).to({rotation:-20,x:-427.7,y:-93.8},0).wait(1).to({rotation:-20.9,x:-426.4,y:-106.7},0).wait(1).to({rotation:-21.8,x:-425,y:-119.7},0).wait(1).to({rotation:-16.4,x:-431.9,y:-118.1},0).wait(1).to({rotation:-10.9,x:-438.3,y:-117.1},0).wait(1));

	// t-rex_ribs
	this.instance_5 = new lib.trex_ribs();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-74.3,-162.2,0.687,0.687,0,0,0,225.6,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0,regY:0,rotation:1.5,x:-229.3,y:-93.3},0).wait(1).to({rotation:3.1,x:-229.1,y:-72.1},0).wait(1).to({rotation:-2.6,x:-225.8,y:-105.3},0).wait(1).to({rotation:-8.3,x:-221.1,y:-139.1},0).wait(1).to({y:-144.1},0).wait(1).to({y:-149.1},0).wait(1).to({rotation:-4.1,x:-225.9,y:-131.7},0).wait(1).to({rotation:0,x:-229.9,y:-114.6},0).wait(1).to({rotation:1.5,x:-229.5,y:-93.3},0).wait(1).to({rotation:3.1,x:-229.1,y:-72.1},0).wait(1).to({rotation:-2.6,x:-225.8,y:-96.8},0).wait(1).to({rotation:-8.3,x:-221.1,y:-122.1},0).wait(1).to({y:-135.6},0).wait(1).to({y:-149.1},0).wait(1).to({rotation:-6.2,x:-223.5,y:-140.3},0).wait(1).to({rotation:-4.1,x:-225.7,y:-131.6},0).wait(1));

	// t-rex_tail-base
	this.instance_6 = new lib.trex_tailbase();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-42,-182.1,1,1,0,0,0,-253.1,-31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:91.8,regY:36.6,rotation:-5,x:307.5,y:-119.9},0).wait(1).to({rotation:-10,x:309.5,y:-126.4},0).wait(1).to({rotation:-0.6,x:303.6,y:-120},0).wait(1).to({rotation:8.8,x:288.3,y:-115.3},0).wait(1).to({y:-120.3},0).wait(1).to({y:-125.3},0).wait(1).to({rotation:4.4,x:296.5,y:-119.1},0).wait(1).to({rotation:0,x:302.8,y:-113.6},0).wait(1).to({rotation:-5.9,x:308,y:-125.5},0).wait(1).to({rotation:-11.9,x:309.5,y:-137.6},0).wait(1).to({rotation:-1.5,x:304.5,y:-114},0).wait(1).to({rotation:8.8,x:288.3,y:-92.3},0).wait(1).to({y:-108.8},0).wait(1).to({y:-125.3},0).wait(1).to({rotation:6.6,x:292.7,y:-122.1},0).wait(1).to({rotation:4.4,x:296.5,y:-119.1},0).wait(1));

	// t-rex_backLeg-foot-L
	this.instance_7 = new lib.trex_backLegfootL();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-125.7,86.4,0.687,0.687,0,0,0,69.6,-26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-0.1,regY:0.7,rotation:2.8,x:-134.1,y:110.1},0).wait(1).to({rotation:5.7,x:-94.4,y:114.9},0).wait(1).to({rotation:-15.8,x:-74.9,y:102.8},0).wait(1).to({rotation:-37.3,x:-49.7,y:86.5},0).wait(1).to({rotation:-54.3,x:-1.3,y:83.9},0).wait(1).to({rotation:-71.2,x:48.2,y:77},0).wait(1).to({rotation:-73.1,x:88.6,y:83.4},0).wait(1).to({rotation:-75,x:128.9,y:89.6},0).wait(1).to({rotation:-88.1,x:118,y:65.8},0).wait(1).to({rotation:-101.2,x:106,y:39.5},0).wait(1).to({rotation:-94.5,x:89.6,y:28.9},0).wait(1).to({rotation:-87.7,x:72.8,y:17.7},0).wait(1).to({rotation:-81,x:55.8,y:5.9},0).wait(1).to({rotation:-74.2,x:38.6,y:-6.6},0).wait(1).to({rotation:-55.7,x:-17.8,y:28.3},0).wait(1).to({rotation:-37.1,x:-72.9,y:58.2},0).wait(1));

	// t-rex_backLeg-med-L
	this.instance_8 = new lib.trex_backLegmedL();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-133,-43.4,0.687,0.687,0,0,0,-13.1,-68.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,regY:0,rotation:-21,x:-99.6,y:22.8},0).wait(1).to({rotation:-42,x:-78.7,y:36.7},0).wait(1).to({rotation:-25.9,x:-62.7,y:2.4},0).wait(1).to({rotation:-9.7,x:-48.9,y:-34.9},0).wait(1).to({rotation:-18.2,x:-25.3,y:-37.6},0).wait(1).to({rotation:-26.6,x:-2.1,y:-41.2},0).wait(1).to({rotation:-43.3,x:23.6,y:-19.3},0).wait(1).to({rotation:-59.9,x:46,y:0.4},0).wait(1).to({rotation:-60.8,x:23.7,y:-13.8},0).wait(1).to({rotation:-61.8,x:1.5,y:-28},0).wait(1).to({rotation:-62.7,x:-9.6,y:-42.9},0).wait(1).to({rotation:-63.7,x:-20.6,y:-57.9},0).wait(1).to({rotation:-64.6,x:-31.7,y:-72.9},0).wait(1).to({rotation:-65.6,x:-42.8,y:-87.8},0).wait(1).to({rotation:-49.2,x:-58.8,y:-61.3},0).wait(1).to({rotation:-32.8,x:-78.1,y:-36.6},0).wait(1));

	// t-rex_backLeg-upper-L
	this.instance_9 = new lib.trex_backLegupperL();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-56.7,-126.4,0.687,0.687,0,0,0,49.1,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:0,regY:0,rotation:0.8,x:-93.1,y:-73.5},0).wait(1).to({rotation:1.7,x:-95.8,y:-47.4},0).wait(1).to({rotation:-14.8,x:-74.1,y:-94.7},0).wait(1).to({rotation:-31.4,x:-50.3,y:-144.8},0).wait(1).to({rotation:-39.1,x:-42.1,y:-146.3},0).wait(1).to({rotation:-46.8,x:-33.7,y:-148.5},0).wait(1).to({rotation:-54.5,x:-28.8,y:-116.2},0).wait(1).to({rotation:-62.1,x:-24.1,y:-84.7},0).wait(1).to({rotation:-52,x:-34.2,y:-88.8},0).wait(1).to({rotation:-41.8,x:-44.3,y:-94.3},0).wait(1).to({rotation:-31.6,x:-52.9,y:-106.8},0).wait(1).to({rotation:-21.5,x:-61.1,y:-120.5},0).wait(1).to({rotation:-11.3,x:-68.6,y:-135.5},0).wait(1).to({rotation:-1.1,x:-75.2,y:-151.5},0).wait(1).to({rotation:-0.8,x:-79,y:-138.5},0).wait(1).to({rotation:-0.6,x:-82.9,y:-125.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-534.7,-230,1213.3,376.7);


(lib.trex_skullball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.trex_skull("single",7);
	this.instance.parent = this;
	this.instance.setTransform(68.6,-75.3,1.004,1.004,0,0,0,68.6,-75.2);

	this.instance_1 = new lib.ball("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-69.1,88.7,1.423,1.474,0,26.1,10.3,-0.8,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.7,-128.7,246.4,242.1);


(lib.trex_walkWball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t-rex_backLeg-foot-R
	this.instance = new lib.trex_backLegfootR();
	this.instance.parent = this;
	this.instance.setTransform(106,44.1,0.689,0.689,0,0,0,-15,-66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:-23.3,x:138.8,y:80.6},0).wait(1).to({rotation:-46.5,x:156.9,y:65.2},0).wait(1).to({rotation:-39.8,x:109.5,y:30},0).wait(1).to({rotation:-33,x:61.5,y:-5.7},0).wait(1).to({rotation:-16.8,x:21.4,y:29.8},0).wait(1).to({rotation:-0.6,x:-20.5,y:62},0).wait(1).to({rotation:33.7,x:-92.2,y:93.2},0).wait(1).to({rotation:67.9,x:-158.1,y:109.2},0).wait(1).to({rotation:63.2,x:-124.5,y:111.1},0).wait(1).to({rotation:58.5,x:-90.7,y:112.8},0).wait(1).to({rotation:48.5,x:-77,y:111.2},0).wait(1).to({rotation:38.6,x:-62.5,y:108.5},0).wait(1).to({rotation:28.7,x:-47.4,y:104.5},0).wait(1).to({rotation:18.8,x:-31.9,y:99.1},0).wait(1).to({rotation:14.1,x:5.2,y:97.3},0).wait(1).to({rotation:9.4,x:42.3,y:95.1},0).wait(1));

	// t-rex_backLeg-mid-R
	this.instance_1 = new lib.trex_backLegmidR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,-14.2,0.689,0.689,4.1,0,0,-55.4,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,rotation:-5.4,x:37.6,y:14.3},0).wait(1).to({rotation:-15,x:37.2,y:29.7},0).wait(1).to({rotation:-7.6,x:-6.7,y:-20.9},0).wait(1).to({rotation:-0.2,x:-51.4,y:-71.5},0).wait(1).to({rotation:18.8,x:-60.8,y:-62},0).wait(1).to({rotation:37.7,x:-73.8,y:-54.7},0).wait(1).to({rotation:48.8,x:-94.2,y:-25.2},0).wait(1).to({rotation:59.9,x:-115.2,y:2.9},0).wait(1).to({rotation:41.1,x:-106,y:8.7},0).wait(1).to({rotation:22.2,x:-99.2,y:11},0).wait(1).to({rotation:29.9,x:-84.7,y:2.6},0).wait(1).to({rotation:37.6,x:-70.6,y:-6.4},0).wait(1).to({rotation:45.2,x:-56.9,y:-15.9},0).wait(1).to({rotation:52.9,x:-43.6,y:-26},0).wait(1).to({rotation:40.7,x:-21.8,y:-17.9},0).wait(1).to({rotation:28.5,x:-0.9,y:-11.3},0).wait(1));

	// t-rex-backLeg-upper-R
	this.instance_2 = new lib.trexbackLegupperR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27.2,-132.9,0.689,0.689,0,0,0,0,-63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:0,rotation:1.4,x:-29.7,y:-64.6},0).wait(1).to({rotation:2.8,x:-32.2,y:-40.1},0).wait(1).to({rotation:24,x:-55.2,y:-91.1},0).wait(1).to({rotation:45.2,x:-75.8,y:-147.6},0).wait(1).to({rotation:43.3,x:-74.6,y:-152.7},0).wait(1).to({rotation:41.4,x:-73.3,y:-157.8},0).wait(1).to({rotation:47,x:-77.9,y:-129.7},0).wait(1).to({rotation:52.6,x:-82.2,y:-102},0).wait(1).to({rotation:63.6,x:-85,y:-83},0).wait(1).to({rotation:74.5,x:-86.4,y:-64.7},0).wait(1).to({rotation:59.4,x:-80.1,y:-85.8},0).wait(1).to({rotation:44.3,x:-71.2,y:-108.4},0).wait(1).to({rotation:29.1,x:-62.2,y:-126.8},0).wait(1).to({rotation:14,x:-51.6,y:-148},0).wait(1).to({rotation:10.5,x:-45.5,y:-133},0).wait(1).to({rotation:7,x:-39.4,y:-118.2},0).wait(1));

	// t-rex pelvis
	this.instance_3 = new lib.trexpelvis();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-72,-192,0.689,0.689,0,0,0,-63,-116.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,x:-28.6,y:-86.1},0).wait(1).to({y:-60.5},0).wait(1).to({y:-110},0).wait(1).to({y:-159.5},0).wait(1).to({y:-164.5},0).wait(1).to({y:-169.5},0).wait(1).to({y:-140.6},0).wait(1).to({y:-111.7},0).wait(1).to({y:-86.1},0).wait(1).to({y:-60.5},0).wait(1).to({y:-101.6},0).wait(1).to({y:-142.6},0).wait(1).to({y:-156},0).wait(1).to({y:-169.5},0).wait(1).to({y:-155},0).wait(1).to({y:-140.6},0).wait(1));

	// t-rex_skull
	this.instance_4 = new lib.trex_skullball();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-395.3,-181.7,0.687,0.687,0,0,0,80.8,-93.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0.7,regY:0.3,rotation:9.7,x:-459.9,y:-112.6},0).wait(1).to({rotation:19.5,x:-467.5,y:-109.9},0).wait(1).to({rotation:3.2,x:-453.7,y:-105.9},0).wait(1).to({rotation:-13,x:-435.3,y:-106.8},0).wait(1).to({rotation:-17.4,x:-430.4,y:-112.9},0).wait(1).to({rotation:-21.8,x:-425.2,y:-119.5},0).wait(1).to({rotation:-10.9,x:-437.8,y:-116.9},0).wait(1).to({rotation:0,x:-449,y:-117},0).wait(1).to({rotation:7.4,x:-457.1,y:-110.8},0).wait(1).to({rotation:14.8,x:-464.1,y:-105.4},0).wait(1).to({rotation:-2.6,x:-448.3,y:-96.4},0).wait(1).to({rotation:-20,x:-427.8,y:-93.5},0).wait(1).to({rotation:-20.9,x:-426.5,y:-106.5},0).wait(1).to({rotation:-21.8,x:-425.2,y:-119.5},0).wait(1).to({rotation:-16.4,x:-432,y:-117.9},0).wait(1).to({rotation:-10.9,x:-438.5,y:-116.9},0).wait(1));

	// t-rex_ribs
	this.instance_5 = new lib.trex_ribs();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-74.3,-162.2,0.687,0.687,0,0,0,225.6,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0,regY:0,rotation:1.5,x:-229.3,y:-93.3},0).wait(1).to({rotation:3.1,x:-229.1,y:-72.1},0).wait(1).to({rotation:-2.6,x:-225.8,y:-105.3},0).wait(1).to({rotation:-8.3,x:-221.1,y:-139.1},0).wait(1).to({y:-144.1},0).wait(1).to({y:-149.1},0).wait(1).to({rotation:-4.1,x:-225.9,y:-131.7},0).wait(1).to({rotation:0,x:-229.9,y:-114.6},0).wait(1).to({rotation:1.5,x:-229.5,y:-93.3},0).wait(1).to({rotation:3.1,x:-229.1,y:-72.1},0).wait(1).to({rotation:-2.6,x:-225.8,y:-96.8},0).wait(1).to({rotation:-8.3,x:-221.1,y:-122.1},0).wait(1).to({y:-135.6},0).wait(1).to({y:-149.1},0).wait(1).to({rotation:-6.2,x:-223.5,y:-140.3},0).wait(1).to({rotation:-4.1,x:-225.7,y:-131.6},0).wait(1));

	// t-rex_tail-base
	this.instance_6 = new lib.trex_tailbase();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-42.1,-182.1,1,1,0,0,0,-253.1,-31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:91.8,regY:36.6,rotation:-5,x:307.4,y:-119.9},0).wait(1).to({rotation:-10,x:309.4,y:-126.4},0).wait(1).to({rotation:-0.6,x:303.5,y:-120},0).wait(1).to({rotation:8.8,x:288.3,y:-115.3},0).wait(1).to({y:-120.3},0).wait(1).to({y:-125.3},0).wait(1).to({rotation:4.4,x:296.5,y:-119.1},0).wait(1).to({rotation:0,x:302.8,y:-113.6},0).wait(1).to({rotation:-5.9,x:308,y:-125.5},0).wait(1).to({rotation:-11.9,x:309.4,y:-137.6},0).wait(1).to({rotation:-1.5,x:304.5,y:-114},0).wait(1).to({rotation:8.8,x:288.3,y:-92.3},0).wait(1).to({y:-108.8},0).wait(1).to({y:-125.3},0).wait(1).to({rotation:6.6,x:292.7,y:-122.2},0).wait(1).to({rotation:4.4,x:296.5,y:-119.1},0).wait(1));

	// t-rex_backLeg-foot-L
	this.instance_7 = new lib.trex_backLegfootL();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-125.7,86.4,0.687,0.687,0,0,0,69.5,-26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-0.1,regY:0.7,rotation:2.8,x:-134,y:110.1},0).wait(1).to({rotation:5.7,x:-94.4,y:114.9},0).wait(1).to({rotation:-15.8,x:-74.9,y:102.8},0).wait(1).to({rotation:-37.3,x:-49.7,y:86.5},0).wait(1).to({rotation:-54.3,x:-1.3,y:83.9},0).wait(1).to({rotation:-71.2,x:48.2,y:77},0).wait(1).to({rotation:-73.1,x:88.6,y:83.3},0).wait(1).to({rotation:-75,x:129,y:89.5},0).wait(1).to({rotation:-88.1,x:118,y:65.8},0).wait(1).to({rotation:-101.2,x:106.1,y:39.5},0).wait(1).to({rotation:-94.5,x:89.6,y:28.9},0).wait(1).to({rotation:-87.7,x:72.8,y:17.7},0).wait(1).to({rotation:-81,x:55.8,y:5.9},0).wait(1).to({rotation:-74.2,x:38.6,y:-6.7},0).wait(1).to({rotation:-55.7,x:-17.7,y:28.3},0).wait(1).to({rotation:-37.1,x:-72.9,y:58.1},0).wait(1));

	// t-rex_backLeg-med-L
	this.instance_8 = new lib.trex_backLegmedL();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-133,-43.4,0.687,0.687,0,0,0,-13.1,-68.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,regY:0,rotation:-21,x:-99.6,y:22.8},0).wait(1).to({rotation:-42,x:-78.7,y:36.7},0).wait(1).to({rotation:-25.9,x:-62.7,y:2.4},0).wait(1).to({rotation:-9.7,x:-48.9,y:-34.9},0).wait(1).to({rotation:-18.2,x:-25.3,y:-37.6},0).wait(1).to({rotation:-26.6,x:-2.1,y:-41.2},0).wait(1).to({rotation:-43.3,x:23.6,y:-19.3},0).wait(1).to({rotation:-59.9,x:46,y:0.4},0).wait(1).to({rotation:-60.8,x:23.7,y:-13.8},0).wait(1).to({rotation:-61.8,x:1.5,y:-28},0).wait(1).to({rotation:-62.7,x:-9.6,y:-42.9},0).wait(1).to({rotation:-63.7,x:-20.6,y:-57.9},0).wait(1).to({rotation:-64.6,x:-31.7,y:-72.9},0).wait(1).to({rotation:-65.6,x:-42.8,y:-87.8},0).wait(1).to({rotation:-49.2,x:-58.8,y:-61.3},0).wait(1).to({rotation:-32.8,x:-78.1,y:-36.6},0).wait(1));

	// t-rex_backLeg-upper-L
	this.instance_9 = new lib.trex_backLegupperL();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-56.7,-126.4,0.687,0.687,0,0,0,49.1,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:0,regY:0,rotation:0.8,x:-93.1,y:-73.5},0).wait(1).to({rotation:1.7,x:-95.8,y:-47.4},0).wait(1).to({rotation:-14.8,x:-74.1,y:-94.7},0).wait(1).to({rotation:-31.4,x:-50.3,y:-144.8},0).wait(1).to({rotation:-39.1,x:-42.1,y:-146.3},0).wait(1).to({rotation:-46.8,x:-33.7,y:-148.5},0).wait(1).to({rotation:-54.5,x:-28.8,y:-116.2},0).wait(1).to({rotation:-62.1,x:-24.1,y:-84.7},0).wait(1).to({rotation:-52,x:-34.2,y:-88.8},0).wait(1).to({rotation:-41.8,x:-44.3,y:-94.3},0).wait(1).to({rotation:-31.6,x:-52.9,y:-106.8},0).wait(1).to({rotation:-21.5,x:-61.1,y:-120.5},0).wait(1).to({rotation:-11.3,x:-68.6,y:-135.5},0).wait(1).to({rotation:-1.1,x:-75.2,y:-151.5},0).wait(1).to({rotation:-0.8,x:-79,y:-138.5},0).wait(1).to({rotation:-0.6,x:-82.9,y:-125.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-535.3,-230,1213.8,376.7);


// stage content:



(lib._20161004_CHOP_DiggingUpDinos_EndAnimations_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// trex
	this.instance = new lib.trex_walk("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2553.5,497.7,1,1,0,0,0,64.5,-44.5);

	this.instance_1 = new lib.trex_scratch("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1176.1,485.3,1,1,0,0,0,64.5,-44.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.trex_walkWball("synched",1);
	this.instance_2.parent = this;
	this.instance_2.setTransform(865,517.2,1,1,0,0,0,64.5,-44.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:61.1,regY:-73.7,x:2510.7,y:468.2,startPosition:1},0).wait(1).to({x:2471.3,y:467.8,startPosition:2},0).wait(1).to({x:2431.8,y:467.5,startPosition:3},0).wait(1).to({x:2392.4,y:467.2,startPosition:4},0).wait(1).to({x:2324.9,y:468.6,startPosition:5},0).wait(1).to({x:2257.4,y:470.1,startPosition:6},0).wait(1).to({x:2215,y:464,startPosition:7},0).wait(1).to({x:2172.6,y:458,startPosition:8},0).wait(1).to({x:2137.2,y:455.8,startPosition:9},0).wait(1).to({x:2101.9,y:453.7,startPosition:10},0).wait(1).to({x:2084.6,y:451.5,startPosition:11},0).wait(1).to({x:2065.3,y:449.4,startPosition:12},0).wait(1).to({x:2045.9,y:447.2,startPosition:13},0).wait(1).to({x:2025.4,y:450.9,startPosition:14},0).wait(1).to({x:1982.8,y:454.6,startPosition:15},0).wait(1).to({x:1941.3,y:458.3,startPosition:16},0).wait(1).to({x:1859.7,y:462,startPosition:0},0).wait(1).to({x:1821.5,y:461,startPosition:1},0).wait(1).to({x:1783.2,y:460,startPosition:2},0).wait(1).to({x:1745,y:459,startPosition:3},0).wait(1).to({x:1706.7,y:458,startPosition:4},0).wait(1).to({x:1640.5,y:459,startPosition:5},0).wait(1).to({x:1574.2,y:460,startPosition:6},0).wait(1).to({x:1531,y:455,startPosition:7},0).wait(1).to({x:1487.7,y:450.1,startPosition:8},0).wait(1).to({x:1450.3,y:446.5,startPosition:9},0).wait(1).to({x:1412.8,y:442.9,startPosition:10},0).wait(1).to({x:1391.1,y:443.9,startPosition:11},0).wait(1).to({x:1369.4,y:444.8,startPosition:12},0).wait(1).to({x:1347.8,y:445.8,startPosition:13},0).wait(1).to({x:1326.1,y:446.7,startPosition:14},0).wait(1).to({x:1271.6,y:449.8,startPosition:15},0).wait(1).to({x:1217.2,y:452.9,startPosition:16},0).wait(1).to({x:1162.7,y:456.1,startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).to({_off:true},1).wait(300));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({_off:false},0).wait(1).to({regX:-287.6,regY:-164.5,x:824,y:365.3,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({x:824.2,y:365,startPosition:128},0).wait(1).to({x:759.4,y:369.7,startPosition:129},0).wait(1).to({x:694.6,y:374.4,startPosition:130},0).wait(1).to({x:623.7,y:387.6,startPosition:131},0).wait(1).to({x:552.8,y:400.8},0).to({_off:true},1).wait(167));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(203).to({_off:false},0).wait(1).to({regX:60.7,regY:-73.7,x:823.7,y:488,startPosition:2},0).wait(1).to({x:786.2,y:487.9,startPosition:3},0).wait(1).to({x:748.8,startPosition:4},0).wait(1).to({x:683.4,y:487.8,startPosition:5},0).wait(1).to({x:620.9,y:496,startPosition:6},0).wait(1).to({x:578.8,y:489.8,startPosition:7},0).wait(1).to({x:536.7,y:483.6,startPosition:8},0).wait(1).to({x:498.7,y:479.7,startPosition:9},0).wait(1).to({x:460.7,y:475.8,startPosition:10},0).wait(1).to({x:442.5,y:471.9,startPosition:11},0).wait(1).to({x:419.3,y:472.5,startPosition:12},0).wait(1).to({x:396.2,y:473.2,startPosition:13},0).wait(1).to({x:363.9,y:476.6,startPosition:14},0).wait(1).to({x:331.7,y:480,startPosition:15},0).wait(1).to({x:288.4,y:483.5,startPosition:16},0).wait(1).to({x:207.8,y:486.9,startPosition:0},0).wait(1).to({x:170.3,y:485.9,startPosition:1},0).wait(1).to({x:132.8,y:485,startPosition:2},0).wait(1).to({x:95.3,y:484,startPosition:3},0).wait(1).to({x:57.9,y:483.1,startPosition:4},0).wait(1).to({x:3.2,y:482.1,startPosition:5},0).wait(1).to({x:-51.5,y:481.1,startPosition:6},0).wait(1).to({x:-106.2,y:480.2,startPosition:7},0).wait(1).to({x:-160.9,y:479.2,startPosition:8},0).wait(1).to({x:-198.8,y:475.4,startPosition:9},0).wait(1).to({x:-236.7,y:471.5,startPosition:10},0).wait(1).to({x:-257,y:469.9,startPosition:11},0).wait(1).to({x:-277.3,y:468.2,startPosition:12},0).wait(1).to({x:-300.9,y:470.4,startPosition:13},0).wait(1).to({x:-324.4,y:472.6,startPosition:14},0).wait(1).to({x:-364.6,y:474.8,startPosition:15},0).wait(1).to({x:-404.8,y:477,startPosition:16},0).wait(1).to({x:-485.4,y:479.2,startPosition:0},0).wait(1).to({x:-531.5,startPosition:1},0).wait(1).to({x:-577.6,startPosition:2},0).wait(1).to({x:-623.7,startPosition:3},0).wait(1).to({x:-669.8,startPosition:4},0).wait(1).to({x:-715.9,startPosition:5},0).wait(1).to({x:-762,startPosition:6},0).wait(1).to({x:-808.1,startPosition:7},0).wait(1).to({x:-854.3,startPosition:8},0).to({_off:true},1).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(950.9,345.8,3177.4,1314.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;