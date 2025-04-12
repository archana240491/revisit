
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getAll, create, update } = require('../controllers/categoryController');

router.get('/', auth, getAll);
router.post('/', auth, create);
router.put('/:id', auth, update);

module.exports = router;