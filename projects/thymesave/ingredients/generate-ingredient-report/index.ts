import * as fs from "fs";

import { JsonObject } from '@angular-devkit/core';
import { Builder } from '@angular-devkit/architect/src/internal';
import { BuilderOutput, createBuilder } from '@angular-devkit/architect';

import { ingredients } from "../src/public-api";

interface Options extends JsonObject {
  target: string;
}

const builderFunction: Builder<Options & JsonObject> = createBuilder<Options>((options, context) => {
  return new Promise<BuilderOutput>((resolve, _) => {
    context.reportStatus(`Executing ...`);
    fs.writeFileSync(options.target, JSON.stringify(Object.keys(ingredients)))
    resolve({
      success: true
    })
  });
});

export default builderFunction;
