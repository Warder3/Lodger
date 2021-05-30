import React, {useState} from 'react'
import Names from './Names'
import List from './List'

const Hero = () => {

    const [names, setNames] = useState([]);

    return (

        <div>
            <Names names={names} setNames={setNames}/>
            <List names={names} />
        </div>
    )
}

export default Hero
