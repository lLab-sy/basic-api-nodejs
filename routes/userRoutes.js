const express = require('express');
const router = express.Router();

// Define user-related routes
router.get('/', (req, res) => {
    res.json({ message: 'Get all users' });
});

router.post('/', (req, res) => {
    res.json({ message: 'Create a new user' });
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Get user with ID: ${userId}` });
});

module.exports = router;
