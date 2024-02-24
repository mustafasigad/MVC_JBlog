const router = require('express').Router();
const { User,Comments } = require('../../models');


router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
  
       res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: {email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
    req.session.logged_in = true;
    console.log(userData)
    res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
 
});

router.post('/logout', (req, res) => {
console.log("userroutes logout")
  console.log(req.session.logged_in)
 
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// router.get('/recomJson', async (req, res) => {
// try {
//       const readerData = await Comments.findAll({ 
  
//     });
//   res.status(200).json(readerData);
  
// }catch (err) {
//   res.status(500).json(err);
// } ;
// })


module.exports = router;
