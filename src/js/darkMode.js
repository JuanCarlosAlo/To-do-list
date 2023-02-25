const headerElement = document.getElementById("header");

const darkModeOn = (darkMode) => {
  document.body.classList.toggle("body--dark");
  if (document.body.classList.contains("body--dark")) {
    darkMode.src = "../assets/images/icon-moon.svg";
    headerElement.style.backgroundImage =
      "url(../assets/images/bg-desktop-dark.jpg)";
  } else {
    darkMode.src = "../assets/images/icon-sun.svg";
    headerElement.style.backgroundImage =
      "url(../assets/images/bg-desktop-light.jpg)";
  }
};

export { darkModeOn };
