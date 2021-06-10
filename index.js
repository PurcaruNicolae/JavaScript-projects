let digit7 = document.querySelector('#digit7');
let digit8 = document.querySelector('#digit8');
let digit9 = document.querySelector('#digit9');
let digit0 = document.querySelector('#digit0');
let digit1 = document.querySelector('#digit1');
let digit2 = document.querySelector('#digit2');
let digit3 = document.querySelector('#digit3');
let digit4 = document.querySelector('#digit4');
let digit5 = document.querySelector('#digit5');
let digit6 = document.querySelector('#digit6');
let multiply = document.querySelector('#multiply');
let equal = document.querySelector('#equal');
let result = document.querySelector('#result');
let plus = document.querySelector('#plus');
let substract = document.querySelector('#substract');
let clear = document.querySelector('#clear');
let devide = document.querySelector('#devide');
var firstNumber = '';
var secondNumber = '';
var startBuildingSecondNumber = false;
var operation = '';

function buildNumber(digit){
  if(startBuildingSecondNumber === false){
    firstNumber = firstNumber + digit;
    result.innerHTML = firstNumber;
  }else{
    secondNumber = secondNumber + digit;
    result.innerHTML = secondNumber;
  }
}


function applyOperation(operation){
  if(operation === 'multiply'){
    var operationResult = Number(firstNumber) * Number(secondNumber);
    result.innerHTML = operationResult;
    firstNumber = '';
    secondNumber = '';
    startBuildingSecondNumber = false;
  }if(operation === 'add'){
    var addResult  = Number(firstNumber) + Number(secondNumber);
    result.innerHTML = addResult;
    firstNumber = '';
    secondNumber = '';
    startBuildingSecondNumber = false;
  }if(operation === 'substr'){
    var substrResult  = Number(firstNumber) - Number(secondNumber);
    result.innerHTML = substrResult;
    firstNumber = '';
    secondNumber = '';
    startBuildingSecondNumber = false;
  }if(operation === 'dev'){
    var devResult  = Number(firstNumber) / Number(secondNumber);
    result.innerHTML = devResult;
    firstNumber = '';
    secondNumber = '';
    startBuildingSecondNumber = false;
  }
}



digit7.addEventListener('click',function(){
  buildNumber(7);
});
digit8.addEventListener('click',function(){
  buildNumber(8);
});
digit9.addEventListener('click',function(){
  buildNumber(9);
});
digit0.addEventListener('click',function(){
  buildNumber(0);
});
digit1.addEventListener('click',function(){
  buildNumber(1);
});
digit2.addEventListener('click',function(){
  buildNumber(2);
});
digit3.addEventListener('click',function(){
  buildNumber(3);
});
digit4.addEventListener('click',function(){
  buildNumber(4);
});
digit5.addEventListener('click',function(){
  buildNumber(5);
});
digit6.addEventListener('click',function(){
  buildNumber(6);
});
multiply.addEventListener('click',function(){
  startBuildingSecondNumber = true;
  operation = 'multiply';

});

equal.addEventListener('click', function(){
  applyOperation(operation);

})

plus.addEventListener('click', function(){
  startBuildingSecondNumber = true;
  operation =  'add';
})

substract.addEventListener('click', function(){
  startBuildingSecondNumber = true;
  operation = 'substr';
})

clear.addEventListener('click', function(){
  result.innerHTML = 0;
})

devide.addEventListener('click', function(){
  startBuildingSecondNumber = true;
  operation = 'dev';
})
