// assertion test
function assertEqual(actual, expected, testName) {
   if (actual === expected) {
     console.log('passed');
   } else {
     console.log('FAILED ' + testName + ': Expected ' + expected + ', but got ' + actual);
  }
 }
///////
object to array part 3;
var resultArr = [];

  for(var prop in obj) {
    var tupleArr = [];
    tupleArr[0] = prop;
    tupleArr[1] = obj[prop];

    resultArr.push(tupleArr);
  }
  return resultArr;



array to obkect part 3;

var ourArray = []

 for (var i=0; i<array.length; i++) {
   var ourObj = {};
   for (var j=0; j<array[i].length; j++) {
     property= array[i][j];
     var propName = property[0]
     var propValue = property[1]

     ourObj[propName] = propValue;
   }
   ourArray.push(ourObj);
 }
 return ourArray;



Array to Object part 2:
 return array.reduce(function(c, v) {
    c[v[0]] = v[1];
    return c;
  }, {});

  vs.

  var ourObj ={}
  for(i=0; i<array.length; i++) {
    for(k=0; k<array[i].length; k++) {
      ourObj[array[i][0]] = array[i][1] (or array[i][k])
    }
  }
  return ourObj;


Object to Array part 2:
  var allValues = Object.values(obj);
    return allValues

  vs

  var allValues = []
  for(var values in obj) {
    allValues.push(obj[values])
  }

  return allValues;


///////

// start tells the program when to replace the number or when to append it
var start = true;
// points tells if there is already a decimal point in the number
var points = true;
// sign tells if there is already a maths sign
var sign = false;
var mainScreen = document.getElementById('screen');

// all button get elements
var add = document.getElementById('sum').addEventListener('click', addition);
var subtracts = document.getElementById('sub').addEventListener('click', subtraction);
var multiplies = document.getElementById('multi').addEventListener('click', multiplication);
var divides = document.getElementById('divides').addEventListener('click', division);
var ce = document.getElementById('resets').addEventListener('click', reset);
var on = document.getElementById('reset').addEventListener('click', reset);


var uno = document.getElementById('one').addEventListener('click', one);
var dos = document.getElementById('two').addEventListener('click', two);
var tres = document.getElementById('three').addEventListener('click', three);
var cuatro = document.getElementById('four').addEventListener('click', four);
var cinco = document.getElementById('five').addEventListener('click', five);
var seis = document.getElementById('six').addEventListener('click', six);
var siete = document.getElementById('seven').addEventListener('click', seven);
var ocho = document.getElementById('eight').addEventListener('click', eight);
var nueve = document.getElementById('nine').addEventListener('click', nine);
var cero = document.getElementById('zero').addEventListener('click', zero);
var decimal = document.getElementById('point').addEventListener('click', point);
var equal = document.getElementById('equals').addEventListener('click', equals);

// total keeps count when in string form, content gets displayed at equals
var total = '';
var content = '';
// main function displaying on the screen
function totalString(n) {
if(total.length < 10) {
  if (start == false) {
      total = String(n);
      console.log("total added");
      console.log(total);
      document.getElementById("screen").innerHTML = total;
      start = true;
      sign = true;
  } else {
      total += n;
      console.log("total added");
      console.log(total);
      document.getElementById("screen").innerHTML = total;
      sign = true;
  }
}
}
// button functions
function one() {
  totalString(1);
}
function two() {
  totalString(2);
}
function three() {
  totalString(3);
}
function four() {
  totalString(4);
}
function five() {
  totalString(5);
}
function six() {
  totalString(6);
}
function seven() {
  totalString(7);
}
function eight() {
  totalString(8);
}
function nine() {
  totalString(9);
}
function zero() {
  if (total !== '') {
    totalString(0);
  }
}
function point() {
  if (points === true) {
    totalString('.');
    points = false;
    console.log(total);
  }
}
function equals() {
  if (sign == true) {
content = eval(total);
total = String(content);
  console.log(content);
  start = false;
  points = true;
  document.getElementById("screen").innerHTML = content;
}

}

function addition() {
  if (sign == true) {
  console.log("addition");
  total += ' + ';
  start = true;
  points = true;
  sign = false;
  document.getElementById("screen").innerHTML = total;
}
}
function subtraction() {
  if (sign == true) {
  console.log("subtraction");
  total += ' - ';
  start = true;
  points = true;
  sign = false;
  document.getElementById("screen").innerHTML = total;
}
}
function multiplication() {
  if (sign == true) {
  console.log("multiplication");
  total += ' * ';
  start = true;
  points = true;
  sign = false;
  document.getElementById("screen").innerHTML = total;
}
}
function division() {
  if (sign == true){
  console.log("division");
  total += ' / ';
  start = true;
  points = true;
  sign = false;
  document.getElementById("screen").innerHTML = total;
}
}
function reset() {
  console.log("reset to 0");
  total = '';
  points = true;
  sign = false;
  document.getElementById("screen").innerHTML = 0;
}
