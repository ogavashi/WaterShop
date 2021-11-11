import createBuilderBlock from "./builder";
import controllPar from "./controller";
import obs from "./creation-controller";

function createConstructorPage(category1, category2) {
  const constructorPage = document.createElement("div");
  constructorPage.classList.add("constructor-page");

  const pictureMenuWrapper = document.createElement("div");
  pictureMenuWrapper.classList.add("picture-menu-wrapper");

  const allCardsWrapper = document.createElement("div");
  allCardsWrapper.classList.add("all-cards-wrapper");

  const card1Wrapper = document.createElement("div");
  card1Wrapper.classList.add("card1-wrapper");

  const card1 = document.createElement("div");
  card1.classList.add("card");
  card1.setAttribute("id", "card-1");

  const title1 = document.createElement("h2");
  title1.textContent = category1;
  title1.setAttribute("id", "title1");

  card1.appendChild(createBottle("0.5", "0-5"));
  card1.appendChild(createBottle("1.5", "1-5"));
  card1.appendChild(createBottle("2.0", "2-0"));

  if (category1 == "Vershina" || category1 == "Morshynska" || category1 == "Shayanska") {
    card1.appendChild(createBottle("5.0", "5-0"));
    card1.appendChild(createBottle("18.9", "18-9"));
  }
  card1Wrapper.appendChild(title1);
  card1Wrapper.appendChild(card1);
  allCardsWrapper.appendChild(card1Wrapper);

  if (category2 !== undefined || category2 == "Drugivska") {
    const card2Wrapper = document.createElement("div");
    card2Wrapper.classList.add("card2-wrapper");

    const card2 = document.createElement("div");
    card2.classList.add("card");
    card2.setAttribute("id", "card-2");

    const image2 = document.createElement("img");
    image2.classList.add("constructor-img");
    image2.src = "/123.png";

    const title2 = document.createElement("h2");
    title2.textContent = category2;
    title2.setAttribute("id", "title2");
    console.log(category2);

    card2.appendChild(createBottle("0.5", "0-5"));
    card2.appendChild(createBottle("1.5", "1-5"));
    card2.appendChild(createBottle("2.0", "2-0"));

    if (category2 == "Drugivska") {
      card2.appendChild(createBottle("5.0", "5-0"));
      card2.appendChild(createBottle("18.9", "18-9"));
    }

    card2Wrapper.appendChild(title2);
    card2Wrapper.appendChild(card2);
    allCardsWrapper.appendChild(card2Wrapper);
  }

  pictureMenuWrapper.appendChild(allCardsWrapper);

  constructorPage.appendChild(pictureMenuWrapper);
  constructorPage.appendChild(createBuilderBlock());

  return constructorPage;
}

function createBottle(liter, url) {
  const bottleWrapper = document.createElement("div");
  bottleWrapper.classList.add("bottle-wrapper");
  const big = document.createElement("img");
  big.classList.add("constructor-img");
  big.src = `https://www.shmv.com.ua/images/tara/${url}.png`;
  const bottleLiter = document.createElement("h2");
  bottleLiter.classList.add("bottle-liter");
  bottleLiter.textContent = liter;
  bottleWrapper.appendChild(big);
  bottleWrapper.appendChild(bottleLiter);
  return bottleWrapper;
}

function setActive(button) {
  const buttons = document.querySelectorAll(`.${button.className}`);
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });
  button.classList.add("active");
}

function giveActive(gasButtons) {
  gasButtons.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.classList.contains("active")) return;
      setActive(element);
    });
  });
}

function controllButtons(buttons) {
  buttons.forEach((element) => {
    element.addEventListener("click", (e) => {
      controllPar(e.target);
    });
  });
}

function loadConstructorPage(category1, category2) {
  const main = document.querySelector("#main");
  main.textContent = "";
  main.appendChild(createConstructorPage(category1, category2));
  const wrappers = document.querySelectorAll(".bottle-wrapper");
  giveActive(wrappers);

  const gasButtons = document.querySelectorAll(".gas-button");
  giveActive(gasButtons);

  const materialButtons = document.querySelectorAll(".material-button");
  giveActive(materialButtons);

  controllButtons(gasButtons);
  controllButtons(materialButtons);

  obs();


  window.getComputedStyle(document.querySelector(".all-cards-wrapper")).opacity;
  document.querySelector(".all-cards-wrapper").style.opacity = 1;
}

export default loadConstructorPage;
