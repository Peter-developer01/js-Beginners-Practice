let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

/* btn[0].onclick = () => {
    alert('Вы нажали на первую кнопку!');
}; */

/* btn[0].onclick = () => {
    alert('Вы опять нажали на первую кнопку!');
}; */

/* btn[0].addEventListener('click', () => {
    alert('Вы нажали на первую кнопку!');
}); */

/* btn[0].addEventListener('click', () => {
    alert('Вы опять нажали на первую кнопку!');
}); */

/* btn[0].addEventListener('click', (event) => {
    console.log(event);
    let target = event.target;
    target.style.display = 'none';

    console.log(`Произошло событие: ${event.type} на элементе ${target}`);
}); */

/* wrap.addEventListener('click', (event) => {
    console.log(`Произошло событие: ${event.type} на элементе ${target}`);
}); */

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(`Произошло событие: ${event.type} на элементе ${target}`);
});

btn.forEach((item) => {
    item.addEventListener('mouseleave', () => {
        console.log('Вышли');
    });
});

/* btn[0].addEventListener('mouseenter', () => {
    alert('Вы навели на первую кнопку');
}); */