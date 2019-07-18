importScripts('http://localhost:8000/chunk-vendors.js');
var events = {}
this.dispatchEvent = function(evtName, data){
    "use strict";
    events[evtName](data)
}
this.addEventListener = function( evtName, callback, capture){
    "use strict";
    events[evtName] = callback
}
this.addEventListener('message',function(data){
    console.log('event '+data)
})
gic.navigateTo()