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
    // gtag event click analytics -- just an example
    ga('send', 'event', 'menu', 'open', 'Navbar dropdown');
    headerDropdownButton.classList.add(openDropdownClass);
    headerDropdownContent.classList.add(openDropdownMenu);
  }
});

const searchBarInput = document.querySelector(
  ".search-container input"
);
const searchBarButton = document.querySelector(
  ".search-container button"
);
const searchBarSecondaryIcon = document.querySelector(
  ".search-container i.hidden"
);

const searchContainer = searchBarButton.parentElement;

const hiddenClass = "hidden";

const widthTransitionClass = "search-input-open";

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
