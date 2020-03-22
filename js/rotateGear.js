"use strict";

let gear = document.querySelectorAll(".rotate-gear"),
    services = document.querySelector(".services"),
    num = 0;

document.addEventListener('mousewheel', function() {
    num = num + 10;
    gear.forEach(function(item, i, gear) {
        gear[i].style.transform = `rotate(${num}deg)`;
        // console.log(item);
    });
});
