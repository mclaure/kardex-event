const http = require("http");
const app  = require("./app");

var HTTP_PORT = process.env.PORT || 8000;
const server = http.createServer(app);

//Start listening for requests
server.listen(HTTP_PORT, () => {
    console.log("API Subscriber running on port %PORT%".replace("%PORT%",HTTP_PORT))
});