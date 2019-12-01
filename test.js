//body-parser 테스트용

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

// create server
const app = express();
const server = http.createServer(app);

/* HTTP BODY 처리 */
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`); // client1
});

app.post('/testpost',(req,res)=>{
console.log(req.body.text);
console.log('---------')
res.send(200);
});

server.listen( 3000, () => {
  console.info('APP', `listening on port 3000, in local mode.`);
});

module.exports = server;
