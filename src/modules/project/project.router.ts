import express from 'express'
import { projectController } from './project.controller'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

router.post('/', projectController.createNewProjects) // create new Projects routes
router.get('/', projectController.getAllProject)// get all Projects routes
router.get('/:projectId', projectController.getProjectByID) // get all Projects routes by product id
router.put('/:projectId', projectController.updateProject) // update Project routes by product id and update specific products
router.delete('/:projectId', projectController.deleteProjectbyID) // delete Project routes by product id

export const projectRoutes = router
