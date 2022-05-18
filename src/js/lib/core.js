// (() => {
//     const $ = function (selector) {
//         const elements = document.querySelectorAll(selector);
//         const obj = {};

//         obj.hide = () => {
//             elements.forEach(elem => {
//                 elem.style.display = 'none';
//             });
//             return obj;
//         };

//         obj.show = () => {
//             elements.forEach(elem => {
//                 elem.style.display = '';
//             });
//             return obj;
//         };

//         return obj;
//     };

//     window.$ = $;
// })();


const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
    if (!selector) {
        return this;// если selector не был передан, вернет пустой объект
    }
    if (selector.tagName) {// если есть свойство tagName, значит мы передаем не селектор, а html-элемент (узел),
        this[0] = selector;// то этот элемент записываем в объект
        this.length = 1;// длина объекта соответственно = 1, т.к. элемент один
        return this;// возвращаем прототип, прекращаем дальнейшую работу функции
    }

    Object.assign(this, document.querySelectorAll(selector));// создаем новый объект, копируя свойства исходного объекта
    this.length = document.querySelectorAll(selector).length;

    return this;// вернет прототип
};

$.prototype.init.prototype = $.prototype;// в прототип объекта, который будет возвращен из ф-ции init(), записываем прототип главной ф-ции $(). Таким образом, на объекте, который будет создаваться при помощи ф-ции $(), мы можем использовать любые методы, которые будут внутри прототипа ф-ции init()

window.$ = $;// в глобальный объект window записываем ф-цию $(), чтобы мы могли глобально ее использовать

export default $;