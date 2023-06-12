const express = require('express')

const userController = require('../controllers/userController');
const chatController = require('../controllers/chatController');
const postController = require('../controllers/postController');





let router = express.Router();

let initRoutes = (app) => {



    router.post('/api/login', userController.handleLogin); //done
    router.get('/api/get-all-users', userController.handleGetAllUSER);//done
    router.post('/api/create-new-userAdm', userController.handleCreateNewUserAdmin); //done
    router.post('/api/create-new-user', userController.handleCreateNewUser); //done
    router.put('/api/edit-userAdm', userController.handleEditUser);
    router.delete('/api/delete-userAdm', userController.handleDeleteUser);

 
    router.get('/api/get-all-post', postController.handleGetAllPost);//done/
    router.post('/api/create-new-post', postController.handleCreateNewPost); //done
    router.put('/api/edit-post', postController.handleEditPost);
    router.delete('/api/delete-post', postController.handleDeletePost);

    // router.post('/api/login', userController.handleLogin); //done
    router.get('/api/get-all-chat', chatController.handleGetAllChat);//done
    // router.post('/api/create-new-userAdm', userController.handleCreateNewUserAdmin); //done
    // router.post('/api/create-new-user', userController.handleCreateNewUser); //done
    // router.put('/api/edit-userAdm', userController.handleEditUser);
    // router.delete('/api/delete-userAdm', userController.handleDeleteUser);



    app.use("/", router)
}
module.exports = initRoutes;