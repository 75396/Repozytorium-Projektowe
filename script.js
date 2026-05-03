function zmianaStylu() {
  styl = document.getElementById("stylStrony");

  if (stylesheet.getAttribute("href") === "red.css") {
    stylesheet.setAttribute("href", "green.css");
  } else {
    stylesheet.setAttribute("href", "red.css");
  }
}
