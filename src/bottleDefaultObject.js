import createBuilderBlock from "./builder";

function Bottle(brand, series, material, type, amount, price = 1, number) {
  this.brand = brand;
  this.series = series;
  this.material = material;
  this.type = type;
  this.amount = amount;
  this.price = price;
  this.number = number;
}

function createBottle() {
  return new Bottle();
}

export default createBottle;
