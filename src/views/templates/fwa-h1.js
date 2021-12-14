module.exports = function H1(state={}, html) {
  return html`
<style>
  :host {
    font-weight: 700;
    color: var(--secondary);
  }
</style>
<h1>
  <slot></slot>
</h1>
<script type="module">
  class FWAH1 extends HTMLElement {
    constructor() {
      super()
      const template = document.getElementById('fwa-h1-template')
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  }
  customElements.define('fwa-h1', FWAH1)
</script>
`
}