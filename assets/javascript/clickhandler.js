console.log(`Hello there!`)

const colorBox = document.querySelector("#color-box");
const grayButton = document.querySelector("#gray-button");
const blueButton = document.querySelector("#blue-button");
const pinkButton = document.getElementById("pink-button")
const evenOrOddButton = document.querySelector("#even-or-odd-button");
const countspan = document.querySelector("#countspan");
const counterButton = document.querySelector("#counter-button");
let result = document.getElementById("result");

grayButton.addEventListener("click", function () {
    colorBox.className = "gray";
})

blueButton.addEventListener("click", function () {
    colorBox.className = "blue";
})

pinkButton.addEventListener("click", function () {
    colorBox.className = "pink"
})

let count = 0;
counterButton.addEventListener("click", function () {
    count += 1;
    countspan.innerHTML = count
})

evenOrOddButton.addEventListener("click", function () {
    if (count !== 0) {
        if (count % 2 === 0) {
            result.innerHTML = "Even"
        } else {
            result.innerHTML = "Odd"
        }
    }
})