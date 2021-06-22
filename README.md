# bindid-react
Please follow the [BindID Documentation](https://developer.bindid.io/docs/api/rest/topics/oidcAPIs/authorizationAPI/authorization_api) for further instructions

> easy intergration for a native react component with bindid

[![NPM](https://img.shields.io/npm/v/bindid-react.svg)](https://www.npmjs.com/package/bindid-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bindid-react
```

## Usage

### BindIDProvider
The BindIDProvider is responsible for initializing the BindID SDK. This can be used in a high order component and should receive the following parameters:
|Parameter| Type | Required
|--|--|--|
| clientId | string |	✓ |
| apiCompat | `latest` or `api-level-1` as string |✘ |
| disableStateValidation |boolean  |✘	 |

And the implementation as follows:
```jsx
import React, { Component } from 'react'
import { BindIDProvider } from 'bindid-react'

class Example extends Component {
  render() {
    return (
      <BindIDProvider clientId="YOUR_CLIENT_ID">
      </BindIDProvider>
    )
  }
}
```


### LoginButton
The Login Button component is what the user sees in order to start the authentication process. it ships with a default UI that can be changed by pass `style` or a `className` parameter, you also will have to pass to it an `options` object with a redirect URI parameter.

The LoginButton can accept these parameters:
|Parameter| Type | Required
|--|--|--|
| options | object |	✓ |
| onCompleted | function |✘ |
| onError |function  |✘	 |
| className |function  |✘ |
| style |function  |✘|

The `options` object as follows:
|Parameter| Type | Required
|--|--|--|
| redirectUri | string |	✓ |
| scope | array of strings |✘ |
| verifications | array  |✘	 |
| otherLoginOptions | object  |✘ |
| customMessage | string  |✘|

The `LoginButton` component Implementation:

```jsx
import React, { Component } from 'react'
import { BindIDProvider, LoginButton } from 'bindid-react'

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

The default `LoginButton` component styling will look like this:
<br/>
![enter image description here](https://i.imgur.com/HaqhSbx.png)

## License

MIT © [KevinEdry](https://github.com/KevinEdry)
