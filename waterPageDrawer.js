import loadConstructorPage from "./constructor";

function createWaterPage(waterName, imgURL) {
  const WaterPage = document.createElement("div");
  WaterPage.classList.add("water-page");

  const headWrapper = document.createElement("div");
  headWrapper.setAttribute("id", "head-wrapper");

  const head = document.createElement("h1");
  head.classList.add("head-name");
  head.classList.add("text", "fade", "text1");
  headWrapper.appendChild(head);

  const bottleImg = document.createElement("img");
  bottleImg.classList.add("bottle-img");
  bottleImg.classList.add("text", "fade", "text1");

  const content2 = imgURL;
  const content = waterName;
  bottleImg.classList.remove("fade"); // removing the class
  head.classList.remove("fade");
  setTimeout(() => {
    requestAnimationFrame(() => {
      // We are manually adding new content and adding class again to node
      head.textContent = content;
      head.classList.add("fade");
      bottleImg.src = content2;
      bottleImg.classList.add("fade");
    });
  }, 100); // timeout

  const customBottle = document.createElement("button");
  customBottle.setAttribute("id", "custom-bottle");
  customBottle.textContent = "Create custom bottle";
  customBottle.addEventListener("click", () => loadConstructorPage("Vershina", "Polyana Kvasova"));

  WaterPage.appendChild(headWrapper);
  WaterPage.appendChild(bottleImg);
  WaterPage.appendChild(customBottle);

  return WaterPage;
}

function loadWaterPage(waterName, imgURL) {
  const main = document.querySelector("#main");
  main.textContent = "";
  main.appendChild(createWaterPage(waterName, imgURL));
}

export default loadWaterPage;
