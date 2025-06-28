const express = require("express");
require("./db/config");
const User = require("./db/User");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password; // Exclide password from the response
  res.send(result);
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password"); //Exclude password from the response
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No User Found" });
    }
  } else {
    res.send({ result: "No User Found" });
  }
});

app.listen(5000);
