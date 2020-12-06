var readlineSync = require("readline-sync");
const CFonts = require('cfonts');
//var term = require( 'terminal-kit' ).terminal ;
var chalk = require('chalk');

var score = 0;

questionSet =[
    {question: 'What is my complete name?',
    answer: 'ANSAF AKHTAR',
    },
    {question: 'Where do I live?',
    answer: 'LUCKNOW',
    },
    {question: 'Which sports do I love?',
    answer: 'FOOTBALL',
    },
    {question: 'What is my birthday month?',
    answer: 'MAY',
    },
    {question: 'How old am I?',
    answer: '24',
    }
  ]
  
welcome();
begin();

function title(playerName){
  CFonts.say(`Hi ${playerName}`, {
    font: 'block',
    align: 'left',
    colors: ['#61b15a','#f3eac2','#ec524b'],
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    space: true,           
    maxLength: '0',
    gradient: false,     
    independentGradient: false,
    transitionGradient: false,
    env: 'node'      
  });
}

function welcome(){
  var playerName = readlineSync.question((chalk.hex('#0be882')('PLEASE ENTER YOUR NAME\n\n')));
       console.log((chalk.hex('#61b15a')
      ("\n***********************************************************************************")));
      title(playerName);
      console.log((chalk.hex('#ec524b')
      ("***********************************************************************************\n")));
      console.log("This is just a basic quiz to see how much you know about me.\n");
      console.log("I'll award you +1 point for correct answer and -0.5 point for wrong answer.\n");
      console.log((chalk.hex('#ec524b')
      ("***********************************************************************************\n")));
      readlineSync.question((chalk.hex('#0be882')("------------------------Shall we begin? Press ENTER to start-----------------------\n")));
}

function begin(){
  for(var i=0;i<questionSet.length;++i){
   var currentQuestion = questionSet[i];  
   //console.log((chalk.hex('#ffa62b')("----------------------------Question "+(++i)+"----------------------------\n")));
console.log(chalk.hex('#ffa801')(`\n------------------------ Question ${i+1} ------------------------`));   
   var userAnswer = readlineSync.question("Question: "+currentQuestion.question+"\n");  
	if(userAnswer.toUpperCase()=== currentQuestion.answer){
      console.log((chalk.green("CORRECT  ✔️\n")));
      score ++;
	} else{
		console.log((chalk.hex('#f6830f')("WRONG  ❌\n")));
		console.log((chalk.green("CORRECT ANSWER: ")) + (chalk.hex('#0be882')(currentQuestion.answer)));
		score -= 0.5;
	}
  }
  console.log((chalk.green("\n------------------------")));
  console.log((chalk.green("Final Score: " + score)));
  console.log((chalk.green("------------------------\n")));
  var repeat = readlineSync.question((chalk.green("\nWant to play again? [Y/N]" )));
  if (repeat === 'y' || repeat === 'Y') begin();
  else if (repeat === 'n' || repeat === 'N') console.log((chalk.green("\nThank you for playing!")));
  else console.log((chalk.green("\nSorry, invalid input")));
}