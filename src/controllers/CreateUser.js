const { getJSONData, storeJSONData } = require('../../bin/utils');

const createUser = (req, res) => {
  const userStatus = getJSONData();
  const userData = req.body;

  // validate user input for null values
  if (userData.email == null || userData.name == null || userData.dateOfBirth == null || userData.phoneNumber == null) {
    return res.status(400).send({
      error: true,
      msg: 'All fields required'
    })
  }

  // validate if user exists
  const findUser = userStatus.find(user => user.email === userData.email)
  if (findUser) {
    return res.status(409).send({
      error: true,
      msg: 'User already exist'
    })
  }

  // append user data
  userStatus.push(userData)

  //save new user data
  storeJSONData(userStatus);
  res.send({
    success: true,
    msg: 'User created'
  })
}

module.exports = {
  createUser,
}