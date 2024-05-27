function Submit(){
  // Making variables
  let min = document.getElementById('min').value;
  let max = document.getElementById('max').value;
  // Checking if user entered numbers
  if (min&&max){
    //Checking if min is less than max
    if (Number(min)<Number(max)){
      let result = "";
      //looping through each number, and adding it to the result
      for (let i=Number(min); i<=Number(max); i++){
        result += i + " ";
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