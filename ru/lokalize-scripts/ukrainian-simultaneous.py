import os,sys
import time
import Lokalize

sys.path=sys.path+[sys.path[-1]+'../scripts/lokalize']

try:
    import multitarget
except:
    print "fuck"
try:
    import dbus
except:
    print "please, install python-dbus package"


thisProject='/ru/'
syncProject='/uk/'

observer=multitarget.MultiTarget(Lokalize,thisProject,syncProject)
