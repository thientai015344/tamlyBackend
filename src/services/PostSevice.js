
import db from '../models'
import upload from '../uploads/upload'

let getAllPost = (id) => {

    return new Promise(async (resolve, reject) => {
        try {
            let posts = '';
            if (id === 'ALL') {
                posts = await db.post.findAll();
            }

            if (id && id !== 'ALL') {
                posts = await db.post.findOne({
                    where: { id: id }
                })
            }
            resolve(posts);
        } catch (error) {
            reject(error);
        }
    })
}

let CreateNewPost = (data) => {
    console.log('data new post sevice', data)
    return new Promise(async (resolve, reject) => {
        try {
         
            if (!data) {

                resolve({
                    errCode: 1,
                    errMessage: 'data null'
                })

            } else {
                
              //  let pathimg = await upload.uploadImg(data.img)

                await db.post.create({
                    title: data.title,
                    discription: discription,
                    content: data.content,
                    userId: pathimg

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
    getAllPost: getAllPost,
    CreateNewPost: CreateNewPost,
    deletePost: deletePost,
    updatePost: updatePost,
}