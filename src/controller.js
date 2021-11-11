function controllPar(button) {
  const bottles = document.querySelectorAll(".bottle-wrapper");
  const gasButtons = document.querySelectorAll(".gas-button");
  const materialButtons = document.querySelectorAll(".material-button");
  const title1 = document.querySelector("#title1");
  let title2 = document.querySelector("#title2");

  if (title2 == null) title2 = "";

  let param1, param2;

  gasButtons.forEach((element) => {
    if (element.classList.contains("active")) param1 = element.textContent;
  });

  materialButtons.forEach((element) => {
    if (element.classList.contains("active")) param2 = element.textContent;
  });

  bottles.forEach((element, index) => {
    if (title1.textContent == "Luzanska 3" && param1 == "Nongasified") {
      element.style = "filter: grayscale(100%); pointer-events: none;";
      element.classList.remove("active");
    } else if (title2.textContent == "Polyana Kvasova" && param1 == "Nongasified" && index > 4) {
      element.style = "filter: grayscale(100%); pointer-events: none";
      element.classList.remove("active");
    } else if (
      (param1 == "Gasified" || param1 == "Lowgasified") &&
      parseFloat(element.lastChild.textContent) > 2.0
    ) {
      element.style = "filter: grayscale(100%); pointer-events: none";
      element.classList.remove("active");
    } else if (param2 == "Glass" && parseFloat(element.lastChild.textContent) > 0.5) {
      element.style = "filter: grayscale(100%); pointer-events: none";
      element.classList.remove("active");
    } else element.style = "";
  });
}
export default controllPar;
