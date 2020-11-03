const WilderModel = require("../models/Wilder.js")

exports.create = (req, res) => {
    WilderModel.init().then( () => {
        console.log(req.body)
            const newWilder = new WilderModel(req.body)
            newWilder.save()
                .then(() => res.status(200).json({ message: "Wilder créé !"}))
                .catch(error => res.status(400).json({ error }))
        }
    )
        .catch(error => res.status(400).json({ error }))
}

exports.modifyWilder = (req, res) => {
    WilderModel.findOne({ name: req.params.name })
        .then(result => {
            WilderModel.updateOne({ _id: result._id}, {...req.body})
                .then(() => res.status(200).json({ success: true, message: "Wilder mis à jour"}))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(400).json({ error }))
}

exports.findOne = (req, res) => {
    WilderModel.findOne({ name: req.params.name })
        .then((result) => res.status(200).json({ result }))
        .catch(error => res.status(400).json({ error }))
}

exports.findAll = (req, res) => {
    WilderModel.find()
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(400).json({ error }))
}

exports.remove = (req, res) => {
    WilderModel.deleteOne({ name: req.params.name })
        .then(() => res.status(200).json({ message : "Wilder supprimé" }))
        .catch(error => res.status(400).json({ error }))
}