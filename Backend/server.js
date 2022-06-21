const express = require('express')
const app = express()

/* CONNECT TO DB */
const connectDB = require('./db/connect')

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.use(express.json())

const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`server is running on PORT ${PORT}`)
        })
    }catch(err) {
        console.log(err)
    }
}

start()