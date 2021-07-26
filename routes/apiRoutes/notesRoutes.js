const router = require('express').Router();
const db = require('../../db/db.json');
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');


router.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../../db/db.json'), (err, result) => {
        if (err) {
            console.log(err);
        }

        let db = JSON.parse(result);
        res.json(db);
    })
});

router.post('/notes', (req, res) => {
    notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json'), 'utf8'));

    const note = req.body;

    note.id = uniqid();
    res.json(note)

    notes.push(note);

    fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes), (err, result) => {
        if (err) {
            console.log(err);
        }
        return;
    })
});

module.exports = router;