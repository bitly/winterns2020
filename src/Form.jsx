import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KVInputs from "./KVInputs.jsx";

export default class Form extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
        authToken: ' ',
        apiEndpoint: '',
        params: [{key:"", value:""}],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyValueChange - this.handleKeyValueChange.bind(this);
  }

  handleChange(event) {
     this.setState({ [event.target.name]: event.target.value })
}

addKeyVal = (event) => {
    console.log("WE CLICKED THE ADD BUTTON") 
    this.setState((prevState) => ({
      params: [...prevState.params, {key:"", value:""}],
    }));
}

 handleSubmit(event) {
    alert('Form Submitted');
    event.preventDefault();
    }

handleKeyValueChange(event, type) {
    console.log(type);
}
 
render(){
    let{authToken, apiEndpoint, params} = this.state
    return (
       <div className="inputForms">
                <label>API Endpoint</label><br />
                    <input 
                    type="text" name='apiEndpoint'onChange={this.handleChange} 
                    /> <br /> <br />
            <label>Authorization Token</label><br />
                <input 
                type="text" name='authToken' onChange={this.handleChange} 
            /> <br /> <br />
            <KVInputs handleChange={this.handleKeyValueChange} params={params}/>
             <button onClick={this.addKeyVal}>Add+</button>
              <br /> <input onSubmit={this.handleSubmit} type="submit" value="Submit" />
       </div>
    )
}   
}  