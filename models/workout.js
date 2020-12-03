
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    lowercase: true,
                    trim: true,
                    enum: ["resistance", "cardio"],
                    required: [true, "Enter exercise type"],
                },
                name: {
                    type: String,
                    trim: true,
                    required: [true, "Enter exercise name"],
                },
                duration: {
                    type: Number,
                    min: [0, "Exercise duration cannot be negative"],
                    required: [true, "Exercise duration is required"],
                },
                weight: {
                    type: Number,
                    min: [0, "Weight cannot be negative"],
                },

                reps: {
                    type: Number,
                    min: [0, "Reps cannot be negative"],
                },

                sets: {
                    type: Number,
                    min: [0, "Sets cannot be negative"],
                },

                distance: {
                    type: Number,
                    min: [0, "Distance cannot be negative"],
                },
            },
        ],
    },
);

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
