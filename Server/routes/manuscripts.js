const router = require('express').Router()
let Manuscript = require('../models/manuscript.model')


router.route('/').get((req, res) => {
    const msName = req.query.name;
    const query = {}
    if(msName){
        query.name = msName
    }


    Manuscript.find(query)
        .then(manuscripts => res.json(manuscripts))
        .catch(err => res.status(400).json('Error: ' + err));
})

// router.route('/add').post((req, res) => {
//     const time_from = +req.body.time_from;
//     const time_to = +req.body.time_to;
//     const geojson = req.body.geojson;
//     const content = req.body.content;

//     const newManuscript = new Manuscript({
//         time_from,
//         time_to,
//         geojson,
//         content
//     });

//     newManuscript.save()
//         .then(() => res.json('Manuscript added!'))
//         .catch(err => res.status(400).json('Error: ' + err))
// })

module.exports = router