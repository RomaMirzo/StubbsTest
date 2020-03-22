function search() {"use strict";

let searchField = document.getElementsByClassName('search-item-block')[0],
    searchSvgStart = document.getElementById('searchSvgStart'),
    searchSvgRun = document.getElementById('searchSvgRun');

let topUp = -45,
    topDown = 0;

searchField.style.top = `${topUp}px`;

// moveDown
searchSvgStart.addEventListener('click', function() {
    searchField.style.display = "block";
    searchSvgStart.style.opacity = 0;

    let intervalId = setInterval(() => {
        searchField.style.top = `${topUp}px`;
        topUp++;
        if(topUp === 0) {
            topUp = -45;
            clearInterval(intervalId);
        }
    }, 5)
});

// moveUp
searchSvgRun.addEventListener('click', function() {
    let intervalId = setInterval(() => {
        searchField.style.top = `${topDown}px`;
        topDown--;
        if(topDown < -45) {
            topDown = 0;
            clearInterval(intervalId);
            searchField.style.display = "none";
            searchSvgStart.style.opacity = 100;
        }
    }, 5);
});}
module.exports = search;