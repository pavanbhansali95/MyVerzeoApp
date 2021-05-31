import logo from './logo.svg';
import './App.css';
import React from 'react';


//class based component

//inheritence.

//jsx -> Javscript structuted xml

//props -> what you pass in your component

//state is coming which can be changed anywhere

class App extends React.Component {

  constructor(props){
    
    super(props);
    this.state = {
      'username': ''
    }

  }

  onChangeHandler = (event) => {
    this.setState({
      'username': event.target.value
    })

  }

  


  render(){
    const {name,age,children} = this.props; //destructuring


    console.log('App props--',this.props);
    console.log('App state---',this.state);
    return (
      <div>
        <input type="text" onChange = {this.onChangeHandler} ></input>
        <h1>Hi i am {this.state.username}</h1> 
        {/* <h2> I am props children {children}</h2> */}

      </div>
    )
  }


}



// export const App; //named export

export default App;

