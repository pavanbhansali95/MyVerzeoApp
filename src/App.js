import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './Components/Person';
import {useState,useEffect} from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import Header from './Components/Header';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Cockpit from './Components/Cockpit';
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators
} from "react-reactive-form";



//uncontrlled components
//we will be using refs

const App = (props) => {

  // const [selectedValue,setInputValue] = useState('mango');

  const inputValueRef = React.createRef()
  const textAreaRef = React.createRef();

  console.log('props-- App.js',props);
  const myForm = FormBuilder.group({
    'username': '',
    'address': '',
    'isChecked': ['']
  });
  

   





  // const nameChangeHandler = (event) =>{
  //   setPersonName(event.target.value);
  //   setPersonAge(27);
  // }

  // const getInputValue = (event) => {
  //   setInputValue(event.target.value);
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('usertypedinput--',inputValueRef.current.value);
    console.log('usertypedtextarea--',textAreaRef.current.value);

  }

  
  


  return (
   <FieldGroup control = {myForm}
     render = {({get,invalid}) => (
        <form onSubmit={handleSubmit}>
 
        <FieldControl
          name="username"
          render={({handler}) => (
            <div>
              <label>Enter Username</label>
              <input {...handler()}/>
            </div>
          )}
        />

        <FieldControl
          name="address"
          render={({handler}) => (
            <div>
                <label>Enter Address</label>
              <input {...handler()}/>
            </div>
          )}
        />
          <FieldControl
                      name="isChecked"
                      render={({handler}) => (
                        <div>
                            <label>Are you Vaccinated</label>
                          <input {...handler("checkbox")}/>
                        </div>
                      )}
                    />
                    {
                    myForm.get('isChecked').value===true ? <div>
                    <FieldControl
          name="vaccine"
          render={({handler}) => (
            <div>
                <label>Enter the vaccine name</label>
              <input {...handler()}/>
            </div>
          )}
        />
                    </div>: ''}
                            </form>

     )

     
     } >
   </FieldGroup>
   
  )
}




// export const App; //named export

export default App;



