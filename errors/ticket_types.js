module.exports = {
    400: {
      statusCode: 400,
      error: new Error("something went wrong"),
    },
    401: {
      statusCode: 401,
      error: new Error("Ticket Type Already Exists"),
    },
    402: {
      statusCode: 402,
      error: new Error("Error Updating Ticket Type"),
    },
    403: {
      statusCode: 403,
      error: new Error("All Fields Are Mandatory"),
    },
    404: {
      statusCode: 404,
      error: new Error("Ticket Type does not Exist"),
    },
    405: {
      statusCode: 405,
      error: new Error("Error Removing Ticket Type"),
    },
    500: {
      statusCode: 500,
      error: new Error("Oops, try again later"),
    },
  };