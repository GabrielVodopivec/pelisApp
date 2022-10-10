const packageJSON = require('./package.json');

const myJSON = Object.entries(
    packageJSON.dependencies
).map(([key, value]) => ({name: key, version: value}));

console.log(myJSON);