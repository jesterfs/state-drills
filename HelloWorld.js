import React from 'react';

class HelloWorld extends React.Component {
  state = {
    message: 'World'
  };

  handleButtonClick(props) {
    // console.log(props)
    const newMessage = props
    this.setState({ message: newMessage})
  }

  render() {
    return(
      <div>
        <p> Hello {this.state.message} </p>
        <button onClick={() => this.handleButtonClick('World')}> World </button>
        <button onClick={() => this.handleButtonClick('Friend')}> Friend </button>
        <button onClick={() => this.handleButtonClick('React')}> React </button>
      </div>
    )
  }
}

export default HelloWorld
