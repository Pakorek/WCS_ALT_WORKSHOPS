import { Request, Response } from 'express'

const express = require('express')
const router = express.Router()
const WildCtrl = require('../controllers/wilders')

const handleErrors = (controller: (req: Request, res: Response) => Promise<void>) => {
  return async (req: Request, res: Response) => {
    try {
      await controller(req, res)
    } catch ({ code, message, status }) {
      res.status(status || 500).json({
        code,
        message
      })
    }
  }
}

router.post('/create', handleErrors(WildCtrl.create))
router.put('/:name', handleErrors(WildCtrl.modifyWilder))
router.get('/:name', handleErrors(WildCtrl.findOne))
router.get('/', handleErrors(WildCtrl.findAll))
router.delete('/:name', handleErrors(WildCtrl.remove))

module.exports = router
