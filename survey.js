const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name = "";
let activity = "";
let music = "";
let meal = "";
let food = "";
let sport = "";
let superpower = "";

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  name = answer;
  q2();
});

const q2 = function () {
  rl.question("What's an activity you like doing? ", (answer) => {
    activity = answer;
    q3();
  });
};

const q3 = function () {
  rl.question("What do you listen to while doing that? ", (answer) => {
    music = answer;
    q4();
  });
};

const q4 = function () {
  rl.question(
    "Which meal is your favourite (eg: dinner, brunch, etc.) ",
    (answer) => {
      meal = answer;
      q5();
    }
  );
};

const q5 = function () {
  rl.question(
    "What's your favourite thing to eat for that meal? ",
    (answer) => {
      food = answer;
      q6();
    }
  );
};

const q6 = function () {
  rl.question("Which sport is your absolute favourite? ", (answer) => {
    sport = answer;
    q7();
  });
};

const q7 = function () {
  rl.question(
    "What is your superpower? In a few words, tell us what you are amazing at! ",
    (answer) => {
      superpower = answer;
      profile();
      
      rl.close();
    }
  );
};

const profile = function () {
  console.log(`${name} loves to listen to ${music} while he/she participates in ${activity}. His/her favorite meal of the day is ${meal} and he/she loves to eat ${food} most of all. He/she is an avid fan of ${sport}. His/her superpower is ${superpower}!`);
}


