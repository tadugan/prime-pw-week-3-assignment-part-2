console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?

// I need to change 4 into a 6. Since the console.log occurs before I increment
// I need the value on the right of the less than symbol to be 1 higher than
// what I'm counting to.
console.log('count from 0 to 5');
for (let i=0; i<6; i++) {
  console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?

// I need to start i at 3, and put a 6 to the right of <.
console.log('count from 3 to 5');
for (let i=3; i<6; i++) {
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

// I need to start i at 2, check if it's less than 12, and add 2 every time
// it loops.
for (let i=2; i<12; i+=2) {
  console.log(i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0

// QUESTION for the instructor/grader: is i>-1 good syntax here? Or should it be
// i>(-1) maybe? Both seemed to work.
console.log('STRETCH: countdown from 5 to 0');
for (let i=5; i>-1; i--) {
  console.log(i);
}

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (let each of stars) {
  console.log(each);
}

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

let position = 0;
let maxPosition = stars.length;

while (position < maxPosition) {
  console.log(stars[position]);
  position++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let number = 0;
while (number < 6) {
  console.log(number);
  number++;
}
// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5

console.log('count backwards from 10 to 5');
number = 10;
while (number > 4) {
  console.log(number);
  number--;
}
