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
exports.messageController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const message_service_1 = require("./message.service");
const createNewMessages = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    const MessageData = {
        name,
        email,
        message
    };
    const result = yield message_service_1.MessageSrvices.createMessagesfromDB(MessageData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Message is created succesfully',
        data: result,
    });
}));
const getAllMessage = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield message_service_1.MessageSrvices.getAllMessagesfromDB();
    // Response
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Message fetched successfully",
        data: result,
    });
}));
const getMessageByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield message_service_1.MessageSrvices.getMessagesByIdfromDB(req.params.messageid);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Message fetched successfully",
            data: result,
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
const updateMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const messageid = req.params.messageid;
        const result = yield message_service_1.MessageSrvices.updateMessagesByIdfromDB(messageid, productData);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Message Upodate successfully",
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
const deleteMessagebyID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messageid = req.params.messageid;
        const result = yield message_service_1.MessageSrvices.deleteMessagesByIdfromDB(messageid);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Message Delete successfully",
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
exports.messageController = {
    createNewMessages,
    getAllMessage,
    getMessageByID,
    updateMessage,
    deleteMessagebyID,
};
