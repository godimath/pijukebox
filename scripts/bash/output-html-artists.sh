#!/bin/bash

SAVEIFS=$IFS
IFS=$(echo -en "\n\b")

if [ $# -ne 0 ]
then
	unsafe=$(echo -n "$@" | sed s/"%20"/" "/g)
	echo -n "<p>Songs by $unsafe</p>"
	
	for track in $(ls "../data/$unsafe")
	do
		id=$(cat "../data/$unsafe/$track") 
		#if [ "$id" == "" ]
		#then
			#id=$track
		#fi
		echo -n "<p><button class='button' onclick=setSongId($id)>$track</button></p>"

		#echo "<input class=half-button type=submit name=id value=$id>$track</input>"
	done

	echo -n "<p>End</p>"
else

	id=0
	for artist in $(ls ../data --format=single-column)
	do
		safe=$(echo -n "$artist" | sed s/" "/"%20"/g)
		echo -n "<br><button id=artist$id class=button onclick=showArtist('$safe',$id)>$artist</button>"
		id=$(($id + 1))
	done
	echo -n "<p>End</p>"
fi
IFS=$SAVEIFS
