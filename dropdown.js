let firstBtn = document.querySelector(".btn1");
let secondBtn = document.querySelector(".btn2");
let thirdBtn = document.querySelector(".btn3");
let fourthBtn = document.querySelector(".btn4");
let fifthBtn = document.querySelector(".btn5");


let menu1 = document.querySelector(".news1");
let menu2 = document.querySelector(".news2");
let menu3 = document.querySelector(".news3");
let menu4 = document.querySelector(".news4");
let menu5 = document.querySelector(".news5");


firstBtn.addEventListener("click", () => {
    menu1.style.display = 'block';
    menu2.style.display = 'none';
    menu3.style.display = 'none';
    menu4.style.display = 'none';
    menu5.style.display = 'none';

});

secondBtn.addEventListener("click", () => {
   menu1.style.display = 'none';
   menu2.style.display = 'block';
   menu3.style.display = 'none';
   menu4.style.display = 'none';
   menu5.style.display = 'none';
});

thirdBtn.addEventListener("click", () => {
    menu1.style.display = 'none';
   menu2.style.display = 'none';
   menu3.style.display = 'block';
   menu4.style.display = 'none';
   menu5.style.display = 'none';
});

fourthBtn.addEventListener("click", () => {
    menu1.style.display = 'none';
   menu2.style.display = 'none';
   menu3.style.display = 'none';
   menu4.style.display = 'block';
   menu5.style.display = 'none';
});

fifthBtn.addEventListener("click", () => {
    menu1.style.display = 'none';
   menu2.style.display = 'none';
   menu3.style.display = 'none';
   menu4.style.display = 'none';
   menu5.style.display = 'block';
});