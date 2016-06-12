function getLiteralDay(day) {
  const thisDay = day;
  const literalDay = {};

  if (thisDay === 'do') {
    literalDay.long = 'Donnerstag';
    literalDay.short = 'Do';
  } else if (thisDay === 'fr') {
    literalDay.long = 'Freitag';
    literalDay.short = 'Fr';
  } else if (thisDay === 'sa') {
    literalDay.long = 'Samstag';
    literalDay.short = 'Sa';
  } else {
    literalDay.long = 'Sonntag';
    literalDay.short = 'So';
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
  } else if (day === 0) {
    return 'so';
  } else {
    return 'do';
  }
}

export { getLiteralDay, getDay };
