#!/bin/bash

SAVEIFS=$IFS
IFS=$(echo -en "\n\b")

for artist in $(ls ../data --format=single-column)
do
	for track in $(ls "../data/$artist")
	do
		if [ $# -ne 0 ]
		then
			match=$(echo $track | grep "^$1")
			if [ $match != "" ]
			then
                                echo "<button class=button onclick=setSongId($id)>$track</button>"
			fi

		else
			id=$(cat "../data/$artist/$track")
			if [ "$id" == "" ]
			then
				id=$track
			else
				echo "<button class=button onclick=setSongId($id)>$track</button>"
			fi
		fi
	done

	safe=$(echo "$artist" | sed s/" "/"%20"/g)
	#echo "<button id=artist$id class=third-button onclick=showArtist('$safe',$id)>$artist</button>"
	id=$(($id + 1))
done

IFS=$SAVEIFS