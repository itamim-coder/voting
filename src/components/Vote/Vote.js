import React from 'react';

const Vote = (props) => {
   
    const {vote} = props;
    console.log(props.vote.length)
    let total = 0;
    let name = [];
    for (const person of vote) {
        console.log(person)
        total = total + person.showCost;
        name = [...name, <br />, person.name]
    //  if (person.name.includes([...name])){
    //     name = [...name, <br />, person.name]
    //  } else{
    //     name = [ <br />, person.name]
    //  }

    }
    return (
        <div className="vote">
            <h2 className="font">Vote Summary </h2>       
            <h3 > <span className="font">Vote Count </span> {vote.length}</h3>       
            <hr />

           
            <h5 > <span className="font">Total Curriency Spent :</span> $ {total}</h5>
            <h5 > <span className="font"> Voted Star :  </span> {name}  </h5>  
            

        </div>
    );
};

export default Vote;