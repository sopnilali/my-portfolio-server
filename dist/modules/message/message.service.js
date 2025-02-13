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
exports.MessageSrvices = void 0;
const message_model_1 = __importDefault(require("./message.model"));
const createMessagesfromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield message_model_1.default.create(payload);
    return result;
});
const getAllMessagesfromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield message_model_1.default.find().sort({ createdAt: -1 });
    return result;
});
const getMessagesByIdfromDB = (messageid) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield message_model_1.default.findById(messageid);
    return result;
});
const updateMessagesByIdfromDB = (messageid, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield message_model_1.default.findByIdAndUpdate(messageid, payload, {
        new: true,
    });
    return result;
});
const deleteMessagesByIdfromDB = (messageid) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield message_model_1.default.findByIdAndDelete(messageid);
    return result;
});
exports.MessageSrvices = {
    createMessagesfromDB,
    getAllMessagesfromDB,
    getMessagesByIdfromDB,
    updateMessagesByIdfromDB,
    deleteMessagesByIdfromDB,
};
