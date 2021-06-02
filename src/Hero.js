import React, {useState} from 'react'
import Names from './Names'
import NameList from './NameList'
import Chores from './Chores'
import ChoreList from './ChoreList'

const Hero = () => {

    const [names, setNames] = useState([]);
    const [chores, setChores] = useState([]);

    return (

        <div className="hero-container">
            <div className="names-container">
                <Names names={names} setNames={setNames}/>
                <NameList names={names} setNames={setNames}/>
            </div>
            <div className="chores-container">
                <Chores chores={chores} setChores={setChores}/>
                <ChoreList chores={chores} setChores={setChores}/>
            </div>
        </div>
    )
}

export default Hero
