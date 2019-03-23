const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware')

const { PORT, DEV } = require('./config')

const nextI18next = require('./i18n')

const app = next({
  dev: DEV,
  dir: './src'
})
const handle = app.getRequestHandler();

(async () => {
  await app.prepare()

  const server = express()

  server.use(nextI18NextMiddleware(nextI18next))

  server.get('*', (req, res) => handle(req, res))

  await server.listen(PORT)

  console.log(`> Ready on http://localhost:${PORT}`)
})()