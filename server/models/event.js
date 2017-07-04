/*jshint esversion: 6 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: String,
    location: String,
    details: String,
    date: Date
});

module.exports = mongoose.model('event', eventSchema);
