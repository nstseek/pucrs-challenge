const headerDropdownButton = document.querySelector(
  ".nav-items .dropdown-nav-menu"
);
const openDropdownClass = "open";
const openDropdownMenu = "show-dropdown-menu";
const headerDropdownContent = document.querySelector(
  ".nav-items .dropdown-menu"
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
  ".nav-items .search-container input"
);
const searchBarButton = document.querySelector(
  ".nav-items .search-container button"
);
const searchBarSecondaryIcon = document.querySelector(
  ".nav-items .search-container i.hidden"
);

const searchContainer = searchBarButton.parentElement;

const hiddenClass = "hidden";

const widthTransitionClass = 'search-input-open';

searchBarButton.addEventListener("click", () => {
  searchBarButton.classList.add(hiddenClass);
  searchContainer.classList.add(widthTransitionClass);
  searchBarInput.classList.remove(hiddenClass);
  searchBarSecondaryIcon.classList.remove(hiddenClass);
});

searchBarSecondaryIcon.addEventListener("click", () => {
  searchBarButton.classList.remove(hiddenClass);
  searchContainer.classList.remove(widthTransitionClass);
  searchBarInput.classList.add(hiddenClass);
  searchBarSecondaryIcon.classList.add(hiddenClass);
});
