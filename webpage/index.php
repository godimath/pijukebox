<script src="/scripts.js"></script>
<link rel="stylesheet" href="/style.css">
<?php
	if(isset($_POST["action"])){
		$action=$_POST["action"];
		shell_exec("python ../scripts/python/musicAction.py $action");
	}
	echo shell_exec("../scripts/bash/output-html-status.sh");


?>
<form action=/ method=post>
        <button class="play" onclick=sendMusicAction('S')>Play/Pause</button>
	<p>
        <button class="skip" onclick=sendMusicAction('L')>Previous Song</button>
	<button class="skip" onclick=sendMusicAction('R')>Next Song</button>
	<p>
        <button class="volume" onclick=sendMusicAction('D')>Volume Down</button>
        <button class="volume" onclick=sendMusicAction('U')>Volume Up</button><br>
	<button class="play" onclick=sendMusicAction('M')>Mute</button>
	<p>
	<p>
        <button class="reset"onclick=sendMusicAction('s')>Try to Fix, Click if not playing</button>
	<input id="action" name="action" value="" style="visibility:hidden">
</form
