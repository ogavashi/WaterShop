export class AbstractWater {
  constructor(builder) {
    this.brand = builder.brand;
    this.type = builder.type;
    this.bottle = builder.bottle;
    this.price = builder.price; //per bottle
    this.amount = builder.amount;
    this.volume = builder.volume;
  }
}

export class AquaAlex extends AbstractWater {
  constructor(builder) {
    super(builder);
    this.series = builder.series;
  }
}

export class Luzhanska extends AbstractWater {
  constructor(builder) {
    super(builder);
    this.series = builder.series;
  }
}

export class TK extends AbstractWater {
  constructor(builder) {
    super(builder);
    this.series = builder.series;
  }
}

export class Morshinska extends AbstractWater {
  constructor(builder) {
    super(builder);
  }
}

export class WaterBuilder {
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

export class AquaAlexBuilder extends WaterBuilder {
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

export class LuzhanskaBuilder extends WaterBuilder {
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

export class TKBuilder extends WaterBuilder {
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

export class MorshinskaBuilder extends WaterBuilder {
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

export class waterDirector {
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
  createPopularLuzhanska() {
    return new LuzhanskaBuilder(2.0)
      .setSeries("Luzanska 3")
      .setBottle("Plastic")
      .setAmount(1)
      .setType("Nongasified")
      .setPrice("2$")
      .getWater();
  }
  createPopularTK() {
    return new TKBuilder(0.5)
      .setSeries("Shayanska")
      .setBottle("Glass")
      .setAmount(1)
      .setType("Nongasified")
      .setPrice("1$")
      .getWater();
  }
  createPopularMorshinska() {
    return new MorshinskaBuilder(0.5)
      .setBottle("Plastic")
      .setAmount(1)
      .setType("Nongasified")
      .setPrice("4$")
      .getWater();
  }
}

