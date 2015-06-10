#!/bin/bash
TOPDIR=$(cat /etc/pijukebox.conf | grep "Location" | sed "s/"Location:"/""/g")
while [ 1 ]
do
	/usr/bin/python $TOPDIR/scripts/python/updateStats.py
	/usr/bin/python $TOPDIR/scripts/python/updateScreen.py
	sleep 1
done
