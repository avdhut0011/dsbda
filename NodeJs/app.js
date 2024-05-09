const express = require("express");
const path = require("path");
const ejs = require("ejs");
const parser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = 3000;

const app = express();

app.use('/static', express.static('static'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, './views'));

const router = new express.Router();
router.get('/', (req, res) => {
    res.status(200).render('home');
});
router.get('/about', (req, res) => {
    res.status(200).render('about');
});
router.get('/contact', (req, res) => {
    res.status(200).render('contact');
});
app.use('',router);

app.listen(port, ()=>{
    console.log(`The app started successfully on port ${port}`);
})