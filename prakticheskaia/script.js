function clickCube(){
    var red = gerRandomInt(255);
    var green = gerRandomInt(255);
    var blue = gerRandomInt(255);
    console.log(red, green, blue);
    document.getElementById('circle').style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    var stringBoxShadow = "0 0 5px rgba(" + red + "," + green + "," + blue + ", .5)," +
    "0 0 25px rgba(" + red + "," + green + "," + blue + ", .5)," +
    "0 0 50px rgba(" + red + "," + green + "," + blue + ", .5)," +
    "0 0 100px rgba(" + red + "," + green + "," + blue + ", .5)," +
    "0 0 200px rgba(" + red + "," + green + "," + blue + ", .5)," +
    "0 0 300px rgba(" + red + "," + green + "," + blue + ", .5)"
    document.getElementById("circle").style.boxShadow = stringBoxShadow;
    
    var b=gerRandomInt(200);
    var bo=gerRandomInt(200);
    var storonaOne= b + "px" ;
    var storonaTwo= bo + "px" ;
    var bl=gerRandomInt(50);
    var rad= bl + "px";

    document.getElementById("circle").style.height=storonaOne;
    document.getElementById("circle").style.height=storonaOne;
    document.getElementById("circle").style.width=storonaTwo;
    document.getElementById("circle").style.borderRadius=rad;

}

function gerRandomInt(max){
    return Math.floor(Math.random() * max);
}
