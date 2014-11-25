// kdelibs4.js of Irish KDE translation

// ------------------------------
// Global dictionary of property getters.
var _propgetters_ = {};

// ------------------------------
// Property getter object contains the following data attributes:
// - callname: the name of the getter call as exposed to PO files
// - values: dictionary of values of this property per phrase
//
function Propgetter (callname)
{
    this.callname = callname;
    this.values = {};

    this.getprop = getprop;

    // Set the PO call.
    Ts.setcall(callname, getprop, this);
}

// Property getter method attached to getter objects.
// If the property is not found, fallback is signalled.
//
function getprop (phrase)
{
    if (phrase in this.values) {
        return this.values[phrase];
    }
    throw Ts.fallback();
}

// ------------------------------
// Set properties of the phrase given by the finalized msgstr in the PO file.
// The arguments to the call are as many keys followed by their value
// as desired (i.e. number of arguments must be even).
//
// The property keys become property getters which can be used to retrive
// the value at a later point. If the getter for a given key already exists,
// the new value is added into its overrides.
//
// The call always signals fallback.
//
function setprops (/*...*/)
{
    if (arguments.length % 2 != 0)
        throw Error("Property setter given odd number of arguments.");

    for (var i = 0; i < arguments.length; i += 2) {
        var pkey = arguments[i];
        var pval = arguments[i + 1];

        // Either create new, or select existing getter.
        var pgetr;
        if (!_propgetters_[pkey]) {
            // Create new getter for this property.
            pgetr = new Propgetter(pkey);
        }
        else {
            // Get previously defined getter.
            pgetr = _propgetters_[pkey];
        }

        // Associate the property value to finalized msgstr.
        pgetr.values[Ts.msgstrf()] = pval;
    }

    throw Ts.fallback();
}
Ts.setcall("properties", setprops);

// ------------------------------
// Standard message dialogs come with cookie-cutter "Yes", "No", etc. buttons,
// but we can't translate them properly like that.
// Instead, attach the proper answers to the message caption/text in the PO,
// and then retrieve them in filtering messages for message dialog buttons
// in kdelibs4.po (those with context "@action:button filter-...").

// Dictionary of answers.
var _answers_ = {};

// Set answers as key-value pairs, as many as needed.
// The call always signals fallback.
function setAnswers (/*...*/)
{
    if (arguments.length % 2 != 0)
        throw Error("Answers setter given odd number of arguments.");

    for (var i = 0; i < arguments.length; i += 2) {
        var akey = arguments[i];
        var answer = arguments[i + 1];
        _answers_[akey] = answer;
    }

    throw Ts.fallback();
}
Ts.setcall("set-answers", setAnswers);
// msgid "Blah, blah...?"
// msgstr ""
// "Eh laddy, blah, blah...?"
// "|/|"
// "$[set-answers no '&Nay!' yes '&Arr!']"

// Get an answer by key.
// Signals fallback if the answer with the given key is not set.
// Deletes the answer from the dictionary, so that it doesn't happen
// that it gets retrieved in a later, unrelated question.
function getAnswer (akey)
{
    answer = _answers_[akey];
    if (!answer) throw Ts.fallback();
    delete _answers_[akey];
    return answer;
}
Ts.setcall("get-answer", getAnswer);
// msgctxt "@action:button filter-yes"
// msgid "%1"
// msgstr "%1|/|$[get-answer yes]"

// Reset all answers, so that they don't get used for the wrong question.
// Always signals fallback.
function resetAnswers ()
{
    _answers_ = {};
}
Ts.setcall("reset-answers", resetAnswers);
// msgctxt "@action:button post-filter"
// msgid "."
// msgstr ".|/|$[reset-answers]"

