const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
//Route

app.use(cors({
    origin: "*"
}));

app.use("/api", require("./routes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
