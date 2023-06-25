// function appendToresult(){
//     var result = document.getElementById('result');
//     result.value += value;
// }
// function clearResult(){
//     var result = document.getElementById('result');
//     result.value = '';
// }
// function calculateResult(){
//     var result = document.getElementById('result');
//     var expression = result.value;

// try{
//     var calculatedResult = eval(expression);
//     result.value = calculatedResult;
// }
// catch(error){
//     result.value='Error';
// }
// }

function appendToresult(value) {
    var result = document.getElementById('result');
    result.value += value;
  }
  
  function clearResult() {
    var result = document.getElementById('result');
    result.value = '';
  }
  
  function calculateResult() {
    var result = document.getElementById('result');
    var expression = result.value;
  
    try {
      var calculatedValue = eval(expression);
      result.value = calculatedValue;
    } catch (error) {
      result.value = 'Error';
    }
  }
  