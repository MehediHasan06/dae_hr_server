const { model, Schema } = require('mongoose');

// Employee address info model constructor
const AddressModel = new Schema({
    employee:{
        type: Schema.Types.ObjectId,
        ref: 'employee_auth'
    },
    
    present_district: {
        type: Schema.Types.ObjectId,
        ref: 'district'
    },
    present_upazilla: {
        type: Schema.Types.ObjectId,
        ref: 'upazilla'
    },
    present_postOffice: {
        type: Schema.Types.ObjectId,
        ref: 'post_office'
    },
    present_village: {
        type: String 
    },
    present_road: {
        type: String
    },    
    
    permanent_district: {
        type: Schema.Types.ObjectId,
        ref: 'district'
    },
    permanent_upazilla: {
        type: Schema.Types.ObjectId,
        ref: 'upazilla'
    },
    permanent_postOffice: {
        type: Schema.Types.ObjectId,
        ref: 'post_office'
    },
    permanent_village: {
        type: String 
    },
    permanent_road: {
        type: String
    }

});

module.exports = model('employee_addressInfo', AddressModel);
