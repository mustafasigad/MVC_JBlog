const router = require('express').Router();
 router.get('/login', (req, res) => {
    
    if (req.session.logged_in) {
       
        res.redirect('/');     
    } else {
        res.render('login');
   }
});

module.exports = router;