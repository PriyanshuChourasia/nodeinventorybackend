import bodyParser from "body-parser";
import express, {Express} from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

export function appMiddleware(app:Express){
    dotenv.config();
    app.use(express.json());
    app.use(helmet());
    app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
    app.use(morgan("common"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(cors());
}