const html = require('@enhance/ssr')()

exports.handler = async function http (req) {
  const { pathParameters } = req
  const { lang, proxy } = pathParameters
  const parts = proxy.split('/')
  const page = parts.pop()

  function getData(page='main') {
    return require(`@architect/views/data/${lang}/${page}`)
  }

  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: html`<fwa-main ...${getData()}></fwa-main>`
  }
}