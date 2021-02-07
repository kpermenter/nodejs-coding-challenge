const { getJSONData, storeJSONData } = require('../../bin/utils');

const deleteUser = (req, res) => {
  const userStatus = getJSONData();
  const userEmail = req.params.email;

  // find user my email
  const findUser = userStatus.filter(user => user.email !== userEmail);
  
  // error if existing user email
  if (userStatus.length === findUser.length) {
    return res.status(409).send(
      {
      error: true, 
      msg: 'No user found'
    });
  }
  // delete user if found
  storeJSONData(findUser);
  res.send(
    {
      success: true, 
      msg: 'User deleted'
    });
}

module.exports = {
  deleteUser,
}