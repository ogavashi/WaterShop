import createBottle from "./bottleDefaultObject";
import controllPar from "./controller";
import EventObserver from "./observer";
import setPrice from "./price-controller";
import createObject from "./bottle-builder";
import cartModule from "./cart-logic";

const buttonsObserver = new EventObserver();

function allSet(bottle) {
  for (const [key, value] of Object.entries(bottle)) {
    console.log(`${key}: ${value}`);
    if (value == undefined) return false;
  }
  return true;
}

let gtfo;

function subscribeObservers(bottle) {
  const buttons = document.querySelectorAll(".gas-button, .bottle-wrapper, .material-button");
  buttons.forEach((element) => {
    buttonsObserver.subscribe(() => {
      if (element.classList.contains("active")) {
        if (element.classList.contains("gas-button")) {
          bottle.type = element.textContent;
        }
        if (element.classList.contains("material-button")) {
          bottle.material = element.textContent;
        }
        if (element.classList.contains("bottle-wrapper")) {
          bottle.amount = element.textContent;
          bottle.series = element.parentElement.previousSibling.textContent;
          console.log("active:", element);
          gtfo = true;
        }
        console.log("gtfo", gtfo);
        if (!gtfo) bottle.amount = undefined;
        bottle.number = document.querySelector("#input-amount").value;
        const navButtons = document.querySelectorAll(".button-nav");
        console.log(navButtons);
        navButtons.forEach((element) => {
          if (element.classList.contains("active")) {
            bottle.brand = element.textContent;
          }
        });
      }
    });
  });
  return bottle;
}

function addEvent(bottle) {
  const buttons = document.querySelectorAll(".gas-button, .bottle-wrapper, .material-button");
  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      gtfo = false;
      bottle.amount = undefined;
      buttonsObserver.broadcast(element.textContent);
      if (allSet(bottle)) setPrice(bottle);
      else {
        const priceField = document.querySelector(".price-field");
        priceField.textContent = "";
      }
    });
  });
  document.querySelector("#input-amount").addEventListener("change", () => {
    bottle.number = document.querySelector("#input-amount").value;
    if (allSet(bottle)) setPrice(bottle);
  });
  const createButton = document.querySelector(".order-button");
  createButton.addEventListener("click", () => {
    if (allSet(bottle)) {
      cartModule.setItem(createObject(bottle));
      buttons.forEach((element) => {
        if (element.classList.contains("active")) element.classList.remove("active");
      });
      const priceField = document.querySelector(".price-field");
      priceField.textContent = "";
      bottle.amount = undefined;
      bottle.material = undefined;
      bottle.type = undefined;
      for (let i = 0; i < cartModule.getLength(); i++) {
        console.log(cartModule.getitem(i));
      }
    }
  });
}

function obs() {
  const bottle = createBottle();
  const buttons = document.querySelectorAll(".gas-button, .bottle-wrapper, .material-button");
  addEvent(subscribeObservers(bottle));
  console.log(buttonsObserver.observers);
}
export default obs;
