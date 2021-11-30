
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
  rl.question('What\'s an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (mealTime) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (meal) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superPower) => {
              process.stdout.write(`${name} loves ${activity} and listening to ${music} while cooking ${mealTime}. \n ${name}'s favorite food is ${meal} and absolute favorite sport is ${sport} which they excelle at because they are ${superPower}\n`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
//SECOND WAY TO ACCOMPLISH THE TAST WITH BETTER APPROACH!

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const query = ['Whats your name? Nicknames are also acceptable :)', 'Whats an activity you like doing?']
// let i = 0;
// const yourProfile = [];
// const survey = function (question) {

//   if (question[0]) {
//     rl.question(question[i], (answer) => {

//       yourProfile.push(answer)

//       if (question[i + 1]) {
//         i++;
//         survey(question);
//       } else {
//         process.stdout.write(`my name is ${yourProfile[0]}`)
//       rl.close();
//       }
//     });
//   }

// }
// survey(query);

//console.log(yourProfile)
