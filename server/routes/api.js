import Router from "express";
import Second from "./second.js";

const router = Router();

router.get("/", Second.Get);
router.get("/:id", Second.GetId);
router.post("/", Second.Post);
router.delete("/delete/:id", Second.Delete);

export default router;
