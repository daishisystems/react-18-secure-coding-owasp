import path from "path";
import fs from "fs";
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function userHandler(req, res) {
  const id = parseInt(req?.query?.id);
  const jsonFile = path.resolve("./", "patients.json");
  const readFileData = await readFile(jsonFile);
  await delay(1000);
  const patients = JSON.parse(readFileData).patients;
  const patient = patients.find((rec) => rec.id === id);
  if (patient) {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(patient);
  } else {
    res.status(404).send("patient not found");
  }
  console.log(`GET /api/patients/${id} status: 200`);
}
