import express from "express";
const router = express.Router();

import {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";



router.get("/", getWorkouts);

// * get a single workeout
router.get("/:id", getWorkout);

//  * post a new workeout
router.post("/", createWorkout);

// * delete  a workeout
router.delete("/:id", deleteWorkout);

// *update a workeout
router.put("/:id", updateWorkout);

export default router;
