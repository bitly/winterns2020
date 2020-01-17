import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KVInputs from "./KVInputs.jsx";
import axios from 'axios';
import ReactJson from 'react-json-view'




export default class Form extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
        response: {},
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
    console.log(this.state); 
    this.setState((prevState) => ({
      params: [...prevState.params, {key:"", value:""}],
    }));
}

handleSubmit() {
    console.log('BUTTON CLICKED')
        const SERVER_URL = "https://5000-c8783409-d9c7-45c7-a332-1cd6ce9e73fd.ws-us02.gitpod.io/"
        console.log(SERVER_URL + '/api')
        console.log(this.props.Method)
        axios
            .post(SERVER_URL + 'api', {apiEndpoint: this.state.apiEndpoint, authToken: this.state.authToken })
            .then((res) => {   
                console.log(res.data)
                this.setState({
                    response: res.data
                })
            })   
    }   

 handleKeyValueChange = (event, type, idx) => {
    //console.log(type, idx);
    
    if(type === 'key') {
        // console.log('in here');
        const newParams = [
            ...this.state.params.slice(0, idx),
            { key: event.target.value, value: this.state.params[idx].value }, 
            ...this.state.params.slice(idx + 1)
        ]

        this.setState((prevState) => ({
            params: newParams
        }));
    } 

    if(type === 'value') {
        const newParams = [
            ...this.state.params.slice(0, idx),
            { key: this.state.params[idx].key, value: event.target.value }, 
            ...this.state.params.slice(idx + 1)
        ]

        this.setState((prevState) => ({
            params: newParams
        }));
    }
    
}

render(){
    let{authToken, apiEndpoint, params} = this.state
    return (
       <div className="inputForms">
          <center>
                <label>API Endpoint</label><br />
                    <input className ="endpointBox"
                    type="text" name='apiEndpoint'onChange={this.handleChange} 
                    /> <br /> <br />
            <label>Authorization Token</label><br />
                <input className ="authTokenBox"
                type="text" name='authToken' onChange={this.handleChange} 
            /> <br /> <br />
          
            <KVInputs handleChange={this.handleKeyValueChange} params={params}/>
             <button className = 'add' onClick={this.addKeyVal}>Add+</button>
             </center>
             <div className="resultsBox">  {/* results box code begins  */}
                    <center><h2>Results</h2></center> 
                    {/* <center>  */}
                        <ReactJson src={this.state.response} theme="bright:inverted"/>
                    {/* </center>  */}
            </div>   {/*  results box code ends  */} 

              <br /> <button className = "submit" onClick={this.handleSubmit}>SUBMIT</button>
       </div>
    )
}   
}  
ReactDOM.render(<Form />, document.getElementById('app'));