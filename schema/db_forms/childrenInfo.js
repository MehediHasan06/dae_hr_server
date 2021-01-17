const { model, Schema } = require('mongoose');

// Employee Children Info model constructor
const ChildrenModel = new Schema({
    employee:{
        type: Schema.Types.ObjectId,
        ref: 'employee_auth'
    },
    name: {
        type: String  
    },
    Dob: {
        type: Date
    },
    sex: {
        type: String
    }
});

module.exports = model('employee_childrenInfo', ChildrenModel);
