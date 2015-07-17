#!/bin/bash

SAVEIFS=$IFS
IFS=$(echo -en "\n\b")

if [ $# -ne 0 ]
then
	echo "<p>$@</p>"
	unsafe=$(echo "$@" | sed s/"%20"/" "/g)
	
	for track in $(ls "../data/$unsafe")
	do
		id=$(cat "../data/$unsafe/$track")
		#if [ "$id" == "" ]
		#then
			#id=$track
		#fi
		echo "<button class='third-button' onclick=setSongId($id)>$track</button>"

		#echo "<input class=half-button type=submit name=id value=$id>$track</input>"
	done
else
	id=0
	for artist in $(ls ../data --format=single-column)
	do
		safe=$(echo "$artist" | sed s/" "/"%20"/g)
		echo "<button id=artist$id class=third-button onclick=showArtist('$safe',$id)>$artist</button>"
		id=$(($id + 1))
	done

fi
IFS=$SAVEIFS
