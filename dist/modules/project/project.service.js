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
exports.ProjectSrvices = void 0;
const project_model_1 = __importDefault(require("./project.model"));
const createProjectsfromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.create(payload);
    return result;
});
const getAllProjectsfromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.find();
    return result;
});
const getProjectByIdfromDB = (productid) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.findById(productid);
    return result;
});
const updateProjectByIdfromDB = (projectid, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.findByIdAndUpdate(projectid, payload, {
        new: true,
    });
    return result;
});
const deleteProjectByIdfromDB = (projectid) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.findByIdAndDelete(projectid);
    return result;
});
exports.ProjectSrvices = {
    createProjectsfromDB,
    getAllProjectsfromDB,
    getProjectByIdfromDB,
    updateProjectByIdfromDB,
    deleteProjectByIdfromDB,
};
