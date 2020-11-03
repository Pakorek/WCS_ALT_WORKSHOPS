const express = require('express')
const router = express.Router()
const WildCtrl = require('../controllers/wilders')

router.post('/create', WildCtrl.create)
router.put('/:name', WildCtrl.modifyWilder)
router.get('/:name', WildCtrl.findOne)
router.get('/', WildCtrl.findAll)
router.delete('/:name', WildCtrl.remove)

module.exports = router