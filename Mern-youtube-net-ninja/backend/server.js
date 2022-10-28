import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import workoutRouter from "./routes/workoutsRoute.js";

dotenv.config();
// * express app
const app = express();

app.use(cors());
//  * middleware
app.use(express.json());


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// * routes
app.use("/workouts", workoutRouter);

//  * connect to MongoDB
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    //  * listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Connect to MongoDB & Listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

