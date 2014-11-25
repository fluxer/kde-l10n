// kdelibs4.js of Arabic KDE translation.

// ------------------------------
// Given a flat list of pairs of comma-separated country codes and strings,
// pick the string corresponding to the referent country
// (defined by Transcript config field 'dialect' or KDE locale).
// If no given country matches referent, signals fallback.
function select_by_country (/*COUNTRIES1, STRING1, ...*/)
{
    if (arguments.length % 2 != 0)
        throw Error("Picker by country given odd number of arguments.");

    // Choose referent country from Transcript or KDE config.
    ref_country = Ts.getConfString("dialect");
    if (ref_country == undefined) {
        ref_country = Ts.localeCountry();
    }

    // Go through all countries-string pairs.
    for (var i = 0; i < arguments.length; i += 2) {
        var countries = arguments[i].split(",");
        var str = arguments[i + 1];
        for (var j = 0; j < countries.length; j += 1) {
            if (countries[j] == ref_country) {
                return str;
            }
        }
    }
    throw Ts.fallback();
}
Ts.setcall("by-country", select_by_country);
// NOTE: You can replace "by-country" in the line above with any UTF-8 string,
// e.g. one in your language so that it blends nicely inside POs.

