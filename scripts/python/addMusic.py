#!/usr/bin/python

from mpd import MPDClient
import sys

url="http://localhost/"
file=""
for i in range(0,len(sys.argv)):
	if(i!=0):
		file+=sys.argv[i]
url+=file
m = MPDClient()
m.connect("localhost",6600)
m.add(url)
m.close()
m.disconnect()
