const express = require('express')
const app = express()

const cors = require('cors')

const corsOptions =
    {
        origin: ['http://localhost:5173'],
        credentials: true,
        allowedHeaders: ['sessionId', 'Content-Type'],
        exposedHeader: ['sessionId'],
        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
        preflightContinue: false
    }

app.use(cors(corsOptions))

require('dotenv').config({ path: './config/.env'})

require('./config/database').connectToMongoDB();

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const postRoutes = require('./routes/post.routes.js')
app.use('/api', postRoutes)

app.listen(process.env.PORT, () => console.log('Server listening on port ' + process.env.PORT))