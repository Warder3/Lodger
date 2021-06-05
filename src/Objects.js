import React from 'react'

const Objects = ({names}) => {
    return (        
        <div className="object-content-container">
            {names.map(name => (
                <div key={name.key} className="object-content">
                    <p>{name.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Objects
