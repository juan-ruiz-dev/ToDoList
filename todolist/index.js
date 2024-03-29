// install express with `npm install express` 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const ejs = require('ejs')
app.use(bodyParser.urlencoded({ extended: true }));
const date = require(__dirname + "/date.js")

app.set('view engine', 'ejs');

let itemsArr = [];
let workItems = [];

app.get('/', function (req, res){

 let day = date.getDate();

res.render('list', {listTitle: day, newListItem: itemsArr})
})


app.use(express.static(('public')));


app.post('/', function (req, res){
    let item = req.body.newItem
    if(req.body.list === "Work") {
        workItems.push(item)
        res.redirect('/work')
    }else {
        itemsArr.push(item)
        res.redirect('/')
    }
    
})

app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItem: workItems})
})


app.post("/work", function(req, res){
    
    let item = req.body.newListItem;


    workItems.push(item)
    res.redirect('/work')
})

app.get('/about', function(req, res){
    res.render('about')
})





app.listen(3000, function (){
    console.log('up on 3k')
})

// export 'app'
module.exports = app