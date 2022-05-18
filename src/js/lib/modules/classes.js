import $ from '../core';

$.prototype.addClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this.classList) {
            this[i].classList.add(...classNames);
        }
    }
    return this;
};

$.prototype.removeClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this.classList) {
            this[i].classList.remove(...classNames);
        }
    }
    return this;
};

$.prototype.toggleClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (this.classList) {
            continue;

        }
         this[i].classList.toggle(classNames);
    }
    return this;
};

