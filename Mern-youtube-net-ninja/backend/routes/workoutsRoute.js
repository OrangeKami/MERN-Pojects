import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message:"Workouts"})
})

router.get("/:id", (req, res) => {
  res.json({ message: "Workouts by id" });
});

export default router;
