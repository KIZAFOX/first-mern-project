const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        title:
            {
                type: String,
                unique: true,
                maxLength: 200,
                required: true
            },
        author:
            {
                type: String,
                maxLength: 200,
                required: true
            },
        category:
            {
                type: String,
                maxLength: 200,
                required: true
            },
        content:
            {
                type: String,
                maxLength: 200,
                required: true
            }
    },
    {
        timeStamp: true
    }
)

module.exports = mongoose.model('post', postSchema)