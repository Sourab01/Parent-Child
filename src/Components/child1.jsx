import  React from 'react';
import "./child1.css";

function Child1({props}){
return(
    <div className='child1'>
        <span className="sou1">{props.id}</span>
        <span className="sou1">{props.name}</span>
        <span className="sou1">{props.created_date}</span>
    </div>
)
}
export default Child1;