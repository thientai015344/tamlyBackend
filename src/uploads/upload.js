const fs = require('fs');
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