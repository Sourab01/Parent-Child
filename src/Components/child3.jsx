import  React, { Component } from 'react'; 
import "./child3.css";

class Child3 extends Component {

    render() {
        return(
            <div className="child3">
          <h1> {this.props.name} </h1>
            </div>
        ) 
    }
}

export default Child3;