const
  Quote = require('../models/quote.js')

  module.exports = {
    index: (req, res) => {
      Quote.find({}, (err, quotes) => {
        if(err) return (err)
        res.render('quotes/index', {quotes: quotes})
      })
    },
    create: (req, res) => {

      var newQuote = new Quote(req.body)
      newQuote.fullName = req.body.fullName
      newQuote.phoneNumber = req.body.phoneNumber
      newQuote.email = req.body.email
      newQuote.projectType = req.body.projectType
      newQuote.completionDate = req.body.completionDate
      newQuote.details = req.body.details
      console.log(newQuote)
      newQuote.save((err, newQuote) => {
        if(err){
          console.log(err.code)
          if(err.code){
            res.json({message: "uh oh quote was not saved."})
          }

        } else {
          console.log({success: true, message: "Quote saved!!!"})
            res.redirect('/contact')

        }
      })
    },
    destroy: (req, res) => {

    Quote.findByIdAndRemove(req.params.id, (err, deleteQuote) => {
      res.redirect('/quotes')
    })
    }
  }
