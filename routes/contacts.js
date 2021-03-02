const express = require('express');
const router = express.Router();

// @route GET api/contact
// @ desc get users contact
// @access private
router.get('/', (req, res) => {
  res.send('get user contact');
});

// @route post api/contact
// @ desc ADD contact
// @access private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route put api/contact/:id
// @ desc update contact
// @access private
router.put('/:id', (req, res) => {
  res.send('update contact');
});

// @route Delete api/contact/:id
// @ desc deletee contact
// @access private
router.delete('/:id', (req, res) => {
  res.send('delete contact');
});

module.exports = router;
