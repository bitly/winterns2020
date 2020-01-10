import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import './index.css';

class App extends React.Component {
    constructor(props) {
    super(props);
     this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('this is working!!')
    }

    render() {
        return ( 
            <div align="center" >
                <button className='getbutton' onClick={this.handleClick}>Get</button>
                <button className='postbutton' onClick={this.handleClick}>Post</button>
                <button className='patchbutton' onClick={this.handleClick}>Patch</button>
                <button className='deletebutton' onClick={this.handleClick}>Delete</button>
            </div>
         );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

