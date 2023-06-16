const PostSevice = require('../services/PostSevice');


let handleGetAllPost = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            user: []
        })
    }
    let user = await PostSevice.getAllPost(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        user
    })
}

let handleCreateNewPost = async (req, res) => {
  //  console.log(req.body)
    let message = await PostSevice.CreateNewPost(req.body);
    return res.status(200).json(message);

}

let handleDeletePost = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameter !'

        })
    }
    let message = await PostSevice.deletePost(req.body.id);
    return res.status(200).json(message);
}

let handleEditPost = async (req, res) => {
    let data = req.body;
    let message = await PostSevice.updatePost(data);
    return res.status(200).json(message);
}













module.exports = {
    
    handleGetAllPost: handleGetAllPost,
    handleCreateNewPost: handleCreateNewPost,
    handleDeletePost: handleDeletePost,
    handleEditPost: handleEditPost,
}