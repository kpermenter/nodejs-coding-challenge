const { getJSONData } = require('../../bin/utils');

// return current user list
const getUsers = (req, res) => {
  const userStatus = getJSONData();
  res.send(userStatus);
}

module.exports = {
  getUsers,
}