function mobileMenu() {
    "use strict";
let x = document.getElementById("myLinks"),
    topnav = document.getElementsByClassName("topnav")[0],
    btnMobile = document.getElementById("btnMobile");

function myFunction() {    
    if (x.style.display === "block") {
      x.style.display = "none";
      topnav.style.height = 60 + "px";
    } else {
      x.style.display = "block";
      topnav.style.height = 580 + "px";
    }
}
btnMobile.addEventListener('click', myFunction);
let searchIcon = document.querySelector('.searchIcon'),
    searchItem = document.querySelector('#mobileSearch');
console.log(searchItem);

searchIcon.addEventListener('click', function() {
    if(searchItem.style.opacity == 0) {
        searchItem.style.opacity = 100;
    } else {
        searchItem.style.opacity = 0;
    }
});}
module.exports = mobileMenu;