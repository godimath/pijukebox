function sendMusicAction(action) {
	document.getElementById("action").value=action;
}

function gotoLink(link){
	window.location = link;
}

function setSongId(newId) {
	alert(newId);
	document.getElementById("songid").value=newId;
}

function setToggles(){
	state=document.getElementById("state").innerHTML;
	volume = document.getElementById("volume").innerHTML;

	if(state=="play")
		document.getElementById("playtoggle").innerHTML = "Pause";
	else
		document.getElementById("playtoggle").innerHTML = "Play";

	if(volume=="0")
		document.getElementById("mutetoggle").innerHTML = "Unmute";
}
