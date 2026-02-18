import { log } from "node:console";

const express = require('express')

const app = express();

app.use(express.json());

let users = [
    {id: 1,name:"Ali", email:"ali@example.com"},
    {id: 2,name:"vali", email:"vali@example.com"},
    {id: 3,name:"ass", email:"asss@example.com"}

];
  
// app.listen(3000, () =>{
//     console.log("Server 3000-portda")
// });
app.get("/user/:id", (req, res) => {
    const id = +req.params.id;

    console.log(users[1].id ===2);


    res.json({
        status:200,
        message:"Foydalanuvchi ma'lumot"
    })
});
