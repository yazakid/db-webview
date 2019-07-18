import UrlParser from './url-parser'
const NOOP = ()=>{}
let bomInfo = {}
let locationInstance = null;

class History {
    constructor(){

    }
    go(a,b,c){

    }
}

class Location {
    constructor(){
        this._infos = {};
        locationInstance = this;
        this._update();
    }
    set hash (hash){
        var event = new window.CustomEvent('hashchange');
        event.oldURL = this.href;
        this._infos.hash = hash;
        this.href = this.href.replace(new RegExp(this.hash), hash);
        event.newURL = this.href;
        self.dispatchEvent(event)
    }
    get hash (){
        return this._infos.hash;
    }
    get host (){
        return this._infos.host;
    }
    get hostname (){
        return this._infos.hostname;
    }
    get href (){
        return this._infos.href;
    }
    set href (href){
        this._infos.href = href;
    }
    get origin (){
        return this._infos.origin;
    }
    get pathname (){
        return this._infos.pathname;
    }
    get port (){
        return this._infos.port;
    }
    get protocol (){
        return this._infos.protocol;
    }
    get search (){
        return this._infos.search;
    }
    _update(){
        Object.assign(this._infos, UrlParser.parse(bomInfo.url));
    }
    replace (url:string){
        update({url})
    }
    push: NOOP
    pop: NOOP
}

function update(data){
    Object.assign(bomInfo, data);
    if(locationInstance){
        locationInstance._update();
        var event = new Event('hashchange');
        event.data = this;
        self.dispatchEvent(event)
    }

}

export {
    Location,
    History,
    update
}

Location