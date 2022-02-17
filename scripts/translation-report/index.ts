const fs = require("fs");
const Handlebars = require("handlebars")
const translationsPath = "/tmp/translations.json";
const ingredientsPath = "/tmp/ingredients.json";

const translations = JSON.parse(fs.readFileSync(translationsPath, 'UTF-8'));
const ingredients = JSON.parse(fs.readFileSync(ingredientsPath, "UTF-8")).sort();

const ingredientCount = ingredients.length;
const coverage: any = {};
const languages = new Set();
const ingredientTranslations: any = {};

for (const ingredient of ingredients) {
  if (!translations[ingredient]) {
    continue;
  }

  for (const lang of translations[ingredient]) {
    languages.add(lang);
    let count = coverage[lang] || 0;
    count++;
    coverage[lang] = count;
  }
}

for (const language of Array.from(languages) as string[]) {
  for (const ingredient of ingredients) {
    const isTranslated = (translations[ingredient] || []).indexOf(language) !== -1;
    let mapping = ingredientTranslations[ingredient] || {};
    mapping[language] = isTranslated;
    ingredientTranslations[ingredient] = mapping;
  }
}

const template = Handlebars.compile(fs.readFileSync("template.html.hbs", "utf-8"));
fs.writeFileSync("report.html", template({
  ingredientTranslations,
  languages: Array.from(languages),
  coverage,
  ingredientCount,
  ingredients,
}));
fs.writeFileSync("report.json", JSON.stringify({
  ingredientTranslations,
  coverage,
}, null, "\t"));
