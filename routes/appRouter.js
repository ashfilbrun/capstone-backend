const Router = require('express').Router()
const passport = require('passport')

const illnessRouter = require('./illnessRouter')
const symptomRouter = require('./symptomRouter')
const userRouter = require('./userRouter')
const surveyRouter = require('./surveyRouter')


Router.use('/illness', illnessRouter)
Router.use('/symptom', symptomRouter)
Router.use('/user', userRouter)
Router.use('/survey', surveyRouter)

Router.get('/', (req, res) => {
  res.send('root2!')
})
// Router.get('/auth/google', passport.authenticate(
//   'google',
//   {
//     scope: ['profile', 'email']
//   }
// ))
// Router.get('/oauth2callback', passport.authenticate(
//   'google',
//   {
//     successRedirect: 'http:localhost:5173/',
//     failureRedirect: '/'
//   }
// ))
Router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/')
  })
})

module.exports = Router