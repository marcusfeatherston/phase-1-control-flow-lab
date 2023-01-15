function scuberGreetingForFeet(distanceTravelled) {
  if (distanceTravelled <= 400) {
    return "This one is on me!";
  } else if (distanceTravelled > 400 && distanceTravelled < 2000) {
    return "That will be twenty bucks.";
  } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (distanceTravelled > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(location) {
  return location === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
