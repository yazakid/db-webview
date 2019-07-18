/**
 @param {Node} newChild
 @param {Node} refChild
 @return {Node}
 */
import {Commands} from "./common";

Node.prototype.insertBefore = function(newChild,refChild) {};
/**
 @param {Node} newChild
 @param {Node} refChild
 @return {Node}
 */
Node.prototype.replaceChild = function(newChild,refChild) {};
/**
 @param {Node} oldChild
 @return {Node}
 */
Node.prototype.removeChild = function(oldChild) {};
/**
 @param {Node} newChild
 @return {Node}
 */
Node.prototype.appendChild = function(newChild) {};
/**
 @return {boolean}
 */


class Node {
    constructor (){}
    /**
     @param {Node} newChild
     @return {Node}
     */
    appendChild (newChild){
        addToQueue([Commands.appendChild, [this.mappingID, newChild.mappingID]]); //加入通知webview更新队列
        this.childNodes.splice(this.childNodes.length, 0, newChild);
        newChild.parentNode = this;
        return  newChild
    }
    /**
     @param {Node} oldChild
     @return {Node}
     */
    removeChild (oldChild){}
    /**
     @param {Node} newChild
     @param {Node} refChild
     @return {Node}
     */
    replaceChild (newChild, refChild){}
}

class Element extends Node {
    constructor(tagName) {
        super(Node.ELEMENT_NODE);
    }
    get tagName (){}
    /**
     @param {string} name
     @return {string}
     */
    getAttribute (){}
    /**
     @param {string} name
     @param {string} value
     */
    setAttribue (){}
}