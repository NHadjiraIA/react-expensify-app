// Higher Order Component (HOC) - Acomponent (HOC) that renders another component
// reuse code 
// render hijacking
// prop manipulation
// Abstract state
 
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    
    <div>
        <h1> Info </h1>
        <p>This info is : {props.Info}</p>
    </div>
)
//the WrappedComponent is the HOC
const withAdminWarning = (WrappedComponent) =>{
 return (props) =>(
     // if isAdmin = true the p tag will display if false the p tap doesn't display
     <div>
        { props.isAdmin && <p> This is private info. Please don't share !</p> } 
         < WrappedComponent {...props}/>
     </div>
 );
};

const requireAutentication = (WrappedComponent) =>{
  return (props) =>(
      <div>
            { props.isAuth ?  (
            < WrappedComponent {...props}/>
            ): (
           <p> Please login to view the info !</p> 
           )}   
      </div>
  )
}

// we passe the components that we want to rappe to this function
// we need to be able to access to the component that we want to warppe
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAutentication(Info);
//ReactDOM.render(<AdminInfo isAdmin= {false} Info ='there are the details' />, document.getElementById('app')
//);
ReactDOM.render(
    <AuthInfo isAuth= {false} Info ='there are the details' />, document.getElementById('app')
);