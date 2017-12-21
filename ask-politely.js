function askPolitely(sentence) {
  if (sentence[sentence.length-1] === "?") {
    if (sentence.slice(-7) === "please?") {
      return sentence;
    } else {
      return sentence.slice(0, -1) + " please?";
    }
  } else {
    return sentence;
  }
}

askPolitely("May I borrown your pencil?");
askPolitely("May I ask a question please?");
askPolitely("My name is Grace Hooper.");

//"please".length;
//"May I ask a question please?".slice(-7) === "please?";
