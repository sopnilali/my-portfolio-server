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
exports.blogServices = void 0;
const blog_model_1 = __importDefault(require("./blog.model"));
const createBlogContentFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (yield blog_model_1.default.create(payload));
    return result;
});
const getBlogContentFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    // Fetch blogs from DB with sorting
    const allblogs = yield blog_model_1.default.find();
    return allblogs;
});
const getSingleBlogContentFromDB = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.default.findById(blogId);
    return result;
});
const updateBlogContentFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
const deleteBlogContentByIdfromDB = (blogid) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.default.findByIdAndDelete(blogid);
    return result;
});
exports.blogServices = {
    createBlogContentFromDB,
    getBlogContentFromDB,
    updateBlogContentFromDB,
    deleteBlogContentByIdfromDB,
    getSingleBlogContentFromDB
};
