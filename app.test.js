const test = require("node:test");
const assert = require("node:assert/strict");

const { message } = require("./app");

test("application message is correct", () => {
    assert.equal(
        message,
        "Hello from Docker, Jenkins, and Node.js!"
    );
});