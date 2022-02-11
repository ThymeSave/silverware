import ingredients from "./ingredients";

describe("blub", () => {
  it("ingredients", () => {
    for (let key in ingredients) {
     console.log(`| "${key}": ["${key.split("_").join(" ")}"],`)
    }
  })
})
