import RPi.GPIO as GPIO
import os

GPIO.setup(11,GPIO.IN)
GPIO.setup(12,GPIO.IN)

f = open("/etc/pijukebox.conf")

TOPDIR=f.readline().replace('Location:',"").rstrip('\n')
f.close()

while 1:
	if GPIO.input(11):
		print "Skip Button"
		command="/usr/bin/python " + TOPDIR + "/scripts/python/updateScreen.py IP"
		os.system(command)
	
	if GPIO.input(12):
		print "Showing IP"
		command = "/usr/bin/python " + TOPDIR + "/scripts/python/musicAction.py R"
		os.system(command)
		command = "/usr/bin/python " + TOPDIR + "/scripts/python/updateStats.py"
		os.system(command)
		command = "/usr/bin/python " + TOPDIR + "/scripts/python/updateScreen.py LIGHT"
		os.system(command)

