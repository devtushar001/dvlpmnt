const randomNumber = Math.floor(Math.random() * 10);

let count = 3;



const guess = () => {
  count--;
  if (count < 0) {
    return;
  } else {
    const userNumber = Number(document.getElementById("number").value);
   
    if (randomNumber === userNumber) {
      alert("Congrats you guess the correct number");
      window.location.reload();
    } else if (userNumber < randomNumber) {
      alert("Guess the higher number");
    } else {
      alert("Guess the lower number");
    }
  }
  document.getElementById('count').innerHTML = count;
}

