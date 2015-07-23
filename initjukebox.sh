#!/bin/bash
TOPDIR=$(cat /etc/pijukebox.conf | grep "Location" | sed s/"Location:"/""/g)
#sudo chmod 777 /dev/ttyAMA0 &
#$TOPDIR/scripts/bash/bt.sh &
#/usr/bin/python $TOPDIR/scripts/python/readInput.py &
/usr/bin/python $TOPDIR/scripts/python/musicAction.py s &
#$TOPDIR/scripts/bash/screen.sh &

