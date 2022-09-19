const whitelist = ["https://proyecto-final-front-qcwr9ft8t-jaengustavof.vercel.app/"];

module.exports = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error());
    }
  },
  credentials: true,
};