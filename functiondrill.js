

//  PALINDROME //////
   
   const checkPalindrome=(hh)=>{
       return hh.toUpperCase()=== hh.split('').reverse().join('').toUpperCase()
   }
   console.log(checkPalindrome('hamza'));
   console.log(checkPalindrome('Radar'));

   const sumArray=(sum)=>{
       return sum.reduce((hh,hz)=> hh+hz)
   }
   console.log(sumArray([1, 2, 3, 4, 5, 6]));

//    const checkPrime=(num)=>{
//      for (let i = 2; i < num; i++) {
//          return num%i!==0
//      }
//    }
//    console.log(checkPrime(11));

//    const printPrime=(hh)=>{
//       for (let i = 2; i <hh; i++) {
//           if(hh%i===0){
//               console.log(i+ " is not a prime number");
//           }else{
//               console.log(i + ' is a prime PRIMW');
//           }
          
//       }
//    }

//    printPrime(97)

   //// ROCK PAPAR SCISSOR/////

   const moves= ['rock','paper','scissors']

   const gameLogic={
       'rock':{
           'rock':'tie',
           'paper':false,
           'scissors':true,
       },
       'paper':{
           'rock':true,
           'paper':'tie',
           'scissors':false
       },
       'scissors':{
           'rock':false,
           'paper':true,
           'scissors':'tie'
       }
   }

     function randomMoves(){
         return moves[Math.round(Math.random()*2)]
     }

     function rockPaperScissor(computerMove,userMove){
         if(gameLogic[computerMove][userMove]===true){
             console.log(`${computerMove} beats ${userMove} computer wins`);
         }else if(gameLogic[computerMove][userMove]===false){
             console.log(`${userMove} beats ${computerMove} User wins`);
         }else{
             console.log('tie game');
         }
     }

     let computerMove=randomMoves()
     console.log(computerMove);
     let userMove=randomMoves()

     rockPaperScissor(computerMove,userMove)

