import React from 'react'

import { BindIDProvider, LoginButton } from 'bindid-react'
import 'bindid-react/dist/index.css'

export default class App extends React.Component {
  handleError = () =>{
    console.log("nay!");
  }

  handleSuccess = () =>{
    console.log("yay!");
  }

  render(){
    const options = {
      redirectUri: "http://localhost:3000/redirect/"
    }

    return(
      <BindIDProvider clientId="">
        <LoginButton options={options} onError={this.handleError} onCompleted={this.handleSuccess} />
      </BindIDProvider>
    )
  }
}
