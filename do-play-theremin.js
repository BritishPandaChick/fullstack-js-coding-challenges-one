function doYouPlayTheremin(name) {
  if (name[0].toLowerCase === "s" || name[0] === "S") {
    return name + " plays the Theremin!";
  } else {
    return name + " does not play the Theremin!";
  }
}

doYouPlayTheremin("Griffin");
doYouPlayTheremin("Scott");

//Second alternative
function doYouPlayTheremin(name) {
  if (name[0].toUpperCase === "S" || name[0] === "s") {
    return name + " plays the Theremin!";
  } else {
    return name + " does not play the Theremin!";
  }
}
