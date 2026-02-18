const express = require('express')

const app = express();

app.get("/user",(req, res) =>{
    res.json({name:John, age:30});
})

app.listen(3000)

app.get("/user", (req, res) =>{
    
})

