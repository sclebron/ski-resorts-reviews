const { Schema, model } = require('./mongoose');

const resortSchema = new Schema({

})

const Resort = model("Resort", resortSchema);

module.exports = Resort;