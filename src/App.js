import React from 'react'
import './App.css'
import { Button,Modal } from 'react-bootstrap'
import axios from 'axios'
import Ministries from './component/ministries/ministries';

class App extends React.Component {
  constructor(){
         super();
         this.state = {
             showHide : false,
             name: "",
             minister: "",
             minister_state: "",
             origin: "",
             address: "",
             website: ""
         }
         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
         this.handleModalShowHide = this.handleModalShowHide.bind(this)
     }
     handleModalShowHide() {
         this.setState({ showHide: !this.state.showHide })
     }
     handleChange(e){
       this.setState({
         [e.target.name]: e.target.value
       })
     }
     handleSubmit(e){
       const {name, minister, minister_state, origin, address, website} = this.state
       e.preventDefault()
       axios.post("https://ministries.herokuapp.com/ministries/",{
         name,
         minister,
         minister_state,
         origin,
         address,
         website
       }).then(res => {
         console.log(res)
         this.handleModalShowHide()
       }).catch(error => {
         console.log(error)
       })
     }
  render() {
    return(
     <div className="App">
       <div >
       <h2 className="text-center header m-4">Ministries and Federal Parastatals</h2>
       </div>
        <div className="text-center">
          <Button variant="success ml-4" onClick={() => this.handleModalShowHide()}>
                    Add New Ministry
                 </Button> </div>
         <div>
                 <Modal show={this.state.showHide}>
                     <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                       <Modal.Title>Adding New Ministries</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                       <form>
                           <div class="form-group">
                               <label for="name">Name:</label>
                               <input type="name" 
                               class="form-control" 
                               placeholder="Name" 
                               name="name" 
                               onChange={this.handleChange} 
                               value={this.state.name}/>
                             </div>
                             <div class="form-group">
                               <label for="minister">Minister:</label>
                                 <input type="minister" 
                                 class="form-control"  
                                 name="minister"
                                 onChange={this.handleChange} 
                                 value={this.state.minister}/>
                                 </div>
                                   <div class="form-group">
                               <label for="MOS">Minister of state:</label>
                                 <input type="text" 
                                 class="form-control" 
                                 name="minister_state" 
                                 onChange={this.handleChange} 
                                 value={this.state.ministerState}
                               />
                                 </div>
                                   <div class="form-group">
                               <label for="origin">Origin:</label>
                                 <input type="text" 
                                 class="form-control"  
                                 placeholder="" 
                                 name="origin" 
                                 onChange={this.handleChange} 
                               value={this.state.origin}
                               />
                                 </div>
                                   <div class="form-group">
                               <label for="address">Address:</label>
                                 <input type="text" 
                                 class="form-control"  
                                 placeholder="" 
                                 name="address" 
                                 onChange={this.handleChange} 
                                 value={this.state.address}/>
                                 </div>
                                   <div class="form-group">
                               <label for="website">Website:</label>
                                 <input type="text" 
                                 class="form-control"  
                                 placeholder="" 
                                 name="website" 
                                 onChange={this.handleChange} 
                                 value={this.state.website}
                               />
                                 </div>
                                 </form>
                     </Modal.Body>
                     <Modal.Footer>
                     <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                         Close
                     </Button>
                     <Button type="submit" variant="primary" onClick={this.handleSubmit}>
                         Save Changes
                     </Button>
                     </Modal.Footer>
                 </Modal>
             </div>
       <Ministries/>
     </div>
    )
 }
 }
 export default App;