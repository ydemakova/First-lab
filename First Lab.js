// Iteration 1: Names and Input

let hacker1 = 'Jack';
let hackerNew = hacker1.toUpperCase();
let hacker2 = 'Navigator';
console.log(`The drivers's name is ${hackerNew}`);
console.log(`The navigator's name is ${hacker2.toUpperCase()}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
	console.log(`The driver has the longest name, it has` + ` ` + hacker1.length + ` ` + `characters`);
} else if (hacker1.length < hacker2.length) {
	console.log(
		`It seems that the navigator has the longest name, it has, it has` + ` ` + hacker2.length + ` ` + `characters`,
	);
} else {
	console.log(`Wow, you both have equally long names,` + ` ` + hacker2.length + ` ` + ` characters!`);
}

// Iteration 3: Loops

let newHacker1 = '';
for (let i = 0; i < hacker1.length; i++) {
	newHacker1 = newHacker1 + ' ' + hacker1[i].toUpperCase();
}
console.log(newHacker1);

console.log(hacker1.split('').reverse().join(' '));

if (hacker1.localeCompare(hacker2) < 0) {
	console.log(`The driver's name goes first`);
} else if (hacker1.localeCompare(hacker2) > 0) {
	console.log(`Yo, the navigator goes first definitely.`);
} else {
	console.log(`What?! You both have the same name?`);
}

// Bonus 1

let lorem =
	'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.';

let wordCount = lorem.split(' ').length;
console.log(wordCount);

let newArray = lorem.split(' ');
console.log(newArray);

/*

need to work on that more

let counter = 0;
for (j = 0; j < newArray.length; j++) {
  if (newArray[j].match(/[a-z]/) >= 0) {
    counter++;
  }
}
  console.log(counter);
*/
