
import express from 'express';
import { blogController } from './blog.controller';

const router = express.Router();

router.post('/', blogController.createBlogContent)

router.get('/', blogController.getBlogContent)

router.get('/details/:id', blogController.getSingleBlogContent)

router.put('/:id', blogController.updateBlogContent)
    
router.delete('/:id', blogController.deleteBlogContent)


export const blogRoutes = router;