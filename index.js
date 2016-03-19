
import offset from 'offset'

/**
 * Tip element.
 */

const el = document.createElement('div')
el.id = 'tip'
document.body.appendChild(el)

/**
 * Tip.
 */

export default class Tip {

  // format function
  format = String;

  /**
   * Initialize with the given `config`.
   */

  constructor(config) {
    Object.assign(this, config)
  }

  /**
   * Show tip with the given data.
   */

  show = d => {
    const to = offset(el)
    const o = offset(event.target)
    el.style.top = o.top - to.height + 'px'
    el.style.left = o.left + 'px'
    el.textContent = this.format(d.value)
    el.classList.add('show')
  }

  /**
   * Hide tip.
   */

  hide = _ => {
    el.classList.remove('show')
  }
}
