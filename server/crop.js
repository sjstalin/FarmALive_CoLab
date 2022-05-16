const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "sqluser",
  host: "127.0.0.1",
  port: "3306",
  password: "password",
  database: "employeeSystem",
});

app.post("/create", (req, res) => {
  const first_name = req.body.first_name;
  const second_name = req.body.second_name;
  const age = req.body.age;
  const state = req.body.state;
  const taluk = req.body.taluk;
  const contact = req.body.contact;
  const adhaarNumber = req.body.adhaarNumber;
  const type_of_soil = req.body.type_of_soil;
  const size_of_land = req.body.size_of_land;
  const katha_No = req.body.katha_No;

  db.query(
    "INSERT INTO farmer_details (first_name,second_name, age, state, taluk, contact, adhaarNumber,type_of_soil, size_of_land,katha_No) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [
      first_name,
      second_name,
      age,
      state,
      taluk,
      contact,
      adhaarNumber,
      type_of_soil,
      size_of_land,
      katha_No,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Insterted");
        console.log("Values Inserted");
      }
    }
  );
});

app.get("/farmer_details", (req, res) => {
  db.query(
    "SELECT * FROM employeeSystem.farmer_details ORDER BY ID DESC LIMIT 1",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/createcrops", (req, res) => {
  const crop_name = req.body.crop_name;
  const land_size = req.body.land_size;
  const irrigation = req.body.irrigation;
  const month_plow = req.body.month_plow;

  db.query(
    "INSERT INTO Cropsdata (crop_name,land_size,irrigation, month_plow) VALUES (?,?,?,?)",
    [crop_name, land_size, irrigation, month_plow],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Insterted");
        console.log("Crop Values Inserted");
      }
    }
  );
});

app.get("/Cropsdata", (req, res) => {
  db.query(
    "SELECT * FROM employeeSystem.Cropsdata ORDER BY ID DESC LIMIT 4",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/Cropsdatatop10", (req, res) => {
  db.query("SELECT * FROM employeeSystem.Cropsdata LIMIT 10");
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
