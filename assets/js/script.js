let info = document.querySelectorAll(".card");
const infoArray = [...info];
let allButton = document.querySelectorAll("body .card button");
console.log(allButton);

allButton.forEach(e => e.addEventListener("click", function() {
    console.log(e);
}))