<script src="/scripts.js"></script>
<link rel="stylesheet" href="/style.css">
<body class="body" id="body">
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

        echo "<p><b id=track>$newTitle</b> by <b id=artist>$newArtist</b></p>";
        echo "<p>Shuffle is <b onclick=toggleShuffle() id=shuffle>$newShuf</b></p>";


?>
</p>
<button class=button onclick=refreshPage("/settings.php")>Settings</button>
</p>
<p>
<input type="range" class="slider" id="volumeSlider" min="0" max="100" value="69" onchange="setVolume()"></input>
</p>
<p>
<button id="playtoggle" class="button" onclick=sendMusicAction('S')>Play/Pause</button>
</p>

<p>
<button class="half-button" onclick=sendMusicAction('L')>Previous Song</button>
<button class="half-button" onclick=sendMusicAction('R')>Next Song</button>
</p>
<p>
<button id="viewArtistButton" class="half-button" onclick=viewArtists()>View Artists</button>
<button class="half-button" onclick=viewTracks()>View Tracks</button>
</p>
<p id="emptyView">
</p>
<!--
<button id=playLocalButton class="button" onclick=togglePlay()>Play on your phone</button>
-->
</center>
</body>
<script type="text/javascript">updateStats()</script>
<script>setInterval("updateStats()",5000)</script>
