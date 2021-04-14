const buttons = document.querySelectorAll('.btn');
const equals = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');
const screen = document.querySelector('.screen');

// since our buttons will be collected into an array, just adding an event 
// listener to the our variable buttons won't work, so we need to loop
// through the array and then add an event listener to it like this;

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', dailToScreen)
    
    function dailToScreen(){
    screen.value += buttons[i].innerHTML

    }
}

clear.addEventListener('click', allClear)

function allClear(){
    screen.value = ''
}

equals.addEventListener('click', evaluate)


function evaluate(){
    if (screen.value === ''){
        alert('Screen is empty')
    }
   else{ 
       // eval() is an inbuilt method that does maths calculations 
       // in javascript
       let value = eval(screen.value);
    screen.value = value;}
}













