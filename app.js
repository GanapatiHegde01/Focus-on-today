const checkboxes = document.querySelectorAll(".checkbox");
const inputFields = document.querySelectorAll(".input-box");
const warning = document.querySelectorAll(".instruction");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    for (let input of inputFields) {
      if (input.value.trim() === "") {
        warning[0].style.display = "block";
         checkbox.parentElement.classList.remove("completed");
      } else {
        checkbox.parentElement.classList.toggle("completed");
      }
    }
  });
});
