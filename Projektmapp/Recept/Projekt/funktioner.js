
// Hämtar modalen
var modal = document.getElementById("myModal");
// Hämtar knappen som öppnar Modalen
var btn = document.getElementById("myBtn");
// Hämtar <span> elementet som stänger ner modalen
var span = document.getElementsByClassName("close")[0];
// När knappen trycks öppnar modalen 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
       modal.style.display = "none";
  }
}

//tagen från w3schools (https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp)
function darkMode() {
    var element = document.body;	
	element.classList.toggle("dark-mode");
}