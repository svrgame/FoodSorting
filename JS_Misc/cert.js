var cert = document.getElementById("contain");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var title = document.getElementById("title");
var c3 = document.getElementById("c3");

var bttns = document.getElementById("Bttns");
var printB = document.getElementById("printB");
var gameB = document.getElementById("gameB");
var homeB = document.getElementById("homeB");
printB.addEventListener("click", printPage);

var mascot = document.getElementById("mascot");

var nameField = document.getElementById("name");
var l1 = document.getElementById("l1");
var date = document.getElementById("date");
var l2 = document.getElementById("l2");

var cal = new Date();
date.innerHTML = `${cal.getMonth() + 1}.${cal.getDate()}.${cal.getFullYear()}`;

adjustContent();
function adjustContent() {
  var w = parseInt(window.innerWidth * .80);
  var h = parseInt(w * (10 / 16));
  cert.style.width = `${w}px`;
  cert.style.height = `${h}px`;
  c1.style.fontSize = `${h / 8}px`;
  c2.style.fontSize = `${h / 12}px`;
  title.style.fontSize = `${h / 12}px`;
  c3.style.fontSize = `${h / 15}px`;
  nameField.style.font = `italic bold ${h / 16}px Georgia,serif`;
  nameField.style.width = `${w / 1.5}px`;
  var dim = nameField.getBoundingClientRect();
  l1.style.width = `${dim.right - dim.left}px`;
  date.style.font = `italic bold ${h / 16}px Georgia,serif`;
  l2.style.width = `${(dim.right - dim.left) / 2}px`;

  dim = cert.getBoundingClientRect();
  mascot.style.height = `${h / 4}px`;
  mascot.style.top = `${dim.bottom - 8 - (h / 4)}px`;
  w = (window.innerWidth) / 2;

  mascot.style.left = `${w - (mascot.width / 2)}px`;
  nameField.focus();
}
function printPage() {
  printB.style.display = "none";
  gameB.style.display = "none";
  homeB.style.display = "none";
  adjustContent();
  window.print();
  printB.style.display = "block";
  gameB.style.display = "block";
  homeB.style.display = "block";
}