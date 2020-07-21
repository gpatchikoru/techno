
const kelvin = 0;

// This is the temperature measured in Celsius.
var celsius = kelvin - 273;

// This is the temperature measured in Fahrenheit. This is a variable that can change.
let fahrenheit = celsius * (9/5) + 32;

// Since the code above will most likely give me decimals, I've decided to round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// This is a conversion of celsius to the newton scale.
let newton = celsius * (33/100);

newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);