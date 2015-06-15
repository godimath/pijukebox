#!/usr/bin/python
import RPi.GPIO as GPIO
import os

GPIO.setup(11,GPIO.IN)
GPIO.setup(12,GPIO.IN)
GPIO.setup(13,GPIO.IN)
GPIO.setup(15,GPIO.IN)

f = open("/etc/pijukebox.conf")

TOPDIR=f.readline().replace('Location:',"").rstrip('\n')
f.close()

while 1:
	if GPIO.input(11):
		print "Skipping forward"
		command="/usr/bin/python " + TOPDIR + "/scripts/python/updateScreen.py IP"
		os.system(command)

	if GPIO.input(12):
		print "Showing IP"
		command = "/usr/bin/python " + TOPDIR + "/scripts/python/musicAction.py R &"
		os.system(command)
		command = "/usr/bin/python " + TOPDIR + "/scripts/python/updateStats.py"
		os.system(command)
		command = "/usr/bin/python " + TOPDIR + "/scripts/python/updateScreen.py LIGHT &"
		os.system(command)

	if GPIO.input(13):
		print "Toggling play/pause"
		command = "/usr/bin/python " + TOPDIR + "/scripts/python/musicAction.py S &"
		os.system(command)

	if GPIO.input(15):
		print "Skipping Backward"
		command = "/usr/bin/python " + TOPDIR + "/scripts/python/musicAction.py L &"
		os.system(command)
		command = "/usr/bin/python " + TOPDIR + "/scripts/python/updateStats.py"
		os.system(command)
		command = "/usr/bin/python " + TOPDIR + "/scripts/python/updateScreen.py LIGHT &"
		os.system(command)

