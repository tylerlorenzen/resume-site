


const mainOption = document.querySelector('#main');
const yourMusic = document.querySelector('#yourMusic');
const playlist = document.querySelector('#playlists');


window.onresize = function() {
 console.log("Resizing");
 let width = window.innerWidth;
 if (width <= 760) {
  mainOption.classList.remove("show");
  yourMusic.classList.remove("show");
  playlists.classList.remove("show");
  console.log(width);
 }
};



window.onload = function() {
    let width = window.innerWidth;
    if (width <= 760) {
     mainOption.classList.remove("show");
     yourMusic.classList.remove("show");
     playlists.classList.remove("show");
     console.log(width);
    }
   };