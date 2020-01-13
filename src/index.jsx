import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: 'Default Data',
            submitButtonShown: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.toggleButton = this.toggleButton.bind(this);
    }

    toggleButton() {
        this.setState({
            submitButtonShown: true
        });
    }

    handleClick() {
        console.log('BUTTON CLICKED')
        const SERVER_URL = "https://5000-e75ecd90-54cc-46e0-86c6-2bb579cc2438.ws-us02.gitpod.io"
        console.log(SERVER_URL + '/api')
        axios
            .get(SERVER_URL + '/api')
            .then((res) => {
                // console.log(res) 
                this.setState({
                    response: res.data
                })
            })
    }

    render() {
        return ( 
          <>
            <div align="center" >
                <button className='getbutton' onClick={this.toggleButton}>Get</button>
                <button className='postbutton' onClick={this.toggleButton}>Post</button>
                <button className='patchbutton' onClick={this.toggleButton}>Patch</button>
                <button className='deletebutton' onClick={this.toggleButton}>Delete</button>
            </div>
            <div>
                <p> { 
                    typeof this.state.response === 'string' ? 
                    this.state.response : 
                    JSON.stringify(this.state.response)
                    }
                 </p>
                
                {
                    this.state.submitButtonShown ?
                    <button onClick={this.handleClick}>SUBMIT!</button> :
                    ''
                }
                
               <p>{ JSON.stringify(this.state) }</p> 
            </div>
                
            </> 
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

