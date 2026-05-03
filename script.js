function zmianaStylu() {
  styl = document.getElementById("stylStrony");

  if (stylesheet.getAttribute("href") === "red.css") {
    styl.setAttribute("href", "green.css");
  } else {
    styl.setAttribute("href", "red.css");
  }
}
