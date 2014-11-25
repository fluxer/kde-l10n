// kdelibs4.js of Latvian KDE translation (copied from Ukrainian)

// ------------------------------
// Pick a phrase depending on a dynamic context field.
// Input is the keyword of the context field, followed by pairs of
// regex matcher on context value and corresponding phrase,
// and optionally followed by default phrase in case the value does not match.
// If the value does not match and default phrase is not given,
// fallback is signaled.
// If requested dynamic context field does not exist, fallback is signaled.
function select_by_context (/* ctxt_key,
                               valrx_1, phrase_1, ..., valrx_N, phrase_N
                               [, default_phrase]*/)
{
    if (arguments.length < 1)
        throw Error("Selector by context takes at least the context keyword.");

    var ctxtkey = arguments[0];
    var ctxtval = Ts.dynctxt(ctxtkey);

    var phrase;
    for (var i = 1; i < arguments.length; i += 2) {
        if (ctxtval.match(RegExp(arguments[i]))) {
            phrase = arguments[i + 1];
            break;
        }
    }
    if (phrase == undefined) {
        if (arguments.length % 2 == 0) {
            phrase = arguments[arguments.length - 1];
        } else {
            throw Ts.fallback();
        }
    }

    return phrase;
}
Ts.setcall("pēc-konteksta", select_by_context);
