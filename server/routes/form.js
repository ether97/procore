import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {getForm} from '../controllers/form.js'

const router = express.Router();

router.get("/:id", verifyToken, getForm);

export default router;
