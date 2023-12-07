const themeStorageKey = "theme";

const Theme = {
  normal: "normal",
  light: "light",
  dark: "dark",
};

let theme = Theme.light;

function setTheme(value) {
  theme = value;
  const rootElem = document.documentElement;
  rootElem.setAttribute("data-theme", theme);
  localStorage.setItem(themeStorageKey, theme);
}

function switchTheme() {
  if (theme === Theme.light) {
    setTheme(Theme.dark);
  } else {
    setTheme(Theme.light);
  }
}

function useEffect(callback) {
  callback(); // Simulating the effect by immediately calling the callback
}

// Usage example:
useEffect(function() {
  setTheme(localStorage.getItem(themeStorageKey) || Theme.light);
}, []);

useEffect(function() {
  const rootElem = document.documentElement;
  rootElem.setAttribute("data-theme", theme);
  localStorage.setItem(themeStorageKey, theme);
}, [theme]);