const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const userRoutes = require("./backend/routes/userRouter");
const cookieParser = require("cookie-parser");
const connectDb = require("./backend/config/database");
const MongoStore = require("connect-mongo");
require("./backend/config/passport");
require("dotenv").config();

//uncomment this line to connect to the database
//connectDb(); // Connect to database once you have created it

app.get("/", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET_KEY));

const sessionStore = MongoStore.create({
  //uncomment this line to store your mongo session
  //mongoUrl: your mongodb connection string/env variable
  collectionName: "sessions",
});

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
  })
);

//Passport Authentication
//need to realize the passport middleware if a user refreshes the page or closes the browser and opens it again
app.use(passport.initialize());
app.use(passport.session());

app.use(userRoutes);

//check to see if passport is working middleware
app.use((req, res, next) => {
  console.log("req.session", req.session);
  next();
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});