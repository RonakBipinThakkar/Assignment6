var coinFlip;
for (var i = 0; i < 10; i++) {
	coinFlip = Math.round(Math.random());
	window.console.log((coinFlip == 0) ? "Heads" : "Tails");
}