// import * as readline from 'node:readlin';

const readline = require('readline');

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout
});

// What's your name? Do you have a nickname?
rl.question("What's your name? Do you have a nickname? ", (answer1) => {
  console.log(`Your answer was: ${answer1}`);
  
  // What's an activity you like doing?
  rl.question("What's an activity you like doing? ", (answer2) => {
    console.log(`Your answer was: ${answer2}`);
    
    // What do you listen to while doing that (activity)?
    rl.question("What do you listen to while doing that activity?", (answer3) => {
      console.log(`Your answer was: ${answer3}`);
      
      // Which meal is your favourite (eg: dinner, brunch, midnight snack, etc.)
      rl.question("Which meal is your favourite? (eg: dinner, brunch, midnight snack, etc.)", (answer4) => {
        console.log(`Your answer was: ${answer4}`);
        
        // What's your favourite thing to eat for that perticular meal?
        rl.question("What's your favourite thing to eat for that particular meal?", (answer5) => {
          console.log(`Your answer was: ${answer5}`);
          
          // which sport is your absolute favourite? Which team/individual do you support/follow in that sport?
          rl.question("Which sport is your absolute favourite sport? Which team/individual do you support/follow in that sport?", (answer6) => {
            console.log(`Your answer was: ${answer6}`);

            // What is your superpower? In a few words, tell us what you are amazing at!
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              console.log(`Your answer was: ${answer7}`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});


  

