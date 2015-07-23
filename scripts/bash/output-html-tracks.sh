#!/bin/bash
SAVEIFS=$IFS
IFS=$(echo -en "\n\b")

echo "<p><u>Found tracks: $@</u></p>"

if [ $# -ne 0 ]
	then

	for song in $(find "../data/" | grep "../data/[[:alpha:] ]*/$@[[:alpha:] ]*$" | sort)
	do
		clean=$(echo -n "$song" | sed s/"\.\.\/data\/"/""/g)
		id=$(cat "$song")
		artist=$(echo -n "$clean" | grep "^.*/" -o | sed s/"\/"/""/g)
		track=$(echo -n "$clean" | grep "/.*$" -o | sed s/"\/"/""/g)
		
		echo -n "<button class=button onclick=setSongId($id)>$track by $artist</button></br>"
	done
else
	for song in $(find "../data/"| grep "../data/[[:print:] ]*/" | sort)
	do
		clean=$(echo -n "$song" | sed s/"\.\.\/data\/"/""/g)
		id=$(cat "$song")
		artist=$(echo -n "$clean" | grep "^.*/" -o | sed s/"\/"/""/g)
		track=$(echo -n "$clean" | grep "/.*$" -o | sed s/"\/"/""/g)
		


		echo -n "<button class=button onclick=setSongId($id)>$track by $artist</button></br>"
done
fi

exit 0


for artist in $(ls ../data --format=single-column)
do
	for track in $(ls "../data/$artist")
	do

			match=$(echo -n $track | grep "^$1")
			if [ "$match" != "" ]
			then
                echo -n "<button class=button onclick=setSongId($id)>$track</button><br>"
			fi

		else
			id=$(cat "../data/$artist/$track")
			if [ "$id" == "" ]
			then
				id=$track
			else
				echo -n "<button class=button onclick=setSongId($id)>$track by $artist</button><br>"
			fi
		fi
	done

	safe=$(echo "$artist" | sed s/" "/"%20"/g)
	#echo "<button id=artist$id class=third-button onclick=showArtist('$safe',$id)>$artist</button>"
done
echo -n "<p>Done</p>"

IFS=$SAVEIFS
