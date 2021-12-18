Technology of frontend
===

* Status: accepted
* Deciders: @timo-reymann, @andreas-popel
* Date: 2021-09-30

## Context and Problem Statement

We need some way to provide an application to users on their respective devices. The user might use a tablet for
cooking, a phone for going shopping and a PC for writing/editing documents.

## Decision Drivers <!-- optional -->

* reusability of code
* responsive and user-friendly
* possibility for offline storage and sync
* must work offline

## Considered Options

* PWA with Vue
* PWA with React
* PWA with Angular
* Native App(s) with flutter

## Decision Outcome

Chosen option: PWA with angular, because it provides a good basis for modular applications and ensures good testability
and best practices.

### Positive Consequences <!-- optional -->

* we have good to use testing out of the box
* tons of resources

### Negative Consequences <!-- optional -->

* Angular has very frequent updates

## Pros and Cons of the Options <!-- optional -->

### PWA with Vue

Create Progressive Web App with Vue.js 3

* Good, because its easy to begin with
* Bad, because it is not very opinionated about structure making it harder to contribute
* Bad, because it does not scale very good for large applications

### PWA with React

Create Progressive Web App with React

* Good, because React is widely used
* Good, because React has relatively few updates
* Bad, because it is not very opinionated about structure making it harder to contribute
* Bad, because we need to write a lot of boilerplate that distracts and makes work harder

### PWA with Angular

Progressive Web App with Angular 13

* Good, because it has strong opinions and tools about testing and structure
* Good, because it already comes with `ng-packager` allowing us to scaffold and maintain packages
* Good, because we can focus on application logic rather than technical details
* Good, because it is easy to scaffold and onboard for new contributors
* Good, because it scales well
* Bad, because we need to update frequently to stay on track
* Bad, because it has relatively large bundle sizes

### Native App(s) with flutter

Build native apps for iOS, Android, Windows, Mac and Linux.

* Good, because we can ensure a native experience for users
* Bad, because we need to get licenses for each marketplace, deal with update policies etc.
* Bad, because for custom components often platform specific code is needed
* Bad, because it is harder to update and troubleshoot
* Bad, because it is relatively hard to onboard new contributors
