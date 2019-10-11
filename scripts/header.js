const headerDropdownButton = document.querySelector(
  ".header-nav .dropdown-nav-menu"
);
const openDropdownClass = "open";
const openDropdownMenu = "show-dropdown-menu";
const headerDropdownContent = document.querySelector(
  ".header-nav .dropdown-menu"
);

headerDropdownButton.addEventListener("click", () => {
  if (headerDropdownButton.classList.contains(openDropdownClass)) {
    headerDropdownButton.classList.remove(openDropdownClass);
    headerDropdownContent.classList.remove(openDropdownMenu);
  } else {
    headerDropdownButton.classList.add(openDropdownClass);
    headerDropdownContent.classList.add(openDropdownMenu);
  }
});

const searchBarInput = document.querySelector(
  ".header-nav .search-container input"
);
const searchBarButton = document.querySelector(
  ".header-nav .search-container button"
);
const searchBarSecondaryIcon = document.querySelector(
  ".header-nav .search-container i.hidden"
);
const hiddenClass = "hidden";

searchBarButton.addEventListener("click", () => {
  searchBarButton.classList.add(hiddenClass);
  searchBarInput.classList.remove(hiddenClass);
  searchBarSecondaryIcon.classList.remove(hiddenClass);
});

searchBarSecondaryIcon.addEventListener("click", () => {
  searchBarButton.classList.remove(hiddenClass);
  searchBarInput.classList.add(hiddenClass);
  searchBarSecondaryIcon.classList.add(hiddenClass);
});
