const { model, Schema } = require('mongoose');

// Employee Award Info model constructor
const EmployeeAwardInfo = new Schema({
    employee:{
        type: Schema.Types.ObjectId,
        ref: 'employee_auth'
    },
    name: { 
        type: String
    },
    ground: { 
        type: String
    },
    date: {
        type: String
    }
});

module.exports = model('employee_awardInfo', EmployeeAwardInfo);