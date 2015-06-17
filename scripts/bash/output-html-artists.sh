#!/bin/bash

SAVEIFS=$IFS
IFS=$(echo -en "\n\b")

if [ $# -ne 0 ]
then
	echo "<b>Songs by $@</b>"
        echo "<form action=/ method=post>"
	for track in $(ls "../data/$@")
	do
		id=$(cat ../data/$@/$track)
		if [ "$id" == "" ]
		then
			id=$track
		fi
		echo "<button class=half-button onclick=setSongId($id)>$track</button>"
		#echo "<input class=half-button type=submit name=id value=$id>$track</input>"
	done
	echo "<input id=songid name=id value=\"\" style=visibility:hidden>"
        echo "</form>"
else

	echo "<b>Artists</b>"
	echo "<form action=/ method=post>"
	for artist in $(ls ../data --format=single-column)
	do
		echo "<input class=half-button name=artist type=submit value=\"$artist\"></input>"
	done
	echo "</form>"
fi
IFS=$SAVEIFS
