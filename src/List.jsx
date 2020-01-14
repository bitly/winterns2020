import ListItem from './ListItem.jsx'
import React from 'react';

export default class List extends React.Component {
  render() {


    
    return (
      <div className="ContainerList">
       {
           [1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => {
               return <ListItem text={number}/>
           })

       }
        {/* <ListItem text={"Home"}/>
        <ListItem text={"Library"}/>
        <ListItem text={"FAQS"}/>
        <ListItem text={"Blah"}/> */}
    </div>
    );
  }
}