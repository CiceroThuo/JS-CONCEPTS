document.querySelector(".Parent-container").addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    let subContainer = e.target.nextElementSibling;
    if (subContainer.classList.contains("hidden")) {
      subContainer.classList.remove("hidden");
    } else {
      subContainer.classList.add("hidden");
    }
  }
});

/** 
*@NAMING RULES
*PascalCase -> ThisIsPascalCase
*camelCase -> thisIsCamelCase
*snak_case -> this_is_snake_case
*kebab-case -> this-is-kebab-case
*/