import React, { Component } from 'react'
import './mainpage.css'
import FirstInfo from '../first info/first info'
import SecondInfo from '../second-info/second-info'


class Mainpage extends Component {
  render() {
    return (
      <div>
         
    <div>
   <FirstInfo
      name={this.props.item.name}
   minister= {this.props.item.minister}
   minister_state ={this.props.item.minister_state}
   
   />
   <SecondInfo
   address={this.props.item.address}
   web={this.props.item.website}/>
    </div>
    <div className="hr"><hr/></div>
      </div>
      
    )
  }
}
export default Mainpage




