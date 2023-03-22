let screenValue = document.getElementById("screen-value");

//render first digit
let value1 ;
let operator;
let value2;
let results;

console.log(screenValue.value)

let numBer1 = document.getElementById("number-1")

numBer1.addEventListener("click", function(){

     
  if (screenValue.value === operator ){
    screenValue.value = ""
    screenValue.value += 1
    value2 = screenValue.value
    console.log(value2)
  }
   
  else if(screenValue.value != operator){
    screenValue.value += 1
    value2 = screenValue.value
    console.log(value2)
  } 
  
})



let numBer2 = document.getElementById("number-2")

numBer2.addEventListener("click", function(){
 
  if (screenValue.value === operator){
    screenValue.value = ""
    screenValue.value += 2
    value2 = screenValue.value
    console.log(value2)
  }
  else if(screenValue.value != operator ){

    screenValue.value += 2
    value2 = screenValue.value
    console.log(value2)
  }  
})

let numBer3 = document.getElementById("number-3")

numBer3.addEventListener("click", function(){
 
  
  if (screenValue.value === operator){
    screenValue.value = ""
    screenValue.value += 3
    value2 = screenValue.value
    console.log(value2)
  }
  else if(screenValue.value != operator ){

    screenValue.value += 3
    value2 = screenValue.value
    console.log(value2)
  } 
  
})

let numBer4 = document.getElementById("number-4")

numBer4.addEventListener("click", function(){
 
  
  if (screenValue.value === operator){
    screenValue.value = ""
    screenValue.value += 4
    value2 = screenValue.value
    console.log(value2)
  }
  else if(screenValue.value != operator ){

    screenValue.value += 4
    value2 = screenValue.value
    console.log(value2)
  } 
  
})

let numBer5 = document.getElementById("number-5")

numBer5.addEventListener("click", function(){
 
  
  if (screenValue.value === operator){
    screenValue.value = ""
    screenValue.value += 5
    value2 = screenValue.value
    console.log(value2)
  }
  else if(screenValue.value != operator ){

    screenValue.value += 5
    value2 = screenValue.value
    console.log(value2)
  } 
  
})

let numBer6 = document.getElementById("number-6")

numBer6.addEventListener("click", function(){
 
  
  if (screenValue.value === operator){
    screenValue.value = ""
    screenValue.value += 6
    value2 = screenValue.value
    console.log(value2)
  }
  else if(screenValue.value != operator ){

    screenValue.value += 6
    value2 = screenValue.value
    console.log(value2)
  } 
  
})

let numBer7 = document.getElementById("number-7")

numBer7.addEventListener("click", function(){
 
  
  if (screenValue.value === operator){
    screenValue.value = ""
    screenValue.value += 7
    value2 = screenValue.value
    console.log(value2)
  }
  else if(screenValue.value != operator ){

    screenValue.value += 7
    value2 = screenValue.value
    console.log(value2)
  } 
  
})

let numBer8 = document.getElementById("number-8")

numBer8.addEventListener("click", function(){
 
  
  if (screenValue.value === operator){
    screenValue.value = ""
    screenValue.value += 8
    value2 = screenValue.value
    console.log(value2)
  }
  else if(screenValue.value != operator ){

    screenValue.value += 8
    value2 = screenValue.value
    console.log(value2)
  } 
  
})

let numBer9 = document.getElementById("number-9")

numBer9.addEventListener("click", function(){
 
  
  if (screenValue.value === operator){
    screenValue.value = ""
    screenValue.value += 9
    value2 = screenValue.value
    console.log(value2)
  }
  else if(screenValue.value != operator ){

    screenValue.value += 9
    value2 = screenValue.value
    console.log(value2)
  } 
  
})

//operator functionality
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click",function(){
  value1 = screenValue.value
  console.log("is everthing ok", value1)
  operator = addBtn.textContent
  screenValue.value = operator
})

let subtractBtn = document.getElementById("subtract-btn");
subtractBtn.addEventListener("click",function(){
  value1 = screenValue.value
  operator = subtractBtn.textContent
  screenValue.value = operator
})

let multiplyBtn = document.getElementById("multiply-btn");
multiplyBtn.addEventListener("click",function(){
  value1 = screenValue.value
  operator = multiplyBtn.textContent
  screenValue.value = operator
})

let divideBtn = document.getElementById("divide-btn");
divideBtn.addEventListener("click",function(){
  value1 = screenValue.value
  operator = divideBtn.textContent
  screenValue.value = operator
  console.log("its minus")

})

//result button functionality 
let resultBtn = document.getElementById("result-btn");
resultBtn.addEventListener("click",function(){
    if (operator === "+"){
      results = value1 + value2
      screenValue.value = ""
      screenValue.value = results
            
    }
    else if(operator === "-"){
      results = value1 - value2
      screenValue.value = ""
      screenValue.value = results

    }
    else if(operator === "x"){
      results = value1 * value2
      screenValue.value = ""
      screenValue.value = results

    }
    else if(operator === "/"){
      results = value1 / value2
      screenValue.value = ""
      screenValue.value = results

    }
    

})
