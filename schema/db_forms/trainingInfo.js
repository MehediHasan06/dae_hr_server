const { model, Schema } = require('mongoose');

// Employee training info model constructor
const TrainingModel = new Schema({
    employee:{
        type: Schema.Types.ObjectId,
        ref: 'employee_auth'
    },
    triningType: {
        type: String
    },
    trainingTitle: {
        type: String
    },
    instituteName: {
        type: String
    },
    Country: {
        type: String
    },
    grade: {
        type: String
    },
    position: {
        type: String
    },
    startingDate: {
        type: String
    },
    endingDate: {
        type: String
    },    
});

module.exports = model('employee_trainingInfo', TrainingModel);
