import { swipeInit, swipeKill } from './helpers_swiper';
// translate day
function getLiteralDay(day) {
  const thisDay = day;
  const literalDay = {};

  switch (thisDay) {
    case 'do':
      literalDay.long = 'Donnerstag';
      literalDay.short = 'Do';
      break;
    case 'fr':
      literalDay.long = 'Freitag';
      literalDay.short = 'Fr';
      break;
    case 'sa':
      literalDay.long = 'Samstag';
      literalDay.short = 'Sa';
      break;
    case 'so':
      literalDay.long = 'Sonntag';
      literalDay.short = 'So';
      break;
    default:
      literalDay.long = 'Donnerstag';
      literalDay.short = 'Do';
  }

  return literalDay;
}

// translate stage
function getLiteralStage(stage) {
  if (stage === 'stages') {
    return 'Bühnen';
  } else {
    return 'Zelte';
  }
}

// get actual day

function getDay() {
  const date = new Date();
  const day = date.getDay();

  switch (day) {
    case 4:
      return 'do';
    case 5:
      return 'fr';
    case 6:
      return 'sa';
    case 0:
      return 'so';
    default:
      return 'do';
  }
}

export { getLiteralDay, getLiteralStage, getDay, swipeInit, swipeKill };

