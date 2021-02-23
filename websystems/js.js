scrollFunction();
window.onscroll = function() {scrollFunction()};
currentYear();

function scrollFunction() {
  if (document.documentElement.scrollTop > 20 || document.documentElement.scrollTop > 40) {
    document.getElementById("nav").style.backgroundColor = "#212121";
  } else {
    document.getElementById("nav").style.backgroundColor = "transparent";
  }
}

function currentYear(){
  document.getElementById("year").innerHTML = (new Date().getFullYear());
}
