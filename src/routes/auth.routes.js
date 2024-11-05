import { Router } from "express";
import {
  authLoginCon,
  authRegisterCon
} from "../controllers/index.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { RegisterSchema } from "../schema/register.schema.js";
import { LoginSchema } from "../schema/login.schema.js";


export const authRoutes = new Router();

authRoutes.post("/register", authMiddleware(RegisterSchema), authRegisterCon);
authRoutes.post("/login", authMiddleware(LoginSchema), authLoginCon);