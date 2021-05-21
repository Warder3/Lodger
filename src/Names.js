import React, { useState } from 'react'


const Names = () => {
    const names = [];

    const [name, setName] = useState([]);
    
    const submit = (e) => {
        setName(e.target.value)
        names.append(name)
        console.log(names)
    }
    
    return (
        <div>
            <p id="roommate"> Roommates:</p>
            <form>
                <input type="text" placeholder="Jon Doe" autoComplete="off" className="input-text" required />
                <input type="submit" value="+" className="input-button"></input>
            
            </form>
            <div className="names">
                
            </div>
        </div>
    )
}

export default Names
