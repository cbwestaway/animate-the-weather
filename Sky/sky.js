
var Sky = function(data){

    this.dayLength = data.dayLength || 20000;
    //this.hues = data.hues || [];
    this.dayCompleted = data.dayCompleted || 0;
    this.sunsUp = data.sunsUp || true;

    Sky.prototype.createGradient = // linear-gradient for HTML canvas element 
                                    // the "sky"
                        function ()
                        {
                            var c = document.getElementById("grad");
                            var ctx = c.getContext("2d");
                            var gradient = ctx.createLinearGradient(0, 0, 0, window.outerHeight);
                            this.colorifyGradient(gradient);
                            ctx.fillStyle = gradient;
                            ctx.fillRect(0, 0, window.outerWidth, window.outerHeight);
                            this.gradient = gradient;
                            //return gradient;
                        },
    
    Sky.prototype.colorifyGradient = // fills the gradient
                        function (gradient)
                        {
                            for(var i=1; i<10; i++)
                                {
                                    var hue = this.hues[i];
                                    gradient.addColorStop(i/10, hue.toRBG())
                                }
                            gradient.addColorStop(1, "white");
                        },
    
    Sky.prototype.pickRed = // generates semi-random hex color
                // red for "sunset"
                function()
                {
                   r = Math.floor(Math.random() * 225) + 200;
                   b = Math.floor(Math.random() * 225);
                   singleHue = {red: r, green: 70, blue: b};
                   singleHue.toRBG = function()
                   {
                       return "rgb("+ this.red +","+ this.green +","+ this.blue +")"
                   }
                   return singleHue;
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
                function(dark)
                {
                   if(dark)
                        {
                            var r = Math.floor(Math.random() * 50) + 30;
                            var b = Math.floor(Math.random() * 100) + 50; 
                            var g = Math.floor(Math.random() * 50);
                        }
                   else
                       {
                            r = Math.floor(Math.random() * 225);
                            b = Math.floor(Math.random() * 225) + 180;
                            g = 70
                       }
                   var singleHue = {red: r, green: g, blue: b};
                   singleHue.toRBG = function()
                   {
                       return "rgb("+ this.red +","+ this.green +","+ this.blue +")"
                   }
                   return singleHue;
                }
    Sky.prototype.triggerSun = // translates the "#sun" div across sky
                function()
                {
                    var target = document.querySelector("#sun");
                    var player = target.animate([
                        {transform: 'translate(0px, '+window.outerHeight+'px)'},
                        {transform: 'translate(0px, 0px)'}],
                        {iterations: 2,
                         direction: "alternate", 
                         duration: this.dayLength});
                    player.addEventListener('finish', function() {
                        target.style.transform = 'translate(0px, '+window.outerHeight+'px)';
                        this.sunsUp = false
                    });
                }
    Sky.prototype.generateHues =
                function(){
                    if(x)
                        var hues = x.hues;
                    else
                        hues = [];
                    var singleHue = "";
                    if(this.dayCompleted == 0)
                        {
                            for (var i = 0; i < 10; i++)
                                {
                                    if(i < 2)
                                        hues[i] = this.restrictBlue(dark=true);
                                    else
                                        hues[i] = this.pickRed();
                                }
                        }
                    else
                        {
                             for (var i = 0; i < 10; i++)
                                {
                                    if(i < x.dayCompleted + 2 && x.dayCompleted < 50)
                                        {
                                            hues[i].blue += 5
                                            hues[i].green += 1
                                           // hues[i].red -= 5
                                        }
                                    else
                                        {
                                            if(i < 2)
                                                {
                                                    //hues[i].red -= 3
                                                    hues[i].green -= 3
                                                    hues[i].blue -= 3
                                                }
                                            else
                                                {
                                                    hues[i].red += 15
                                                    hues[i].green -= 5
                                                    hues[i].blue -= 5
                                                }
                                        }
                                }
                        }
                    setInterval(this.generateHues, this.dayLength/50)
                    if (x)
                        {
                            if (!x.sunsUp)
                                delete x;
                            x.dayCompleted++;
                            x.hues = hues;
                            x.createGradient();
                        }
                    else
                            this.hues = hues;
                        
                }
    Sky.prototype.getReturn
    Sky.prototype.execute = 
                (function()
                {
                
                })();
    this.generateHues();
    this.createGradient();
    this.triggerSun();
}

var x = new Sky({});
