
var Sky = function(dayLength){

    this.dayLength = dayLength || 20000;
    this.sunsUp = true;

    Sky.prototype.createGradient = // linear-gradient for HTML canvas element 
                                    // the "sky"
                        function ()
                        {
                            var c = document.getElementById("grad");
                            var ctx = c.getContext("2d");
                            var gradient = ctx.createLinearGradient(0, 0, 0, 700);
                            this.colorifyGradient(gradient);
                            ctx.fillStyle = gradient;
                            ctx.fillRect(0, 0, 700, 700);
                            //this.gradient = gradient;
                            console.log(ctx);
                            return gradient;
                        },
    
    Sky.prototype.colorifyGradient = // fills the gradient
                        function (gradient)
                        {
                            for(var i=1; i<10; i++)
                                {
                                    var hue = "#" + this.pickRed();//this.hues[i];
                                    gradient.addColorStop(i/10, hue)
                                }
                            gradient.addColorStop(1, "white");
                        },
    
    Sky.prototype.pickRed = // generates semi-random hex color
                // red for "sunset"
                function()
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
    
    Sky.prototype.redden =// have some sort of interval for this
            function(gradient)
            {
                for (var i = 0; i < 11; i++)
                {
                    var num = i / 10;
                    gradient.addColorStop(num, "#" + pickRed());
                }

            },
    
    Sky.prototype.restrictBlue = // picks a more conservative blue
                function()
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
    Sky.prototype.triggerSun = // translates the "#sun" div across sky
                function()
                {
                    var target = document.querySelector("#sun");
                    var player = target.animate([
                        {transform: 'translate(5px, 700px)'},
                        {transform: 'translate(100px, 0px)'}],
                        {iterations: 2,
                         direction: "alternate", 
                         duration: this.dayLength});
                    player.addEventListener('finish', function() {
                        target.style.transform = 'translate(0px, 700px)';
                        console.log("executed");
                        this.sunsUp=false;
                    });
                }
    Sky.prototype.generateHues =
        function()
                {
                    for(var i = 0; i<10; i++)
                        {
                            this.hues[i] = 4;
                        }
                    setTimeout(this.generateHues(), this.dayLength/1000);
                }
    Sky.prototype.execute = 
                (function()
                {
                
                })();
//    /this.generateHues();
    this.createGradient();
    this.triggerSun();
}

var x = new Sky();
