const router = require('express').Router();
const {Comments,User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard',withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id;

       const projectData = await Comments.findAll({
        where :{
          user_id:userId
        },
        include: [{ 
          model: User,
          attributes: ['name']
        }] 
       });
const projects = projectData.map((project) => project.get({ plain: true }));
let nameName=projects[0].user.name
   res.render('dashboard', {
    logged_in: req.session.logged_in,projects,nameName
  
          });
  }catch (err) {
    res.status(500).json(err);
  }
  });



module.exports = router;

