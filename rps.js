
let round = 0;
let p_score = 0;
let c_score = 0;
let scoreBoard = document.querySelector(".score_board");
const playerScore = document.getElementById("player_score");
const computerScore = document.getElementById("computer_score");
const playersChoice = document.querySelector('button');
let picked = document.getElementById('chosen')
const rock_choice = document.getElementById('rock');
const paper_choice = document.getElementById('paper');
const scissors_choice = document.getElementById('scissors');
const reset=document.getElementById('reset');

//reset button
function reset_all(){
	const reset_ = document.location.href="";
}

function gameComplete(){

	rock_choice.addEventListener('click', function(e){
		reset_all();
	})

	paper_choice.addEventListener('click', function(e){
		reset_all();
	})

	scissors_choice.addEventListener('click',function(e){
		reset_all();
	})
}

//Computer selection
function computerPlay(){
			let play = ['rock','paper','scissors'];
			let choice = play[Math.floor(Math.random()*play.length)];
			console.log(choice);
			return choice;
		}

//player wins
function win(){
	let game_over = document.querySelector("#rounds_complete");
	game_over.innerHTML="Game Over! You Win!";
	console.log("Game Over! You Win!");
	return gameComplete();
}

//player loses
function lose(){
	let game_over = document.querySelector("#rounds_complete");
	game_over.innerHTML="Game Over! You Lose!";
	console.log("Game Over! You Lose!");
	return gameComplete();
}

//update human score
function humanCount(){
	p_score++;
	playerScore.innerHTML=p_score;
	console.log('Your score: '+p_score);
	if(p_score == 5){
		win();
	}
}

//update computer score
function computerCount(){
	c_score++;
	computerScore.innerHTML=c_score;
	console.log('CPU score: '+c_score);
	if(c_score == 5){
		lose();
	}
}


//play players pick to computer pick, increase score accordingly
function winnerIs(playerSelection){

	round++;
	//computer selection
	let computerSelection = computerPlay();
	
	//play against
	if (playerSelection == 'rock' && computerSelection == 'scissors' ||
		playerSelection == 'paper' && computerSelection == 'rock' || 
		playerSelection == 'scissors' && computerSelection == 'paper'){
		humanCount();
		picked.innerHTML="You picked "+playerSelection.toUpperCase()+', the computer picked '+computerSelection.toUpperCase();
	}
	else if(playerSelection === computerSelection){
		picked.innerHTML="It's a tie!";	
		return "Its a tie!";
	}
	else{
		computerCount();
		picked.innerHTML="You picked "+playerSelection.toUpperCase()+', the computer picked '+computerSelection.toUpperCase();	
	}
}

function main(){

	rock_choice.addEventListener('click', function(){
		winnerIs('rock')
	})
	paper_choice.addEventListener('click', function(){
		winnerIs('paper')
	})
	scissors_choice.addEventListener('click',function(){
		winnerIs('scissors')
	})
	reset.addEventListener('click',function(){
		reset_all()
	})
}



main();


