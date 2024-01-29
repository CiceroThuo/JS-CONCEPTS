// //Groupby
// // let arr =  [
{name:"James",age : 25,city: "Nairobi"};
{name:"Jack",age : 30,city: "New york"};
{name:"Peter",age : 15,city: "Chicago"};
{name:"John",age : 36,city: "Wisconsin"};
];
//  console.log[arr.groupBy("city"));
// console.log(arr.groupBy("age"));
// console.log(arr.groupBy("name"));

{name:"James",age : 25,city: "Nairobi"};
{name:"Jack",age : 30,city: "New york"};
{name:"Peter",age : 15,city: "Chicago"};
{name:"John",age : 36,city: "Wisconsin"};
];

function groupBy(array, property){
let groupedItems = {}
for(const item of array){
  let val = item[property]
  if(groupedItems[value]){
    groupedItems[value] = {}
  }
  groupedItems[value].push(item)
}
return groupedItems
}
console.log(groupBy(a , "city"))