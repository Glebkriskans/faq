var catNames = ['Marusia', 'Maks', 'Pirat', "Busia", 'Volk']
var catColors = ['red', 'black', 'orange', 'pink', 'green']
var catLens = [30, 25, 35, 27, 31]

var cat = {
	name: catNames[random(0, catNames.length - 1)],
	color: catColors[random(0, catNames.length - 1)],
	len: catLens[random(0, catNames.length - 1)]
};


var arrayCats = [cat, cat, cat, cat];

console.log(catNames.length--);
console.log(arrayCats.length);
console.log(random(0, 6));

for (var i = 0; i < arrayCats.length; i++) {
	console.log(arrayCats[i]);
}

function random(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}