import os,sys
import Lokalize

for p in sys.path:
    if os.path.exists(p+'/../scripts/lokalize') and not p.endswith('/scripts/lokalize'):
        sys.path=sys.path+[p+'/../scripts/lokalize']

try:
    import multitarget
except:
    print "svn up l10n-kde4/scripts OR fix search path?"


observer=multitarget.MultiTarget(Lokalize,'/nn/','/nb/')
Lokalize.connect('editorActivated()',observer.editorActivated)
