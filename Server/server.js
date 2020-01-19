const express = require('express')
const cors = require('cors')
const database = require('./database')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const manuscriptsRouter = require('./routes/manuscripts')
const usersRouter = require('./routes/users')
const linesRouter = require('./routes/lines')

app.use('/lines', linesRouter)
app.use('/manuscripts', manuscriptsRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})