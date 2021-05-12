import  React from 'react'; 
import "./child2.css";

const Child2 = props => {
    console.log(props)
    return <h1 className="child2">{props.name}</h1>
}

export default Child2;