#!/bin/bash

TOPDIR=$(cat /etc/pijukebox.conf | grep "Location:" | sed "s/"Location:"/""/g")

cat $TOPDIR/webpage/template.css | sed s/"@@BACKGROUND@@"/$1/g | sed s/"@@BUTTON@@"/$2/g | sed s/"@@TEXT@@"/$3/g > $TOPDIR/webpage/style.css
