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
        expiresIn: "1d",
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

  app.post("/forget-password", async (req, res) => {
    const { email } = req.body;
    try {
      const oldUser = await UsersModule.findOne({ email });
      if (!oldUser) {
        return res.json({ status: "User not Exist!!" });
      }
      const secret = JWT_SECRET + oldUser.password;
      const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
        expiresIn: "5m",
      });
      const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
      console.log(link);
    } catch (error) {}
  });
  
  app.get("/reset-password/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params);
    const oldUser = await UsersModule.findOne({ _id: id });
    if (!oldUser) {
      return res.json({ status: "User not Exist!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    try {
      const verfiy = jwt.verify(token, secret);
      // res.send("verfied")
      res.render("index", { email: verfiy.email ,status:" not verfied"});
    } catch (error) {
      res.send("not verfied");
    }
  });
  app.post("/reset-password/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    const {password} = req.body;
    const oldUser = await UsersModule.findOne({ _id: id });
    if (!oldUser) {
      return res.json({ status: "User not Exist!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    try {
      const verfiy = jwt.verify(token, secret);
      const encryptedPassword = await bcrypt.hash(password, 10);
      await UsersModule.updateOne(
        { _id: id },
        { $set: { password: encryptedPassword } }
      );
      // res.json({status:"password updated"});
      res.render("index",{email:verfiy.email,status:"verfied"})
    } catch (error) {
      res.json({status:"somthing wnt wrong"});
    }
  });
}

module.exports = Users;
