// var myBtn1 = document.getElementById("btn1");
// var myBtn2 = document.getElementById("btn2");
var lightImage = document.getElementById("light");
const toggleBtn = document.getElementById('toggle');
var changeHeadline = document.getElementsByTagName("h1")[0];
let lightState = 'off';

function turnOn(){
    lightImage.src="lightOff.jpg";
    changeHeadline.innerHTML = "On the light";
    changeSentence.setAttribute("style","color:blue")
}

function turnOff() {
    lightImage.src="lightOn.jpg";
    changeHeadline.innerHTML = "Off the light";
    changeSentence.setAttribute("style","color:red")
}

// myBtn1.addEventListener("click",turnOn);
// myBtn2.addEventListener("click",turnOff);

function toggleLight() {
    if(lightState === 'on') {
        lightState = 'off';
        turnOff()
    } else {
        lightState = 'on';
        turnOn()
    }
}

toggleBtn.addEventListener("click", toggleLight);