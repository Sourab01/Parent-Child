import React from 'react';
import './App.css';
import Parent from './Components/parent'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     m1: "child1",
     m2: "child2",
     m3: "child3"
     };
}

render() {
  return (
    <div>
      <Parent/>
    </div>
  );
}
}

export default App;