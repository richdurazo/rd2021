exports.getPosts = (req, res, next) => {
    res.status(200).json({ 
        posts: [{title: 'first post', content: 'this is the first post'}]
    })
}