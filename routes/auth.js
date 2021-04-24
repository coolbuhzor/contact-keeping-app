const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../Middleware/auth');
// the express validator is used to limit and check and validate  some values before they are sent
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const { findOne } = require('../models/User');

// @route get api/auth
// @ desc get logged in user
// @access private
router.get('/', auth, async (req, res) => {
  // res.send('get logged in user');
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: 'server error' });
  }
});

// @route Post api/users
// @ desc Authenticate user and get token
// @access public
router.post(
  '/',
  [
    check('email', 'Please Include A Valid Email').isEmail(),
    check('password', 'Password Is Required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
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
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
