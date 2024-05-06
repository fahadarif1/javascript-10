// function massage (num , num2){
//     if(num%2 ==0){
//    return 'true'     
// }else{
//     return 'falsse'
// }
// }

// var text = masssage (7 , 10)
// console. log(text);


// '''''''''''''''''''''''''''''''''''''''''''''''''''''


// function addNumber(num1, num2=10) {
//     let sum = num1 + num2;
//     return(`sum: ${sum}`);
// }
// console.log(addNumber(5,20));
// console.log(addNumber(10, 30));

// '''''''''''''''''''''''''''''''''''''''''''''''''''''

// for (let year = 2024; year <= 2050; year++) {
//     if(year % 4=== 0){
//       console.log(year,'is a leap year');
//     }
//   }

// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// let day;
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }


// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// let trafficLight = "green";
// let message = ""
 
// switch (trafficLight) {
//     case "red":
//         message = "Stop immediately.";
//         break;
//     case "yellow":
//         message = "Prepare to stop.";
//         break;
//     case "green":
//         message = "Proceed or continue driving.";
//         break;
//     default:
//         message = "Invalid traffic light color.";
// }
 
// console.log(message)
 
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


// let day = 1 

// let activity;

// switch (day) {

//     case 1:
//         console.log("Sunday");
//         break;

//     case 2:
//         console.log("Monday");
//         break;

//     case 3:
//         console.log("Tuesday");
//         break;

//     case 4:
//         console.log("Wednesday");
//         break;

//     case 5:
//         console.log("Thursday");
//         break;

//     case 6:
//         console.log("Friday");
//         break;

//     case 7:
//         console.log("Saturday");
//         break;

//     default:
//         console.log("Invalid Day");
// }


////////////////////////////////////////////////////////////////////


// // take user input for two numbers
// let number1 = Number(prompt("Enter the value of number1: "));
// let number2 = Number(prompt("Enter the value of number2: "));

// // take user input to select an operator 
// const operator = prompt("Enter a operator ( either +, -, * or / ): ");

// switch(operator) {

//     case "+":
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case "-":
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case "*":
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case "/":
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log("Invalid operator");
// }


/////////////////////////////////////////////////////////////





// function increment(){
//     date++;
//     document.getElementById('a').innerText = date
// }
// function decrement(){
//     date--;
//     document.getElementById('a').innerText = date
// }
// function reset (){
//     date = 0;
//     document.getElementById('a').innerText = date
// }










  let count = 0;

  function increment() {
    count++;
    document.getElementById("count").textContent = count;
  }

  function decrement() {
    count--;
    document.getElementById("count").textContent = count;
  }

  function reset() {
    count = 0;
    document.getElementById("count").textContent = count;
  }
