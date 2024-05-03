import { ReactCountryEmoji } from './components/ReactCountryEmoji/ReactCountryEmoji';
import { ReactCountryFlag } from './components/ReactCountryFlag/ReactCountryFlag';

function App() {
  return (
    <>
      <ReactCountryFlag countryCode="US" size={30} style={{ marginBottom: '5px' }} />
      <ReactCountryEmoji countryCode="TN" size={30} style={{ marginBottom: '5px' }} />
      <ReactCountryFlag
        countryCode="GB"
        height={30}
        width={50}
        style={{ padding: '5px', backgroundColor: 'black' }}
      />
    </>
  );
}

export default App;
