#!/usr/bin/python
import sys
import os
from mpd import MPDClient

print "Updating stats"
c = open("/etc/pijukebox.conf",'r')
TOPDIR=c.readline().replace('Location:',"").rstrip('\n')
c.close()

statfile = TOPDIR + "/logs/stats.txt"
hstatfile = TOPDIR + "/logs/htmlstats.txt"


m = MPDClient()
m.connect("localhost",6600)
try:
	title=m.currentsong()["title"]
except KeyError:
	title="Unknown Title"
try:
	artist=m.currentsong()["artist"]
except KeyError:
	artist=("Unknown Artist")
file=m.currentsong()["file"].replace("http://localhost", "")
vol=m.status()["volume"]
state=m.status()["state"]

m.close()
m.disconnect()


f = open(statfile,'w')
f.write(title)
f.write("\n")
f.write(artist)
f.write("\n")
f.write(vol)
f.write("\n")
f.write(state)
f.close()

htitle = "<p class=text>Track: <b>" + title + "</b></p>"
hartist = "<p class=text>Artist: <b>" + artist + "</b></p>"
hvol = "<p class=text>Volume: <b id=volume>" + vol + "</b></p>"
hstate = "<p class=text>State: <b id=state>" + state + "</b></p>"
hfile = "<p><audio class=player id=player><source src=\"" + file + "\" type=\"audio/mpeg\"></audio></p>"
hlink = "<p><button class=button onclick=download(\"" + file + "\")>Download</button></p>"

h = open(hstatfile, 'w')
h.write(htitle)
h.write(hartist)
h.write(hvol)
h.write(hstate)
h.write(hfile)
h.write(hlink)
h.close()


