const parentContainer = document.querySelector(".parent");

const childContainer = document.createElement("div");
childContainer.classList.add("child");
childContainer.innerText = "I am a child";

parentContainer.appendChild(childContainer);

const innerChild = document.createElement("div");
innerChild.classList.add(
  "inner-child",)
innerChild.innerText = "I am an inner child";
childContainer.appendChild(innerChild);