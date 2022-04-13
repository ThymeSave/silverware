silverware
===
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
[![codecov](https://codecov.io/gh/ThymeSave/silverware/branch/main/graph/badge.svg?token=LHb7ZmLKM2)](https://codecov.io/gh/ThymeSave/silverware)
[![CircleCI](https://circleci.com/gh/ThymeSave/silverware/tree/main.svg?style=shield)](https://circleci.com/gh/ThymeSave/silverware/tree/main)
[![GitHub Release](https://img.shields.io/github/v/tag/thymesave/silverware.svg?label=version)](https://github.com/thymesave/silverware/releases)
[![pre-commit](https://img.shields.io/badge/%E2%9A%93%20%20pre--commit-enabled-success)](https://pre-commit.com/)
[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)

Mono repository for the entire frontend application

# Development

## Required tools

- [Node.js 16+](https://nodejs.org)
- [pre-commit](https://pre-commit.com/)

## Setup

To set up the project locally:

1. Install dependencies: `npm i` (*NOTE: This also installs pre-commit hooks*)
2. Run tests to verify your setup `npm run test`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Commit Message Convention

This repository follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Format

`<type>(optional scope): <description>`
Example: `feat(pre-event): Add speakers section`

### 1. Type

Available types are:

- feat → Changes about addition or removal of a feature. Ex: `feat: Add table on landing page`
  , `feat: Remove table from landing page`
- fix → Bug fixing, followed by the bug. Ex: `fix: Illustration overflows in mobile view`
- docs → Update documentation (README.md)
- style → Updating style, and not changing any logic in the code (reorder imports, fix whitespace, remove comments)
- chore → Installing new dependencies, or bumping deps
- refactor → Changes in code, same output, but different approach
- ci → Update github workflows, husky
- test → Update testing suite, cypress files
- revert → when reverting commits
- perf → Fixing something regarding performance (deriving state, using memo, callback)
- vercel → Blank commit to trigger vercel deployment. Ex: `vercel: Trigger deployment`

### 2. Optional Scope

Labels per page Ex: `feat(pre-event): Add date label`

*If there is no scope needed, you don't need to write it*

### 3. Description

Description must fully explain what is being done.

Add BREAKING CHANGE in the description if there is a significant change.

**If there are multiple changes, then commit one by one**

- After colon, there are a single space Ex: `feat: Add something`
- When using `fix` type, state the issue Ex: `fix: File size limiter not working`
- Use imperative, dan present tense: "change" not "changed" or "changes"
- Use capitals in front of the sentence
- Don't add full stop (.) at the end of the sentence

## Contributing

### [Code of Conduct](https://github.com/ThymeSave/.github/blob/main/CODE-OF-CONDUCT.md)

ThymeSave has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so
that you can understand what actions will and will not be tolerated.

### [Contributing Guide](./CONTRIBUTING.md)

Read our contributing guide to learn about how to propose bugfixes and improvements and contribute to ThymeSave!

# Deployment of silverware for the managed service

Deployments are done automatically using CloudFlare Pages.

To deploy to production merge to the `production` branch.

For all other commits an automatic preview environment is created, for more information please see
the [docs](https://developers.cloudflare.com/pages/platform/preview-deployments).
