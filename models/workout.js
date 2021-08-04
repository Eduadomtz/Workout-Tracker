const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Enter the name of the Exercise"
            },

            type: {
                type: String,
                trim: true,
                required: " Enter the Type of Exercise"
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number,
                required: "Enter the duration of the workout"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },

        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;