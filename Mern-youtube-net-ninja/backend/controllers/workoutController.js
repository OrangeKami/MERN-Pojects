import Workout from "../models/workoutModel.js";
import mongoose from "mongoose";

//* get all workouts
export const getWorkouts = async (req, res) => {
  // desent sort
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// * get a single workout
export const getWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findById(id);
    res.status(200).json(workout);
  } catch (err) {
    res.status(404).json({ error: "No such workout" });
  }
};

//  * create a new workout
export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  // * add to DB
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// * delete a workout
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  await Workout.findByIdAndRemove(id);
  res.json({ message: "Workout deleted successfully" });
};

// * update a workout
export const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { title, reps, load } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updateWorkout = { title, reps, load, _id: id };
  await Workout.findByIdAndUpdate(id, updateWorkout, { new: true });
  res.json(updateWorkout);
};
