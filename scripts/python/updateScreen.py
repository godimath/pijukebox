import serial
import sys
import subprocess
import time

print "Updating Screen"

c = open("/etc/pijukebox.conf", 'r')
TOPDIR=c.readline().replace('Location:', "").rstrip('\n')
c.close()

ser = serial.Serial("/dev/ttyAMA0", "9600")
if(len(sys.argv) > 1):
	if(sys.argv[1] == "BON"):
		ser.write(chr(17))
	elif(sys.argv[1] == "BOFF"):
		ser.write(chr(18))
	elif(sys.argv[1] == "IP"):
		result = subprocess.check_output(['hostname', '-I'])
		ser.write(chr(12))
		ser.write(chr(17))
		ser.write(str(result))
		time.sleep(5)
	elif(sys.argv[1] == "LIGHT"):
		ser.write(chr(12))
		ser.write(chr(17))

ser.write(chr(12))
statfile=TOPDIR + "/logs/stats.txt"
f = open(statfile,'r')

artist=f.readline()
track=f.readline()
vol=f.readline()
state=f.readline()

ser.write(artist)
ser.write(chr(142))	
ser.write(vol)
ser.write(chr(148))
ser.write(track)
ser.write(chr(163))
if(state=="play"):
	ser.write("o")
else:
	ser.write("x")

ser.close()
