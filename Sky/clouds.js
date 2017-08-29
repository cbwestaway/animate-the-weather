// makes clouds appear
generateClouds();

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

// draw clouds
function generateClouds() 
{
	var svg = createSVG();
	for ( var i = 0; i < 3; i++)
	{
		// creates one cloud
		createCloud(svg);
		// lightning trial
		makeLightning(svg);
	}
}

// creates a part of a cloud
function createCloud(svg)
{
	// create ellipse
	var cx = Math.floor(Math.random() * 500);
	var cy = Math.floor(Math.random() * 500);
	for (var i = 0; i < 12; i++)
	{
		var ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		cx += offsetEllipses();
		cy += offsetEllipses();
		// set ellipse attributes
		generateCloudSize(ellipse, cx, cy);
		ellipse.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
		// put ellipse inside svg
		svg.appendChild(ellipse);
	}
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

// sets ellipse size attributes
function generateCloudSize(ellipse, cx, cy)
{
	var attributes = 
	{
		"cx": cx,
		"cy": cy,
		"rx": Math.floor(Math.random() * 50) + 20,
		"ry": Math.floor(Math.random() * 50) + 20,
		"fill": "white"
	}
	console.log(attributes);
	ellipse.setAttribute("cx", attributes.cx);
	ellipse.setAttribute("cy", attributes.cy);
	ellipse.setAttribute("rx", attributes.rx);
	ellipse.setAttribute("ry", attributes.ry);
	ellipse.setAttribute("fill", attributes.fill);
}

// lightning trial
function makeLightning(svg)
{
	var lightning = document.createElementNS("http://www.w3.org/2000/svg", "g");
	lightning.setAttribute("fill", "yellow");
	lightning.setAttribute("stroke", "yellow");
	lightning.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
	// put lightning inside svg
	svg.appendChild(lightning);
	console.log(lightning);
}