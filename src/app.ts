let age: number = 29;
age = 30;
age = 31.5;
let ageAsString: string = "dwadziescia dziewiec";
ageAsString = 'dziesiec';
ageAsString = `${age}`;

console.log(ageAsString);

const add = (v1: number, v2: number) => v1 + v2;

console.log(add(10, 50));