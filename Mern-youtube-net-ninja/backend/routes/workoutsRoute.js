import express from "express";
import { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } from "../controllers/workoutController.js";

const router = express.Router();

router.get("/", getWorkouts);

// * get a single workeout
router.get("/:id", getWorkout);

//  * post a new workeout
router.post("/", createWorkout);

// * delete  a workeout
router.delete("/:id", deleteWorkout);

// *update a workeout
router.put("/:id", (req, res) => {
  res.json({ message: "Update workeout" });
});

export default router;
