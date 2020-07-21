var userName = "";

userName ? console.log("Hello " + userName + "!") : console.log("Hello!");

// If user has input their name print first statement else print 2nd
const userQuestion = "";
userName ? console.log(userName + " asked the question: " + userQuestion) : console.log("Your question is: " + userQuestion);

// This generates a random number between 0-7 and rounds it down.
const randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

console.log(`The eight ball answered: ${eightBall}`);