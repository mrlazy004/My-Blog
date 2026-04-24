import { Router, type IRouter } from "express";
import healthRouter from "./health";

const router: IRouter = Router();

router.get("/", (req, res) => {
  res.json({ message: "Resume Profiler API", health: "/healthz" });
});

router.use(healthRouter);

export default router;
