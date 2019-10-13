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

const menuViews = document.querySelectorAll(
  "main.menu > div.container-menu > div.content > div.menu-content"
);

const menuButtonCb = event => {
  if (!event.target.classList.contains("selected")) {
    menuDropdownButtons.forEach(button => {
      if (button.classList.contains("selected")) {
        button.classList.remove("selected");
      }
    });
    event.target.classList.add("selected");
    const buttonAttr = event.target.getAttribute("data-target");
    menuViews.forEach(div => {
      console.log(div);
      if (
        div.getAttribute("data-target") === buttonAttr &&
        div.classList.contains(hiddenClassSelector)
      ) {
        div.classList.remove(hiddenClassSelector);
      } else if (
        div.getAttribute("data-target") !== buttonAttr &&
        !div.classList.contains(hiddenClassSelector)
      ) {
        div.classList.add(hiddenClassSelector);
      }
    });
  }
};

menuDropdownButtons.forEach(button =>
  button.addEventListener("click", menuButtonCb)
);

const menuInsideButtons = document.querySelectorAll(
  "main.menu > div.container-menu > div.content > div.menu-content > div.buttons > button"
);

const insideButtonCb = event => {
  if (!event.target.classList.contains("selected")) {
    const insideViews = event.target.parentElement.parentElement.querySelectorAll(
      "div.menu-selected-content"
    );
    const innerScopeButtons = event.target.parentElement.children;
    console.log(innerScopeButtons);
    for (let i = 0; i < innerScopeButtons.length; i++) {
      innerScopeButtons[i].classList.contains("selected")
        ? innerScopeButtons[i].classList.remove("selected")
        : "";
    }
    event.target.classList.add("selected");
    insideViews.forEach(view => {
      if (
        view.getAttribute("data-target") !==
          event.target.getAttribute("data-target") &&
        !view.classList.contains(hiddenClassSelector)
      ) {
        view.classList.add(hiddenClassSelector);
      } else if (
        view.getAttribute("data-target") ===
          event.target.getAttribute("data-target") &&
        view.classList.contains(hiddenClassSelector)
      ) {
        view.classList.remove(hiddenClassSelector);
      }
    });
  }
};

menuInsideButtons.forEach(button =>
  button.addEventListener("click", insideButtonCb)
);
