const { model, Schema } = require('mongoose');

// Employee foreign travel info model constructor
const TravelModel = new Schema({
    employee:{
        type: Schema.Types.ObjectId,
        ref: 'employee_auth'
    },
    country: {
        type: String
    },
    travelPurpose: {
        type: String
    },
    fromDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    }
});

module.exports = model('employee_travelInfo', TravelModel);
