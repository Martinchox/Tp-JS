var input = document.getElementById("myInput");
var disableBtn = document.getElementById("disableBtn");
var enableBtn = document.getElementById("enableBtn");

disableBtn.addEventListener("click", function() {
  input.disabled = true;
  input.style.pointerEvents = "none";
  input.style.cursor = "default";
});

enableBtn.addEventListener("click", function() {
  input.disabled = false;
  input.style.pointerEvents = "auto";
  input.style.cursor = "text";
});
