import express from "express";
import { appMiddleware } from "middlewares";
import { serverInitialization } from "server";

const app = express();


/** Server Initialization */
serverInitialization(app);
/** Middleare Configuration */
appMiddleware(app);