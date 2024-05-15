import exampleRoute from './database/routes/example-route';
import express from 'express'
import cookieParser from 'cookie-parser';
import http from 'http'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose';
import connectToDb from './database';

const app = express()

app.use(cors({
    credentials: true,
}))

app.use(compression())
app.use(cookieParser())
app.use(express.json())

const server = http.createServer(app)

server.listen(3000, () => {
    console.log('sserver running')
})

connectToDb()

app.use('/api/user', exampleRoute)


