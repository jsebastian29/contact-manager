const asyncHandler = require('express-async-handler');

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get all contacts' });
});

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access public
const getContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@desc Create contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log('This is the request body: ', req.body);
  const {name, email, phone} = req.body;
  if (!name || !email || !phone)
  {
    res.status(400);
    throw new Error('All fields are mandatory...!');
  }
  res.status(201).json({ message: 'Create contact' });
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const editContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContactById,
  createContact,
  editContact,
  deleteContact
};