const displayNumber = document.getElementById('number');
var counter = 0;
function increment() {
	displayNumber.innerHTML = counter+1;
	counter++;
}
function decriment() {
	if (counter>0) {
		displayNumber.innerHTML = counter-1;
		counter--;
	}
}