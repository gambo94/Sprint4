const { Router } = require('express');
const router = Router();


// routes
router.get('/index', (req, res) =>{
    res.render('index', {
        //making the title dynamic
        title: 'cool title'
    });
})

router.get('/about', (req, res) =>{
    res.render('about');
})


// upload route
router.post('/upload-image', (req, res) => {
        if(req.fileValidationError){
            return res.send(req.fileValidationError);
        } else if (!req.file) {
            return res.send('Please select an image to upload');
        } 
        // else if (err instanceof multer.MulterError) {
        //     return res.send(err);
        // } else if (err) {
        //     return res.send(err);
        // }
        //res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./index">Upload another image</a>`);

        res.render('upload-image')
    });

module.exports = router;