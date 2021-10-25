window.onload = function () {
  document
    .getElementById("scroll-arrow")
    .addEventListener("click", scrollToWelcome, false);
  document
    .getElementById("burger-icon")
    .addEventListener("click", toggleBurgerMenu, false);
  // initialise first hero image
  document.getElementById("slider-image-1").src = imageSet[0];
};

//image slider stuff
var imageSet = [
  "img/hero_image_one.jpg",
  "img/hero_image_two.jpg",
  "img/hero_image_three.jpg",
];
var index = 0;
var imageToggle = false;

// function to load next image behind
window.nextImage = function () {
  imageToggle = !imageToggle;

  index = (index + 1) % imageSet.length;

  if (imageToggle)
    document.getElementById("slider-image-2").src = imageSet[index];
  else document.getElementById("slider-image-1").src = imageSet[index];
};

// start fade and start timer until next
window.fadeImage = function () {
  if (imageToggle)
    document.getElementById("slider-image-2").style.opacity = "1.0";
  else document.getElementById("slider-image-2").style.opacity = "0.0";
  window.setTimeout(nextImage, 8000);
};

function toggleBurgerMenu() {
  const burgerMenu = document.querySelector(".burger-menu");
  if (burgerMenu.classList.contains("open")) {
    burgerMenu.classList.remove("open");
  } else {
    burgerMenu.classList.add("open");
  }
}

function scrollToWelcome() {
  document.getElementById("welcome").scrollIntoView({
    behavior: "smooth",
  });
}
