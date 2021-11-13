const fs = require("fs");

//> READING FILES
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(data)
//   console.log(data.toString());
// });

// console.log("last line");
//> you'll get <Buffer 68 65 6c ...>
//> if u want to read the files as a string, use the ".toString()" method.
//> so this is async and it takes time, but it doesnt block our time,
//

//>WRITING FILES

// fs.writeFile("./docs/blog1.txt", "I'm rewriting this file", () => {
//   console.log("the blog was rewritten");
// });

//> if you look at blog1.txt, it has been rewritten.
//> if your path doesn't exist, NodeJS will make a new file based on yr path,
//> and what is written on it. eg:

// fs.writeFile("./docs/blog2.txt", "On purpose making this file", () => {
//   console.log("on purpose");
// });

//> DIRECTORIES

// fs.mkdir("./assets", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("folder created");
// });

//> if the folder already exist and u run this code, it will give u error msg.
//> SO, use ".existsSync()"

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }
//> the above code will delete assets dir if it exists.
//> then if u run it again, it will create a dir called "assets"

//> DELETING FILES
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
