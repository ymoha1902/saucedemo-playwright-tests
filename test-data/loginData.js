const invalidLogins = [
  {
    label: 'wrong username and password',
    username: 'test',
    password: 'test',
    expectedError: 'Epic sadface: Username and password do not match any user in this service',
  },
  {
    label: 'wrong password only',
    username: 'standard_user',
    password: 'wrong_password',
    expectedError: 'Epic sadface: Username and password do not match any user in this service',
  },
  {
    label: 'empty username',
    username: '',
    password: 'secret_sauce',
    expectedError: 'Epic sadface: Username is required',
  },
  {
    label: 'empty password',
    username: 'standard_user',
    password: '',
    expectedError: 'Epic sadface: Password is required',
  },
  {
    label: 'locked out user',
    username: 'locked_out_user',
    password: 'secret_sauce',
    expectedError: 'Epic sadface: Sorry, this user has been locked out.',
  },
];

module.exports = invalidLogins;