import React, { Component } from "react"

class EmptyList extends Component{

  render(){
    return(
      <div className='question-card shadow'>
        <h2 className='center-text'>This List is Empty...</h2>  
      </div>
    )
  }
}


export default EmptyList;