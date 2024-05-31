// Animation (part-1)

// ==> hide(), show(), toggle() methods

// $("#submitBtn").click(function () {
//     $("#my-div").show(2000);
//     $("#my-div").hide(2000);
//     $("#my-div").hide(1000).show(2000);
//   $("#my-div").toggle(2000);
// });

// ==> fadeIn(), fadeOut(), fadetoggle()

// $("#submitBtn").click(function () {
//     $("#my-div").fadeIn(1000);
//     $("#my-div").fadeOut(2000);
//     setInterval(() => {
//       $("#my-div").fadeOut(2000).fadeIn(2000);
//     }, 1000);
//   $("#my-div").fadeToggle(2000);
// });

// ==> slideUp(), slideDown(), slidetoggle()

$("#submitBtn").click(function () {
  //   $("#my-div").slideUp(2000);
  //   $(selector).slideDown();
  // $("#my-div").slideUp(2000).slideDown(2000);
  $("#my-div").slideToggle(3000);
});
