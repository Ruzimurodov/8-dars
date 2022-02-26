var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elButton = document.querySelector(".form__button");
var elResult1 = document.querySelector(".form__span-first");
var elResult2 = document.querySelector(".form__span-second");
var elResult3 = document.querySelector(".form__span-three");
var elResult4 = document.querySelector(".form__span-four");
var onFoot = 3.6;
var bicycle = 20.1;
var car = 70;
var airplane = 800;

function distance(result) {
    var elInputVal = elInput.value;
    return elInputVal / result
}

elForm.addEventListener("submit", function(e){
    e.preventDefault()

    elResult1.textContent = (distance(onFoot).toFixed(2)) + " soat"
})

elForm.addEventListener("submit", function(e){
    e.preventDefault()

    elResult2.textContent = (distance(bicycle).toFixed(2)) + " soat"
})
elForm.addEventListener("submit", function(e){
    e.preventDefault()

    elResult3.textContent = (distance(car).toFixed(2)) + " soat"
})
elForm.addEventListener("submit", function(e){
    e.preventDefault()

    elResult4.textContent = (distance(airplane).toFixed(2)) + " soat"
})