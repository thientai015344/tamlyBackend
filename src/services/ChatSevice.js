
import db from '../models'
const { Op } = require('sequelize');

let getAllChats = (id) => {

    return new Promise(async (resolve, reject) => {
        try {
            let chats = '';
            if (id === 'ALL') {
                chats = await db.chat.findAll();
            }

            if (id && id !== 'ALL') {
                let idkiemtra = id;
                chats = await db.chat.findAll({
                    where: {
                        [Op.or]: [
                            { incoming_msg_id: idkiemtra },
                            { outcoming_msg_id: idkiemtra }
                        ]
                    }
                })
            }
            resolve(chats);
        } catch (error) {
            reject(error);
        }
    })
}

let CreateNewChat = (data) => {
    console.log('data new post sevice', data)
    return new Promise(async (resolve, reject) => {
        try {      
            if (!data) {
                resolve({
                    errCode: 1,
                    errMessage: 'data null'
                })
            } else {
                await db.chat.create({
                    incoming_msg_id: data.incoming_msg_id,
                    outcoming_msg_id: data.outcoming_msg_id,
                    content: data.content,
                })
                resolve({
                    errCode: 0,
                    message: 'ok'
                })
            }
        } catch (error) {
            reject(error);
        }
    })
}

let deletePost = (id) => {
    return new Promise(async (resolve, reject) => {
        let post = await db.post.findOne({
            where: { id: id }
        })
        if (!post) {
            resolve({
                errCode: 2,
                errMessage: `The post isn't exist`
            })
        }
        // awaxit post.destroy();
        await db.post.destroy({
            where: { id: id }
        });

        resolve({
            errCode: 0,
            message: `delete successfully'`


        })


    })

}

let updatePost = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'missing required data'
                })
            }
            let post = await db.post.findOne({
                where: { id: data.id },
                raw: false
            })
            if (post) {
                post.title = data.title,
                post.discription = discription,
                post.content = data.content,
                post.userId = data.userId

                await post.save();
                resolve({
                    errCode: 0,
                    message: 'updata successfully',
                })

            } else {
                resolve(
                    {
                        errCode: 1,
                        errMessage: `post's not found`
                    }
                );
            }


        } catch (error) {
            reject(error);

        }
    })

}






module.exports = {
    getAllChats: getAllChats,
    CreateNewChat: CreateNewChat,
    // deletePost: deletePost,
    // updatePost: updatePost,
}