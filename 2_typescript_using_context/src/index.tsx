import React, { Profiler } from 'react';
import { createRoot } from 'react-dom/client';

import App from './containers/App'
import { ThemeContext } from './context/context';
import { MountPoint } from './util/confirm';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  <ThemeContext.Provider value="dark">
    <App />
    <MountPoint />
  </ThemeContext.Provider>
);
