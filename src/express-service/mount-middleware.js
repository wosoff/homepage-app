// const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const morgan = require('morgan');
const { format } = require('./var/morgan-options');
/**
 * @param {import('express').Application} app
 */
function mountMiddleware(app) {
  app.use(express.static('dist'));
  app.use('/public/assets', express.static('public/assets'));

  app.use(session({ secret: 'cats', resave: true, saveUninitialized: true }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(morgan(format));
}

module.exports = mountMiddleware;
