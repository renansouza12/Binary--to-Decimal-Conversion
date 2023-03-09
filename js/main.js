const buttons = document.querySelectorAll(".btn");
const show_binary = document.getElementById("binary");
const resultDecimal = document.getElementById("decimal");
const btn_delete = document.querySelector(".delete");


buttons.forEach((btn) => {// add click for buttons with class btn
  btn.addEventListener("click", () => {
    show_binary.value += btn.innerHTML;

    //convert binary to decimal and display result
    const decimalNumber = binaryToDecimal(show_binary.value);
    resultDecimal.innerHTML = decimalNumber;

  })
})
//click event added to backspace icon
btn_delete.addEventListener('click',()=>{
  backspace(show_binary.value);

 //convert binary to decimal and display result
  const decimalNumber = binaryToDecimal(show_binary.value);
    resultDecimal.innerHTML = decimalNumber;
})

//functio to remove last character from textarea element
function backspace(){
  show_binary.value = show_binary.value.slice(0, -1)
}

//function to convert binary to decimal
function binaryToDecimal(valueBinary) {
  let decimal = 0;
  let base = 1;

  while (valueBinary !== 0) {
    let lastDigit = valueBinary % 10;
    valueBinary = Math.floor(valueBinary / 10);
    decimal += lastDigit * base;
    base *= 2;
  }

  return decimal;
}


