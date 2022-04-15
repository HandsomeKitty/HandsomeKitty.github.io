function game(){
  var x = Math.floor(Math.random()*10)+1;
  var flag = 0;
  for(var i = 1;i < 5;i++){
    var answer = prompt('Please guess the number:');
    if(answer == x){
      alert("Congratulations! You win.");
      flag = 1
      var x = document.getElementById('demo');
      x.style.fonSize = '500px';
      x.style.color = 'red';
      break;
    }else if (answer>x){
      alert("It's too big.");
    }else{
      alert("It's too small");
  }
 }
 if(flag == 0){
    alert('You lose! The right answer is '+ x +'.');
    alert('You can try again!')
 }
}
