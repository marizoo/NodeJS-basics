//> 2 types of Streams: "read Streams" and "write Streams".

const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

//>shorter way will be piping
// readStream.on("data", (chunk) => {
//   console.log("------ NEW CHUNK ------");
//   console.log(chunk);
// //>   console.log(chunk.toString());
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });
//> shorter way of all this will be piping.

//> then u will start to get your data in BUFFER,
//> in between u'll see "----NEW CHUNK ---"
//> that shows u, the data is being streamed... bit by bit.
//> to see the data in readeable format, add ".toString()"
//> or, add "{ encoding: 'utf8' }" so u can have your data in readable format.
//> with the encoding, u dont need to add "toString"

//> PIPING
//> A shorter way to read and write.
readStream.pipe(writeStream);

//> fyi: duplex string, can read and write, but that is for advanced.
