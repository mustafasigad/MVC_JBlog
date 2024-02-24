const router = require('express').Router();
 router.get('/logout', (req, res) => {
    console.log('checking why the logout  is not working this is in the logoutRoutes')

    if (req.session.logged_in) {
        res.redirect('/');     
    } else {
        res.render('login');
   }
});

module.exports = router;