var password = 'Abc#1234';

function ValidatePassword(password) {
  if (password.length >= 8) {
    console.log();
  } else {
    console.log('Fails due to less than 8');
  }

  if (password.search(/[0-9]/) < 0) {
    console.log('no numberic value');
  }

  if (password.search(/[a-z]/) < 0) {
    console.log('no lower cases');
  }

  if (password.search(/[A-Z]/) < 0) {
    console.log('No uppercase letter');
  }

  if (password.search(/[@!#$%^&*]/) < 0) {
    console.log('no special characters');
  }

  if (password.search(/^\S*$/) < 0) {
    console.log('not contain spaces');
  }

  if (
    (password[0] >= 'a' && password[0] <= 'z') ||
    (password[0] >= 'A' && password[0] <= 'Z')
  ) {
    console.log('password valid');
  } else {
    console.log('Password should start with alphabet');
  }
}

console.log(ValidatePassword(password));
