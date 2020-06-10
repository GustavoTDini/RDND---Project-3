import React from "react"

// This component have no props or methods, so I decide to create as a Functional Component
const EmptyList = () =>{
    return(
      <div className='question-card shadow'>
        <h2 className='center-text'>
          <p>404 - Sorry, Question Not Found!!</p>
          <p>Would you rather try again??</p>
        </h2>   
      </div>
    )
  }


export default EmptyList;


