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
        res.render('upload-image')
    });

module.exports = router;