const express = require("express");
const app = express();
const cors = require("cors");
const sql = require("mysql2");
const PORT = 5000

app.use(express.json())
app.use(cors());

const db = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ass2"
})

db.connect((err) => {
    if(err){
        console.log("error in connecting db");
    }
    else{
        console.log("database connected");
    }
})

const createTab = ` 
    Create table if not exists genz(
       first_name varchar(20),
       last_name varchar(20),
       emp_id varchar(20) unique primary key,
       email varchar(30) unique,
       phone varchar(20),
       department varchar(20),
       data Date,
       role varchar(20)
)`

db.query(createTab , (err , res) => {
    if(err){
        console.log("err in creating  table")
    }
    else{
        console.log("table is created");
    }
})

app.post("/subb",  (req, res) => {
    const { fname, lname, id, email, tel, dept, date, role } = req.body;

    if(!fname || !lname || !id || !email || !tel ||!dept || !date|| !role){
        res.status(500).json("all fields are mandatory");
    }

    const check = `
    SELECT * FROM genz
    WHERE email = ?;
`;

db.query(check, [email], (err, result) => {
    if (err) {
        console.error("Error while checking email:", err);
        return res.status(500).send("Database error");
    }
    if (result.length > 0) {
        return res.status(400).send("Email already exists");
    } 
});

    
    const insertt = `
        INSERT INTO genz (first_name, last_name, emp_id, email, phone, department, data, role)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `;
    
    db.query(insertt, [fname, lname, id, email, tel, dept, date, role], (err, result) => {
        if (err) {
            console.error("Error in inserting the query:", err);
            return res.status(500).send("Failed to insert data");
        }
        console.log("Data is inserted");
        res.status(200).send("Data inserted successfully");
    });
});
;


app.listen(PORT , ()=> {
    console.log("it is running")
})