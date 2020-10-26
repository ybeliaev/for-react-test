import React from "react";

export class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = (data) => (e) => {
    this.setState({
      count: this.state.count + 1
    })
  };
  render() {
    return ( <
      div >
      <
      h2 > {
        this.state.count
      } < /h2> <
      button onClick = {
        this.handleClick("some text")
      } >
      Increment +
      <
      /button> <
      /div>
    );
  }
}