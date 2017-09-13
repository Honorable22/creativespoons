const
  express = require('express'),
  mongoose = require('mongoose'),
  quoteRouter = express.Router(),
  Quote = require('../models/quote.js'),
  quoteController = require('../controllers/quote.js')


quoteRouter.route('/quotes')
  .get(quoteController.index)

quoteRouter.route('/contact')
  .post(quoteController.create)

quoteRouter.route('/quotes/:id')
    .delete(quoteController.destroy)


module.exports = quoteRouter
