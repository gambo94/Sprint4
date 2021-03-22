const express = require('express');
const app = express();
const path = require('path');


app.get('/user', ((req, res) =>{
    res.json(
        {
            name: 'Federico',
            age: 26,
            url: req.url
        }
    );
}));

let pathPublic = path.resolve('./public');

// this middleware allows to render on the web the files located in the public folder
app.use(express.static(pathPublic, {
    // this second parameter allows to thype the file name without the extension and still display it
    extensions: ['html']
}));


app.listen(8000, () => console.log('server is running on port 8000'));