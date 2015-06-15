#!/bin/bash

echo -e "##Installing pijukebox in $PWD##\n"

echo -ne "Enter the full path to the folder you want to recursively add music file from:\n> "

read musicDir
echo -e "##Recursively adding mp3s from $musicDir##\n"
#scripts/bash/addMusic.sh $musicDir

echo -e "##Adding backlight timer to crontab (Requires root)##\n"
#sudo echo "*/1 *	* * *	root	/usr/bin/python /home/pi/pijukebox/scripts/python/updateScreen.py BOFF" >> /etc/crontab

echo -e "##Now add the following to /etc/rc.local##\n"
echo -e "\t/path/to/pijukebox/initjukebox.sh &"


