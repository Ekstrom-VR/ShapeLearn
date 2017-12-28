#pragma strict

static var modules = new Array("Initials","Instructions","Task");
static var modNum : int = 0;
var screencap : screencapJS;
var cap_count : int = 0;
var cap_index : int = 0;

function Update(){

	if(modules[modNum] == "Initials"){
	var sl_initials : SL_initials_morph;
	sl_initials = GetComponent(SL_initials_morph);
	sl_initials.enabled = true;
		if(cap_count == cap_index){
		cap_count++;
		screencapJS.Grab();
		}
	}

	else if(modules[modNum] == "Instructions"){
    var sl_instructs : SL_instructs_morph;
	sl_instructs = GetComponent(SL_instructs_morph);
	sl_instructs.enabled = true;
	


	}
	
	else if(modules[modNum] == "Task"){
    var sl_task : SL_task_morph;
	sl_task = GetComponent(SL_task_morph);
	sl_task.enabled = true;



	}
	
	

}





