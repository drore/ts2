const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const manuscriptSchema = new Schema({
    base_url:{type: String},
    consensus:{type: Number},
    default_file_name:{type:String},
    desc_link:{type:String},
    done_lines:{
        quality:{type:Number},
        transcription:{type:Number}
    },
    special_char:{
        divine_name:{type:String}
    },
    factor:{type:Number},
    full_width:{type:Number},
    left_buffer:{type:Number},
    transcription_threshold:{type:Number},
    top_buffer:{type:Number},
    hidden:{type:Boolean},
    image_extension:{type:String},
    image_extension_1:{type:String},
    image_extension_2:{type:String},
    name:{type:String},
    official_name:{type:String},
    next_line:{type: Number},
    next_page:{type: Number}
}, { timestamps: true });

const Manuscript = mongoose.model('Manuscript',manuscriptSchema);

module.exports = Manuscript;