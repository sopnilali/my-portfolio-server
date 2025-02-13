import express from 'express'
import { messageController } from './message.controller'


const router = express.Router()

router.post('/', messageController.createNewMessages) // create new Projects routes
router.get('/', messageController.getAllMessage)// get all Projects routes
router.get('/:messageid', messageController.getMessageByID) // get all Projects routes by product id
router.put('/:messageid', messageController.updateMessage) // update Project routes by product id and update specific products
router.delete('/:messageid', messageController.deleteMessagebyID) // delete Project routes by product id

export const messageRoutes = router
