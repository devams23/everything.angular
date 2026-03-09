// Global scope variable
const globalVar = "I am global";

function outerFunction() {
  // outerFunction scope variable
  const outerVar = "I am in outer!";

  function innerFunction() {
    // innerFunction scope variable
    const innerVar = "I am in inner!";
    
    console.log(globalVar); // Accessible: "I am global"
    console.log(outerVar);  // Accessible: "I am in outer!"
    console.log(innerVar);  // Accessible: "I am in inner!"
  }

  innerFunction();
  //console.log(innerVar); // ReferenceError: innerVar is not defined (cannot access inner scope)
}

outerFunction();
//console.log(outerVar); // ReferenceError: outerVar is not defined (cannot access function scope from global)
