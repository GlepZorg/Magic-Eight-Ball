// Variable to store user name
let userName = 'Mike';
// Ternary operator to output a custom greeting.
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');
// User question.
let userQuestion = 'Will I become a software engineer?';
// Output user question.
userName ? console.log(`${userName} asked the following question ${userQuestion}`) : console.log(userQuestion);
// variable that holds random number from 0 to 7;
let randomNumber = Math.floor(Math.random() * 8);
// Holds eight ball response value
let eightBall = '';
// switch statement to help assign the response value of the eight ball.
switch(randomNumber){
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = 'Out of Range!';
        break;
}

console.log(eightBall);