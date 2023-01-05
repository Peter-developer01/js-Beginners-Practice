let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let drink2 = 0;

    function shoot(arrow) {
        console.log('Вы сделали выстрел...');

        let promise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                Math.random() > .5 ? resolve({}) : reject('Вы промахнулись!');
            }, 3000);
        });

        return promise;

    }

    function win() {
        console.log('Вы победили!');
        (drink2 == 1) ? buyBeer() : giveMoney();
    }

    function buyBeer() {
        console.log('Вам купили пиво');
    }

    function giveMoney() {
        console.log('Вам подарили деньгу');
    }

    function loose() {
        console.log('Вы проиграли!');
    }

    shoot({}, function(mark) {
        console.log('Вы попали в цель!');
        win(mark, buyBeer, giveMoney);
    }, function(miss) {
        console.error(miss);
        loose();
    });
});

let drink2 = 0;

function shoot(arrow) {
    console.log('Вы сделали выстрел...');

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись!');
        }, 3000);
    });

    return promise;

}

function win() {
    console.log('Вы победили!');
    (drink2 == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво');
}

function giveMoney() {
    console.log('Вам подарили деньгу');
}

function loose() {
    console.log('Вы проиграли!');
}

/* shoot({}, function(mark) {
    console.log('Вы попали в цель!');
    win(mark, buyBeer, giveMoney);
}, function(miss) {
    console.error(miss);
    loose();
}); */

shoot({})
    .then(mark => console.log('Вы попали в цель!'))
    .then(win)
    .catch(loose);