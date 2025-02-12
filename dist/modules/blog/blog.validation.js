"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogContentValidationSchema = void 0;
const zod_1 = require("zod");
const createblogContentValidationSchema = zod_1.z.object({
    blogtitle: zod_1.z.string(),
    blogImage: zod_1.z.string(),
    blogContent: zod_1.z.string(),
    blogAuthor: zod_1.z.string(),
});
const updateblogContentValidationSchema = zod_1.z.object({
    blogtitle: zod_1.z.string().optional(),
    blogImage: zod_1.z.string().optional(),
    blogContent: zod_1.z.string().optional(),
    blogAuthor: zod_1.z.string().optional(),
});
exports.blogContentValidationSchema = {
    createblogContentValidationSchema,
    updateblogContentValidationSchema
};
