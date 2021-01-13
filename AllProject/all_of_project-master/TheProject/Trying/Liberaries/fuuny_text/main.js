// global, $
$(function () {

    'use strict';

    $('.name1 span').funnyText({
        speed: 700,
        borderColor: '#080',
        activeColor: '#00f',
        color: 'red',
        fontSize: '50px',
        direction: 'both' // horizontal  or vertical
    });

    'use strict';

    $('.name2 span').funnyText();

    // $('.mySelector').funnyText({
    //     speed: 700,
    //     borderColor: 'black',
    //     activeColor: 'white',
    //     color: 'black',
    //     fontSize: '7em',
    //     direction: 'both'
    // });
});
