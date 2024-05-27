function Submit(){
  let min = document.getElementById('min').value;
  let max = document.getElementById('max').value;
  if (min&&max){
    if (Number(min)<Number(max)){
      let result = "";
      for (let i=Number(min); i<=Number(max); i++){
        result += i + " ";
      }
      document.getElementById('Result').innerHTML = result;
    } else{
      document.getElementById('Result').innerHTML = "Please enter a min number that is less than your max number";
      document.getElementById('Result').innerHTML =min+" "+max
    }
  } else{
    document.getElementById('Result').innerHTML = "Please enter 2 valid numbers";
  }
}