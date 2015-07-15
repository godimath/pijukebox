<?php

	if(isset($_GET["action"])){
		$action=$_GET["action"];
		shell_exec("python ../scripts/python/musicAction.py $action");
		
		#shell_exec("python ../scripts/python/updateStats.py &");
	}
	else
	if(isset($_GET["stats"])){
		$stat=$_GET["stats"];
		echo shell_exec("python ../scripts/python/musicAction.py $stat");
	}	

        #if(isset($_POST["id"])){
        #       $id=$_POST["id"];
        #        echo shell_exec("../scripts/python/musicAction.py $id");
        #        shell_exec("python ../scripts/python/updateStats.py");
        #}

?>
