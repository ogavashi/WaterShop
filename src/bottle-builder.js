import { AquaAlexBuilder, Morshinska } from "./object-logic";
import { LuzhanskaBuilder } from "./object-logic";
import { TKBuilder } from "./object-logic";
import { MorshinskaBuilder } from "./object-logic";

function createObject(tempBottle) {
  const brand = tempBottle.brand;
  console.log("2rfwef", brand);
  if (brand == "AquaAlex") {
    return new AquaAlexBuilder(tempBottle.amount)
      .setAmount(tempBottle.number)
      .setPrice(tempBottle.price)
      .setSeries(tempBottle.series)
      .setBottle(tempBottle.material)
      .setType(tempBottle.type)
      .getWater();
  }
  if (brand == "Luzhanska") {
    return new LuzhanskaBuilder(tempBottle.amount)
      .setAmount(tempBottle.number)
      .setPrice(tempBottle.price)
      .setSeries(tempBottle.series)
      .setBottle(tempBottle.material)
      .setType(tempBottle.type)
      .getWater();
  }
  if (brand == "Tsilyshi Krynyci") {
    return new TKBuilder(tempBottle.amount)
      .setAmount(tempBottle.number)
      .setPrice(tempBottle.price)
      .setSeries(tempBottle.series)
      .setBottle(tempBottle.material)
      .setType(tempBottle.type)
      .getWater();
  }
  if (brand == "Morshynska") {
    return new MorshinskaBuilder(tempBottle.amount)
      .setAmount(tempBottle.number)
      .setPrice(tempBottle.price)
      .setBottle(tempBottle.material)
      .setType(tempBottle.type)
      .getWater();
  }
}

export default createObject;
