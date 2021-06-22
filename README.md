# bindid-react

> easy intergration for a native react component with bindid

[![NPM](https://img.shields.io/npm/v/bindid-react.svg)](https://www.npmjs.com/package/bindid-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bindid-react
```

## Usage

```jsx
import React, { Component } from 'react'

import { BindIDProvider, LoginButton } from 'bindid-react'
import 
import 'bindid-react/dist/index.css'

class Example extends Component {
  render() {
    const options = {
      redirectUri: 'YOUR_REDIRECT_URI',
    }
    
    return (
      <BindIDProvider clientId="YOUR_CLIENT_ID">
        <LoginButton options={options}/>
      </BindIDProvider>
    )
  }
}
```

## License

MIT © [KevinEdry](https://github.com/KevinEdry)
