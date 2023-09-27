// import * as readline from 'node:readlin';

const readline = require('readline');

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout
});

let answers = [];

rl.question("What's your name? ", (answer1) => {
  answers.push(answer1); // edited the call from console.log to a function push

  rl.question("What's an activity you like doing? ", (answer2) => {
    answers.push(answer2);
    
    rl.question("What do you listen to while doing that activity? ", (answer3) => {
      answers.push(answer3);
      
      rl.question("Which meal is your favourite? (eg: dinner, brunch, midnight snack, etc.) ", (answer4) => {
        answers.push(answer4);
        
        rl.question("What's your favourite thing to eat for that particular meal? ", (answer5) => {
          answers.push(answer5);
          
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            answers.push(answer6);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              answers.push(answer7);
              
              rl.close();

              const sumPara = `${answer1}, loves to listen to ${answer3} while they are ${answer2}.\n${answer1} also loves consuming ${answer5} for ${answer4}.\nThey believe ${answer6} is the superior sport. Most importantly, they are ${answer7}.` 
              console.log(sumPara);
            });
          });
        });
      });
    });
  });
});


  

