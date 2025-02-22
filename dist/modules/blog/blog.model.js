"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    publish_date: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    blog_image: {
        type: String,
        required: true,
    },
    total_likes: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const Blog = (0, mongoose_1.model)('blogs', blogSchema);
exports.default = Blog;
