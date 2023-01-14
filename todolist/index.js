// install express with `npm install express` 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const ejs = require('ejs')
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let itemsArr = [];

app.get('/', function (req, res){
    let today = new Date();
    var options = 
{ 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long'
}
let day = today.toLocaleDateString("en-US", options)    

res.render('list', {kindOfDay: day, newListItem: itemsArr})
})


app.use(express.static(('public')));


app.post('/', function (req, res){
    let item = req.body.newItem
    itemsArr.push(item)
    res.redirect('/')
})












app.listen(3000, function (){
    console.log('up on 3k')
})

// export 'app'
module.exports = app