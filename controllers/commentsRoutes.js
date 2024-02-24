const router = require('express').Router();

//login handler
 router.get('/comments', (req, res) => {
  
    if (req.session.logged_in) {
           res.render('comments');
   }
});
module.exports = router;


