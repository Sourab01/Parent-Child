import  React from 'react';
import "./child1.css";

function Child1({props}){
return(
    <>
    
    <div className='listItem'>
    <div className='listItemData listItemTitle'>{props.name}</div>
    </div>
    <div>
    <div className='listItemData'>{props.created_date}</div>
    </div>
    </>
)
}
export default Child1;