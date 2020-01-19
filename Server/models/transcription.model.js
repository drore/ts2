const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const transcriptionSchema = new Schema({
    manuscript:{type: String},
    line:{type: Number},
    page:{type: Number},
    uid:{type: String},
    transcription:{type: String},
}, { timestamps: true });

const Transcription = mongoose.model('Transcription',transcriptionSchema);

module.exports = Transcription;