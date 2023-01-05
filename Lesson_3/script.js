let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

/* for(let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
} */

/* heart.forEach(function(item, i, hearts) {
    item.style.backgroundColor = 'blue';
}); */

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

console.log(div);
console.log(text);

div.classList.add('black');

/* document.body.appendChild(div); */
/* wrapper.appendChild(div); */

/* div.innerHTML = '<h1>Hello World!</h1>'; */
div.textContent = 'Hello World!';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);

/* console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle[2]);
console.log(heart[1]);
console.log(oneHeart); */

/* window.addEventListener('DOMContentLoaded', () => {
    let circle = document.getElementsByClassName('circle');

    circle.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('touchmoveERR');
    });

    circle.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('touchmove');
    });

    circle.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('touchmoveII');
    });
});

circle.addEventListener('touchstart', (e) => {
    e.preventDefault();
    console.log('touchmoveERR');
});

circle.addEventListener('touchmove', (e) => {
    e.preventDefault();
    console.log('touchmove');
});

circle.addEventListener('touchend', (e) => {
    e.preventDefault();
    console.log('touchmoveII');
}); */

/* Как заменять пароль: */
/* console.log(pass.replaceAll(/./g, '*')); */
///

/* const sayHello = () => {
    console.log('Hello World!');
}; */

/* let timerId = setTimeout(sayHello, 3000);
clearTimeout(timerId); */

/* let timerId = setInterval(sayHello, 30);
clearTimeout(timerId); */

let timerId = setTimeout(function log() {
    console.log('Hello');
    setTimeout(log, 2000);
});

let btnOne = document.querySelector('.btn'),
    elem = document.querySelector('.animated');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);

    function frame() {
        if(pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos +'px';
            elem.style.left = pos +'px';
        }
    }
}

btnOne.addEventListener('click', myAnimation);