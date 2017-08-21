import React, { Component } from 'react';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Enter your name"
    }
  }

  changeFirstName(firstName) {
    this.setState({firstName});
  }

  render() {
    return (
<div></div>




      // <div>
      //   <h1>Hello, its working !</h1>
      //   <Form />
      // </div>
      // <GrommetApp>
      //   <Image src={logo} />
      //   <Headline>Welcome to React with Grommet</Headline>
      // </GrommetApp>
    );
  }
}
