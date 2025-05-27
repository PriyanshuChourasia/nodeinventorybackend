import dotenv from "dotenv";
import {z} from "zod";

dotenv.config();

const envSchema = z.object({
    PORT: z.string().default("8008"),
    DATABASE_URL: z.string().url()
});

const parsedEnv = envSchema.safeParse(process.env);

if(!parsedEnv.success){
    console.error("Invalid environment variables: ",parsedEnv.error.format());
    process.exit(1);
}


export const env = parsedEnv.data;