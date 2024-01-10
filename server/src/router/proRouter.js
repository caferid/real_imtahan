
import express from 'express'
import { del_pro, get_A, get_pro, post_pro } from '../controller/proController.js'

export const router = express.Router()

router.get('/',get_A)
router.get('/pro',get_pro)
router.post('/',post_pro)
router.delete('/:id',del_pro)

