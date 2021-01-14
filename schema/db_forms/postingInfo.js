const { model, Schema } = require('mongoose');

// Employee posting info model constructor
const PostingModel = new Schema({
    employee:{
        type: Schema.Types.ObjectId,
        ref: 'employee_auth'
    },
    designation: {
        type: Schema.Types.ObjectId,
        ref: 'cadre_designation'
    },
    organization: {
        type: String
    },
    country: {
        type: String
    },
    orderDate: {
        type: Date
    },
    JoiningDate: {
        type: Date
    },
    payscale: {
        type: Schema.Types.ObjectId,
        ref: 'cadre_payScale'
    },
    status: {
        type: String
    }
});

module.exports = model('employee_postingInfo', PostingModel);
