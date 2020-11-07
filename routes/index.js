const {Router} = require('express')

const router = Router()

// router.use('*',(req, res, next) => {
//     if(isAuthenticated(req)){
//         res.redirect('/sing_in')
//     } else {
//         next()
//     }
// })

router.get('/', () => console.log('GET test'))

router.post('/profile', function (req, res, next) {
    console.log(req.body)
    res.json(req.body)
  })

const isAuthenticated = function(req){
    // console.log('checked Auth')
    return false
}

module.exports = router 