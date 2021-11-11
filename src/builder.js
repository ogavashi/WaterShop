function createBuilderBlock() {
  const builderWrapper = document.createElement("div");
  builderWrapper.classList.add("builder-wrapper");

  const title = document.createElement("h2");
  title.innerText = "Available options";
  title.classList.add("builder-title");

  const gasWrapper = document.createElement("div");
  gasWrapper.classList.add("gas-wrapper");

  const gasified = document.createElement("div");
  gasified.classList.add("gas-button");
  gasified.setAttribute("id", "gasified");
  gasified.innerText = "Gasified";

  const nonGasified = document.createElement("div");
  nonGasified.classList.add("gas-button");
  nonGasified.setAttribute("id", "nonGasified");
  nonGasified.innerText = "Nongasified";

  const lowGasified = document.createElement("div");
  lowGasified.classList.add("gas-button");
  lowGasified.setAttribute("id", "LowGasified");
  lowGasified.innerText = "Lowgasified";

  gasWrapper.appendChild(gasified);
  gasWrapper.appendChild(nonGasified);
  gasWrapper.appendChild(lowGasified);

  const materialWrapper = document.createElement("div");
  materialWrapper.classList.add("material-wrapper");

  const glassButton = document.createElement("div");
  glassButton.classList.add("material-button");
  glassButton.setAttribute("id", "glass");
  glassButton.innerText = "Glass";

  const plasticButton = document.createElement("div");
  plasticButton.classList.add("material-button");
  plasticButton.setAttribute("id", "plastic");
  plasticButton.innerText = "Plastic";

  materialWrapper.appendChild(glassButton);
  materialWrapper.appendChild(plasticButton);

  const verticalWrapper = document.createElement("div");
  verticalWrapper.classList.add("vertical-wrapper");

  const amountWrapper = document.createElement("div");
  amountWrapper.classList.add("amount-wrapper");

  const inputAomount = document.createElement("input");
  inputAomount.type = "number";
  inputAomount.setAttribute("id", "input-amount");
  amountWrapper.appendChild(inputAomount);
  inputAomount.defaultValue = 1;
  inputAomount.min = 1;
  inputAomount.max = 1000;

  verticalWrapper.appendChild(materialWrapper);
  verticalWrapper.appendChild(amountWrapper);

  const totalPriceWrapper = document.createElement("div");
  totalPriceWrapper.classList.add("price-wrapper");

  const price = document.createElement("div");
  price.classList.add("price-field");
  price.textContent = "10$";

  const orderButton = document.createElement("div");
  orderButton.classList.add("order-button");
  orderButton.textContent = "Confirm";

  totalPriceWrapper.appendChild(price);
  totalPriceWrapper.appendChild(orderButton);

  builderWrapper.appendChild(title);
  builderWrapper.appendChild(gasWrapper);
  builderWrapper.appendChild(verticalWrapper);
  builderWrapper.appendChild(totalPriceWrapper);
  return builderWrapper;
}
export default createBuilderBlock;
