$("#basicModal").on("shown.bs.modal");

$("#signUp").onclick = function() {
  var emailValue = '';
  $("#focusedInput").value = emailValue;
  console.log(emailValue);
}
