var coinFlip;
do{
	coinFlip = Math.round(Math.random());
	window.console.log((coinFlip == 0) ? "Heads" : "Tails");
}while(coinFlip != 1)