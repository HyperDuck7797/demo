let clicks = 0;
let clickText = clicks+' Clicks';
let clickElement = document.getElementById("numClicks");
let clickButton = document.getElementById("click");

clickElement.textContent = clickText;

clickButton.onclick = function(){
    clicks += 1;
    clickText = clicks+' Clicks';
    clickElement.textContent = clickText;
}