const router = require('express').Router()
let Memory = require('../models/memory.model')


router.route('/').get((req, res) => {
    Memory.find()
        .then(memories => res.json(memories))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const time_from = +req.body.time_from;
    const time_to = +req.body.time_to;
    const geojson = req.body.geojson;
    const content = req.body.content;

    const newMemory = new Memory({
        time_from,
        time_to,
        geojson,
        content
    });

    newMemory.save()
        .then(() => res.json('Memory added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router