const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "1") {
    socket.emit("place-order");

    socket.on("redirect", (url) => {
      window.location.href = url;
    })
  } else if (input.value === "99") {
    console.log("checkout order");
  } else if (input.value === "98") {
    console.log("see order history");
  } else if (input.value === "97") {
    console.log("see current order");
  } else if (input.value === "0") {
    console.log("cancel order");
  } else {
    console.log("Not in the option. Please select one of the options!");
  }
})