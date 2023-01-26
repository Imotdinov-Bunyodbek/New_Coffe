var elBurgerBtn = document.querySelector(".js-open-btn");
elBurgerBtn.addEventListener("click", function () {
    elBurgerBtn.closest(".site-header").classList.toggle("sitenav-open")
})
var btnDropdown1 = document.querySelector(".btn-box1");
var btn1 = document.querySelector(".radio-group1");
var img1 = document.querySelector(".arrow-img1");

btnDropdown1.addEventListener("click", function(){
    btn1.classList.toggle("radio-group-show");
    img1.classList.toggle("arrow-img-open");
})
var btnDropdown2 = document.querySelector(".btn-box2");
var btn2 = document.querySelector(".radio-group2");
var img2 = document.querySelector(".arrow-img2");

btnDropdown2.addEventListener("click", function(){
    btn2.classList.toggle("radio-group-show");
    img2.classList.toggle("arrow-img-open");
})
var btnDropdown3 = document.querySelector(".btn-box3");
var btn3 = document.querySelector(".radio-group3");
var img3 = document.querySelector(".arrow-img3");

btnDropdown3.addEventListener("click", function(){
    btn3.classList.toggle("radio-group-show");
    img3.classList.toggle("arrow-img-open");
})
var btnDropdown4 = document.querySelector(".btn-box4");
var btn4 = document.querySelector(".radio-group4");
var img4 = document.querySelector(".arrow-img4");

btnDropdown4.addEventListener("click", function(){
    btn4.classList.toggle("radio-group-show");
    img4.classList.toggle("arrow-img-open");
})
var btnDropdown5 = document.querySelector(".btn-box5");
var btn5 = document.querySelector(".radio-group5");
var img5 = document.querySelector(".arrow-img5");

btnDropdown5.addEventListener("click", function(){
    btn5.classList.toggle("radio-group-show");
    img5.classList.toggle("arrow-img-open");
})