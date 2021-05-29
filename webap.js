const toggle = document.getElementById('toggle');
//const container = document.getElementsByClassName('theme-container');

 toggle.checked=false;
function clickHandler(){
    if(this.checked){
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme","dark-theme");
    }else{
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme","light-theme");
    }
}
toggle.addEventListener("click",clickHandler);

window.onload=checkTheme();
function checkTheme(){
    const localStorageTheme = localStorage.getItem("theme");
    if(localStorageTheme !== null && localStorageTheme === "dark-theme"){
        document.body.className=localStorageTheme;

        const themeSwitch=document.getElementById('toggle');
        themeSwitch.checked=true;
    }
}
 
 


//var slideIndex = [1,1];
//var slideId = ["sub-element", "element"]
//showSlides(1, 0);
//showSlides(1, 1);

//function plusSlides(n, no) {
  //showSlides(slideIndex[no] += n, no);
//}

//function showSlides(n, no) {
  //var i;
  //var x = document.getElementsByClassName(slideId[no]);
  //if (n > x.length) {slideIndex[no] = 1}    
  //if (n < 1) {slideIndex[no] = x.length}
  //for (i = 0; i < x.length; i++) {
    //x[i].style.display = "none";  
  //}
  //x[slideIndex[no]-1].style.display = "block";  
//}


let dropdownBtn = document.querySelector('.drop-btn');
let menuContent = document.querySelector('.dropdown-content');
let upIcon = document.querySelector('.up');
let downIcon = document.querySelector('.down');
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
      downIcon.style.display="none";
      upIcon.style.display="inline-block";
   } else {
      menuContent.style.display="";
      downIcon.style.display="inline-block";
      upIcon.style.display="";
   }
})



const carousel = document.querySelector("[data-target='slide']");
const card = carousel.querySelector(".element");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

const slideWidth=carousel.offsetWidth;
const carouselWidth = card.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);
console.log(carouselWidth);
console.log( slideWidth);
console.log(cardMarginRight);

const cardCount = carousel.querySelectorAll(".element").length;
// console.log(cardCount);


let offset = 0;
const maxX = -((cardCount / 4) * carouselWidth +
    (cardMarginRight * (cardCount / 4)) -
    carouselWidth - cardMarginRight );

// console.log(maxX);
const minN = -((carouselWidth + cardMarginRight) * (cardCount / 4) - maxX);
// console.log(minN);


leftButton.addEventListener("click", function() {
    if (offset !== 0) {
        offset += carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    }
})

rightButton.addEventListener("click", function() {
    if (offset > minN) {
        offset -= carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
        // console.log(offset);

    }
})



const subcarousel = document.querySelector("[data-target='sub-slide']");
const subcard = subcarousel.querySelector(".sub-element");
const subleftButton = document.querySelector("[data-action='subslideLeft']");
const subrightButton = document.querySelector("[data-action='subslideRight']");

const subslideWidth=subcarousel.offsetWidth;
const subcarouselWidth = subcard.offsetWidth;
const subcardStyle = subcard.currentStyle || window.getComputedStyle(subcard)
const subcardMarginRight = Number(subcardStyle.marginRight.match(/\d+/g)[0]);
console.log(subcarouselWidth);
console.log( subslideWidth);
console.log(subcardMarginRight);

const subcardCount = subcarousel.querySelectorAll(".sub-element").length;
// console.log(cardCount);


let suboffset = 0;
const submaxX = -((subcardCount / 4) * subcarouselWidth +
    (subcardMarginRight * (subcardCount / 4)) -
    subcarouselWidth - subcardMarginRight );

// console.log(maxX);
const subminN = -((subcarouselWidth + subcardMarginRight) * (subcardCount / 4) - submaxX);
// console.log(minN);


subleftButton.addEventListener("click", function() {
    if (suboffset !== 0) {
        suboffset += subcarouselWidth + subcardMarginRight;
        subcarousel.style.transform = `translateX(${suboffset}px)`;
    }
})

subrightButton.addEventListener("click", function() {
    if (suboffset > subminN) {
        suboffset -= subcarouselWidth + subcardMarginRight;
        subcarousel.style.transform = `translateX(${suboffset}px)`;
        // console.log(offset);

    }
})

const btn=document.querySelectorAll(".addfunction");
//const ele=document.querySelectorAll(".element");
/* const num1=parseInt(document.querySelectorAll(".gblue").innerHTML);
console.log(num1);
const num2=parseInt(document.querySelectorAll(".gred").innerHTML);
console.log(num2); */
let num3=parseInt(document.getElementById("blue").innerHTML);
console.log(num3);
let num4=parseInt(document.getElementById("red").innerHTML);
console.log(num4);
let num1=parseInt(document.querySelector(".gblue").innerHTML);
console.log(num1);
let num2=parseInt(document.querySelector(".gred").innerHTML);

      
for(let i=0;i<btn.length;i++){
    let x=i;
    var Btn=btn[x];
    Btn.addEventListener('click', e=> {
        
        document.getElementById("blue").innerHTML= num1+num3; 
        document.getElementById("red").innerHTML= num2+num4; 
})
};
/* function add(){
    let num1=parseInt(document.getElementById("Element").querySelector(".gblue").innerHTML);
    let num2=parseInt(document.getElementById("Element").querySelector(".gred").innerHTML);

    let num3=parseInt(document.getElementById("blue").innerHTML);
    let num4=parseInt(document.getElementById("red").innerHTML);

    document.getElementById("blue").innerHTML= num1+num3; 
    document.getElementById("red").innerHTML= num2+num4; 
}  */
//function add1(){
    //let num1=parseInt(document.getElementById("g2blue").innerHTML);
    //let num2=parseInt(document.getElementById("g2red").innerHTML);

    //let num3=parseInt(document.getElementById("blue").innerHTML);
    //let num4=parseInt(document.getElementById("red").innerHTML);

    //document.getElementById("blue").innerHTML= num1+num3; 
    //document.getElementById("red").innerHTML= num2+num4; 

//} 


/* $(document).ready(function add(){
    let num1=parseInt(document.getElementById("g2blue").innerHTML);
    let num2=parseInt(document.getElementById("g2red").innerHTML);

    let num3=parseInt(document.getElementById("blue").innerHTML);
    let num4=parseInt(document.getElementById("red").innerHTML);
    
    
    $("button").closest("span",num1).document.getElementById("blue").innerHTML= num1+num3; 
    $("button").closest("span",num1).document.getElementById("red").innerHTML= num2+num4; 
});
 */