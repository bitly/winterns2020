import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class Form extends React.Component {
state = {
    authToken: ' '
};

render(){
    return (
       <div className="inputForms">
           <form>
            Authentification Token: <input id="textbox" type="text" value={this.state.authToken} />
            Authentification Token: <input id="textbox" type="text" />
             <button onClick={this.handleClick}>SUBMIT!</button> 
           </form>
       </div>
    )
}   
}