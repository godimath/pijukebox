var eggs = ["Hey, don't click me!", "Why did you click me again?", "Why are you doing this?", "Seriously, nothing is gonna happen.", "Staaaahp", "Fuck you, I'm running out of things to say!", "I should probably make this do something useful...", "This is easier, though.", "I can't believe you're still clicking.", "I can't believe I'm still typing these out.", "You wanna party?"];
var eggCount = 0;

function sendMusicAction(action) {
	document.getElementById("action").value=action;
}

function gotoLink(link){
	window.location = link;
}

function setSongId(newId) {
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

function setTextColor(){
	document.getElementById("exampleText").style.color = document.getElementById("textColor").value;
}

function setButtonColor(){
	document.getElementById("example").style.background = document.getElementById("buttonColor").value;
}

function setButtonTextColor(){
        document.getElementById("example").style.color = document.getElementById("buttonText").value;
}

function setBackgroundColor(){
        document.getElementById("body").style.background = document.getElementById("backgroundColor").value;
}

function dontClickMe(){
	alert(eggs[eggCount++]);		
	if(eggCount == eggs.length){
		window.location = "http://lemonparty.org";
	}
}


function togglePlay(){
	var player = document.getElementById("player");
	var playButton = document.getElementById("playLocalButton");

	if(player.paused){
		player.play();
		playButton.innerHTML = "Pause";
	}else{
		player.pause();
		playButton.innerHTML = "Play on your phone";
	}
	
}

function refreshPage(thePage){

	window.location = thePage;
}

function download(theLink){

	window.open(theLink);
 }
