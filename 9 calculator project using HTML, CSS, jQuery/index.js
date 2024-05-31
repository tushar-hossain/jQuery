// Calculator Project

let resultField = $("#resultInput");

function resultValue(value) {
  resultField.val(resultField.val() + value);
}
function deleteValue() {
  resultField.val("");
}

function addingValue(value) {
  resultField.val(resultField.val() + value);
}
function result() {
  let result = eval(resultField.val());
  resultField.val(result);
}
function deleteElement() {
  let result = resultField.val();
  if (result !== "") {
    resultField.val(resultField.val().slice(0, -1));
  }
}
