# classes_and_delegation
A very rudimentary comparison of class simulation and prototypal inheritance in JS. Framework of choice is Mithril.js

### components/oops.js
Follows the ES5 way of simulating class-like behaviour in JavaScript. A parent class is created via a function and then extended by a child class through another function. You then instanstiate it using the `new` keyword.

### components/es6.js
Uses ES6 classes to do the job. A parent class is created and then extended by a child class. The child class has a method which returns a Mithril component. This is also instatiated using the `new` keyword.

### components/delegation.js
Does not simulate class-like behaviour. Instead, it relies on JavaScript\'s prototypal inheritance feature to link objects through `Object.create()`