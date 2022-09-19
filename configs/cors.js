const whitelist = ["https://proyecto-final-front-qcwr9ft8t-jaengustavof.vercel.app", "http://localhost:3002", "127.0.0.1", "https://localhost:3002"];

var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
  }
module.exports = {
    corsOptions
  
};