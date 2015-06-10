
from bluetooth import *
import serial
from mpd import MPDClient
import os
import subprocess
import time

f = open("/etc/pijukebox.conf",'r')
TOPDIR = f.readline().replace('Location:',"").rstrip('\n')
f.close()
server_sock=BluetoothSocket( RFCOMM )
server_sock.bind(("",PORT_ANY))
server_sock.listen(1)

port = server_sock.getsockname()[1]

uuid = "94f39d29-7d6d-437d-973b-fba39e49d4ee"

advertise_service( server_sock, "SampleServer",service_id = uuid,service_classes = [ uuid, SERIAL_PORT_CLASS ],profiles = [ SERIAL_PORT_PROFILE ])
                   
print "Waiting for connection on RFCOMM channel %d" % port

client_sock, client_info = server_sock.accept()
print "Accepted connection from ", client_info

try:
	while True:
  		data = client_sock.recv(1024)
		if len(data) == 0:
			print "No data"
			break
		musicAction="/usr/bin/python " + TOPDIR + "/scripts/python/musicAction.py " + data
		os.system(musicAction)
		updateStats="/usr/bin/python " + TOPDIR + "/scripts/python/updateStats.py"
		os.system(updateStats)
		updateScreen = "/usr/bin/python " + TOPDIR + "/scripts/python/updateScreen.py LIGHT"
		os.system(updateScreen)
		#ser = serial.Serial("/dev/ttyAMA0", "9600")
		#ser.write(data)
		#ser.close()
		#print "received [%s]" % data
except IOError:
	print "IOERR"
	pass

print "disconnected"
client_sock.close()
server_sock.close()

