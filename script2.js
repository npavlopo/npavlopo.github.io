const terms = ["collateral damage","destroyed lives","unarmed victims"];

let index = 0;

const termSpan = document.getElementById("term");

function cycleTerms(){
	termSpan.classList.add("fade-out");
	setTimeout(() => {
    		index = (index + 1) % terms.length;
    		termSpan.textContent = terms[index];
    		termSpan.classList.remove("fade-out");
  	}, 1000);
}


setInterval(cycleTerms, 5000);	