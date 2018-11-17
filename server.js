//http module

// const http = require('http');
// fs = require('fs');
//
// http.createServer(function (req, res) {
//     fs.readFile('./src/index.html', 'utf8',
//         (err, data) => {
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);


//express
// const express = require('express');
// // const path = require('path');
// const app = express();
//
// app.get('/',(req, res)=>{
//     res.send('hello world');
//     // res.sendFile(path.join(_dirname + 'src/index.html'));
// });
//
// const express = require('express');
// // const path = require('path');
// const app = express();
//
// app.get('/users',(req, res)=>{
//     res.send('hello world');
//     // res.sendFile(path.join(_dirname + 'src/index.html'));
// });
//
// app.listen(3000);