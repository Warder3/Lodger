import React, { useState } from 'react'


const Names = ({names, setNames}) => {

    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        console.log(names)
    }

    const submit = () => {
        if (names.length > 9) {
            alert('Sorry, it seems you have too many roommates for me to handle.')
        }
        if (names.some(item => item.name == name)) {
            alert(`It seems that you two ${name}'s . Differentiate them by using their last names.`)
        }

        else {
            setNames([...names, {name: name, key: name }])
            
        }
    }

    return (
        
        <div id="roommateContainer">
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
