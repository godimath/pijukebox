<?php

	if(isset($_GET["action"])){
		if(ctype_alnum($_GET["action"])){
			$action=$_GET["action"];
			echo shell_exec("python ../scripts/python/musicAction.py $action");
			#shell_exec("python ../scripts/python/updateStats.py &");	
		}
	}
	else
	if(isset($_GET["stats"])){
		$stat=$_GET["stats"];
		echo shell_exec("python ../scripts/python/musicAction.py $stat");
	}
	if(isset($_GET["volume"])){
		$volume=$_GET["volume"];
		if($volume=="get"){
			echo shell_exec("sudo -u tony ../scripts/bash/getVolume.sh");
		}else{
			echo shell_exec("sudo -u tony ../scripts/bash/setVolume.sh $volume");
		}
	}
    if(isset($_GET["id"])){
            $id=$_GET["id"];
            echo shell_exec("../scripts/python/musicAction.py $id");
            #shell_exec("python ../scripts/python/updateStats.py");
    }
    if(isset($_GET["view"])){
    	$view = $_GET["view"];

    	if($view == "artists"){
    		echo shell_exec("../scripts/bash/output-html-artists.sh");
    	}

    	else{

			if($view == "tracks"){

				if(isset($_GET["letter"])){
					$letter = $_GET["letter"];
					echo shell_exec("../scripts/bash/output-html-tracks.sh $letter | sort");
				}

				else{
					echo shell_exec("../scripts/bash/output-html-tracks.sh | sort ");
				}
				
			}
			else{
		    		echo shell_exec("../scripts/bash/output-html-artists.sh $view | sort");
    		}
    	}

    }
	

        #if(isset($_POST["id"])){
        #       $id=$_POST["id"];
        #        echo shell_exec("../scripts/python/musicAction.py $id");
        #        shell_exec("python ../scripts/python/updateStats.py");
        #}

?>
