"use strict";

let searchField = document.getElementsByClassName('search-item-block')[0],
    searchSvgStart = document.getElementById('searchSvgStart'),
    searchSvgRun = document.getElementById('searchSvgRun');

searchSvgStart.addEventListener('click', function() {
    searchField.style.display = "block";
    searchSvgStart.style.opacity = 0;
});
searchSvgRun.addEventListener('click', function() {
    searchField.style.display = "none";
    searchSvgStart.style.opacity = 100;
});

