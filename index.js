// const app = require("./app");
// console.log(app);
// console.log(app.x);
// console.log(app.z());

// const arr = [2, 3, 4, 6, 5, 7, 9, 8];

// let result = arr.filter((item) => {
//   return item >= 3;
// });

// console.log(result);

// const fs = require("fs").writeFileSync;
// fs("abc.txt", "12234445");
// fs.writeFileSync("hello2.txt", "Hello, Welcome to file2");
// console.log("->>", __dirname);
// console.log("->>", __filename);

// fs.writeFileSync("code.txt", "some code");

// const http = require("http");

// http
//   .createServer((req, res) => {
//     // we can take any name in the place of req and res
//     res.write("<h1>Hello World</h1>");
//     res.end();
//   })
//   .listen(4501);

// const http = require("http");

// function dataControl(req, res) {
//   res.write("Ok");
//   res.end();
// }

// http.createServer(dataControl).listen(4501);

// const http = require("http");

// const dataControl = (req, res) => {
//   res.write("New");
//   res.end();
// };

// http.createServer(dataControl).listen(4501);

// const color = require("colors");
// console.log("pakage.json".bgRed);
// console.log("hello".red);
// const chalk = require("chalk");

// const http = require("http");
// const data = require("./data");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "applicationjson" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(4501);

// console.log(process.argv)

// const fs = require("fs");

// const input = process.argv;

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("Invalid input");
// }

// const fs = require("fs");
// const path = require("path");

// const dirPath = path.join(__dirname, "files");
// console.log(dirPath);

// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(dirPath + "/hello" + i + ".txt", "simple text file");
//   //fs.writeFileSync(```hello ${i}.txt", "simple text file```);
// }

// fs.readdir(dirPath, (error, files) => {
//   i = 1;
//   files.forEach((item) => {
//     console.log(`File name ${i} is: ${item}`);
//     i++;
//   });
// });

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "crud");
// const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, "This a simple apple");

// fs.readFile(filePath, "UTF-8", (err, item) => {
//   console.log(item);
// });

// fs.appendFile(filePath, " and file name is apple.txt", (err) => {
//   if (!err) console.log("File is updated");
// });

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   console.log("File is created");
// });

// fs.unlinkSync(`${dirPath}/fruit.txt`);

// let a = 10;
// let b = 5;

// let waitingData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 2000);
// });

// waitingData.then((data) => {
//   b = data;
//   console.log(a + b);
// });

// console.log("Starting up");

// setTimeout(() => {
//   console.log("2 sec log");
// }, 2000);

// setTimeout(() => {
//   console.log("0 sec log");
// }, 0);

// console.log("Finising up");

// ++++ EXPRESS JS +++++++

// const express = require("express");
// const app = express();

// app.get("", (req, res) => {
//   console.log("data sent by browser", req.query.name);
//   res.send("Hello " + req.query.name);
// });

// app.get("", (req, res) => {
//   // res.send(`<h1 style=color:red;>Hello World</h1>`);
//   res.send(`
//     <h1>Welcome, to Home page</h1>
//     <a href="/login">Go to login page</a>
//   `);
// });

// app.get("/login", (req, res) => {
//   res.send(`
//     <h1>Enter Details</h1>
//     <input type="text" placeholder="Username" value=${req.query.name}>
//     <input type="password" placeholder="Password">
//     <button>Login</button>
//     <a href="/">Home Page</a>
//     `);
// });

// app.get("/help", (req, res) => {
//   res.send([
//     {
//       name: "Rahul",
//       email: "rahul@gmail.com",
//     },
//     { name: "Ritik", email: "ritik@gmail.com" },
//   ]);
// });

// app.listen(4501);

// const express = require("express");
// const app = express();

// const path = require("path");
// const publicPath = path.join(__dirname, "public");
// console.log(__dirname);

// app.use(express.static(publicPath));

// app.set("view engine", "ejs");

// app.get("/profile", (req, res) => {
//   const user = {
//     name: "Rahul",
//     email: "rahul3@gmail.com",
//     country: "India",
//     skills: ["php", "js", "c++", "java", "python"],
//   };
//   res.render("profile", { user });
// });

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.get("", (req, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });

// app.get("/about", (req, res) => {
//   res.sendFile(`${publicPath}/about.html`);
// });

// app.get("/home", (req, res) => {
//   res.sendFile(`${publicPath}/home.html`);
// });

// app.get("*", (req, res) => {
//   res.sendFile(`${publicPath}/nopage.html`);
// });

// app.listen(4501);

// const express = require("express");
// const app = express();
// const reqFilter = require("./middleware");
// const route = express.Router();

// //app.use(reqFilter);

// route.use(reqFilter);

// app.get("/", (req, res) => {
//   res.send("Welcome To Home Page");
// });

// route.get("/users", (req, res) => {
//   res.send("Welcome to users Page");
// });

// app.get("/about", (req, res) => {
//   res.send("Welcome to about Page");
// });

// route.get("/contact", (req, res) => {
//   res.send("Welcome to Contact Page");
// });

// app.use("/", route);

// app.listen(4501);

// ++++++ MONOGODB+++++++

// let data = await collection.find({name:"M10"}).toArray();
// console.log(data);

// // // 1st way
// dbConnect().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.warn(data);
//     });
// });

// // // 2nd way (recommended)
// const dbConnect = require("./mongodb.js"); // from mongodb.js file
// const main = async () => {
//   let data = await dbConnect();
//   data = await data.find().toArray();
//   console.log(data);
// };

// main();

// const express = require("express");
// const dbConnect = require("./mongodb");
// const mongodb = require("mongodb");
// const app = express();

// app.use(express.json());

// app.get("/", async (req, res) => {
//   let data = await dbConnect();
//   data = await data.find().toArray();
//   res.send(data);
// });

// app.post("/", async (req, res) => {
//   let data = await dbConnect();
//   let result = await data.insertOne(req.body);
//   res.send(result);
// });

// app.put("/:name", async (req, res) => {
//   let data = await dbConnect();
//   let result = await data.updateOne(
//     { name: req.params.name },
//     { $set: req.body }
//   );
//   res.send({ result: "update" });
// });

// app.delete("/:id", async (req, res) => {
//   console.log(req.params.id);
//   const data = await dbConnect();
//   const result = await data.deleteOne({
//     _id: new mongodb.ObjectId(req.params.id),
//   });
//   res.send(result);
// });

// app.listen(4501);

// ++++++ MONGOOSE +++++++ //
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/E-Com");

// const productSchema = new mongoose.Schema({
//   name: String,
//   brand: String,
//   price: Number,
//   categoty: String,
// });

// const saveInDB = async () => {
//   const Product = mongoose.model("products", productSchema);
//   let data = new Product({
//     name: "max31",
//     brand: "apple",
//     price: 44644,
//     categoty: "IPhone",
//   });
// };

// const updateInDB = async () => {
//   const Product = mongoose.model("products", productSchema);
//   let data = await Product.updateOne(
//     { _id: "67bb84d210e6de947762d2d7" },
//     { $set: { name: "ClOSED" } }
//   );
//   console.log(data);
// };

// updateInDB();

// const deleteInDB = async () => {
//   const Product = mongoose.model("products", productSchema);
//   let data = await Product.deleteOne({ _id: "67bb84d210e6de947762d2d7" });
//   console.log(`DELETED ID`);
// };

// deleteInDB();

// const findInDB = async () => {
//   const Product = mongoose.model("products", productSchema);
//   let data = await Product.find({
//     _id: new mongoose.Types.ObjectId("67bb84d210e6de947762d2d8"),
//   });
//   console.log("Finded", data);
// };

// findInDB();

// const express = require("express");
// require("./config");
// const Product = require("./product");
// const app = express();

// app.use(express.json());

// app.get("/search/:key", async (req, res) => {
//   console.log(req.params.key);
//   let data = await Product.find({
//     $or: [
//       { name: { $regex: req.params.key } },
//       { brand: { $regex: req.params.key } },
//       { category: { $regex: req.params.key } },
//     ],
//   });
//   res.send("Search Page");
// });

// app.post("/create", async (req, res) => {
//   let data = new Product(req.body);
//   let result = await data.save();
//   res.send(result);
//   console.log(req.body);
//   res.send("Done");
// });

// app.get("/list", async (req, res) => {
//   let data = await Product.find();
//   res.send(data);
// });

// app.delete("/delete/:_id", async (req, res) => {
//   console.log(req.params);
//   let data = await Product.deleteOne(req.params);
//   res.send("Done");
// });

// app.put("/update/:_id", async (req, res) => {
//   console.log(req.params);
//   let data = await Product.updateOne(req.params, { $set: req.body });
//   res.send("Done");
// });

// app.listen(4501);

// const express = require("express");
// const multer = require("multer");
// const app = express();

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.filename + "-" + Date.now() + ".jpg");
//     },
//   }),
// }).single("user_file");

// app.post("/upload", (req, res) => {
//   res.send("File Uploaded");
// });

// app.listen(4501);

// const os = require("os");
// //console.log(os.arch());
// console.log(os.freemem() / (1024 * 1024 * 1024));
// console.log(os.totalmem() / (1024 * 1024 * 1024));
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.userInfo());

// const express = require("express");
// const EventEmitter = require("events");
// const app = express();

// const event = new EventEmitter();

// let count = 0;

// event.on("countAPI", () => {
//   count++;
//   console.log("event called", count);
// });

// app.get("/", (req, res) => {
//   res.send("api called");
//   event.emit("countAPI");
// });

// app.get("/search", (req, res) => {
//   res.send("search api called");
//   event.emit("countAPI");
// });

// app.get("/update", (req, res) => {
//   res.send("update api called");
//   event.emit("countAPI");
// });

// app.listen(4501);

// const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "test",
// });

// connection.connect((err) => {
//   if (err) console.log(err);
//   else console.log("Connected");
// });

// connection.query("select * from users", (err, result) => {
//   console.warn("Result", result);
// });

// const express = require("express");
// const connection = require("./configSql");
// const app = express();

// app.get("/", (req, res) => {
//   connection.query("select * from users", (err, result) => {
//     if (err) console.log(err);
//     else res.send(result);
//   });
// });

// app.post("/", (req, res) => {
//   connection.query(
//     `insert into users (name, email) values ('${req.body.name}', '${req.body.email}')`,
//     (err, result) => {
//       if (err) console.log(err);
//       else res.send("Data inserted");
//     }
//   );
// });

// app.put("/:id", (req, res) => {
//   connection.query(
//     `update users set name='${req.body.name}', email='${req.body.email}' where id=${req.params.id}`,
//     (err, result) => {
//       if (err) console.log(err);
//       else res.send("Data updated");
//     }
//   );
// });

// app.delete("/:id", (req, res) => {
//   connection.query(
//     `delete from users where id=${req.params.id}`,
//     (err, result) => {
//       if (err) console.log(err);
//       else res.send("Data deleted");
//     }
//   );
// });

// app.listen(4501);
