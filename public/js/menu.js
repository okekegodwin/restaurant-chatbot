const socket = io();

const food = document.querySelectorAll(".jollof");
const form = document.getElementById("form");
const input = document.getElementById("input");

// const foodName = food.innerHTML;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "a") {
    console.log(food);
  }
})