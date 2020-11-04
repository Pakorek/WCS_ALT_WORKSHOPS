const express = require('express')
const router = express.Router()
const WildCtrl = require('../controllers/wilders')

function handleErrors(callback) {
    return (req, res, next) => {
        callback(req, res, next).catch(next)
    }
}

router.post('/create', handleErrors(WildCtrl.create))
router.put('/:name', handleErrors(WildCtrl.modifyWilder))
router.get('/:name', handleErrors(WildCtrl.findOne))
router.get('/', handleErrors(WildCtrl.findAll))
router.delete('/:name', handleErrors(WildCtrl.remove))

module.exports = router