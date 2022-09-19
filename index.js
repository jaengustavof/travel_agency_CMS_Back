require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./configs/db"); // en las versiones nuevas hay que poner await porque es un apromesa// Da el error fn is not a function
const errors =  require("./errors/commons");
const cors = require("cors")
const { PORT } = require('./enviroments')

const app = express();

app.use(express.json());
app.use(cookieParser());

const whitelist = ['http://localhost:3001'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error());
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/", require("./services")(db));

app.use((_, __, next) =>{
    next(errors[404])
});

app.use(({ statusCode, error}, _, res, __) => {
    res.status(statusCode).json({
        success: false,
        message: error.message,
    })
})

app.listen(PORT, () =>
    console.info(`Listening at ${PORT} | enviroment: ${process.env.NODE_ENV}` )
)
