const config = {
  // data: set data-source in './app/app.js -> import Data from './...'
  // because import-statemnts don't support runtime evaluation of variables
  appRoot: document.getElementById('root'),
  stages: ['Hauptbühne', 'Zeltbühne', 'Waldbühne'],
  days: ['do', 'fr', 'sa', 'so']
};

export default config;
