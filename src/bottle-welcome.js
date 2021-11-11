import buildPage from "./initial-page";

function createWelcome() {
  const main = document.querySelector("#content");
  console.log(main);
  main.textContent = "";

  const leftWrapper = document.createElement("div");
  leftWrapper.classList.add("left-wrapper");

  const mainLogo = document.createElement("img");
  mainLogo.classList.add("main-logo");
  mainLogo.src = "/main-logo.svg";

  const textWrapper = document.createElement("div");
  textWrapper.classList.add("text-wrapper");

  leftWrapper.appendChild(mainLogo);
  textWrapper.appendChild(createH("Best", "h2"));
  textWrapper.appendChild(createH("Transcarpathian", "h2"));
  textWrapper.appendChild(createH("Water", "h2"));
  textWrapper.appendChild(createH("Bradford", "h1"));
  leftWrapper.appendChild(mainLogo);
  leftWrapper.appendChild(textWrapper);

  const rightWrapper = document.createElement("div");
  rightWrapper.classList.add("right-wrapper");

  const button = document.createElement("div");
  button.classList.add("main-button");
  button.textContent = "Choose your bottle";
  button.addEventListener("click", () => {
    buildPage();
  });

  rightWrapper.appendChild(button);

  const welcomeWrapper = document.createElement("welcome-wrapper");
  welcomeWrapper.classList.add("welcome-wrapper");

  welcomeWrapper.appendChild(leftWrapper);
  welcomeWrapper.appendChild(rightWrapper);

  main.appendChild(welcomeWrapper);

  window.getComputedStyle(welcomeWrapper).opacity;
  welcomeWrapper.style.opacity = 1;
}

function createH(text, h) {
  const header = document.createElement(`${h}`);
  header.classList.add("main-text");
  header.textContent = text;
  return header;
}
export default createWelcome;
