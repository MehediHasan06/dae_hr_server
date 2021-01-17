const { model, Schema } = require('mongoose');

// Employee publication info model constructor
const PublicationInfoSchema = new Schema({
    employee:{
        type: Schema.Types.ObjectId,
        ref: 'employee_auth'
    },
    type: {
        type: String
    },
    title: {
        type: String
    },
    date: {
        type: Date
    }
});

module.exports = model('employee_publicationInfo', PublicationInfoSchema);