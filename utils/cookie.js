const create = (res, token, extTime = 300000) => {
    res.cookie("access_token", token, {
      expires: new Date(Date.now() + extTime),
      secure: false,
      httpOnly: true,
    });
  };
  
  const clear = (res) => {

    res.clearCookie("access_token");
  };
  
  module.exports = {
    create,
    clear,
  };
  