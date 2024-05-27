function Submit(){
  // Making variables
  let min = document.getElementById('min').value;
  let max = document.getElementById('max').value;
  // Checking if user entered numbers
  if (min&&max){
    //Checking if min is less than max
    if (Number(min)<Number(max)){
      let currentNumber = Number(min)-1;
      let result = "";
      //looping through each number, and adding it to the result
      while (currentNumber<Number(max)){
        currentNumber +=1
        result += currentNumber + " ";
      }
      //display result
      document.getElementById('Result').innerHTML = result;
    } else{
      //warn user if min is greater than max
      document.getElementById('Result').innerHTML = "Please enter a min number that is less than your max number";
    }
  } else{
    //warn user if they didnt enter 2 valid numbers
    document.getElementById('Result').innerHTML = "Please enter 2 valid numbers";
  }
}