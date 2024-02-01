// // //Groupby
// // // let arr =  [
// {name:"James",age : 25,city: "Nairobi"};
// {name:"Jack",age : 30,city: "New york"};
// {name:"Peter",age : 15,city: "Chicago"};
// {name:"John",age : 36,city: "Wisconsin"};
// ];
// //  console.log[arr.groupBy("city"));
// // console.log(arr.groupBy("age"));
// // console.log(arr.groupBy("name"));

// {name:"James",age : 25,city: "Nairobi"};
// {name:"Jack",age : 30,city: "New york"};
// {name:"Peter",age : 15,city: "Chicago"};
// {name:"John",age : 36,city: "Wisconsin"};
// ];

// function groupBy(array, property){
// let groupedItems = {}
// for(const item of array){
//   let val = item[property]
//   if(groupedItems[value]){
//     groupedItems[value] = {}
//   }
//   groupedItems[value].push(item)
// }
// return groupedItems
// }
// console.log(groupBy(a , "city"))


/** 
* @OBJECTS / DICTIONATIES

*/
// let person = {
//   name : "James",	
//   age : 25,
 
//   school : " Zindua School",
//   personalities : ["funny","smart","kind"],
//   stubborn : false,
//   hobbies : {
//    outdoor : ["football","basketball","swimming"],
//     indoor : ["sleeping","eating","watching movies"]
//   },
//   sound : function(){
//   return "I am a human being"	
//   }
// }
// console.table(Obejct.keys(person))
// console.table(Obejct.values(person))

let person =[
  { 
    name:"Alice",
    age : "45",
    city : "Nairobi"
  },
  
  {
     name : "Jack",
     age  : "30",
     city : "New york"
  },
    
  {
     name : "Peter",
     age  :  "15",
     city : "Chicago"
    
  },
  {
    name : "Dan",
    age : "15",
    city : "Chicago"
  },

]
function groupBy(arr,property){
  let grouped = {}
  for(let i = 0; i < people.length; i++){
    let person = arr[i]
    let key =person('city')
    console.log(key)
  }
 
}
const person = 'Dan'
groupBy(people, "city")