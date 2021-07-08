define(['jquery'], function($) {
    // ...
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var spec = {
        backgrounds: [
           'uno.jpg',
           'dimension.png',
           'skulls.png',
           'tree_bark.png',
           'contemporary_china_2.png',
           'eight_horns.png',
           'swirl_pattern.png',
           'upfeathers.png',
           'contemporary_china.png',
           'paisley.png',
           'symphony.png'
        ]
    };

    var i = random(0, spec.backgrounds.length - 1);
    var b = spec.backgrounds[i];
    $('body').css('background-image', 'url("assets/images/backgrounds/' + b + '")');
    // ...
});