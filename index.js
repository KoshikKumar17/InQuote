// (c) Koshik Kumar

const app = require("./api");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`InQuote API is listening at http://localhost:${port}`);
});
