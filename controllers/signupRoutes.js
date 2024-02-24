const router = require('express').Router();
//signup handler
 router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');     
    } else {
        res.render('signup');
   }
});

module.exports = router;
