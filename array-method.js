

   const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,0]

   const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


 ///// EVERY // test whether whole array pass the test , returns a Boolean

   const everyNumber=nums.every((hh)=> hh>0);
   console.log(everyNumber);
    
   const shorterWord=panagram.every((hh)=> hh.length<8 );
   console.log(shorterWord);


   ///////////    FILTER Create a new array with all the elemtnst that you want to find, return the rest of the sarray

   const filterArr= nums.filter(hh=> hh<4);
   console.log(filterArr);

   const EvenArr= panagram.filter(hh=> hh.length%2===0)
    console.log(EvenArr);


     //////////  FIND find aparticlullat word or antyhign form an array

     const findDivisible= nums.find(hh=> hh%5===0);
     console.log(findDivisible);

     const findWord=panagram.find(hh=>hh.length>4);
     console.log(findWord);