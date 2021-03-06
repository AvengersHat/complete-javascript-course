/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBOAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
var scores, roundScore, activePlayer, gamePlaying, previousRoll;

init();



//Anonymous function to roll the dice
document.querySelector('.btn-roll').addEventListener('click', function() {
   if(gamePlaying) {
       // 1. Random number
       var dice = Math.floor(Math.random() * 6) + 1;
       var diceTwo = Math.floor(Math.random() * 6) + 1;
       // Double 6 of death if(dice === previousRoll)
       if (dice + previousRoll === 12){
           scores[activePlayer] = 0; // Set their score to 0
           document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; // Update UI
           switchPlayer();
       }
       
       // 2. Display the Result
       var diceDOM = document.querySelector('.dice');
       diceDOM.style.display = 'block';
       diceDOM.src = 'dice-' + dice + '.png';
       
       //2.a Display second dice result
       
       var diceDOMTwo = document.querySelector('.dice-second'); 
       diceDOMTwo.style.display = 'block';
       diceDOMTwo.src = 'dice-' + diceTwo + '.png';

       // 3. Update the round score IF the rolled number was not a 1
       if (dice !== 1) {
            //Add score
            roundScore += dice + diceTwo; // roundScore = roundScore + dice
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            previousRoll = dice; // Save it to previousRoll
           console.log(previousRoll);
       } else {
            switchPlayer();
        }
   } 
});


document.querySelector('.btn-hold').addEventListener('click', function() {
        if (gamePlaying){
    
            // 1. Add current roundScore to score and display to ui
            scores[activePlayer] += roundScore;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
            var input = document.querySelector('.final-score').value;
            var winningScore = input || 100;
            
            // Undefined, 0, null or "" are COERCED to false
            // Anything else is COERCED to true
            
        
            
            // 2. Check if player won the game
            if (scores[activePlayer] >= winningScore) {
                document.getElementById('name-' + activePlayer).textContent = 'WINNER';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
        } else {
            // 3. Switch Players
            switchPlayer();
        }
   }
});

function switchPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0; // roundScore reset to 0 for next player
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
        document.querySelector('.dice').style.display = 'none';
    
        previousRoll = 0;
}

//New game button
document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-second').style.display = 'none';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    
}











