#!/bin/bash

TOPDIR=$(cat /etc/pijukebox.conf | grep "Location:" | sed "s/"Location:"/""/g")

echo "Background Color: $1"
echo "Button Color: $2"
echo "Button Text: $3"
echo "Paragraph text: $4"
cat $TOPDIR/webpage/template.css | sed s/"@@BACKGROUND@@"/$1/g | sed s/"@@BUTTON@@"/$2/g | sed s/"@@BUTTONTEXT@@"/$3/g | sed s/"@@TEXT@@"/$4/g> $TOPDIR/webpage/style.css
