var text = document.getElementById("change");
var buttonChangeY = document.getElementById("yellow");
var buttonChangeB = document.getElementById("black");
buttonChangeY.addEventListener("click", changeColorY);
buttonChangeB.addEventListener("click", changeColorB);
function changeColorY() {
    text.style.color = "yellow";
}
function changeColorB() {
    text.style.color = "black";
}