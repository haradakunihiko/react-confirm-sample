import React, { Profiler } from 'react';
import { createRoot } from 'react-dom/client';

import App from './containers/App'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  <App />
);
