const express = require('express');
const app = express();
const port = 4000;

const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database: 'project',
    password:'',
});



connection.connect((err)=>{
    if(err){
        console.log('Error connecting to database',err.stack);
        return;
    }
    console.log('Connected to database successfully as id', connection.threadId);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.post('/signup',(req,res)=>{
    const {name,email,phone,password} = req.body;

    // const sql='select * from caterdata';
    connection.query('INSERT INTO user_details (name,email,phone,password)VALUES(?,?,?,?)',[name,email,phone,password],(error,results,fields)=>{
        if (error){
            console.error('Error fetching data from emp table ',error);
           
        }
        res.status(200).send('Signup Successful');

        // console.log(results);
    });
});

app.post('/login',(req,res)=>{
    const {name,password} = req.body;

    // const sql='select * from caterdata';
    connection.query('select name,password from user_details where name=? and password=?',[name,password],(error,results,fields)=>{
        if (error){
            console.error('Error fetching data from emp table ',error);
            res.status(500).send('error fetching data from emp table')
            return;
        }
        if(results.length>0)
        {
            res.send({'status':true});
        }else{
            res.send({'status':false});
        }

        // console.log(results);
    });
});
app.listen(port,()=>{
    console.log('Listening to port ', port);
})
