<?php

	if(isset($_GET["action"])){
		$action=$_GET["action"];
		shell_exec("python ../scripts/python/musicAction.py $action");
		
		$newArtist = shell_exec("python ../scripts/python/musicAction.py artist");
		$newTitle = shell_exec("python ../scripts/python/musicAction.py track");

		echo "<b id=track>$newTitle</b> by <b id=artist>$newArtist</b>";
		#shell_exec("python ../scripts/python/updateStats.py &");
	}

        #if(isset($_POST["id"])){
        #       $id=$_POST["id"];
        #        echo shell_exec("../scripts/python/musicAction.py $id");
        #        shell_exec("python ../scripts/python/updateStats.py");
        #}

?>
