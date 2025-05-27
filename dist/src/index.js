"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("middlewares");
const server_1 = require("server");
const app = (0, express_1.default)();
/** Server Initialization */
(0, server_1.serverInitialization)(app);
/** Middleare Configuration */
(0, middlewares_1.appMiddleware)(app);
//# sourceMappingURL=index.js.map