const router = require('express').Router();
const db = require('../../db/db');
const fs = require('fs');
const path = require('path');


router.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../../db/db'), (err, result) => {
        if (err) {
            console.log(err);
        }

        let db = JSON.parse(result);
        res.json(db);
    })
});

router.post('/api/notes', (req, res) => {
    notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db'), 'utf8'));

    const note = req.body;

    notes.push(note);

    fs.writeFile(path.join(__dirname, '../../db/db'), JSON.stringify(notes), (err, result) => {
        if (err) {
            console.log(err);
        }
        return;
    })
});

module.exports = router;