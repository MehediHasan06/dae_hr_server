const { model, Schema } = require('mongoose');

// Employee Discipline Action model constructor
const DisciplineAction = new Schema({
    employee:{
        type: Schema.Types.ObjectId,
        ref: 'employee_auth'
    },
    offense: {
        type: String,
    },
    natureOfPunishment: {
        type: String,
    },
    punishment: {
        type: String,
    },
    goDate: {
        type: Date
    },
});

module.exports = model('employee_disciplineAction', DisciplineAction);
