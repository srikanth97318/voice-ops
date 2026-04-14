import { Router } from "express";
import {
  createTaskHandler,
  listTasksHandler,
} from "../controllers/task.controller.js";

const router = Router();

router.post("/", createTaskHandler);
router.get("/", listTasksHandler);

export default router;