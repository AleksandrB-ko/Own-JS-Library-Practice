import $ from '../core';

$.prototype.calcScrollWidth = function () {
    let div = document.createElement('div');
    div.style.cssText = 'width:50px;height:50px;overflow-y:scroll;visibility:hidden;';
    document.body.append(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
};

$.prototype.modal = function (created) {
    for (let i = 0; i < this.length; i++) {
        const target = $(this[i]).getAttr('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${this.calcScrollWidth()}px`;
        });
        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(target).remove();
                }
                
            });
        });

        $(target).click(e => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(target).remove();
                }
            }
        });
    }


};

$('[data-toggle ="modal" ]').modal();

$.prototype.createModal = function ({ text, btns } = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        $(modal).setAttr('id', $(this[i]).getAttr('data-target').slice(1));

        // btns = {count: num, settings: [[text, classNames = [], close, callback]]}
        // кнопки btns = {кол-вол кнопок: 2, настройки: [[строка с текстом внутри кнопки, классы стилей кнопки, кнопка "закрыть"(true или false), callback ф-ция]]}

        const buttons = [];

        for (let j = 0; j < btns.count; j++) {
            let [buttonText, classNames, close, callback] = btns.settings[j];// деструктурируем массив settings

            let btn = document.createElement('button');// создаем кнопку
            btn.classList.add('btn', ...classNames);// добавляем классы стилей
            btn.textContent = buttonText;// устанавливаем текст кнопки из btns.settings[j][0]

            if (close) {// если btns.settings[j][2] = true, т.е. нужно, чтобы кнопка закрывала модальное окно, то
                $(btn).setAttr('data-close', 'true');// устанавливаем атрибут data-close
            }
            if (callback && typeof (callback) === 'function') {// если передана callback ф-ция, то
                $(btn).click(callback);// при клике на кнопку выполняется эта callback ф-ция
            }
            buttons.push(btn);// добавляем соззданную кнопку в массив с кнопками
        }

        $(modal).html(
            `<div class="modal-dialog">
	    		<div class="modal-content">
	    			<button class="close" data-close><span>&times;</span></button>
	    			<div class="modal-header">
	    				<div class="modal-title">${text.title}</div>
	    			</div>
	    			<div class="modal-body">${text.body}</div>
	    			<div class="modal-footer">
	    				
	    			</div>
	    		</div>
	    	</div>`
        );

        modal.querySelector('.modal-footer').append(...buttons);
        document.body.append(modal);
        $(this[i]).modal(true);
        $($(this[i]).getAttr('data-target')).fadeIn(500);
    }

};