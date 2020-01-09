// jobsModel.js
var mongoose = require('mongoose');
// Setup schema
var jobsSchema = mongoose.Schema({
        post: { //Должность
            type: String,
            required: true
        },
        salary: { //Зарплата
            type: String,
            required: true
        },
        duties: { //Обязанности
            type: String,
            required: true
        },
        requirements: {//Требования
            type: String,
            required: true
        },
        conditions: {//Условия
            type: String,
            required: true
        },
        create_date: {
            type: Date,
            default: Date.now
        }
});
// Export Jobs model
var Jobs = module.exports = mongoose.model('jobs', jobsSchema);
module.exports.get = function (callback, limit) {
    Jobs.find(callback).limit(limit);
}