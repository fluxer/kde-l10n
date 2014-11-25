// kdelibs4.js of Russian KDE translation

// Return the phrase without the given prefix if it has it,
// or the full phrase otherwise.
// Thanks to Chusslove Ilich from Serbian team
function without_prefix (prefix, phrase)
{
	if (phrase.indexOf(prefix) == 0) {
		phrase = phrase.substr(prefix.length);
	}
	return phrase;
}

//// Returns the phrase with all uppercase characters
//// replaced with lowercase ones.
//function toLowerCase (str)
//{
//	return str.toLowerCase();
//}

//--------------------------------------------------------------------
// This pair of functions can be used for storing/restoring
// any additional form. This is reasonable, because in most
// cases only 2 forms are used.
function setStash(text)
{
	Ts.setProp(Ts.msgstrf(), "S", text);
}

function inStash(arg)
{
	return Ts.getProp(arg, "S")
}

//--------------------------------------------------------------------
function replaceMultiplePairs(/* text, pattern1, replacement1, ... */)
{
	if (arguments.length % 2 != 1)
		throw Error("replaceMultiplePairs requires odd number of arguments.");
	
	var text = arguments[0];
	for (var i = 1; i < arguments.length; i += 2)
	{
		text = text.replace(arguments[i], arguments[i + 1]);
	}

	return text;
}

//--------------------------------------------------------------------
Ts.setcall("wo-prefix", without_prefix);
//Ts.setcall("tolower", toLowerCase);

Ts.setcall("store", setStash)
Ts.setcall("restore", inStash)

Ts.setcall("replace-pairs", replaceMultiplePairs)

