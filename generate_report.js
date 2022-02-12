const fs = require("fs")
const translationsPath = "/tmp/translations.json";
const ingredientsPath = "/tmp/ingredients.json";

const translations = JSON.parse(fs.readFileSync(translationsPath, 'UTF-8'))
const ingredients = JSON.parse(fs.readFileSync(ingredientsPath, "UTF-8"))

const total = ingredients.length
const coverage = {}
const languages = new Set()

for (const ingredient of ingredients) {
  if (!translations[ingredient]) {
    continue
  }
  for (const lang of translations[ingredient]) {
    languages.add(lang)
    let count = coverage[lang] || 0
    count++;
    coverage[lang] = count;
  }
}

let report = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Translation Report</title>
    <style>
        body {
            font-family: Arial;
        }
        h1, h2 {
            text-align: center;
        }
        table, progress {
            width: 100%;
        }
        table, tr, td, th {
          border: 1px solid black;
          border-collapse: collapse;
        }
    </style>

</head>
<body>
    <h1>Translation Report</h1>
    <h2>Coverage</h2>
    <table>
    <thead>
        <th>Language</th>
        <th>Coverage</th>
    </thead>
    <tbody>
        ${Object.keys(coverage).map(k => `
            <tr>
                <td>${k}</td>
                <td><progress title="${coverage[k]}/${total}" max="${total}" value="${coverage[k]}" /></td>
            </tr>
        `).join("")}
    </tbody>
</table>
<h2>Status</h2>
<table>
<thead>
    <tr>
        <th>Key</th>
        ${Array.from(languages).sort().map(lang => `
          <th>${lang}</th>
        `).join("")}
    </tr>
</thead>
<tbody>
    ${ingredients.sort().map(key => {
  const translation = translations[key] || [].sort();
  return `<tr>
           <td style="width: 200px;">${key}</td>
           ${Array.from(languages).sort().map(t => `<td style="width: 40px; text-align: center;">${translation.indexOf(t) === -1 ? "❌" : "✅"}</td>`).join("")}
      </tr>`
}).join("")}
</tbody>
</table>
</body>
</html>`
fs.writeFileSync("report.html", report)
