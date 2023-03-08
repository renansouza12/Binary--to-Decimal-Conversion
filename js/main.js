const buttons = document.querySelectorAll(".btn");
const show_binary = document.getElementById("binary");
const resultDecimal = document.getElementById("decimal");
const btn_convert = document.querySelector('.convert');
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        var valueBinary =  btn.innerHTML;
        show_binary.innerHTML += valueBinary;
        text_binary = show_binary.value;

        btn_convert.onclick = ()=>{
            const decimalNumber = binaryToDecimal(text_binary);
            resultDecimal.innerHTML = decimalNumber;
        }
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
          
    })
    
})

