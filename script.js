const shareButtons = document.getElementsByClassName("card__button");
const footer = document.getElementById("card__footer");
const footerActive = document.getElementById("card__footer-active");
const toolTip = document.getElementById("card__button-tooltip");

for (var i = 0; i < shareButtons.length; i++) {
  shareButtons[i].addEventListener("click", showFooterActive);
}

function showFooterActive() {
  if (footer.style.display === "none") {
    footer.style.display = "flex";
    footerActive.style.display = "none";
  } else {
    footer.style.display = "none";
    footerActive.style.display = "flex";
  }
}

function show(e) {
  e.lastElementChild.style.display = 'flex';
}

function hide(e) {
  e.lastElementChild.style.display = 'none';
}
