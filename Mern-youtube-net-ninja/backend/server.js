import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import workoutRouter from './routes/workoutsRoute.js'

dotenv.config();
// * express app
const app = express();

app.use(cors());
//  * middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// * routes
app.use("/workouts", workoutRouter);

app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

//  * listen for requests
app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})

