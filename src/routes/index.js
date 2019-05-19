import express from 'express'
import controller from '../controllers'

const router = express.Router()
router.get('/', controller.user.getUser)
router.post('/', controller.user.createUser)
router.put('/', controller.user.updateUser)
router.delete('/', controller.user.deleteUser)

export default router
