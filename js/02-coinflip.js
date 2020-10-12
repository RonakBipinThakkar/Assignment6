var coinFlip = Math.random(); 
var choice = prompt("Type heads or tails");

choice = choice.toLowerCase();
coinFlip = Math.floor(coinFlip*10)// multiplying by 10 as math. random gives a floating-point, pseudo-random number between 0 (inc) and 1 (exc).
var result = (coinFlip < 5) ? "heads" : "tails";
alert("The flip was " + result + " " + (choice==result? "and" : "but") +  " you chose " + choice + "...you " + (choice==result? "win" : "loose") + "!");
