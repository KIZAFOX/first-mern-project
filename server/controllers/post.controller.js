const postModel = require('../models/post.model')
const ObjectID = require("mongoose").Types.ObjectId

module.exports.getPosts = async (req, res) => {
    try {
        const data = await postModel.find({}).sort({ createdAt: -1 })
        return res.status(200).send(data)
    }catch (err){
        return res.status(400).send('Error: ' + err)
    }
}

module.exports.getPost = async (req, res) => {
    try {
        if (!ObjectID.isValid(req.params.id))
            return res.status(400).send("ID unknown : " + req.params.id)

        const data = await postModel.findById(req.params.id)
        return res.status(200).send(data)
    }catch (err){
        return res.status(400).send('Error: ' + err)
    }
}

module.exports.searchPost = async (req, res) => {
    try{
        const data = await postModel.find({ title: { $regex: req.params.query, $options: 'i'}})

        if(data.length === 0){
            return res.status(404).send('Unknown post!')
        }
        return res.status(200).send(data)
    }catch (err){
        return res.status(400).send('Error: ' + err)
    }
}

module.exports.addPost = async (req, res) => {
    const newPost = new postModel(
        {
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            content: req.body.content
        }
    )

    try {
        const post = await newPost.save()
        return res.status(201).json(post)
    }catch (err){
        return res.status(400).json(err)
    }
}