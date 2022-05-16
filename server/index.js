const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "sqluser",
  host: "127.0.0.1",
  port: "3306",
  password: "password",
  database: "employeeSystem",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.role;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      `INSERT INTO users (username, password, role) VALUES ('${username}','${hash}','${role}')`,
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});
//******************CROPS and Registration Plus */

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

//******************* END ********************* */

//******************Vehicle and Registration Plus */

app.post("/machineReg", (req, res) => {
  const vehicleName = req.body.vehicleName;
  const type = req.body.type;
  const price = req.body.price;
  const licenseNumber = req.body.license;
  const vehicleNumber = req.body.vehicleNumber;
  // const contact = req.body.contact;

  db.query(
    "INSERT INTO machineReg (vehicleName,type,price, licenseNumber,vehicleNumber) VALUES (?,?,?,?,?)",
    [vehicleName, type, price, licenseNumber, vehicleNumber],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Insterted");
        console.log("Vehicle Values Inserted");
      }
    }
  );
});

app.get("/machineRegdata", (req, res) => {
  db.query(
    "SELECT * FROM employeeSystem.machineReg ORDER BY idmachineReg DESC LIMIT 5",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/machineReg1", (req, res) => {
  db.query("SELECT * FROM employeeSystem.Cropsdata");
});

//******************* END ********************* */

app.listen(3001, () => {
  console.log("running server");
});
