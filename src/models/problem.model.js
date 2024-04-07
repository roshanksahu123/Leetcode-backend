const mongoose = require('mongoose');
//By using schema we can make proper ORM queries
const problemSchema  = mongoose.Schema({
    title : {
        type: String,
        required: [true,'Need title of the problem'] 
    },
    description : {
         type: String,
         required: [true,'Need description of the problem']
    },
    difficulty : {
        type: String,
        enum: ['easy' ,'medium','hard'],
        required: [true,'Need difficulty of the problem'],
        default: 'easy' 
    },
    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
    ],
    editorial: {
        type: String 
    }
});
//model helps to query the Problem schema 
const Problem = mongoose.model('Problem',problemSchema);

module.exports = Problem;