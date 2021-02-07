const { getJSONData, storeJSONData } = require('../../bin/utils');

const updateUser = (req, res) => {
  const userStatus = getJSONData();
  const userData = req.body;

  // validate if user exists
  const findUser = userStatus.find(currentUser =>
    currentUser.email === userData.email
  );

  // error if no user found
  if (!findUser) {
    res.status(409).send({
      error: true,
      msg: 'No user found'
    });

  // validate user input for null values
  } else {
    if (userData.email == null || userData.name == null || userData.dateOfBirth == null || userData.phoneNumber == null) {
      return res.status(400).send({
        error: true,
        msg: 'All fields required'
      })

    } else {
      const updateUser = userStatus.filter(user => user.email !== userData.email);
      // update user data
      updateUser.push(userData);

      // save user data
      storeJSONData(updateUser);
      res.send({
        success: true,
        msg: 'User updated'
      })
    }
  }
}

module.exports = {
  updateUser,
}