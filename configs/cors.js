const whitelist = ["https://proyecto-final-front-qcwr9ft8t-jaengustavof.vercel.app/", "http://localhost:3002", "127.0.0.1", "https://localhost:3002"];

module.exports = {
  origin: (origin, callback) => {
    console.log('origin ', origin)
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error({message: "Cors Error"}));
    }
  },
  credentials: true,
};