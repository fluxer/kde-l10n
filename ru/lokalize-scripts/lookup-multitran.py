# -*- coding: utf-8 -*-
import os,sys
import time
import Lokalize
import Editor

def lookup():
    if not Editor.isValid(): return

    word=Editor.selectionInTarget()
    if not word: word=Editor.selectionInSource()
    if not word: return

    os.system("kfmclient newTab 'http://multitran.ru/c/m.exe?l1=1&l2=2&s=%s'" % word)

lookup()
