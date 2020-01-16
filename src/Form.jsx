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
        params: [{key:" ", value:" "}],
        
    };
    // const paramsList = this.state.params.map(item => (<h2>{item.key}:{item.value} </h2>))
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyValueChange - this.handleKeyValueChange.bind(this);
  }

 handleChange(event) {
     this.setState({ [event.target.name]: event.target.value })

}

addKeyVal = (event) => {
    console.log(this.state.params);
    console.log("WE CLICKED THE ADD BUTTON") 
    console.log(this.state);  
    this.setState((prevState) => ({
      params: [...prevState.params, {key:"", value:""}],
    }));
}

handleSubmit() {
    console.log('BUTTON CLICKED')
        const SERVER_URL = "https://5000-cf4e62e1-ff2d-4382-9680-388c727bae3e.ws-us02.gitpod.io/"
        console.log(SERVER_URL + '/api')
        const paramsList = this.state.params.map(item => (item.key + ":" + item.value))
        axios
            .post(SERVER_URL + 'api', {apiEndpoint: this.state.apiEndpoint, authToken: this.state.authToken, paramsList})
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
                <label>API Endpoint</label><br />
                    <input 
                    type="text" name='apiEndpoint'onChange={this.handleChange} 
                    /> <br /> <br />
            <label>Authorization Token</label><br />
                <input 
                type="text" name='authToken' onChange={this.handleChange} 
            /> <br /> <br />
            <KVInputs handleChange={this.handleKeyValueChange} params={params}/>
             <button className = 'add' onClick={this.addKeyVal}>Add+</button>
             <div className="resultsBox">  {/* results box code begins  */}
                    <center><h2>Results</h2></center> 
                    {/* <div> {paramsList}</div> */}
                    <center>
                        <ReactJson src={this.state.response} theme="bright:inverted"/>
                    </center> 
            </div>   {/*  results box code ends  */} 

              <br /> <button className = "submit" onClick={this.handleSubmit}>SUBMIT</button>
       </div>
    )
}   
}  
ReactDOM.render(<Form />, document.getElementById('app'));