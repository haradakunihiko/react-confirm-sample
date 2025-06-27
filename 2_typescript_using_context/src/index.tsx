import React, { Profiler } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextAwareConfirmation } from 'react-confirm';

import App from './containers/App'
import { ThemeContext } from './context/context';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  <ThemeContext.Provider value="dark">
    <App />
    <ContextAwareConfirmation.ConfirmationRoot />
  </ThemeContext.Provider>
);
