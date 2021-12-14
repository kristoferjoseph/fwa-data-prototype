module.exports = function FWATheme(state={}, html) {
  return html`
<style>
  :host {
    font-family: sans-serif;
    --primary: blueviolet;
    --secondary: darkblue;
  }
</style>
<slot></slot>
<script type="module">
  class FWATheme extends HTMLElement {
    constructor() {
      super()
      const template = document.getElementById('fwa-theme-template')
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  }
  customElements.define('fwa-theme', FWATheme)
</script>
  `
}