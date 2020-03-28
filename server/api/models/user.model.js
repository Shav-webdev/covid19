const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
    firstName: {
        type: String,
        minlength: [2, "Name must be at least 2 characters."],
        maxlength: [20, "Name must be less than 20 characters."],
        validate: {
            validator: function (v) {
                const re = new RegExp(/^([a-zA-Z]{2,20})$/);
                return re.test(v);
            },
            message: `Name is not a valid name!`,
        },
        required: [true, "Name field is required!"],
    },
    lastName: {
        type: String,
        minlength: [2, "Username must be at least 2 characters."],
        maxlength: [20, "Username must be less than 20 characters."],
        validate: {
            validator: function (v) {
                const re = new RegExp(/^([a-zA-Z]{2,20})$/);
                return re.test(v);
            },
            message: `Last name is not a valid last name!`,
        },
        required: [true, "Last name field is required!"],
    },
    temperature: {
        type: Number,
        min: [33, "Temperature field min is 36 degree"],
        max: [45, "Your temperature is too high"],
        validate: {
            validator: function (v) {
                return !(v <= 33 && v >= 45);
            },
            message: `Temperature field is not a valid!`,
        },
        required: [true, "Temperature name field is required!"],
    },
    birthday: {
        type: Date,
        min: ["1920-01-01", "Last date is not supported!"],
        max: [new Date(), "Future date is not supported!"],
        required: [true, "Birthday name field is required!"],
    },
    location: {
        type: {
            type: String,
            default: "Point",
        },
        coordinates: {
            type: [Number],
            required: [true, "Coordinates is required!"],
        },
    },
    createdTime: {
        type: Number,
        default: () => Number(Date.now()),
    },
});
usersSchema.index({ location: "2dsphere" });
module.exports = model("User", usersSchema);
