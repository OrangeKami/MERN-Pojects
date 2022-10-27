const workoutRouter = (app) => {
  app.route("/workouts")
    .get((req,res) => {
        res.json({ message: "Workouts"})
  })
};

export default workoutRouter;
