import $ from '../core';

$.prototype.setAttr = function (attrName, attrValue) {
    if (!attrName || !attrValue) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attrName, attrValue);
    }
    return this;
};
$.prototype.removeAttr = function (attrName) {
    if (!attrName) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(attrName);
    }
    return this;
};
$.prototype.getAttr = function (attrName) {
    if (!attrName) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        return this[i].getAttribute(attrName);
    }
};
$.prototype.toggleAttr = function (attrName, attrValue) {
    if (!attrName || !attrValue) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(attrName)) {
            this[i].removeAttribute(attrName);
        } else {
            this[i].setAttribute(attrName, attrValue);
        }
    }
    return this;
};