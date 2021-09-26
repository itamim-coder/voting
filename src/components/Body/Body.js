import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import Vote from '../Vote/Vote';
import './Body.css'

const Body = () => {
    const[persons , setPersons] = useState([]);
    const [vote , setVote] = useState([]);

    useEffect(() => {
        fetch('./person.JSON')
        .then(res => res.json())
        .then(data => setPersons(data)) 
    } ,[])

    const handleVote = (person) => {
       
        const newVote = [...vote , person];
        setVote(newVote)
    } 


    return (
        <div className="row">
            <div className="col-md-9 artist">
               
                {
                    persons.map(person => <Person 
                        key = {person.id}
                        person={person}
                        handleVote ={handleVote}
                        ></Person>
                        )
                }
            </div>
            <div className="col-md-3">
               <Vote vote={vote}></Vote>
            </div>
        </div>
    );
};

export default Body;