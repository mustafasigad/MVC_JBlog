const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');
// post request came from the front end to the server to create a node instances 
router.post('/', async (req, res) => {
  console.log( req.session.user_id)
  try {
  
    const newComments= await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
    });
 console.log(newComments)
    res.status(200).json(newComments);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
