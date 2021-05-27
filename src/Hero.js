import React, {useState} from 'react'
import Names from './Names'
import List from './List'

const Hero = () => {

    const [names, setNames] = useState([]);

    return (

        <div>
            <Names names={names} setNames={setNames}/>
            <div>
                <List names={names} setNames={setNames}/>
            </div>
        </div>
    )
}

export default Hero
