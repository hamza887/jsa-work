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

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// // console.log(nums);
// // const sortedNums=nums.sort();
// nums.sort()
// // console.log(nums[Math.round(nums.length/2)-1]);
// console.log(nums[Math.round(nums.length/2)-1]);

const pali=(num)=>{
    const reverse= num.split('').reverse().join('')
    return (num===reverse)?true:false
}

console.log(pali('racecar'));

const square=(num)=>{
     return Math.pow(num,3)
}
 console.log(square(2));

 const minusone =(num)=>{
     return (typeof num==='number')?num-1:num;
 }
 console.log(minusone('kdhfld'));


 const makeSentence =(str1, str2, str3)=>{
         console.log(`oh boy ${str1} ${str2} and i also ${str3}`)
 }
   makeSentence('hello','ia m','hamza');

   const getLastElement=(arr)=>{
       return arr.pop();
   }
   console.log(getLastElement([[1, 2, 3], [4, 5, 6]]) );

   const divideThreeNums =(num1,num2,num3)=>{
       return (num1*num3)/num2
   }
    console.log(divideThreeNums(10,5,2));
    console.log(divideThreeNums(30,2,9));

    const captalize=(str)=>{
        return str
        .toLowerCase()
        .split(' ')
        .map(word=> word.charAt(0).toUpperCase()+ word.slice(1))
        .join(' ')
    }
    console.log( captalize('hello i am HAmza'));

    const hellostring=(num1,num2,num3)=>{
      const convert= num1+num2+num3;
      return convert.toString()
    }
    console.log(hellostring(2,4,4));

///// week 1 day 4

const sayHello =()=>{
    return 'hello world'
}
 console.log( sayHello())


 const printMessage= (message)=>{
     return message
 }
 console.log(printMessage('hello'));

 const getSquare=(a)=>{
    return a**2
 }
 console.log(getSquare(2));

 const reverseMessage =(message)=>{
     return message.split('').reverse().join('');
 }
 
 console.log( reverseMessage('hello'));

 const multiply =(a,b=2)=>{
    return a*b
 }
 console.log(multiply(2, 5));
  // should return 10
console.log(multiply(3)); 
//should return 6
const makePerson=(firstname,lastname)=>{
   return {'firstname':firstname,'lastname':lastname}
}

console.log(makePerson('hamza','hell'));

let sum=0;
const addtosum=(num)=>{
    let sume=0;
    return sum +=num
}
addtosum(30)
addtosum(5)
console.log(addtosum(-6));

 const getArraySum=(arr)=>{
  let sum=0;
  for (let i = 0; i < arr.length; i++) {
      sum =sum +arr[i]
  }
  return sum
 }
console.log(getArraySum([23, 25, -46, 7, 123]));


const arrayiflyString=(string)=>{
    return string.split(' ')
}
console.log(arrayiflyString('Hello I am hamza'));

/** Starter Code */
function add(a, b) {
    return a + b;
  }
  
  /** Your Solution */
  function myFunction(func, arg1, arg2) {
    if(func===add){
        return add(arg1,arg2)
    }
  }

  const testfunc=()=>{
      return function(){
          return 'this works'
      }
  }
  console.log(testfunc()());

  const numbers=1;
  const num2=2;
  const num3=3
  const helo=Math.max(numbers,num2,num3);

   console.log(helo);
   const arrmath=[2,3,4,5,67,5]

   console.log(Math.max(...arrmath));

  const programminglanguages=['java','es6','python','hello'];

 const programs=(pro)=>{
     pro.forEach((hello)=>{
         console.log('hello this is  '+ hello.toUpperCase())
     })
 }
 programs(['java','es6','python','hello']);

 const hnumbers = [
	15,
	18,
	3921,
	327,
	88,
	1235,
	1,
	55855,
	34,
	5,
	9,
	9019,
	156,
	874,
	76,
	444,
	12346,
];

 const newsquare= hnumbers.map(hh=> console.log(Math.pow(hh,2)))

 const newfilter=hnumbers.filter(hh=> hh<10).join('');
//  newfilter.join('')
  console.log(newfilter);

  const findnumbers=hnumbers.find(hh=> hh<10);
  console.log(findnumbers);

  const instructors = [
	{
		name: 'Madeline',
		location: 'Los Angeles',
		likes: ['coding', 'e-commerce', 'software engineering'],
	},
	{
		name: 'Esin',
		location: 'Austin',
		likes: ['cats', 'software development', 'avocados'],
	},
	{
		name: 'Mathilda',
		location: 'Boston',
		likes: ['algorithms', 'chess', 'WSL'],
	},
	{
		name: 'Paul',
		location: 'Atlanta',
		likes: ['coding', 'JavaScript', 'teaching'],
	},
];

const ia= instructors.map(hh=>console.log(`Hello ${hh.name} ! How are you today`));
const likes= instructors.map(hh=>console.log(`Do you like ${hh.likes[0]} or ${hh.likes[1]} better`))
  