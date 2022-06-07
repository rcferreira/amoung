import { Router } from "express";
import JobController from "./controllers/JobController";

const jobController = new JobController();

const router = Router();

router.get("/jobs/:filter?", jobController.findAll);
// router.get("/jobs/create", jobController.create); // Acredito que não precise de rota createm

export { router };
