// make things happen
sunMoves();
createGradient();


var today = new Date();

// translates the "#sun" div
// across sky
function sunMoves()
{
	var target = document.querySelector("#sun");
	var player = target.animate([
	  {transform: 'translate(5px, 700px)'},
	  {transform: 'translate(100px, 0px)'}],
	  { iterations: 2,
	  	direction: "alternate", 
	    duration: 15000000});
	player.addEventListener('finish', function() {
	  target.style.transform = 'translate(0px, 700px)';
	  console.log("executed");
	});
}


// linear-gradient for HTML canvas element
// the "sky"
function createGradient()
{
	var c = document.getElementById("grad");
	var ctx = c.getContext("2d");
	var gradient = ctx.createLinearGradient(0, 0, 0, 700);
	colorifyGradient(gradient);
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 700, 700);
}

// generates semi-random hex color
// blue for "sky"
function pickBlue()
{
	var values = ["a", "b", "c", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	var colorB = "";
	for (var i = 0; i < 4; i++)
	{
		var part = values[Math.floor(Math.random() * 13)];
		colorB += part;
	}
	return colorB + "f2";
}

// generates semi-random hex color
// red for "sunset"
function pickRed()
{
	var values = ["a", "b", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	var colorR = "d1";
	for (var i = 0; i < 4; i++)
	{
		var part = values[Math.floor(Math.random() * 12)];
		colorR += part;
	}
	return colorR;
}

// fills the gradient
function colorifyGradient(gradient)
{
	gradient.addColorStop(0, "#" + pickBlue());
	gradient.addColorStop(0.1, "#" + pickBlue());
	gradient.addColorStop(0.2, "#" + pickBlue());
	gradient.addColorStop(0.3, "#" + pickBlue());
	gradient.addColorStop(0.4, "#" + pickRed());
	gradient.addColorStop(0.5, "#" + pickRed());
	gradient.addColorStop(0.6, "#" + pickRed());
	gradient.addColorStop(0.7, "#" + pickRed());
	gradient.addColorStop(0.8, "#" + pickRed());
	gradient.addColorStop(0.9, "#" + pickRed());
	gradient.addColorStop(1, "white");
}