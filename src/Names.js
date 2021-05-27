import React, { useState } from 'react'
import List from './List'


const Names = ({names, setNames}) => {

    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(names);
    }

    return (
        
        <div>
            <p id="roommate"> Roommates:</p>
            <form onSubmit={handleSubmit}>``
                <input type="text" placeholder="Jon Doe" autoComplete="off" value={ name }
                onChange={(e) => setName(e.target.value) } className="input-text" required />
                
                
                <input onClick={() => setNames([...names, name])} type="submit" value="+" className="input-button"/>
            </form>
        </div>

    )
    
}

export default Names
