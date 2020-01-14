import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class Form extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
        authToken: ' ',
        apiEndpoint: '',
        key: '',
        value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }
        )};     
 
render(){
    return (
       <div>
           <form>
                <label>API Endpoint</label><br />
                    <input 
                    type="text" name='apiEndpoint'onChange={this.handleChange} 
                    /> <br /> <br />
            <label>Authorization Token</label><br />
                <input 
                type="text" name='authToken' onChange={this.handleChange} 
            /> <br /> <br />
            <input
            placeholder= "Key" 
            type="text" name='key' onChange={this.handleChange}  
            /> :
            <input 
            placeholder= "Value" 
            type="text" name='key' onChange={this.handleChange}
            />
             <button 
             onClick={this.handleClick}>SUBMIT!
             </button> 
           </form>

       </div>
    )
}   
}