// fs = filesystem

// default import, fs without promises
// import fs from "fs";

// named import, fs with promises
import { promises as fs } from "fs";

import axios from "axios";

const response = await axios("http://cataas.com/cat?json=true");

//await fs.mkdir("logs");

async function writeFile(filePath, data) {
  try {
    if (typeof data !== "string" && typeof data !== "object") {
      throw new Error("Invalid data type");
    }

    const parsedData = typeof data === "object" ? JSON.stringify(data) : data;

    // replace if file exists
    await fs.writeFile(filePath, parsedData);
  } catch (error) {
    console.log(error.message);
  }
}

writeFile("LOG.json", 4444); // error
writeFile("LOG.json", "hello"); // correct

// add to the file
await fs.appendFile("DATES.txt", Date.now().toString() + "\n");

const fileContents = JSON.parse(
  await fs.readFile("LOG.json", { encoding: "utf8" })
);

console.log(typeof fileContents);

console.log(fileContents.id);
