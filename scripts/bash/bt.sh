#!/bin/bash
TOPDIR=$(cat /etc/pijukebox.conf | grep "Location" | sed "s/"Location:"/""/g")
while [[ 1 ]]
do
	service bluetooth restart && hciconfig hci0 piscan && /usr/bin/python $TOPDIR/scripts/python/rfcomm-server.py
done
