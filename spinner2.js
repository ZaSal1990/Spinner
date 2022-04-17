
// const rotatingCursor = function(sentence) {
//   for (let i = 0; i <= sentence.length; i++)
//     setTimeout(function() {
//       process.stdout.write(`\r${sentence[i]}`);
//     }, i * 500);
// };


let i = 0;

const rotatingCursor = function(sentence) {
  setTimeout(function() {
    process.stdout.write(`\r${sentence[i]}`);
    i++;
    if (i < sentence.length) {
      rotatingCursor(sentence);
    }
  }, 500);
};

let display = ['|','/','-','\\','|','/','-','\\','|','/','-','\\',]; //rotating cursor effect
rotatingCursor(display);
