//Selecting popup button
var popupoverlay = document.querySelector(".popup-overlay");
var poupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  poupbox.style.display = "block";
});

//Cancelling popup button
var cancelpopup = document.getElementById("cancel-popup");

cancelpopup.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  poupbox.style.display = "none";
});

//Selecting Container

var container = document.querySelector(".container");
var addnote = document.getElementById("add-note");
var notetitleinput = document.getElementById("note-title-input");
var notetopicsinput = document.getElementById("note-topics-input");
var notesinput = document.getElementById("notes-input");

addnote.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "note-container");
  div.innerHTML = `<h2>${notetitleinput.value}</h2>
        <h4>${notetopicsinput.value}</h4>
        <p>${notesinput.value}</p>
        <button onclick="deletenote(event)">Delete</button>`;
  container.append(div);
});

//Delete nutton
function deletenote(event) {
  event.target.parentElement.remove();
}
