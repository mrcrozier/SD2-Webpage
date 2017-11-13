const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create coaster Schema & model
const CoasterSchema = new Schema({
    coasterId: {
        type: String,
        required: [true, 'CoasterId field is required']
    },
    tableId: {
        type: String
    },
    needsRefill: {
        type: Boolean,
        default: false
    },
    connected: {
        type: Boolean,
        default: false
    },
    cupPresent: {
        type: Boolean,
        default: false
    }
    // add in geo location
});

const Coaster = mongoose.model('coaster', CoasterSchema);

module.exports = Coaster;