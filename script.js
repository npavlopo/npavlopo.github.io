const quote = "The limits of my language mean the limits of my world.";

const animation = document.getElementById("quote");

let i = 0;

function typeLine(){
	if (i < quote.length){
		animation.textContent += quote[i];
		i += 1;
		setTimeout(typeLine, 100)
		}
}

typeLine();