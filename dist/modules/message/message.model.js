"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MessageSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamps: true } // Automatically adds `createdAt` and `updatedAt`
);
const Messages = (0, mongoose_1.model)('messages', MessageSchema);
exports.default = Messages;
