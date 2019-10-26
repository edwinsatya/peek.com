const Trailer = require('../models').Trailer

class TrailerController {
  static findAll(req, res) {
    Trailer.findAll()
    .then(trailers => {
      res.render('trailers', {trailers})
    }) 
    .catch(err => {
      res.render('error', {error : err})
    })
  }
}
module.exports = TrailerController