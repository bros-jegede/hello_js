require ('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.Port;
co

app.use(express.json());// middle waren
app.post('/echo', (req,res)=>{ 
     console.log(req.body);
     res.json({echoed: req.body});
})

app.get('/' ,(req, res) => {
res.send ('Hello from express');
});
app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`);
})