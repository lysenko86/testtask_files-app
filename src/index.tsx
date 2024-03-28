import ReactDOM from 'react-dom/client';

import { App } from './components';

import './index.module.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App />
);
