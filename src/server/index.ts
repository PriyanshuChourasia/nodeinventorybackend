import { env } from "config/env.config";
import {Express, Request, Response} from "express";

const port = env.PORT;

export function serverInitialization(app:Express){
    app.listen(port,()=>{
        console.log(`Application running at ${port}`);
        console.log(`Application url http://localhost:${port}`);
    });

    app.get("/",(req: Request,res: Response)=>{
        res.status(200).json({
            data:"Inventory Management",
            success:true
        });
    })
}