#!/bin/bash

SAVEIFS=$IFS
IFS=$(echo -en "\n\b")

echo -n "Found tracks: $1"

for artist in $(ls ../data --format=single-column)
do
	for track in $(ls "../data/$artist")
	do

		if [ $# -ne 0 ]
		then
			match=$(echo -n $track | grep "^$1")
			id=$(cat "../data/$artist/$track")
			if [ "$match" != "" ]
			then
                echo -n "<br><button class=button onclick=setSongId($id)>$track</button>"
			fi

		else
			id=$(cat "../data/$artist/$track")
			if [ "$id" == "" ]
			then
				id=$track
			else
				echo -n "<br><button class=button onclick=setSongId($id)>$track by $artist</button>"
			fi
		fi
	done

	safe=$(echo "$artist" | sed s/" "/"%20"/g)
	#echo "<button id=artist$id class=third-button onclick=showArtist('$safe',$id)>$artist</button>"
done
echo -n "<p>Done</p>"

IFS=$SAVEIFS
