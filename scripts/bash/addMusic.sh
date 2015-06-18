#!/bin/bash

if [ $# -ne 1 ]
then
	echo "Usage: $0 [MUSIC_FOLDER]"
	echo -e "\nExample"
	echo -e "\t$0 /home/pi/Music"
	exit 1
else

	TOPDIR=$(cat /etc/pijukebox.conf | grep "Location:" | sed "s/"Location:"/""/g")

	SAVEIFS=$IFS
	IFS=$(echo -en "\n\b")
	test -e $TOPDIR/webpage/$1
	if [ $? -eq 0 ]
	then
		echo "WARN: $1 already exists"
	else
		ln -s $1 $TOPDIR/webpage/
	fi
	python $TOPDIR/scripts/python/musicAction.py c
	id=0
	for f in $(find $1 | grep "\.mp3$")
	do

		echo "Adding file: $f, id: $id"
		title=$(id3v2 -R "$f" | grep "TIT" -m 1 | sed s/"TIT[0-9]: "//g)
		artist=$(id3v2 -R "$f" | grep "TPE" -m 1 | sed s/"TPE[0-9]: "//g)

		if [ "$artist" == "" ]
		then
			artist="Unknown Artist"
		fi
		if [ "$title" == "" ]
		then
			title="Unknown Track"
		fi
		echo -e "Artist: $artist\tTitle: $title"

		mkdir -p $TOPDIR/data/$artist
		if [ "$title" == "Unknown Track" ]
		then
			touch $TOPDIR/data/$artist/$id
		else
			echo "$id" > $TOPDIR/data/$artist/$title
		fi

		url=$(echo "$f" | sed s/" "/"%20"/g)
		python $TOPDIR/scripts/python/addMusic.py "$url"
		id=$(($id + 1))
	done
	IFS=$SAVEIFS
fi
