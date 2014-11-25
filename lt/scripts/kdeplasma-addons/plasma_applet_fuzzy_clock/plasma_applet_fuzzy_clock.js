function getProperty (prop, key) {
    return _dict_[key][prop];
}
Ts.setcall("get-case", getProperty);

_dict_ = {};
function addDictCases (key, gen, next) {
    if (!_dict_[key])
        _dict_[key] = {};
    _dict_[key]["kilmininkas"] = gen;
    _dict_[key]["kitavalanda"] = next;
}

function dynamicSetCases (gen, next) {
    addDictCases(Ts.msgstrf(), gen, next);
    Ts.fallback();
}
Ts.setcall("set-cases", dynamicSetCases);
