const hello = function () {
    console.log("Hello from npm test-package.");
}

const proof = function () {
    console.log("Test-package module is connected.");
}

module.exports.hello = hello;
module.exports.proof = proof;