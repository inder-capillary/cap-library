/**
 * Created by vivek on 9/5/17.
 */
const path = require('path');
const fse = require('fs-extra');

copyFile();
createPackageFile();

function copyFile() {
  const sourcePath = resolveSourcePath();
  const buildPath = resolveBuildPath();
  return new Promise((resolve) => {
    fse.copy(
      sourcePath,
      buildPath,
      (err) => {
        if (err) throw err;
        resolve();
      }
    );
  })
    .then(() => console.log(`Copied...`)); //eslint-disable-line no-console
}

function resolveBuildPath() {
  return path.resolve(__dirname, '../build-library/');
}

function resolveSourcePath() {
  return path.resolve(__dirname, '../components/');
}

function createPackageFile() {
  return new Promise((resolve) => {
    fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      resolve(data);
    });
  })
    .then((data) => JSON.parse(data))
    .then((packageData) => {
      const {
        name,
        author,
        version,
        description,
        keywords,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies,
      } = packageData;

      const minimalPackage = {
        name,
        author,
        version,
        description,
        "main": './index.js',
        "module": './index.es.js',
        'jsnext:main': './index.es.js',
        keywords,
        repository,
        license,
        bugs,
        homepage,
        dependencies: {
          "antd": "^3.13.2",
          "react-dom": "^16.8.1",
          "react": "^16.8.1",
        }
      };

      return new Promise((resolve) => {
        const buildPath = path.resolve(__dirname, '../build-library/package.json');
        const data = JSON.stringify(minimalPackage, null, 2);
        fse.writeFile(buildPath, data, (err) => {
          if (err) throw (err);
          console.log(`Created package.json in ${buildPath}`); //eslint-disable-line no-console
          resolve();
        });
      });
    });
}
