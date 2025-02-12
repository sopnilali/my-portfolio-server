"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const blog_validation_1 = require("./blog.validation");
const router = express_1.default.Router();
router.post('/', blog_controller_1.blogController.createBlogContent, (0, validateRequest_1.default)(blog_validation_1.blogContentValidationSchema.createblogContentValidationSchema));
router.get('/', blog_controller_1.blogController.getBlogContent);
router.get('/details/:id', blog_controller_1.blogController.getSingleBlogContent);
router.patch('/:id', blog_controller_1.blogController.updateBlogContent);
router.delete('/:id', blog_controller_1.blogController.deleteBlogContent);
exports.blogRoutes = router;
