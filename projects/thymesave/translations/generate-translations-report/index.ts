import * as fs from "fs";
import * as Languages from "../src/lib/languages";

import { JsonObject } from '@angular-devkit/core';
import { Builder } from '@angular-devkit/architect/src/internal';
import { BuilderOutput, createBuilder } from '@angular-devkit/architect';

interface Options extends JsonObject {
  target: string;
}

const builderFunction: Builder<Options & JsonObject> = createBuilder<Options>((options, context) => {
  return new Promise<BuilderOutput>((resolve, _) => {
    context.reportStatus(`Executing ...`);
    let translations = new Map<String, String[]>()
    for (const language of Object.keys(Languages)) {
      //@ts-ignore
      for (const key of Object.keys((Languages[language]).ingredients)) {
        let translatedIn = translations.get(key) || []
        translatedIn.push(language)
        translations.set(key, translatedIn)
      }
    }
    fs.writeFileSync(options.target, JSON.stringify(Object.fromEntries(translations)))
    resolve({
      success: true
    })
  });
});

export default builderFunction;
