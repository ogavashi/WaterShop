let literPrice = { 0.5: 0, 1.5: 1, "2.0": 2, "5.0": 3, 18.9: 5 };
let brandPrice = { AquaAlex: 4, Luzhanska: 3, "Tsilyshi Krynyci": 2, Morshynska: 5 };
let bottlePrice = { Glass: 1, Plastic: 0 };
let gasPrice = { Gasified: 2, Lowgasified: 1, Nongasified: 0 };

function setPrice(bottle) {
  const priceField = document.querySelector(".price-field");

  bottle.price = brandPrice[bottle.brand];
  bottle.price += literPrice[bottle.amount];
  bottle.price += bottlePrice[bottle.material];
  bottle.price += gasPrice[bottle.type];
  bottle.price *= bottle.number;

  priceField.textContent = bottle.price + "$";
  window.getComputedStyle(priceField).opacity;
  priceField.style.opacity = 1;
}
export default setPrice;
