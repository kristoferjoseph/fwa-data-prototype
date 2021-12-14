module.exports = function Main(state={}, html) {
  const { title, content } = state
  return html`
<fwa-theme>
  <fwa-h1>${title}</fwa-h1>
  <fwa-p>${content}</fwa-p>
</fwa-theme>
  `
}