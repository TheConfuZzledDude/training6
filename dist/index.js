"use strict";

var _sharp = require("sharp");

var _sharp2 = _interopRequireDefault(_sharp);

var _readline = require("readline");

var _readline2 = _interopRequireDefault(_readline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const main = () => {
  const rl = _readline2.default.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.write(`ARGS: ${process.argv}\n`);
  rl.question("What's your name\n", answer => rl.write(`${answer} is a dumb nsd ame\n`));
};

main();