function lastDigit (num1, num2) {
  var string1 = num1.toString();
  var string2 = num2.toString();

  if (string1[string1.length - 1] === string2[string2.length - 1]) {
    return true;
  } else {
    return false;
  }
}

lastDigit(22, 32);
lastDigit(77, 999);
lastDigit(33, 3);

/* var num = 1249;
num = num.toString();
num[0]; */
