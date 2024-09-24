
var loadText = document.querySelector(".loading-text");
var bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(function() {

    load++;

    if(load > 99) {
        clearInterval(int);
    }

    loadText.innerHTML = load + "%";
    loadText.style.opacity = 1 - (load / 100);

    // Reduce blur as the load increases
    let blurValue = 30 - (load * 30 / 100);
    bg.style.filter = "blur(" + blurValue + "px)";
}, 30);