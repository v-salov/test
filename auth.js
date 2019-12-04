function authenticate (login, password) {
  if (login === 'login' && password === 'password') {
    return 'You were logged in';
  } else {
    return 'Login is incorrect';
  }
}

const newFunction = (a , b, c) => a - b + c
