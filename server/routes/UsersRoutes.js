const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "1234";

require("../model/UsersSchema");

const UsersModule = mongoose.model("UsersData");

async function Users(app) {
  app.post("/registration", async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password } = req.body;
    const oldUser = await UsersModule.findOne({ email });
    const encryptedPassword = await bcrypt.hash(password, 10);
    if (oldUser) {
      res.json({ error: "User already exist" });
    }
    try {
      const data = await UsersModule.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        password: encryptedPassword,
      });
      res.json({ status: "ok", data: data });
    } catch (error) {
      res.json({ status: "error" });
      console.log(error);
    }
  });

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await UsersModule.findOne({ email });
    if (!user) {
      return res.json({ error: "User not exist" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: 5,
      });
      if (res.status(201)) {
        console.log(token);
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "erroe" });
      }
    }
    return res.json({ status: "error", error: "Password incorrect" });
  });

  app.post("/home", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET, (err, res) => {
        if (err) {
          return "Token Expierd";
        }
        return res;
      });
      if (user == "Token Expierd") {
        return res.json({ status: "error", data: "Token Expierd" });
      }
      const userEmail = user.email;
      UsersModule.findOne({ email: userEmail })
        .then((data) => {
          res.json({ status: "ok", data: data });
        })
        .catch((error) => {
          res.json({ status: "error", data: error });
        });
    } catch (error) {
      res.json(error);
    }
  });
}

module.exports = Users;
