const express = require('express');
const app = express();
const path = require('path');

// view engine
const hbs = require('hbs');
hbs.registerPartials(__dirname + 'views/partials', function(err){});
app.set('view engine', 'hbs');
app.set('views', __dirname + "/views");

// routes
app.get('/index', (req, res) =>{
    res.render('index', {
        title: 'cool title'
    });
})

app.get('/about', (req, res) =>{
    res.render('about');
})



app.listen(8000, () => console.log('server is running on port 8000'));