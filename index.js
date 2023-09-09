const express = require('express')
const app = express()
const port = 4000;

/* 
function helloworld (req,res,next)
{
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World')
}
app.use('/hello',helloworld);
app.listen(3000)
*/
app.get('/helloworld', (req, res) => {
  res.send('Hello World!')
})
app.get('/goodbyeworld', (req, res) => {
  res.send('Good Bye World!')
})
app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})