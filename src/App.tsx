import { ReactCountryEmoji } from './components/ReactCountryEmoji/ReactCountryEmoji';
import { ReactCountryFlag } from './components/ReactCountryFlag/ReactCountryFlag';

function App() {
  return (
    <>
      <ReactCountryFlag countryCode={'at'} height={50} />
      <ReactCountryEmoji countryCode={'at'} height={50} />
    </>
  );
}

export default App;
