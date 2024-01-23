//if statements
let school= 'Hello'
if (school === 'Zindua'){ //condition
  console.log('Zindua School')
   
} else {
  console.log('Not Zindua School')
}
/** 
*@LOGICALOPERATORS
*STRICTLYEQUAL-> ===
*AND-> &&
*OR-> || 
*GREATERTHAN-> >
*LESSTHAN-> <
*GREATERTHANOREQUALTO-> >=
*LESSTHANOREQUALTO-> <=  
*NOT-> !
*NOTEQUALTO-> !==
*/
let name = 'James'
//switch statements
switch (name){
  case 'James':
    console.log(' i am James')
    break;
  case 'Jack':
    console.log('i am Jack')
    break;
  default:
    console.log('Not James')
  break;
}
//FUNCTIONS
function consoleHello {//function declaration
  console.log('Hello')//function definition/body
  
}
consoleHello(name)//calling the function/

//FOR LOOPS
for (let i = 0; i < 10; i++){
  console.log(i)
}