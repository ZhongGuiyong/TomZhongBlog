const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
// import bodyParser from 'body-parser'
// import session from 'express-session';
// import LoginRouter from '../api'

// Import and Set Nuxt.js options
// const config = require('../nuxt.config.js')
import config from '../nuxt.config'
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  // await app.use(bodyParser.urlencoded({ extended: false }))
  // await app.use(bodyParser.json())
  // app.use(function (req, res) {
  //   res.setHeader('Content-Type', 'text/plain')
  //   res.write('you posted:\n')
  //   res.end(JSON.stringify(req.body, null, 2))
  // })
  // await app.use(session({
  //   secret: 'super-secret-key',
  //   resave: false,
  //   saveUninitialized: false,
  //   cookie: { maxAge: 60000 }
  // }))
  // Give nuxt middleware to express
  app.use(nuxt.render)
  // app.use(LoginRouter)
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
