const randomNum = Math.round(Math.random() * 10);
console.log(randomNum);
let user;
let count = 0;
const test = () => {
  if (user === randomNum) {
    alert(`you have guessed right in ${count} times`);
  } else if (user > randomNum) {
    alert("your guess is higher");
  } else if (user < randomNum) {
    alert("your guess is lower");
  } else {
    alert("its not a number");
  }
};

do {
  user = prompt("Guess the number");
  user = Number.parseInt(user);
  test();
  count++;
} while (user !== randomNum);
