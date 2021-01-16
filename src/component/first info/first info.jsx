import React, { Component } from 'react'
import './first.info.css'
import   emblem from '../../img/emblem.png'

class FirstInfo extends Component {
  render() {
    return (
      <div>
         <div className="info ml-5">
         <div className="row">
              <div className='img-responsive'>
                 <img src={emblem} className='text-left image' alt=""/>
             </div>
        <div className="text-left ml-4">
           <h1 class="text mt-5">{this.props.name}</h1>
           
        </div>
        </div>
        <div className="pt-4">
        <div className="minister-state text-left"><strong>Minister:
          </strong>{this.props.minister}</div>
          <div className="minister-state text-left pt-3">
             <strong> Minister of State </strong>{this.props.minister_state}
          </div>
          
        </div>
      </div>
      </div>
    )
  }
}

export default FirstInfo





  
  
  