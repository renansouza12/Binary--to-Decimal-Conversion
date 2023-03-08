const buttons = document.querySelectorAll(".btn");
const binary = document.getElementById("binary");
const decimal = document.getElementById("decimal")
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        binary.innerHTML += btn.innerHTML;
    })
})