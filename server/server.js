const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

console.log(path.join(__dirname, ), "dirname");
app.use(express.static(path.join(__dirname , '../')));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname , "../","index.html"));
});

app.listen(port, () => {
  console.log(__dirname)
  console.log(`Example app listening on port ${port}`);
});
 
