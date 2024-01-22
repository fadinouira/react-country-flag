import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactFlag from './components/ReactFlag/ReactFlag';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <h1>Country Flags Library</h1>
      <ReactFlag countryCode="US" />
      <br />
      <ReactFlag countryCode="GB" />
      {/* Add more flags as needed */}
    </div>
  </React.StrictMode>,
);
