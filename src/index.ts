import express from "express";
import { appMiddleware } from "./middlewares";
import { serverInitialization } from "./server";
import { appRoutes } from "routes";

const app = express();


/** Server Initialization */
serverInitialization(app);
/** Middleare Configuration */
appMiddleware(app);
/** Route Configuration */
appRoutes(app);