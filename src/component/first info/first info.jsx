import React from 'react'
import './first.info.css'
import   emblem1 from '../../img/emblem1.png'

  
  
  const FirstInfo= (props) =>{
    return (

      <div className="info ml-5">
         <div className="row">
              <div className='img-responsive'>
                 <img src={emblem1} className='text-left image' alt=""/>
             </div>
        <div className="text-left ml-4">
           <h1 class="text mt-5">{props.item.name}</h1>
        </div>
        </div>
        <div className="pt-4">
        <div className="minister-name text-left"><strong>Minister:
          </strong>{props.item.minister}</div>
          <div className="minister-name text-left pt-3">
             <strong> Minister of State </strong>{props.item.minister_state}
          </div>
          <div className="hr"><hr/></div>
        </div>
      </div>
     

     
   
      
     

      
)
  
  }
  
    
  


export default FirstInfo
