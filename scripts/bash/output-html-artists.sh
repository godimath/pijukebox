#!/bin/bash

SAVEIFS=$IFS
IFS=$(echo -en "\n\b")

if [ $# -ne 0 ]
then
        echo "<form action=/ method=post>"
	for track in $(ls "../data/$@")
	do
		id=$(cat ../data/$@/$track)
		if [ "$id" == "" ]
		then
			id=$track
		fi
		echo "<input class=track type=submit name=id value=$id>$track</input>"
	done
        echo "</form>"
else

	echo "<form action=/ method=post>"
	for artist in $(ls ../data --format=single-column)
	do
		echo "<input class=artist name=artist type=submit value=\"$artist\"></input>"
	done
	echo "</form>"
fi
IFS=$SAVEIFS
