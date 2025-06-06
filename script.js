const quote = "Language shapes the way we think, and determines what we can think about.";

const animation = document.getElementById("quote");

let i = 0;

function typeLine(){
	if (i < quote.length){
		animation.textContent += quote[i];
		i += 1;
		setTimeout(typeLine, 60)
		}
}

typeLine();