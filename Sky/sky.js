
var i = 0;
var values = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//setInterval(sunMoves, 3000);
var today = new Date();


var target = document.querySelector("#sun");
var player = target.animate([
  {transform: 'translate(5px, 700px)'},
  {transform: 'translate(100px, 0px)'}],
  { iterations: 2,
  	direction: "alternate", 
    duration: 8000});
player.addEventListener('finish', function() {
  target.style.transform = 'translate(0px, 700px)';
  console.log("executed");
});

createGradient();

function createGradient()
{
	var c = document.getElementById("grad");
	var ctx = c.getContext("2d");
	var my_gradient = ctx.createLinearGradient(0, 0, 0, 700);
	my_gradient.addColorStop(0, "#" + pickBlue());
	my_gradient.addColorStop(0.5, "red");
	my_gradient.addColorStop(1, "white");
	ctx.fillStyle = my_gradient;
	ctx.fillRect(0, 0, 700, 700);
}

function pickBlue()
{
	var colorB = "";
	for (var i = 0; i < 4; i++)
	{
		var part = values[Math.floor(Math.random() * 15)];
		colorB += part;
	}
	return colorB + "f2";
}

function pickRed()
{
	var colorR = "d1";
	for (var i = 0; i < 4; i++)
	{
		var part = values[Math.floor(Math.random() * 15)];
		colorR += part;
	}
	return colorR;
}
