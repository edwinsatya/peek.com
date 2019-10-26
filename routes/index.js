const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const reviewController = require('../controllers/reviewController')
const trailerController = require('../controllers/trailerController')
const alertFail = require('../helpers/alertFail');

//home
router.get('/', (req, res) => {
    router.use(function (req, res, next) {
  if (req.session.user) {
    next()
  } else {
    res.send('you have to login first')

  }
  res.send('middleware')
})
    res.render('par', {
        err: req.query.err
    });
});
//register
router.post('/signin', userController.signIn);
router.post('/signup', userController.signUp);
//login
//gallery
router.get('/gallery', (req, res) => {
    res.render('gallery');
})
//menampilkan semua trailer 
// router.get('/trailer', trailerController.findAll)


// //user
// router.get('/user/login', userController.login)
// router.get('/user', userController.findAll)
// router.get('/user/add', userController.create) //render form add (login?)
// router.post('/user/add', userController.create) //redirect
// router.get('/user/edit/:id', userController.edit) //render firm edit
// router.post('/user/edit/:id', userController.update)
// router.get('/user/delete/:id', userController.delete)


// //review
// router.get('/review', reviewController.findAll)
// router.get('/review/add', reviewController.add)
// router.post('/review/add', reviewController.create)
// router.get('/review/edit/:id', reviewController.edit)
// router.post('/review/edit/:id', reviewController.update)
// router.get('/review/delete/:id', reviewController.delete)
module.exports = router