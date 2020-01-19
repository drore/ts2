const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const lineSchema = new Schema({
    AT:{type: String},
    iiif_url:{type: String},
    bottom_on_page:{type: Number},
    top_on_page:{type: Number},
    right_on_page:{type: Number},
    left_on_page:{type: Number},
    general_index:{type: Number},
    line:{type: Number},
    page:{type: Number},
    views:{type: Number},
}, { timestamps: true });

const Line = mongoose.model('Line',lineSchema);

module.exports = Line;