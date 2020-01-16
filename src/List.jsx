import ListItem from './ListItem.jsx'
import React from 'react';

export default class List extends React.Component {
  render() {


    /* code for the sidebar menu*/
    return (
      <div className="ContainerList">
       {
           ["User","Groups" ,"Organization", 4, 5, 6, 7, 8, 9].map(number => {
               return <ListItem text={number}/>
           })

       }
    
    </div>
    );
  }
}