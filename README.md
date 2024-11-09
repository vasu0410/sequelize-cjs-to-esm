# Convert Sequelize CommonJS to ES Module

This is an npm package designed to convert Sequelize migration and model files created with `sequelize-cli` from CommonJS (`require` and `module.exports`) to ES Module (`import` and `export`) syntax.

If you are working with a project that uses `"type": "module"` in its `package.json` and uses `sequelize-cli`, this package helps you easily convert generated files from the default CommonJS format into ES module-compatible syntax.

### Key Features:

- Converts Sequelize **model files** from CommonJS to ES module (`require` → `import`, `module.exports` → `export default`).
- Renames Sequelize **migration files** from `.js` to `.cjs` for compatibility with Node.js projects using ES modules.

---

## Installation

You can install this package globally or as a dev dependency.

### To install as a global package:

```bash
npm install -g sequelize-cjs-to-esm
```

### To install as a dev dependency:

bash

```bash
npm install --save-dev convert-sequelize-cjs-to-esm
```

## Usage

Once the package is installed, run the conversion command to convert both the Sequelize model files and migration files to be compatible with ES Modules.

## Step-by-Step Usage:

1.Add Sequelize CLI files to your project if you haven’t already done so (for example, by running sequelize-cli init).

2.Run the conversion command:

If you installed it globally, run the following command:

```bash
convert-sequelize-cjs-to-esm
```

If you installed it locally, run the command using npx:

```bash
npx convert-sequelize-cjs-to-esm
```

3.Check your files:

Models: All .js files in the models directory will be updated to use ES module imports and export default.

Migrations: Any .js files in the migrations folder will be renamed to .cjs to avoid conflicts in projects using ES modules.

4.After the conversion:

Your Sequelize models and migration files should now be compatible with an ES module project structure.

### Contributing

If you'd like to contribute to this package, feel free to fork the repository, make changes, and submit a pull request.

## Repository Link

You can find the source code for this project on GitHub: [GitHub Repository](https://github.com/vasu0410/sequelize-cjs-to-esm).
