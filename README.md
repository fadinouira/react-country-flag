# @fadi-ui/react-country-flag

Display country flags in your React application.

## Installation

```bash
npm install @fadi-ui/react-country-flag
```

```bash
yarn add @fadi-ui/react-country-flag
```

## Demo
[Check out the demo here](https://stackblitz.com/~/github.com/fadinouira/react-country-flag-demo)

## Usage

```
import React from 'react';
import { ReactCountryFlag } from '@fadi-ui/react-country-flag';

const MyComponent = () => {
  return (
    <div>
      <h1>Country Flags</h1>
      <ReactCountryFlag countryCode="US" height={18} width={25} />
      {/* Add more flags as needed */}
    </div>
  );
};

export default MyComponent;
```

### Props

- countryCode (string, required): The ISO 3166-1 alpha-2 country code. It specifies the country for which the flag will be displayed.

- height (string, optional): The height of the flag image. It allows you to customize the height of the displayed flag.

- width (string, optional): The width of the flag image. It allows you to customize the width of the displayed flag.

### Example

```
import { ReactCountryFlag } from '@fadi-ui/react-country-flag';

const CountryFlagExample = () => {
  return (
    <div>
      <h1>Country Flags Example</h1>

      {/* Display the flag for the United States with custom height and width */}
      <ReactCountryFlag countryCode="US" height={18} width={25} />

      {/* Add more flags with different country codes and dimensions as needed */}
    </div>
  );
};

export default CountryFlagExample;
```

## License(MIT)

This project is licensed under the MIT License - see the LICENSE.md file for details.
