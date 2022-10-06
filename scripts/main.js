var lab1 = document.getElementById("lab1");
var lab2 = document.getElementById("lab2");
var lab3 = document.getElementById("lab3");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
// var lab1 = document.getElementById("lab1") ;

var currentLab = 1;

// function changeLab(number) {
let changeLab = (number) => {
    switch (number) {
        case 1:
            currentLab = 1;
            lab1.style.display = "inline";
            lab2.style.display = "none";
            lab3.style.display = "none";

            btn1.className = "worksList__el_active";
            btn2.className = "worksList__el";
            btn3.className = "worksList__el";
            break;
        case 2:
            currentLab = 2;
            lab1.style.display = "none";
            lab2.style.display = "inline";
            lab3.style.display = "none";

            btn1.className = "worksList__el";
            btn2.className = "worksList__el_active";
            btn3.className = "worksList__el";
            break;
        case 3:
            currentLab = 3;
            lab1.style.display = "none";
            lab2.style.display = "none";
            lab3.style.display = "inline";

            btn1.className = "worksList__el";
            btn2.className = "worksList__el";
            btn3.className = "worksList__el_active";
            break;
    }
    // alert(number);
    // console.log("Hahha");
};

changeLab(currentLab);
