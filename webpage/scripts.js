var eggs = ["Hey, don't click me!", "Why did you click me again?", "Why are you doing this?", "Seriously, nothing is gonna happen.", "Staaaahp", "Fuck you, I'm running out of things to say!", "I should probably make this do something useful...", "This is easier, though.", "I can't believe you're still clicking.", "I can't believe I'm still typing these out.", "You wanna party?"];
var eggCount = 0;

function setVolume(){
	var newVol = document.getElementById("volumeSlider").value;
	var h = new XMLHttpRequest();
	h .open( "GET", "/action.php?volume="+newVol,true);
	h.send(null);


}

function showArtist(artist,buttonId){

	document.getElementById("viewArtistButton").innerHTML = "Loading " + artist;
    document.getElementById("emptyView").innerHTML = "Loading " + artist;
	var h = new XMLHttpRequest();
	h.onreadystatechange=function(){
		if (h.readyState==4 && h.status==200){
    		document.getElementById("emptyView").innerHTML=h.responseText;
    	}
  	}
	h .open( "GET", "/action.php?view="+artist,true);
	h.send(null);

	//document.getElementById("emptyView").innerHTML = h.responseText;
	document.getElementById("viewArtistButton").innerHTML = "View Artists";
}

function viewTracks(){
	//alert("This is not yet implemented :P"); 
	var letter = prompt("Enter The First Letter");
	if(letter != null){
        var h = new XMLHttpRequest();
		h.onreadystatechange=function(){
			if (h.readyState==4 && h.status==200){
    			document.getElementById("emptyView").innerHTML=h.responseText;
				document.getElementById("emptyView").innerHTML = h.responseText;
        		document.getElementById("viewTrackButton").innerHTML = "View Tracks";
			}
		}	
	
		if(letter == ""){
	        document.getElementById("viewTrackButton").innerHTML = "Loading All Tracks";
	        document.getElementById("emptyView").innerHTML = "Loading All Tracks";
			h .open( "GET", "/action.php?view=tracks",true);
		}else{
	        document.getElementById("viewTrackButton").innerHTML = "Loading Tracks: "+ letter;
	        document.getElementById("emptyView").innerHTML = "Loading Tracks: " + letter;
			h.open("GET", "/action.php?view=tracks&letter="+letter,true);
		}
		h.send(null);

	}
}
function viewArtists(){
	document.getElementById("viewArtistButton").innerHTML = "Loading Artists";
	document.getElementById("emptyView").innerHTML = "Loading Artists";
	var h = new XMLHttpRequest();
	h.onreadystatechange=function(){
		if (h.readyState==4 && h.status==200){
    		document.getElementById("emptyView").innerHTML=h.responseText;
			document.getElementById("viewArtistButton").innerHTML = "View Artists";
    	}
  	}
	h.open( "GET", "/action.php?view=artists", true);
	h.send(null);
}

function toggleShuffle(){
	var h = new XMLHttpRequest();
	h .open( "GET", "/action.php?action=toggleShuffle",true);
	h.send(null);
	if(document.getElementById("shuffle").innerHTML == "On")
		document.getElementById("shuffle").innerHTML = "Off";
	else
		document.getElementById("shuffle").innerHTML = "On";
	

}

function updateStats(){

	var a = new XMLHttpRequest();
	var t = new XMLHttpRequest();
	var s = new XMLHttpRequest();
	var p = new XMLHttpRequest();
	var v = new XMLHttpRequest();
	a.onreadystatechange=function(){
		if (a.readyState==4 && a.status==200){
    		document.getElementById("artist").innerHTML=a.responseText;
    	}
  	}	
	a .open( "GET", "/action.php?stats=artist",true);
	a.send(null);

	t.onreadystatechange=function(){
		if (t.readyState==4 && t.status==200){
    		document.getElementById("track").innerHTML=t.responseText;
    	}
  	}
	t .open( "GET", "/action.php?stats=track",true);
	t.send(null);

	s.onreadystatechange=function(){
		if (s.readyState==4 && s.status==200){
			shuffle = s.responseText;    		
    			if(shuffle == "1\n")
					shuffle = "On";
				else
					shuffle = "Off";
			document.getElementById("shuffle").innerHTML= shuffle;

    	}
  	}
	s .open( "GET", "/action.php?stats=shuffle",true);
	s.send(null);


	p.onreadystatechange=function(){
		if (p.readyState==4 && p.status==200){
			var state = p.responseText;
    			if(state == "play\n"){
					document.getElementById("playtoggle").innerHTML = "Pause";
					document.getElementById("body").style.backgroundImage = "url(http://stream1.gifsoup.com/view1/20140402/5010921/equalizer-o.gif)";
					
				}
				else{
					document.getElementById("body").style.backgroundImage = "none";
					document.getElementById("playtoggle").innerHTML = "Play";
				}

    	}
  	}
	p .open( "GET", "/action.php?stats=state",true);
	p.send(null);
	

	v.onreadystatechange=function(){
		if (v.readyState==4 && v.status==200){
    		document.getElementById("volumeSlider").value = Number(v.responseText);
    	}
  	}
	v .open( "GET", "/action.php?volume=get",true);
	v.send(null);
	
}

function sendMusicAction(action) {
	var h = new XMLHttpRequest();
	h .open( "GET", "/action.php?action="+action,true);
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
