"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRoutes = void 0;
const express_1 = __importDefault(require("express"));
const message_controller_1 = require("./message.controller");
const router = express_1.default.Router();
router.post('/', message_controller_1.messageController.createNewMessages); // create new Projects routes
router.get('/', message_controller_1.messageController.getAllMessage); // get all Projects routes
router.get('/:messageid', message_controller_1.messageController.getMessageByID); // get all Projects routes by product id
router.put('/:messageid', message_controller_1.messageController.updateMessage); // update Project routes by product id and update specific products
router.delete('/:messageid', message_controller_1.messageController.deleteMessagebyID); // delete Project routes by product id
exports.messageRoutes = router;
