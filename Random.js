let a= (Math.floor(Math.random() * 10)%6)+1;
let b= (Math.floor(Math.random() * 10)%6)+1;
console.log("Dice1 output : "+a+" ; Dice2 output : "+b);
console.log("Addition is : "+(a+b));
console.log("------------------------------------------------");

//5 random 2 digit values 
let result = 0;
for(let a = 1; a <= 5; a ++){
     let value = Math.floor(Math.random() * 100); 
     console.log("random value is :" +value);
     result += value;
}
console.log("The sum of five random values is : " +result);
let avg = result / 5;
console.log("The average of five random values is : " +avg);