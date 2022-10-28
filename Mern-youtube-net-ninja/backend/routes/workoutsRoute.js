import express from "express";
import mongoose from "mongoose";
import  { workoutSchema } from "../models/workoutModel.js";

const router = express.Router();


const Workout = mongoose.model("Workout", workoutSchema);


router.get('/', (req, res) => {
    res.json({ message:"Workouts"})
})

// * get a single workeout
router.get("/:id", (req, res) => {
  res.json({ message: "Workout by id" });
});

//  * post a new workeout
router.post("/", async (req, res) => {
    const {title, load, reps} = req.body;

    try{
      const workout = await Workout.create({title, load, reps})
      res.status(200).json(workout)
    } catch(err){
      res.status(400).json({err: err.message})
    }
});

// * delete  a workeout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete workeout" });
});

// *update a workeout
router.put("/:id", (req, res) => {
  res.json({ message: "Update workeout" });
});


export default router;
