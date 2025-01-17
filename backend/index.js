const express = require("express");
const app = express();
const exampleRoute = require("./routers/example-router");
const connectMongooseDB = require("./configs/connect-mongo");

connectMongooseDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.use("/api", exampleRoute);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
