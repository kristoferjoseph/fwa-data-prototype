module.exports = function P(state={}, html) {
  return html`
  <style>
    :host {
      font-weight: 100;
      color: var(--primary);
    }
  </style>
<p>
  <slot></slot>
</p>
<script type="module">
  class FWAP extends HTMLElement {
    constructor() {
      super()
      const template = document.getElementById('fwa-p-template')
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  }
  customElements.define('fwa-p', FWAP)
</script>
  `
}