import $ from './lib/lib';


//$('div');
//$('.active').hide().show();
//$('div').hide().show();

//Работа с css-классами и обработчиками событий

//$('.active').toggle().toggle();
//$('.active').addClass('super', 'hello');
//$('div').addClass('super', 'hello');
//$('.active').removeClass('super', 'hello');
//$('.active').toggleClass('super');
//$('.active').addAction('click', sayHello);
//$('.active').removeAction('click', sayHello);
//$('.active').addClick(sayHello);
/*$('button').addAction('click', function() {
    $(this).toggleClass('active');
});*/
/*$('button').addClick(function() {
    $(this).toggleClass('active');
});*/
//$('button').setAttr('disabled', 'true');
//$('button').getAttr('disabled');
/*$('button').addClick(function() {
    $(this).setAttr('disabled', 'true');
});*/
/*$('button').addClick(function() {
    $(this).getAttr();
});*/
//$('div').setAttr('id', 'new');
//console.log($('.active').getAttr('id'));
//$('div').removeAttr('id');
//$('.active').setAttr('id', 'new');
//$('.active').toggleAttr('id', 'new');
/*$('button').addClick(function() {
    $('.active').toggleAttr('id', 'new');
});*/

//Создаем методы для работы с элементами

//console.log($('.active').htmlContent());
/*$('button').addClick(function() {
    $(this).htmlContent('Thanks!');
});*/
/*$('button').addClick(function() {
    $('div').getElem(2).toggleClass('active');
});*/
/*$('button').addClick(function() {
    $('div').getElem(2).htmlContent('Thanks!');
});
$('div').addClick(function() {
    console.log($(this).getElemIndex());
});*/
//console.log($('div').getElem(2).findElem('.more'));
//console.log($('div').getElem(2).findElem('.some'));
//console.log($('.some').closest('.findme'));
//console.log($('.some').closest('.findme5').addClass('kjl'));
//console.log($('.findme').findSiblings());
//console.log($('.more').getElem(0).findSiblings());

// Создаем анимации fadeIn/fadeOut

//$('button').fadeOut(1800);
//$('button').fadeIn(1800);

/*function sayHello() {
    console.log('Hello');
}*/

// Работа со стилями + создаем готовые компоненты кнопок для библиотеки

/*$('#first').addClick(() => {
    $('div').getElem(1).fadeOut(800);
});
$('[data-count="second"]').addClick(() => {
    $('div').getElem(2).fadeOut(800);
});
$('button').getElem(2).addClick(() => {
    $('.w-500').fadeOut(800);
});*/

// Создаем анимацию fadeToggle

/*$('#first').addClick(() => {
    $('div').getElem(1).fadeToggle(800);
});
$('[data-count="second"]').addClick(() => {
    $('div').getElem(2).fadeToggle(800);
});
$('button').getElem(2).addClick(() => {
    $('.w-500').fadeToggle(800);
});*/

//Создаем Dropdown menu динамически

// $('.wrap').htmlContent(
//     `<div class="dropdown">
// 	    <button class="btn btn-primary dropdown-toggle dropdown-toggle-dinamic" id="dropdownMenuButtonDinamic">Dropdown dinamic button</button>
// 	    <div class="dropdown-menu" data-toggle-id="dropdownMenuButtonDinamic">
// 	    	<a href="#" class="dropdown-item">Action #1</a>
// 	    	<a href="#" class="dropdown-item">Action #2</a>
// 	    	<a href="#" class="dropdown-item">Action #3</a>
// 	    </div>
// 	</div>`
// );
// $('.dropdown-toggle-dinamic').dropdown();

//Динамическое создание модальных окон

// $('#trigger').addClick(() => $('#trigger').createModal({
//     text: {
//         title: 'Dinamic Modal title',
//         body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, quam odit, dolor cupiditate velit porro recusandae. Tenetur, eius ullam, amet veritatis neque fuga dolorem sapiente ducimus nisi, inventore ex fugiat?'
//     },
//     btns: {
//         count: 3,
//         settings: [
//             [
//                 'Close',
//                 ['btn-danger', 'mr-10'],
//                 true
//             ],
//             [
//                 'Save canges',
//                 ['btn-success', 'mr-10'],
//                 false,
//                 () => {
//                     alert('Changes are saved');
//                 }
//             ],
//             [
//                 'Exit',
//                 ['btn-warning'],
//                 false,
//                 () => {
//                     alert('Please, save the results!');
//                 }
//             ]
//         ]
//     }
// }));

// //Динамическое создание слайдера
// $('#carouselDinamic').createSlider({
//     width: 500,
//     height: 350,
//     effects: {
//         transition: 'all 0.5s'
//     },
//     slides: [
//         {
//             src: 'https://huntland.ru/wp-content/uploads/2019/01/kavkazskiy_lesnoy_kot_6-e1548746794178-1024x638.jpg',
//             alt: 'photo'
//         },
//         {
//             src: 'https://animalreader.ru/wp-content/uploads/2014/04/lisa-e1397925485832.jpg',
//             alt: 'photo'
//         },
//         {
//             src: 'https://www.b17.ru/foto/uploaded/upl_1609658858_18874_a4z66.jpg',
//             alt: 'photo'
//         },
//         {
//             src: 'https://pbs.twimg.com/media/EZAdCN4XYAIzVl9.jpg',
//             alt: 'photo'
//         }
//     ]
// }).slider(5000);

//Сервисы для работы с сервером
//получение данных
/*$().getData('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res));
$().getData('https://jsonplaceholder.typicode.com/todos/1', 'text')
    .then(res => console.log(res));
$().getData('https://jsonplaceholder.typicode.com/todos/1', 'blob')
    .then(res => console.log(res));*/





$('#first').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(3).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('.wrap').html(
    `
     <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
          <a href="#" class="dropdown-item">Action</a>
          <a href="#" class="dropdown-item">Action#2</a>
          <a href="#" class="dropdown-item">Action#3</a>
        </div>
    </div> 
`
);
$('.dropdown-toggle').dropdown();