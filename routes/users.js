const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
// the express validator is used to limit and check and validate  some values before they are sent
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route Post api/users
// @ desc register a user
// @access public
router.post(
  '/',
  [
    // we run a check on all inputs withe the check method below.
    check('name', 'Please Add Name').not().isEmpty(),
    check('email', 'Please Enter A Valid Email').isEmail(),
    check(
      'password',
      'Please Enter A Password With A Minimum Of 6 Characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // res.send('passed');
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User Already Exist' });
      }
      user = new User({
        name,
        email,
        password,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      // res.send('user saved');
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;
