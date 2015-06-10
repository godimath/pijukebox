#!/bin/bash

TOPDIR=$(cat /etc/pijukebox.conf | grep "Location:" | sed "s/"Location:"/""/g")

SAVEIFS=$IFS
IFS=$(echo -en "\n\b")
for f in $(find $1 | grep "\.mp3$")
do
	url=$(echo "$f" | sed s/" "/"%20"/g)
	python $TOPDIR/scripts/python/addMusic.py "$url"
done
IFS=$SAVEIFS
