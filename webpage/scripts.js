var eggs = ["Hey, don't click me!", "Why did you click me again?", "Why are you doing this?", "Seriously, nothing is gonna happen.", "Staaaahp", "Fuck you, I'm running out of things to say!", "I should probably make this do something useful...", "This is easier, though.", "I can't believe you're still clicking.", "I can't believe I'm still typing these out.", "You wanna party?"];
var eggCount = 0;

function showArtist(artist,buttonId){

	document.getElementById("emptyView").innerHTML = "Loading " + artist;
	var h = new XMLHttpRequest();
	h .open( "GET", "/action.php?view="+artist,false);
	h.send(null);

	document.getElementById("emptyView").innerHTML = h.responseText;


}

function viewTracks(){
	alert("This is not yet implemented :P");
}

function viewArtists(){
	document.getElementById("viewArtistButton").innerHTML = "Loading";
	var h = new XMLHttpRequest();
	document.getElementById("viewArtistButton").innerHTML = "Loading.";
	h .open( "GET", "/action.php?view=artists",false);
	document.getElementById("viewArtistButton").innerHTML = "Loading..";
	h.send(null);
	document.getElementById("viewArtistButton").innerHTML = "Loading...";

	document.getElementById("emptyView").innerHTML = h.responseText;
	document.getElementById("viewArtistButton").innerHTML = "View Artists";
}

function setVolume(){
	var newVol = document.getElementById("volumeSlider").value;
	var h = new XMLHttpRequest();
	h .open( "GET", "/action.php?volume="+newVol,false);
	h.send(null);
}

function toggleShuffle(){
	var h = new XMLHttpRequest();
	h .open( "GET", "/action.php?action=toggleShuffle",false);
	h.send(null);

}

function updateStats(){

	var h = new XMLHttpRequest();
	h .open( "GET", "/action.php?stats=artist",false);
	h.send(null);
	var artist = h.responseText;

	h .open( "GET", "/action.php?stats=track",false);
	h.send(null);
	var track = h.responseText;	

	h .open( "GET", "/action.php?stats=shuffle",false);
	h.send(null);
	var shuffle = h.responseText;

	h .open( "GET", "/action.php?stats=state",false);
	h.send(null);
	var state = h.responseText;	

	h .open( "GET", "/action.php?volume=get",false);
	h.send(null);
	var newVolume = h.responseText;	

	if(state == "play\n"){
		document.getElementById("playtoggle").innerHTML = "Pause";
		document.getElementById("body").style.backgroundImage = "url(http://stream1.gifsoup.com/view1/20140402/5010921/equalizer-o.gif)";
		
	}
	else{
		document.getElementById("body").style.backgroundImage = "none";
		document.getElementById("playtoggle").innerHTML = "Play";
	}

	if(shuffle == 1)
		shuffle = "On";
	else
		shuffle = "Off";



	document.getElementById("artist").innerHTML = artist;
	document.getElementById("track").innerHTML = track;
	document.getElementById("shuffle").innerHTML = shuffle;
	document.getElementById("volumeSlider").value = Number(newVolume);
}

function sendMusicAction(action) {
	var h = new XMLHttpRequest();
	h .open( "GET", "/action.php?action="+action,false);
	h.send(null);
	updateStats();
	//document.getElementById("stats").innerHTML = h.responseText;
}

function gotoLink(link){
	window.location = link;
}

function setSongId(newId) {
	var h = new XMLHttpRequest();
	h .open( "GET", "/action.php?id="+newId,false);
	h.send(null);
	
}

function setToggles(){
	/*state=document.getElementById("state").innerHTML;
	volume = document.getElementById("volume").innerHTML;

	if(state=="play")
		document.getElementById("playtoggle").innerHTML = "Pause";
	else
		document.getElementById("playtoggle").innerHTML = "Play";

	if(volume=="0")
		document.getElementById("mutetoggle").innerHTML = "Unmute";
	*/
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
		eggCount = 0;
		//window.location = "http://lemonparty.org";
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


function setCurrentColor(){
/*	alert("wat");
	var element = document.getElementById('exampleText'),
	style = window.getComputedStyle(element),
	color = style.getPropertyValue('color');
	alert(color);

        alert($("#exampleText").css("color"));
	document.getElementById("textColor").value = color;
	document.getElementById("buttonColor").value = document.getElementById("example").style.background;
	document.getElementById("buttonText").value = document.getElementById("example").style.color;
	document.getElementById("backgroundColor").value = document.getElementById("body").style.background;
*/
}
