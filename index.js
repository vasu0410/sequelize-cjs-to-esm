import fs from "fs";
import path from "path";

const convertMigrationFilesToCJS = (dirPath) => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const stats = fs.statSync(fullPath);

    if (stats.isFile() && file.endsWith(".js") && !file.endsWith(".cjs.js")) {
      const newFilePath = fullPath.replace(".js", ".cjs");
      fs.renameSync(fullPath, newFilePath);
      console.log(`Renamed: ${fullPath} -> ${newFilePath}`);
    }
  });
};

const convertModelToESModule = (dirPath) => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const stats = fs.statSync(fullPath);

    if (stats.isFile() && file.endsWith(".js")) {
      let modelContent = fs.readFileSync(fullPath, "utf-8");

      modelContent = modelContent.replace(
        /const\s+\{\s*(.*?)\s*\}\s*=\s*require\(['"]sequelize['"]\);/g,
        'import { $1 } from "sequelize";'
      );
      modelContent = modelContent.replace(
        /module\.exports =/g,
        "export default"
      );

      fs.writeFileSync(fullPath, modelContent);
      console.log(`Converted (CommonJS to ES Module): ${fullPath}`);
    } else if (stats.isDirectory()) {
      convertModelToESModule(fullPath);
    }
  });
};

const modelsDir = path.resolve("models");
convertModelToESModule(modelsDir);

const migrationsDir = path.resolve("migrations");
convertMigrationFilesToCJS(migrationsDir);
