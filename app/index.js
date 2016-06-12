
// define your settings in config.js and import it
import config from './config';

import React from 'react';
import { render } from 'react-dom';
import App from './app';

render(<App config={config} />, config.appRoot);
