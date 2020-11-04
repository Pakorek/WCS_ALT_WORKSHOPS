const WilderModel = require("../models/Wilder.js")

exports.create = async (req, res) => {
    await WilderModel.init()
    const newWilder = new WilderModel(req.body)
    const result = await newWilder.save()
    res.status(200).json({ success: true, result })
}

exports.modifyWilder = async (req, res) => {
    const result = await WilderModel.findOne({ name: req.params.name })
    await WilderModel.updateOne({ _id: result._id}, {...req.body})
    res.status(200).json({ success: true, message: "Wilder mis à jour"})
}

exports.findOne = async (req, res) => {
    const result = await WilderModel.findOne({ name: req.params.name })
    res.status(200).json({ result })
}

exports.findAll = async (req, res) => {
    const result = await WilderModel.find()
    res.status(200).json({ result })
}

exports.remove = async (req, res) => {
    await WilderModel.deleteOne({ name: req.params.name })
    res.status(200).json({ success: true, message : "Wilder supprimé" })
}