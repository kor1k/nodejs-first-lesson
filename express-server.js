const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json);

add.post('/',(req,res)=>{
    console.log(req.body.foo);
    res.send('ok');
});

app.get('/', (req, res) => {
    // res.send('vadila privet');
    res.sendFile(path.join(__dirname + '/src/index.html'));
});
app.get('/users/:id', (req, res) => {
    res.send('hello user number ' + req.params);
});
app.route('/user')
    .get((req, res) => {
        res.send('get a user')
    })
    .post((req, res) => {
        res.send('add a new user')
    })
    .put((req, res) => {
        res.send('updated a user')
    });

app.listen(3000);