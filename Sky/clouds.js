// create svg function
function createSVG()
{
	// parent element
	var container = document.querySelector(".container");
	// create the svg element
	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	// set svg attributes
	svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
	// put inside container
	container.appendChild(svg);
	return svg;
}

// offset cx and cy
// (ellipse centers)
function offsetEllipses()
{
	var boolean = Math.floor(Math.random() * 2);
	if (boolean)
	{
		offset = 15;
	}
	else
	{
		offset = -15;
	}
	return offset;
}

						       

// generates string for lightning's path
function generateLineString()
{
	var lineString = "";
	for (var i = 1; i < 21; i++)
	{
		if ( i % 2 == 0)
		{
			lineString += " ";
			lineString += 25 * i; // small bug here, still works
			lineString += " L ";
		}
		else
		{
			lineString += " ";
			lineString += Math.floor(Math.random() * 25 ) + 10;
			lineString += " ";
		}
	}
	return lineString;
}


//==============================================
//==============================================
// object for ease
var clouds =
{
	"cx": Math.floor(Math.random() * 500),
	"cy": Math.floor(Math.random() * 500),
	"rx": Math.floor(Math.random() * 50) + 20,
	"ry": Math.floor(Math.random() * 50) + 20,
	"fill": "white",

	"svg": createSVG(),

	// draw clouds
	"generate":	function() 
				{
					for ( var i = 0; i < 1; i++)
					{
						// creates one cloud
						this.oneCloud();
					}
				},
	// creates one cloud
	"oneCloud": function ()
				{
					// create ellipse
					// var cx = Math.floor(Math.random() * 500);
					// var cy = Math.floor(Math.random() * 500);
					for (var i = 0; i < 12; i++)
					{
						var ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
						this.cx += offsetEllipses();
						this.cy += offsetEllipses();
						// set ellipse attributes
						this.cloudSize(ellipse);
						ellipse.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
						// put ellipse inside svg
						this.svg.appendChild(ellipse);
					}
				},
	"cloudSize": function (ellipse)
				{
					ellipse.setAttribute("cx", this.cx);
					ellipse.setAttribute("cy", this.cy);
					ellipse.setAttribute("rx", this.rx);
					ellipse.setAttribute("ry", this.ry);
					ellipse.setAttribute("fill", this.fill);
				},

	"lightning": function()
				{
					var lightning = document.createElementNS("http://www.w3.org/2000/svg", "g");
					lightning.setAttribute("fill", "yellow");
					lightning.setAttribute("stroke", "yellow");
					lightning.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
					// put lightning inside svg
					this.svg.appendChild(lightning);
					// set lightnings path and append
					this.lightningPath(lightning);
					console.log(lightning);
				},
	"lightningPath": function (lightning)
					{
						var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
						
						var pathParams =
						{
							"strokeWidth": 6,
							"d": "M " + this.cx + " " + this.cy + " " + generateLineString()  
						}	
						path.setAttribute("stroke-width", pathParams.strokeWidth);
						path.setAttribute("d", pathParams.d);
						path.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
						lightning.appendChild(path);									
					}									       
};

clouds.generate();
clouds.lightning();