// make things happen
sunMoves();

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

var sky = {

    "createGradient": // linear-gradient for HTML canvas element 
                      // the "sky"
                        function ()
                        {
                            var c = document.getElementById("grad");
                            var ctx = c.getContext("2d");
                            var gradient = ctx.createLinearGradient(0, 0, 0, 700);
                            this.colorifyGradient(gradient);
                            ctx.fillStyle = gradient;
                            ctx.fillRect(0, 0, 700, 700);
                            return gradient;
                        },
    
    "colorifyGradient": // fills the gradient
                        function (gradient)
                        {
                            gradient.addColorStop(0, "#" + this.restrictBlue());
                            gradient.addColorStop(0.1, "#" + this.restrictBlue());
                            gradient.addColorStop(0.2, "#" + this.restrictBlue());
                            gradient.addColorStop(0.3, "#" + this.restrictBlue());
                            gradient.addColorStop(0.4, "#" + this.restrictBlue());
                            gradient.addColorStop(0.5, "#" + this.restrictBlue());
                            gradient.addColorStop(0.6, "#" + this.restrictBlue());
                            gradient.addColorStop(0.7, "#" + this.restrictBlue());
                            gradient.addColorStop(0.8, "#" + this.pickRed());
                            gradient.addColorStop(0.9, "#" + this.pickRed());
                            gradient.addColorStop(1, "white");
                        },
    
    "pickRed": // generates semi-random hex color
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
                },
    
    "redden": // have some sort of interval for this
            function redden(gradient)
            {
                for (var i = 0; i < 11; i++)
                {
                    var num = i / 10;
                    gradient.addColorStop(num, "#" + pickRed());
                }

            },
    
    "restrictBlue": // picks a more conservative blue
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
			
}

sky.createGradient()

// AJAX
//// data from weather api
var xhttp = new XMLHttpRequest();
//api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml
//6cdad093c77b980063e4816a17bdb813
// xhttp.open("GET", "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=23c6d8a5f7d6de2d797f7870eef6d43f", true);
// xhttp.send(null);
//xhttp.onreadystatechange = function()
//{
//  if (xhttp.readyState === XMLHttpRequest.DONE) 
//   {
//       if (xhttp.status === 200) 
//       {
//           alert(xhttp.responseText);
//            var responseData = String(xhttp.responseText);
//            var response = JSON.parse(xhttp.responseText);
//        } 
//        else 
//        {
//            alert('There was a problem with the request.');
//        }
//   }
//}