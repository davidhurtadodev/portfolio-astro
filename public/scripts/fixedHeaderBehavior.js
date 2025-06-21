let lastScrollPosition = window.pageYOffset;

const header = document.querySelector("header");

document.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  if (lastScrollPosition < currentScrollPosition) {
    header.classList.remove("fixed");
    header.style.top = "-100px";
  } else {
    header.classList.add("fixed");
    header.style.top = "0px";
  }
  lastScrollPosition = currentScrollPosition;
});
