const express = require("./node_modules/express");
const bodyparser = require("body-parser");

port = 3010;

const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Prakash@1234",
  database: "ipsample",
});
app.post("/userdata", (req, res) => {
  const { name, room, sqfeet } = req.body;
  console.log(name);
  con.query(
    "insert into houseprice(name,rooms,sqfeet,price) values(?,?,?,?)",
    [name, room, sqfeet, Math.floor(Math.random() * 10000)],
    (err, rows) => {
      if (err) console.log(err);

      res.send("updated");
    }
  );
});

app.get("/userdata", (req, res) => {
  con.query(
    "select * from houseprice",

    (err, rows) => {
      if (err) console.log(err);

      res.send(rows);
    }
  );
});
app.delete("/userdata/:id", (req, res) => {
  const { id } = req.params;
  con.query(
    "delete from houseprice where id=? ",
    [id],

    (err, rows) => {
      if (err) console.log(err);

      res.send("deleted");
    }
  );
  // console.log(id);
});
app.get("/check", (req, res) => {
  console.log("HI successful");
});
app.listen(port, () => {
  console.log(port);
});
