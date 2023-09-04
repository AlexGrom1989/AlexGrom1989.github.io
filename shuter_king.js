/*let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
    }
});



Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);*/

let tg = window.Telegram.WebApp;

let menu = document.getElementsByClassName("inner");
let caption = document.getElementsByClassName("caption");

let quest_buttons = document.getElementsByClassName("ask");
for (var i = 0; i < quest_buttons.length; i++) {
    quest_buttons[i].addEventListener("click", function () {
        menu[0].style.display = "none";
        caption[0].style.display = "block";
    });
}

let capt_exit_buttons = document.getElementsByClassName("capt_exit");
for (var i = 0; i < capt_exit_buttons.length; i++) {
    capt_exit_buttons[i].addEventListener("click", function () {
        menu[0].style.display = "grid";
        caption[0].style.display = "none";
    });
}

/*
let usercard = GEBI("print");
let p = document.createElement("p");
p.innerText = quest_buttons[0]
usercard.appendChild(p);
*/
