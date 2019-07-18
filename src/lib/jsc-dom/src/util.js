'use strict';

let Util = {
    isString: function(arg) {
        return typeof(arg) === 'string';
    },
    isObject: function(arg) {
        return typeof(arg) === 'object' && arg !== null;
    },
    isNull: function(arg) {
        return arg === null;
    },
    isNullOrUndefined: function(arg) {
        return arg == null;
    },
    isNumber: function(str){
        return typeof str==='number'
    },
    parseQueryString(queryString, sep, eq, options){
        sep = sep || '&';
        eq = eq || '=';
        var obj = {};
        if (!Util.isString(queryString) || queryString.length === 0) {
            return obj;
        }
        var regexp = /\+/g;
        queryString = queryString.split(sep);
        var maxKeys = 1000;
        if (options && Util.isNumber(options.maxKeys)) {
            maxKeys = options.maxKeys;
        }
        var len = queryString.length;
        // maxKeys <= 0 means that we should not limit keys count
        if (maxKeys > 0 && len > maxKeys) {
            len = maxKeys;
        }
        for (var i = 0; i < len; ++i) {
            var x = queryString[i].replace(regexp, '%20'),
                idx = x.indexOf(eq),
                kstr, vstr, k, v;
            if (idx >= 0) {
                kstr = x.substr(0, idx);
                vstr = x.substr(idx + 1);
            } else {
                kstr = x;
                vstr = '';
            }
            try {
                k = decodeURIComponent(kstr);
                v = decodeURIComponent(vstr);
            } catch (e) {
                k = kstr;
                v = vstr;
            }
            if (!obj.hasOwnProperty(k)) {
                obj[k] = v;
            } else if (Array.isArray(obj[k])) {
                obj[k].push(v);
            } else {
                obj[k] = [obj[k], v];
            }
        }
        return obj;
    }
};
module.exports = Util