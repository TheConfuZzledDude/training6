import sharp from "sharp";
import readline from "readline"

const main = () => {
  const rl = readline.createInterface(({
    input: process.stdin,
    output: process.stdout,
  }))

  rl.question("What's your name\n", answer => rl.write(`${answer} is a dumb nsd ame\n`));
}

main();
