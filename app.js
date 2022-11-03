const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

const dataFromFile = fs.readFileSync("./data.json", "utf8");
const dataArr = JSON.parse(dataFromFile);

app.use(express.json());

app.get("/students", (req, res) => {
  res.json({ message: "Success", data: dataArr });
});

app.post("/students", (req, res) => {
  const { name, age } = req.body;
  dataArr.push({ name, age });
  fs.writeFileSync("./data.json", JSON.stringify(dataArr));
  res.json({ message: "Success", data: dataArr });
});

app.delete("/students", (req, res) => {
  const { name, age } = req.body;
  const newData = dataArr.filter((item) => item.name !== name);
  fs.writeFileSync("./data.json", JSON.stringify(newData));
  res.json({ message: "Success", data: newData });
});

app.put("/students/:name", (req, res) => {
  const nameID = req.params.name;
  const { name, age } = req.body;
  objIndex = dataArr.findIndex((obj) => obj.name === nameID);
  if (objIndex > -1) {
    dataArr[objIndex].name = name;
    dataArr[objIndex].age = age;
    fs.writeFileSync("./data.json", JSON.stringify(dataArr));
    res.json({ message: "Success", data: dataArr });
  } else {
    res.json({ message: "Failed", data: dataArr });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
