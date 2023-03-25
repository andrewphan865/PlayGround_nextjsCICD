const fs = require("fs");
const { parsed: localEnv } = require("dotenv").config();
const branch = process.env.GIT_BRANCH;

let envFilePath;
if (branch === "dev") {
  envFilePath = ".env.development";
} else if (branch === "main") {
  envFilePath = ".env.production";
} else {
  envFilePath = ".env";
}

const { parsed: branchEnv } = require("dotenv").config({
  path: envFilePath,
});

const env = {
  ...localEnv,
  ...branchEnv,
};

module.exports = {
  env,
};