// Sticky navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector(".container-navbar");
  header.classList.toggle("sticky", window.scrollY > 100);
  // efek section meaning
  const meaning = document.querySelector(".svg-meaning");
  meaning.classList.toggle("scrollEfek", window.scrollY > 200);
  meaning.classList.toggle("efekBalik", window.scrollY < 210);
  const teks = document.querySelector(".section-meaning-elemens");
  teks.classList.toggle("scrollEfek", window.scrollY > 200);

});

// hide navbar
const header = document.querySelector(".container-navbar");

let lastScrollY = 0;
window.addEventListener("scroll", function () {
  showButtonUp();
  const currentScroll = this.scrollY;
  header.classList.toggle("hide-nav", window.scrollY > lastScrollY);
  lastScrollY = currentScroll;
});

function showButtonUp() {
  if (window.scrollY > 300) {
    buttonUp.classList.add("effect-buttonUp");
  } else {
    buttonUp.classList.remove("effect-buttonUp");
  }
}

// efek button up
const buttonUp = document.querySelector(".button-up");
buttonUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const buttonMeaning = document.querySelector(".button-meaning");
buttonMeaning.addEventListener("click", () => {
  document.getElementById("target-meaning").scrollIntoView({
    behavior: "smooth",
  });
});
