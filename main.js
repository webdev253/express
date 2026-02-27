const express = require('express');
const app = express();

app.use(express.json());

let users = [
    {id:1, name:"Ali", email:"ali@example.com"},
    {id:2, name:"Asad", email:"asad@example.com"},
    {id:3, name:"Qobil", email:"qobil@example.com"}
]


app.get('/user',(req, res) =>{

    res.json({
        success: true;
        date: users;
    })

})

app.get('/users/:id', (req, res) => {

})

app.listen(3000, () =>{
    console.log("Server 3000 - portda")
})