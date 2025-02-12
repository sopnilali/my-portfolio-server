
import express from 'express';
import { blogController } from './blog.controller';
import validateRequest from '../../middlewares/validateRequest';
import { blogContentValidationSchema } from './blog.validation';

const router = express.Router();

router.post('/', 
    blogController.createBlogContent,
    validateRequest(blogContentValidationSchema.createblogContentValidationSchema)
)
router.get('/', blogController.getBlogContent)

router.get('/details/:id', blogController.getSingleBlogContent)

router.patch('/:id', blogController.updateBlogContent)
    
router.delete('/:id', blogController.deleteBlogContent)


export const blogRoutes = router;