var score = 0;

//Question 1
var answer1 = prompt('Is Amber pretty?');
if ( answer1.toUpperCase() === 'YES' || answer1.toUpperCase() === 'Y' ) {
  document.getElementById('quiz1').innerHTML+='<p>1. Correct</p>';
  score += 1;
} else {
  document.getElementById('quiz1').innerHTML+='<p>1. Wrong. Jerk!</p>';
}

//Question 2
var answer2 = prompt('Is Amber talented?');
if ( answer2.toUpperCase() === 'YES' || answer2.toUpperCase() === 'Y' ) {
  document.getElementById('quiz1').innerHTML+='<p>2. Correct <3</p>';
  score += 1;
} else {
  document.getElementById('quiz1').innerHTML+='<p>2. Incorrect, dickhead.</p>';
}

//Question 3
var answer3 = prompt("Do you want to be Amber's friend?");
if ( answer3.toUpperCase() === 'YES' || answer3.toUpperCase() === 'Y' ) {
  document.getElementById('quiz1').innerHTML+='<p>3. Why, thank you, angel.</p>';
  score += 1;
} else {
  document.getElementById('quiz1').innerHTML+="<p>3. Psh. She doesn't want to be your friend either!</p>";
}

//Question 4
var answer4 = prompt('How many people like Amber?');
if ( parseInt(answer4) === 5432 ) {
  document.getElementById('quiz1').innerHTML+='<p>4. You are brill!</p>';
  score += 1;
} else {
  document.getElementById('quiz1').innerHTML+='<p>4. Wrong, dummy.</p>';
}

//Question 5
var answer5 = prompt('Is Amber the smartest person here?');
if ( answer5.toUpperCase() === 'YES' || answer5.toUpperCase() === 'Y' ) {
  document.getElementById('quiz1').innerHTML+='<p>5. Pure genius.</p>';
  score += 1;
} else {
  document.getElementById('quiz1').innerHTML+='<p>5. Wrong-o. Of course she is!</p>';
}

//Final Score
document.getElementById('quiz1').innerHTML+='<h2>Quiz complete.</h2> You got ' + score + ' answers right. ';
if (score === 5) {
  document.getElementById('quiz1').innerHTML+='Congrats! You get a gold crown!';
} else if (score > 2 && score < 5) {
  document.getElementById('quiz1').innerHTML+='Not bad, buddy! Silver crown for you.';
} else if (score > 0 && score < 3) {
  document.getElementById('quiz1').innerHTML+='You really could have done better, but alas, bronze crown for you.';
} else {
  document.getElementById('quiz1').innerHTML+='Turd. No crowns for you!';
}
