require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./configs/db"); // en las versiones nuevas hay que poner await porque es un apromesa// Da el error fn is not a function
const errors =  require("./errors/commons");
const cors = require("cors");
const options = require("./configs/cors");
const { PORT } = require('./enviroments')

const app = express();

app.use(cors(options));
app.use(express.json());
app.use(cookieParser());



app.use("/", require("./services")(db));

app.use((_, __, next) =>{
    next(errors[404])
});

app.use(({ statusCode, error}, _, res, __) => {
    res.status(statusCode).json({
        success: false,
        message: error || error.message,
    })
})

app.listen(PORT, () =>
    console.info(`Listening at ${PORT} | enviroment: ${process.env.NODE_ENV}` )
)
