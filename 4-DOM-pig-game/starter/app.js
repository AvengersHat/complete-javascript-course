/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBOAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none'; //Use dot notation for classes. to change css use the .style method and the .property This is to hide the dice on startup

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


//Anonymous function to roll the dice
document.querySelector('.btn-roll').addEventListener('click', function() {
   
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display the Result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    
    // 3. Update the round score IF the rolled number was not a 1
    
    
    if (dice !== 1) {
        //Add score
        roundScore += dice; // roundScore = roundScore + dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
    } else {
        resetPlayer();
        /*
        //Next player - Using ternary function condition ? action : else
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0; // roundScore reset to 0 for next player
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display = 'none';
        */
    }
    
});

//GE before the DRY principle DON'T REPEAT YOURSELF
document.querySelector('.btn-hold').addEventListener('click', function() {
    
    // 1. Add current roundScore to score and display to ui
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    // 2. Finish player turn
    resetPlayer();
    /*
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0; // roundScore reset to 0 for next player
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
        document.querySelector('.dice').style.display = 'none';
        */
})

function resetPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0; // roundScore reset to 0 for next player
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
        document.querySelector('.dice').style.display = 'none';
}


















//document.querySelector('#current-' + activePlayer).textContent = dice; // Use querySelector to manipulate elements by id, use a string with # as in css to select them. build the string to be dynamic. THIS IS CALLED A SETTER

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; // All HTML markup needs to be made a string within JavaScript, otherwise it is read as JS code.

/*
var x = document.querySelector('#score-0').textContent; // query selector can be used to read the DOM and store in variables. THIS IS CALLED A GETTER
console.log(x);
*/







