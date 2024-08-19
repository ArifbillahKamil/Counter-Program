const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const counter = document.getElementById("labelCounter");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    counter.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    counter.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    counter.textContent = count;
}