import React from 'react';
import './ListItem.css'

export default class ListItem extends React.Component {
  constructor(props){
      super(props)
  }
  render() {
    return (
     
     <div align="center" >{/*code for left menu begins */}
     < button className="ListItem" onMouseOver="">{this.props.text}</button>
    </div>
   

    );
  }
}

