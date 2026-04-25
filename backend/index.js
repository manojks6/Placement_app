const express = require("express");
const app = express();
const cors = require("cors");
const routs = require("./rout");
const mongo = require("./Mongo/MongoDB");
// const AptitudeModel = require("./Mongo/MongoModels");
mongo();

app.use(cors());
app.use(express.json());
app.use(routs);

// Global Error Handler
app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
   console.log(`Listening at: ${PORT}`);
});
