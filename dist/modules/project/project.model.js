"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    descriptions: {
        type: String,
        required: true,
    },
    tools: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    githubfrontend: {
        type: String,
        required: true,
    },
    livelink: {
        type: String,
        required: true,
    },
    githubbackend: {
        type: String,
        required: true,
    },
    projectduration: {
        type: String,
        required: true,
    },
    projectstatus: {
        type: String,
        required: true,
    }
}, { timestamps: true } // Automatically adds `createdAt` and `updatedAt`
);
const Projects = (0, mongoose_1.model)('projects', ProjectSchema);
exports.default = Projects;
