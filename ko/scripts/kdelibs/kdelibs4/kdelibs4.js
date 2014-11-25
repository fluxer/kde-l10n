// kdelibs4.js of Korean KDE translation
// This script is distributed under GNU General Public License, version 2 or later.
// Copyright (C) Chusslove Ilich, 2007. (for strip accelerator part)
// Copyright (C) Park Shinjo, 2007. (rest of all)
//

stripAccRx = /\((&|&amp;)?[a-zA-Z0-9]\)/;
lstJosa = [["가","이","이(가)",false],
           ["를","을","을(를)",false],
           ["는","은","은(는)",false],
           ["와","과","과(와)",false],
           ["","이","(이)",false],
           ["","으","(으)", true]];

// *** Detect the provided word is Hangeul.
function isHangeul(code)
{
    if (code >= 0xac00 && code <= 0xd7af) return true;
    else return false;
}

// *** Strip the accelerator marker, composed of an ASCII alphanumeric
// within parenthesis (with or without an ampersand in front).
function stripAccelerator(phrase)
{
    return phrase.replace(stripAccRx, "");
}

// *** Detect the phrase has 종성(Final jamo). It will be used in
// detection of 을/를, 이/가.
function getFinalJamoType(phrase, rieul)
{
    var code = phrase.charCodeAt(phrase.length - 1);
    if (!isHangeul(code)) return 2;
    code -= 0xac00;
    code %= 28;
    if (rieul && code == 8) return 0;
    switch (code) {
    case 0:
        return 0;
    default:
        return 1;
    }
}

// Functions in below attach appropriate 조사(postposition)
// according to the word. It only affects Hangeul, if non-Hangeul
// word is provided, then fallback string is used.
function attachJosa(type, phrase, marker)
{
    var i = getFinalJamoType(phrase, lstJosa[type][3]);
    if (marker) phrase = marker + phrase + marker;
    return phrase + lstJosa[type][i];
}

function attachIGa(phrase, marker)
{
    return attachJosa(0, phrase, marker);
}

function attachEulReul(phrase, marker)
{
    return attachJosa(1, phrase, marker);
}

function attachEunNeun(phrase, marker)
{
    return attachJosa(2, phrase, marker);
}

function attachWaGwa(phrase, marker)
{
    return attachJosa(3, phrase, marker);
}

function attachI(phrase, marker)
{
    return attachJosa(4, phrase, marker);
}

function attachEu(phrase, marker)
{
    return attachJosa(5, phrase, marker);
}


// ==> Exports to PO calls
Ts.setcall("~stripAccel", stripAccelerator);
Ts.setcall("을를", attachEulReul);
Ts.setcall("이가", attachIGa);
Ts.setcall("은는", attachEunNeun);
Ts.setcall("와과", attachWaGwa);
Ts.setcall("이", attachI);
Ts.setcall("으", attachEu);
