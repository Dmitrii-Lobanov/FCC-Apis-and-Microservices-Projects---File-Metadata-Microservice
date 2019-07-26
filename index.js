let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let multer = require("multer");

let upload = multer({ dest: "uploads/" });

let app = (module.exports = express());
app.use(bodyParser.json());
app.use(cors());

/*app.get('/', (req, res, next) =>{
  res.sendFile(__dirname + '/index.html');
}) */

app.use(express.static(__dirname + "/public"));

app.post("/upload", upload.single("file"), (req, res, next) => {
	return res.json(req.file);
});

app.listen(3000, () => console.log("Working"));
