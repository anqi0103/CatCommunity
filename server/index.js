// Hooks express and database
import express from "express";
import { PrismaClient } from "@prisma/client";
import path from "path";
import cors from "cors";
// import model from "../database/index.js";
// const s3 = require("../s3");
// const multer = require("multer");
// const bodyParser = require("body-parser");
// const pool = require("../database/index.js");

const prisma = new PrismaClient();
const app = express();

// var storage = multer.memoryStorage();
// var upload = multer({ storage: storage });

//middleware
app.use(cors());
// app.use(express.static(path.join(__dirname, "..", "build")));
// app.use(bodyParser.json()); //req.body

//get all cats
app.get("/cats", async (req, res) => {
  const allCats = await prisma.cat.findMany();
  res.send(allCats);
});

//get one cat satisfying the requirements
// app.get("/catSearch", (req, res) => {
//   model.CatModel.find({
//     $or: [
//       { breed: { $regex: req.query.searchInfo, $options: "i" } },
//       { name: { $regex: req.query.searchInfo, $options: "i" } },
//       { age: { $regex: req.query.searchInfo, $options: "i" } },
//       { location: { $regex: req.query.searchInfo, $options: "i" } },
//       { status: { $regex: req.query.searchInfo, $options: "i" } },
//       { information: { $regex: req.query.searchInfo, $options: "i" } },
//     ],
//   })
//     .then((result) => {
//       res.status(200).send(result);
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// app.get("/catInfo", (req, res) => {
//   model.CatModel.find({});
// });

//Update a cat profile

//Create a cat profile, adding data into db
// app.post("/upload", upload.single("file"), (req, res) => {
//   let file = req.file;
//   console.log("file info:", file);
//   console.log("body info:", req.body);

//   let s3FileURL = process.env.AWS_Upload_File_URL_LINK;
//   let params = {
//     Bucket: "catcommunitybucket",
//     Key: file.originalname,
//     Body: file.buffer,
//     ContentType: file.mimetype,
//     ACL: "public-read",
//   };

//   s3.upload(params, (err, data) => {
//     console.log(data);
//     if (err) {
//       res.status(500).json({ err: true, Message: err });
//     } else {
//       res.send({ data });
//       let newFileUploaded = {
//         imageURL: data.Location,
//         breed: req.body.breed,
//         name: req.body.name,
//         age: req.body.age,
//         location: req.body.location,
//         status: req.body.status,
//         information: req.body.information,
//       };
//       model.addCat(newFileUploaded);
//     }
//   });
// });

// //Delete one cat

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web app listening on port ${PORT}`);
});
