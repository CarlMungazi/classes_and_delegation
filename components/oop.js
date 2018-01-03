const m = require("mithril")

function Base (height = 50) {
	this.height = height
}

function StandardNav (height, background = 'grey') {
  return {
    oninit: function (vnode) {
      Base.call( this, height )
      this.background = background

    },
    view: function (vnode) {
      return m('nav.navbar.navbar-expand-md.mb-4', {
          style: {
            'background-color': this.background,
            'height' : `${this.height}px`,
          } 
        }
      )
    }
  }
}

StandardNav.prototype = Object.create( Base.prototype )

module.exports = StandardNav