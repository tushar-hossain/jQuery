// Event Listener

// document.querySelector("button").addEventListener("click", function () {
//   document.querySelector("h1").innerHTML = "You have clicked button";
// });

// $("button").click(function () {
//   $("h1").text("You have clicked button");
// });

// multiple button selector
// let myButton = document.querySelectorAll(".my-button");
// for (i = 0; i <= myButton.length; i++) {
//   myButton[i].addEventListener("click", function () {
//     let text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked";
//   });
// }

$(".my-button").click(function () {
  let value = this.innerText;
  $("h1").text(value + " is clicked");
  // toggle class addEvenListener
  $("h1").toggleClass("style");
});
