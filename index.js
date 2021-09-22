function findMatching(drivers, names) {
  return drivers.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === names.toLowerCase()
  );
}

function fuzzyMatch(drivers, testString) {
  return drivers.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}

function matchName(driver, soughtName) {
  return driver.filter((record) => record.name === soughtName);
}
