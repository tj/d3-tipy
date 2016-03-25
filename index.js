
import offset from 'document-offset'

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
  format = d => d.value;

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
    el.style.top = o.top - el.offsetHeight + 'px'
    el.style.left = o.left - (el.offsetWidth / 2) + 'px'
    el.textContent = this.format(d)
    el.classList.add('show')
  }

  /**
   * Hide tip.
   */

  hide = _ => {
    el.classList.remove('show')
  }
}
