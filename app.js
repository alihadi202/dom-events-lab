/*-------------------------------- Constants --------------------------------*/
const numberes = document.querySelectorAll(".button.number");
const operatores = document.querySelectorAll(".button.operator");
const equals = document.querySelector(".button.equals");

const screen = document.querySelector(".display");
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
numberes.forEach(number=>{number.addEventListener('click' , Display)});
operatores.forEach(operator=>{operator.addEventListener('click' , Display)});
equals.addEventListener('click' , Display);

/*-------------------------------- Functions --------------------------------*/
function Display(event){
    
    console.log(event.target);
    const buttonText = event.target.innerText;

    if (buttonText === "="){
        try {
            const result = eval(screen.textContent);
            screen.textContent = result;
        }catch (error) {
            screen.textContent = "ERROR";
        }

    }else if (buttonText==="C"){
        screen.textContent= "";
    }else{
        console.log(buttonText);
        screen.textContent += buttonText;
    }
}