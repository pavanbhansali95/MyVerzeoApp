import logo from './logo.svg';
import './App.css';
import React from 'react';


//class based component

//inheritence.

//jsx -> Javscript structuted xml

//props -> what you pass in your component

//state is coming which can be changed anywhere

//conditinal stateents

class App extends React.Component {

  constructor(props){
    
    super(props);
    this.state = {
      'username': 'mark',
      'userAge': 25,
      'showMyContent': false,
      'students': [
        {
          'id': 'abcde',
          'marks': 40,
          'name': 'shyam'
        },
        {
          'id': 'abcdef',
          'marks': 45,
          'name': 'andrea'
        },
        {
          'id': 'abcdeh',
          'marks': 50,
          'name': 'akshatha'
        }
      ]
    }

  }

  onChangeHandler = name => {
    alert(name);
    //setstate will merge our state
    this.setState({
      'username': name
    });
    

  }

  toggleContentHandler = () => {
    console.log('i am toggle content handler handler');
    const isShow = this.state.showMyContent;
    this.setState({'showMyContent':!isShow});
    console.log('isShow--',this.state.showMyContent);
  }

//bind -> what is apply ,call,bind (mdn docs)
//Two way binding
//map opeartor in js??
//filter opeartor -> task for the day



  render(){

    const {name,age,children} = this.props; //destructuring
    // let myContent = null;

    // if(this.state.showMyContent === true){
    //   myContent = (<div>
    //   <input type="text"  ></input>
     
    //  <button onClick = {() => {
    //    this.onChangeHandler('alex')
    //  }}>Click</button>
    //  <h1>Hi i am {this.state.username} and my age is {this.state.userAge}</h1> 
    //   </div>)
    // } 


 
    return (
      <div>
       
 { this.state.students.map(el=> {
    return (
      <div key={el.id} >
        Hi my name is {el.name}
        My Marks are {el.marks}
      </div>
    )
  })
}

      </div>
    )
  }


  }



// export const App; //named export

export default App;

