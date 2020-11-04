const WilderModel = require("../models/Wilder.js")

exports.create = async (req, res) => {
    try {
        await WilderModel.init()
        const newWilder = new WilderModel(req.body)
        const result = await newWilder.save()
        res.status(200).json({ success: true, result })
    } catch (error) {
        res.status(400).json({ success: false, error })
    }
}

exports.modifyWilder = async (req, res) => {
    try {
        const result = await WilderModel.findOne({ name: req.params.name })
        await WilderModel.updateOne({ _id: result._id}, {...req.body})
        res.status(200).json({ success: true, message: "Wilder mis à jour"})
    } catch (error) {
        res.status(400).json({ success: false, error })
    }
}

exports.findOne = async (req, res) => {
    try {
        const result = await WilderModel.findOne({ name: req.params.name })
        res.status(200).json({ result })
    } catch (error) {
        res.status(400).json({ success: false, error })
    }
}

exports.findAll = async (req, res) => {
    try {
        const result = await WilderModel.find()
        res.status(200).json({ result })
    } catch (error) {
        res.status(400).json({ error })
    }
}

exports.remove = async (req, res) => {
    try {
        await WilderModel.deleteOne({ name: req.params.name })
        res.status(200).json({ success: true, message : "Wilder supprimé" })
    } catch (error) {
        res.status(400).json({ error })
    }
}