const responseStatusCode = {
    SUCCESS: 200,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500,
}

const responseStatusText = {
    SUCCESS: "success",
    ERROR: "error",
}

module.exports = { responseStatusCode, responseStatusText }