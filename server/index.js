import fs from 'fs'
import path from 'path'
import qiniu from 'qiniu'
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
import bodyParser from 'body-parser'
import session from 'express-session';
const MongoStore = require('connect-mongo')(session);

import cors from '../plugins/serverPlugins/cors'
import mongodbInitialize from '../plugins/serverPlugins/mongodb'
import v1 from '../api'

// Import and Set Nuxt.js options
// const config = require('../nuxt.config.js')
import config from '../nuxt.config'
config.dev = !(process.env.NODE_ENV === 'production')
console.log(__dirname);
const baseConfig=JSON.parse(fs.readFileSync(path.resolve(__dirname,"../config.json")))
var mac = new qiniu.auth.digest.Mac(baseConfig.AccessKey, baseConfig.SecretKey)
console.log(mac);
const options = {
  scope: baseConfig.Bucket,
  deleteAfterDays: 1,
  returnBody:
    '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)", "url": "' + baseConfig.Domain + '/$(key)"}',
};
const putPolicy = new qiniu.rs.PutPolicy(options);
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
  const mongodbInstance = await mongodbInitialize();

  
  app.use(bodyParser.urlencoded({ extended: false }))
  // console.log(mongodbInstance);
  app.use(bodyParser.json())
  // app.use(function (req, res) {
  //   res.setHeader('Content-Type', 'text/plain')
  //   res.write('you posted:\n')
  //   res.end(JSON.stringify(req.body, null, 2))
  // })
  app.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
    store: new MongoStore({
      mongooseConnection: mongodbInstance.connection
    })
  }))
  app.use(cors)
  app.use(v1)
  app.get("/api/uptoken", function(req, res, next) {
    var token = putPolicy.uploadToken(mac);
    // console.log(token);
    res.header("Cache-Control", "max-age=0, private, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    // console.log(token );
    if (token) {
      res.json({
        uptoken: token,
        domain: baseConfig.Domain
      });
    }
  });
  // Give nuxt middleware to express
  app.use(nuxt.render)
  
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
