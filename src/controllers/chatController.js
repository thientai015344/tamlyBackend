const ChatSevice = require('../services/ChatSevice');






let handleGetAllChat = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            user: []
        })
    }
    let user = await ChatSevice.getAllChats(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        user
    })

}




module.exports = {

    // handleLogin: handleLogin,
    handleGetAllChat: handleGetAllChat,
    // handleCreateNewUserAdmin: handleCreateNewUserAdmin,
    // handleCreateNewUser: handleCreateNewUser,
    // handleDeleteUser: handleDeleteUser,
    // handleEditUser: handleEditUser,
}