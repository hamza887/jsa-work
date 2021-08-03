//  console.log('world');

//  console.log("hello this is a nice\n world");
//  console.log('fhdlskfjd');
//  console.log("dlkfj'dfjk'dfsad ");
//  console.log('dkjfhfd"dhfdkl"jd')

//  let hamza='hamza';
//  let index= 4
//  console.log(hamza.charAt(3));

//  console.log(typeof ('jonnu'+ 3))

//  const letters =[
//      ['a','b','c'],
//      ['d','e','f'],
//      ['g','h','i']
//  ]

//  console.log(letters[2][2]);

//  let sei={
//      students: ['hamza','hdlfj'],
//      curriclum:{
//          hard:true,
//          valuable: 'absoluty',
//      }
//  }

//  console.log(sei.curriclum.valuable);

//  let greeting= 'Hi there friend';
//   let gg=greeting.split('  ')
//  console.log(gg);

//  const arr=['hello','hdlfkjd','dhfld'];
//   const arr2= arr.push('jasin');
//   const ia= ['esin','jdlfk','madeline'];
//   const combine= arr.concat(ia);
//   console.log(combine);
//   console.log(arr)
//  let age= 19;
//   if(age<=19){
//       console.log('you are still a teenagerer');

//       console.log('hello world')
//   }else{
//       console.log('you can go in')
//   }


//  for(let i =0;i<=10;i++){
//      console.log(i)
//  }

// for (let i=0;i<=200;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// for(let i=0;i<=100;i++){
//     if(i%5 && i%3){
//         console.log('ia m both 5 and 3');
//     }else if(i%5){
//         console.log('only 5')
//     }else if(i%3){
//         console.log('only 3 ')
//     }
// }

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// wolfy.pop();
// wolfy.push('batrman')
// dart.push('haekins')
// console.log(wolfy)
// console.log(dart);

// wolfy.shift();
// wolfy.unshift('gameboy')
// console.log(wolfy)

// const arr =['dona','leo','rapheal','micheal'];
//   for (const x of arr) {
//       console.log(x.toUpperCase())
//   }

// const arr = ['i am a kity','nuice kitty','written in js','kittyy kitty '];
// let random=  arr[Math.floor(arr.length * Math.random())]
   
//   console.log(random);

//   const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];
    
//     whereIsWaldo.splice(1,1,'hamza');
//     whereIsWaldo[2].splice(2,1,'ehljdl')
//     console.log(whereIsWaldo);
//     console.log(whereIsWaldo[3][1][1])

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// console.log(nums);
// const sortedNums=nums.sort();
nums.sort()
// console.log(nums[Math.round(nums.length/2)-1]);
console.log(nums[Math.round(nums.length/2)-1])