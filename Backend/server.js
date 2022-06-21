const express = require('express')
const app = express()

/* CONNECT TO DB */
const connectDB = require('./db/connect')
require('dotenv').config()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.use(express.json())

const PORT = process.env.PORT || 5000

console.log('Establishing Connection . . .\n')
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('DATABASE connected SUCCESSFULLY ! ! !')
        app.listen(PORT, () => {
            console.log(`\t Server is running on PORT ${PORT} \n\t url: http://localhost:${PORT}`)
        })
    }catch(err) {
        console.log(err)
    }
}

start()