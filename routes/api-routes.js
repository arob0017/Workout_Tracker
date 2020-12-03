const db = require("../models");

// * export routes associated with the API
module.exports = (app) => {
    // get all workouts from db for last workout
    app.get("/api/workouts", async (req, res) => {
        try {
            const allWorkouts = await db.Workout.find({});
            res.status(200).json(allWorkouts);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    });

    // get all workouts from db for stats page
    app.get("/api/workouts/range", async (req, res) => {
        try {
            const workoutData = await db.Workout.find({});
            res.status(200).json(workoutData);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    });

    // add a new workout to db
    app.post("/api/workouts", async (req, res) => {
        try {
            const newWorkout = await db.Workout.create({});
            res.status(201).json(newWorkout);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    });

    // edit a specifc workout in db
    app.put("/api/workouts/:id", async (req, res) => {
        try {
            const currentWorkout = await db.Workout.findById(req.params.id);
            currentWorkout.exercises.push(req.body);
            await currentWorkout.save();
            res.status(201).json(currentWorkout);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    });
};