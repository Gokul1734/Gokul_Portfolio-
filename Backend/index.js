const express = require("express");
const dotenv = require("dotenv");
const connectMongo = require("./dbConnect");
const User = require("./models/UserModel");
dotenv.config();

const app = express();

const PORT = process.env.PORT;

console.log(process.env.name);
connectMongo(process.env.MongoDbUrl);

const cors = require("cors");
const { sync } = require("motion");
const corsOptions = {
  orgin: [process.env.FRONTEND_URL],
};

app.use(cors(corsOptions));
app.use(express.json());

app.post("/", async (req, res) => {
  const Person = req.body;
  const { Name, Email, Message } = Person;
  await User.create({
    Name: Name,
    Email: Email,
    Message: Message,
  });
  res.status(200).json({
    message: "Data has been sent successfully",
  });
});

app.listen(PORT, () => console.log(`Server Started at PORT : ${PORT}`));
