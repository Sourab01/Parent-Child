import  React from 'react';
import project_data from '../utils/config';
import Child1 from './child1';
import "./child1.css";
function Parent() {
return(
  <>
  <div className='listItem'>{project_data.map((e)=>(
    <div className='parent'>
      <Child1 props={e}/>
    </div>
  )
  )}</div> 
 </>
)     
}

export default Parent;