"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("./project.controller");
const router = express_1.default.Router();
router.post('/', project_controller_1.projectController.createNewProjects); // create new Projects routes
router.get('/', project_controller_1.projectController.getAllProject); // get all Projects routes
router.get('/:projectId', project_controller_1.projectController.getProjectByID); // get all Projects routes by product id
router.put('/:projectId', project_controller_1.projectController.updateProject); // update Project routes by product id and update specific products
router.delete('/:projectId', project_controller_1.projectController.deleteProjectbyID); // delete Project routes by product id
exports.projectRoutes = router;
