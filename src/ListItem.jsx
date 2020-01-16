import React from 'react';
import './ListItem.css'

export default class ListItem extends React.Component {
  constructor(props){
      super(props)
  }
  render() {
    return (
     
     <div align="center" >{/*code for left menu begins */}

     <p><a href="https://www.w3schools.com">{this.props.text}</a></p>
    </div>
   

    );
  }
}

