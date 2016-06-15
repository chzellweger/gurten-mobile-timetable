import { swipeInit, swipeKill } from './helpers_swiper';

const helpers = {
  swipeInit,
  swipeKill,

  getLiteralDay(day) {
    const thisDay = day;
    const literalDay = {
      long: null,
      short: null
    };

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
  },

  getDay() {
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
  },

  getLiteralStage(stage) {
    if (stage === 'stages') {
      return 'Bühnen';
    } else {
      return 'Zelte';
    }
  }
};

export { helpers };