
var high = Number(document.getElementById("highT").innerHTML.slice(0, -2));
var low = Number(document.getElementById("LowT").innerHTML.slice(0, -2));

var difference = ((high - low) / 2);
var t = low + difference;

var s = Number(document.getElementById("windS").innerHTML.slice(0, -7));


var F = 35.74 + ((0.6215 * t) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * t * (Math.pow(s, 0.16))))

document.getElementById("windchillvalue").innerHTML = F.toFixed(2) + " °F";



