import React from 'react';
import './Person.css'

const Person = (props) => {
    // console.log(props)
    const {image , name, occupation, instruments, maxDuration, showCost} = (props.person)
    return (
        <div >
           <div className="row  g-4">
  <div className=" g-5">
    <div className="card h-100">
      <div>
     <img className="image" src={image} alt=""  />
      </div>
      <div class="card-body">
        <h5 class="card-title">Name : {name}</h5>
        <p class="card-text "> <span class="fw-bold">Occupation :</span> {occupation} </p>
        <p class="card-text "> <span class="fw-bold">Instruments :</span> {instruments} </p>
        <p class="card-text "> <span class="fw-bold">Show Duration :</span> {maxDuration} </p>
        <p class="card-text "> <span class="fw-bold">Offer Amount :</span> {showCost} </p>
      </div>
      
      <button onClick={() => props.handleVote(props.person)}>Vote Now</button>
      
    </div>
  </div>

 
</div>
        </div>
    )
};

export default Person;