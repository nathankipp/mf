const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on("close", function() {
  process.exit(0);
});

const exit = () => rl.close();

module.exports = { rl, exit };
