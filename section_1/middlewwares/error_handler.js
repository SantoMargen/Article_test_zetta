const errorHandler = (err, req, res, next) => {
    console.log(err.name, "name");
    let response = {
        "statusDesc": "error",
        "statusCode": 400,
        "data": {}
    };

    switch (err.name) {
        case "ValidationError":
            response.data.message = err.message
            res.status(400).json(response);
            break
        case "CastError":
            response.data.message = "notfound article"
            response.statusCode = 404
            res.status(404).json(response);
            break
        default:
            response.data.message = "internal server error"
            response.statusCode = 500
            res.status(500).json(response);
            break;
    }
};

module.exports = errorHandler;