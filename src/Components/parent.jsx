import  React from 'react';
import project_data from '../utils/config';
import Child1 from './child1';
import "./child1.css";
function Parent() {
return(
  
  <div className="parent"> {project_data.map((e)=>(
    <div>
      <Child1 props={e}/>
    </div>  
  )
  )}
  </div>
)
}
export default Parent;