import { getUsers } from "../contollers/userController";
import { Router } from "express";

const router = Router();

router.get("/", getUsers);

export default router;