const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    temperature: {
        type: Number,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    createdTime: {
        type: Number,
        default: () => Number(Date.now()),
    },
});

module.exports = model('User', usersSchema);