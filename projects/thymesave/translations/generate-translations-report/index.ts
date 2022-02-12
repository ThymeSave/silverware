import { BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import * as Languages from "../src/lib/languages";
import * as fs from "fs";

interface Options extends JsonObject {
  target: string;
}

export default createBuilder<Options>((options, context) => {
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
    fs.writeFileSync(options.target,JSON.stringify(Object.fromEntries(translations)))
    resolve({
      success: true
    })
  });
});
