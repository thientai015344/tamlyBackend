const fs = require('fs');
<<<<<<< HEAD
const path = require('path');

let uploadImg = (data) => {
    console.log('data new post service', data);
    return new Promise(async (resolve, reject) => {
        try {
            if (!data) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing image data'
                });
            } else {
                // Remove the header from the base64 data
                const base64Data = data.img.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');

                // Generate a unique filename for the image
                const filename = `image_${Date.now()}.${data.img.split('/')[1].split(';')[0]}`;

                // Define the path to save the image
                const imagePath = path.join(__dirname, '../uploads/images', filename);
                console.log(imagePath)

                // Save the image file to the folder
                fs.writeFileSync(imagePath, base64Data, 'base64');

                // Return the image path
                resolve({
                    imagePath: imagePath
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};



module.exports = {
    uploadImg: uploadImg, 
}
=======
const uuid = require('uuid');


const saveImage = (imageData, folderPath) => {
    return new Promise((resolve, reject) => {
        const fileName = `${uuid.v4()}.png`;

        // Đường dẫn lưu ảnh
        const filePath = folderPath+fileName;
        
        // Gỡ bỏ tiền tố 'data:image/png;base64,' để chỉ lấy dữ liệu base64
        const base64DataWithoutPrefix = imageData.replace(/^data:image\/png;base64,/, '');
        
        // Ghi dữ liệu base64 vào file
        fs.writeFileSync(filePath, base64DataWithoutPrefix, 'base64');  
      resolve(fileName)
    });
  };


  module.exports ={
    saveImage: saveImage
  }
>>>>>>> 59aed12ba88a7611d74caee88c83092f8f0b8b3f
