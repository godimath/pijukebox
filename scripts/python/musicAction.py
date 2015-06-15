#!/usr/bin/python
import sys
import os
from mpd import MPDClient

def musicAction(action):
	m = MPDClient()
	m.connect("localhost",6600)
	if(action=='U' or action=='D'):
		currVol = m.status()["volume"]
		#print "Curr: ", currVol
		intVol = int(currVol)
		if(action == 'U'):
			intVol += 5
			if(intVol > 100):
				intVol=100
		else:
			intVol -= 5
			if(intVol < 0):
				intVol=0
		m.setvol(str(intVol))
		#print "Volume: ", str(intVol)
	elif(action=='L'):
		#print "Previous Song"
		m.previous()
	elif(action=='R'):
		#print "Next Song"
		m.next()
	elif(action=='S'):
		#print "Pause/Play"
		m.pause()
	elif(action=='s'):
		#print "Starting playlist over"
		m.play(0)
	elif(action=='c'):
		#print "Clearing Playlist"
		m.clear()
	elif(action=="update"):
		#m.clear()
		#os.system("bash /home/pi/music.sh /home/pi/Music/ & sleep 5")
		#p = subprocess.Popen('./music.sh Music', shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
		#for line in p.stdout.readlines():
		#        print "Adding: " + line
		#        m.add(file)
		#m.repeat(1)
		#m.random(1)
		#m.play()
		print "Use addMusic.sh to add music"
	elif(action=="status"):
		track=m.currentsong()["file"]
		vol=m.status()["volume"]
		state=m.status()["state"]
		output= track + " " + vol + " " + state
		print output
	elif(action=="artist"):
		try:
			print m.currentsong()["artist"]
		except KeyError:
			print "Unknown Artist"		
	elif(action=="track"):
		try:
			print m.currentsong()["title"]
		except KeyError:
			print "Unknown Track"

	elif(action=="file"):
		print m.currentsong()["file"]
	elif(action=="fullstatus"):
		print m.status()
		print m.currentsong()
	elif(action=="M"):
		if(int(m.status()["volume"]) > 0):
			m.setvol(0)
		else:
			m.setvol(70)
	elif(action=="volume"):
		print m.status()["volume"]
	else:
		try:
			intaction=int(action)
			#print "Playing id:", intaction
			m.play(intaction)
		except:

		#print m.currentsong()
		#print m.status()
		#print m.playlist()
			print "Unrecognized command: " + action

	m.close()
	m.disconnect()
##
musicAction(sys.argv[1])
