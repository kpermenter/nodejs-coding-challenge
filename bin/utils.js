const fs = require('fs');
const path = require('path');

// read data file
const getJSONData = () => {
  const userJSON = fs.readFileSync(path.join(__dirname, '../data/users.json'));
  return JSON.parse(userJSON);
}

// local file storage
const storeJSONData = (data) => {
  const stringifyJSON = JSON.stringify(data);
  fs.writeFileSync(path.join(__dirname, '../data/users.json'), stringifyJSON);
}

module.exports = {
  getJSONData,
  storeJSONData
}