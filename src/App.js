import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './Components/Person';
import {useState,useEffect} from 'react';


//class based component

//inheritence.

//jsx -> Javscript structuted xml

//props -> what you pass in your component

//state is coming which can be changed anywhere

//conditinal stateents
//whenver state or prop changes for a componennt, that component will rerender.

//containers statebasedcomponents

// class App extends React.Component {
//   //component initialization -> state and props are initialized

//   constructor(props){
//     console.log('iside constructor App.js---');
    
//     super(props);
//     this.state = {
//      'personName': 'Roy',


//   };
// }

// //mounting

// //this is used for modifying the props
// static getDerivedStateFromProps(props,state){
//   console.log('inside getderivedstate from props App.js--')
// }

// //performace optimization
// shouldComponentUpdate(nextProps,nextSate){
//   console.log('inside shouldcomp update next state---',nextSate,);
//   console.log('inside shouldcomp update pevious state---',this.state);

//   return true;
// }


// nameChangedHandler = (event) => {
//   const newName = event.target.value;
//   this.setState({'personName': newName})
// }

// getSnapshotBeforeUpdate(prevProps,prevState){
//   console.log('getsnapshotbeforeupdate--');
//   return {'name': 'pavan'};
// }







// //bind -> what is apply ,call,bind (mdn docs)
// //Two way binding
// //map opeartor in js??
// //filter opeartor -> task for the day
// //passing info from child to parent component
// //component updation
// //mounting



//   render(){

//     console.log('App.js render--');

 
//     return (
//       <div>
//        <Person inputChange={this.nameChangedHandler} />
//     <p>Person name is {this.state.personName} </p>

//       </div>
//     )
  


// }

// //will be called only once when your component is created
// componentDidMount(){
//   console.log('Componentdidmount--App.js');
//   //THis will be used for making API Calls
// }

// //used for making Api calls

// componentDidUpdate(prevProps,prevState,snapshot){
// console.log('inside omponentdid update--',snapshot);
// }

// //clearing memory and clearing subsciptions.
// componentWillUnmount(){

// }



//   }

//functional components or stateless components

//function component is a function which will return jsx
//useEffect -> React Hook

const App = (props) => {
  const [personName,setPersonName] = useState('Joey');
  const [personAge,setPersonAge] = useState(25);
  const [showPerson,setShowPerson] = useState(false);

  //works like componentdidmount.
  //the function inside useffect is called effect.
  //THis will be called only once on app component render
  //[]-> dependency
  // useEffect(() => {
  //  alert('I am App useEffect and working like componentdidmount');
  // },[])

  // //It will be triggered whenever personName or personage value will be changed.
  // useEffect(() => {
  //   alert('I am App useEffect and working like componentdidupdate');
  //  },[personName,personAge]
  //  )

   





  const nameChangeHandler = (event) =>{
    setPersonName(event.target.value);
    setPersonAge(27);
  }
 


  return (
    <React.Fragment>
       <h1>My App</h1>
       <button onClick = {() => {
         setShowPerson(!showPerson)
       }}>
         Click
       </button>
     
 {showPerson && <div>
       <Person inputChange={nameChangeHandler} />
     <p> my person name is {personName} </p>
      <p>my person age is {personAge}</p>
    
    </div>
}


    </React.Fragment>
   
  )
}




// export const App; //named export

export default App;

//Constructor
//getderivedstatefrom props
//reender parent
//render child
//componentdidmount

//componentdidmount will be called only once
//whenevr state or prop changes for a component render method is called

//getDerivedStateFromProps
//shouldComponentUpdate -> true or false
//render
//render child
//getSnapshotBeforeUpdate
//componentDidUpdate

