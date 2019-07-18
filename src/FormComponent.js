import React from 'react';
import './App.css';
class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
      punchLine: ""
    };
  }

  handleContentChange = (event) => {
    this.setState({content: event.target.value});
  }

  handlePunchLineChange = (event) => {
    this.setState({punchLine: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = `content=${this.state.content}&punchLine=${this.state.punchLine}`;
    fetch("http://localhost:8080/joke/new", {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      method: "POST",
      body: data,
    }).then(this.props.retreveJokes())
    .catch(console.log);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add_form">
        <label>
          Content:
          <input type="text" value={this.state.value} onChange={this.handleContentChange} />
        </label>
        <br/>
        <label>
          Punch Line:
          <input type="text" value={this.state.value} onChange={this.handlePunchLineChange} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormComponent;
