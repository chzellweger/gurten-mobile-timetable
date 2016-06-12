const config = {
  // data: set data-source in './app/app.js -> import Data from './...'
  // because import-statemnts don't support runtime evaluation of variables
  appRoot: document.getElementById('root'),
  stages: ['Hauptbühne', 'Zeltbühne', 'Waldbühne'],
  tents: ['Bamboo', 'Block', 'Bacardi'],
  days: ['do', 'fr', 'sa', 'so'],
  contexts: ['stages', 'tents']
};

export default config;
