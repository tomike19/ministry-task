import React, { Component } from 'react'
import ShowMoreText from 'react-show-more-text'
import './second-info.css'


class SecondInfo extends Component {
  render() {
    return (
      <div >
        <ShowMoreText
    line ={1}
    more = {<><span className="show">Show More</span> <i class="fas fa-caret-down ml-1"></i></>}
    less= {<><span></span> <i class="fas fa-caret-up ml-1"></i> </>}
    className="content-css more-info"
    anchorClass= "my-anchor-css-class"
    onClick={this.executeClick}
    expand= {false}
    width={20}
    >

  
    <div className="MinisterAddress">
       Address:{this.props.address}
    </div>
<p className="MinisterAddress"> Web: <a href={this.props.web}> {this.props.web}</a></p>
    </ShowMoreText>
      </div>
    )
  }
}

export default SecondInfo

