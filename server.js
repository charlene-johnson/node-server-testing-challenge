const express = require("express")
const cors = require("cors")
const blobsRouter = require("./blobs/blobs-router")

const server = express()

server.use(cors())
server.use(express.json())

server.use("/api/blobs", blobsRouter)
server.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Blob API",
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong with the blobs, try again later",
    })
})

module.exports = server