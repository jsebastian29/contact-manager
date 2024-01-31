const express = require('express');
const router = express.Router();
const {
  getContacts,
  getContactById,
  createContact,
  editContact,
  deleteContact
} = require('../controllers/contactController');

// Get all contacts
// Create contact
router.route('/').get(getContacts).post(createContact);

// Get contact by id
// Edit contact
// Delete contact
router.route('/:id').get(getContactById).put(editContact).delete(deleteContact);

module.exports = router;