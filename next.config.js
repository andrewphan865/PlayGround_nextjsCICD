

const fs = require("fs");
const { parsed: localEnv } = require("dotenv").config();
const deployEnv = process.env.DEPLOY_ENV || 'local';

let envFilePath;
if (deployEnv  === "devlopment") {
  envFilePath = ".env.development";
} else if (deployEnv  === "production") {
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

// const fs = require("fs");
// const { parsed: localEnv } = require("dotenv").config();
// const branch = process.env.GIT_BRANCH;

// let envFilePath;
// if (branch === "dev") {
//   envFilePath = ".env.development";
// } else if (branch === "main") {
//   envFilePath = ".env.production";
// } else {
//   envFilePath = ".env";
// }

// const { parsed: branchEnv } = require("dotenv").config({
//   path: envFilePath,
// });

// const env = {
//   ...localEnv,
//   ...branchEnv,
// };

// module.exports = {
//   env,
// };