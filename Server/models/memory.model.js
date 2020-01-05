const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const memorySchema = new Schema({
    time_from:{type: Date},
    time_to:{type: Date},
    geojson:{type:String},
    content:{type: Object}
}, { timestamps: true });

const Memory = mongoose.model('Memory',memorySchema);

module.exports = Memory;