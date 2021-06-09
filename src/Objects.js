import React, {useState} from 'react'

const Objects = ({names, chores, totalDifficulty}) => {

    return (        
        <div className="object-content-container">
            {names.map(name => (
                <div key={name.key} className="object-content">
                    <p className="object-name">{name.name}</p>
                    <p className="object-difficulty">{totalDifficulty}</p>
                </div>
            ))}
        </div>
    )
}

export default Objects
