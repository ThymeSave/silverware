import { BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { ingredients } from "../src/public-api";
import * as fs from "fs";

interface Options extends JsonObject {
  target: string;
}

export default createBuilder<Options>((options, context) => {
  return new Promise<BuilderOutput>((resolve, _) => {
    context.reportStatus(`Executing ...`);
    fs.writeFileSync(options.target,JSON.stringify(Object.keys(ingredients)))
    resolve({
      success: true
    })
  });
});
