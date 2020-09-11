const express = require("express")
const Blobs = require("./blobs-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        res.json(await Blobs.find())
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const blob = await Blobs.findById(req.params.id)
        if(!blob) {
            return res.status(404).json({
                message: "Blob not found",
            })
        }
        res.json(blob)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const blob = await Blobs.create(req.body)
        res.status(201).json(blob)
    } catch(err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const blob = await Blobs.update(req.params.id, req.body)
        res.status(200).json(blob)
    } catch(err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const blob = await Blobs.remove(req.params.id)
        console.log(blob)
        if(!blob) {
            return res.status(404).json({
                message: "Blob not found"
            })
        }
        res.status(204).end()
    } catch(err) {
        next(err)
    }
})
module.exports = router