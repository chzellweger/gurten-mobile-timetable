// configuration-object for initial values.
// data-keys and config-keys for contexts, context-content, and days must match.

const config = {
  // data:
  // set data-source in './app/app.js -> import Data from './...'
  // because import-statemnts don't support runtime evaluation of variables

  // where to render the application
  appRoot: document.getElementById('root'),

  // set different views
  contexts: ['stages', 'tents'],

  // set content of first view
  stages: ['Hauptbühne', 'Zeltbühne', 'Waldbühne'],

  // set content of second view
  tents: ['Bamboo', 'Block', 'Bacardi'],

  // set days to render
  days: ['do', 'fr', 'sa', 'so']
};

export default config;
