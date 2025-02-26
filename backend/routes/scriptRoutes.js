const express = require('express');
const Script = require('../models/Script');
const router = express.Router();

// Get all scripts
router.get('/', async (req, res) => {
    const scripts = await Script.find();
    res.json(scripts);
});

// Create a new script
router.post('/', async (req, res) => {
    const { title, content } = req.body;
    const newScript = new Script({ title, content });
    await newScript.save();
    res.json(newScript);
});

// Export to PDF (Placeholder)
router.get('/:id/export', async (req, res) => {
    res.send("PDF Export Function Coming Soon!");
});

module.exports = router;
