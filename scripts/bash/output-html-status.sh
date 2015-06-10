#!/bin/bash
TOPDIR=$(cat /etc/pijukebox.conf | grep "Location" | sed "s/"Location:"/""/g")
cat $TOPDIR/logs/htmlstats.txt
