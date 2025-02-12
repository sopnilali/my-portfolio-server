"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    blogtitle: {
        type: String,
        required: true,
    },
    blogImage: {
        type: String,
        required: true,
    },
    blogContent: {
        type: String,
        required: true,
    },
    blogAuthor: {
        type: String,
    },
    isPublished: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });
const Blog = (0, mongoose_1.model)('blogs', blogSchema);
exports.default = Blog;
