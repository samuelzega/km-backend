const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

const dataFromFile = fs.readFileSync("./data.json", "utf8");
const dataArr = JSON.parse(dataFromFile);

app.use(express.json());

app.get("/students", (req, res) => {
  res.status(200).json({ message: "Data ditemukan", data: dataArr });
});

// generate id otomatis
function generateId(callback) {
  let i = 0;
  do {
    i++;
  } while (checkData(i));
  return i;
}

// apakah data sudah ada
function checkData(i) {
  return dataArr.find((item) => item.id == i);
}

// nambahin siswa baru;
app.post("/students", (req, res) => {
  const { name, age } = req.body;

  // cek apakah nama sama umurnya udah dikirim
  if (name && age) {
    const id = generateId();

    dataArr.push({ id, name, age });
    fs.writeFileSync("./data.json", JSON.stringify(dataArr));
    res
      .status(200)
      .json({ message: "Berhasil menambahkan data", data: dataArr });
  } else {
    res.status(403).json({ message: "Tidak ada data yang dikirim" });
  }
});

app.delete("/students/:id", (req, res) => {
  const id = req.params.id;
  if (checkData(id)) {
    const newData = dataArr.filter((item) => item.id != id);
    console.log(newData);
    fs.writeFileSync("./data.json", JSON.stringify(newData));
    res.status(200).json({ message: "Success", data: newData });
  } else {
    res.status(404).json({ message: "Data tidak ditemukan" });
  }
});

app.put("/students/:id", (req, res) => {
  id = req.params.id;

  let { name, age } = req.body;
  objIndex = dataArr.findIndex((obj) => obj.id == id);

  if (objIndex > -1) {
    name = name ? name : dataArr[objIndex].name;
    age = age ? age : dataArr[objIndex].age;
    dataArr[objIndex].name = name;
    dataArr[objIndex].age = age;
    fs.writeFileSync("./data.json", JSON.stringify(dataArr));
    res.status(200).json({ message: "Data berhasil diedit", data: dataArr });
  } else {
    res.status(404).json({ message: "Data tidak ditemukan" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
