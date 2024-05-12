var express = require("express");
var mysql = require("mysql");
const cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    host :"localhost",
    user :"root",
    password:"Ankeet@1928",
    database: "backend_todo_task"
})

con.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Connected..!')
    }
})

app.get('/fetch',(req,res)=>{
    con.query('select * from todoTask',(err,result,fields)=>{
        if(err)
         console.log(err)
        else
        var r = JSON.parse(JSON.stringify(result)); //for converting and this is used for to avoid the RowDataPacket
         console.log(r);
         console.log(result)
        //  console.log(r[0])
        //  console.log(r[1].name)
        //  console.log(r[2].mark)
         res.send(result)      
    })
});

app.post("/addtodo",(req,res)=>{

    var description = req.body.description;
    let q = "insert into todoTask(description) values (?)";
    con.query(q,[description],(err,result)=>{
        if(err)console.log(err)
            else{
        var r = JSON.parse(JSON.stringify(result));
              res.send("Data inserted Successfullyy...")
              console.log(r);
            }
    })
})

app.delete("/delete/:id",(req,res)=>{
    let did = req.params.id;
  //  var description = req.body.description;

    let deleteQuery = "delete from todoTask where id = ? ";

    con.query(deleteQuery,[did],(err,result)=>{
        if(err)
            console.log(err);
        else{
            let value = JSON.parse(JSON.stringify(result));
            console.log(value);
            res.send("Data Deleted Successfully....")
        }
    })



});


app.listen(3000,(err)=>{
    if(err)
     console.log(err);
    else
     console.log("on Port 3000");
})