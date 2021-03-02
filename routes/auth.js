const express = require('express');
const router = express.Router();

// @route get api/auth
// @ desc get logged in user
// @access private
router.get('/', (req, res) => {
  res.send('get logged in user');
});

// @route Post api/users
// @ desc Authenticate user and get token
// @access public
router.post('/', (req, res) => {
  res.send('log a user in');
});

module.exports = router;
