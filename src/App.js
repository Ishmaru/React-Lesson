import React from 'react';
import './App.css';
import JokeComponent from './JokeComponent';
import FormComponent from './FormComponent';

// Class component defined please note the this.state = {} declaration.
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      filterData: []
      };
  }

  //Function is called as soon as Component is loaded
  componentDidMount() {
    //Initial invoking of retreve jokes to populate data from api
    this.retreveJokes();
    //Activate SearchBar immediatly
    var input = document.getElementById('jokeFilter');
    input.focus();
    input.select();
  }

  //Lets GET jokes
  retreveJokes = () => {
    //Fetch is vanilla JS version of ajax calls. Defaults as a GET request to passed in 'URI'
    fetch('http://localhost:8080/jokes')
    .then(res => res.json())
    .then((data) => {
      //setState() automatically updates the state of the component in the dom
      // code is setting the state to {data:data, filterData:data} since 'data:data' are the same you can just write 'data' as a shorthand
      this.setState({ data, filterData:data});
    })
    //Error handeling prints to console for now
    .catch(console.log);
  }

  //Filters Jokes based on input into search bar
  filterFunc = (filteredBy) => {
    let filterData = this.state.data.filter(item => {
      let combined = item.content + item.punchLine;
      console.log(combined);
      let lcContent = combined.toLowerCase();
      let lcFiltered = filteredBy.toLowerCase();

      return lcContent.includes(lcFiltered);
    });
    //and sets the sate with the result
    this.setState({filterData});
  }

  // Renders the JSX return with the data injection whenever this.setSatate() is called. Note how I call other components as their own Html elements, as well as passing arguments to them.
  render(){
    return (
      <div className="App">
        <h1>Welcome To React Joke App</h1>
        <div>
          <FormComponent retreveJokes={this.retreveJokes}/>
          <JokeComponent filterFunc={this.filterFunc} data={this.state.filterData} />
        </div>
      </div>
    )
  }
}

//Dont forget me!!
export default App;
