"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const project_service_1 = require("./project.service");
const createNewProjects = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, descriptions, projecttools, livelink, image, githubfrontend, githubbackend, projectduration, projectstatus } = req.body;
    const projectData = {
        title,
        descriptions,
        projecttools,
        image,
        githubfrontend,
        livelink,
        githubbackend,
        projectduration,
        projectstatus,
    };
    console.log(projectData);
    const result = yield project_service_1.ProjectSrvices.createProjectsfromDB(projectData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Product is created succesfully',
        data: result,
    });
}));
const getAllProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.ProjectSrvices.getAllProjectsfromDB();
    // Response
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Project fetched successfully",
        data: result,
    });
}));
const getProjectByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield project_service_1.ProjectSrvices.getProjectByIdfromDB(req.params.projectId);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Project fetched successfully",
            data: product,
        });
    }
    catch (error) {
        const stackerror = new Error();
        res.json({
            message: 'An error occurred while retrieving product',
            status: false,
            error: error,
            stack: stackerror.stack,
        });
    }
});
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const projectId = req.params.projectId;
        const result = yield project_service_1.ProjectSrvices.updateProjectByIdfromDB(projectId, productData);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Project Upodate successfully",
            data: result,
        });
    }
    catch (error) {
        const stackerror = new Error();
        res.json({
            message: 'An error occurred while updating product',
            status: false,
            error: error,
            stack: stackerror.stack,
        });
    }
});
const deleteProjectbyID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectId = req.params.projectId;
        const result = yield project_service_1.ProjectSrvices.deleteProjectByIdfromDB(projectId);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Project Delete successfully",
            data: result,
        });
    }
    catch (error) {
        const stackerror = new Error();
        res.json({
            message: 'An error occurred while deleting product',
            status: false,
            error: error,
            stack: stackerror.stack,
        });
    }
});
exports.projectController = {
    createNewProjects,
    getAllProject,
    getProjectByID,
    updateProject,
    deleteProjectbyID,
};
