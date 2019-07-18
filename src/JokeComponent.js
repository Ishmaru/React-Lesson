import React from 'react';

// This is a child of App Component
//This class renders jokes to the page and filters them via filterFunc function passed down as this.props.filterFunc;
class JokeComponent extends React.Component {
  constructor(){
    super();
    this.state = {
        newName:""
      };
  }

  //this function fires everytime the filter form is changed. note the event paramater is a special object returned when the event is triggered.
  changeFunc = (event) => {
    //the event object has a lot of useful data to use including: event.target - which is a reference to the html element that triggered this function
    // and with that reference we can easily grab its value field.
    this.props.filterFunc(event.target.value);
  }


  render(){
    // turnary statement to ensure this.props.data always contains something to prevent errors wen running data.map
    var data = this.props.data ? this.props.data: [{content:"No Jokes found"}];
    return (
      <div>
        <label>
          Filter Jokes:
          <input id="jokeFilter" onChange={this.changeFunc} />
        </label>
        {
          // .map is itterating through all items in the data array. Note the key= attribute: this is required by react, that the top most parent element from Jsx generated from a loop, have a unique identifying key value.
          data.map(item=>{
            return(
              <div key={item.id}>
                <p>{item.content}</p>
                <p>{item.punchLine}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}
//Remember to export!
export default JokeComponent;
