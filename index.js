const m = require("mithril")

const StandardNav = require("./components/oop.js")
const StandardFooter = require("./components/es6.js")
const DangerButton = require("./components/delegation.js")

let NavBar = new StandardNav(50)
let Footer = new StandardFooter()
let Button = Object.create (DangerButton)

const Container = {
  view: function () {
    return m('div',
      m(NavBar),
      m('main.container',
        m('div.jumbotron',
          m('h1', 'OOP vs ES6 vs Delegation'),
          m('p', 'The navbar follows the ES5 way of simulating class-like behaviour in JavaScript. A parent class is created via a function and then extended by a child class through another function. You then instanstiate it using the new keyword.'),
          m('p', 'The footer uses ES6 classes to do the job. A parent class is created and then extended by a child class. The child class has a method which returns a Mithril component. This is also instatiated using the new keyword.'),
          m('p', 'The button does not simulate class-like behaviour like the previous two examples. Instead, it relies on JavaScript\'s prototypal inheritance feature to link objects through "Object.create()". '),
          m(Button.render())
          )
      ),
      m(Footer),
    )
  }
}

m.mount(document.body, Container)