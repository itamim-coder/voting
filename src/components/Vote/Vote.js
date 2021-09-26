import React from 'react';

const Vote = (props) => {
   
    const {vote} = props;
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
        <div>
            <h2 className="mt-3">Vote Summary</h2>
            <hr />

            <h5>Total Curriency Spent : {total}</h5>
            <h5>Voted Star : {name}  </h5>  
            

        </div>
    );
};

export default Vote;