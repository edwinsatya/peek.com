const Review = require('../models').Review

class ReviewController {

  static findAll(req, res) {
    Review.findAll()
    .then(reviews => {
      res.render('reviews', {reviews})
    })
  }
  
  static add(req, res) {
    res.render('addReview')

  }

  static create(req, res) {
    Review.create({
      UserId : req.body.UserId,
      TrailerId : req.body.TrailerId,
      comment : req.body.comment
    })
    .then(review => {
      res.redirect('/review')
    })
    .catch(err => {
      res.render('error', {error : err})
    })
  }

  static edit(req, res) {
    Review.findByPk({
      where : {
        id : req.params.id
      }
    })
  }

  static update(req, res) {

  }

  static delete(req, res) {

  }

}
module.exports = ReviewController