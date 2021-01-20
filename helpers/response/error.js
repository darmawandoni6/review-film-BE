module.exports = (code, message) => {
  try {
    switch (code) {
      case 400:
        if (message === "ValidationError") {
          return {
            error: 501,
            message: "Validation data type error",
            data: "",
          };
        } else if (message === "MongooseError") {
          return {
            error: 502,
            message: "Server error",
            data: "",
          };
        } else if (message === "CastError") {
          return {
            error: 503,
            message: "Validation data type not match",
            data: "",
          };
        } else if (message === "DisconnectedError") {
          return {
            error: 504,
            message: "Connection timeout",
            data: "",
          };
        } else if (message === "DivergentArrayError") {
          return {
            error: 505,
            message: "Save array error",
            data: "",
          };
        } else if (message === "MissingSchemaError") {
          return {
            error: 506,
            message: "Invalid parameter",
            data: "",
          };
        } else if (message === "DocumentNotFoundError") {
          return {
            error: 507,
            message: "Data not found",
            data: "",
          };
        } else if (message === "ValidatorError") {
          return {
            error: 508,
            message: "Validator error",
            data: "",
          };
        } else if (message === "MissingSchemaError") {
          return {
            error: 509,
            message: "Missing Schema error",
            data: "",
          };
        } else if (message === "ObjectExpectedError") {
          return {
            error: 510,
            message: "Object Expected error",
            data: "",
          };
        } else if (message === "ObjectParameterError") {
          return {
            error: 511,
            message: "Object Parameter error",
            data: "",
          };
        } else if (message === "OverwriteModelError") {
          return {
            error: 512,
            message: "Overwrite model error",
            data: "",
          };
        } else if (message === "ParallelSaveError") {
          return {
            error: 513,
            message: "Save data error",
            data: "",
          };
        } else if (message === "StrictModeError") {
          return {
            error: 514,
            message: "Strict mode error",
            data: "",
          };
        } else if (message === "VersionError") {
          return {
            error: 515,
            message: "Out of version error",
            data: "",
          };
        }
        return {
          error: code,
          message,
          data: "",
        };
      case 101:
        return {
          error: code,
          message: "Invalid url parameter",
          data: "",
        };
      case 102:
        return {
          error: code,
          message: "Maximum docs per page is 50",
          data: "",
        };
      case 103:
        return {
          error: code,
          message: "Image is invalid or upload failed",
          data: "",
        };
      case 104:
        return {
          error: code,
          message: "Parameter required",
          data: "",
        };
      case 105:
        return {
          error: code,
          message: "Only ext jpg or jpeg or png is allowed",
          data: "",
        };
      case 106:
        return {
          error: code,
          message: "Invalid parameter",
          data: "",
        };
      case 107:
        return {
          error: code,
          message: "Data not found",
          data: "",
        };
      case 201:
        return {
          error: code,
          message: "User not found, please register",
          data: "",
        };
      case 202:
        return {
          error: code,
          message: "Authorization token must be provided",
          data: "",
        };
      case 203:
        return {
          error: code,
          message: "Authorization token is invalid",
          data: "",
        };
      case 401:
        return {
          error: code,
          message: "Authorization failed",
          data: "",
        };
      case 403:
        return {
          error: code,
          message: "Forbidden",
          data: "",
        };
      case 404:
        return {
          error: code,
          message: "Not found",
          data: "",
        };
      case 409:
        return {
          error: code,
          message: "Conflic",
          data: "",
        };

      case 500:
        if (process.env.SERVERLESS === "YES")
          return {
            error: code,
            message: "Internal server error",
            data: "",
          };
        if (!process.env.SERVERLESS)
          return {
            error: code,
            message,
            data: "",
          };
        break;
    }
  } catch (error) {
    console.log(error);
  }
};
