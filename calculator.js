const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (a, operator, b) {
 
  if(operator == "+") { add (a, b);}
    else if (operator === "-") subtract (a, b);
      else if (operator === "*") multiply (a, b);
        else if (operator === "/") divide (a, b);
};

// MS 2022/04/22 16:51 => write function that store value of
///operation buttons in a variable 

const displayPlusElement = document.getElementsByClassName("+");
// console.log(display9Element);
const displayPlusArray = Array.from(displayPlusElement);
const displayPlus = displayPlusArray.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "+";
    let displayPlus = "+"
    console.log(displayPlus);
    return "+";
  });
});

const displayMinusElement = document.getElementsByClassName("-");
// console.log(display9Element);
const displayMinusArray = Array.from(displayMinusElement);
const displayMinus = displayMinusArray.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "-";
    let displayMinus = "-"
    console.log(displayMinus);
    return "-";
  });
});

const displayMultipliedByElement = document.getElementsByClassName("*");
// console.log(display9Element);
const displayMultipliedByArray = Array.from(displayMultipliedByElement);
const displayMultipliedBy = displayMultipliedByArray.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "*";
    let displayMultipliedBy = "*"
    console.log(displayMultipliedBy);
    return "*";
  });
});

const displayDividedByElement = document.getElementsByClassName("/");
// console.log(display9Element);
const displayDividedByArray = Array.from(displayDividedByElement);
const displayDividedBy = displayDividedByArray.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "/";
    let displayDividedBy = "/"
    console.log(displayDividedBy);
    return "/";
  });
});

const displayAllClearElement = document.getElementsByClassName("AC");
// console.log(display9Element);
const displayAllClearArray = Array.from(displayAllClearElement);
const displayAllClear = displayAllClearArray.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = " ";
    let displayAllClear = "/"
    console.log(displayAllClear);
    return " ";
  });
});

const displaySignChangeElement = document.getElementsByClassName("+/-");
// console.log(display9Element);
const displaySignChangeArray = Array.from(displaySignChangeElement);
const displaySignChange = displaySignChangeArray.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "+/-";
    ///document.getElementById("displayDiv").textContent.appendChild("+/-");
    //// MS 2022/04/22 18:16 => write proper code for this ^^^^^.
    ////////////
    ////////////
    let displaySignChange = "+/-"
    console.log(displaySignChange);
    return "+/-";
  });
});

const displayPercentageElement = document.getElementsByClassName("%");
// console.log(display9Element);
const displayPercentageArray = Array.from(displayPercentageElement);
const displayPercentage = displayPercentageArray.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "%";
    let displayPercentage = "%"
    console.log(displayPercentage);
    return "%";
  });
});

const displayDotElement = document.getElementsByClassName(".");
// console.log(display9Element);
const displayDotArray = Array.from(displayDotElement);
const displayDot = displayDotArray.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = ".";
    let displayDot = "."
    console.log(displayDot);
    return ".";
  });
});

const displayEqualsElement = document.getElementsByClassName("=");
// console.log(display9Element);
const displayEqualsArray = Array.from(displayEqualsElement);
const displayEquals = displayEqualsArray.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "=";
    let displayEquals = "="
    console.log(displayEquals);
    return "=";
  });
});
// MS 2022/04/21 14:43 => write operate function that works.
// i.e. write operate function which can be called to take an operator
// and 2 numbers and call one of the operation functions
// on those numbers

// const numbersButtons = document.getElementsByClassName("numbersDivs");
// const numbersButtonsArray = Array.from(numbersButtons);
// const changeNumbersButtonsColors = numbersButtonsArray.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.style.color = "red";
//   });
// });
/////////////////////////////////////////////////////////////////////
// MS 2022/04/17 11:05 - reconsider/express in plain english
// your goal with this part of code
/////////////////////////////////////////////////////////////////////

// MS 2022/04/17 20:10 goal: set user click of a number button
// to change textContent of digitsDisplayDiv to the value of
// the number on the clicked button.
// MS 2022/04/18 10:56 [...] with one function.
// const displayNumbers = numbersButtonsArray.forEach((item) => {
//   item.addEventListener("click", () => {
    
//    const x = document.getElementById("displayDiv").textContent = document.getElementsByClassName("numbers").textContent;
//    const y = document.getElementById("displayDiv").textContent;
//    console.log(item);
//     //console.log(parseInt(document.getElementsByClassName("numbersButtons").textContent));
//     //console.log(document.getElementById("displayDiv").textContent);
//     console.log(x);
//     console.log(y);
//     //return item;
//    // console.log(displayDiv.textContent);
//     // displayDiv.textContent = "7";
//     // const displayDivArray = Array.from(displayDiv);
//     // displayDivArray.textContent.style.color = "red";
//   });
// });

// // MS 2022/04/18 09:17 - goal: set user click of the "9" button
// // to change textContent of digitsDisplayDiv to "9".
// const displayButtonsValue

const display9Element = document.getElementsByClassName("9");
// console.log(display9Element);
const display9Array = Array.from(display9Element);
const display9 = display9Array.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "9";
    let display9 = "9"
    console.log(display9);
    return "9";
  });
});


// // MS 2022/04/19 09:31 - goal: set user click of the "8" button
// // to change textContent of digitsDisplayDiv to "8".

const display8Element = document.getElementsByClassName("8");
// console.log(display8Element);
const display8Array = Array.from(display8Element);
const display8 = display8Array.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "8";
  });
});

// MS 2022/04/19 09:32 - goal: set user click of the "X number" button
// to change textContent of digitsDisplayDiv to "X number".


const display7Element = document.getElementsByClassName("7");
// console.log(display7Element);
const display7Array = Array.from(display7Element);
const display7 = display7Array.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "7";
  });
});

const display6Element = document.getElementsByClassName("6");
// console.log(display6Element);
const display6Array = Array.from(display6Element);
const display6 = display6Array.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "6";
  });
});



// const numbersButtons = document.getElementsByClassName("numbersButtons");
// const numbersButtonsArray = Array.from(numbersButtons);
// function displayButtonsValue () { numbersButtonsArray.forEach((item) => {
//   item.addEventListener("click", () => {
//     let Button6 = document.getElementsByClassName("6");
//     let numberOfButton6 = Button6.textContent;
//     console.log(numberOfButton6);
//     let numberOfButton6 = document.getElementById("6");
//     numberOfButton6 = numberOfButton6.textContent;
//     //console.log(numberOfButton6);
//     return item; // MS 2022/04/19 here trying to figure out
//     a or the method to store numberOfButton6 into displayValue

//     if (item = numberOfButton6)
//     document.getElementById("displayDiv").textContent = numberOfButton6;
//     document.getElementById("displayDiv").textContent = numberOfButton6;
//     console.log(numberOfButton6);
//     return;
    
//   });
// });

// };


const button5 = document.getElementsByClassName("5");
const button5Array = Array.from(button5);
const display5 = button5Array.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "5";
  });
});

const display4Element = document.getElementsByClassName("4");
// console.log(display4Element);
const display4Array = Array.from(display4Element);
const display4 = display4Array.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "4";
  });
});

const display3Element = document.getElementsByClassName("3");
// console.log(display3Element);
const display3Array = Array.from(display3Element);
const display3 = display3Array.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "3";
  });
});

const display2Element = document.getElementsByClassName("2");
// console.log(display2Element);
const display2Array = Array.from(display2Element);
const display2 = display2Array.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "2";
  });
});

const display1Element = document.getElementsByClassName("1");
// console.log(display1Element);
const display1Array = Array.from(display1Element);
const display1 = display1Array.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "1";
  });
});

const display0Element = document.getElementsByClassName("0");
// console.log(display0Element);
const display0Array = Array.from(display0Element);
const display0 = display0Array.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("displayDiv").textContent = "0";
    return 0;
  });
});
// MS 2022/04/19 10:50 - goal: set change of
// document.getElementById("displayDiv").textContent to change
// displayValue value.


/////////////////////////////////////////////////////////////////////


// MS 2022/04/17 20:10 goal: set user click of a number button
// to change the value of the return result of the current equation
// function operate()


// const displayValue = 
// const displayDiv = document.getElementsByClassName("displayDiv");
// const displayDivTextContent = displayDiv.textContent;
// const subGrid1Numbers = document.getElementsByClassName("subGrid1Numbers");
// const subGrid1NumbersArray = Array.from(subGrid1Numbers);
// const subGridNumbersValue = subGrid1NumbersArray.forEach((item) => {
//   item.addEventListener("click", () => {
//     // const 
//     // displayDivTextContent = ;
//   })
// });






//displayValue = btn











/*
function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#menu
const menu = document.querySelector('#menu');
// add menu item
menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us'));
*/
/////////////////////////////////////////
/* function createDiv(namenumber1) {
    let div = document.createElement("div");
    div.textcontent = namenumber1;
    div.style.width = "37.5px";
    div.style.height = "37.5px";
    div.style.background = "red";
    div.style.color = "white";
    div.style.border = "groove";
    div.classList = "256"; 
    div.appendChild( document.createTextNode("Hello"));
    return div;
}

const container = document.querySelector('#container');
for (var i = 0; i < 256; i++) { 
    container.appendChild(createDiv("div"));
}


document.querySelector("div").addEventListener(
  "mouseover", function () {
        
  document.querySelector("div").style.background = "blue";
  console.log("mouseover");
})

document.querySelector("div").addEventListener(
  "mouseout", function () {
        
  document.querySelector("div").style.background = "green";
  console.log("mouseout");
}) */

///////////////
/*
document.querySelectorAll(".256").forEach(item => { 
  item.addEventListener("mouseover", function () {
    document.querySelectorAll(".256").forEach(item => { 
      item.style.background = "blue";})
    })
*/
//////////////////////////////////////

/* const the256divs = Array.from(document.getElementsByClassName("256"));

the256divs.forEach(addEventListener:)

.addEventListener(
  "mouseover", function () {
        
  document.getElementsByClassName("256").style.background = "blue";
  console.log("mouseover");
})
 */
///////////////////////////////////////
// math randomization code for random color selection: color[Math.floor(Math.random() * color.length)]  //
/*

var dynamicdivs = document.getElementsByTagName("div");

Array.from(dynamicdivs);

console.log(dynamicdivs);

dynamicdivs[1].style.background = "blue";
*/
/*
dynamicdivs.slice(1, 5).addEventListener("mouseover", event => {
  console.log("Mouse in");

});

dynamicdivs.slice(1, 5).addEventListener("mouseout", event => {
  console.log("Mouse out");
});
*/
