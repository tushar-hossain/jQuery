// Login demo project

$("#submitButton").click(function () {
  let pass1 = $("#pass1").val();
  let pass2 = $("#pass2").val();

  if (pass1 !== "" && pass2 !== "") {
    if (pass1 === pass2) {
      alert("successfuly login.");
    } else {
      alert("mismatch password");
    }
  } else {
    alert("Please Enter Passsword.");
  }
});

// Reset button addEventListener
$("#resetButton").click(function () {
  pass1 = $("#pass1").val("");
  pass2 = $("#pass2").val("");
});
