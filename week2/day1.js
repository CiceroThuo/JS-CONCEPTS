/** 
@DOM Manipulation
*@ACCESSING
*query selectors
*document.queryselector

*id selector
*document.getelEmentbyId

*class selector
*document.getelEmentbyClassName

*/

console.log(document.body.children.item(0));
let heading = document.querySelector("#heading");
console.log(document);
heading.style.color = "red";

/** 
@EVENT LISTENERS

*/
let clickMeButton = document.querySelector(".click-me-button");
let paragraph = document.querySelector(".paragraph");
let initialText = paragraph.innerText
console.log(paragraph.innerText)
clickMeButton.addEventListener("click", () => {
 if  (paragraph.innerText === initialText){
   paragraph.innerText =  'Hello World'
 }else
   paragraph.innerText = initialText
})
