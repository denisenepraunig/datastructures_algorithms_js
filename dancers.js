function Dancer(name, sex) {
	
	this.name = name;
	this.sex = sex;
}

var femalDancers = new Queue(),
	maleDancers = new Queue();

var femaleNames = ["Denise", "Christina", "Martina"],
	maleNames = ["Tino", "Bruno"];

function buildQueues(aNames, oQueue, sSex) {

	for(var i = 0; i < aNames.length; i++) {
		oQueue.enqueue(new Dancer(aNames[i], sSex))
	}
}

buildQueues(femaleNames, femalDancers, "F");
buildQueues(maleNames, maleDancers, "M");

function buildDancers(oFemales, oMales) {

	var oFemale = null,
		oMale = null;

	console.log("The dance partners are:");
	
	while (!oFemales.isEmpty() && !oMales.isEmpty()) {
		oFemale = oFemales.dequeue();
		oMale = oMales.dequeue();
		console.log(oFemale.name + " and " + oMale.name + " dance");
	}

	if(!oFemales.isEmpty()) {
		console.log(oFemales.front().name + " is waiting");
	}

	if(!oMales.isEmpty()) {
		console.log(oMales.front().name + " is waiting");
	}
}

buildDancers(femalDancers, maleDancers);