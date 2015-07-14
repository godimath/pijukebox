<script src="/scripts.js"></script>
<link rel="stylesheet" href="/style.css">
<body class="body">
<center>
<?php
        $newArtist = shell_exec("python ../scripts/python/musicAction.py artist");
        $newTitle = shell_exec("python ../scripts/python/musicAction.py track");

        echo "<p id=stats><b id=track>$newTitle</b> by <b id=artist>$newArtist</b></p>";

?>
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
<script>setToggles()</script>
