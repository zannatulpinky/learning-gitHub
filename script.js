// var myBtn1 = document.getElementById("btn1");
// var myBtn2 = document.getElementById("btn2");
var myLight = document.getElementById("light");
const toggleBtn = document.getElementById('toggle');
var changeSentence = document.getElementsByTagName("h1")[0];

let lightState = 'off';

// function myFunction1() {
//     myLight.src="lightOn.jpg";
//     changeSentence.innerHTML = "Off the light";
//     changeSentence.setAttribute("style","color:red");
// }

// function myFunction2() {
//     myLight.src="lightOff.jpg";
//     changeSentence.innerHTML = "On the light";
//     changeSentence.setAttribute("style","color:blue");
// }

// myBtn1.addEventListener("click",myFunction1);
// myBtn2.addEventListener("click",myFunction2);

function turnOn(){
    myLight.src="lightOff.jpg";
    changeSentence.innerHTML = "On the light";
    changeSentence.setAttribute("style","color:blue")
}

function turnOff() {
    myLight.src="lightOn.jpg";
    changeSentence.innerHTML = "Off the light";
    changeSentence.setAttribute("style","color:red")
}

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