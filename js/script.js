window.addEventListener('DOMContentLoaded', function () {

    "use strict";
    let mobileMenu = require('./parts/mobileMenu'),
        rotateGear = require('./parts/rotateGear'),
        search = require('./parts/search'),
        swiperInit = require('./parts/swiperInit');

    mobileMenu();
    rotateGear();
    search();
    swiperInit();
});