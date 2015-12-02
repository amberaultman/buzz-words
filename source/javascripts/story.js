var firstAnimal = prompt("Choose an animal.");
var firstAdjective = prompt("Choose an adjective.");
var firstVerb = prompt('Choose an action that ends in "ing".');
var firstObject = prompt("Choose an object.");
var igniter = prompt("Choose an Igniter.");
var secondVerb = prompt('Choose an action that ends in "ing".');
alert("Great! Your story is now ready.");
var story = "Once upon a time, there was a " + firstAnimal + " who was very " + firstAdjective + ".";
story += " One day, this " + firstAnimal + " was " + firstVerb + " when he ran into a " + firstObject + ".";
story += " The " + firstAnimal + " started to get scared, but then he saw " + igniter + " " + secondVerb + " and knew things would be ok. The end."
document.getElementById('story1').textContent=story;

// jquery -- $('#story1').text(story)
