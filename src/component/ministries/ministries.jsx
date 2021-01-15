import React , {Component}from 'react'

import MainPage from '../mainPage/mainpage'
import axios from 'axios'



class Ministries extends Component {

  constructor(props){
    super(props)

    this.state ={
      details :[]
    }
  }
    
      componentDidMount (){
        axios.get('https://stark-plateau-72108.herokuapp.com/ministries/?format=json').then(res =>{
          const details = res.data
          console.log(details)
          this.setState ({
            details:details
          })
        }).catch(error=> {
          console.log(error)
        })
      }





    render(){
      return (
        <div>
          {
          this.state.details.map(item=> (
            <MainPage item = {item} key={item.id}/>
            
          ))
        }
        </div>
      )
    }
  
}

export default Ministries
