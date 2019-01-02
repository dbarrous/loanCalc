
let form = document.querySelector('#form');


function calculate(e) {
    console.log("Calculating...");
    e.preventDefault();
}

//Load Event Listeners
function LoadEventListeners() {
    form.addEventListener('click', calculate);
}


//Load
LoadEventListeners();





