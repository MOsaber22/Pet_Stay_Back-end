const multer = require('multer');
const cloudinary = require("../config/cloudinary");
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'cats',
        allowed_formats: ['jpg', 'jpeg', 'png'],
    },
})

const checkAllowedImgs = (req, file, next) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
        next(null, true);
    }else {
        next(new Error('Invalid file type. Only JPEG, JPG, and PNG are allowed.'), false);
    }
}

const upload = multer({
    storage,
    checkAllowedImgs,
    limits: {
        fileSize: 1024 * 1024 * 5, // 5MB
    }
})

module.exports = upload;