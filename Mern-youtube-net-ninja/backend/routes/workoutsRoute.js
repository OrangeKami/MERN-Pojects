import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message:"Workouts"})
})

// * get a single workeout
router.get("/:id", (req, res) => {
  res.json({ message: "Workout by id" });
});

//  * post a new workeout
router.post("/", (req, res) => {
    res.json({ message: "Post new workeout" });
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
