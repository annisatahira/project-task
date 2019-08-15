/**
 * Book Schema
 */

const mongoose = require("mongoose")
const Schema = mongoose.Schema

let vehicleSchema = new Schema({
    brand: String,
    type: String,
    cc: {
        type: Number,
        default: 0
    },
    owner: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

let Vehicle = mongoose.model("Vehicle", vehicleSchema)

module.exports = Vehicle