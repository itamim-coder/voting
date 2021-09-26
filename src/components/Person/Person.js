import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons';

import './Person.css'

const Person = (props) => {
    // console.log(props)
    const {image , name, occupation, instruments, maxDuration, showCost} = (props.person);
    const element = <FontAwesomeIcon icon={faUserPlus} />

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
        <p class="card-text "> <span class="fw-bold">Demand Amount :</span> ${showCost} </p>
      </div>
      
      <button className="button" onClick={() => props.handleVote(props.person)}>{element}Vote Now</button>
      
    </div>
  </div>

 
</div>
        </div>
    )
};

export default Person;