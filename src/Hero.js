import React, {useState} from 'react'
import Names from './Names'
import NameList from './NameList'
import Chores from './Chores'
import ChoreList from './ChoreList'
import PaginationBar from './PaginationBar'

const Hero = () => {

    const [names, setNames] = useState([]);
    const [chores, setChores] = useState([]);

    const [currPage, setCurrPage] = useState(1);
    const [choresPerPage, setChoresPerPage] = useState(13);
    const lastChoreIndex = currPage * choresPerPage;
    const firstChoreIndex = lastChoreIndex - choresPerPage;
    const currChores = chores.slice(firstChoreIndex, lastChoreIndex)


    return (

        <div className="hero-container">
            <div className="names-container">
                <Names names={names} setNames={setNames}/>
                <NameList names={names} setNames={setNames}/>
            </div>
            <div className="chores-container">
                <Chores chores={chores} setChores={setChores}/>
                <ChoreList chores={currChores} setCurrPage={setCurrPage} setChores={setChores}/>
                <PaginationBar chores={chores} currPage={currPage} setCurrPage={setCurrPage} choresPerPage={choresPerPage}/>
            </div>            
        </div>
    )
}

export default Hero
