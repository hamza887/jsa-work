const minions = [
	'bob',
	'kevin',
	'stuart',
	'dave',
	'jerry',
	'kevin',
	'mark',
	'tim',
	'phil',
	'carl',
];

 const present= minions.forEach((minion)=>{
     console.log(minion +" - here");
 });

 let captalizeminion= minions.map((hh)=>{
     return hh===('dave')?hh: hh.charAt(0).toUpperCase()+hh.slice(1)
 });
 console.log(captalizeminion);

 let isCaptitalized=(minion)=>{
   return minion[0] === minion[0].toUpperCase()
 }
//  isCaptitalized()

 console.log( captalizeminion.every(isCaptitalized));

 let actuallyCapitalMinions= captalizeminion.filter(isCaptitalized)
 console.log(actuallyCapitalMinions);

  console.log(actuallyCapitalMinions.every(isCaptitalized));

  let uncapitalizedMinion= captalizeminion.find((hh)=>{
      return hh.charAt(0)!=hh.charAt(0).toUpperCase()
  });

  console.log( uncapitalizedMinion );

  let hellofind= captalizeminion.findIndex((hh)=>{
      return hh.charAt(0)!= hh.charAt(0).toUpperCase()
  })
  console.log(hellofind);

 let hamza= captalizeminion[3].toUpperCase();
 console.log(hamza);

 // reduce promtp 7

  let minionNameLength= captalizeminion.map(hh=> hh.length);
  const reducer= (accumulator, currentvalue)=> accumulator+ currentvalue;
  console.log(minionNameLength);
  console.log(minionNameLength.reduce(reducer));

  /// prompt some 8

  const findme= (num)=> num>6 || num>7 ;
 console.log(captalizeminion.some(findme));

 let haa=captalizeminion.sort((minon1,minion2)=>{
       return minon1.length -minion2  
 });
 console.log(haa);



