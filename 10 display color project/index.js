// button listener
$("#btn").click(function () {
  let inputValue = $("#hexColor").val(colorGenerate());

  $(".display").css({ "background-color": colorGenerate() });
});

// color generate
function colorGenerate() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
