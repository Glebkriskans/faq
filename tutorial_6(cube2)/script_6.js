function clickCube(){
    var red = gerRandomInt(255);
    var green = gerRandomInt(255);
    var blue = gerRandomInt(255);
    var deg = gerRandomInt(90);
    console.log(red, green, blue);
    document.getElementById('cube').style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

var stringBoxShadow = "0 0 5px rgba(" + red + "," + green + "," + blue + ", .5)," +
    "0 0 25px rgba(" + red + "," + green + "," + blue + ", .5)," +
    "0 0 50px rgba(" + red + "," + green + "," + blue + ", .5)," +
    "0 0 100px rgba(" + red + "," + green + "," + blue + ", .5)," +
    "0 0 200px rgba(" + red + "," + green + "," + blue + ", .5)," +
    "0 0 300px rgba(" + red + "," + green + "," + blue + ", .5)"

    document.getElementById("cube").style.boxShadow = stringBoxShadow;

    document.getElementById("container").style.transform = "rotate(" + deg + "deg)";
    
}

function gerRandomInt(max){
    return Math.floor(Math.random() * max);
}