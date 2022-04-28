let input = prompt("Please enter a number.");
let numbers = [0,1,2,3,4,5,6,7,8,9];
let output = "";

for(let i = 0; i<input;i++)
{
  output += i;
}

document.getElementById('fname').innerHTML = output;
