require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./configs/db");
const errors =  require("./errors/commons");

const app = express();

app.use(express.json());
app.use(cookieParser());

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

app.listen(process.env.PORT, () =>
    console.info(" Listening at:", process.env.PORT)
)