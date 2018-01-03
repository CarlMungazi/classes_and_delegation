const m = require("mithril")

const Base = {
	init: function(width = 100, height = 50, text = 'Click Me', message = 'I am a button'){
		this.width = width
    this.height = height
    this.text = text
    this.message = message
	},
}

const DangerButton = Object.create( Base )

DangerButton.render = function( width, height, text, message, background = 'red'){
  return {
    init: this.init,
    oninit: function (vnode) {
      vnode.state.init( width, height, text, message )
      this.background = background
      console.log(this)

    },
    view: function (vnode) {
      return m('a.btn.btn-lg.btn-primary', {
        onclick: function () {
          alert(vnode.state.message)
        },
        role: 'button',  
        style: {
          'background-color': this.background,
          'height' : this.height,
          'width' : this.width
        } 
      }, this.text)
    }
  }
}

module.exports = DangerButton