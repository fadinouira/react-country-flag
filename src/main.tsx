import App from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/*
 * Get the root element from the DOM and check if it already exists
 */
const mainApp = document.getElementById('root');
if (!mainApp) {
  throw new Error("The element #root wasn't found");
} else {
  const root = createRoot(mainApp);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
