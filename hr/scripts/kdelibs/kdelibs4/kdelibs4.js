// kdelibs4.js of Croatian KDE translation

// ------------------------------
// Create a scripting call linked to property key in pmaps.
// If the call name starts with lowercase letter,
// another call with the first letter in uppercase will be defined,
// which will upcase the first letter in the property value before
// returning it.
function create_pgetter (cname, pkey)
{
    if (!Ts.hascall(cname)) {
        Ts.setcall(cname,
            function (phr) {
                if (this.pkey.constructor == Array) {
                    for (var i = 0; i < this.pkey.length; ++i) {
                        var pval = Ts.getProp(phr, this.pkey[i]);
                        if (pval != undefined) {
                            return pval;
                        }
                    }
                    return undefined;
                } else {
                    return Ts.getProp(phr, this.pkey);
                }
            },
            {"pkey" : pkey});

        cname_uc = Ts.toUpperFirst(cname);
        if (cname_uc != cname) {
            Ts.setcall(cname_uc,
                function (phr) {
                    return Ts.toUpperFirst(Ts.acall(this.cname_lc, phr));
                },
                {"cname_lc" : cname});
        }
    }
}

// ------------------------------
// Select one of three forms according to the gender of the phrase.
function select_by_gender (phrase, form_m, form_f, form_n)
{
    // Select gender (throws fallback if phrase not found).
    var gender = Ts.getProp(phrase, "_r");

    if (gender == "m") {
        return form_m;
    } else if (gender == "ž") {
        return form_f;
    } else if (gender == "s") {
        return form_n;
    } else {
        throw Ts.fallback();
    }
}
Ts.setcall("po-rodu", select_by_gender);

// ------------------------------
// Select one of six forms according to the gender and number of the phrase.
function select_by_number_gender (phrase,
                                  form_m, form_f, form_n, // singulars
                                  form_mp, form_fp, form_np) // plurals
{
    number = Ts.getProp(phrase, "_b");
    if (number == "j") { // singular
        return select_by_gender(phrase, form_m, form_f, form_n);
    } else if (number == "m") { // plural
        return select_by_gender(phrase, form_mp, form_fp, form_np);
    } else {
        throw Ts.fallback();
    }
}
Ts.setcall("po-rodu-broju", select_by_number_gender);

// ------------------------------
// Predefined property getters.
// Call names with corresponding pmap keys for predefined getters.
// The first letter in the call name should be in lowercase;
// see the comment to create_pgetter() function for the reason.
var call_name_to_prop = {
    "_r" : "_r", // gender
    "_b" : "_b", // number

    "nom" : "nom", // nominative case
    "gen" : "gen", // genitive case
    "dat" : "dat", // dative case
    "aku" : "aku", // accusative case
    "vok" : "vok", // vocative case
    "ins" : "ins", // instrumental case
    "lok" : ["lok", "dat"], // locative case (forwarded to dative if missing)
};
for (cname in call_name_to_prop) {
    create_pgetter(cname, call_name_to_prop[cname]);
}

// ------------------------------
// Property maps to be available to all apps.
Ts.loadProps("general");
