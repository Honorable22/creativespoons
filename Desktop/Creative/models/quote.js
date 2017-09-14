const
  mongoose = require('mongoose'),
  quoteSchema = new mongoose.Schema({
      fullName: String,
      phoneNumber: String,
      email: { type: String, unique: true, required: true, uniqueCaseInsensitive: true },
      projectType: String,
      completionDate: Date,
      details: String
  })

  module.exports = mongoose.model('Quote', quoteSchema)
