let temperature = 16;

if(temperature < 20){
    // console.log("It's really cold");
}
else{
    // console.log("It's really hot");
}

// console.log("PW SKills"); 

let score = 100;
let life = 3;
let bullets = 1000;
// above 99, you get a life up 
// below 99 you don't get a life up

// a welcome message to game

console.log("Welcome to the game");

if(score > 99){
    console.log("You get a life up");
    score = score - 100;
    life = life +1;
    let bullets = 2000;
    console.log(`Your bullets are ${bullets}`);
}
else{
    console.log("You don't get a life up");
}
 
console.log(`Your score is ${score} . Your life is ${life} . Your bullets are ${bullets}` );
