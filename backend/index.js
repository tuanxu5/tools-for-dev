const express = require("express");
const app = express();
const exampleRoute = require("./routers/example-router");
const categoriesRoute = require("./routers/category-router");
const cardsRoute = require("./routers/card-router");

const connectMongooseDB = require("./configs/connect-mongo");
const configsCors = require("./configs/config-cors");

connectMongooseDB();
configsCors(app);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to tool for dev by Tuanxu5");
});

app.use("/api", exampleRoute);
app.use("/api", categoriesRoute);
app.use("/api", cardsRoute);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
