import { exec } from "child_process";
import fs from "fs";
import https from "https";
import { join } from "path";

/**
 * Download a file from the given `url` into the `targetFile`.
 *
 * @param {String} url
 * @param {String} targetFile
 *
 * @returns {Promise<void>}
 */
async function downloadFile(url, targetFile) {
  return await new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        const code = response.statusCode ? response.statusCode : 0;

        if (code >= 400) {
          return reject(new Error(response.statusMessage));
        }

        // handle redirects
        if (code > 300 && code < 400 && !!response.headers.location) {
          return downloadFile(response.headers.location, targetFile);
        }

        // save the file to disk
        const fileWriter = fs.createWriteStream(targetFile).on("finish", () => {
          resolve({});
        });

        response.pipe(fileWriter);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}
function execShellCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
}
async function main() {
  const baseFolder = "./generator/schema/";
  const allSchemas = JSON.parse(
    await fs.promises.readFile(join(baseFolder, "schema-history.json"))
  );
  try {
    await execShellCommand("yarn run build");
  } catch (e) {
    // ignore
    console.error(e);
  }
  for (const schema of allSchemas) {
    console.log(schema["juju-version"]);
    await downloadFile(schema.schema, join(baseFolder, "schema.json"));
    await fs.promises.writeFile(
      join(baseFolder, "juju-version.txt"),
      schema["juju-version"]
    );
    await fs.promises.writeFile(
      join(baseFolder, "juju-git-sha.txt"),
      schema["juju-git-sha"]
    );
    await execShellCommand("yarn run generate-facades");
  }
  await execShellCommand("yarn run format");
  await execShellCommand("yarn run build");
}

main();
