import React, { useState } from 'react'


const Names = ({names, setNames}) => {

    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(names);
        setName('');
    }

    const submit = () => {
        setNames([...names, name])
    }

    return (
        
        <div>
            <p id="roommate"> Roommates:</p>
            <form id="form" onSubmit={handleSubmit}>``
                <input 
                    type="text"
                    placeholder="Jon Doe" 
                    autoComplete="off" 
                    value={ name }
                    onChange= {(e) => setName(e.target.value) } 
                    className="input-text" 
                    required 
                />
                <input 
                    onClick={ submit } 
                    type="submit" 
                    value="+" 
                    className="input-button"
                />
            </form>
            
        </div>

    )
    
}

export default Names
