let mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI


class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new Database()