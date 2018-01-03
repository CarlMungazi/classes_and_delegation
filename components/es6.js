const m = require("mithril")

class Base {
	constructor(height = 60, text = 'Place sticky footer content here.') {
    this.height = height
    this.text = text
	}
}

class StandardFooter extends Base {
	constructor(height, text, background = '#f5f5f5') {
		super( height, text )
    this.background = background
  }
  
  view(vnode) {
    return m('footer.footer', {
        style: {
          'background-color': this.background,
          'height' : `${this.height}px`,
          'position': 'absolute',
          'bottom': 0,
          'width': '100%'
        } 
      }, 
      m('div.container', {
        style: {
          'width': 'auto',
          'padding': '20px 15px'
        }
      },
        m('span.text-muted', this.text)
      )
    )
  }
}

module.exports = StandardFooter