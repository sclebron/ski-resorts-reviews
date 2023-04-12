const { Schema, model } = require('./mongoose');

const resortSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,
    },
    url: {
        type: String,
        required: true,
        trim: true,
    }
})

const Resort = model("Resort", resortSchema);

module.exports = Resort;