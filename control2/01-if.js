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

// console.log("Welcome to the game");

if(score > 99){
    // console.log("You get a life up");
    score = score - 100;
    life = life +1;
    let bullets = 2000;
    // console.log(`Your bullets are ${bullets}`);
}
else{
    // console.log("You don't get a life up");
}
 
// console.log(`Your score is ${score} . Your life is ${life} . Your bullets are ${bullets}` );

// short hand

let balance = 500;
// if(balance > 100) console.log("Balance is above 100");

// build a rating system for pizza hut

// 1 star - poor
// 2 star - emm,ok
// 3 star - average
// 4 star - cool
// 5 star - great
// 6 star - awesome
// 7 star - nailed it

let getStarFromUser = "3";
let star = parseInt(getStarFromUser);

// if(star==1){
// 						console.log("Poor rating");
// }
// else if(star==2){
// 						console.log("emm ,ok");
// }
// else if(star==3){
// 						console.log("average");
// }
// else if(star==4){
// 						console.log("cool");
// }
// else if(star==5){
// 						console.log("great");
// }
// else if(star==6){
// 						console.log("awesome");
// }
// else{
// 						console.log("nailed it");
// }

// switch case 

switch(star){
    case 1:
        console.log("poor");
        break;

    case 2:
        console.log("emm,ok");
        break;

    case 3:
        console.log("average");
        break;

    case 4:
        console.log("cool");
        break;
    
    case 5:
        console.log("great");
        break;

    case 6: 
        console.log("awesome");
        break;

    case 7:
        console.log("nailed it");
        break;

    default:
        console.log("I don't know what the rating is for");
}