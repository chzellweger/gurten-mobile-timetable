function getLiteralDay(day) {
  const thisDay = day;
  let literalDay = {};

  if (thisDay === 'do') {
    literalDay.long = 'Donnerstag';
    literalDay.short = 'Don';
  } else if (thisDay === 'fr') {
    literalDay.long = 'Freitag';
    literalDay.short = 'Fri';
  } else if (thisDay === 'sa') {
    literalDay.long = 'Samstag';
    literalDay.short = 'Sam';
  } else {
    literalDay.long = 'Sonntag';
    literalDay.short = 'Son';
  }
  
  return literalDay;
}

function getDay() {
  const date = new Date();
  const day = date.getDay();

  if (day === 5) {
    return 'fr';
  } else if (day === 6) {
    return 'sa';
  } else {
    return 'do';
  }
}

export { getLiteralDay, getDay };
