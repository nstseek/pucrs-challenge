new WOW().init();

const gradient = document.querySelector("body > section.gradient");

const navBar = document.querySelector("body > nav");

const hideNavBar = "hide";

const threshold = 100;

window.onscroll = () => {
  if (
    window.pageYOffset > (gradient.offsetTop - threshold) &&
    window.pageYOffset < (gradient.offsetTop - threshold) + gradient.clientHeight &&
    !navBar.classList.contains(hideNavBar)
  ) {
    navBar.classList.add(hideNavBar);
  } else if (
    (window.pageYOffset < (gradient.offsetTop - threshold) &&
      navBar.classList.contains(hideNavBar)) ||
    (window.pageYOffset > (gradient.offsetTop - threshold) + gradient.clientHeight &&
      navBar.classList.contains(hideNavBar))
  ) {
    navBar.classList.remove(hideNavBar);
  }
};
