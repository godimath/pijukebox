<script src="/scripts.js"></script>
<link rel="stylesheet" href="/style.css">
<a href=/>Refresh</a>
<?php

	if(isset($_POST["action"])){
		$action=$_POST["action"];
		shell_exec("python ../scripts/python/musicAction.py $action &");
		shell_exec("python ../scripts/python/updateStats.py &");
	}

        if(isset($_POST["id"])){
                $id=$_POST["id"];
                echo shell_exec("../scripts/python/musicAction.py $id");
                shell_exec("python ../scripts/python/updateStats.py");
        }

        echo shell_exec("../scripts/bash/output-html-status.sh");


	if(isset($_POST["artists"])){
                echo shell_exec("../scripts/bash/output-html-artists.sh");
	}
        if(isset($_POST["artist"])){
                $artist=$_POST["artist"];
                echo shell_exec("../scripts/bash/output-html-artists.sh \"$artist\"");
        }

?>
<form action=/ method=post>
	<input class=button type=submit value="Pick a song" name="artists">
</form>
<form action=/ method=post>
        <button id=playtoggle class="button" onclick=sendMusicAction('S')>Play/Pause</button>
	<p>
        <button class="half-button" onclick=sendMusicAction('L')>Previous Song</button>
	<button class="half-button" onclick=sendMusicAction('R')>Next Song</button>
	<p>
        <button class="half-button" onclick=sendMusicAction('D')>Volume Down</button>
        <button class="half-button" onclick=sendMusicAction('U')>Volume Up</button>
	<p>
	<button id=mutetoggle class="button" onclick=sendMusicAction('M')>Mute</button>
	<p>
	<p>
        <button class="button" onclick=sendMusicAction('s')>Try to Fix, Click if not playing</button>
	<input id="action" name="action" value="" style="visibility:hidden">

</form>
<a href=/settings.php>Settings</a><p>
<script>setToggles()</script>
