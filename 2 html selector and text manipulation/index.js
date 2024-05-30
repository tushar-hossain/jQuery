// html selector and text manipulation

// $("h1").text("goodbye");

// $(".my-div h1 ").text("goodbye");

// $("p").text("goodbye");

// $("#head").text("Hi");

// multiple element selected
// $(".my-div h1, #head, p").text("Hi");

// text manipulation
// $("p").html("<b>goodbye</b>");

// some methods using
// => append(), prepend(), after(), before()

// $("p").append(" goodbye");

// $("p").prepend("goodbye ");

// let para = $("<p></p>").text("This is a new paragraph");
// $("#head").after(para);

let para = $("<p></p>").text("This is a new paragraph");
$("p").before(para);
