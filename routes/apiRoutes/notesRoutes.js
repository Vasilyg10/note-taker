const router = require('express').Router();
const { db } = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    let results = db;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
})