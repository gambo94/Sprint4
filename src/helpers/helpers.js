const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        return cb('Error: Only image files with extensions .png, .gif, .png are allowed!');
    }
    cb(null, true);
};
exports.imageFilter = imageFilter;