import React, { useEffect } from 'react';
import withStyle from '../hoc/WithStyle';
const Person = props => {

    // useEffect(() => {
    //     console.log('inside person useeffect');
    //     return () => {
    //         alert('Person Component unmounted--');
    //     }
    // })
   

    return(
        
        <div>
            <input style = {{'color': props.styleobj.color}} onChange={props.inputChange}  type="text" ></input>
        

        </div>
    )
       
           
    

}
export default withStyle(Person);