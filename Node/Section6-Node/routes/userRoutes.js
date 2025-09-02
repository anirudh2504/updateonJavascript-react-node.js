const express = require('express');

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is Not Yet Defined',
  });
};
const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is Not Yet Defined',
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is Not Yet Defined',
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is Not Yet Defined',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is Not Yet Defined',
  });
};

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);

router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);




module.exports=router;

