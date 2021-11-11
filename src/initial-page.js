import loadConstructorPage from "./constructor";
import loadCartPage from "./cart-page";
import cartModule from "./cart-logic";
import createWelcome from "./bottle-welcome";

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const bradfordLogo = document.createElement("img");
  bradfordLogo.setAttribute("id", "main-logo");
  bradfordLogo.src =
    "https://images.squarespace-cdn.com/content/v1/5558b449e4b02de6a6eda24f/1431976056800-0N3XY7YL8W9RVTGT3CFC/Small+Logo.png";

  const bradfordTitle = document.createElement("h1");
  bradfordTitle.setAttribute("id", "main-title");
  bradfordTitle.textContent = "Bradford";
  bradfordTitle.addEventListener("click", () => {
    createWelcome();
  });

  const logoWrapper = document.createElement("div");
  logoWrapper.setAttribute("id", "logo-wrapper");
  logoWrapper.appendChild(bradfordLogo);
  logoWrapper.appendChild(bradfordTitle);
  logoWrapper.addEventListener("click", () => {
    createWelcome();
  });

  const cartIcon = document.createElement("img");
  cartIcon.setAttribute("id", "cart-logo");
  cartIcon.src = "https://cdn-icons-png.flaticon.com/512/263/263142.png";
  cartIcon.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    loadCartPage();
    setActive(cartIcon);
  });

  const cartCounter = document.createElement("div");
  cartCounter.classList.add("cart-conter");
  // cartCounter.innerText = cartModule.getLength();

  const cartWrapper = document.createElement("div");
  cartWrapper.setAttribute("id", "cart-wrapper");
  cartWrapper.appendChild(cartIcon);
  cartWrapper.appendChild(cartCounter);

  header.appendChild(logoWrapper);
  header.appendChild(createNav());
  header.appendChild(cartWrapper);
  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("topnav");

  const aquaAlex = document.createElement("button");
  aquaAlex.textContent = "AquaAlex";
  aquaAlex.classList.add("button-nav", "visible");
  aquaAlex.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(aquaAlex);
    loadConstructorPage("Vershina", "Polyana Kvasova");
  });

  const luzhanska = document.createElement("button");
  luzhanska.textContent = "Luzhanska";
  luzhanska.classList.add("button-nav", "visible");
  luzhanska.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(luzhanska);
    loadConstructorPage("Luzanska 3", "Luzanska 7");
  });

  const shayanska = document.createElement("button");
  shayanska.textContent = "Tsilyshi Krynyci";
  shayanska.classList.add("button-nav", "visible");
  shayanska.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(shayanska);
    loadConstructorPage("Shayanska", "Drugivska");
  });

  const morshynska = document.createElement("button");
  morshynska.textContent = "Morshynska";
  morshynska.classList.add("button-nav", "visible");
  morshynska.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(morshynska);
    loadConstructorPage("Morshynska");
  });

  nav.appendChild(aquaAlex);
  nav.appendChild(luzhanska);
  nav.appendChild(shayanska);
  nav.appendChild(morshynska);

  return nav;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const madeBy = document.createElement("h2");
  madeBy.classList.add("madeBy");
  madeBy.textContent = "Made By Oleg Gavashi";

  const githubLink = document.createElement("a");
  githubLink.classList.add("link");
  githubLink.href = "https://github.com/ogavashi";
  githubLink.textContent = "GitHub";
  githubLink.target = "blank";

  footer.appendChild(madeBy);
  footer.appendChild(githubLink);

  return footer;
}

function setActive(button) {
  const buttons = document.querySelectorAll(".button-nav, #cart-logo");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });
  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("div");
  main.setAttribute("id", "main");
  return main;
}

function buildPage() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  setActive(document.querySelector(".button-nav"));
  loadConstructorPage("Vershina", "Polyana Kvasova");
  cartModule.getLocal();

  const header = document.querySelector(".header");
  const main = document.querySelector("#main");
  const footer = document.querySelector(".footer");

  console.log(header, main, footer);

  window.getComputedStyle(header).opacity;
  header.style.opacity = 1;
  window.getComputedStyle(main).opacity;
  main.style.opacity = 1;
  window.getComputedStyle(footer).opacity;
  footer.style.opacity = 1;
}

export default buildPage;
