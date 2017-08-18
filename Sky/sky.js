// make things happen
sunMoves();
createGradient();
generateClouds();


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
	    duration: 15000});
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

// draw clouds
function generateClouds() 
{
	// parent element
	var container = document.querySelector(".container");
	// create the svg element
	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	// set svg attributes
	svg.setAttribute('width', '1500');
	svg.setAttribute('height', '1000');
	svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
	// put inside container
	container.appendChild(svg);
	// create ellipse
	var l = Math.floor(Math.random() * 500);
	var j = Math.floor(Math.random() * 500);
	for (var i = 0; i < 10; i++)
	{
		var ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		l += 15;
		j += 15;
		// set ellipse attributes
		generateCloudSize(ellipse, l, j);
		ellipse.setAttribute("fill", "white");
		ellipse.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
		// put ellipse inside svg
		svg.appendChild(ellipse);
	}
}

// sets ellipse size attributes
function generateCloudSize(ellipse, l, j)
{
	ellipse.setAttribute("cx", l);
	ellipse.setAttribute("cy", j);
	ellipse.setAttribute("rx", Math.floor(Math.random() * 100) + 20);
	ellipse.setAttribute("ry", Math.floor(Math.random() * 100) + 20);
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

// picks a more conservative blue
function restrictBlue()
{
		var values = ["0", "1", "2", "3", "4", "5", "6", "7"];
	var colorB = "";
	for (var i = 0; i < 4; i++)
	{
		var part = values[Math.floor(Math.random() * 8)];
		colorB += part;
	}
	return colorB + "f2";
}

// fills the gradient
function colorifyGradient(gradient)
{
	gradient.addColorStop(0, "#" + restrictBlue());
	gradient.addColorStop(0.1, "#" + restrictBlue());
	gradient.addColorStop(0.2, "#" + restrictBlue());
	gradient.addColorStop(0.3, "#" + restrictBlue());
	gradient.addColorStop(0.4, "#" + restrictBlue());
	gradient.addColorStop(0.5, "#" + restrictBlue());
	gradient.addColorStop(0.6, "#" + restrictBlue());
	gradient.addColorStop(0.7, "#" + restrictBlue());
	gradient.addColorStop(0.8, "#" + pickRed());
	gradient.addColorStop(0.9, "#" + pickRed());
	gradient.addColorStop(1, "white");
}

// AJAX
// data from weather api
	// var xhttp = new XMLHttpRequest();
	// //api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml
	// //6cdad093c77b980063e4816a17bdb813
	// xhttp.open("GET", "http//:api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6cdad093c77b980063e4816a17bdb813", true);
	// xhttp.send();

	// xhttp.onreadystatechange = function()
	// {
	// 	if (xhttp.readyState === XMLHttpRequest.DONE) 
	// 	{
 //        	if (xhttp.status === 200) 
 //        	{
 //        		alert(xhttp.responseText);
 //        		var responseData = String(xhttp.responseText);
	// 			var response = JSON.parse(xhttp.responseText);
 //      		} 
 //      		else 
 //      		{
 //        		alert('There was a problem with the request.');
 //      		}
 //   		}
	// }