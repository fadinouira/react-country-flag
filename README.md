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

## NEW FEATURES

- v1.x has ne features due to the addition of the flag emoji component and the introduction of new props such as `size` and `style`.

### Features Introduced:

- Added support for flag emoji component.
- Introduced new props:
  - `size`: Allows users to specify the size of the flag image & emoji.
  - `style`: Allows users to apply custom styles to the flag image & emoji components.

## Usage

```jsx
import React from 'react';
import { ReactCountryFlag, ReactCountryEmoji } from '@fadi-ui/react-country-flag';

const MyComponent = () => {
  return (
    <div>
      <h1>Country Flags</h1>
      <ReactCountryFlag countryCode="US" size={25} />
      <ReactCountryEmoji countryCode="US" size={25} />
      {/* Add more flags as needed */}
    </div>
  );
};

export default MyComponent;
```

### Props

- `countryCode` (string, required): The ISO 3166-1 alpha-2 country code. It specifies the country for which the flag will be displayed.

- `size` (number, optional): The size of the flag emoji. It allows you to customize the size of the displayed flag. If `size` is provided, `height` and `width` props will be ignored.

- `height` (number, optional): The height of the flag image. It allows you to customize the height of the displayed flag. This prop is ignored if `size` is provided.

- `width` (number, optional): The width of the flag image. It allows you to customize the width of the displayed flag. This prop is ignored if `size` is provided.

- `style` (CSSProperties, optional): Custom styles to apply to the flag emoji component.

### Example

```jsx
import { ReactCountryFlag, ReactCountryEmoji } from '@fadi-ui/react-country-flag';

const CountryFlagExample = () => {
  return (
    <div>
      <h1>Country Flags Example</h1>

      {/* Display the flag for the United States with custom size */}
      <ReactCountryFlag countryCode="US" size={30} style={{ marginBottom: '5px' }} />
      <ReactCountryEmoji countryCode="TN" size={30} style={{ marginBottom: '5px' }} />
      <ReactCountryFlag
        countryCode="GB"
        height={30}
        width={50}
        style={{ padding: '5px', backgroundColor: 'black' }}
      />

      {/* Add more flags with different country codes and sizes as needed */}
    </div>
  );
};

export default CountryFlagExample;
```

## License(MIT)

This project is licensed under the MIT License - see the LICENSE.md file for details.
