const mongoose = require("mongoose");
const app = require("./app");

const DB = process.env.DB_LINK.replace("<PASSWORD>", process.env.DB_PASSWORD);

mongoose
  .connect(DB)
  .then((res) => console.log("Successfully connected to database"))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
