const http = require("node:http");

const message = "Hello from Docker, Jenkins, and Node.js!";

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });

    res.end(message);
});

if (require.main === module) {
    server.listen(3000, "0.0.0.0", () => {
        console.log("App listening on port 3000");
    });
}

module.exports = { message };