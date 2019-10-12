const openMenuDropdownBtns = document.querySelectorAll(
  "main.menu nav.sidebar > ul > li:nth-child(odd)"
);

const menuDropdownButtons = document.querySelectorAll(
  "main.menu nav.sidebar > ul > li:nth-child(even) > ul > li"
);

const hiddenClassSelector = "hidden";

const openMenuCb = event => {
  let menu =
    event.target.nodeName === "SPAN" || event.target.nodeName === "I"
      ? event.target.parentNode
      : event.target;
  menu = menu.nextElementSibling;
  if (menu.classList.contains(hiddenClassSelector)) {
    menu.classList.remove(hiddenClassSelector);
  } else {
    menu.classList.add(hiddenClassSelector);
  }
};

openMenuDropdownBtns.forEach(button => {
  button.addEventListener("click", openMenuCb);
});

const menuButtonCb = event => {
  if (!event.target.classList.contains("selected")) {
    menuDropdownButtons.forEach(button => {
      if (button.classList.contains("selected")) {
        button.classList.remove("selected");
      }
    });
    event.target.classList.add("selected");
  }
};

menuDropdownButtons.forEach(button =>
  button.addEventListener("click", menuButtonCb)
);
