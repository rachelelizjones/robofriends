import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    if (true) {
        throw new Error("NOOO!")
    }
    return (
        <div>
        {
        robots.map((user, i) => {
        return (<Card 
        key={robots[i].id} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email} 
        />
        )
    })}
    
        </div>
    )
}

// When doing a loop, we have to give the different component variations unique keys
// It should be something that doesn't change like index number, better as something like an ID number
export default CardList;