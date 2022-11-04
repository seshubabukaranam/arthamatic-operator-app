var inputNumber1 = document.querySelector("#input-number1");
var inputNumber2 = document.querySelector("#input-number2");
var btnAddition = document.querySelector("#btn-addition");
var btnSubtraction = document.querySelector("#btn-subtraction");
var btnMultiplication = document.querySelector("#btn-multiplication");
var btnDivision = document.querySelector("#btn-division");
var btnModulus = document.querySelector("#btn-modulus");
var outputMessage = document.querySelector("#output-message");


function addOperator()
{
    var x = Number(inputNumber1.value);
    var y = Number(inputNumber2.value);
  if (x && y)
  {
    var sum = (x+y) ;
    outputMessage.innerText = 'The Sum of '+ x +"+"+ y +"="+ sum;
  }
   else emptyFields();
}

function subractorOperator()
{
    var x = Number(inputNumber1.value);
    var y = Number(inputNumber2.value);
  if (x && y)
  {
    var subtraction = (x - y) ;
    outputMessage.innerText = 'The Subtraction of '+ x +"-"+ y +"="+ subtraction;
  }
   else emptyFields();

}
function multiplicationOperator()
{
    var x = Number(inputNumber1.value);
    var y = Number(inputNumber2.value);
  if (x && y)
  {
    var multiplication = (x * y) ;
    outputMessage.innerText = 'The Multiplication of '+ x +"*"+ y +"="+ multiplication;
  }
   else emptyFields();
   
}
function divisionOperator()
{
    var x = Number(inputNumber1.value);
    var y = Number(inputNumber2.value);
  if (x && y)
  {
    var division = (x / y) ;
    outputMessage.innerText = 'The Division of '+ x +"/"+ y +"="+ division;
  }
   else emptyFields();
}
function modulusOperator()
{
    var x = Number(inputNumber1.value);
    var y = Number(inputNumber2.value);
  if (x && y)
  {
    var modulus = (x % y) ;
    outputMessage.innerText = 'The Modulus of '+ x +"%"+ y +"="+ modulus;
  }
   else emptyFields();

}

function emptyFields()
{
    outputMessage.innerText = "The Above Fileds Must not be Empty"; 
}

btnAddition.addEventListener("click", addOperator);
btnSubtraction.addEventListener("click", subractorOperator);
btnMultiplication.addEventListener("click", multiplicationOperator);
btnDivision.addEventListener("click", divisionOperator);
btnModulus.addEventListener("click", modulusOperator)