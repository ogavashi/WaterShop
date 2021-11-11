import loadConstructorPage from "./constructor";
import cartModule from "./cart-logic";

const tableHeaders = ["Brand", "Series", "Type", "Bottle", "Volume", "Amount", "Price"];

function drawCartArea() {
  const cartArea = document.querySelector(".cart-area");
  cartArea.innerHTML = "";
  if (cartModule.getLength() == 0) {
    const nothing = document.createElement("h1");
    nothing.classList.add("nothing");
    nothing.textContent = "Your cart is empty";

    cartArea.appendChild(nothing);
  } else {
    cartArea.appendChild(createTable());
    cartArea.appendChild(createConfirm());
    window.getComputedStyle(document.querySelector(".total-sum")).opacity;
    document.querySelector(".total-sum").style.opacity = 1;
  }
  window.getComputedStyle(cartArea).opacity;
  cartArea.style.opacity = 1;
}

function createConfirm() {
  const confirmButton = document.createElement("div");
  confirmButton.classList.add("confirm-button");
  confirmButton.textContent = "Confirm";
  confirmButton.addEventListener("click", () => {
    cartModule.emptyCart();
    const finalMessage = document.createElement("h1");
    finalMessage.textContent = "Thank you for the order!";
    finalMessage.classList.add("final-message");
    document.querySelector(".cart-area").innerHTML = "";
    document.querySelector(".cart-area").appendChild(finalMessage);
    window.getComputedStyle(document.querySelector(".final-message")).opacity;
    document.querySelector(".final-message").style.opacity = 1;
  });

  const totalSum = document.createElement("span");
  totalSum.classList.add("total-sum");
  totalSum.textContent = "Your total: " + cartModule.totalSum() + "$";

  const finalWrapper = document.createElement("div");
  finalWrapper.classList.add("final-wrapper");

  finalWrapper.appendChild(totalSum);
  finalWrapper.appendChild(confirmButton);

  return finalWrapper;
}

function makeArrya(bottle) {
  const params = [];

  params.push(bottle.brand);
  params.push(bottle.series);
  params.push(bottle.type);
  params.push(bottle.bottle);
  params.push(bottle.volume);
  params.push(bottle.amount);
  params.push(bottle.price);

  return params;
}

function createTable() {
  const tableWrapper = document.createElement("div");
  tableWrapper.classList.add("table-wrapper");

  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  for (let i = 0; i < cartModule.getLength(); i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      const td = document.createElement("td");

      td.appendChild(document.createTextNode(makeArrya(cartModule.getitem(i))[j]));
      tr.appendChild(td);
    }
    const td = document.createElement("td");
    td.appendChild(document.createTextNode("X"));
    td.classList.add("remove-button");
    td.setAttribute("index", `${i}`);
    td.addEventListener("click", () => {
      cartModule.removeElement(td.getAttribute("id"));
      drawCartArea();
    });
    tr.appendChild(td);
    tableBody.appendChild(tr);
  }

  const thead = document.createElement("thead");
  table.appendChild(thead);
  for (let i = 0; i < tableHeaders.length; i++) {
    thead
      .appendChild(document.createElement("th"))
      .appendChild(document.createTextNode(tableHeaders[i]));
  }
  table.appendChild(tableBody);
  tableWrapper.appendChild(table);
  return tableWrapper;
}

function loadCartPage() {
  const main = document.querySelector("#main");
  main.textContent = "";
  console.log(main);

  const cartPage = document.createElement("div");
  cartPage.classList.add("cart-page");
  main.appendChild(cartPage);

  const cartWrapper = document.createElement("div");
  cartWrapper.classList.add("cart-wrapper");

  const cartArea = document.createElement("div");
  cartArea.classList.add("cart-area");

  cartWrapper.appendChild(cartArea);
  cartPage.appendChild(cartWrapper);

  drawCartArea();

  window.getComputedStyle(cartWrapper).opacity;
  cartWrapper.style.opacity = 1;
}
export default loadCartPage;
