window.addEventListener("load", ()=>{
    function add(first, second){
   
        return first + second;
    }
    function subtract(first, second) {
       return first - second
    }
    
    function divide(first, second) {
           return first / second
    }
    function multiply(first, second) {
       return first * second
    }
    
    let calculate = true
    while (calculate) {
       var num1 = Number(prompt("first number"))
       var symbol = prompt("Arithmetic sign (+ - / *)")
       var num2 = Number(prompt("Input the second number"))
       var result = 0
       
       if (symbol === "+"){
           result = add(num1,num2)
       }
       else if(symbol === "-"){
          result = subtract(num1, num2)
       }
       else if(symbol === "/"){
           result = divide(num1, num2)
       }
       else if(symbol === "*"){
           result = multiply(num1,num2)
       }
    alert(result)
    document.getElementsByTagName("h2")[0].innerHTML = result
       let again = prompt("Do you want to proceed with another calculation? y is for yes /n or anything is no")
       calculate = again === "y"? true:false
    }
    
})
