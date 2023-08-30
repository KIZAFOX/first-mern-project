const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

module.exports.connectToMongoDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('Connected to MongoDB!')
    }catch (err){
        console.error('Error : ' + err)
    }
}