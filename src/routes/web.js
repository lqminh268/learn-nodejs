import express from "express";
import {
  getRootPath, getAnotherPath, getProfilePath
} from "../controllers/rootController.js";

const router = express.Router();

router.get("/", getRootPath);

router.get("/another", getAnotherPath);

router.get("/igotthepower", getProfilePath);

export default router;
