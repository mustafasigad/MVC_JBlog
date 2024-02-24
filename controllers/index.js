const router = require('express').Router();
const apiRoutes = require('./api');

const loginRoutes=require('./loginRoutes.js')
const signupRoutes=require('./signupRoutes.js');
const homeRoutes=require('./homeRoutes.js')
const commentsRoutes=require('./commentsRoutes.js')
const dashboardroutes=require('./dashBoardRoutes.js')
const logoutRoutes=require('./logoutRoutes.js')


router.use('/api', apiRoutes);
router.use('/', signupRoutes);
router.use('/',homeRoutes)
router.use('/',commentsRoutes)
router.use('/',loginRoutes)
router.use('/',dashboardroutes)
router.use('/',logoutRoutes)


module.exports = router;