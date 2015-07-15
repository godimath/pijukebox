<script src="/scripts.js"></script>
<link rel="stylesheet" href="/style.css">
<body class="body">
<center>
<p id="stats">
<?php
        $newArtist = shell_exec("python ../scripts/python/musicAction.py artist");
        $newTitle = shell_exec("python ../scripts/python/musicAction.py track");

        $newShuf = shell_exec("python ../scripts/python/musicAction.py shuffle");
        if($newShuf == "1\n")
        	$newShuf = "On";
        else
        	$newShuf = "Off";

        $newState = shell_exec("python ../scripts/python/musicAction.py state");
    	if($newState == "play\n")
    		$newState = "Playing";
    	else
    		$newState = "Paused";

        echo "<p><b id=track>$newTitle</b> by <b id=artist>$newArtist</b></p>";
        echo "<p><b id=state>$newState</b></p>";
        echo "<p>Shuffle is <b id=shuffle>$newShuf</b></p>";


?>
</p>
<button class=half-button onclick=refreshPage("/")>Refresh</button>
<button class=half-button onclick=refreshPage("/settings.php")>Settings</button><p>
<button id=playtoggle class="button" onclick=sendMusicAction('S')>Play/Pause</button>

<button class="half-button" onclick=sendMusicAction('L')>Previous Song</button>
<button class="half-button" onclick=sendMusicAction('R')>Next Song</button>

<button class="half-button" onclick=sendMusicAction('D')>Volume Down</button>
<button class="half-button" onclick=sendMusicAction('U')>Volume Up</button>

<button id=mutetoggle class="button" onclick=sendMusicAction('M')>Mute</button>

<?php

        if(isset($_POST["id"])){
                $id=$_POST["id"];
                echo shell_exec("../scripts/python/musicAction.py $id");
                shell_exec("python ../scripts/python/updateStats.py");
        }

?>
<button id=playLocalButton class="button" onclick=togglePlay()>Play on your phone</button>
<button class="button" onclick="showArtists">View Artists</button>
</center>
</body>
<script>setInterval("updateStats()",5000)</script>
