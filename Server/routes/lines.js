const router = require('express').Router()
let Line = require('../models/line.model')


router.route('/').get((req, res) => {
    const query = {}
    const msId = req.query.msId;
    if(msId){
        query.msId = msId
    }
    const page = req.query.page;
    if(page){
        query.page = page
    }
    const line = req.query.line;
    if(line){
        query.line = line
    }


    Line.find(query)
        .then(lines => res.json(lines))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router