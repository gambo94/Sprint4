const express = require('express');
const hbs = require('hbs');

const multer = require('multer');
const helpers = require('./helpers');
const path = require('path');

const app = express();




// Settings
hbs.registerPartials(__dirname + 'views/partials', function(err){});
app.set('view engine', 'hbs');
app.set('views', __dirname + "/views");

// middlewares


const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname); // date now allows to have a unique ID for the image
    }
});

const upload = multer({
    storage: storage,
    dest: path.join(__dirname, 'public/uploads'),
    fileFilter: helpers.imageFilter
}).single('image');

app.use(upload);

// Routes
app.use(require('./routes/index-routes'));

// Static files
app.use(express.static(path.join(__dirname , 'public')));

// Starting server
app.listen(8000, () => console.log('server is running on port 8000'));