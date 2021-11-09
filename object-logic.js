class AbstractWater {
  constructor(builder) {
    this.brand = builder.brand;
    this.series = builder.series;
    this.type = builder.type;
    this.bottle = builder.bottle;
    this.price = builder.price; //per bottle
    this.amount = builder.amount;
    this.volume = builder.volume;
  }
}

class AquaAlex extends AbstractWater {
  constructor(builder) {
    super(builder);
  }
}

class Luzhanska extends AbstractWater {
  constructor(builder) {
    super(builder);
  }
}

class TK extends AbstractWater {
  constructor(builder) {
    super(builder);
  }
}

class Morshinska extends AbstractWater {
  constructor(builder) {
    super(builder);
  }
}

class WaterBuilder {
  constructor(volume) {
    this.volume = volume;
  }
  setAmount(amount) {
    this.amount = amount;
    return this;
  }
  setBottle(bottle) {
    this.bottle = bottle;
    return this;
  }
  setPrice(price) {
    this.price = price;
    return this;
  }
  setType(type) {
    this.type = type;
    return this;
  }
  getWater() {
    throw new Error(`В ${this.constructor.name} no method getWater()`);
  }
}

class AquaAlexBuilder extends WaterBuilder {
  constructor(volume) {
    super(volume);
    this.brand = "Aqua Alex";
  }
  setSeries(series) {
    this.series = series;
    return this;
  }
  getWater() {
    if (!this.volume) {
      throw new Error(`${this.constructor.name} invalid volume!@`);
    }
    return new AquaAlex(this);
  }
}

class LuzhanskaBuilder extends WaterBuilder {
  constructor(volume) {
    super(volume);
    this.brand = "Luzhanska";
  }
  setSeries(series) {
    this.series = series;
    return this;
  }
  getWater() {
    if (!this.volume) {
      throw new Error(`${this.constructor.name} invalid volume!@`);
    }
    return new Luzhanska(this);
  }
}

class TKBuilder extends WaterBuilder {
  constructor(volume) {
    super(volume);
    this.brand = "Tsilyshi Krynyci";
  }
  setSeries(series) {
    this.series = series;
    return this;
  }
  getWater() {
    if (!this.volume) {
      throw new Error(`${this.constructor.name} invalid volume!@`);
    }
    return new TK(this);
  }
}

class MorshinskaBuilder extends WaterBuilder {
  constructor(volume) {
    super(volume);
    this.brand = "Morshinska";
  }
  getWater() {
    if (!this.volume) {
      throw new Error(`${this.constructor.name} invalid volume!@`);
    }
    return new Morshinska(this);
  }
}

class waterDirector {
  constructor() {}
  createPopularAquaAlex() {
    return new AquaAlexBuilder(1.5)
      .setSeries("Vershyna")
      .setBottle("Plastic")
      .setAmount(1)
      .setType("Nongasified")
      .setPrice("3$")
      .getWater();
  }
}

function createBottle() {
  const bottle = new waterDirector().createPopularAquaAlex();

  console.log(bottle);
}

export default createBottle;
